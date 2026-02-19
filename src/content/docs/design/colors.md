---
title: "Colors"
description: "The official color palette for the Lenin Design System."
---

# Color System

The **Lenin Design System** uses a constrained palette to ensure political clarity and visual hierarchy. The core colors are defined in `theme.json` and are available as CSS custom properties.

## Primary Palette

The primary palette defines the brand identity. The **RCI Red** is our semantic primary color, used for calls to action, active states, and emphasis.

| Swatch | Name | Slug | Hex | Usage |
| :--- | :--- | :--- | :--- | :--- |
| <div style="background-color: #ea1917; width: 40px; height: 40px; border-radius: 4px;"></div> | **RCI Red** | `primary` | `#ea1917` | Primary buttons, links, active states. |
| <div style="background-color: #000000; width: 40px; height: 40px; border-radius: 4px;"></div> | **Contrast Black** | `main` | `#000000` | Headings, primary text. |
| <div style="background-color: #fef6f5; width: 40px; height: 40px; border-radius: 4px; border: 1px solid #eee;"></div> | **Brand Accent** | `primary-accent` | `#fef6f5` | Background tints, subtle highlights. |

## Neutral Palette

Neutrals are used for text, borders, and backgrounds. They are calibrated to provide optimal contrast against the primary palette.

| Swatch | Name | Slug | Hex | Usage |
| :--- | :--- | :--- | :--- | :--- |
| <div style="background-color: #ffffff; width: 40px; height: 40px; border-radius: 4px; border: 1px solid #eee;"></div> | **Base** | `base` | `#ffffff` | Page background, cards. |
| <div style="background-color: #F8F9FA; width: 40px; height: 40px; border-radius: 4px; border: 1px solid #eee;"></div> | **Sand 50** | `sand-50` | `#FAF9F6` | Secondary backgrounds (Google Check). |
| <div style="background-color: #1C2024; width: 40px; height: 40px; border-radius: 4px;"></div> | **Slate 900** | `slate-900` | `#1C2024` | Footer background, dark mode UI. |

## Usage in Code

In the Block Editor (Gutenberg) and FSE themes, reference these colors using the WordPress CSS variable syntax:

```css
.my-element {
    color: var(--wp--preset--color--primary); /* #ea1917 */
    background-color: var(--wp--preset--color--primary-accent); /* #fef6f5 */
}
```

In `theme.json`, referencing them in the palette allows users to select them in the editor:

```json
{
    "color": {
        "palette": [
            {
                "color": "#ea1917",
                "name": "RCI Red",
                "slug": "primary"
            }
        ]
    }
}
```
