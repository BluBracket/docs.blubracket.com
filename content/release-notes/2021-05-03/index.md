---
title: "2021-05-03 release"
description: ""
lead: ""
date: 2021-05-03T02:48:57+00:00
draft: false
toc: false
resources:
  - src:
---

### New Features and Enhancements

### Enterprise Edition

### Event Tagging and Alert Enabling

* **Event Tagging:** For quite some time now BluBracket has been using tagging events with things like “Active Token”, “Inactive Token”, “Strong Password”, etc. These tags have been used to notify the user of specific information related to the event. It quickly became apparent that these could be useful for customers when integrating with other systems, or just for filtering purposes. As such, we have added the capability to add tags to events. By navigating to the settings/alerts section of the portal the user will see a table with a comprehensive list of all of the events that BluBracket monitors for. Users can add any text tag to associate with the event, and as these events are recognized the tag will be added to the metadata of the event.

* **Alert Enabling:** Previous BluBracket determined the events that would be escalated to Alerts. While this was done to focus on the events that BluBracket felt would be the most compelling it quickly became apparent that some other events were very important to some customer workflows and should be escalated as well. As such we have given the tenant administrators the ability to enable alerts for any of the events that we report. In the same location noted above (settings/alerts) the user will see the toggle on the left side of the table that enables the alerts. Once enabled for an event these will show up in the Alerts APIs and under the Alerts tab in the Alerts & Events page of the portal. NOTE: Today these alerts are auto-dismissed in the Alerts table. This is due to some legacy design. It does not affect the APIs but is confusing for those reviewing in the portal. We will shortly update this so that they are not auto-dismissed and will note this in the appropriate release notes.

### Community Edition

No new features or enhancements added to the Community Edition with this release.

### Bug Fixes

* CORE-6746 - There was an issue with some dismissed alerts displaying the “Dismiss” button instead of the “Reinstate” option.

* CORE-5441 - Fixed the issue with multiple secrets in a single line of code - only the first one found was being reported.
