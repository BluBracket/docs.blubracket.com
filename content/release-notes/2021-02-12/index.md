---
title: "2021-02-12 release"
description: ""
lead: ""
date: 2021-02-12T02:48:57+00:00
draft: false
toc: false
resources:
  - src:
---

**New Features**
----------------

**Repo Details Slide Out**

* Clicking on any row within the repository table will now expose a repository details slide out panel. Within this panel the user can see all of the unreviewed secrets that compose the Repo Risk Score for the specific repository. Users are still able to navigate to the GitHub repository, as was the previous action by clicking on a given repo, by clicking on the deep link within the slide out.

* In the next release clicking on the repository will also automatically sort the secret table for those secrets within the repository.


**Repo Risk Score Bubbles**

* Previously if a repository was added but the score was not yet calculated we just showed an empty space in the Risk column, and it was a bit confusing as to whether there were no secrets found or otherwise. As of this release the space will display a gray bubble with a tool-tip that the Repo Risk Score has not yet been calculated.

* Along the same line, we have now added a green bubble for Repo Risk Scores that are zero.

* As a reminder, the Repo Risk Score is recalculated and updated every 24 hours and is based solely on the unreviewed secrets. The Repo Risk Score is not immediately recalculated upon reviewing a found secret.


**Support Links**

* All support documentation is now directly linked to the BluBracket Help Center. This still allows the end users to focus on the desired information as well as quick access to other related documentation.


**Bug Fixes**
-------------

* Repository Sorting - this now sorts correctly by Repo Risk Score (high to low) by default

* Filters - previously there were filters exposed that didn’t apply to the specific tables. This has been addressed.

* Minor UI fixes within the portal interface


**Known Issues and Critical Notifications**
-------------------------------------------

* **No known issues at this time**
