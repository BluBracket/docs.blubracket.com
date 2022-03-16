---
title: "GitLab access & configuration risks"
description: ""
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 200
toc: true
resources:
  -
---

BluBracket monitors and alerts on potential security security issues related to access and configuration of GitLab accounts. The following is a list of these configurations that BluBracket is currently monitoring. BluBracket will continue to add to this list and as we have support for other solutions we will add similar alerts.

### System-level configuration risks (on-prem only)

Note: these features can be enabled by request.

- **Too many admins on system**: Default is five.
- **Public sign-up enabled**: Any user who visits the on-premise domain can register for an account. By default, this is allowed. Combined with a public organization and public repositories, this would allow anyone to view available code. Triggered only if whitelist domains are not specified.
- **Repository mirroring enabled**
- **Two factor is not enforced on the system**: BluBracket will display an alert if 2FA is not configured on the system.
- **Default group visibility set to public**
- **Default project visibility set to public**
- **No default branch protection rules set**: Branch protection rules across the instance should be set up by default to protect against force pushes and branch deletion. If it has been explicitly downgraded to none, an alert will be triggered.

### Organization-level configuration risks

- **Too many owners in org**: Default is five.
- **Two factor is not enforced on the organization (cloud only)**: If 2FA is not enforced on the system, BluBracket will check if 2FA is enforced on the organization. An alert is triggered if 2FA is not enforced for all the users in the organization.
- **Group visibility is set to public**: When the organization is set to public, repositories under that organization can be set to public as well. Members of the organization with appropriate access may be able to create public repositories.
- **Projects in this group can be forked outside the group** (requires GitLab Silver/Premium+ and v13.3+)
- **SAML SSO not enabled** (requires GitLab Silver/Premium+ paid license, cloud only)

### Repository-level configuration risks

- **Repository is being mirrored**: GitLab provides a mirroring feature, where the tracked repository can be kept in sync with another internal or external repository. When this GitLab repository is a “pull mirror”, where the tracked repository pulls in changes from another repository, an event is created. When this GitLab repository is a “push mirror”, where the tracked repository pushes code changes to another repository, an event and alert are created.
- **Too many maintainers in repository**: Default is five.
- **No branch protection rules set on repository**: Without branch protection rules, both developers and maintainers can force push changes, as well as delete branches. By default, branch protection rules should be set, so if it has been explicitly downgraded to none, an alert will be triggered.
- **Repository does not restrict direct pushes to default branch**: Even with branch protection rules set, some users, by default, are still allowed to push to the default branch.
- **Repository does not restrict direct pushes**: Even with branch protection rules set, some users, by default, are still allowed to push to a protected branch. Granular access to allow no one to push to a protected branch is available via GitLab. An alert will be triggered if this granular access has not been updated to disallow pushing to a protected branch.
- **Repository does not allow merges**: Merges are disabled, and no users can merge code changes into the default branch.
- **Repository does not require merge request reviews**: This alert will be triggered in a few cases (requires GitLab Bronze/Starter+ paid license):
  - Merge requests are enabled, but requirements for reviews can be overridden
  - Merge requests are enabled, but no reviewers are required
  - Merge requests are enabled, and the merge requires one reviewer, but the author is allowed to approve their own merge request
- **Repository requires an insufficient number of reviewers**: This alert will be triggered if the effective number of reviewers is set below the minimum threshold number, which can be specified in the BluBracket interface. The effective number of reviewers required will be the number of reviewers discounting the author’s approval if the author is allowed to approve their own merge request. Default is two. (Requires GitLab Bronze/Starter+ paid license.)
- **Repository does not invalidate stale reviews**: This alert will be triggered if new pushes to a merge request do not invalidate old reviews. (Requires GitLab Bronze/Starter+ paid license.)
