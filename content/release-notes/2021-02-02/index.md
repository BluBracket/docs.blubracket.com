---
title: "2021-02-02 release"
description: ""
lead: ""
date: 2021-02-02T02:48:57+00:00
draft: false
toc: false
resources:
  - src:
---

### New Features
----------------

### Repo Risk Score and Secret Risk Score

* The BluBracket Community Edition has introduced the concepts of Repository Risk Score and Secret Risk Score to the interface as of this release. This feature is meant to give the user, at a glance, an idea of the potential risk involved with a specific repository.

* The Repository Risk Score is a number that is meant to reflect the number of unreviewed secrets that exist within the repository as well as their potential severity. The higher the number the more secrets that may exist in the repository or the more severe the secrets in the repository may be.

* The Secret Score is a number that is assigned to each secret that is found in a repository. The higher the secret score the more severe the secret is likely to be. For example, if a token is found to be active it will have a much higher number than one that is inactive.

* The Repo Risk Score is an accumulation of the Secret Scores found in a given repository. These numbers are still being refined. We would love your feedback on how these are working for you. Let us know. support@blubracket.com

### Command Line Interface (CLI) Tool

* The BluBracket Command Line Interface (CLI) Tool is a downloadable application that developers can run on their devices to catch secrets before they are committed to a repository. The tool leverages pre-commit hooks and will identify any of the 50+ tokens, keys and IDs as well as passwords and regular expressions. The tool can be downloaded from the main portal page. For more information check out the extensive documentation within the [Getting Started with the Community Edition](https://support.blubracket.com/hc/en-us/sections/360011962771-Getting-Started-with-the-Community-Edition) section of the BluBracket Help Center.

### Community Edition Settings Page

* In our initial release we made the settings page available for beta users and we have now exposed this to all Community Edition users. This page allows users to modify the organization and repositories within the organization as well as the capability to generate an API key to leverage the BluBracket CICD and Events/Alerts APIs.

### UI Improvements

* We have swapped the repository and secrets tables. As you will notice the secrets table is now on the bottom of the main portal page, and the repository table is at the top. This is to better highlight the Repository Risk Score, which is intended to be the main focus of the main portal page.

### Community Edition Tour

* Since the last release at tour of the main portal page has been added to explain all of the feature. This tour will only be displayed on the first visit to the portal within a given browser but can be accessed at any time from the support “?” menu at the top right of the main portal page.

### Bug Fixes
-------------

* Only minor UI fixes in this release of the Community Edition.

### Known Issues and Critical Notifications
-------------------------------------------

* **Filters and Sorting**

  * At this time there are filters in the repository table that are not immediately useful. This is a known issue and will be addressed with the next release

  * The repository table should be sorted on the Repo Risk Score - highest to lowest. At this time it is being sorted on the scan time. This will be updated in the next release.
