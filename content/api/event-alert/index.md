---
title: "Event & alert"
description: "Reading and searching events and alerts."
lead: "Reading and searching events and alerts."
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 200
toc: true
resources:
  - src:
---

### Getting alert counts

Search alerts using filters over attributes

#### Endpoint

`POST /api/public/alert/count`

#### Request body

One or more filters

```json
{
    "filters": [
        {
            "id": "alert_type",
            "value": [
                "REPO_SCAN_MATCH"
            ],
            "exact_match": true
        },
        {
            "id": "repo_type",
            "value": [
                "ENTERPRISE_PUBLIC",
                "PUBLIC"
            ],
            "exact_match": true
        },
        {
            "id": "state",
            "value": [
                "ACTIVE"
            ],
            "exact_match": true
        }
    ]
}
```

#### Response

Success: `200`

Number of alerts

### Searching alerts

### Updating an alert

Update the state of one or more alerts.
