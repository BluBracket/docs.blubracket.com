---
title: "Generate HTTP credentials in Gerrit"
description: ""
lead: ""
date: 2022-12-12T20:13:54+00:00
draft: false
weight: 400
toc: false
resources:
  - src: user-settings.png
  - src: generate-new-password.png
  - src: password-example.png
  - src: user-settings-profile.png
  - src: add-code-server.png
---

In order for BluBracket to access information on the Gerrit code review host, HTTP credentials must be generated.

#### Generating HTTP credentials

* Once signed in to Gerrit, click the icon in the upper-right hand corner to see the settings dropdown.

![User Settings](user-settings.png)

* Scroll down to the HTTP credentials section of the user settings page.

![Generate New Password](generate-new-password.png)

* Click "Generate New Password" for the new HTTP credentials.

![Password Example](password-example.png)


#### Entering username and HTTP credentials

A username and HTTP credentials are necessary for BluBracket to access the Gerrit code review host.

* See the username in the profile section of the user settings page.

![User Settings Profile](user-settings-profile.png)

* After generating the HTTP credentials and taking note of the username, enter them into BluBracket.

![Add Code Server](add-code-server.png)
