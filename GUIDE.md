# The Epistemic Terrain Map: A Guide for Humans

## What This Is (No Technical Background Required)

You know more than you think you do about some things. And you know less than you think you do about others. The problem is, you can't always tell which is which.

This is a set of tools designed to help you see the **shape of your own understanding** — where it's deep, where it's shallow, where you're relying on something you read once without really testing it, and where you have blind spots you've never noticed.

Think of it like a topographic map, but instead of showing mountains and valleys in the physical landscape, it shows mountains and valleys in what you *understand*. The peaks are where your knowledge is solid and tested. The valleys are where you think you know something but actually don't. And the blank spaces are where you've never even looked.

## Why This Matters Now

AI makes it incredibly easy to sound like you understand something. You can ask ChatGPT about cognitive load theory and get a fluent, confident paragraph back. You might walk away feeling like you understand cognitive load theory. But what actually happened? You watched understanding happen *nearby*. You didn't build it yourself.

This gap between **feeling like you understand** and **actually understanding** is getting wider every day. And it's invisible — you can't see your own blind spots. That's what makes them blind spots.

These tools make the invisible visible.

## The Four Tools (In Plain Language)

### 1. The Epistemic Probe — "How well do I really understand this?"

**What it does**: You give it a claim you believe — something like "AI helps students learn better" or "metacognition is the most important skill in the AI era." The Probe doesn't just check if you're right. It maps the *terrain* around your claim:

