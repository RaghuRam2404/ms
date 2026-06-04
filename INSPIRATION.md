# Design Inspiration: Apple Vision Pro Page
> Source: https://www.apple.com/apple-vision-pro/
> Analyzed: June 2026
> Purpose: Design inspiration for a Head of Design portfolio site

---

## 1. OVERALL DESIGN PHILOSOPHY

Apple's Vision Pro page is a **masterclass in narrative-first product design**. It does not lead with specs — it leads with *feeling*, then earns trust with technology. For a Head of Design portfolio, this is the core principle to adapt:

> **Lead with vision and impact. Follow with craft and process.**

The page is cinematic, minimal, and deeply confident. It communicates authority without noise.

---

## 2. PAGE STRUCTURE & NARRATIVE ARC

The page follows a deliberate storytelling arc from aspiration → use cases → credibility → conversion:

```
HERO          → Bold product declaration ("Vision Pro" + tagline)
STATEMENT     → One-line category claim ("The era of spatial computing is here.")
DESIGN        → Craft and hardware detail ("Designed for intuition.")
EXPERIENCES   → 5 use case pillars (Entertainment / Productivity / Photos / Connection / Apps)
OS LAYER      → Technical foundation (visionOS)
TECHNOLOGY    → Dark-section specs with key stats
VALUES        → Privacy + Accessibility
BUY           → Conversion CTA
```

### Adapted Portfolio Arc:
```
HERO          → Name + title + defining statement
STATEMENT     → Philosophy / design perspective in one line
WORK          → 3-5 project pillars (each with headline + context + visuals)
PROCESS       → How you think, not just what you made
IMPACT        → Metrics, outcomes, team scale, recognition
PROFILE       → Background, skills, tools
CONTACT       → CTA
```

---

## 3. SECTION-BY-SECTION BREAKDOWN

### 3.1 Hero Section

**Visual:** Full-viewport portrait photograph of a person wearing the device. Subject is centered, styled in monochromatic tones (soft blue/grey turtleneck), calm and confident — not performative.

**Text Overlay:**
- Product name in very large type: `⌘ Vision Pro`
- One-line value prop: *"New powerful M5 chip and comfortable Dual Knit Band."*
- Two CTA buttons: `Book a demo` (outline) + `Buy` (filled dark)

**Key Principles:**
- Hero image dominates — at least 80% of viewport height
- Text is centered, bottom-anchored over the image
- Dual CTAs: soft/exploratory + hard/conversion
- No decorative elements — the product/person IS the design

### 3.2 Statement Section

**Visual:** Product rotating in space (video animation, auto-playing, looping)

**Text:** `"The era of spatial computing is here."`

**Key Principles:**
- Single bold sentence creates a pause / moment of weight
- White background — clean break before the richness of product sections
- The statement is a belief, not a feature

### 3.3 Design / Craft Section

**Headline:** `"Designed for intuition."`

**Structure:** Sticky product video + horizontal card gallery with hardware details:
- Light Seal, Spatial Audio, Digital Crown, Battery, ZEISS Optical Inserts, Solo Knit Band

**Key Principles:**
- Each card shows one detail with a short, confident name label
- Cards have rounded corners (~18–24px radius), are medium-width, horizontally scrollable
- Videos autoplay inline with pause controls available (accessibility)
- Typography inside cards is small but precise

### 3.4 Experience Sections (Repeating Module)

All five experience subsections share an identical layout pattern — a "portal" module:

```
[Section eyebrow — small caps label, e.g. "Entertainment"]
[Large headline — 2-line max, bold]
[Full-bleed sticky video — plays as you read the copy below]
[Body copy — 2-3 sentences, uses **bold** for key technical terms]
[Optional CTA link — arrow link style]
[Horizontal card gallery with paddle navigation]
```

**Section-by-section content:**

| Eyebrow | Headline | Body Emphasis |
|---------|----------|---------------|
| Entertainment | "The ultimate theater. Wherever you are." | 4K for each eye, Spatial Audio, giant screen |
| Productivity | "A workspace with infinite space." | Mac workflows, Apple Intelligence |
| Photos & Videos | "Be in the moment. All over again." | Spatial photos & videos, 3D |
| Connection | "Share quality time. And space." | FaceTime, Persona, SharePlay |
| Apps | "Do what you love. Reimagine how you do it." | App Store, familiar apps reinvented |

**Key Principles:**
- Each section has ONE big idea, expressed in a single punchy headline
- Headlines use contrast/tension: "theater. Wherever." / "infinite space." / "All over again."
- Body copy is ~3 sentences, uses sentence case, never bullet points
- Critical terms are bolded **inline** within flowing prose
- Videos are full-bleed, edge-to-edge, sticky as you scroll

### 3.5 Technology Section (Dark Mode)

**Background:** Pure black (`#000000`)  
**Text:** White on black — large specs presented as stat blocks

