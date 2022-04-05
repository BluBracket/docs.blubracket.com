---
title: "2021-04-27 release"
description: ""
lead: ""
date: 2021-04-27T02:48:57+00:00
draft: false
toc: false
resources:
  - src:
---

### New Features and Enhancements

### Enterprise Edition

### PCRE Library

* The PCRE library has now been added to the BluBracket regular expression feature. This is an extension to our previous library and will allow users to pattern match more regular expressions than previously.

### Community Edition

### Command Line Interface (CLI) Tool - PII Addition

* In addition to built-in secrets and custom secrets, CLI does support the ability to define a different group of “secrets” related to PII (Personally Identifiable Information) such as Social Security Numbers (SSN), emails, URLs, IP-addresses, etc. This feature is fully customizable. Out of the box CLI defines several patterns but all can be disabled, or the corresponded action changed. See the [CLI Support page](https://support.blubracket.com/hc/en-us/articles/360058092532-The-BluBracket-Command-Line-Interface-CLI-Tool#TheBluBracketCommandLineInterface(CLI)Tool-PIISecrets) for more detailed information on this feature.

### Bug Fixes

* CORE-5543 - Error thrown on the repository contribution table in some instances when selected. Has been addressed.

* CORE-6491 - Dismissed alerts are missing the option to reinstate. This has been fixed.

* CORE-6379 - Bad data being displayed in both CE and EE CSV download tables. This has been addressed.

* CORE-6507 - Developer filter type has stopped working. This has been fixed.

* CORE-6529 - Additional text being displayed in the BluPrint alerts. Addressed.

* CORE-6516 - Addressed a column ordering issue with repository scanning.

* CORE-6511 - Fixed an issue with generating a scanner API key.

* CORE-6505 - Addressed an issue where the BluPrint alert counts were not matching table counts.

* CORE-6540/6366 - Incorrect details were being displayed in the alert detail slide-out. Fixed.

* CORE-6501 - Fixed a repository sorting issue.

* CORE-6606 - End time for pending scans was showing invalid in some cases.

* CORE-6124 - Minor issue with the rows per column display in the Community Edition secrets table.

* CORE-6675 - Fixed an issue in the Community Edition monitored repos table - not filtering alerts.

* CORE-6693 - “Alerts” at top of BluPrint page should not be displayed if not alerts. Fixed.

* CORE-6596 - Toke permission error not displaying correctly when user adding code servers. Addressed.

* CORE-6677 - Community Edition insights were not sorting from most to least. Fixed.

* CORE-6709 - Removing a filter in the secrets table throws an error. This has been addressed.

* CORE-6315 - Fixed an issue where the CLI tool “panics” if the regular expression is formed incorrectly.

* CORE-5441 - Addressed an issue where secrets of the same type in the same line of code are not identified after finding the first one.

* CORE-6523 - Fixed an issue with the first added code server not displaying code copy information.

### Critical Notifications

* **Unsupported Languages**

  * Note that BluBracket is not currently able to identify and alert on secrets in languages that do not use traditional assignment operators (Lisp, Scheme and Clojure for example).

* **GitHub Payload Cap**

  * GitHub payloads are capped at 25 MB. If your event generates a larger payload, a webhook will not be fired which means that BluBracket will not be able to identify the event. This may happen, for example, on a create event if many branches or tags are pushed at once. We suggest monitoring your payload size to ensure delivery. Please refer to the following GitHub document: [https://developer.github.com/webhooks/#payloads](https://developer.github.com/webhooks/#payloads).
