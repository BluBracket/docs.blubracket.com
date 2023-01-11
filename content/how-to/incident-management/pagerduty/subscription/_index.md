---
title: "PagerDuty Subscription"
description: ""
lead: ""
date: 2023-01-11
draft: false
weight: 500
toc: false
tags:
  - pagerduty
resources:
  - src: pagerduty-subscription-start.png
  - src: pagerduty-subscription-save.png
---

### Requirements

- Created a [PagerDuty connection](/how-to/incident-management/pagerduty/connection/)
- Have an existing [PagerDuty Service](https://support.pagerduty.com/docs/services-and-integrations)

### Creating a PagerDuty Subscription

1. Navigate to PagerDuty integrations by clicking the **PagerDuty** link on the integrations page.
{{< figure src="../pagerduty-select.png" >}}

2. Click the **+ SUBSCRIPTION** button to begin the creation process.
{{< figure src="pagerduty-subscription-start.png" >}}

3. Choose a name for the subscription as well as the saved filters you would like the subscription to be based on.

4. Choose the connection for the subscription output.

5. Copy the desired PagerDuty service API key and paste it into the Integration Key field. If you need help locationg the key, you can [follow these instructions](/how-to/incident-management/pagerduty/subscription/integration-key).

6. Click **SAVE**
{{< figure src="pagerduty-subscription-save.png" >}}

BluBracket events matching your filters will create incidents in the specified PagerDuty service.