- Where is your understanding solid? (You've engaged with multiple sources, different methods, different contexts — it holds up.)
- Where is it borrowed? (You read this in one article and you're repeating it, but you haven't really tested it yourself.)
- Where is it fragile? (It's true in one context but falls apart in another — and you might not realize that.)
- Where have you never even looked? (There are implications of your claim that nobody has examined.)

It also does something I think is genuinely interesting: it generates **confrontation questions**. These aren't quiz questions. They're questions that take the principle behind your claim and drop it into a completely different context. If you can answer them, your understanding is real. If you can't, you've found a gap worth exploring.

**When to use it**: Before giving a talk. When writing a paper. When you notice yourself making confident claims and want to check if the confidence is earned.

---

### 2. The Bridge Atlas — "What fields are saying the same thing without knowing it?"

**What it does**: Different academic disciplines constantly discover the same thing independently, describe it in completely different words, and never learn from each other. The Bridge Atlas finds these invisible connections.

For example:
- Education researchers talk about **"cognitive offloading"** (students letting AI do their thinking)
- Aviation safety researchers talk about **"automation complacency"** (pilots trusting autopilot too much)
- Economists talk about **"moral hazard"** (people taking more risks when they're insured against consequences)

These are all the same underlying pattern: **when you delegate responsibility to an external system, you stop monitoring the thing you delegated, and your own capability atrophies.**

Three different fields. Three different vocabularies. Three different citation networks that never touch. One deep structural truth hiding underneath.

The Bridge Atlas finds these connections. It rates each one honestly — some are genuinely deep (what we call "load-bearing"), some are promising but untested, and some are just surface-level similarities that look good but don't hold up (we call those "decorative," and being honest about them matters).

**When to use it**: When you're working across disciplines. When you suspect two fields are talking past each other. When you want to find unexpected connections in your research.

---

### 3. The Terrain Log — "How is my understanding changing over time?"

**What it does**: The Probe and Atlas are powerful, but each run is a snapshot. The Terrain Log gives the system *memory*. It records every probe and atlas run, and over time, it starts seeing patterns that no single run could reveal:

- "You consistently have *borrowed* understanding in economics — you can state findings but you've never engaged with primary evidence."
- "Your understanding of AI scaffolding is solid for novice learners but falls apart every time it's tested against expert populations."
- "The institutional incentive structures behind AI adoption keep appearing as unexplored — this is a persistent blind spot."

It can also generate a **Terrain Report** — a full picture of your understanding across every discipline you work in. Think of it as a periodic check-up on your intellectual health.

**When to use it**: After running probes or atlas searches. When you want to see how your understanding has evolved. When you want an honest assessment of where your gaps are.

---

### 4. The Social Topology — "Where does our whole team share the same blind spot?"

**What it does**: Individual blind spots are personal limitations. But when an *entire group* shares the same blind spot, it becomes invisible — everyone confirms everyone else's borrowed understanding, and nobody asks the question that would reveal the gap.

The Social Topology makes collective blind spots visible. It can:

- **Compare terrains**: If two researchers share their terrain maps, they can instantly see where their understanding overlaps, where it complements, and where they both have the same gap that neither would notice alone.
- **Simulate perspectives**: Even with just one person's map, it can model what a cognitive scientist, an economist, or a policy researcher would see differently — surfacing assumptions you didn't know you were making.
- **Audit a team**: Describe your team's composition, and it predicts where expertise overlaps (possible echo chamber), where it complements (strength), and where nobody is watching (collective blind spot).

The core insight: **convergent borrowing is more dangerous than ignorance.** When nobody on a team knows something, they at least sense the gap. When everyone "knows" it because they all read the same AI-generated summary, the team has false confidence backed by zero independent verification. This is how fields build on foundations that aren't there.

**When to use it**: When forming a team. When starting a collaborative project. When you suspect your group might be operating on shared assumptions that nobody has tested.

---

## How to Use These Without Any Technical Setup

You don't need to install anything. You can use the core ideas behind these tools in any conversation with Claude (at claude.ai) by using the prompts in the `/prompts` folder. Just copy and paste them.

Here's the simplest version:

### Quick Epistemic Probe (copy this into any Claude conversation)

> I want you to act as an Epistemic Probe. I'm going to give you a claim I believe, and I want you to:
>
> 1. Search for evidence across at least 3 different disciplines (don't stay in the obvious one)
> 2. For each facet of my claim, tell me if my understanding is likely: ROBUST (tested across contexts), CONTESTED (evidence in tension), FRAGILE (true here but not there), BORROWED (I'm probably repeating something without testing it), or UNEXPLORED (implied by my claim but never examined)
> 3. Generate 3 confrontation questions — transfer problems that drop my claim's core principle into a completely different domain, where only genuine understanding would let me answer
> 4. Tell me honestly what I probably don't know I don't know about this topic
>
> My claim: [YOUR CLAIM HERE]

### Quick Bridge Detection (copy this into any Claude conversation)

> I want you to act as a Bridge Atlas. Take the following two fields and find structural isomorphisms — places where both fields have independently discovered the same deep pattern but use different vocabulary. Don't just find surface-level keyword matches. Find places where the same causal mechanism, failure mode, or design principle shows up in both fields, described in completely different words. Rate each bridge as LOAD-BEARING (genuinely deep), PROMISING (plausible but untested), or DECORATIVE (looks good but breaks down under scrutiny). Be ruthlessly honest about which is which.
>
> Field A: [FIRST FIELD]
> Field B: [SECOND FIELD]

### Quick Blind Spot Check (copy this into any Claude conversation)

> I'm going to describe my area of expertise and the claims I'm most confident about. I want you to tell me: what am I probably missing? Not what I'm wrong about — what I'm not even *looking* at. What questions am I not asking? What disciplines have relevant findings that I probably haven't encountered? Where is my confidence likely exceeding my evidence?
>
> My area: [YOUR AREA]
> My most confident claims: [YOUR CLAIMS]

---

## The Story Behind This

This project started with a question: "What would you build if you had absolute freedom?"

It was asked during a working session on NovaLoop, a system that automatically synthesizes academic research across 1,600+ sources every night. After weeks of building a machine that finds and connects knowledge, the question that emerged was about something different: not *finding* knowledge, but understanding the **shape** of what you know and don't know.

The answer — the Epistemic Terrain Map — was designed and built in a single conversation between a human researcher (Michael Hanegan) and an AI (Claude). The human brought the questions that matter, the interdisciplinary judgment, and the lived experience of working at the intersection of AI and learning. The AI brought pattern recognition across scales no human can hold simultaneously, and a willingness to be honest about uncertainty.

The name of the project — "Let Claude Cook" — captures the philosophy: the best human-AI collaboration happens when both parties bring genuine capability and neither is just following instructions. Not unguided. Not micromanaged. Something more like two different kinds of intelligence looking at the same problem from different angles.

The bet behind all of it: **design the collaboration so carefully that both the human and the machine become more capable than either would be alone — and the human always retains the ability to know the difference.**

---

## One Last Thing

The most important insight these tools can give you is one you already know but might not act on:

**The feeling of understanding is not the same as understanding.**

Every time you read an AI-generated summary and walk away feeling informed, ask yourself: could I explain this to someone who would push back? Could I apply this principle in a context I've never seen before? Could I tell you what evidence would *change my mind*?

If not, you haven't understood it. You've borrowed it. And that's okay — borrowed understanding is a starting point, not a failure. But it's important to know the difference.

That's what these tools are for.
