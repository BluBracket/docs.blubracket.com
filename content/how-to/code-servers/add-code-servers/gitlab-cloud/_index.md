---
title: "Adding a GitLab Cloud code server"
aliases:
  - /how-to/add-code-servers/gitlab-cloud
description: "How to add a GitLab Cloud code server to your tenant"
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 100
toc: false
resources:
  - src: group.jpg
  - src: add-token.jpg
  - src: select.jpg
---

After [selecting to add a GitLab Cloud code server]({{< relref "/how-to/code-servers/add-code-servers/#selecting-a-server-type" >}}), follow the instructions below to add a GitLab Organization as a code server in BluBracket.

GitLab uses the term "GitLab Cloud" to differentiate repositories hosted at gitlab.com from their self-hosted enterprise offering.

Each GitLab Organization is a different code server in BluBracket ([see GitLab docs on organizations](https://docs.gitlab.com/ee/topics/set_up_organization.html)).

### Entering a Group name

The next thing to do is select a Group to point the server to.  Groups are usually, but not always, set up as lines of business or projects.  For example, Google may have Groups for Nest, Android, Add Words, etc., all under the same server.  It is possible to point a server at multiple Groups. Enter the targeted Group into the input field.

![group server screenshot](group.jpg)

If you don’t know the Group name you can find them in the Gitlab administrator portal.  Log into your GitLab account as an administrator and navigate to the following location: Click on Menu, then Select Groups.

![gitlab screenshot](gitlab.jpg)

### Entering a Personal Access Token (PAT)

The next step in adding the code server is adding the Personal Access Token (PAT). In order for BluBracket to access information within a given repository, an access token must be uploaded into the tenant.

[How to generate a Personal Access Token (PAT) in GitLab](/how-to/code-servers/add-code-servers/gitlab-cloud/generate-pat/)

Enter the token in the location indicated below.

![add token screenshot](add-token.jpg)

Click Next

Finally, select either the “All Repositories” or “Customer Select Repositories” option and click on the Save button.

![select creenshot](select.jpg)

At this point, if you’ve completed all of the above steps and entered the information accurately, the Enterprise Code Server should be up and running and start to pull the desired data. Please note it can take anywhere from a few minutes to several hours for our system to finish analyzing your repositories. You can navigate to the ‘Repositories’ page to check the real-time scanning status.
