---
title: "Key workflows"
description: ""
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 400
toc: true
resources:
  - src:
---

BluBracket code security tools are optimized to prevent risks from getting into code, and to promote the process of continuous improvement that reduces existing risks from code over time.

### Preventing risks in code

[placeholder]

#### Pre-commit hooks

The BluBracket CLI scan for secrets, PII, and non-inclusive language before commits, to prevent risks from ever getting into repos from the start.

The CLI supports local configuration with directives in `~/.blubracket/`, repo-level configuration for all committers to the repo with directives in `.blubracket/` at the repo root, and global configuration for all users of a BluBracket account with directives set at that level. Additionally, inline directives inserted as code comments can be used to mark specific items to ignore, putting decisions about how to handle selected code risks in context with the code.

Users can choose to make pre-commit risk detection a blocking or non-blocking feature, to support whatever workflow a developer prefers.

#### CI checks

- Before code is merged, via CI checks (GitHub Checks, Bitbucket Code Insights, Jenkins, etc.)

#### Alerts

### Understanding and taking action on existing risks

- Actionable alerts in Slack and other tools when new risks are detected
- Tools to analyze and understand existing risks, and trend reports to see improvement over time

### Auditing git access & configuration

[placeholder]
