---
title: "BluBracket use-cases"
description: ""
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 200
toc: true
resources:
  - src:
---

BluBracket is most often used to identify risks in code, who has access, and where it goes:

- Identifying, blocking, and removing risks in code
  - [Secrets](#secrets-in-code)
  - [Personally identifiable information (PII)](#personally-identifiable-information-pii)
  - [Non-inclusive language (NIL)](#non-inclusive-language-nil)
  - [Infrastructure-as-code (IAC) risks](#infrastructure-as-code-iac-risks)
- [Auditing who has access](#access-auditing)
- [Auditing where it goes](#code-leaks)

## Secrets in code

Passwords, keys, and other secrets in code are no longer secret when code is shared across teams, repos are made public, or when employees leave with copies of the code.

BluBracket's tools identify and help eliminate secrets throughout the development workflow (before commit, review on pull request, and alert on commits to monitored repos), and make it easy to triage and mitigate secrets previously committed.

BluBracket's deep scans identify secrets in git history, and can even identify active secrets so you know which ones are most important.

## Personally identifiable information (PII)

Unlike secrets, personally identifiable information can't be changed or rotated. As companies face growing liability for mishandling PII, finding and excising it from code is becoming a growing need.

BluBracket's deep scans identify PII in git history, show teams the PII risk across their codebase, and help remediate. Just as with BluBracket's secret detection tools, BluBracket can block commits of new PII, block PRs with PII, and alert teams any time PII is committed to monitored repos.

## Non-inclusive language (NIL)

Companies and open source communities are both increasingly aware of the role inclusive language plays in attracting and retaining team members in all roles. Non-inclusive language creates both significant brand risks, as well as retention risks.

BluBracket's tools help identify non-inclusive language throughout the development process, and guide teams to continuous improvement over time.

## Infrastructure as code (IaC) risks

Auditing infrastructure-as-code for proper configuration before it's applied to the infrastructure reduces risk and improves productivity for teams of all sizes.

BluBracket's tools audit IaC throughout the development process, but teams value the guidance most when reviewing pull requests.

## Access auditing

Auditing who and what systems have access to code is critical to supporting modern workflows that often require broad access across the organization, while also protecting organizations and teams against stale permissions and misconfigurations that can emerge over time.

Identifying who has access to what, and calling out the best-practice configuration of everything from git hooks to branch protection rules helps guide teams to continuous improvement and ongoing operational security. When teams know they can easily audit access, they're both more productive because they can more easily grant access, and more secure because they have tools to

## Code leaks

{{< alert icon="👉" text="This feature is only available to Enterprise customers." />}}

Productive teams need to share code, but when code leaks outside the organization it can risk revealing key details attackers can leverage against the app, or worse.

Most code leaks are unintentional—private code can be accidentally committed to open source projects or in gists to discuss a problem—but the pathways code moves through frustrates developers and hampers productivity. BluBracket can identify code leaks so they can be remediated before they cause significant harm.
