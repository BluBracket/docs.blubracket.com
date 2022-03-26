---
title: "Adding code servers"
aliases:
  - /how-to/add-code-servers
description: "How to add code servers to your tenant"
lead: "How to add code servers to your tenant"
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 200
toc: false
resources:
  - src: add-server.jpg
  - src: repo-type.png
---

The first step in setting up a BluBracket tenant is adding code servers.  This enables the BluBracket servers to communicate with a company’s Git services, which are necessary to generate alerts, insights, and reports.  

### Navigating to the "enterprise code servers" section of the "settings" page

Adding a code server starts with navigating to the appropriate section in the Settings section of the tenant portal. After authenticating into the portal, select the Settings option in the left navigation bar.

Once the setting section is exposed, select the “enterprise code servers” section.  This will reveal any code servers that have already been configured as well as the “add code server” button for adding new code servers.

![Add code server](add-server.jpg)

### Selecting a server type

Now that the configuration bar is exposed, the first thing we want to do is select a Server Type.  We will be setting up a GitHub Cloud server, so select the “GitHub Cloud” option.

![Choose repo type Screenshot](repo-type.png)
