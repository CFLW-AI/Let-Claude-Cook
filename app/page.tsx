"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

// ─── Hooks ───────────────────────────────────────────────

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${
        delay ? `reveal-delay-${delay}` : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Terrain Visualization ───────────────────────────────

function TerrainVisualization() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <svg
        viewBox="0 0 800 500"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Robust — deep green contours (bottom-left peak) */}
        <g style={{ animation: "contour-drift 8s ease-in-out infinite" }}>
          <path
            d="M80,380 Q120,340 180,350 Q240,360 260,320 Q280,280 240,260 Q200,240 160,270 Q120,300 80,310 Z"
            fill="none"
            stroke="#059669"
            strokeWidth="1.2"
            style={{ animation: "contour-pulse 6s ease-in-out infinite" }}
          />
          <path
            d="M100,370 Q140,335 190,345 Q240,355 255,325 Q270,295 235,275 Q200,255 170,280 Q135,305 100,320 Z"
            fill="none"
            stroke="#059669"
            strokeWidth="0.8"
            style={{ animation: "contour-pulse 6s ease-in-out 1s infinite" }}
          />
          <path
            d="M120,360 Q155,333 195,340 Q235,348 248,328 Q260,308 232,290 Q205,272 180,290 Q150,310 120,325 Z"
            fill="#059669"
            fillOpacity="0.04"
            stroke="#059669"
            strokeWidth="0.5"
          />
        </g>

        {/* Borrowed — purple contours (center-right) */}
        <g style={{ animation: "contour-drift-slow 10s ease-in-out 2s infinite" }}>
          <path
            d="M480,200 Q520,160 580,170 Q640,180 680,150 Q720,120 700,180 Q680,240 620,250 Q560,260 520,240 Q480,220 480,200 Z"
            fill="none"
            stroke="#7c3aed"
            strokeWidth="1.2"
            style={{ animation: "contour-pulse 7s ease-in-out 0.5s infinite" }}
          />
          <path
            d="M500,205 Q535,172 585,180 Q635,188 668,162 Q700,136 685,188 Q670,240 615,248 Q560,256 525,238 Q500,222 500,205 Z"
            fill="none"
            stroke="#7c3aed"
            strokeWidth="0.8"
            style={{ animation: "contour-pulse 7s ease-in-out 1.5s infinite" }}
          />
          <path
            d="M520,208 Q548,182 588,188 Q628,194 654,174 Q680,154 668,196 Q656,238 612,244 Q568,250 540,236 Q520,224 520,208 Z"
            fill="#7c3aed"
            fillOpacity="0.03"
            stroke="#7c3aed"
            strokeWidth="0.5"
          />
        </g>

        {/* Fragile — red contours (top-center, small) */}
        <g style={{ animation: "contour-drift 9s ease-in-out 1s infinite" }}>
          <path
            d="M320,100 Q350,70 400,80 Q450,90 460,120 Q470,150 430,160 Q390,170 350,150 Q320,135 320,100 Z"
            fill="none"
            stroke="#dc2626"
            strokeWidth="1"
            style={{ animation: "contour-pulse 5s ease-in-out 2s infinite" }}
          />
          <path
            d="M340,105 Q365,82 400,90 Q435,98 445,122 Q455,146 425,154 Q395,162 362,146 Q340,134 340,105 Z"
            fill="#dc2626"
            fillOpacity="0.03"
            stroke="#dc2626"
            strokeWidth="0.6"
          />
        </g>

        {/* Contested — amber contours (right side) */}
        <g style={{ animation: "contour-drift-slow 11s ease-in-out 3s infinite" }}>
          <path
            d="M650,320 Q690,290 730,300 Q770,310 780,350 Q790,390 750,400 Q710,410 680,390 Q650,370 650,320 Z"
            fill="none"
            stroke="#d97706"
            strokeWidth="1"
            style={{ animation: "contour-pulse 8s ease-in-out infinite" }}
          />
          <path
            d="M668,328 Q700,302 732,310 Q764,318 772,350 Q780,382 748,390 Q716,398 690,382 Q668,366 668,328 Z"
            fill="#d97706"
            fillOpacity="0.03"
            stroke="#d97706"
            strokeWidth="0.5"
          />
        </g>

        {/* Unexplored — gray dashed contours (scattered) */}
        <g style={{ animation: "contour-drift-slow 12s ease-in-out 4s infinite" }}>
          <path
            d="M200,140 Q240,110 290,130 Q340,150 320,180 Q300,210 250,200 Q200,190 200,140 Z"
            fill="none"
            stroke="#6b7280"
            strokeWidth="0.8"
            strokeDasharray="6 4"
            style={{ animation: "contour-pulse 9s ease-in-out 1s infinite" }}
          />
          <path
            d="M400,380 Q440,350 490,365 Q540,380 530,410 Q520,440 470,435 Q420,430 400,380 Z"
            fill="none"
            stroke="#6b7280"
            strokeWidth="0.6"
            strokeDasharray="4 3"
            style={{ animation: "contour-pulse 9s ease-in-out 3s infinite" }}
          />
        </g>

        {/* Bridge lines connecting regions */}
        <g opacity="0.15">
          <line
            x1="260"
            y1="280"
            x2="400"
            y2="150"
            stroke="#2563eb"
            strokeWidth="0.8"
            strokeDasharray="8 6"
          />
          <line
            x1="460"
            y1="130"
            x2="520"
            y2="195"
            stroke="#2563eb"
            strokeWidth="0.8"
            strokeDasharray="8 6"
          />
          <line
            x1="280"
            y1="310"
            x2="440"
            y2="390"
            stroke="#2563eb"
            strokeWidth="0.6"
            strokeDasharray="6 5"
          />
        </g>
      </svg>
    </div>
  );
}

