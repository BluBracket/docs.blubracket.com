---
title: "2021-11-22 release"
description: ""
lead: ""
date: 2021-11-22T02:48:57+00:00
draft: false
toc: false
resources:
  - src:
---

### New Features and Enhancements

- “Other” type has been added to the Secret Types pie chart on the BluPrint page. The pie chart should now show the top 6 secret types as well as a 7th that is composed of all of the remaining types. Clicking on any of the pie sections should take the user to a filtered table for the selected secret type.
- Many additional enhancements have been added to identify false positives where secrets are concerned.
- Additional tags have been added to auto-dismissed secrets - staging and sample
- False positive improvements made with regards to passwords found in XML files

### Bug Fixes

- CORE-8828 - Descriptions in Alerts and Events were not matching for Non-inclusive Language. Events were just showing “Customer Regex” instead of helpful description.
- Many bug fixes with regards to false positives as well.
