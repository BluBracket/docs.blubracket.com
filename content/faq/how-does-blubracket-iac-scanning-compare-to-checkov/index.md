---
title: "How does BluBracket IaC scanning compare to Checkov?"
description: ""
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 100
toc: false
tags:
  - infrastructure as code
  - IaC
resources:
  - src:
---

BluBracket's IaC scanning is built on the open source Checkov scanner, combined with BluBracket's workflow tools optimized to help development teams identify new risks before propagating in code, and knock down the risks already in their code through continuous improvement.

|               | Checkov                | BluBracket IaC scanning|
|:----------------------|:----------------------:|:---------------------:|
| IaC scanning          | ✅                      | ✅                     |
| Graph-based queries   | ✅                      | On roadmap            |
| IDE integration       | ✅                      | ✅                     |
| IaC policy violations     | ✅                      | ✅                     |
| Custom policies       | Requires customization | On roadmap            |
| Notifications         | ⛔️                      | ✅                     |
| Dashboards            | ⛔️                      | ✅                     |
| External dependencies/<br />supply chain tracking  | ⛔️                      | On roadmap            |
| Compliance reporting  | ⛔️                      | ✅                     |
| Repo integration      | ⛔️                      | ✅                     |
| Central configuration | ⛔️                      | ✅                     |
| REST API              | ⛔️                      | ✅                     |
| CI/CD integrations    | Limited                | ✅                     |
| Notifications         | ⛔️                      | ✅                     |
| Support level         | Community              | Enterprise            |
