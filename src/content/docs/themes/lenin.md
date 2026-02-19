---
title: "Lenin Theme"
description: "The core Full Site Editing (FSE) theme for the RCI digital ecosystem."
---

# Lenin Theme

**Lenin** is the official Block Theme (FSE) for the Revolutionary Communist International. It provides the foundational design tokens, templates, and patterns used across our network of sites.

## Features

- **Full Site Editing**: Built entirely with blocks for maximum flexibility.
- **Global Styles**: Centralized `theme.json` controlling [Colors](/docs/design/colors) and [Typography](/docs/design/typography).
- **Patterns**: A library of reusable block patterns (Headers, Footers, Article Layouts).
- **Performance**: Zero-dependency frontend optimized for Core Web Vitals.

## Installation

The theme is developed in `wp-content/themes/lenin`.

```bash
# Navigate to themes directory
cd wp-content/themes

# Clone the repository
git clone https://github.com/rci/lenin.git

# Install dependencies & build
npm install
npm run build
```

## Structure

*   `theme.json`: The source of truth for design tokens.
*   `style.css`: Minimal CSS reset and utility classes.
*   `templates/`: Block templates for page layouts.
*   `parts/`: Template parts (Header, Footer).
