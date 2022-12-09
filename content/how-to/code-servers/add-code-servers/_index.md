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

Adding a code server is the first step in setting up a BluBracket account. It allows BluBracket to scan and analyze code so you can see your current code security health and areas of highest risk, as well as specific risks, insights, and reports.

### Go to Settings → Code Servers page

Go to Settings → Code Servers in your BluBracket account and click the "add code server" button.

{{< figure src="add-server.png" caption="The Settings → Code Servers page." >}}

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

{{< figure src="repo-type.png" caption="The list of code server types in a BluBracket account." >}}

![Choose repo type Screenshot](repo-type.png)
