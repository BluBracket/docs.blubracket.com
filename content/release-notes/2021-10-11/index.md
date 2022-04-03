---
title: "2021-10-11 release"
description: ""
lead: ""
date: 2021-10-11T02:48:57+00:00
draft: false
toc: false
resources:
  - src:
---

### New Features and Enhancements
* New public API to return repo scan status
* Added infinite label filter to support scrolling through all labels.

### Bug Fixes

* CORE-8192 URL of webhook was not displayed in the compliance alerts flyover details
* CORE-8343 Enhanced false positive detection where secret type is “token”
* CORE-8414 - Fixed Slack integration issue where deep link was not being displayed in message
* Fix table pagination loading bugs

### Critical Notifications

* **Unsupported Languages**
    * Note that BluBracket is not currently able to identify and alert on secrets in languages that do not use traditional assignment operators (Lisp, Scheme and Clojure for example).
* **GitHub Payload Cap**
    * GitHub payloads are capped at 25 MB. If your event generates a larger payload, a webhook will not be fired which means that BluBracket will not be able to identify the event. This may happen, for example, on a create event if many branches or tags are pushed at once. We suggest monitoring your payload size to ensure delivery. Please refer to the following GitHub document: [https://developer.github.com/webhooks/#payloads](https://developer.github.com/webhooks/#payloads).
