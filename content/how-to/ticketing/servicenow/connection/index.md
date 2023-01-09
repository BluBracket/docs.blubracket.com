---
title: "ServiceNow Connection"
description: ""
lead: ""
date: 2022-11-16
draft: false
weight: 500
toc: false
tags:
  - servicenow
resources:
  - src: servicenow-connect-start.png
  - src: servicenow-connection-save.png
---
### Creating a ServiceNow Connection

1. Navigate to ServiceNow integrations by clicking the **ServiceNow** link on the integrations page
{{< figure src="../servicenow-select.png" >}}

2. Begin creating a BluBracket ServiceNow connection by clicking the **+ CONNECTION** button
{{< figure src="servicenow-connect-start.png" >}}

3. Create an [Atlassian API Token](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/)

4. Paste the API token into the token input.

5. Enter the email of the user used to generate the [Atlassian API Token](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/)

6. Enter the [ServiceNow Base URL](https://confluence.atlassian.com/adminservicenowserver/configuring-the-base-url-938847830.html)

7. Click **TEST & SAVE**.
{{< figure src="servicenow-connection-save.png" >}}

Now you're ready to [create subscriptions](/how-to/ticketing/servicenow/subscription/) for this connection and start seeing BluBracket tickets in ServiceNow.
