---
title: "Event & alert"
description: "Reading and searching events and alerts."
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 200
toc: true
resources:
  - src:
---

### Getting a list of alerts

Filter for getting all secrets, first page of results, return 10 results.

#### Endpoint

`POST https://[hostname]/api/public/alert/search`

Called with bearer token.

#### Request body

```json
{
    "filters": [
        {
            "id": "alert_type",
            "value": [
                "REPO_SCAN_MATCH"
            ],
            "op": "EQ",
            "exact_match": true
        }
    ],
    "limit": 10,
    "page": 1
}
```

#### Response

Success: `200`

Set of 10 alert objects.

### Getting alerts for a specific set of repos

Filter for getting all secrets in a set of repos, first page of results, return 10 results.

#### Endpoint

`POST https://[hostname]/api/public/alert/search`

Called with bearer token.

#### Request body

```json
{
    "filters": [
        {
            "id": "alert_type",
            "value": [
                "REPO_SCAN_MATCH"
            ],
            "op": "EQ",
            "exact_match": true
        },
        {
            "id": "url",
            "value": [
                "git://github.com/bludemogh/myfirstrepo.git", "git://github.com/bludemogh/myotherrepo.git"
            ],
            "op": "EQ",
            "exact_match": true
        }
    ],
    "limit": 100,
    "page": 1
}
```

#### Response

Success: `200`

Set of 10 alert objects in the specified repos.
