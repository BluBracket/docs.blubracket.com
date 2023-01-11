---
title: "ServiceNow Subscription"
description: ""
lead: ""
date: 2023-01-08
draft: false
weight: 500
toc: false
tags:
  - servicenow
resources:
  - src: servicenow-subscription-start.png
  - src: servicenow-subscription-save.png
---

### Requirements

- Created a [ServiceNow connection](/how-to/ticketing/servicenow/connection/)

### Creating a ServiceNow Subscription

1. Navigate to ServiceNow integrations by clicking the **ServiceNow** link on the integrations page
{{< figure src="../servicenow-select.png" >}}

2. Click the **+ SUBSCRIPTION** button to begin the creation process.
{{< figure src="servicenow-subscription-start.png" >}}

3. Choose a name for the subscription as well as the saved filters you would like the subscription to be based on.

4. Choose the connection for the subscription output.

5. (Optional) Enter any [custom field](/how-to/ticketing/servicenow/subscription/custom-field) you wish to supply

6. Click **SAVE**
{{< figure src="servicenow-subscription-save.png" >}}

BluBracket events matching your filters will create tickets in the specified ServiceNow project.
