---
title: Themes
description: The visual foundation of RCI digital presence.
---

# Themes

RCI Themes provide the visual layer for our websites, ensuring consistency with the International's brand identity while offering flexibility for local needs. We have transitioned fully to **Full Site Editing (FSE)** to empower editors with granular control over layout without touching code.

## Philosophy

Our theming philosophy balances **Rigidity** (Brand Identity) with **Flexibility** (Content Needs).

*   **Global Elements**: Colors, Typography, and Logo usage are locked to ensure brand recognition.
*   **Layouts**: Grid, spacing, and block arrangements are flexible to accommodate various content types (Articles, Events, Donate pages).
*   **Performance**: Themes are "bare metal" – they do not ship with heavy frameworks like Bootstrap or Tailwind. We use a custom, lightweight CSS variable system.

## Core Theme: Lenin

The **Lenin Theme** is our primary FSE theme. It serves as the foundation for the majority of our national section websites.

### Key Features
*   **Block-Based Architecture**: Every part of the site (Header, Footer, Sidebar) is editable via the Site Editor.
*   **Core Web Vitals Optimized**: Achieves 90+ scores on PageSpeed Insights out of the box.
*   **Accessibility**: WCAG 2.1 AA compliant, with focus states, semantic HTML, and proper contrast ratios.
*   **Multilingual Support**: First-class integration with Polylang and WPML.

### Child Themes
For specific national sections requiring significant deviations (e.g., RTL support for Arabic, or special campaign sites), we recommend creating a **Child Theme** of Lenin rather than forking the repository.

[Explore Lenin Documentation](/docs/themes/lenin)
