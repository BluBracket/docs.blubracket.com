---
title: "What is BluBracket?"
description: ""
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 100
toc: true
resources:
  - src:
---

BluBracket is a code and git security suite that identifies risks in your code, audits who and what has access to your code, and tracks where your code goes outside your git repos.

### BluBracket use-cases

- Identifying, blocking, and removing risks in code
  - [Secrets]({{< relref "use-cases#secrets-in-code" >}})
  - [Personally identifiable information (PII)]({{< relref "use-cases#personally-identifiable-information-pii" >}})
  - [Non-inclusive language (NIL)]({{< relref "use-cases#non-inclusive-language-nil" >}})
  - [Infrastructure-as-code (IAC) risks]({{< relref "use-cases#infrastructure-as-code-iac-risks" >}})
- [Auditing who has access]({{< relref "use-cases#access-auditing" >}})
- [Auditing where it goes]({{< relref "use-cases#code-leaks" >}})

### Who is BluBracket for?

BluBracket is for individual developers, development and appsec teams of all sizes, and enterprise infosec teams.

- **BluBracket Community Edition**

    Core BluBracket code security features—including the CLI tools.[Available free with no time limit for personal and open source use](https://blubracket.com/contact/get-started/).

- **BluBracket Teams Edition**

    All the BluBracket features to identify risks in your code, as well as git access and configuration risks.

    [Available as a full-featured, free, no-obligation trial](https://blubracket.com/contact/get-started/). After the trial, the account will automatically convert to a BluBracket Community Edition account.

- **BluBracket Enterprise Edition**

    The entire suite of BluBracket code security features to identify risks in your code, git access and configuration risks, and track where code goes outside your git repos.

    [Contact our customer success team for a free demo](https://blubracket.com/contact-sales/).

### How BluBracket works

BluBracket has two parallel modes of operation:

1. As a SaaS suite providing protection and alerts across a codebase, supporting the detection, analysis, and remediation of security risks in the code and related to code access
1. As a local CLI tool scanning code locally, to support immediate identification of potential risks in the code, without the risk of sending that code to remote servers

And BluBracket integrates at multiple points in the SDLC workflow:

- Before code is committed, via the CLI and pre-commit hooks
- Before code is merged, via CI checks (GitHub Checks, Bitbucket Code Insights, Jenkins, etc.)
- Actionable alerts in Slack and other tools when new risks are detected
- Tools to analyze and understand existing risks, and trend reports to see improvement over time

### What does BluBracket integrate with?

- Local/workstation tools
  - CLI
- Code servers
  - GitHub
  - GitLab
  - Bitbucket
  - Azure DevOps ([contact us for beta]({{< ref contact-support >}}))
  - Gerrit (coming soon)
- Identity, authentication, and authorization
  - Azure AD
  - Okta
  - Ping
  - SAML
  - OAuth (coming soon)
- Messaging
  - Slack
  - Microsoft Teams
- Ticketing & incident management
  - Jira
  - ServiceNow
  - PagerDuty
  - Splunk
- Build your own
  - APIs
  - Webhooks (coming soon)

### How to get started with BluBracket

[Start a free, no-obligation trial today](https://blubracket.com/contact/get-started/), or [contact our customer success team for a free demo](https://blubracket.com/contact-sales/).

Or [see all the steps to getting started here]({{< relref getting-started >}}).
