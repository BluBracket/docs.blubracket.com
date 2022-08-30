---
title: "Code servers"
description: ""
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 200
toc: true
resources:
  -
---

Code lives in git repos, and git repos are hosted by code servers. Most git hosting providers structure git repos into collections such as GitHub's Organizations and Bitbucket's Workspaces. In BluBracket, each of those collections is a separate code server.

### Supported code servers in BluBracket

| GitHub                                                                                                  | GitLab                                                                                                  | Bitbucket                                                              | Azure DevOps                                                              |
|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|---------------------------------------------------------------------------|
| Cloud & Enterprise                                                                                      | Cloud & on-prem                                                                                         | Cloud & Server                                                         | Cloud                                                                     |
| [Supported access & configuration risks](/how-to/code-servers/git-server-acccess-configuration/github/) | [Supported access & configuration risks](/how-to/code-servers/git-server-acccess-configuration/gitlab/) | Access & configuration risks not supported                             | Access & configuration risks not supported                                |
| [GitHub Checks](/how-to/ci-checks/github-checks/)                                                       |                                                                                                         | [Bitbucket Code Insights](/how-to/ci-checks/bitbucket-insights/)       |                                                                           |
| [Add a GitHub code server](/how-to/code-servers/add-code-servers/)                                      | [Add a GitLab code server](/how-to/code-servers/add-code-servers/)                                      | [Add a Bitbucket  code server](/how-to/code-servers/add-code-servers/) | [Add an Azure DevOps code server](/how-to/code-servers/add-code-servers/) |
