---
title: "Slack Connection"
description: ""
lead: ""
date: 2022-11-16
draft: false
weight: 500
toc: false
tags:
  - slack
resources:
  - src: slack-connection-start.png
  - src: slack-connection-save.png
  - src: slack-integrations-location.png
---
### Requirements

- Create a [BluBracket Slack App](/how-to/messaging/slack/app/) and install to your workspace.

### Creating a Slack Connection

1. Navigate to Slack integrations by clicking the **Slack** link on the integrations page
{{< figure src="../slack-integrations-location.png" >}}

2. Begin creating a BluBracket Slack connection by clicking the **+ CONNECTION** button
{{< figure src="slack-connection-start.png" >}}

3. Visit the [installations page](https://api.slack.com/apps/A044R68FYGY/install-on-team) in the [BluBracket Slack App](https://api.slack.com/apps/A044R68FYGY) and copy the bot token presented on the screen.

4. Paste the bot token into the token input and click TEST & SAVE.
{{< figure src="slack-connection-save.png" >}}

Now you're ready to [create subscriptions](/how-to/messaging/slack/subscription/) for this connection and start seeing BluBracket notifications in Slack.
