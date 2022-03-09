---
title: "Generate a personal access token (PAT) in GitLab"
description: 
lead: 
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 100
toc: false
resources:
  - src: name.png
  - src: scopes.png
  - src: scopes2.png
---

#### Entering a token and creating a GitLab personal access token

* In order for BluBracket to access information within a given repository, an access token must be uploaded into the tenant.  An administrator for the GitLab account can create a new token by taking the following steps:

* For GitLab Cloud, once logged into the GitLab interface, select Preferences → Access Tokens. You should end up at a URL similar to the following:   [https://gitlab.com/-/profile/personal_access_tokens](https://gitlab.com/-/profile/personal_access_tokens)

* For GitLab Self-Managed, once logged into the GitLab interface, select Preferences → Access Tokens. You should end up at a URL similar to the following: <enterprise-domain>/-/profile/personal_access_tokens

* Create a ‘Name’ for your PAT and an ‘Expiration Date’ as shown below:

![Name and Expiration Example](name.png)

* Select the following scopes:

* api

* read_api

These are the permissions that the token must have for BluBracket to communicate correctly with the GitLab account:

![Scopes](scopes.png)

*See the notes at the bottom of the document for scope requirements.

* Click on the “Create personal access token” button at the bottom of the page.

![Scopes 2](scopes3.png)

* This token should now be available to copy.

#### Scope additional requirements

* For permissions, the user associated with the token has to be added as an org member.

* For the org, user can add themselves as an org to track repositories under their personal account.
