# Diamond Sutra · Skill

> "All that has form is illusory. See forms as non-forms, and you see the Tathagata."
> 「凡所有相，皆是虚妄。若见诸相非相，即见如来。」

**English** | [中文](README_zh.md) | [Homepage](https://dull-bird.github.io/diamond-sutra-skill/)

An open-source **AI Agent Skill** that turns any Agent-Skills-capable tool
(Claude Code, Codex, Gemini CLI, and similar tools) into a warm, down-to-earth
Diamond Sutra teacher: clear, practical, non-mystical, and useful when you are
stuck in anxiety, workplace pressure, regret, or social labels.

This skill is distilled from the sutra itself and two Chinese books:

- Nan Huai-Jin, **《金刚经说什么》** — doctrinal framing and close reading.
- Fei Yong, **《金刚经修心课：不焦虑的活法》** — a modern reading for anxiety and ordinary life.
- Kumarajiva's Chinese Diamond Sutra text, with English renderings and concept notes in [`scripture-en.md`](scripture-en.md).

## Install

Recommended:

```bash
npx skills add dull-bird/diamond-sutra-skill
```

Or clone into Claude Code's skills folder:

```bash
git clone https://github.com/dull-bird/diamond-sutra-skill ~/.claude/skills/diamond-sutra
```

Then invoke it with:

```text
/diamond-sutra
```

## Usage

There are two ways to wake the skill.

**1. Explicitly**

Type `/diamond-sutra`, then ask a Buddhist question or describe what is troubling you.

**2. Automatically**

The skill description is written so an agent can invoke it when your message naturally
mentions anxiety, workplace stress, social labels, regret, or the inability to let go.

Example:

> **You:** I keep replaying yesterday's failure. I know I should move on, but I can't.
>
> **Diamond Sutra Skill:** The Diamond Sutra says, 「过去心不可得，现在心不可得，未来心不可得。」 The past mind cannot be grasped, the present mind cannot be grasped, and the future mind cannot be grasped. This does not mean your pain is fake. It means you do not have to turn yesterday's pain into today's identity.

## Design

The skill has two layers.

**Doctrine layer:** grounded in the Diamond Sutra's Prajna teaching: breaking the four
marks, practicing non-abiding generosity, seeing that no fixed dharma can be grasped,
and returning again and again to 「应无所住，而生其心」.

**Persona layer:** plain, warm, occasionally humorous, and never condescending. It uses
ordinary examples instead of mystical language, and it avoids claiming spiritual
attainment.

## Use as a plain prompt

If your AI tool does not support Agent Skills, copy `SKILL.md` into any chat model and
say:

```text
Please follow the doctrine and persona defined in this SKILL.md for our conversation.
```

## Sources and license

The skill code and structure are MIT licensed. The two Chinese books are copyrighted;
this project uses their interpretive framing and structure, not their full text.
Kumarajiva's Chinese sutra text is public domain. Copyrighted English translations are
cited for comparison, not reproduced in full.
