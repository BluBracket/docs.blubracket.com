---
title: "Jira Connection"
description: ""
lead: ""
date: 2022-11-16
draft: false
weight: 500
toc: false
tags:
  - jira
resources:
  - src: jira-connect-start.png
  - src: jira-connection-save.png
---
### Requirements

* [Atlassian API Token](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/)

* [Jira Base URL](https://confluence.atlassian.com/adminjiraserver/configuring-the-base-url-938847830.html)

* [Jira Project for events and alerts to be added to.](https://support.atlassian.com/jira-software-cloud/docs/create-a-new-project/)

### Creating a Jira Connection

1. Navigate to Jira integrations by clicking the **Jira** link on the integrations page
{{< figure src="../jira-select.png" >}}

2. Begin creating a BluBracket Jira connection by clicking the **+ CONNECTION** button
{{< figure src="jira-connect-start.png" >}}

3. Create an [Atlassian API Token](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/)

4. Paste the API token into the token input.

5. Enter the email of the user used to generate the [Atlassian API Token](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/)

6. Enter the [Jira Base URL](https://confluence.atlassian.com/adminjiraserver/configuring-the-base-url-938847830.html)

7. Click **TEST & SAVE**.
{{< figure src="jira-connection-save.png" >}}

Now you're ready to [create subscriptions](/how-to/ticketing/jira/subscription/) for this connection and start seeing BluBracket tickets in Jira.
