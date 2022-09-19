---
title: "Integration architecture"
description: "How BluBracket connects to your world"
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 1000
toc: true
resources:
  - 
---

BluBracket runs as SaaS, on-prem, or in your VPC, and integrates with a variety of cloud-hosted or on-prem tools to secure your entire code pipeline from developer to deploy.

{{< figure src="blubracket-architecture.svg" caption="BluBracket architecture diagram. [View larger](/how-to/architecture/blubracket-architecture.svg)." >}}

### Risk detection orchestration engine

BluBracket executes risk scanners on-demand, in response to events like new code pushes or pull requests, and on a periodic schedule as appropriate for the resource being scanned and user needs.

BluBracket's native risk detectors run in this layer, but external risk detectors can be integrated by pushing results to BluBracket, or BluBracket can request or poll for results.

User code is never stored anywhere in BluBracket. It is deleted after scanning and indexing, and only code fingerprints and risk data are stored.

All secrets needed to integrate with customer resources are stored in an encrypted vault. No other customer secrets are ever stored in BluBracket.

### Results aggregation & outbound integrations engine

All user-facing interactions and downstream integrations are managed here.

BluBracket's alert pipelines support fine-grained routing of alerts to multiple destinations based on customer-defined rules.

Rich filtering and reporting tools give users visibility to their overall code health, areas of highest risk, and actionable things they can do now to improve their code health.

All secrets needed to integrate with customer resources are stored in an encrypted vault. No other customer secrets are ever stored in BluBracket.

### Customer SCM solutions

GitHub, GitLab, Bitbucket, Azure DevOps, and more, running in the cloud and on-prem [are supported](/intro/integrations/#code-servers).

BluBracket registers webhooks to receive events for every code push, pull request, and others.

[Automated pull request security reviews](/intro/integrations/#ci-servers) (in supported platforms) provide feedback when developers need it.

### Partner SaaS code scanners

BluBracket integrates with optional partner SaaS risk detectors through webhooks, polling, and other API interactions as defined by the integration.

### Customer code scanners

BluBracket supports customer-defined risk scanners running in customer infrastructure to aggregate results and leverage BluBracket's alert pipelines.

### Customer-specific integrations

BluBracket integrates wherever customers need reliable, actionable, real-time risk information. Full API docs available in-product, with [intro here](/api/intro-auth-keys/).

### Identity, SSO, and RBAC providers

[Single sign-on support](/intro/integrations/#identity-authentication-and-authorization) with rich RBAC allows teams to share access with everybody who needs it.

### Messaging integrations

BluBracket can push events to a variety of [messaging solutions](/intro/integrations/#messaging).

### Ticketing integrations

BluBracket can push events to a variety of [ticketing solutions](/intro/integrations/#ticketing--incident-management).

### Incident management integrations

BluBracket can push events to a variety of [incident management and SIEM solutions](/intro/integrations/#ticketing--incident-management).
