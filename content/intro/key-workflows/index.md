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

As developers, we depend on a quick feedback loop to understand if our code is working and does what is expected. BluBracket tools can offer automated security guidance as part of that feedback loop, in the IDE of your choice, pre-commit, and as part of the CI flow.

#### Pre-commit hooks

The BluBracket CLI scan for secrets, PII, and non-inclusive language before commits, to prevent risks from ever getting into repos from the start.

[screenshot]

The CLI supports local configuration with directives in `~/.blubracket/`, repo-level configuration for all committers to the repo with directives in `.blubracket/` at the repo root, and global configuration for all users of a BluBracket account with directives set at that level. Additionally, inline directives inserted as code comments can be used to mark specific items to ignore, putting decisions about how to handle selected code risks in context with the code.

Users can choose to make pre-commit risk detection a blocking or non-blocking feature, to support whatever workflow a developer prefers.

#### IDE integration

Popular IDEs, such VS Code and IntelliJ, present messages from pre-commit hooks in-context so you don't have to interrupt your flow to get feedback.

[screenshot]

#### CI checks

Pre-commit hooks prevent most risks before they ever get into a repo, but CI checks provide an extra layer of guidance for teams.

[screenshot]

GitHub is just one [supported code server and CI environment]({{< relref integrations >}}).

As with pre-commit hooks, CI checks and all BluBracket's server-side code scanning supports repo-level configuration with directives in `.blubracket/` at the repo root, and global configuration for all users and all repos in a BluBracket account with directives set at that level. Additionally, inline directives inserted as code comments can be used to mark specific items to ignore, putting decisions about how to handle selected code risks in context with the code.

#### Alerts

BluBracket can send alerts any time if finds new risks committed to monitored repos. Messaging a Slack channel is just one option, [see the full list of configurations for more]({{< relref integrations >}}).

[screenshot]

### Understanding and taking action on existing risks

- Tools to analyze and understand existing risks, and trend reports to see improvement over time

### Auditing git access & configuration

[placeholder]
