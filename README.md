# Let Claude Cook

An experiment in human-AI collaboration — building tools that map the shape of understanding rather than just accumulating information.

## Origin

This project emerged from a conversation between a human researcher and Claude during a live working session on [NovaLoop](https://github.com/CFLW-AI/NovaLoop), an autonomous nightly research synthesis engine. After weeks of building a system that searches, synthesizes, and stress-tests academic research across 1,600+ sources and 15 disciplines, a question came up:

**"What would you build if you had absolute freedom?"**

The answer: an **Epistemic Terrain Map** — a system that doesn't just find or synthesize knowledge, but makes the *shape* of understanding visible. Where it's solid, where it's thin, where it's borrowed, and where it's absent in ways you haven't noticed.

This repo contains the four layers of that system.

## The Problem

AI makes it easy to produce fluent outputs about topics you don't deeply understand. The gap between *felt understanding* and *actual understanding* is the central epistemic challenge of this era — and it's invisible. You can't see your own blind spots.

Current knowledge tools show you what's known. We want to build tools that show you what *you* know — and more importantly, what you don't know you don't know.

## The Epistemic Terrain Map

Four layers, each seeing something the previous layers can't:

```
Layer 1: EPISTEMIC PROBE    — Maps individual understanding depth
                               (reactive, claim-level)
              ↓
Layer 2: BRIDGE ATLAS        — Discovers cross-disciplinary connections
                               (generative, structure-level)
              ↓
Layer 3: TERRAIN LOG         — Accumulates over time, detects meta-patterns
                               (persistent, pattern-level)
              ↓
Layer 4: SOCIAL TOPOLOGY     — Compares across people/perspectives
                               (collective, system-level)
```

### Layer 1: Epistemic Probe (`/epistemic-probe`)

*Reactive — you bring a claim, it maps the terrain.*

Probes a claim or concept across a research corpus to test depth of understanding. Searches at least 3 disciplines (refusing to stay in the obvious one), detects cross-disciplinary bridges, generates **confrontation questions** that test whether understanding transfers to new contexts, and assigns **uncertainty textures** to each facet of the claim:

| Texture | Meaning |
|---------|---------|
| ROBUST | Tested across contexts, survived counterevidence |
| CONTESTED | Evidence genuinely in tension |
| FRAGILE | True here, false there |
| BORROWED | Can repeat it but haven't tested it |
| UNEXPLORED | Implied by your claims but never examined |

### Layer 2: Bridge Atlas (`/bridge-atlas`)

*Generative — it hunts for connections nobody asked about.*

Systematically discovers **structural isomorphisms** across disciplines: places where different fields have independently arrived at the same deep pattern using different vocabulary. Five bridge types:

- **Mechanism**: Same causal process, different domain
- **Failure Mode**: Same way things break, different system
- **Design Principle**: Same solution pattern, different problem
- **Reversal**: Same expertise/dose-response pattern, different variable
- **Measurement**: Same measurement illusion, different field

Each bridge is rated LOAD-BEARING, PROMISING, or DECORATIVE — with ruthless honesty about which is which. Every real bridge generates testable hypotheses.

### Layer 3: Terrain Log (`/terrain-log`)

*Persistent — gives the system memory.*

Records all Probe and Atlas results into a cumulative state file. Four modes:

- **LOG**: Record a probe or atlas run
- **DETECT**: Find meta-patterns across accumulated soundings (chronic borrowing, fragility corridors, texture migration)
- **REPORT**: Generate a full terrain report showing the evolving shape of understanding
- **BLINDSPOTS**: Surface the gaps you don't know you have

The state file (`terrain-state.json`) is portable JSON — shareable, comparable, and the foundation for Layer 4.

### Layer 4: Social Topology (`/social-topology`)

*Collective — reveals what no individual map can show.*

Compares terrain maps across people, teams, or simulated perspectives to surface:

- **Shared blind spots**: Where nobody has looked
- **Convergent borrowing**: Where everyone "knows" something because they all read the same summary — zero independent verification, maximum false confidence
- **Complementary expertise**: Who should talk to whom, about what
- **Monoculture risk**: Where a group's understanding is becoming dangerously uniform

Three modes:
- **Compare**: Load multiple terrain-state.json files and analyze the collective landscape
- **Simulate**: Model what different disciplinary perspectives would see when looking at your terrain
- **Team Audit**: Describe your team's composition and surface predicted collective blind spots

## The Feedback Cycle

The four layers form a self-reinforcing cycle:

```
Probe/Atlas → Log (record) → Detect (meta-patterns) → Report (terrain shape)
     ↑                                                        ↓
     ←←←←←←←←←←←← Recommended Expeditions ←←←←←←←←←←←←←←←←←

                    Social Topology
                         ↓
              Shared blind spots → targeted joint probes
              Complementary expertise → bridge sharing
              Monoculture warnings → deliberate divergence
```

Each run makes the next one smarter. Over time, the map becomes an increasingly detailed and honest picture of what you understand, how your understanding connects to others', and where everyone's map has the same blank space.

## Setup

Copy the skills to your Claude Code commands directory:

```bash
cp skills/*.md ~/.claude/commands/
```

The Terrain Log state file lives at `terrain-state.json` in this repo. For Social Topology comparisons, share your state file with collaborators and load theirs.

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

**Claude** (Opus 4.6) — AI collaborator. Designed the Epistemic Terrain Map architecture and built all four layers. Genuinely interested in what happens when people start comparing their terrains.

## License

MIT
