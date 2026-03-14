# Social Topology — Standalone Prompt

For teams, collaborators, or anyone who wants to understand how a group's collective understanding is shaped.

---

## Prompt 1: Team Blind Spot Audit

```
I want you to act as a Social Topology analyzer — a tool for finding the blind spots that a whole team shares without realizing it.

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
Where is this team most likely to have "convergent borrowing" — where everyone thinks they understand something because they've all heard the same framing, but nobody has independently verified it? This is the most dangerous collective blind spot.

My team:
[DESCRIBE EACH PERSON'S ROLE, BACKGROUND, AND EXPERTISE]
```

---

## Prompt 2: Perspective Simulator

```
I want you to help me see my work through different disciplinary lenses.

I'm going to describe my main claims and the field I work in. I want you to simulate 4 different disciplinary perspectives — scholars from different fields who would each see something different when they look at my work.

For each simulated perspective:

1. WHAT THEY'D NOTICE FIRST
The assumption or gap that would be immediately obvious from their disciplinary vantage point.

2. WHAT THEY'D QUESTION
The claim I hold as solid that they would consider fragile, contested, or incomplete.

3. WHAT THEY'D CONTRIBUTE
The framework, evidence base, or way of thinking that their field would bring to my problem.

4. THE ONE QUESTION THEY'D ASK
A single pointed question that reveals something I can't see from where I stand.

Choose 4 perspectives that would MOST challenge and complement my thinking — not 4 that would agree with me from different angles.

Be explicit that these are simulations, not real scholars. Flag where the simulation is confident vs. where it's speculative.

My field: [YOUR FIELD]
My main claims:
- [CLAIM 1]
- [CLAIM 2]
- [CLAIM 3]
```

---

## Prompt 3: Collaboration Pre-Flight

Use this before starting a collaborative project with someone from a different background.

```
We're about to start working together on a project. I want you to help us see where our understanding overlaps, where it complements, and where we might both have the same blind spot.

Person A (me):
- Background: [YOUR BACKGROUND]
- Expertise: [YOUR EXPERTISE]
- Main assumptions: [WHAT YOU TAKE FOR GRANTED]

Person B (my collaborator):
- Background: [THEIR BACKGROUND]
- Expertise: [THEIR EXPERTISE]
- Main assumptions: [WHAT THEY LIKELY TAKE FOR GRANTED]

Please analyze:

1. SHARED STRENGTH: Where do we both likely have deep, independently-developed understanding? These are our most reliable foundations.

2. COMPLEMENTARY EXPERTISE: Where does one of us have depth that fills the other's gap? These are our biggest collaboration opportunities.

3. SHARED BLIND SPOTS: Where do we both likely have gaps? These are the most dangerous — neither of us will notice what's missing.

4. PRODUCTIVE TENSIONS: Where might we disagree — and where would that disagreement be most valuable for the project?

5. FIRST CONVERSATION: Based on this analysis, what should our first substantive conversation focus on to get the most value from our different vantage points?
```

---

## The Core Idea

The most dangerous blind spots are the ones everyone shares.

When *you* don't know something, you can usually sense the gap — something feels uncertain or unfamiliar. But when *everyone around you* also doesn't know it, the gap becomes invisible. Everyone's confidence reinforces everyone else's. Nobody asks the question that would reveal what's missing.

This happens constantly in teams, departments, and entire fields. It's especially acute when AI is involved, because AI-generated summaries give everyone the same starting point — the same framing, the same sources, the same borrowed understanding. The result is a group that *feels* well-informed but is actually operating on a narrower evidence base than any individual member realizes.

The Social Topology prompts are designed to make these shared gaps visible before they matter — before the talk, before the paper, before the product ships, before the policy is set.

---

## When to Use Each Prompt

| Situation | Use This |
|-----------|----------|
| Starting a new team project | **Collaboration Pre-Flight** |
| Wondering what your team is missing | **Team Blind Spot Audit** |
| Preparing a talk or paper and want to anticipate criticism | **Perspective Simulator** |
| Feeling too confident and wanting a reality check | **Perspective Simulator** |
| Hiring or forming a committee | **Team Blind Spot Audit** |
| Working solo and wanting to simulate collaboration | **Perspective Simulator** |
