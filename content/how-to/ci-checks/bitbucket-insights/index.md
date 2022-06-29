---
title: "Configure BitBucket Code Insights"
description: 
lead: 
date: 2022-03-04T02:48:57+00:00
draft: false
weight: 300
toc: false
resources:
  - src: pull-request.png
---

#### Prerequisites

This integration depends on [an API endpoint to fetch the pull request details from the commit](https://developer.atlassian.com/cloud/bitbucket/rest/api-group-pullrequests/#api-repositories-workspace-repo-slug-commit-commit-pullrequests-get). This API endpoint specifically requires pull request links to be indexed, which means that within the lifetime of the repository a user has to have clicked “go to pull request” from the per commit view of the Bitbucket Cloud UI at least once.

{{< figure src="pull-request.png" caption="The 'go to pull request' link in the commit view of the Bitbucket Cloud UI" >}}

#### Enable BitBucket Code Insights

[Contact the customer success team](/contact-support/) to enable BitBucket Code Insights.
