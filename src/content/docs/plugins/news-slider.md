---
title: "News Slider"
description: "A responsive carousel block for displaying latest news with manual overrides."
---

# News Slider

The **RCI News Slider** (`rci-news-slider`) is a dynamic block designed to showcase featured content in a carousel format. It is typically used on the homepage or landing pages to highlight priority articles.

## Features

- **Responsive**: Adapts from single-column on mobile to 3-column on desktop.
- **Manual Override**: Editors can manually select specific posts ("Kickers") to pin to the slider.
- **Category Fallback**: Automatically fills remaining slots from a specified category if manual posts aren't sufficient.
- **WEBP Support**: Native support for optimized WEBP background images.

## Block Attributes

The block supports the following configuration options via `block.json` and the Editor Sidebar:

| Attribute | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `postsToShow` | `number` | `3` | Number of slides to display. |
| `categoryId` | `number` | `null` | The ID of the category to pull posts from (fallback). |
| `showDate` | `boolean` | `true` | Toggle display of post publication date. |
| `manualPostIds` | `array` | `[]` | List of post IDs manually selected by the editor. |

## Data Logic

The slider follows a specific priority order when populating content:

1.  **Manual Selection**: Checks `manualPostIds` first. If posts are selected, they appear first in the order.
2.  **Category Fallback**: If the number of manual posts is less than `postsToShow`, the remaining slots are filled by the latest posts from `categoryId`.
3.  **Recent Fallback**: If no category is selected, it falls back to the absolute latest posts across the site.

## Implementation Example

```php
<!-- PHP Render Callback (Simplified) -->
$args = array(
    'post_type'      => 'post',
    'posts_per_page' => $attributes['postsToShow'],
    'post_status'    => 'publish',
    'orderby'        => 'date',
    'order'          => 'DESC',
);

if ( ! empty( $attributes['categoryId'] ) ) {
    $args['cat'] = $attributes['categoryId'];
}

// Merge manual posts logic...
```
