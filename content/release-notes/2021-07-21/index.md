---
title: "2021-07-21 release"
description: ""
lead: ""
date: 2021-07-21T02:48:57+00:00
draft: false
toc: false
resources:
  - src:
---

**New Features and Enhancements**
---------------------------------

**Enterprise Edition**

No new features or enhancements added to the Enterprise Edition with this release.

**Community Edition**

No new features or enhancements added to the Community Edition with this release.

**Bug Fixes**
-------------

* CORE-7410 - Fix filtering issue when attempting to filter for a value that does not exist. Now returns “no events found” instead of returning all results.

* CORE-7514 - Fix custom date range bug for Last Activity column in repository list view

* CORE-7408 - Fix sorting issue for Developer column on Alerts and Events page


**Critical Notifications**
--------------------------

* **Unsupported Languages**

    * Note that BluBracket is not currently able to identify and alert on secrets in languages that do not use traditional assignment operators (Lisp, Scheme and Clojure for example).

* **GitHub Payload Cap**

    * GitHub payloads are capped at 25 MB. If your event generates a larger payload, a webhook will not be fired which means that BluBracket will not be able to identify the event. This may happen, for example, on a create event if many branches or tags are pushed at once. We suggest monitoring your payload size to ensure delivery. Please refer to the following GitHub document: [https://developer.github.com/webhooks/#payloads](https://developer.github.com/webhooks/#payloads).
