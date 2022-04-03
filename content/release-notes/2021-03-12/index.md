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

**New Features and Enhancements**
---------------------------------

**New Public APIs**

* Two new APIs have been added to the list of public APIs available. The two new APIs allow users to dismiss alerts and re-enabled alerts that have been dismissed. This is especially important for users that have integrated with their CICD solutions and want to complete the loop. For example, a developer commits code that triggers a BluBracket alert, the user’s CICD integration recognizes the alert, creates a ticket and notification to the appropriate developer/administrator to remediate the issue, the developer/administrator remediates and closes the ticket, which triggers the API to dismissed the addressed alert in BluBracket.
    
* For additional information on available BluBracket APIs navigate to the support documentation [here](https://support.blubracket.com/hc/en-us/articles/360055569611-Event-and-Alert-APIs).
    

**Bug Fixes**
-------------

* CORE-4127 - description of “Repository pushed to public server” was showing up in red text. Has been addressed.
    
* CORE-4927 - Developer Type chart on the BluPrint page was showing a drop-down that should not have been there. This has been fixed.
    

**Critical Notifications**
--------------------------

* **Unsupported Languages**
    
    * Note that BluBracket is not currently able to identify and alert on secrets in languages that do not use traditional assignment operators (Lisp, Scheme and Clojure for example).
        
* **GitHub Payload Cap**
    
    * GitHub payloads are capped at 25 MB. If your event generates a larger payload, a webhook will not be fired which means that BluBracket will not be able to identify the event. This may happen, for example, on a create event if many branches or tags are pushed at once. We suggest monitoring your payload size to ensure delivery. Please refer to the following GitHub document: [https://developer.github.com/webhooks/#payloads](https://developer.github.com/webhooks/#payloads).