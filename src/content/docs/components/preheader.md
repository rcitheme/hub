---
title: "Preheader"
description: "Logic engine for the 'Preheader/Kicker' meta field implementing the Priority Tree."
---

# Preheader

The **RCI Preheader** (`rci-preheader`) is a utility plugin that manages the "Kicker" or "Eyebrow" text that appears above the main headline of a post. It implements a complex resolution logic called the **Priority Tree** to automatically determine the most relevant context for a piece of content.

## The Priority Tree

The Preheader logic does not simply output a static field. It resolves the value based on the "Specific > General" principle:

1.  **Manual Override** (`post_meta`)
    *   If the editor has explicitly entered a "Custom Preheader" in the post sidebar, this value takes absolute precedence.
    
2.  **Topic Hub** (`term_meta`)
    *   If the post is tagged with a tag marked as a **"Topic Hub"** (via the `rci_is_topic_hub` checkbox), that tag's name is used.
    *   *Example*: A post about "General Strike" tagged with `Strikes (Hub)` will display "Strikes".

3.  **Primary Category** (`term`)
    *   If neither of the above exist, the post's **Primary Category** is used.
    *   *Example*: "News", "Theory", "Analysis".

## Meta Fields

The plugin registers the following internal meta fields:

### Post Meta (`post`)
| Key | Type | Description |
| :--- | :--- | :--- |
| `preheader_custom_label` | `string` | The manual text override for the kicker. |
| `preheader_custom_url` | `string` | Optional custom link for the kicker (defaults to term archive). |

### Term Meta (`post_tag`)
| Key | Type | Description |
| :--- | :--- | :--- |
| `rci_is_topic_hub` | `boolean` | Checkbox on the Tag Edit screen. Marks a tag as a "Hub" for priority resolution. |

## Usage

The value is typically retrieved in themes using the helper function:

```php
// In single.php or block template
$preheader = rci_get_preheader( get_the_ID() );

if ( $preheader ) {
    echo '<span class="rci-preheader">' . esc_html( $preheader['label'] ) . '</span>';
}
```
