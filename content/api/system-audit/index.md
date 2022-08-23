---
title: "System Audit"
description: "Auditing list of users who have accessed the BluBracket System"
lead: ""
date: 2022-08-15T02:48:57+00:00
draft: false
weight: 200
toc: true
resources:
  - src:
---

### Getting a list of users

Getting an audit of users and events of when they have logged in and out.

This is the API version of the data available at `https://[hostname]/settings/systemaudit`

#### Endpoint

`POST https://[hostname]/api/system-audit/search`

Called with bearer token.

#### Request body

```json

{
    "filters": [],
    "limit": 200,
    "page": 1
}
```

#### Response

Success: `200`

Set of 200 user objects.

Example user object

```json

{
    "email": "user@domain.com",
    "audit_time": "2022-07-15T16:00:56.979661+00:00",
    "request_id": "547b4309-5094-4d6b-9f86-a8ea5e2cf9ef",
    "description": "User 'user@domain.com' logged in.",
    "details": null,
    "audit_state": "Login",
    "user_id": "dc82244c-07c9-4c21-9988-cfd5f2d4b615",
    "id": "ef6c2130-bb38-408b-a8c7-4d26a24579be",
    "audit_type": "User"
}
```
