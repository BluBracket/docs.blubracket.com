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

BluBracket is a code and git security suite that identifies risks in your code, monitors who and what has access to your code, and tracks where your code goes outside your git repos.

### BluBracket use-cases

- Identifying, preventing, and removing risks in code
  - [Secrets]({{< relref "use-cases#secrets" >}})
  - [Personally identifiable information (PII)]({{< relref "use-cases#pii" >}})
  - [Non-inclusive language (NIL)]({{< relref "use-cases#inclusive-language" >}})
  - [Infrastructure-as-code (IAC) risks]({{< relref "use-cases#iac" >}})
- [Monitoring who and what has access to your code]({{< relref "use-cases#access-auditing" >}})
- [Monitoring where your code goes]({{< relref "use-cases#code-leaks" >}})

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

1. As a SaaS suite providing protection and alerts across a codebase, supporting the [detection, analysis, and remediation of security risks in the code]({{< relref "key-workflows/#understanding-and-taking-action-on-existing-risks" >}}) and related to [code access]({{< relref "key-workflows/#auditing-git-access--configuration" >}})
1. As a [local CLI tool scanning code locally]({{< relref "key-workflows/#pre-commit-hooks" >}}), to support immediate identification of potential risks in the code, without the risk of sending that code to remote servers

And BluBracket integrates at multiple points in the SDLC workflow:

- [Before code is committed]({{< relref "key-workflows/#pre-commit-hooks" >}}), via the CLI and pre-commit hooks, and in popular IDEs
- [Before code is merged]({{< relref "key-workflows/#ci-checks" >}}), via CI checks (GitHub Checks, Bitbucket Code Insights, Jenkins, etc.)
- [Actionable alerts]({{< relref "key-workflows/#alerts" >}}) in Slack and other tools when new risks are detected
- [Tools to analyze and understand existing risks]({{< relref "key-workflows/#pre-commit-hooks" >}}), and trend reports to see improvement over time

### Where does BluBracket integrate?

- [Local/workstation](/intro/integrations/) tools
- [Code servers](/intro/integrations/), like GitHub and Bitbucket
- [CI servers](/intro/integrations/), like GitHub Actions and Jenkins
- [Identity, authentication, and authorization systems](/intro/integrations/) like SAML and Active Directory
- [Messaging systems](/intro/integrations/), like Slack
- [Ticketing & incident management systems](/intro/integrations/), like Jira and PagerDuty
- [Build your own with APIs and webhooks](/intro/integrations/)

### How to get started with BluBracket

[Start a free, no-obligation trial today](https://blubracket.com/contact/get-started/), or [contact our customer success team for a free demo](https://blubracket.com/contact-sales/).

Or [see all the steps to getting started here]({{< relref getting-started >}}).
