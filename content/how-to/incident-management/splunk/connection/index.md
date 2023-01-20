---
title: "Splunk Connection"
description: ""
lead: ""
date: 2023-01-18
draft: false
weight: 500
toc: false
tags:
  - splunk
resources:
  - src: splunk-connection-start.png
  - src: splunk-connection-save.png
---
### Requirements

- [Splunk integration token](https://docs.splunk.com/Documentation/Splunk/9.0.3/Data/UsetheHTTPEventCollector)

### Creating a Splunk Connection

1. Navigate to Splunk integrations by clicking the **Splunk** link on the integrations page
{{< figure src="../splunk-select.png" >}}

2. Begin creating a BluBracket Splunk connection by clicking the **+ CONNECTION** button
{{< figure src="splunk-connection-start.png" >}}

3. Enter a unique name for the connection.

4. Generate an integration token following the [Splunk docs](https://docs.splunk.com/Documentation/Splunk/9.0.3/Data/UsetheHTTPEventCollector)

5. Copy your integration token and paste it into the token field.

6. Enter the port number (default is 8088).

7. If you are testing with a free trial, check the optional box.

8. Enter the base url of your splunk account.

9. Click **TEST & SAVE**.
{{< figure src="splunk-connection-save.png" >}}

Now you're ready to [create subscriptions](/how-to/incident-management/splunk/subscription/) for this connection and start seeing BluBracket incidents in Splunk.
