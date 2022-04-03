---
title: "2021-06-05 release"
description: ""
lead: ""
date: 2021-06-05T02:48:57+00:00
draft: false
toc: false
resources:
  - src:
---

### New Features and Enhancements

### Enterprise Edition

### High Risks

* The BluPrint page now contains a new table that displays the most risky repos that are currently being monitored. The repository with the highest risk score is at the top of the list, descending to the 100th highest at the bottom. The Alert tiles have been moved to just below this table and are now, by default, in a collapsed state.

### Repository URL in web hook events

* Now showing the repository name and repository URL in the details of web hook events.

### Organization Column in Contribution Table

* The contribution table in the developer details page now contains a column for the associated organization.

### Additional Password Variations

* The following variations on the left hand side of any password equation have been added to the list of identified secrets: PSWRD, PWRD and PSWD. As we identify more of these types of variations on password and credential words we will add them to the list.

### Google API and Calendar Keys

* Due to the high number of instances where customers have requested that these be ignored, BluBracket now filters out both Google API and calendar keys. We would love to hear your feedback on this as well.

### Community Edition

No new features or enhancements added to the Community Edition with this release.

### Bug Fixes

* CORE-7114 - Back button in the portal is not navigating correctly in some instances. Fixed.

* CORE-6916 - Repository table should be sorted by Risk Score. Updated.

* CORE-6757 - Commit messages should be truncated when too verbose. Updated.

* CORE-6871 - Filter icon is disappearing in some situations and then reappearing. Fixed.

* CORE-6876 - Text based search is not working in the Org column of some tables. Fixed.

* CORE-6844 - Sort should work for all header types in the repository list view. Updated.

* CORE-6875 - Select All option in some filters not working properly. Fixed.

* CORE-6969 - Some columns were removed from the alert/event CSV download in the last release. This has been revered.

* CORE-6981 - Error thrown in some cases when the label filter is used in the repository list view. Fixed.

* CORE-6905 - Code copies table header text is being cut off. Fixed.

* CORE-6904 - Code server fly-over text fields colliding between views. Fixed.

* CORE-6874 - Selection of active alerts is cached on reviewed alerts. Fixed.

* CORE-6908 - Repo and clone counts were showing 0 in some cases in the developer list view. Fixed.

* CORE-6922 - Active and inactive secret labels were not being displayed in the alert fly-over. Fixed.

* CORE-6647 - Fixed an issue with the number of alerts capping out at 2500 cumulatively for both active and reviewed alerts.

* CORE-7056 - Code copies deep link missing for repository details. Updated.

* CORE-6954 - Sort functions not working correctly for both repository and developer columns in the alerts table. Fixed.

* CORE-6847 - Time filter behaves erratically when manually entering dates. Fixed.

* CORE-6125 - Secrets starting with “$” were previously not being detected. Fixed.

### Critical Notifications

* **Unsupported Languages**

  * Note that BluBracket is not currently able to identify and alert on secrets in languages that do not use traditional assignment operators (Lisp, Scheme and Clojure for example).

* **GitHub Payload Cap**

  * GitHub payloads are capped at 25 MB. If your event generates a larger payload, a webhook will not be fired which means that BluBracket will not be able to identify the event. This may happen, for example, on a create event if many branches or tags are pushed at once. We suggest monitoring your payload size to ensure delivery. Please refer to the following GitHub document: [https://developer.github.com/webhooks/#payloads](https://developer.github.com/webhooks/#payloads).
