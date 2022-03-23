---
title: "Key workflows"
description: ""
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 400
toc: true
searchExtraKeywords:
  - "Why should I use the BluBracket Free Trial to discover secrets in code when there are so many other tools available? – BluBracket"
tags:
  - workflows
resources:
  - src: blubracket-blocks-secrets-git-pre-commit.pngx
  - src: secret-detection-in-github-checks-ci-via-blubracket.png
  - src: code-risk-alerts-in-slack-via-blubracket.png
  - src: comparing-code-and-access-risks-for-repository-in-blubracket.png
  - src: git-repos-scanned-for-security-risks-by-blubracket.png
  - src: filtering-alerts-in-blubracket.png
  - src: git-access-and-configuration-monitoring-by-blubracket.png
---

BluBracket code security tools are optimized to prevent risks from getting into code, and to promote the process of continuous improvement that reduces existing risks from code over time.

### Preventing risks in code

As developers, we depend on a quick feedback loop to understand if our code is working and does what is expected. BluBracket tools can offer automated security guidance as part of that feedback loop, in the IDE of your choice, pre-commit, and as part of the CI flow.

#### Pre-commit hooks

The BluBracket CLI scan for secrets, PII, and non-inclusive language before commits, to prevent risks from ever getting into repos from the start.

{{< figure src="blubracket-blocks-secrets-git-pre-commit.png" caption="The BluBracket CLI tool can identify and optionally block secrets before they're committed." >}}

The CLI supports local configuration with directives in `~/.blubracket/`, repo-level configuration for all committers to the repo with directives in `.blubracket/` at the repo root, and global configuration for all users of a BluBracket account with directives set at that level. Additionally, inline directives inserted as code comments can be used to mark specific items to ignore, putting decisions about how to handle selected code risks in context with the code.

Users can choose to make pre-commit risk detection a blocking or non-blocking feature, to support whatever workflow a developer prefers.

- Usage guide: [installing and using the CLI](/how-to/cli/).

#### IDE integration

Popular IDEs, such as VS Code and IntelliJ, present messages from pre-commit hooks in context so you don't have to interrupt your flow to get feedback.

- FAQ: [supported IDEs](/faq/supported-ide/).

#### CI checks

Pre-commit hooks prevent most risks before they ever get into a repo, but CI checks provide an extra layer of guidance for teams.

{{< figure src="secret-detection-in-github-checks-ci-via-blubracket.png" caption="BluBracket can identify risks in the CI workflow via GitHub Checks and others." >}}

GitHub is just one [supported code server and CI environment]({{< relref "/intro/integrations#ci-servers" >}}).

As with pre-commit hooks, CI checks and all BluBracket's server-side code scanning supports repo-level configuration with directives in `.blubracket/` at the repo root, and global configuration for all users and all repos in a BluBracket account with directives set at that level. Additionally, inline directives inserted as code comments can be used to mark specific items to ignore, putting decisions about how to handle selected code risks in context with the code.

- Usage guide: [configuring CI checks](/how-to/ci-checks/).

#### Alerts

BluBracket can send alerts any time it finds new risks committed to monitored repos. Messaging a Slack channel is just one option, [see the full list of configurations for more]({{< relref integrations >}}).

{{< figure src="code-risk-alerts-in-slack-via-blubracket.png" caption="BluBracket integration with Slack can alert teams about code risks in new commits in real time." >}}

- More info: [messaging](/intro/integrations/#messaging) and [SIEM/ticketing](/intro/integrations/#ticketing--incident-management) integrations.

### Understanding and taking action on existing risks

Preventing new risks from getting into your code is one of the most important steps to continuous improvement. Understanding your overall code health so you can prioritize and track your efforts at continuous improvement is the next most critical step.

BluBracket scans your code, including every historical commit, to identify [secrets](/intro/use-cases/#secrets), [PII](/intro/use-cases/#pii), [non-inclusive language](/intro/use-cases/#inclusive-language), and [infrastructure-as-code risks](/intro/use-cases/#iac) lurking within.

{{< figure src="comparing-code-and-access-risks-for-repository-in-blubracket.png" caption="BluBracket categorizes risks so you can understand your code health and areas of highest risk." >}}

Reviewing those risks in the BluBracket dashboard allows you to see the overall health of your scanned codebase, the areas of highest risk, and find specific issues you can act on now to improve your code security.

#### Repo risk scores

{{< figure src="git-repos-scanned-for-security-risks-by-blubracket.png" caption="BluBracket risk scores make it easy to see code health and prioritize effort." >}}

BluBracket evaluates the health of every scanned repo and sums it up in an easy-to-understand score so you can rank and prioritize effort across your codebase.

#### Detailed filtering and reporting

{{< figure src="filtering-alerts-in-blubracket.png" caption="Filter risks to understand code health and find actionable issues." >}}

Filtering tools allow you to take control to see exactly what risks exist in your codebase and where to target and prioritize efforts based on your specific code condition and threat model.

### Automated git access & configuration monitoring

It's as important to monitor who and what has access to code as it is to monitor the risks in the code. BluBracket's tools make it easy to support multiple privilege models as needed for your organization.

Privilege models that grant developers broad access to code and workflow configuration by default can enable increased productivity and innovation across the codebase, but require automatic and continuous auditing of access and configuration to ensure security.

Least privilege models can maximize security, but enforcing it with common git code servers can be difficult without automated, continuous audits of access and configuration.

{{< figure src="git-access-and-configuration-monitoring-by-blubracket.png" caption="A sample of BluBracket's automated git access & configuration monitoring alerts." >}}

BluBracket's git access and configuration monitoring tools make it easy to see who and what has access across the codebase, and alert when access permissions don't conform to policy.
