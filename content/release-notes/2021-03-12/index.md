---
title: "2021-03-12 release"
description: ""
lead: ""
date: 2021-03-12T02:48:57+00:00
draft: false
toc: false
resources:
  - src:
---

### New Features and Enhancements

### New Public APIs

* Two new APIs have been added to the list of public APIs available. The two new APIs allow users to dismiss alerts and re-enabled alerts that have been dismissed. This is especially important for users that have integrated with their CICD solutions and want to complete the loop. For example, a developer commits code that triggers a BluBracket alert, the user’s CICD integration recognizes the alert, creates a ticket and notification to the appropriate developer/administrator to remediate the issue, the developer/administrator remediates and closes the ticket, which triggers the API to dismissed the addressed alert in BluBracket.

* For additional information on available BluBracket APIs navigate to the support documentation [here](https://support.blubracket.com/hc/en-us/articles/360055569611-Event-and-Alert-APIs).

### Bug Fixes

* CORE-4127 - description of “Repository pushed to public server” was showing up in red text. Has been addressed.

* CORE-4927 - Developer Type chart on the BluPrint page was showing a drop-down that should not have been there. This has been fixed.
