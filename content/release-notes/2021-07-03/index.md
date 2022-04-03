---
title: "2021-07-03 release"
description: ""
lead: ""
date: 2021-07-03T02:48:57+00:00
draft: false
toc: false
resources:
  - src:
---

**New Features and Enhancements**
---------------------------------

**Enterprise Edition**

**Code Risks**

* Within the repository details page the Code Risks tab now indicates the level of risk associated with any of the risk categories that BluBracket could potentially be identifying. As seen in the screenshot below, all categories are designated with a High/Medium/Low indicator and the number of violations associated with the risk category type. Clicking risk category type will navigate the user to a list view of the violations.
    
* ![](/hc/article_attachments/4403298351380/file)

**Access Table in Repo Details**

* The Access tab in the repository details page has been updated to include a permissions column and icons to indicate the type of user that has access to the repository.
    
* ![](/hc/article_attachments/4403292039060/file)

**Secret Scan Updates**

* There are a number of updates that have been added to the secret scanning algorithm. These are continuously improved upon. Calling out some of the more substantial improvements here:
    
    * Adding passphrase types to the list of secrets found - e.g. sshpassphrase, sshpass123, etc.
        
    * Passwords in XML with attributes - e.g. e.g. `<Pass encoding="base64">NjllNWU5ZWMwZDU0MmU5Y2QwOTY4MWM5YzZhMDdkYWVmNjg3OWE3MDMzM2Q4MWJmCg==</Pass>`
        
    * Client key - e.g. `client_key: 383c8164d4bdd95d8b1bfbf4f540d754 # Informative`
        

**Server to Server Tokens**

* BluBracket now allows the user of server to server tokens when adding code servers. Previously only Personal Access Tokens (PATs) were allowed here.
    

**Community Edition**

No new features or enhancements added to the Community Edition with this release.

**Bug Fixes**
-------------

* CORE-7303 - Owners column was incorrectly rendering on the repository list view.
    
* CORE-7302 - Repository details page was seeing strange rendering of incorrect data in some instances.
    
* CORE-7309 - Issue where the events table was rendering an extra column.
    
* CORE-7339 - Number of violations on the Code Risk table were not matching filtered view in Alert table. This has been addressed with the new Code Risk table as well.
    
* CORE-7349 - Repository filter was not functioning properly in the repository selection screen in code server configurations.
    
* CORE-7287 - Risk scores that were not fully calculated were always showing up as gray. They now adhere to the normal color scheme which is determined by total score.
    

**Critical Notifications**
--------------------------

* **Unsupported Languages**
    
    * Note that BluBracket is not currently able to identify and alert on secrets in languages that do not use traditional assignment operators (Lisp, Scheme and Clojure for example).
        
* **GitHub Payload Cap**
    
    * GitHub payloads are capped at 25 MB. If your event generates a larger payload, a webhook will not be fired which means that BluBracket will not be able to identify the event. This may happen, for example, on a create event if many branches or tags are pushed at once. We suggest monitoring your payload size to ensure delivery. Please refer to the following GitHub document: [https://developer.github.com/webhooks/#payloads](https://developer.github.com/webhooks/#payloads).