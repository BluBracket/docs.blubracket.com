---
title: "Role Based Access Control"
description: ""
lead: ""
date: 2022-11-08T17:59:28-08:00
weight: 200
toc: true
tags:
  - rbac
  - role based access
resources:
  -
---
## Roles

A BluBracket user can be assigned any of the following roles:
Manager, Member, Viewer.

The following table describes the features each role can access:

| Feature                                                           | Manager | Member | Viewer |
| :------------------------------------------------------------------ | --------- | -------- | -------- |
| View events                                                       | ✅      | ✅     | ✅     |
| Edit events (i.e. remedidate as Triaged, Not Important, Resolved) | ✅      | ✅     |        |
| Add/Manage code servers                                           | ✅      |        |        |
| Add/Manage integrations                                           | ✅      |        |        |
| Add/Manage API keys                                               | ✅      |        |        |
| Add/Manage Users                                                  | ✅      |        |        |
| Configure SSO/SAML                                                | ✅      |        |        |

Note: At the current time, the roles Member and Viewer are only available on tenants which have the Just-in-time SAML user provisioning feature enabled.

## Just-in-time (JIT) SAML user provisioning

The JIT SAML user provisioning feature allows for SAML users which contain a specific role to be provisioned and mapped to a specific role (Manager, Member, or Viewer) based on the role which is sent in the SAML assertions/attributes at the time of SAML login.

Currently this feature is only available to BluBracket Enterprise customers and can be enabled upon request by reaching out to BluBracket Support.
