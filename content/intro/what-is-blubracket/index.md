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

{{< youtube L_bSENxHp6M >}}

### BluBracket use-cases

- Identifying, preventing, and removing risks in code
  - [Secrets]({{< relref "use-cases#secrets" >}})
  - [Personally identifiable information (PII)]({{< relref "use-cases#pii" >}})
  - [Non-inclusive language (NIL)]({{< relref "use-cases#inclusive-language" >}})
  - [Code analysis (SAST)]({{< relref "use-cases#sast" >}})
  - [Infrastructure-as-code (IAC) risks]({{< relref "use-cases#iac" >}})
  - [Dependency vulnerabilities]({{< relref "use-cases#sca" >}})
- [Monitoring who and what has access to your code]({{< relref "use-cases#access-auditing" >}})
- [Monitoring where your code goes]({{< relref "use-cases#code-leaks" >}})

### Who is BluBracket for?

BluBracket is for individual developers, development and appsec teams of all sizes, and enterprise infosec teams.

- **BluBracket Community Edition**

    Core BluBracket code security features—including the CLI tools. [Available free with no time limit for personal use and teams under 50 devs](https://blubracket.com/contact/get-started/).

- **BluBracket Team Edition**

    All the BluBracket features to identify risks in your code, and improve code security with every commit. [Available as a full-featured, free, no-obligation trial](https://blubracket.com/contact/get-started/).

- **BluBracket Enterprise Edition**

    The entire suite of BluBracket code security features to identify risks in your code, git access and configuration risks, and track where code goes outside your git repos. [Contact our customer success team for a free demo](https://blubracket.com/contact-sales/).

### How BluBracket works

BluBracket has two parallel modes of operation:

1. As a SaaS suite providing protection and alerts across a codebase, supporting the [detection, analysis, and remediation of security risks in the code]({{< relref "key-workflows/#understanding-and-taking-action-on-existing-risks" >}}) and related to [code access]({{< relref "key-workflows/#auditing-git-access--configuration" >}})
1. As a [local code security tool]({{< relref "key-workflows/#preventing-risks-in-code" >}}), with integrations to popular IDEs to support immediate identification of potential risks in the code, without the risk of sending that code to remote servers

And BluBracket integrates at multiple points in the SDLC workflow:

- [Before code is committed]({{< relref "key-workflows/#preventing-risks-in-code" >}}), via the CLI and pre-commit hooks, and in popular IDEs
- [Before code is merged]({{< relref "key-workflows/#ci-checks" >}}), via CI checks (GitHub Checks, Bitbucket Code Insights, Jenkins, etc.)
- [Actionable alerts]({{< relref "key-workflows/#alerts" >}}) in Slack and other tools when new risks are detected
- [Tools to analyze and understand existing risks]({{< relref "key-workflows/#understanding-and-taking-action-on-existing-risks" >}}), and trend reports to see improvement over time

### Where does BluBracket integrate?

- [Local/workstation](/intro/integrations/#local-workflow-tools) tools
- [Code servers](/intro/integrations/#code-servers), like GitHub and Bitbucket
- [CI servers](/intro/integrations/#ci-servers), like GitHub Actions and Jenkins
- [Identity, authentication, and authorization systems](/intro/integrations/#identity-authentication-and-authorization) like SAML and Active Directory
- [Messaging systems](/intro/integrations/#messaging), like Slack
- [Ticketing & incident management systems](/intro/integrations/#ticketing--incident-management), like PagerDuty and PagerDuty
- [Build your own with APIs and webhooks](/intro/integrations/#build-your-own)

### How to get started with BluBracket

Our Community Edition is always free and you can do a no-obligation trial of our Team Edition, [just sign in here to get started](https://blubracket.com/contact/get-started/). Interested in all our features? [Contact our customer success team for a free Enterprise Edition demo](https://blubracket.com/contact-sales/).

[See all the steps to getting started for free, online here]({{< relref getting-started >}}).
