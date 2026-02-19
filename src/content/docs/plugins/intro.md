---
title: Plugins
description: Modular extensions for RCI websites.
---

# Plugins

RCI Plugins are modular components designed to extend the functionality of our WordPress sites. They follow strict coding standards and are designed to be lightweight, performant, and secure.

Unlike traditional WordPress plugins that often bundle heavy assets and complex settings pages, RCI plugins are built as focused "micro-services" within the WordPress ecosystem, often leveraging the block editor (Gutenberg) for configuration.

## Component Architecture

Our plugins are developed with the following principles:

1.  **Single Responsibility**: Each plugin solves one specific problem.
2.  **No Vendor Lock-in**: Plugins should be loosely coupled and easily replaceable.
3.  **Asset Optimization**: CSS and JS are only loaded when the component is present on the page.
4.  **Localization First**: all strings must be translatable via `__('String', 'text-domain')`.

## Available Plugins

The following plugins are currently maintained by the RCI development team:

### News Slider
A high-performance, touch-friendly slider designed for showcasing featured articles or news items. It supports swipe gestures, keyboard navigation, and responsive breakpoints.
*   [Documentation](/docs/plugins/news-slider)
*   **Key Features**: Lazy loading, Accessibility support, Custom query builder.

### Preheader
A global "eyebrow" navigation bar that sits above the main header. It is used for network-wide announcements, language switching, or linking to other International sites.
*   [Documentation](/docs/plugins/preheader)
*   **Key Features**: Customizer integration, pure CSS layout, zero JavaScript dependency.

## Installation

Plugins can be installed via Composer (recommended) or manually:

```bash
composer require rci/news-slider
composer require rci/preheader
```

## Contribution

We welcome contributions to the plugin ecosystem. Please review our [Git Standards](/docs/workflow/git-standards) before submitting a Pull Request. Ensure all PHP code follows PSR-12 and all JavaScript adheres to the AirBnB style guide.
