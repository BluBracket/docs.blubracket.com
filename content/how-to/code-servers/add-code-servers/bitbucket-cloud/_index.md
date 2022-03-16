---
title: "Adding a Bitbucket Cloud code server"
aliases:
  - /how-to/add-code-servers/bitbucket-cloud
description: "How to add a Bitbucket Cloud server to your tenant"
lead: "How to add a Bitbucket Cloud server to your tenant"
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 100
toc: false
resources:
  - src: generate-token.jpg
  - src: workspace.jpg
  - src: bit-token.jpg
  - src: repo.jpg
---

After [selecting to add a Bitbucket Cloud code server]({{< relref "/how-to/code-servers/add-code-servers/#selecting-a-server-type" >}}), follow the instructions below to add a Bitbucket workspace as a code server in BluBracket.

Bitbucket uses the term "Bitbucket Cloud" to differentiate repositories hosted at bitbucket.com from their self-hosted enterprise offering.

Each Bitbucket workspace is a different code server in BluBracket ([see Bitbucket docs on workspaces](https://support.atlassian.com/bitbucket-cloud/docs/what-is-a-workspace/)).

### Entering a workspace name

The next thing to do is select a workspace to point the server to.  Workspaces are usually, but not always, set up as lines of business or projects.  For example, Google may have workspaces for Nest, Android, AdWords, etc., all under the same server.  It is possible to point a server at multiple workspaces. Enter the targeted workspace into the input field.

![generate token screenshot](generate-token.jpg)

If you don’t know the workspace name you can find them in the Bitbucket administrator portal.  Log into your Bitbucket account as an administrator and navigate to the following location, https://bitbucket.org/account/workspaces/.  From this location, click Manage (under Actions) for one of the workspaces, and note the Workspace ID

![workspace screenshot](workspace.jpg)

### Entering a personal access token (PAT)

The next step in adding the code server is adding the Personal Access Token (PAT). In order for BluBracket to access information within a given repository, an access token must be uploaded into the tenant.

**Note:** The personal access token _must_ be entered in the following format: `username:token`.

Example: `holland:Vgc9Kw8w5zQu58989Uxz`

[How to generate a personal access token on Bitbucket](/how-to/code-servers/add-code-servers/bitbucket-cloud/generate-pat/)

Enter the token in the location indicated below:

![bitbucket token screenshot](bit-token.jpg)

Finally, select either the “all repositories” or “customer select repositories” option and click on the save button.

![repo screenshot](repo.jpg)

At this point, if you’ve completed all of the above steps and entered the information accurately, the enterprise code server should be up and running and start to pull the desired data. Please note it can take anywhere from a few minutes to several hours for our system to finish analyzing your repositories. You can navigate to the "repositories" page to check the real-time scanning status.
