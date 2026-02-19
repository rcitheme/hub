---
title: "Getting Started"
description: "Overview of the RCI Developer Ecosystem and the Lenin 2.0 Theme."
---

# Getting Started

The **RCI Developer Hub** serves as the central command for all technical directives regarding the digital infrastructure of the International. This repository ensures consistency, stability, and adherence to the **Lenin 2.0 Design System** across all regional bureaus and publications.

## The Ecosystem

Our digital architecture is built upon a strict foundation of standardized components and prescribed workflows. Deviations from these standards are counter-revolutionary to our goal of a unified, high-performance web presence.

### 1. Lenin 2.0 Theme
The core WordPress theme powering our network. It is not merely a visual skin but a structural framework implementing our design tokens and layout primitives.
*   **Repo**: `rcitheme/lenin`
*   **Stance**: Mobile-first, Block-based (FSE).

### 2. Plugin Architecture
Functionality is modularized into single-purpose plugins to maintain a lightweight core.
*   **RCI Preheader**: Manages the "kicker" logic above post titles.
*   **RCI News Slider**: Handles the frontend carousel logic.

## Prerequisites

Before contributing to the codebase, ensure your environment meets the following specifications:
*   **Node.js**: v18+ (LTS)
*   **Composer**: v2.5+
*   **Docker**: For local WordPress environment orchestration.

## Workflow Directive

All development must follow the "Main Branch" strategy. Direct commits to production are strictly prohibited. Feature branches must be peer-reviewed before merging into the collective `main` branch.
