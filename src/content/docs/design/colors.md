---
title: "Colors"
description: "The official RCI color palette and usage guidelines."
---

# Color System

The **Revolutionary Communist International** visual identity relies on a high-contrast, bold color palette. The system is designed to be striking, urgent, and authoritative.

## Primary Palette

These are the core colors of the brand. **RCI Red** is the primary semantic color, used for calls to action and emphasis. **Black** and **White** provide the high-contrast foundation.

| Swatch | Name | Slug | Hex | Usage |
| :--- | :--- | :--- | :--- | :--- |
| <div style="background-color: #ea1917; width: 40px; height: 40px; border-radius: 4px;"></div> | **RCI Red** | `primary` | `#ea1917` | Primary buttons, active states, links, hover effects. |
| <div style="background-color: #000000; width: 40px; height: 40px; border-radius: 4px;"></div> | **Black** | `black` | `#000000` | Headings, forceful text, borders, backgrounds. |
| <div style="background-color: #ffffff; width: 40px; height: 40px; border-radius: 4px; border: 1px solid #e0e0e0;"></div> | **White** | `white` | `#ffffff` | Page backgrounds, text on dark backgrounds. |

## Neutral Palette (Google Scale)

We use a refined neutral scale based on the Google Antigravity/Material 3 system for UI elements like borders, dividers, and secondary text.

| Swatch | Name | Hex | Usage |
| :--- | :--- | :--- | :--- |
| <div style="background-color: #202124; width: 40px; height: 40px; border-radius: 4px;"></div> | **Gray 900** | `#202124` | Primary body text, high-emphasis text. |
| <div style="background-color: #5F6368; width: 40px; height: 40px; border-radius: 4px;"></div> | **Gray 700** | `#5F6368` | Secondary text, icons, meta information. |
| <div style="background-color: #DADCE0; width: 40px; height: 40px; border-radius: 4px;"></div> | **Gray 300** | `#DADCE0` | Dividers, borders, disabled states. |
| <div style="background-color: #F8F9FA; width: 40px; height: 40px; border-radius: 4px; border: 1px solid #e0e0e0;"></div> | **Gray 50** | `#F8F9FA` | Sidebar backgrounds, subtle section fills. |

## Usage Guidelines

### Do's
*   **Use Red Sparingly**: RCI Red should be used for *action* and *impact*. Don't overuse it for backgrounds unless you want maximum aggression.
*   **High Contrast**: Always ensure text is legible. Black on White or White on Black/Red.
*   **Subtle Dividers**: Use `Gray 300` for layout dividers to let the content breathe.

### Don'ts
*   **No Gradients**: The RCI aesthetic is flat and bold. Avoid gradients or shadows.
*   **No Other Colors**: Do not introduce blues, greens, or oranges. The palette is strictly Red, Black, White, and Grays.

## CSS Variables

The color system is available as CSS variables in `global.css`:

```css
:root {
  --color-rci-red: #ea1917;
  --color-black: #000000;
  --color-white: #ffffff;
  --color-gray-900: #202124;
  --color-gray-700: #5F6368;
  --color-gray-300: #DADCE0;
  --color-gray-50: #F8F9FA;
}
```