**Layout:** Alternating text blocks + product images, separated by hairline dividers:
```
[Label — small, muted, e.g. "Enables up to"]
[Large stat — e.g. "120Hz"]
[Descriptor — small, muted, e.g. "refresh rates"]
```

**Key Principles:**
- Dark sections signal premium / technical depth
- Stats are LARGE (almost display-size typography)
- Muted gray labels bracket the hero number
- Product image appears from above — floating device on black
- The section feels like a spec sheet reimagined as poetry

### 3.6 Values Section

**Topics:** Privacy, Accessibility

**Visual:** Clean white background, icon + headline + body copy

**Key Principles:**
- Positioned *after* all the features — values are the foundation, not the marketing lead
- No flashy design — trust through restraint

---

## 4. VISUAL DESIGN SYSTEM

### 4.1 Typography

**Font Family:** SF Pro (Apple's system typeface) — equivalent to `system-ui` / Inter / similar geometric sans-serif

| Role | Weight | Approximate Size | Notes |
|------|--------|-----------------|-------|
| Hero headline | Bold/Black | ~60–80px | Full product name |
| Section headline | Bold | ~48–60px | 1–2 lines max |
| Eyebrow / label | Regular/Medium | ~14–17px | ALL CAPS optional, spaced |
| Body copy | Regular | ~19–22px | Wide measure, generous line-height ~1.6 |
| Card headline | Semibold | ~18–21px | Short, 1 line |
| Card body | Regular | ~14–17px | 2-4 lines |
| Stat number | Bold/Black | ~64–96px | Technology section |
| Stat label | Regular | ~15–17px | Muted color |

**Typography Principles:**
- Headlines use em dashes (—) and periods for rhythm: *"Be in the moment. All over again."*
- No headline exceeds 2 lines on desktop
- Body copy is always left-aligned (never centered beyond hero)
- Bold inline text within body paragraphs for key terms (not highlighted, just `<strong>`)

### 4.2 Color Palette

| Color | Hex/Value | Usage |
|-------|-----------|-------|
| Pure Black | `#000000` | Technology section background, dark CTA button |
| Pure White | `#FFFFFF` | Primary background for experience sections |
| Near-White Gray | `#F5F5F7` | Section transitions, light backgrounds |
| Dark Text | `#1D1D1F` | Primary body text on white |
| Muted Gray | `#6E6E73` | Body copy on white, stat labels |
| Light Gray (card bg) | `#E8E8ED` | Card backgrounds |
| Blue (accent) | `#0071E3` | Buy CTA button, links, interactive elements |
| White on Black | `#FFFFFF` | All text in dark/technology sections |

### 4.3 Spacing & Layout

- **Max content width:** ~980px (centered on wide screens)
- **Full-bleed elements:** Hero images, section videos — break out of content column
- **Section vertical padding:** Very generous — approximately 100–150px between sections
- **Card carousel:** Cards ~340–420px wide with ~16px gap
- **Card border-radius:** ~18–22px (softly rounded, modern)
- **Button border-radius:** ~50px (pill shape — fully rounded)

### 4.4 Navigation

**Global Nav:** Transparent → white on scroll, standard Apple global navigation
**Local/Sticky Nav:** 
- Appears after hero scroll, sticks to top
- Left: Product name `"Apple Vision Pro"` (medium weight)
- Right: Dropdown chevron (section nav) + `Buy` pill button in blue
- Height: ~44–52px
- Clean white background, subtle border-bottom

---

## 5. INTERACTION & ANIMATION PATTERNS

### 5.1 Scroll-Triggered Animations

The page uses a sophisticated scroll keyframe system:

- **Sticky video sections:** As you scroll past the headline, a full-bleed video "sticks" to the viewport and plays while the gallery drawer reveals below it
- **Fade-in on scroll:** Text and card elements fade and slide up as they enter the viewport
- **Parallax-adjacent:** Product images and headlines move at different scroll speeds for depth

### 5.2 Gallery / Card Carousel

- **Horizontal scroll** with discrete "snap" behavior
- **Paddle navigation:** Two circular ghost buttons (prev/next) positioned at the bottom-right
- First card is always visible; carousel slides one card at a time
- Selected card expands or changes state to show detail
- Cards contain: thumbnail image/video + bold feature name + 2-3 line description

### 5.3 Inline Video

- **Autoplay, muted, loop** for ambient/demonstration videos
- Videos lazy-load when approaching viewport
- Pause/play button overlays on the video (circle with pause/play icon)
- Video captions (content attribution) appear below the video in small type

### 5.4 Transitions

- **Section transitions:** Smooth `0.3–0.5s ease` for element appearance
- **Background color transitions:** When scrolling from white to black sections, the background smoothly shifts
- **Reduced motion:** Fully respected — static images serve as fallbacks

---

## 6. KEY DESIGN PRINCIPLES TO ADAPT

### For the Portfolio Site

| Apple Principle | Portfolio Adaptation |
|-----------------|---------------------|
| One headline = one idea | Each project section has ONE defining outcome/theme |
| Visual-first, text below | Lead with project visuals/video, explain after |
| Experience before specs | Show impact/outcome before process details |
| Dark section for premium feel | Use dark sections for awards, recognition, or a design philosophy statement |
| Sticky local nav | Sticky nav with your name + section links + contact CTA |
| Bold key terms in body | Bold the most important outcome or insight in each paragraph |
| Generous whitespace | Never crowd — let work breathe |
| Gallery carousel per section | Per-project carousel showing design iterations or deliverables |
| Cinematic hero | Opening with a striking image/video of your best work or a compelling personal statement |
| Dual CTAs in hero | "View Work" (soft) + "Contact" (hard) |

---

## 7. CONTENT STRATEGY NOTES

### Language & Tone

Apple's copy on this page:
- Is **declarative** and **confident** — never hedges
- Uses the **em dash** for dramatic pause
- Favors **short sentences** after longer ones for rhythm
- **Names specific benefits**, not vague adjectives ("more pixels than a 4K TV" vs. "incredible resolution")

### For a Head of Design Portfolio:

Use this formula for project headlines:
```
[Outcome] + [Context or Tension]
"Zero to one. In four months."
"A design system for a team of 120."
"The feature that drove 40% of retention."
```

Body copy formula per project:
```
[What the challenge was] — [What made it hard] — [What you did that was different] — [What the outcome was].
```

---

## 8. TECHNICAL ARCHITECTURE OBSERVATIONS

### HTML Structure
```
<body>
  [global nav]
  [local nav — sticky]
  <section class="hero">
  <section class="section-design">
  <section class="section-experiences">
    <section class="subsection-entertainment">
    <section class="subsection-productivity">
    <section class="subsection-photos-videos">
    <section class="subsection-connection">
    <section class="subsection-apps">
  </section>
  <section class="section-visionos">
  <section class="section-technology">
  <section class="section-values">
  <section class="section-buy">
  [footnotes]
  [global footer]
</body>
```

### CSS Custom Properties Used
```css
--r-viewport-height: 861;           /* JS-updated viewport height */
--r-localnav-text-zoom-factor: 1;   /* Accessibility zoom */
--css-scrim-opacity: 0 / 0.5;       /* Video overlay opacity per section */
```

### Animation Data Attributes
```html
data-anim-scroll-group="[section name]"
data-inline-media-play-keyframe='{"start": "a0t - 70vh", "end": "a0b"}'
data-inline-media-load-keyframe='{"start": "t - 200vh", "end": "b + 100vh"}'
```

### Accessibility
- All video animations have `aria-label` descriptions of what the animation shows
- Gallery paddle nav has proper `aria-label="Previous/Next, [gallery name]"`
- First previous button is `disabled` when at start
- Full `prefers-reduced-motion` support — videos become static images

---

## 9. SECTIONS WITH SCREENSHOTS

### Hero
> Full-viewport portrait. Product name centered at bottom. Two CTAs. Sticky local nav.

### Statement 
> White background. Single bold sentence. Product video centered.

### Entertainment (Light)
> Full-bleed movie/game video. Body paragraph. Horizontal card drawer.

### Technology (Dark)
> Black background. Large stat numbers (120Hz / 10% / 3 hours) separated by hairline dividers. Product image floating on black.

### Gallery Cards (Detail)
> Rounded cards (~340px wide). Video thumbnail. Bold card headline. 2-3 line description. Cards slide horizontally with paddle nav.

---

## 10. SUMMARY: 10 THINGS TO STEAL

1. **Narrative Arc** — Hero → Statement → Work pillars → Credibility → CTA. Never lead with a list of skills.
2. **Sticky Local Nav** — Name + links + primary CTA always visible. Converts at every scroll position.
3. **Portal Module Pattern** — For each project: eyebrow label + big headline + full visual + body copy + gallery.
4. **Dark Section for Impact** — One dark (black) section midpage signals a tonal shift and premium feel. Use it for a philosophy statement or key metric.
5. **Headline Rhythm** — Short sentences with em dashes. Tension in two phrases. "Statement. Counterpoint." 
6. **Bold Key Terms Inline** — Don't use bullet points. Bold the important things within flowing prose.
7. **Full-Bleed Visuals** — Images and videos that break the content column feel cinematic, not constrained.
8. **Gallery Drawer with Paddle Nav** — Show multiple facets of one project without overwhelming. Let the viewer choose depth.
9. **Generous Whitespace** — At least 100px vertical padding between major sections. Let the work breathe.
10. **One Idea Per Section** — Every section communicates exactly one thing. If it communicates two, it communicates zero.
