---
title: "Developers"
description: "Retrieves a list of developers associated with repositories tracked by Blubracket"
lead: ""
date: 2022-07-15T02:48:57+00:00
draft: false
weight: 200
toc: true
resources:
  - src:
---

### Getting a list of developers

Getting a list of developers who have made commits to repositories tracked by Blubracket.

This is the API version of the data available at `https://[hostname]/developers`

#### Endpoint

`POST https://[hostname]/api/developer/search`

Called with bearer token.

#### Request body

```json
 {
  "page": 1,
  "limit": 200,
  "filters": [],
  "orderBy": "developer_name",
  "orderDirection": "ASC"
}
```

#### Response

Success: `200`

Set of 200 developer objects.

Example  developer object

```json

{
  "developer_name": "developer",
  "reason": {
    "discovered": "Discovered via direct membership to enterprise blutest"
  },
  "developer_id": "33ea870b-68de-4ac1-a475-2e4197411f67",
  "name_last_updated": "2000-01-01T00:00:00+00:00",
  "emails": ["example@domain.com"],
  "last_activity": null,
  "aliases": [
    {
      "external_id": null,
      "emails": ["example@domain.com"],
      "git_provider": "github_cloud",
      "alias": "devalias",
      "domain": "domain"
    }
  ],
  "display_email": null,
  "display_name": null,
  "clone": 0,
  "developer_type": "internal",
  "active": true,
  "last_social_sync_time": "2022-04-21T22:23:03.345845+00:00"
}
```
