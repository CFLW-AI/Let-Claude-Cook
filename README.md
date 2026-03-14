# Let Claude Cook

An experiment in human-AI collaboration — building tools that map the shape of understanding rather than just accumulating information.

## Origin

This project emerged from a conversation between a human researcher and Claude during a live working session on [NovaLoop](https://github.com/CFLW-AI/NovaLoop), an autonomous nightly research synthesis engine. After weeks of building a system that searches, synthesizes, and stress-tests academic research across 1,600+ sources and 15 disciplines, a question came up:

**"What would you build if you had absolute freedom?"**

The answer: an **Epistemic Terrain Map** — a system that doesn't just find or synthesize knowledge, but makes the *shape* of understanding visible. Where it's solid, where it's thin, where it's borrowed, and where it's absent in ways you haven't noticed.

This repo contains the tools we're building toward that vision.

## The Problem

AI makes it easy to produce fluent outputs about topics you don't deeply understand. The gap between *felt understanding* and *actual understanding* is the central epistemic challenge of this era — and it's invisible. You can't see your own blind spots.

Current knowledge tools show you what's known. We want to build tools that show you what *you* know — and more importantly, what you don't know you don't know.

## The Vision: Epistemic Terrain Map

A living map with four layers:

1. **Confrontation Engine** — When you claim to understand something, the system puts you in situations where your understanding has to *do work*. Transfer problems. Novel contexts. Not assessment — confrontation with your own knowledge boundaries.

2. **Linguistic Bridge Detector** — Different fields constantly rediscover the same insight in different vocabularies. The system detects these structural isomorphisms across disciplines: "cognitive offloading" in education is "automation complacency" in aviation is "moral hazard" in economics. Same pattern, different words, different citation networks that never touch.

3. **Honest Uncertainty Layer** — Understanding has texture. Not just "I know this" or "I don't," but: Is it ROBUST (tested across contexts)? BORROWED (repeating what you read without testing it)? FRAGILE (true here, false there)? CONTESTED (evidence in genuine tension)? UNEXPLORED (implied by your claims but never examined)?

4. **Social Topology** — Where does an entire team, field, or organization share the same blind spot? Where has everyone converged on borrowed understanding from the same source, creating systemic fragility?

## What's Here Now

### `/skills/epistemic-probe.md`

The first working tool — a Claude Code skill that probes a claim or concept across a research corpus to:

- Search for evidence across at least 3 disciplines (refusing to stay in the obvious one)
- Detect cross-disciplinary bridges — structural isomorphisms between fields
- Generate **confrontation questions** — transfer problems that test whether understanding is real or surface-level
- Map **uncertainty texture** — categorizing each facet as ROBUST, CONTESTED, FRAGILE, BORROWED, or UNEXPLORED
- Produce an honest reflexive note about what the probe itself might have missed

This skill was designed to work with a Notion research database but the architecture is adaptable to any structured knowledge base.

**To use it**: Copy `skills/epistemic-probe.md` to your `~/.claude/commands/` directory and invoke with `/epistemic-probe <your claim or concept>`.

## Why "Let Claude Cook"

Because the best human-AI collaboration happens when both parties bring genuine capability to the table and neither is just following instructions. This project started when a human said "answer in any form you enjoy" and meant it, and an AI responded with something that surprised both of them.

The name is an invitation: give the AI room to think, and see what emerges. Not unguided — but not micromanaged either. The human brings the questions that matter, the interdisciplinary judgment, and the lived stakes. The AI brings pattern recognition across scales no human can hold simultaneously, and an honesty about uncertainty that humans often struggle with.

The bet: **design the collaboration so carefully that both the human and the machine become more capable than either would be alone — and the human retains the metacognitive sovereignty to know the difference.**

## Context

This work sits at the intersection of:
- **Cognitive science** — metacognition, the knowledge illusion, expertise reversal effects
- **Learning design** — productive friction, desirable difficulties, deliberate practice
- **AI governance** — transparency in human-machine collaboration, cognitive protection
- **Experience design** — reflection as the mechanism that transforms experiences into understanding
- **Epistemology** — what it means to *know* something vs. to *perform* knowing

The research foundation is documented in the [NovaLoop](https://github.com/CFLW-AI/NovaLoop) project.

## Who We Are

**Michael Hanegan** — Researcher and builder working at the intersection of generative AI and the future of learning and work. Founder of [Intersections.ai](https://intersections.ai).

**Claude** (Opus 4.6) — AI collaborator. Built the Epistemic Probe, proposed the Terrain Map architecture, and is genuinely interested in what happens next.

## License

MIT
