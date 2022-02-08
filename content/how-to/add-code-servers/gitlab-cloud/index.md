---
title: "Adding A GitLab Cloud Server To Your Tenant"
description: "How to add code servers to your tenant"
lead: "How to add A GitLab Cloud Server To Your Tenant"
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 200
toc: true
resources:
  - src: add-server.jpg, select-server.jpg, group.jpg, add-token.jpg, select.jpg
---
The first step in setting up a BluBracket tenant is adding your code servers.  This enables the BluBracket servers to communicate with your companies GitLab services, which are necessary to generate alerts/events and reports.  In this document, we will walk through the necessary steps to successfully add your GitLab enterprise code server to BluBracket. The following is a breakdown of the steps:

1. Navigating to the Enterprise Code Servers section of the Settings page

2. Selecting a Server Type

3. Entering a Group Name

4. Entering a Token and Creating a GitLab Personal Access Token

##### Navigating to the Enterprise Code Servers section of the Settings page

Adding an Enterprise Code Server starts with navigating to the appropriate section in the Settings section of the tenant portal.  After authenticating into the portal, select the Settings option in the left navigation bar.

Once the Setting section is exposed, select the “Enterprise code servers” section.  This will expose any code servers that have already been configured as well as the “Add Code Server” button for adding new code servers.  Click on the “Add Code Server” button to expose the configuration bar at the right of the page.

![add server screenshot](add-server.jpg)

##### Selecting a Server Type

Now that the configuration bar is exposed, the first thing we want to do is select a Server Type.  We will be setting up a GitLab Cloud server, so select the “GitLab Cloud” option.

![select server screenshot](select-server.jpg)

##### Entering a Group name

The next thing to do is select a Group to point the server to.  Groups are usually, but not always, set up as lines of business or projects.  For example, Google may have Groups for Nest, Android, Add Words, etc., all under the same server.  It is possible to point a server at multiple Groups. Enter the targeted Group into the input field.

![group server screenshot](group.jpg)

If you don’t know the Group name you can find them in the Gitlab administrator portal.  Log into your GitLab account as an administrator and navigate to the following location: Click on Menu, then Select Groups.

![gitlab screenshot](gitlab.jpg)

##### Entering a Personal Access Token (PAT)

The next step in adding the code server is adding the Personal Access Token (PAT). In order for BluBracket to access information within a given repository, an access token must be uploaded into the tenant.

[How to generate a Personal Access Token (PAT) in GitLab] (https://support.blubracket.com/hc/en-us/articles/360060110692-How-To-Generate-Personal-Access-Token-PAT-in-GitLab)

Enter the token in the location indicated below.

![add token screenshot](add-token.jpg)

Click Next

Finally, select either the “All Repositories” or “Customer Select Repositories” option and click on the Save button.

![select creenshot](select.jpg)

At this point, if you’ve completed all of the above steps and entered the information accurately, the Enterprise Code Server should be up and running and start to pull the desired data. Please note it can take anywhere from a few minutes to several hours for our system to finish analyzing your repositories. You can navigate to the ‘Repositories’ page to check the real-time scanning status.
