---
title: "CI checks"
description: ""
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 500
toc: true
searchExtraKeywords:
  - "CI secret scanning for Azure Pipelines – BluBracket"
resources:
  - src:
---

BluBracket integrates into the CI workflow to automatically check pull requests before they are merged.

BluBracket can be configured to warn or block pull requests when it finds risks in code. Most teams prefer only to warn when risks are detected in code, and data shows those warnings are effective in helping those teams recognize and prevent new risks from being merged in PRs.

BluBracket rich support for:

- [GitHub Checks](/how-to/ci-checks/github-checks/)
- Bitbucket Code Insights

Additionally, [the CI API](/api/ci-checks/) can be used to extend CI checks into nearly any workflow.
