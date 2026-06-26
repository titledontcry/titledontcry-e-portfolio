---
name: Attachat Channakorn Portfolio
description: A cybersecurity and AI automation portfolio.
colors:
  bg-color: "#f4f6f5"
  text-color: "#0f172a"
  border-color: "#0f172a"
  green: "#10b981"
  green-light: "#34d399"
  green-dark: "#059669"
  yellow: "#fcd34d"
  blue: "#60a5fa"
  pink: "#f472b6"
typography:
  display:
    fontFamily: "'Outfit', sans-serif"
    fontWeight: 800
    lineHeight: 1.2
  body:
    fontFamily: "'Outfit', sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Space Mono', monospace"
rounded:
  md: "8px"
  full: "20px"
spacing:
  sm: "0.35rem 0.8rem"
  md: "0.8rem 1.8rem"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  button-dark:
    backgroundColor: "{colors.text-color}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  badge:
    backgroundColor: "#ffffff"
    textColor: "{colors.text-color}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
---

# Design System: Attachat Channakorn Portfolio

## 1. Overview

**Creative North Star: "The Brutalist Hacker"**

The design system projects a raw, tactile, and highly confident aesthetic. Combining Neo Brutalism fundamentals with a distinct cybersecurity identity, the interface relies on stark contrasts, heavy outlines, and solid drop shadows. It is explicitly designed to command attention and highlight technical expertise without becoming cluttered. The system explicitly rejects overly colorful or animation-heavy sites that are hard to read, as well as generic developer-focused sites that lack intentional design.

**Key Characteristics:**
- High contrast, hard-edged aesthetics
- Thick borders and solid offset shadows
- Purposeful use of vibrant accent colors against a clean, structured background
- Strong typographic hierarchy using highly readable sans-serifs combined with monospace accents

## 2. Colors

The palette balances a clean, technical background with punchy, high-energy accents.

### Primary
- **Vibrant Green** (`#10b981`): The primary brand color. Used for prominent calls to action, badges, and high-impact highlights.
- **Light Green** (`#34d399`): A softer variant for secondary badges and subtle active states.
- **Dark Green** (`#059669`): Used for monospace labels, prompts (`root@kali:~#`), and list bullets (`>`).

### Secondary
- **Warning Yellow** (`#fcd34d`): Used for critical highlights, TryHackMe styling, and specific skill category headers (Deployment).
- **Tech Blue** (`#60a5fa`): Used for secondary accents and skill category headers (Blue Team).
- **Hacker Pink** (`#f472b6`): Used for distinct skill category headers (Red Team).

### Neutral
- **Off-White Background** (`#f4f6f5`): The base canvas. Clean and minimal to let the structural elements stand out.
- **Heavy Ink** (`#0f172a`): The backbone of the brutalist look. Used for all primary text, thick component borders, and solid shadows.

**The Structural Ink Rule.** The Heavy Ink color (`#0f172a`) is never just for text; it is the structural glue of the entire site, forming the thick borders and offset shadows of every tactile element.

## 3. Typography

**Display Font:** 'Outfit', sans-serif
**Body Font:** 'Outfit', sans-serif
**Label/Mono Font:** 'Space Mono', monospace

**Character:** A modern, geometric sans-serif (Outfit) provides extreme readability and a contemporary feel, while a stark monospace (Space Mono) injects raw, terminal-like technicality.

### Hierarchy
- **Display** (800 weight, clamp(2.5rem, 4vw, 3.5rem), 1.2 line-height): Used for massive hero text and section headers.
- **Headline** (800 weight, clamp(1.8rem, 2.5vw, 2.5rem), 1.2 line-height): Used for primary component and card titles.
- **Title** (800 weight, 1.3rem, 1.2 line-height): Used for project titles in the Bento grid.
- **Body** (400 weight, 1.1rem, 1.6 line-height): Used for general reading and project descriptions.
- **Label** (700 weight, 1rem, monospace): Used for section numbering, terminal prompts, and technical metadata.

**The Technical Monospace Rule.** Monospace fonts are reserved strictly for technical markers (terminal prompts, section numbers, code-like bullets). Never use monospace for long-form reading.

## 4. Elevation

The system uses rigid, non-blurred offset shadows to convey depth. There are no soft or realistic shadows; everything is flat and tactile.

### Shadow Vocabulary
- **Solid Default** (`box-shadow: 6px 6px 0px 0px #0f172a`): Used for major structural cards and large interactive elements.
- **Solid Small** (`box-shadow: 4px 4px 0px 0px #0f172a`): Used for buttons and smaller interactive surfaces.
- **Solid Hover** (`box-shadow: 8px 8px 0px 0px #0f172a`): Used when interactive elements are hovered, pushing them further off the page.
- **Solid Active** (`box-shadow: 0px 0px 0px 0px #0f172a`): Used when elements are clicked, snapping them flat to the surface.

**The Brutalist Depth Rule.** Surfaces are perfectly flat. Depth is only achieved through harsh, solid-color offset shadows with zero blur.

## 5. Components

Components are bold, tactile, and confident, feeling like physical blocks resting on the page.

### Buttons
- **Shape:** 8px radius with a 3px heavy border.
- **Primary:** Vibrant Green (`#10b981`) background, white text.
- **Dark:** Heavy Ink (`#0f172a`) background, white text.
- **Hover / Focus:** Element translates up and left (`-3px, -3px`), and the solid shadow expands to 8px.
- **Active (Click):** Element translates down and right (`3px, 3px`), and the shadow completely disappears to simulate being pressed.

### Badges
- **Style:** 20px (pill) radius, white or light green background, 2px solid border, and a 2px offset solid shadow.
- **State:** Static display of metadata or tags.

### Cards / Containers (Bento Grid)
- **Corner Style:** 16px radius (or custom shape).
- **Background:** Crisp whites or subtle tinted pastels (`#f8fafc`, `#eef2ff`, etc.).
- **Shadow Strategy:** Solid Default shadow.
- **Border:** Thick 3px border (`#0f172a`).

### Navigation
- **Style:** A floating pill (100px radius) positioned absolutely at the top (`top: 1.5rem`) with a glassmorphism backdrop (`backdrop-filter: blur(10px)`). It is anchored with a thick solid border and a small offset shadow, and it scrolls naturally with the page to remain unobtrusive.

## 6. Do's and Don'ts

### Do:
- **Do** rely on the 3px border (`#0f172a`) to outline all distinct interactive and structural components.
- **Do** use `box-shadow` strictly with a 0px blur radius to maintain the hard-edged brutalist feel.
- **Do** maintain high contrast between text and background to ensure readability.

### Don't:
- **Don't** use soft, blurry, or realistic drop shadows anywhere in the UI.
- **Don't** use overly colorful or animation-heavy layouts that are hard to read.
- **Don't** use developer-focused generic components that lack the intentional Brutalist identity.
- **Don't** use gradient text (`background-clip: text`). Color is solid and unapologetic.
