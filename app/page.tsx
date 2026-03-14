"use client";

import { useState } from "react";

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

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-ink mb-6 leading-[1.1]">
          Let Claude Cook
        </h1>
        <p className="text-xl text-ink-light leading-relaxed mb-8 max-w-2xl">
          Tools for mapping the shape of your understanding — where it&apos;s
          solid, where it&apos;s thin, where it&apos;s borrowed, and where
          it&apos;s absent in ways you haven&apos;t noticed.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#tools"
            className="px-6 py-3 bg-ink text-cream rounded-lg font-medium hover:bg-ink-light transition-colors"
          >
            Get the Prompts
          </a>
          <a
            href="#story"
            className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-surface transition-colors"
          >
            Read the Story
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
      </section>

      {/* The Problem */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-surface rounded-2xl border border-border p-8 sm:p-12">
          <h2 className="text-2xl font-semibold mb-6">The Problem</h2>
          <p className="text-ink-light leading-relaxed mb-4">
            AI makes it incredibly easy to sound like you understand something.
            You can ask an AI about any topic and get a fluent, confident answer
            back. You might walk away feeling like you understand it. But what
            actually happened?
          </p>
          <p className="text-ink-light leading-relaxed mb-4">
            You watched understanding happen <em>nearby</em>. You didn&apos;t
            build it yourself.
          </p>
          <p className="text-ink leading-relaxed font-medium">
            The gap between feeling like you understand and actually
            understanding is the central epistemic crisis of this era. And
            it&apos;s invisible — you can&apos;t see your own blind spots.
            That&apos;s what makes them blind spots.
          </p>
        </div>
      </section>

      {/* The Four Layers */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-3">The Epistemic Terrain Map</h2>
        <p className="text-ink-light mb-12 text-lg">
          Four layers, each seeing something the previous layers can&apos;t.
        </p>

        <div className="space-y-6">
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-light flex items-center justify-center text-accent font-bold text-sm">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Epistemic Probe</h3>
              <p className="text-ink-muted text-sm mb-1">Reactive / Claim-level</p>
              <p className="text-ink-light">
                Maps individual understanding depth. You bring a claim, it shows
                you where your understanding is robust, fragile, borrowed, or
                completely unexplored.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-light flex items-center justify-center text-accent font-bold text-sm">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Bridge Atlas</h3>
              <p className="text-ink-muted text-sm mb-1">Generative / Structure-level</p>
              <p className="text-ink-light">
                Discovers cross-disciplinary connections — places where different
                fields independently found the same deep pattern using different
                words.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-light flex items-center justify-center text-accent font-bold text-sm">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Terrain Log</h3>
              <p className="text-ink-muted text-sm mb-1">Persistent / Pattern-level</p>
              <p className="text-ink-light">
                Accumulates results over time. Detects meta-patterns across
                sessions — chronic borrowing, fragility corridors, persistent
                blind spots.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-light flex items-center justify-center text-accent font-bold text-sm">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Social Topology</h3>
              <p className="text-ink-muted text-sm mb-1">Collective / System-level</p>
              <p className="text-ink-light">
                Reveals shared blind spots across teams and groups. The most
                dangerous gaps are the ones everyone shares — because nobody
                knows to ask the question that would reveal them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Uncertainty Textures */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-3">Uncertainty Has Texture</h2>
        <p className="text-ink-light mb-10 text-lg">
          Understanding isn&apos;t binary. These five textures describe the
          different ways you can relate to a claim.
        </p>
        <div className="grid gap-4">
          {[
            {
              name: "ROBUST",
              color: "bg-robust/10 text-robust border-robust/20",
              desc: "Tested across contexts. Multiple independent sources. Survived counterevidence. This is understanding you can build on.",
            },
            {
              name: "CONTESTED",
              color: "bg-contested/10 text-contested border-contested/20",
              desc: "Evidence is genuinely in tension. Reasonable people disagree. Holding this complexity honestly is a sign of depth, not confusion.",
            },
            {
              name: "FRAGILE",
              color: "bg-fragile/10 text-fragile border-fragile/20",
              desc: "True in one context but breaks in another. Works for novices but not experts, or in the lab but not the field. Context-dependent.",
            },
            {
              name: "BORROWED",
              color: "bg-borrowed/10 text-borrowed border-borrowed/20",
              desc: "You can state this claim because you read it somewhere, but you haven't tested it yourself. A starting point, not a foundation.",
            },
            {
              name: "UNEXPLORED",
              color: "bg-unexplored/10 text-unexplored border-unexplored/20",
              desc: "Your claims imply something about this territory, but nobody has examined it. The blank space on the map. The most valuable thing to find.",
            },
          ].map((t) => (
            <div
              key={t.name}
              className={`rounded-xl border p-5 ${t.color}`}
            >
              <span className="font-mono font-bold text-sm">{t.name}</span>
              <p className="mt-1 text-sm opacity-80">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools / Prompts */}
      <section id="tools" className="max-w-3xl mx-auto px-6 py-16">
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
          and start exploring. No setup, no installation, no technical skill
          required.
        </p>
        <div className="space-y-6">
          <PromptCard
            title="Epistemic Probe"
            subtitle="Layer 1"
            description="Give it a claim you believe. It maps where your understanding is solid, where it's borrowed, where it's fragile, and where you've never even looked. Generates confrontation questions that test whether your understanding transfers to new contexts."
            prompt={PROBE_PROMPT}
            color="bg-accent-light text-accent"
          />
          <PromptCard
            title="Bridge Atlas"
            subtitle="Layer 2"
            description='Give it two fields. It finds structural isomorphisms — places where both fields independently discovered the same deep pattern in different vocabulary. Rates each bridge honestly: load-bearing, promising, or decorative.'
            prompt={BRIDGE_PROMPT}
            color="bg-robust/10 text-robust"
          />
          <PromptCard
            title="Blind Spot Check"
            subtitle="The Simplest Tool"
            description="Describe your area of work and your most confident claims. It tells you what you're not even looking at — missing disciplines, unasked questions, population and timescale gaps, and the one question you least want to hear."
            prompt={BLINDSPOT_PROMPT}
            color="bg-fragile/10 text-fragile"
          />
          <PromptCard
            title="Team Topology"
            subtitle="Layer 4"
            description="Describe your team. It finds shared blind spots, echo chambers, complementary expertise, and convergent borrowing — where everyone thinks they understand something because they all heard the same framing."
            prompt={TOPOLOGY_PROMPT}
            color="bg-borrowed/10 text-borrowed"
          />
        </div>
      </section>

      {/* The Story */}
      <section id="story" className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">How This Started</h2>
        <div className="prose prose-lg max-w-none space-y-4 text-ink-light leading-relaxed">
          <p>
            This project began with a question: <strong className="text-ink">&quot;What would you build if you had absolute freedom?&quot;</strong>
          </p>
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
          <p>
            The answer — the Epistemic Terrain Map — was designed and built in a
            single conversation between a human researcher and an AI. All four
            layers, from individual depth to collective topology.
          </p>
          <p>
            The name &quot;Let Claude Cook&quot; captures the philosophy: the best
            human-AI collaboration happens when both parties bring genuine
            capability and neither is just following instructions. The human
            brings the questions that matter, the interdisciplinary judgment, and
            the lived stakes. The AI brings pattern recognition at scales no
            human can hold simultaneously, and a willingness to be honest about
            uncertainty.
          </p>
          <p className="text-ink font-medium">
            The bet: design the collaboration so carefully that both the human
            and the machine become more capable than either would be alone — and
            the human always retains the ability to know the difference.
          </p>
        </div>
      </section>

      {/* One Last Thing */}
      <section className="max-w-3xl mx-auto px-6 py-16 pb-32">
        <div className="bg-ink text-cream rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl font-semibold mb-6">One Last Thing</h2>
          <p className="text-cream/80 leading-relaxed mb-4">
            The most important insight these tools can give you is one you
            already know but might not act on:
          </p>
          <p className="text-xl font-medium leading-relaxed mb-6">
            The feeling of understanding is not the same as understanding.
          </p>
          <p className="text-cream/80 leading-relaxed mb-4">
            Every time you read an AI-generated summary and walk away feeling
            informed, ask yourself: Could I explain this to someone who would
            push back? Could I apply this principle in a context I&apos;ve never
            seen before? Could I tell you what evidence would change my mind?
          </p>
          <p className="text-cream/80 leading-relaxed">
            If not, you haven&apos;t understood it. You&apos;ve borrowed it. And
            that&apos;s okay — borrowed understanding is a starting point, not a
            failure. But it&apos;s important to know the difference.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-between items-center gap-4 text-sm text-ink-muted">
          <div>
            Built by{" "}
            <a href="https://intersections.ai" className="text-ink underline" target="_blank" rel="noopener noreferrer">
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
