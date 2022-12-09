---
title: "BluBracket Slack App"
description: ""
lead: ""
date: 2022-11-22
draft: false
weight: 500
toc: false
tags:
  - slack
resources:
  - src: slack-app-1.png
  - src: slack-app-2.png
  - src: slack-app-3.png
  - src: slack-app-4.png
  - src: slack-app-5.png
---
1. Visit the [Slack App creation](https://api.slack.com/apps) page.

2. Click the **Create New App** button.
{{< figure src="slack-app-1.png" >}}

3. Click the **From an app manifest** option.
{{< figure src="slack-app-2.png" >}}

4. Select your workspace and click **Next**.
{{< figure src="slack-app-3.png" >}}

5. Copy and paste the following app manifest into the **json** input:

    ```json
    {
        "display_information": {
            "name": "BluBracket",
            "description": "Pipeline Security Tools",
            "background_color": "#2b2b2b",
            "long_description": "What if code security could be improved with the same techniques we use to improve code quality? Tests and code coverage reports integrated in our workflows giving us quick feedback on PRs and in our IDEs have helped us build better, faster, and more maintainable code together, and now it’s time to do the same to improve security."
        },
        "features": {
            "bot_user": {
                "display_name": "BluBracket",
                "always_online": false
            }
        },
        "oauth_config": {
            "scopes": {
                "bot": [
                    "chat:write",
                    "incoming-webhook"
                ]
            }
        },
        "settings": {
            "org_deploy_enabled": false,
            "socket_mode_enabled": false,
            "token_rotation_enabled": false
        }
    }
    ```

    and click **Next**. {{< figure src="slack-app-4.png" >}}

6. Confirm the permissions match the following image and click **Create**.
{{< figure src="slack-app-5.png" >}}

##### That's it!

You now have a BluBracket Slack App and can begin [creating connections](/how-to/messaging/slack/connection/)
