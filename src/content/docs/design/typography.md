---
title: "Typography"
description: "The typographic scale and font stacks of the Lenin Design System."
---

# Typography

Typography in the **Lenin Design System** is bold, condensed, and authoritative. It utilizes the **Lenin** font family for a distinctive "Bolshevik Professional" aesthetic.

## Font Families

The system uses two primary font families defined in `theme.json`.

### 1. Lenin Condensed
Used for **Headings (H1-H6)** and large display text. It allows for impactful headlines that maintain readability even at very large sizes.

*   **Weights**: 400 (Regular), 700 (Bold), 800 (Extra Bold)
*   **CSS Variable**: `var(--wp--preset--font-family--condensed)`
*   **Fallback**: `sans-serif`

### 2. Lenin
Used for **Body text** and UI elements. It provides high legibility for long-form reading contexts.

*   **Weights**: 400 (Regular), 700 (Bold)
*   **CSS Variable**: `var(--wp--preset--font-family--primary)`
*   **Fallback**: `sans-serif`

## Type Scale

The type scale is fluid, adapting between mobile and desktop viewports. This ensures that headlines remain impressive on large screens without breaking layouts on mobile devices.

| Name | Slug | Size (Desktop) | Size (Mobile) | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Extra Extra Large** | `xx-large` | `4.3875rem` | `2.25rem` | Hero H1 |
| **Extra Large** | `x-large` | `3.5rem` | `1.875rem` | Page Titles |
| **Large** | `large` | `2.75rem` | `1.5rem` | Section Headings (H2) |
| **Medium** | `medium` | `1.65rem` | `1.2rem` | Subheadings (H3) |
| **Base** | `base` | `1.165rem` | `1rem` | Body Text |
| **Small** | `small` | `1.05rem` | `0.9rem` | UI Labels, Metadata |

## Implementation

In your `theme.json`, typography is applied globally to elements:

```json
{
    "styles": {
        "elements": {
            "heading": {
                "typography": {
                    "fontFamily": "var(--wp--preset--font-family--condensed)"
                }
            }
        },
        "typography": {
            "fontFamily": "var(--wp--preset--font-family--primary)"
        }
    }
}
```
