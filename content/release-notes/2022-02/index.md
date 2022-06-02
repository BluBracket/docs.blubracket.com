---
title: "2022-02 release"
description: ""
lead: ""
date: 2022-02-04T02:48:57+00:00
draft: false
toc: false
resources:
  - src:
---

### New features, enhancements, and bug fixes

- Improved false positive rejection
- Periodic scans re-process data with the latest rules, and catch pushes missed in case the git host dropped the webhook
- Support for filtering by commit time
- Big fixes and improvements to the BluPrint report
- New report: most used secrets across your code base (calculated by hash, BluBracket does not store your code or any secrets)
