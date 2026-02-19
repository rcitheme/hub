---
title: "Getting Started"
description: "Everything you need to set up your RCI development environment."
---

# Getting Started

Welcome to the **RCI Developer Hub**. This platform serves as the single source of truth for the entire RCI digital ecosystem, documenting our themes, plugins, and design systems.

## Prerequisites

Before contributing to the codebase, ensure your local development environment meets the following requirements:

*   **WordPress**: v6.6+ (Full Site Editing support required)
*   **PHP**: v8.1+
*   **Node.js**: v18+ (for block development)
*   **Composer**: v2+

## Installation

### Theme Setup
The **Lenin** theme is the core of our visual identity. To install it locally:

1.  Clone the repository into your `wp-content/themes` directory.
2.  Run `npm install` to fetch dependencies.
3.  Run `npm run build` to compile the tailwind styles and assets.

### Plugin Architecture
Our functionality is modularized into single-purpose blocks. Key plugins include:

*   `rci-news-slider`: The primary carousel block.
*   `rci-preheader`: Logic engine for content priority.
*   `rci-lexicon`: Glossary and definition management.

## Next Steps

Once your environment is set up, explore the key documentation sections:

1.  **[Design System](/docs/design/colors)**: Understand our color palette and typography.
2.  **[Components](/docs/components/news-slider)**: Learn how to implement our core blocks.
3.  **[Workflow](/docs/workflow/git-standards)**: Review our git commit standards.
