---
title: "Preheader Logic"
description: "Explanation of the Priority Tree logic for the RCI Preheader plugin."
---

# Preheader Logic

The **RCI Preheader** determines the "kicker" text displayed above the post title (e.g., "WORLD ECONOMY" or "THEORY"). Ideally, this provides context to the reader about the article's topic.

## The Priority Tree

The system calculates which label to display based on a strict hierarchy. It stops at the first match found.

### 1. Manual Override (Highest Priority)
**Meta Field:** `preheader`
If an editor has manually entered text into the "Preheader" field on the post edit screen, this value takes absolute precedence. It is the visual equivalent of a direct order.

### 2. Topic Hub (Tag-based)
**Term Meta:** `rci_is_topic_hub`
If no manual kicker is set, the system checks the post's **Tags**.
*   It iterates through assigned tags.
*   It checks for the boolean meta field `rci_is_topic_hub`.
*   If a tag is marked as a "Topic Hub", that tag's name is used as the preheader.
*   *Note: If multiple tags are effectively "Hubs", the first one returned by the database query is used.*

### 3. Category Fallback (Lowest Priority)
**Taxonomy:** `category`
If neither of the above conditions is met, the system defaults to the **Primary Category** of the post. This ensures that every post has at least some contextual labeling.

## Custom URLs
Additionally, the preheader can link to a custom destination if `preheader_custom_url` is defined. Otherwise, it links to the archive page of the Tag/Category used to generate the label.
