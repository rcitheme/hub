---
title: "Lenin Theme Tokens"
description: "Reference guide for the Lenin 2.0 Theme design system tokens."
---

# Lenin Theme Tokens

This document outlines the immutable design tokens defined in our `theme.json`. Strict adherence to these values is required to maintain brand integrity.

## Color Palette

The RCI color system is designed for high contrast and immediate recognition.

### Primary Colors
*   **RCI Red** (`#ea1917`): The core brand color. Used for primary actions, accents, and the active state of navigation elements.
*   **Brand Accent** (`#fef6f5`): A subtle tint used for backgrounds and highlighting content blocks without overwhelming the user.

### Neutral Colors
*   **Contrast Black** (`#000000`): Used for primary text and headings.
*   **Base White** (`#ffffff`): The standard background for content cards and modules.
*   **Sand 50** (`#FAF9F6`): The primary application background (similar to Google's "Off-White"), providing a softer reading experience than pure white.
*   **Border Light** (`#edcbcb`): used for subtle dividers.
*   **Border Dark** (`#685458`): Used for high-contrast boundaries.

## Typography

Our typographic hierarchy is built on the **Lenin** font family.

### Font Stacks
| Role | Family | Fallback |
| :--- | :--- | :--- |
| **Primary** | `Lenin` | `sans-serif` |
| **Condensed** | `Lenin Condensed` | `sans-serif` |
| **Compressed** | `Lenin Compressed` | `sans-serif` |
| **Serif** | `Crimson Text` | `serif` |

### Fluid Typography
We utilize fluid typography to ensure legibility across all viewports.
*   **Base Size**: `1.165rem` (approx 18px). Scaling range: `1rem` - `1.165rem`.
*   **Heading XL**: `3.5rem`. Scaling range: `1.875rem` - `3.5rem`.

## Elements
*   **Headings**: All headings (H1-H6) default to `Lenin Condensed` to maximize impact while conserving horizontal space.
*   **Body**: Standard content uses `Lenin` (Regular 400).
