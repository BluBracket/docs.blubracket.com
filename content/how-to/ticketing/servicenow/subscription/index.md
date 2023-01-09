---
title: "ServiceNow Subscription"
description: ""
lead: ""
date: 2022-11-16
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

- Create [ServiceNow connection](/how-to/ticketing/servicenow/connection/)

### Creating a ServiceNow Subscription

1. Navigate to ServiceNow integrations by clicking the **ServiceNow** link on the integrations page
{{< figure src="../servicenow-select.png" >}}

2. Click the **+ SUBSCRIPTION** button to begin the creation process.
{{< figure src="servicenow-subscription-start.png" >}}

3. Choose a name for the subscription as well as the saved filters you would like the subscription to be based on.

4. Choose the connection for the subscription output and the ServiceNow channel.

5. Enter the ServiceNow project key
    - The project key can be found after /projects/ in the url
     example.atlassian.net/servicenow/software/c/projects/**ENG**

6. Enter the ServiceNow issue type

7. Enter the ServiceNow assignee id
    - The assignee id can be found after selecting a user filter at the end of the url:
    example.atlassian.net/.../assignee=**5e6e72063e42490c3801493c**

8. Enter the Priority

9. Click **SAVE**
{{< figure src="servicenow-subscription-save.png" >}}

BluBracket events matching your filters will create tickets in the specified ServiceNow project.