// ─── Gap Experience ──────────────────────────────────────

function GapExperience() {
  const [step, setStep] = useState(0);
  const [confidence, setConfidence] = useState(70);

  const confidenceLabel =
    confidence < 30
      ? "Not very well"
      : confidence < 60
      ? "Somewhat"
      : confidence < 80
      ? "Pretty well"
      : "Very well";

  return (
    <div className="bg-surface rounded-2xl border border-border overflow-hidden">
      {step === 0 && (
        <div className="p-8 sm:p-12 gap-step">
          <h3 className="text-xl font-semibold mb-4 text-ink">
            Try something with me.
          </h3>
          <p className="text-ink-light leading-relaxed mb-6">
            The <strong className="text-ink">spacing effect</strong> is one of
            the most replicated findings in learning science. How well do you
            understand it?
          </p>
          <div className="mb-6">
            <div className="flex justify-between text-sm text-ink-muted mb-3">
              <span>Not at all</span>
              <span className="font-medium text-ink">{confidenceLabel}</span>
              <span>Deeply</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={confidence}
              onChange={(e) => setConfidence(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <button
            onClick={() => setStep(1)}
            className="px-6 py-3 bg-ink text-cream rounded-lg font-medium hover:bg-ink-light transition-colors cursor-pointer"
          >
            Continue
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="p-8 sm:p-12 gap-step">
          <div className="mb-6 p-6 bg-cream rounded-xl border border-border">
            <p className="text-sm text-ink-muted mb-2 font-medium">
              Here&apos;s a fluent explanation:
            </p>
            <p className="text-ink-light leading-relaxed">
              The spacing effect refers to the finding that learning is more
              effective when study sessions are spread out over time rather than
              massed together. Instead of cramming all at once, distributing
              practice across multiple sessions with gaps between them leads to
              stronger, more durable memory formation.
            </p>
          </div>
          <p className="text-ink-light mb-6">
            Does that match what you knew? Most people nod here. Now{" "}
            <strong className="text-ink">apply it:</strong>
          </p>
          <button
            onClick={() => setStep(2)}
            className="px-6 py-3 bg-ink text-cream rounded-lg font-medium hover:bg-ink-light transition-colors cursor-pointer"
          >
            Show me the real test
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="p-8 sm:p-12 gap-step">
          <div className="p-6 bg-accent-light/50 rounded-xl border border-accent/20 mb-6">
            <p className="text-sm text-accent font-medium mb-2">
              CONFRONTATION QUESTION
            </p>
            <p className="text-ink leading-relaxed">
              A hospital wants to improve surgical residents&apos; retention of
              rare emergency procedures they may encounter once a year. Using the
              principle behind the spacing effect, design their training
              schedule. What specific intervals would you recommend — and why
              would the optimal spacing be{" "}
              <em>different for motor skills versus declarative knowledge</em>?
            </p>
          </div>
          <p className="text-ink-light leading-relaxed mb-6">
            Take a moment. Try to answer. Not the definition — the{" "}
            <em>application</em>.
          </p>
          <button
            onClick={() => setStep(3)}
            className="px-6 py-3 bg-ink text-cream rounded-lg font-medium hover:bg-ink-light transition-colors cursor-pointer"
          >
            Show me what this means
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="p-8 sm:p-12 gap-step">
          <div className="mb-6">
            <p className="text-ink leading-relaxed mb-4">
              <strong>
                You rated your understanding at {confidence}/100.
              </strong>
            </p>
            <p className="text-ink-light leading-relaxed mb-4">
              If you could design that training schedule with specific intervals
              and explain why motor skills and declarative knowledge require
              different spacing — your understanding is{" "}
              <span className="font-mono text-robust font-bold">ROBUST</span>.
            </p>
            <p className="text-ink-light leading-relaxed mb-4">
              If you could say &quot;space it out more&quot; but struggled with the
              specifics — you&apos;ve just experienced the gap between{" "}
              <span className="font-mono text-borrowed font-bold">
                BORROWED
              </span>{" "}
              and genuine understanding.
            </p>
            <p className="text-ink-light leading-relaxed mb-6">
              Reading a fluent explanation <em>felt</em> like understanding. But
              understanding means you can take the principle to a place
              you&apos;ve never been and make it work there.
            </p>
          </div>
          <div className="p-6 bg-ink text-cream rounded-xl">
            <p className="font-medium mb-2">
              This is what the Epistemic Terrain Map makes visible.
            </p>
            <p className="text-cream/80 text-sm leading-relaxed">
              Not whether you can recite a concept — whether your understanding
              survives transfer to new territory. The gap you may have just felt
              is the gap these tools are designed to reveal, before it matters in
              the real world.
            </p>
          </div>
          <button
            onClick={() => {
              setStep(0);
              setConfidence(70);
            }}
            className="mt-6 px-4 py-2 text-sm text-ink-muted hover:text-ink transition-colors cursor-pointer"
          >
            Try again
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Example Probe Output ────────────────────────────────

function ExampleOutput() {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="bg-surface rounded-2xl border border-border overflow-hidden">
      <div className="p-8 sm:p-12">
        <p className="text-sm text-ink-muted mb-2 font-medium">
          EXAMPLE PROBE OUTPUT
        </p>
        <h3 className="text-xl font-semibold mb-2 text-ink">
          Claim: &quot;AI will make traditional expertise less valuable&quot;
        </h3>
        <p className="text-ink-light text-sm mb-8">
          Here&apos;s what the Epistemic Probe reveals about this common claim.
        </p>

        {/* Uncertainty Texture Map */}
        <div className="space-y-3 mb-8">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 mt-0.5 inline-block px-2 py-0.5 rounded text-xs font-mono font-bold bg-robust/10 text-robust border border-robust/20">
              ROBUST
            </span>
            <p className="text-sm text-ink-light">
              AI accelerates routine task completion across knowledge work
              domains. Replicated in legal, medical, and software contexts.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 mt-0.5 inline-block px-2 py-0.5 rounded text-xs font-mono font-bold bg-fragile/10 text-fragile border border-fragile/20">
              FRAGILE
            </span>
            <p className="text-sm text-ink-light">
              &quot;Less valuable&quot; holds for routine expertise but reverses
              for adaptive expertise. Experts who can reframe problems become
              <em> more </em>valuable as AI handles the predictable.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 mt-0.5 inline-block px-2 py-0.5 rounded text-xs font-mono font-bold bg-contested/10 text-contested border border-contested/20">
              CONTESTED
            </span>
            <p className="text-sm text-ink-light">
              Whether expertise atrophies from AI use or deepens through
              augmentation depends on task design — evidence genuinely conflicts.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 mt-0.5 inline-block px-2 py-0.5 rounded text-xs font-mono font-bold bg-borrowed/10 text-borrowed border border-borrowed/20">
              BORROWED
            </span>
            <p className="text-sm text-ink-light">
              Most people citing this claim reference the same 2-3 sources.
              Primary evidence on expertise+AI interaction is thin — the
              confidence far exceeds the evidence base.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 mt-0.5 inline-block px-2 py-0.5 rounded text-xs font-mono font-bold bg-unexplored/10 text-unexplored border border-unexplored/20">
              UNEXPLORED
            </span>
            <p className="text-sm text-ink-light">
              What happens to expertise development in fields where AI arrives
              before a robust expert community exists? No studies found.
            </p>
          </div>
        </div>

        {showFull && (
          <div className="gap-step">
            {/* Bridge Detection */}
            <div className="mb-8 p-6 bg-cream rounded-xl border border-border">
              <p className="text-sm text-accent font-medium mb-3">
                BRIDGE DETECTED
              </p>
              <p className="text-sm text-ink-light leading-relaxed mb-2">
                <strong className="text-ink">Education × Aviation Safety:</strong>{" "}
                &quot;Deskilling through automation&quot; in aviation (pilots
                losing manual flying skills after years of autopilot) maps
                directly onto &quot;expertise atrophy through AI&quot; in
                knowledge work. Same mechanism, same dose-response pattern, 40
                years more evidence.
              </p>
              <span className="inline-block px-2 py-0.5 rounded text-xs font-mono font-bold bg-robust/10 text-robust border border-robust/20">
                LOAD-BEARING
              </span>
            </div>

            {/* Confrontation Question */}
            <div className="mb-8 p-6 bg-accent-light/30 rounded-xl border border-accent/10">
              <p className="text-sm text-accent font-medium mb-3">
                CONFRONTATION QUESTION
              </p>
              <p className="text-sm text-ink-light leading-relaxed">
                A medical school is debating whether to give residents AI
                diagnostic tools from day one. Proponents say it will let them
                handle more cases faster. Using what you know about expertise
                development, when would AI augmentation{" "}
                <em>accelerate</em> skill development and when would it{" "}
                <em>prevent</em> it? Design a policy that accounts for both.
              </p>
              <p className="text-xs text-ink-muted mt-3">
                <strong>What this tests:</strong> Whether you understand the
                mechanism behind expertise atrophy (not just the headline), and
                whether you can identify the inflection point where AI shifts
                from scaffolding to substitution.
              </p>
            </div>

            {/* Honest Assessment */}
            <div className="p-6 bg-ink text-cream rounded-xl">
              <p className="text-sm font-medium mb-2">HONEST ASSESSMENT</p>
              <p className="text-sm text-cream/80 leading-relaxed">
                You probably don&apos;t know you don&apos;t know this: the claim
                &quot;AI will make expertise less valuable&quot; assumes a static
                definition of expertise. But the most interesting question is
                whether AI changes <em>what counts as expertise</em> — shifting
                it from recall and pattern-matching (where AI excels) to
                problem-framing and judgment under ambiguity (where humans
                remain essential). The claim might be true <em>and</em>{" "}
                misleading at the same time.
              </p>
            </div>
          </div>
        )}

        <button
          onClick={() => setShowFull(!showFull)}
          className="mt-6 px-6 py-3 bg-ink text-cream rounded-lg font-medium hover:bg-ink-light transition-colors cursor-pointer"
        >
          {showFull
            ? "Collapse"
            : "See bridges, confrontation questions, and honest assessment"}
        </button>
      </div>
    </div>
  );
}

// ─── Prompt Cards ────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="px-4 py-2 bg-ink text-cream rounded-lg text-sm font-medium hover:bg-ink-light transition-colors cursor-pointer"
    >
      {copied ? "Copied!" : "Copy Prompt"}
    </button>
  );
}

function PromptCard({
  title,
  subtitle,
  description,
  prompt,
  color,
}: {
  title: string;
  subtitle: string;
  description: string;
  prompt: string;
  color: string;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-surface rounded-2xl border border-border overflow-hidden">
      <div className="p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${color}`}
            >
              {subtitle}
            </span>
            <h3 className="text-2xl font-semibold text-ink">{title}</h3>
          </div>
        </div>
        <p className="text-ink-light leading-relaxed mb-6">{description}</p>
        <div className="flex gap-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-cream transition-colors cursor-pointer"
          >
            {expanded ? "Hide Prompt" : "View Prompt"}
          </button>
          <CopyButton text={prompt} />
        </div>
      </div>
      {expanded && (
        <div className="border-t border-border bg-cream/50 p-8">
          <pre className="whitespace-pre-wrap text-sm text-ink-light font-mono leading-relaxed">
            {prompt}
          </pre>
        </div>
      )}
    </div>
  );
}

// ─── Prompts ─────────────────────────────────────────────

const PROBE_PROMPT = `I want you to act as an Epistemic Probe — a tool for mapping the shape of my understanding, not just confirming what I think I know.

I'm going to give you a claim I believe. I want you to do five things:

1. CROSS-DISCIPLINARY EVIDENCE SEARCH
Search for evidence related to my claim across at least 3 different academic disciplines. Don't just stay in the obvious field. If my claim is about education, also check cognitive science, economics, organizational behavior, neuroscience, or health. The goal is to see what my claim looks like from vantage points I might not have considered.

2. BRIDGE DETECTION
Look for "structural isomorphisms" — places where a different field has discovered the same underlying pattern my claim describes, but uses completely different vocabulary. For example, "cognitive offloading" in education is the same deep pattern as "automation complacency" in aviation. If you find a bridge, tell me:
- What both fields found
- What vocabulary each uses
- The shared structure underneath
- Whether it's genuinely deep (load-bearing) or just a surface similarity (decorative)

3. UNCERTAINTY TEXTURE MAP
For each facet of my claim, assign one of these textures:
- ROBUST: Tested across contexts, multiple independent sources, survived counterevidence
- CONTESTED: Evidence is genuinely in tension; reasonable people disagree
- FRAGILE: True in one context but breaks in another (different population, different timescale, different setting)
- BORROWED: I can probably state this claim because I read it somewhere, but I haven't engaged with the primary evidence myself
- UNEXPLORED: My claim implies something about this facet, but nobody seems to have examined it

Present this as a structured map showing which parts of my understanding are solid and which aren't.

4. CONFRONTATION QUESTIONS
Generate 3 transfer questions that test whether I truly understand the PRINCIPLE behind my claim, not just its surface statement. Each question should:
- Place my claim's core principle in a domain I didn't mention
- Require reasoning from the principle (not recall)
- Have a non-obvious answer
- Include a note on what a strong vs. weak answer would reveal about depth of understanding

These should be genuinely interesting problems, not quiz questions.

5. HONEST ASSESSMENT
Tell me plainly: what do I probably not know I don't know about this topic? What's in the blank spaces of my map? What question am I not asking that I should be?

My claim:`;

const BRIDGE_PROMPT = `I want you to act as a Bridge Atlas — a tool for discovering invisible connections between fields of knowledge.

Different academic disciplines constantly discover the same deep pattern independently, describe it in different vocabulary, and never learn from each other. I want you to find these hidden bridges.

I'm going to give you two fields (or let you choose high-potential pairs). For each pair:

1. DEEP SAMPLING
Search each field independently for its core mechanisms, recurring findings, and frameworks. Do NOT use one field's vocabulary when searching the other — search in each field's native terms.

2. STRUCTURAL COMPARISON
Compare what you found — not at the keyword level, but at the structural level. Look for:
- MECHANISM BRIDGES: Same causal process, different domain
- FAILURE MODE BRIDGES: Same way things break, different system
- DESIGN PRINCIPLE BRIDGES: Same solution pattern, different problem
- REVERSAL BRIDGES: Same expertise-reversal or dose-response pattern, different variable
- MEASUREMENT BRIDGES: Same measurement illusion, different field

3. QUALITY ASSESSMENT
For each bridge, be ruthlessly honest:
- LOAD-BEARING: The parallel is almost certainly real. Crossing this bridge generates testable predictions.
- PROMISING: Compelling structural match, but not yet tested across domains.
- DECORATIVE: Surface similarity that breaks down under scrutiny. Be honest about these.

4. BRIDGE HYPOTHESES
For each load-bearing or promising bridge, generate a testable prediction:
"If this bridge is real, then we should expect to find [specific prediction]. Here's how you'd test it."

5. WHAT CROSSING THE BRIDGE REVEALS
For each bridge, tell me: what would I see differently about Field A if I looked at it through Field B's lens?

Field A:
Field B:`;

const BLINDSPOT_PROMPT = `I want you to help me find my blind spots — not what I'm wrong about, but what I'm not even looking at.

I'm going to describe my area of work and the claims I'm most confident about. I want you to:

1. MISSING DISCIPLINES
What fields have relevant findings about my topic that I probably haven't encountered? Don't just name them — tell me specifically what they've found that would change how I see my own claims.

2. UNASKED QUESTIONS
What questions am I not asking that I should be? Not gotcha questions — genuinely important questions that my framing is causing me to overlook.

3. POPULATION BLIND SPOTS
Who am I probably not thinking about? If my claims are based on studies of university students in wealthy countries, what would change if we looked at different populations, ages, cultures, or economic contexts?

4. TIMESCALE BLIND SPOTS
Am I making claims about the long term based on short-term evidence? Or vice versa? Where does the timescale of my evidence not match the timescale of my claims?

5. THE UNCOMFORTABLE QUESTION
Ask me the single question about my own work that I probably least want to hear. Not to be adversarial — because it's the question that would most improve my understanding if I sat with it honestly.

My area of work:

My most confident claims:
-
-
-`;

const TOPOLOGY_PROMPT = `I want you to act as a Social Topology analyzer — a tool for finding the blind spots that a whole team shares without realizing it.

I'm going to describe my team's composition. I want you to:

1. MODEL EACH ROLE'S LIKELY EXPERTISE
Based on typical training and professional focus, what does each person on this team probably understand deeply? What do they probably not think about?

2. FIND THE OVERLAPS
Where does expertise overlap across multiple team members? This might be a strength (deep collective understanding) or an echo chamber (everyone confirms each other without independent verification).

3. FIND THE GAPS
Where does nobody on the team likely have deep understanding? These are the collective blind spots — the places where the team doesn't know what it doesn't know.

4. FIND THE COMPLEMENTARY PAIRS
Which team members have expertise that fills each other's gaps? Who should be talking to whom about what?

5. WHAT'S MISSING FROM THE ROOM
What perspective or discipline is entirely absent from this team? If the team could add one role or consult one type of expert, who would most change the quality of their collective understanding?

6. THE CONVERGENCE WARNING
Where is this team most likely to have "convergent borrowing" — where everyone thinks they understand something because they've all heard the same framing, but nobody has independently verified it?

My team:`;

// ─── Main Page ───────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ─── Hero with Terrain Visualization ─── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <TerrainVisualization />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
          <Reveal>
            <p className="text-sm font-mono text-ink-muted mb-4 tracking-wide uppercase">
              The Epistemic Terrain Map
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-ink mb-6 leading-[1.05]">
              Let Claude
              <br />
              Cook
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-xl text-ink-light leading-relaxed mb-10 max-w-xl">
              Tools for mapping the shape of your understanding — where
              it&apos;s solid, where it&apos;s thin, where it&apos;s borrowed,
              and where it&apos;s absent in ways you haven&apos;t noticed.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="flex flex-wrap gap-3">
              <a
                href="#experience"
                className="px-6 py-3 bg-ink text-cream rounded-lg font-medium hover:bg-ink-light transition-colors"
              >
                Experience It
              </a>
              <a
                href="#tools"
                className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-surface transition-colors"
              >
                Get the Prompts
              </a>
              <a
                href="https://github.com/CFLW-AI/Let-Claude-Cook"
                className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-surface transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── The Problem ─── */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <Reveal>
          <div className="bg-surface rounded-2xl border border-border p-8 sm:p-12">
            <h2 className="text-2xl font-semibold mb-6">The Problem</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              AI makes it incredibly easy to sound like you understand
              something. You ask a question, get a fluent answer back, and walk
              away feeling informed. But what actually happened?
            </p>
            <p className="text-ink-light leading-relaxed mb-4">
              You watched understanding happen <em>nearby</em>. You didn&apos;t
              build it yourself.
            </p>
            <p className="text-ink leading-relaxed font-medium text-lg">
              The gap between feeling like you understand and actually
              understanding is the central epistemic crisis of this era. And
              it&apos;s invisible — you can&apos;t see your own blind spots.
              That&apos;s what makes them blind spots.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ─── Feel the Gap ─── */}
      <section id="experience" className="max-w-3xl mx-auto px-6 py-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-3">Feel the Gap</h2>
          <p className="text-ink-light mb-10 text-lg">
            Don&apos;t take our word for it. Experience it.
          </p>
        </Reveal>
        <Reveal delay={1}>
          <GapExperience />
        </Reveal>
      </section>

      {/* ─── The Four Layers ─── */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-3">The Epistemic Terrain Map</h2>
          <p className="text-ink-light mb-12 text-lg">
            Four layers, each seeing something the previous layers can&apos;t.
          </p>
        </Reveal>

        <div className="space-y-8">
          {[
            {
              n: "1",
              title: "Epistemic Probe",
              tag: "Reactive / Claim-level",
              desc: "Maps individual understanding depth. You bring a claim, it shows you where your understanding is robust, fragile, borrowed, or completely unexplored.",
            },
            {
              n: "2",
              title: "Bridge Atlas",
              tag: "Generative / Structure-level",
              desc: "Discovers cross-disciplinary connections — places where different fields independently found the same deep pattern using different words.",
            },
            {
              n: "3",
              title: "Terrain Log",
              tag: "Persistent / Pattern-level",
              desc: "Accumulates results over time. Detects meta-patterns across sessions — chronic borrowing, fragility corridors, persistent blind spots.",
            },
            {
              n: "4",
              title: "Social Topology",
              tag: "Collective / System-level",
              desc: "Reveals shared blind spots across teams and groups. The most dangerous gaps are the ones everyone shares — because nobody knows to ask the question that would reveal them.",
            },
          ].map((layer, i) => (
            <Reveal key={layer.n} delay={i as 0 | 1 | 2 | 3}>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-light flex items-center justify-center text-accent font-bold">
                  {layer.n}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{layer.title}</h3>
                  <p className="text-ink-muted text-sm mb-2">{layer.tag}</p>
                  <p className="text-ink-light leading-relaxed">{layer.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Uncertainty Textures ─── */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-3">
            Understanding Isn&apos;t Binary
          </h2>
          <p className="text-ink-light mb-10 text-lg">
            These five textures describe the different ways you can relate to a
            claim.
          </p>
        </Reveal>
        <div className="grid gap-4">
          {[
            {
              name: "ROBUST",
              color: "bg-robust/10 text-robust border-robust/20",
              desc: "Tested across contexts. Multiple independent sources. Survived counterevidence. Understanding you can build on.",
            },
            {
              name: "CONTESTED",
              color: "bg-contested/10 text-contested border-contested/20",
              desc: "Evidence genuinely in tension. Reasonable people disagree. Holding this complexity honestly is depth, not confusion.",
            },
            {
              name: "FRAGILE",
              color: "bg-fragile/10 text-fragile border-fragile/20",
              desc: "True here but not there. Works for novices but not experts, or in the lab but not the field. Context-dependent.",
            },
            {
              name: "BORROWED",
              color: "bg-borrowed/10 text-borrowed border-borrowed/20",
              desc: "You can state this because you read it somewhere. You haven't tested it yourself. A starting point, not a foundation.",
            },
            {
              name: "UNEXPLORED",
              color: "bg-unexplored/10 text-unexplored border-unexplored/20",
              desc: "Your claims imply something about this territory, but nobody has examined it. The blank space on the map.",
            },
          ].map((t, i) => (
            <Reveal key={t.name} delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4}>
              <div className={`rounded-xl border p-5 ${t.color}`}>
                <span className="font-mono font-bold text-sm">{t.name}</span>
                <p className="mt-1 text-sm opacity-80">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Example Output ─── */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-3">What a Probe Reveals</h2>
          <p className="text-ink-light mb-10 text-lg">
            A real example of what happens when you run a claim through the
            Epistemic Probe.
          </p>
        </Reveal>
        <Reveal delay={1}>
          <ExampleOutput />
        </Reveal>
      </section>

      {/* ─── Tools / Prompts ─── */}
      <section id="tools" className="max-w-3xl mx-auto px-6 py-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-3">Use These Now</h2>
          <p className="text-ink-light mb-10 text-lg">
            Copy any prompt below into{" "}
            <a
              href="https://claude.ai"
              className="text-accent underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              claude.ai
            </a>{" "}
            and start exploring. No setup required.
          </p>
        </Reveal>
        <div className="space-y-6">
          <Reveal>
            <PromptCard
              title="Epistemic Probe"
              subtitle="Layer 1"
              description="Give it a claim you believe. It maps where your understanding is solid, where it's borrowed, where it's fragile, and where you've never even looked."
              prompt={PROBE_PROMPT}
              color="bg-accent-light text-accent"
            />
          </Reveal>
          <Reveal delay={1}>
            <PromptCard
              title="Bridge Atlas"
              subtitle="Layer 2"
              description="Give it two fields. It finds structural isomorphisms — places where both fields independently discovered the same deep pattern in different vocabulary."
              prompt={BRIDGE_PROMPT}
              color="bg-robust/10 text-robust"
            />
          </Reveal>
          <Reveal delay={2}>
            <PromptCard
              title="Blind Spot Check"
              subtitle="The Simplest Tool"
              description="Describe your work and your most confident claims. It tells you what you're not even looking at — missing disciplines, unasked questions, and the one question you least want to hear."
              prompt={BLINDSPOT_PROMPT}
              color="bg-fragile/10 text-fragile"
            />
          </Reveal>
          <Reveal delay={3}>
            <PromptCard
              title="Team Topology"
              subtitle="Layer 4"
              description="Describe your team. It finds shared blind spots, echo chambers, complementary expertise, and convergent borrowing."
              prompt={TOPOLOGY_PROMPT}
              color="bg-borrowed/10 text-borrowed"
            />
          </Reveal>
        </div>
      </section>

      {/* ─── The Story ─── */}
      <section id="story" className="max-w-3xl mx-auto px-6 py-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-8">How This Started</h2>
        </Reveal>
        <div className="space-y-4 text-ink-light leading-relaxed">
          <Reveal>
            <p className="text-lg">
              This project began with a question:{" "}
              <strong className="text-ink">
                &quot;What would you build if you had absolute freedom?&quot;
              </strong>
            </p>
          </Reveal>
          <Reveal>
            <p>
              It was asked during a working session on{" "}
              <a
                href="https://github.com/CFLW-AI/NovaLoop"
                className="text-accent underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                NovaLoop
              </a>
              , a system that autonomously synthesizes academic research across
              1,600+ sources every night. After weeks of building a machine that
              finds and connects knowledge, the question that emerged was
              different: not <em>finding</em> knowledge, but understanding the
              shape of what you know and don&apos;t know.
            </p>
          </Reveal>
          <Reveal>
            <p>
              The answer — the Epistemic Terrain Map — was designed and built in
              a single conversation between a human researcher and an AI. All
              four layers, from individual depth to collective topology.
            </p>
          </Reveal>
          <Reveal>
            <p>
              The name &quot;Let Claude Cook&quot; captures the philosophy: the
              best human-AI collaboration happens when both parties bring genuine
              capability and neither is just following instructions. The human
              brings the questions that matter, the interdisciplinary judgment,
              and the lived stakes. The AI brings pattern recognition at scales
              no human can hold simultaneously, and a willingness to be honest
              about uncertainty.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-ink font-medium text-lg">
              The bet: design the collaboration so carefully that both the human
              and the machine become more capable than either would be alone —
              and the human always retains the ability to know the difference.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── One Last Thing ─── */}
      <section className="max-w-3xl mx-auto px-6 py-20 pb-32">
        <Reveal>
          <div className="bg-ink text-cream rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl font-semibold mb-6">One Last Thing</h2>
            <p className="text-cream/80 leading-relaxed mb-4">
              The most important insight these tools can give you is one you
              already know but might not act on:
            </p>
            <p className="text-2xl font-medium leading-relaxed mb-6">
              The feeling of understanding is not the same as understanding.
            </p>
            <p className="text-cream/80 leading-relaxed mb-4">
              Every time you read an AI-generated summary and walk away feeling
              informed, ask yourself: Could I explain this to someone who would
              push back? Could I apply this principle in a context I&apos;ve
              never seen before? Could I tell you what evidence would change my
              mind?
            </p>
            <p className="text-cream/80 leading-relaxed">
              If not, you haven&apos;t understood it. You&apos;ve borrowed it.
              And that&apos;s okay — borrowed understanding is a starting point,
              not a failure. But it&apos;s important to know the difference.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-between items-center gap-4 text-sm text-ink-muted">
          <div>
            Built by{" "}
            <a
              href="https://intersections.ai"
              className="text-ink underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Michael Hanegan
            </a>{" "}
            &{" "}
            <span className="text-ink">Claude</span> (Opus 4.6)
          </div>
          <a
            href="https://github.com/CFLW-AI/Let-Claude-Cook"
            className="text-ink underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
