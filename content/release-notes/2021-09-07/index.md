---
title: "2021-09-07 release"
description: ""
lead: ""
date: 2021-09-07T02:48:57+00:00
draft: false
toc: false
resources:
  - src:
---

### New Features and Enhancements

* Access Risk Categories now links to appropriate alerts in the repo details page.

* Enhanced Code Server onboarding for Bitbucket and GitLab.

* Updated Infrastructure Code Alerts and Events to be more descriptive.

* Added breadcrumbs to repository details page in portal.

* Updated support for global Ignore.yaml. If you place a folder labeled “.blubracket” into a repository, then create a file called ignore.yaml in the .blubracket folder (see example below), you are able to ignore all of a certain type of secret from being detected as an alert within the BluBracket portal.

  * ignore.yaml example below will ignore all secrets values for the type aws\_secret\_key

`# ignores any secret types below`

`# secret_type == password_assignment OR secret_type == secret_assignment`

`- secret_types:`

`- aws_secret_key`

The ignore.yaml file can also be configured to ignore paths, or secret types.

Contact support for more information on the global ignore feature

### Free Trial Edition

The Enterprise Edition features and bug fixes listed in these release notes also apply to the Free Trial Edition.

* Improved Repo selection page when onboarding a new Code Server

### Bug Fixes

* Fix page count from erroring out when applying filters
