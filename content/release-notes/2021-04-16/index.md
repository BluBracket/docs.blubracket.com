---
title: "2021-04-16 release"
description: ""
lead: ""
date: 2021-04-16T02:48:57+00:00
draft: false
toc: false
resources:
  - src:
---

**New Features and Enhancements**
---------------------------------

**No new features in this release.**

**Bug Fixes**
-------------

* CORE-6128 - CE - Incorrect count being displayed for duplicate alerts. Has been addressed.

* CORE-5030 - Redundant URL being displayed in code copy details. Fixed.

* CORE-5543 - Repository contribution table on BluPrint page is throwing an error when clicked. This is now fixed.

* CORE-6284 - Issue with GitHub Checks app never completing scan if two users are both monitoring the same repository. This has been fixed.


**Critical Notifications**
--------------------------

* **Unsupported Languages**

    * Note that BluBracket is not currently able to identify and alert on secrets in languages that do not use traditional assignment operators (Lisp, Scheme and Clojure for example).

* **GitHub Payload Cap**

    * GitHub payloads are capped at 25 MB. If your event generates a larger payload, a webhook will not be fired which means that BluBracket will not be able to identify the event. This may happen, for example, on a create event if many branches or tags are pushed at once. We suggest monitoring your payload size to ensure delivery. Please refer to the following GitHub document: [https://developer.github.com/webhooks/#payloads](https://developer.github.com/webhooks/#payloads).
