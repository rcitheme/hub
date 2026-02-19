---
title: "Typography"
description: "The typographic scale and font stacks of the Lenin Design System."
---

# Typography

The **Lenin Design System** utilizes a custom type hierarchy built around the **Lenin** font family. It is characterized by its condensed, authoritative headings and highly readable sans-serif body text.

## Font Families

### 1. Lenin Compressed (Display)
Used for massive, impact-driven headlines. It is designed to be used at very large sizes (80px+) with tight leading.

*   **Weight**: 800 (Black), 400 (Regular)
*   **Usage**: Hero sections, Poster titles.
*   **Class**: `.font-compressed`

### 2. Lenin Condensed (Headings)
The workhorse font for standard headings and UI navigation.

*   **Weights**: 700 (Bold), 400 (Regular)
*   **Usage**: H2-H6, Grid titles, Buttons, Navigation.
*   **Class**: `.font-condensed`

### 3. Lenin Sans (Body)
A clean, grotesque sans-serif for long-form reading and UI text.

*   **Weights**: 700 (Bold), 400 (Regular)
*   **Usage**: Body text, Documentation, Metadata.
*   **Class**: `.font-sans`

## Type Scale

We follow a responsive type scale that adapts to the viewport.

| Level | Font Family | Size (Desktop) | Size (Mobile) | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | Lenin Compressed Black | `140px` | `15vw` | `0.8` | `normal` |
| **H1** | Lenin Condensed Bold | `64px` | `48px` | `1.0` | `tight` |
| **H2** | Lenin Condensed Bold | `48px` | `32px` | `1.1` | `tight` |
| **H3** | Lenin Condensed Bold | `32px` | `24px` | `1.2` | `normal` |
| **Body** | Lenin Sans Regular | `16px` | `16px` | `1.6` | `relaxed` |
| **Small** | Lenin Sans Medium | `13px` | `13px` | `1.5` | `wide` |

## Usage in Code

The typography system is integrated into Tailwind via `global.css`.

```html
<!-- Display Heading -->
<h1 class="font-compressed font-black text-[140px] leading-[0.8] uppercase">
  Revolution
</h1>

<!-- Standard Heading -->
<h2 class="font-condensed font-bold text-4xl mb-4">
  Section Title
</h2>

<!-- Body Text -->
<p class="font-sans text-base leading-relaxed text-gray-900">
  This is standard body text. It is optimized for readability.
</p>
```
