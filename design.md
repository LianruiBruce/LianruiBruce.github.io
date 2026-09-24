# Design — Lianrui Geng

A shared visual system for the public homepage and CV. The site remains a Jekyll/AcademicPages project; existing routes and content collections are preserved.

## Audience and purpose

Hiring teams and research peers should be able to scan current research, assess engineering range, and reach Lianrui quickly. The tone is editorial, technical, and personal. Claims come from existing site content and the user's résumé materials.

## Structure

- Homepage: Hallmark Split Studio. Intro and two research features pair a concise claim with concrete work and evidence. Projects and background use a simpler editorial index below.
- CV: Hallmark Long Document. Single reading column with short section labels and clear dates.
- Both pages share the same masthead, footer, type, colours, and link behaviour.

## Theme

Custom editorial palette anchored to the site's established forest green and warm paper. Source of truth: `assets/css/tokens.css`.

- Paper: `--color-paper`; raised surfaces: `--color-paper-raised`; soft band: `--color-paper-soft`.
- Ink: `--color-ink`; secondary text: `--color-ink-soft`.
- Accent: `--color-accent`; focus: `--color-focus`; separators: `--color-rule`.
- Accent is reserved for links, select phrases, and evidence marks. No gradients or glass effects.

## Typography and spacing

- Display: Iowan Old Style with Georgia and Times New Roman fallbacks; upright headings.
- Body: Avenir Next / system sans fallbacks. Dates and metadata use the same family at smaller size.
- Major spacing uses the 4-point token scale in `tokens.css`; headings wrap without causing horizontal scroll.
- Content measure stays readable. CV paragraphs form one document column.

## Navigation and interaction

- Desktop: compact newspaper-style masthead with centred wordmark and a separate single-line link row.
- Mobile: native `details` menu with the same destinations.
- Pointer clicks do not retain a focus box. Keyboard focus uses an outer green ring with a 5px offset; it never covers link text.
- Motion is limited to link colour changes. Reduced-motion users get shorter transitions.

## Per-page allowances

- Homepage may use the existing user-requested coding cartoon as a small editorial illustration.
- CV remains typography-first, without a hero image.
- Other legacy AcademicPages routes keep their content; they share the refreshed navigation and footer.

## Exports

The Jekyll entry point loads `assets/css/tokens.css` before `site.css` and `home.css`. The token file is the drop-in CSS export. Equivalent mappings for future migrations:

```css
@theme {
  --color-paper: oklch(98% 0.012 155);
  --color-ink: oklch(27% 0.031 164);
  --color-accent: oklch(43% 0.087 166);
  --font-display: "Iowan Old Style", Georgia, serif;
  --font-body: -apple-system, BlinkMacSystemFont, "Avenir Next", "Segoe UI", sans-serif;
}
```

```json
{"color":{"paper":{"$value":"oklch(98% 0.012 155)","$type":"color"},"ink":{"$value":"oklch(27% 0.031 164)","$type":"color"},"accent":{"$value":"oklch(43% 0.087 166)","$type":"color"}}}
```

```css
:root {
  --background: 98% 0.012 155;
  --foreground: 27% 0.031 164;
  --primary: 43% 0.087 166;
  --ring: 42% 0.105 169;
}
```
