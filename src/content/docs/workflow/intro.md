---
title: Workflow
description: Process and standards for development.
---

# Workflow

Our development workflow is built around **stability**, **transparency**, and **collaboration**. As a distributed international team, we rely on strict standards to ensure that code written in one time zone can be seamlessly reviewing and deployed in another.

## GitOps Principles

We treat infrastructure and configuration as code. This means:
*   **Version Control Everything**: Not just plugin code, but theme configurations, build scripts, and documentation.
*   **Pull Requests are Mandatory**: No direct pushes to `main`. All changes must be reviewed by at least one other developer.
*   **Automated Testing**: CI/CD pipelines run on every PR to check for PHP syntax errors, JS linting issues, and build failures.

## Development Lifecycle

1.  **Issue Tracking**: All work starts with a GitHub Issue.
2.  **Branching**: Create a feature branch from `main` using the format `feature/issue-id-description`.
3.  **Development**: Write code locally, adhering to the [Git Standards](/docs/workflow/git-standards).
4.  **Testing**: Verify changes in a local environment identical to production (using Docker).
5.  **Review**: Submit a PR. Address feedback.
6.  **Merge & Deploy**: Upon approval, merge to `main`. Deployment is automated via GitHub Actions.

## Standards & Best Practices

### Git Standards
We follow the **Conventional Commits** specification. This allows us to automatically generate changelogs and version numbers.
*   **Feat**: A new feature
*   **Fix**: A bug fix
*   **Docs**: Documentation only changes
[Read full Git Standards](/docs/workflow/git-standards)

### Code Style
*   **PHP**: PSR-12
*   **JavaScript**: AirBnB / ESLint Standard
*   **CSS**: BEM naming convention
