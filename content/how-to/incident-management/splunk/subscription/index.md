---
title: "Splunk Subscription"
description: ""
lead: ""
date: 2023-01-18
draft: false
weight: 500
toc: false
tags:
  - splunk
resources:
  - src: splunk-subscription-start.png
  - src: splunk-subscription-save.png
---

### Requirements

- Created a [Splunk connection](/how-to/incident-management/splunk/connection/)

### Creating a Splunk Subscription

1. Navigate to Splunk integrations by clicking the **Splunk** link on the integrations page.
{{< figure src="../splunk-select.png" >}}

2. Click the **+ SUBSCRIPTION** button to begin the creation process.
{{< figure src="splunk-subscription-start.png" >}}

3. Choose a name for the subscription as well as the saved filters you would like the subscription to be based on.

4. Choose the connection for the subscription output.

5. Enter the Splunk index.

6. Enter a Splunk source type.

7. Click **SAVE**
{{< figure src="splunk-subscription-save.png" >}}

BluBracket events matching your filters will create events in the specified Splunk index.
