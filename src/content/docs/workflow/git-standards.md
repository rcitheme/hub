---
title: "Git Standards"
description: "Commit conventions and author attribution standards for the RCI codebase."
---

# Git Standards

To maintain a professional and unified codebase across the International Marxist Tendency's digital ecosystem, strict version control standards are enforced.

## Author Attribution

All plugins and themes developed for the RCI must use the official organizational identity in their file headers and composer configurations.

> [!IMPORTANT]
> **Do not use personal names or emails.** The collective identity takes precedence.

### WordPress Plugin Header
Every main PHP file (e.g., `rci-news-slider.php`) must contain the following standard header:

```php
/**
 * Plugin Name:       RCI Component Name
 * Description:       Brief description of functionality.
 * Version:           1.0.0
 * Author:            RCI Development Team
 * Author URI:        marxist.com
 * Text Domain:       rci-component-slug
 */
```

### Git Config
Configure your local repository to use the development team identity if working from a shared station, or ensure your personal commits map correctly to the organization.

```bash
git config user.name "RCI Development Team"
git config user.email "webmaster@marxist.com"
```

## Commit Messages

We follow the **Conventional Commits** specification to automate changelog generation.

### Format
`<type>(<scope>): <subject>`

### Allowed Types
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools

### Examples

```bash
feat(news-slider): add manual kicker override logic
fix(preheader): resolve priority tree conflict on category pages
style(lenin): update H1 typography scale
docs(hub): add documentation for git standards
```
