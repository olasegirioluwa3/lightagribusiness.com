# Hero Section Design & Blending Standards

This rule defines the mandatory design, layout, and visual blending pattern for all Hero sections across the Light Agribusiness platform (Home, LightAgriOS, Advisory, Academy, Approach, etc.).

---

## 1. Background Image Blending System

Hero sections must blend context-rich photography seamlessly into the dark brand background without jarring borders or washing out image vibrance.

### The Blending Formula
```tsx
{/* Background Image Seamlessly Blended */}
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
  <Image
    src="/image/your-context-image.jpg"
    alt="Descriptive context"
    fill
    priority
    className="object-cover object-right lg:object-[75%_center] opacity-35 lg:opacity-40 transition-opacity duration-700"
  />

  {/* Directional gradient: solid dark on text side, fading to reveal image on showcase side */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#07130D] via-[#07130D]/90 via-35% to-[#07130D]/40" />

  {/* Vertical fades: smooth integration with navbar (top) and next section (bottom) */}
  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07130D] via-[#07130D]/70 to-transparent" />
  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07130D] via-[#07130D]/80 to-transparent" />

  {/* Atmospheric brand glows */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(31,92,63,0.38)_0%,transparent_65%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,rgba(198,146,20,0.14)_0%,transparent_50%)]" />
</div>
```

### Critical Blending Rules
- **Preserve Natural Hues**: Do **NOT** use `mix-blend-luminosity` or heavy desaturating filters that turn farm photography dull grey. Allow the natural green fields, crops, and warm light to show through at controlled opacity (`opacity-30` to `opacity-45`).
- **Pristine Readability**: The directional horizontal gradient must be opaque enough on the text side (left) so headlines and copy have 100% crisp contrast and pass accessibility standards.
- **No Hard Edge Boundaries**: Always use top and bottom vertical gradient fades (`h-24` to `h-28`) to blend smoothly into the header above and the adjacent section below.

---

## 2. Typography & Content Hierarchy (Left Column)

1. **Category Tag Badge**:
   - Semi-transparent backdrop (`bg-brand-green/25 border border-emerald-500/40 backdrop-blur-sm`).
   - Pulsing live indicator dot (`w-2 h-2 rounded-full bg-emerald-400 animate-pulse`).
   - Clean uppercase mono/sans-serif text (e.g. `LIGHTAGRIOS | PRECISION INTELLIGENCE` or `LIGHT ADVISORY | SYSTEMS DIAGNOSTICS`).
2. **Main Headline**:
   - Authoritative serif font (`font-serif`).
   - High-contrast white base with strategic keywords highlighted in Brand Gold (`#D4AF37` / `#C69214`).
   - Tight tracking and line-height: `tracking-tight leading-[1.12]`.
3. **Value Proposition Description**:
   - Warm/slate off-white (`text-slate-300`), max width constrained (`max-w-xl`), relaxed line height (`leading-relaxed`).
4. **Action-Oriented CTAs**:
   - **Primary**: Brand green filled button (`bg-[#1F5C3F] hover:bg-[#184932] text-white`) with arrow icon and subtle elevation.
   - **Secondary**: Clean frosted glass outline button (`bg-white/5 hover:bg-white/10 border border-white/20 text-white`).

---

## 3. Visual Showcase (Right Column)

- For software/technology pages: Multi-device composition (desktop monitor centerpiece, mobile phone in front, tablet/screen on flanks) showing clean light-themed UI cards over the dark atmosphere.
- For advisory/academy pages: High-end framed visual panels, system diagrams, or diagnostic workflows with glassmorphic cards and subtle hover micro-interactions (`hover:-translate-y-1 duration-300`).
- Container frames should use rounded geometry (`rounded-2xl`), subtle borders (`border-white/20`), and deep shadow grounding (`shadow-2xl shadow-black/90`).
