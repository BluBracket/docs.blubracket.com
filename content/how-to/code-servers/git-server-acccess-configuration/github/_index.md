---
title: "GitHub access & configuration risks"
description: ""
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 200
toc: true
resources:
  - 
---

BluBracket monitors and alerts on potential security security issues related to access and configuration of GitHub accounts. The following is a list of these configurations that BluBracket is currently monitoring.  BluBracket will continue to add to this list and as we have support for other solutions we will add similar alerts.

### Organization-level configuration risks

- **Base level setting is too permissive**: Base permissions to the organization’s repositories apply to all members and exclude outside collaborators.  Since organization members can have permissions from multiple sources, members and collaborators who have been granted a higher level of access than the base permissions will retain their higher permission privileges.  If this setting is set to anything other than “None” BluBracket will display an alert.  It is best practice to have this set to “None” and configure each repository individually.
- **Members can create public repositories**: BluBracket will display an alert if organization members can create public repositories.  It is understood that some members may need to create public repositories for collaboration reasons, yet at the same time it can be a code egress point and therefore is displayed as an alert.
- **Two factor is not enforced on the organization**: BluBracket will display an alert if two factor authentication is not configured on the organization.  This may not be an issue if a company is using an external SAML solution, since two factor could be set there.
- **Members can fork private repositories** (coming soon).
- **Members can change repository visibilities** (coming soon).
- **Members can delete or transfer repositories** (coming soon).

### Repository-level configuration risks

- **No branch protection rules set on the repository**: This alert will only be thrown if no branch protection rules are set.
- **The repository does not restrict direct pushes**: BluBracket will display an alert if there are no restrictions for direct pushes across any branch.  A specific risk here would be the ability for a developer to push code directly into the main branch without any review process in place.
- **The repository does not require pull request reviews**: This alert will be displayed for repositories only if no branches in the repository have pull request restrictions.  It is common for some branches to not have pull request restrictions, but best practice is that critical branches should have some level of restrictions.
- **The repository requires an insufficient number of reviewers**: BluBracket will display an alert if the number of reviewers is set below the minimum threshold number.  This requires additional user inputs fields in the BluBracket interface and is currently unavailable/disabled.
- **The repository does not invalidate stale reviews**: This alert will be displayed if a developer can continue to push changes to a pull request without requesting further reviews.  This is a potential risk path for unreviewed code being pushed into a critical branch.
