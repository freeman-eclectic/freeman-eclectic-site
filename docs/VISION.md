# Freeman Eclectic — Site Vision

Decisions for the freeman-eclectic.com marketing site, settled 2026-09-01. Companion to `BRAND.md`,
which is the source for voice and values; this file is the source for the site itself. E-commerce is
out of scope.

## Who and what

- A small two-person Minnesota shop. CNC and laser equipment, finished by hand. "Crafted" is the
  deliberate word. The pairing is the story: precision machines, two pairs of hands.
- The maker stays offstage. Voice is "we". No names, no portraits, no biography.
- Two audiences, two doors:
  - **For Business** (primary): awards & recognition, client & employee appreciation, corporate
    gifts, wholesale for retailers.
  - **For Your Table** (secondary): board games, kitchen & bar, gifts & keepsakes, custom decor.
    Minnesota, North Shore, campfire, and heritage themes appear as copy and example pieces within
    these categories, not as separate structure.
- No store. Every path ends in a pre-filled email to **info@freeman-eclectic.com**.

## Voice

Warm craftsman. Plain, confident, short sentences. Humor lighthearted and welcoming. Talk about
materials, craft, and the occasion the piece is made for. Never oversell, never apologize for price.
Capabilities are named; machines are never named.

## Tagline system

| Where                    | Line                                                            |
|--------------------------|-----------------------------------------------------------------|
| Site-wide, hero, footer  | Crafted to bring people together.                               |
| For Your Table heading   | Sit down and play.                                              |
| For Business subhead     | Awards, gifts, and wholesale pieces, crafted in Minnesota.      |

## Place and logistics

"Crafted in Minnesota. We ship nationwide." Twin Cities appears in the footer and on Contact.
Shipping is emphasized; local pickup is "by arrangement". Capacity and lead times stay neutral:
"Most orders ship within a few weeks. We'll confirm a date with your quote."

## Look and feel

**Palette (light only)**

| Token          | Value     | Use                                        |
|----------------|-----------|--------------------------------------------|
| ground         | `#F6F1E8` | page background, product cut-out ground    |
| ground-deep    | `#EDE5D7` | alternating sections, cards                |
| slate          | `#2B2F33` | headings, body text                        |
| slate-soft     | `#5C636A` | secondary text                             |
| amber          | `#B7742E` | Table-door accent, links, buttons          |
| brass          | `#9C8A5A` | Business-door accent, rules, small labels  |
| line           | `#D9CFBF` | hairlines and borders                      |

Business pages lean slate and brass with tighter spacing and spec-like lists. Table pages lean amber
with looser spacing and the "Sit down and play" warmth. Same type, same components.

**Type**

- Headings: sturdy serif (Newsreader, fallback Georgia). Weight, craft, age.
- Body and specs: clean sans (Instrument Sans, fallback system-ui). Measured, tidy.

**Imagery**

- Existing photos are product-on-plain and phone snapshots. Every product is cut out and placed on
  the `ground` color with a soft shadow so mixed sources read as one set.
- Home hero is type-led with a cluster of 3 to 5 cut-out products beside the headline.
- Materials strip: Wood · Slate · Glass · Metal · Acrylic.
- Existing vector logo lives at `public/brand/`. Placeholder wordmark in the serif until it lands.

## Pages

**Nav:** For Business · For Your Table · About · Contact · [Request a quote]

**Home**
1. Hero: "Crafted to bring people together." + one or two support sentences + product cluster + two buttons
   (For your business / For your table).
2. Two doors: side-by-side cards, one per audience, each listing its four categories.
3. The pairing story: machines plus hands, materials strip.
4. Request a quote.

**For Business**
1. Intro + descriptor.
2. Four category cards.
3. Materials & capabilities: engrave on slate, glass, wood, metal, acrylic; cut and carve hardwoods;
   personalize; small-batch production.
4. How an order goes: Tell us → Mockup → Approve → Make → Ship.
5. Lead-time line (neutral).
6. Request a quote.

**For Your Table**
1. "Sit down and play." intro.
2. Four category cards.
3. Piece grid, each with "Ask about this".
4. Personalization note.
5. Email or DM us.

**About** — the shop only. What we make, the five materials, the pairing, "a small shop in
Minnesota." One shop photo if available.

**Contact** — email, Instagram, Facebook, Twin Cities, shipping note, both inquiry buttons.

**Footer** — wordmark, site-wide tagline, email, socials, Twin Cities, freeman-eclectic.com.

## Inquiry emails

Both buttons open `mailto:info@freeman-eclectic.com` with subject and body pre-filled.

- **Business quote** — subject "Quote request"; body prompts: What do you need? · How many? ·
  When do you need it?
- **Table ask** — subject "Asking about a piece"; body prompts: Which piece? · When do you need it?

## Build

React Router v8 + Tailwind v4, prerendered to static. No backend, no form service. Light theme only.

## Open items

- Instagram: "Freeman Eclectic" is a display name, not a handle. Link is a placeholder until the
  URL is confirmed. Facebook page: freeman-eclectic.
- Logo files not yet in `public/brand/`.
- Product photography: plan a consistent photo day; the design tolerates today's photos but improves
  with better ones.
