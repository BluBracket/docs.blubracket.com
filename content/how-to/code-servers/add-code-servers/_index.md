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
 - src: add-server.png
 - src: repo-type.png
---

The first step in setting up a BluBracket tenant is adding code servers. This enables the BluBracket servers to communicate with a company’s git services, which are necessary to generate alerts, insights, and reports.

### Navigating to the "enterprise code servers" section of the "settings" page

Adding a code server starts with navigating to the appropriate section in the Settings section of the tenant portal. After authenticating into the portal, select the Settings option in the left navigation bar.

Once the setting section is exposed, select the “enterprise code servers” section. This will reveal any code servers that have already been configured as well as the “add code server” button for adding new code servers.

![Add code server](add-server.png)

### Selecting a server type

Different BluBracket editions support different server types:

|   | BluBracket<br />Community Edition | BluBracket<br />Team Edition | BluBracket<br />Enterprise Edition |
|---|---|---|---|
| GitHub Cloud | [Add via OAuth](/how-to/code-servers/add-code-servers/github-cloud-oauth/) | [Add via OAuth](/how-to/code-servers/add-code-servers/github-cloud-oauth/) | [Add via PAT](/how-to/code-servers/add-code-servers/github-cloud/) |
| GitHub Enterprise Server | Not supported | Not supported | Add via PAT |
| GitLab Cloud | [Add via PAT](/how-to/code-servers/add-code-servers/gitlab-cloud/) | [Add via PAT](/how-to/code-servers/add-code-servers/gitlab-cloud/) | [Add via PAT](/how-to/code-servers/add-code-servers/gitlab-cloud/) |
| GitLab on-prem | Not supported | Not supported | Add via PAT|
| Bitbucket Cloud | [Add via PAT](/how-to/code-servers/add-code-servers/bitbucket-cloud/) | [Add via PAT](/how-to/code-servers/add-code-servers/bitbucket-cloud/) | [Add via PAT](/how-to/code-servers/add-code-servers/bitbucket-cloud/) |
| BitBucket server | Not supported | Not supported | Add via PAT |
| Azure DevOps | [Add via PAT](/how-to/code-servers/add-code-servers/azure-devops/) | [Add via PAT](/how-to/code-servers/add-code-servers/azure-devops/) | [Add via PAT](/how-to/code-servers/add-code-servers/azure-devops/) |
| Gerrit | [Add via PAT](/how-to/code-servers/add-code-servers/gerrit/) | [Add via PAT](/how-to/code-servers/add-code-servers/gerrit/) | [Add via PAT](/how-to/code-servers/add-code-servers/gerrit/) |

![Choose repo type Screenshot](repo-type.png)
