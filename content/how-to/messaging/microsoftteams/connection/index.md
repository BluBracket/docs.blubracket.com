---
title: "Microsoft Teams Connection"
description: ""
lead: ""
date: 2023-02-07
draft: false
weight: 500
toc: false
tags:
  - microsoft teams
resources:
  - src: microsoft-teams-connection-start.png
  - src: microsoft-teams-connection-save.png
  - src: microsoft-teams-integrations-location.png
---
### Requirements

- Generate a [Microsoft Teams channel Incoming WebHook](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=dotnet#create-incoming-webhooks-1)

### Creating a Microsoft Teams Connection

1. Navigate to Microsoft Teams integrations by clicking the **Microsoft Teams** link on the integrations page.
{{< figure src="../microsoft-teams-integrations-location.png" >}}

2. Begin creating a BluBracket Microsoft Teams connection by clicking the **+ CONNECTION** button.
{{< figure src="microsoft-teams-connection-start.png" >}}

3. Copy the Incoming WebHook URL generated in [Microsoft Teams App](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=dotnet#create-incoming-webhooks-1)

4. Paste the Incoming WebHook URL into the token input and click TEST & SAVE.
{{< figure src="microsoft-teams-connection-save.png" >}}

Now you're ready to [create subscriptions](/how-to/messaging/microsoftteams/subscription/) for this connection and start seeing BluBracket notifications in Microsoft Teams.
