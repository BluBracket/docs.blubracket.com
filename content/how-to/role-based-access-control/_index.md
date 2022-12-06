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
  - SAML
  - jit saml user provisioning
  - just in time
---

## Roles

A BluBracket user can be assigned any of the following roles:
Manager, Member, Viewer.

The following table describes the features each role can access:

| Feature                                                           | Manager | Member | Viewer |
| :---------------------------------------------------------------- | ------- | ------ | ------ |
| View events                                                       | ✅      | ✅     | ✅     |
| Edit events (i.e. remedidate as Triaged, Not Important, Resolved) | ✅      | ✅     |        |
| Add/Manage code servers                                           | ✅      |        |        |
| Add/Manage integrations                                           | ✅      |        |        |
| Add/Manage API keys                                               | ✅      |        |        |
| Add/Manage Users                                                  | ✅      |        |        |
| Configure SSO/SAML                                                | ✅      |        |        |

Note: At the current time, the roles Member and Viewer are only available on tenants which have the Just-in-time (JIT) SAML user provisioning feature enabled.

## Just-in-time (JIT) SAML user provisioning

The JIT SAML user provisioning feature allows for SAML users to be automatically provisioned on the BluBracket tenant during the SAML login. The role attribute in the SAML assertion request is used to map a specific role (Manager, Member, or Viewer) based on the role which is sent in the SAML assertions/attributes at the time of SAML login.

Currently this feature is only available to BluBracket Enterprise customers and can be enabled upon request by reaching out to BluBracket Support.

To configure this feature, the **JIT SAML create user** feature must be enabled by BluBracket Support.  The assumption is that during SAML login, the SAML assertion will contain an attribute named **role** which will contain the role of the current user being authenticated via SAML.  The name of the expected attribute is by default **role** but can be overriden by BluBracket Support using the **SAML Role attribute** configuration.  To determine which BluBracket role to map to when creating the user during JIT provisioning the mapping configuration in the **SAML Roles Mapping** configuration may be defined by BluBracket Support to map SAML roles to the BluBracket roles Manager, Member, and Viewer.

### Setting up SAML roles on the SAML Provider

To leverage the JIT SAML user provisioning feature, a role attribute must be sent by the SAML provider at the time of SAML authentication.  In order for a role to be sent, the SAML roles need to be configured on the SAML provider.

Each SAML provider (Azure AD, Ping, or Okta) have a specific way to set up SAML roles.

