---
title: "Integrations"
description: ""
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 500
toc: true
tags:
  - integrations
resources:
  - src: blubracket-blocks-secrets-git-pre-commit.pngx
  - src: git-repos-scanned-for-security-risks-by-blubracket.png
  - src: secret-detection-in-github-checks-ci-via-blubracket.png
  - src: okta-saml-single-sign-on-to-blubracket-code-scanner.png
  - src: code-risk-alerts-in-slack-via-blubracket.png
  - src: automatic-jira-ticket-when-risk-found-in-code-with-blubracket.png
---

### Local workflow tools

{{< figure src="blubracket-blocks-secrets-git-pre-commit.png" caption="The BluBracket CLI tool can identify and block secrets before they're committed." >}}

Available local tools and integrations

- [CLI](/how-to/cli)
- IntelliJ (via CLI, full plugin coming soon)
- Visual Studio Code (via CLI)

Usage guide: [installing and using the CLI](/how-to/cli/).

### Code servers

{{< figure src="git-repos-scanned-for-security-risks-by-blubracket.png" caption="BluBracket scans repositories hosted in GitHub, GitLab, Bitbucket, and others." >}}

Certified & supported code servers:

- GitHub Cloud
- GitHub Enterprise (including on-prem)
- GitLab Cloud
- GitLab on-prem
- Bitbucket Cloud
- Bitbucket Server
- Azure DevOps
- Gerrit

Usage guide: [adding code servers](/how-to/code-servers/add-code-servers/).

### CI servers

{{< figure src="secret-detection-in-github-checks-ci-via-blubracket.png" caption="BluBracket can identify risks in the CI workflow via GitHub Checks and others." >}}

Certified & supported CI servers:

- GitHub Checks
- Bitbucket Code Insights
- Jenkins

Additional integrations are available via [our open CI API](/api/ci-checks).

Usage guide: [configuring CI checks](/how-to/ci-checks/).

### Identity, authentication, and authorization

{{< figure src="okta-saml-single-sign-on-to-blubracket-code-scanner.png" caption="BluBracket supports Okta and other single sign-on solutions." >}}

Certified & supported identity integrations:

- Azure AD
- Okta
- Ping
- SAML
- GitHub OAuth
- Gitlab OAuth (coming soon)
- Bitbucket OAuth (coming soon)

### Messaging

{{< figure src="code-risk-alerts-in-slack-via-blubracket.png" caption="BluBracket integration with Slack can alert teams about code risks in new commits in real time." >}}

Certified & supported messaging integrations:

- [Slack](/how-to/messaging/slack/)
- Microsoft Teams

### Ticketing & incident management

{{< figure src="automatic-jira-ticket-when-risk-found-in-code-with-blubracket.png" caption="BluBracket can automatically create a Jira ticket when risks are found in new commits." >}}

Certified & supported ticketing & incident management integrations:

- [Jira](/how-to/ticketing/jira/)
- ServiceNow
- PagerDuty
- Splunk

### Build your own

- [APIs](/api/)
- Webhooks (coming soon)
