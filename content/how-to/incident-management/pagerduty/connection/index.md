---
title: "PagerDuty Connection"
description: ""
lead: ""
date: 2023-01-11
draft: false
weight: 500
toc: false
tags:
  - pagerduty
resources:
  - src: pagerduty-connect-start.png
  - src: pagerduty-connect-save.png
---
### Creating a PagerDuty Connection

1. Navigate to PagerDuty integrations by clicking the **PagerDuty** link on the integrations page
{{< figure src="../pagerduty-select.png" >}}

2. Begin creating a BluBracket PagerDuty connection by clicking the **+ CONNECTION** button
{{< figure src="pagerduty-connect-start.png" >}}

3. Enter a unique name for the connection

4. Generate an API access key following the [PagerDuty docs](https://support.pagerduty.com/docs/api-access-keys)

5. Copy your API key and paste it into the API access key field

6. Click **TEST & SAVE**.
{{< figure src="pagerduty-connect-save.png" >}}

Now you're ready to [create subscriptions](/how-to/incident-management/pagerduty/subscription/) for this connection and start seeing BluBracket incidents in PagerDuty.
