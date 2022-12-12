---
title: "CI checks"
description: "Integrating BluBracket into the CI code review process."
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 500
toc: true
tags:
  - integrations
  - workflows
  - CI
  - continuous integration
searchExtraKeywords:
  - "CI secret scanning for Azure Pipelines – BluBracket"
  - "CI secret scanning for GitLab – BluBracket"
resources:
  - src:
---

BluBracket integrates into the CI workflow to automatically check pull requests before they are merged.

BluBracket can be configured to warn or block pull requests when it finds risks in code. Most teams prefer only to warn when risks are detected in code, and data shows those warnings are effective in helping those teams recognize and prevent new risks from being merged in PRs.

BluBracket has full support for:

- [GitHub Checks](/how-to/ci-checks/github-checks/)
- [Bitbucket Code Insights](/how-to/ci-checks/bitbucket-insights/)

