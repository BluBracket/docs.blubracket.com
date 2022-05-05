---
title: "2021-09-28 release"
description: ""
lead: ""
date: 2021-09-28T02:48:57+00:00
draft: false
toc: false
resources:
  - src:
---

### New Features and Enhancements

* Additional checks performed when user adds new code server. We now identify and show a message if the user does not have adequate organization level permissions, even if the Personal Access Token does have required permissions. Inadequate user permissions will result in incomplete repo risk calculations.

* Code Leaks now filters out Public to Public alerts.

* Code Leaks details now displays a deep link to the selected leaked file

### Free Trial Edition

The Enterprise Edition features and bug fixes listed in these release notes also apply to the Free Trial Edition.

### Bug Fixes

* CORE-8075 Repos not showing up right away in Monitored Repo Select Screen

* CORE-8182 Fix issue where unable to deselect monitored repos from repo select page

* CORE-8323 - Fix issue where unable to add internal/external domains to Enterprise Repositories page

* CORE-7905 - Fix slow API response for code leak api /api/publicanalyzer/codecopy/repo
