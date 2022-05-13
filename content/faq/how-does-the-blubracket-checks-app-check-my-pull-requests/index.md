---
title: "How does the BluBracket checks app check my pull requests?"
description: "Overview of how the BluBracket checks app for GitHub works."
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 100
toc: false
tags:
  - github
  - GitHub Checks
  - pull requests
  - CI
resources:
  - src:
---

The BluBracket app for GitHub Checks scans pull requests for any secrets and reports its findings in the pull request.

{{< youtube xAuJOzDvx6A>}}

### Operational detail

BluBracket receives a web hook with every pull request in every repo it is installed on. When that webhook is received, BluBracket checks out the branch for the pull request and scans it for any secrets. The app then annotates the PR at lines where it detected secrets, and generates a summary report.

All checks typically run and are reported back to GitHub within seconds of receiving the webhook, though repo size and similar factors may increase latency.

### Modes of operation

The BluBracket app can run in either advisory or blocking mode. The app detects the same secrets either way, but the advisory mode does not block the pull request. Our data shows that the advisory mode is over 80% effective at stopping new code security debt before it is merged, without the frustration created by blocking PRs.

### Installation and usage

Full installation and usage details are in the [CI checks user guide](/how-to/ci-checks/).
