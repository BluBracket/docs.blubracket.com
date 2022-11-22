---
title: "Slack Subscription"
description: ""
lead: ""
date: 2022-11-16
draft: false
weight: 500
toc: false
tags:
  - slack
resources:
  - src: slack-subscription-start.png
  - src: slack-subscription-complete.png
---

### Requirements

- Create a [BluBracket Slack App](/how-to/messaging/slack/app/) and install to your workspace.
- Create [Slack connection](/how-to/messaging/slack/connection/)

### Creating a Slack Subscription

1. Navigate to Slack integrations by clicking the **Slack** link on the integrations page
{{< figure src="../slack-integrations-location.png" >}}

2. Click the **+ SUBSCRIPTION** button to begin the creation process.
{{< figure src="slack-subscription-start.png" >}}

3. Choose a name for the subscription as well as the saved filters you would like the subscription to be based on.

4. Choose the connection for the subscription output and the slack channel.

5. Click **SAVE**
{{< figure src="slack-subscription-complete.png" >}}

BluBracket events matching your filters will be sent to your specified channel in Slack.
