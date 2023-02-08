---
title: "Microsoft Teams Subscription"
description: ""
lead: ""
date: 2023-02-07
draft: false
weight: 500
toc: false
tags:
  - microsoft teams
resources:
  - src: microsoft-teams-subscription-start.png
  - src:
---

### Requirements

- Generate a [Microsoft Teams channel Incoming WebHook](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=dotnet#create-incoming-webhooks-1)
- Create a [Microsoft Teams connection](/how-to/messaging/microsoftteams/connection/)

### Creating a Microsoft Teams Subscription

1. Navigate to Microsoft Teams integrations by clicking the **Microsoft Teams** link on the integrations page
{{< figure src="../microsoft-teams-integrations-location.png" >}}

2. Click the **+ SUBSCRIPTION** button to begin the creation process.
{{< figure src="microsoft-teams-subscription-start.png" >}}

3. Choose a name for the subscription as well as the saved filters you would like the subscription to be based on.

4. Choose the connection for the subscription output.

5. Click **SAVE**
{{< figure src="" >}}

BluBracket events matching your filters will be sent to your specified channel in Microsoft Teams.
