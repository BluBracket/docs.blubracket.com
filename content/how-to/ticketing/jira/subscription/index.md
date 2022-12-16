---
title: "Jira Subscription"
description: ""
lead: ""
date: 2022-11-16
draft: false
weight: 500
toc: false
tags:
  - jira
resources:
  - src: jira-subscription-start.png
  - src: jira-subscription-complete.png
---

### Requirements

- Create [Jira connection](/how-to/ticketing/jira/connection/)

### Creating a Jira Subscription

1. Navigate to Jira integrations by clicking the **Jira** link on the integrations page
{{< figure src="../jira-select.png" >}}

2. Click the **+ SUBSCRIPTION** button to begin the creation process.
{{< figure src="jira-subscription-select.png" >}}

3. Choose a name for the subscription as well as the saved filters you would like the subscription to be based on.

4. Choose the connection for the subscription output and the Jira channel.

5. Enter the Jira project key
    - The project key can be found after /projects/ in the url
     example.atlassian.net/jira/software/c/projects/**ENG**

6. Enter the Jira issue type

7. Enter the Jira assignee id
    - The assignee id can be found after selecting a user filter at the end of the url:
    example.atlassian.net/.../assignee=**5e6e72063e42490c3801493c**

8. Enter the Priority

9. Click **SAVE**
{{< figure src="jira-subscription-submit.png" >}}

BluBracket events matching your filters will create tickets in the specified Jira project.
