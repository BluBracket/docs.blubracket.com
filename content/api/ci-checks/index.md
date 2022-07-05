---
title: "CI checks"
description: ""
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 300
toc: true
resources:
  - src:
---

These APIs can be used to integrate BluBracket checks into a continuous integration (CI) workflow and help prevent risks being committed to a protected branch.

## Start a scan

Start a scan for a list of commits or a pull request

### Endpoint

`POST /api/analyzer/commit/scan`

### Parameters

1. `repo_url` (string, required): URL of the repo
1. `pull_request_number` (int, either `pull_request_number` or `commit_shas` is required): The id number of the pull request to be scanned.
1. `commit_shas` (a list of strings, , either `commit_shas` or `pull_request_number` is required): full SHA of the commits to be scanned

### Sample request body

For scanning a pull request

```json
{
    "repo_url": "https://github.com/my_org/my_repo",
    "pull_request_number": 3891
}
```

For scanning a list of commits

```json
{
    "repo_url": "https://github.com/my_org/my_repo",
    "commit_shas": [
        "a20cb4ca5c14ff27bdf16989d450c83b22f156d8",
        "d0d6593d1d4e81acd073244f42b6893fa65c99d8"
    ]
}
```

### Sample response

```json
{
    "scan_uuid": "fd974b65-61ba-4576-849a-0e6aa1fdd16b"
}
```

Note: The `scan_uuid` returned in the response can be used to query the result once it’s ready.

## Get the scan result

Get the result of the scan with a given id

### Endpoint

`GET /api/analyzer/commit/scan/{scan_uuid}`

where `scan_uuid` is the ID of the scan

### Response code

`200` - Scan is completed

`202` - Scan is still in progress

### Sample response

```json
{
    "secrets": {
        "d0d6593d1d4e81acd073244f42b6893fa65c99d8": {
            "secrets_found": [
                {
                    "secret_hash": "a392d713-4000-419a-b720-6a037b6147e3",
                    "secret_type": "google_api_key",
                    "file_path": "token.py",
                    "line_no": 32,
                    "cols": [
                        13,
                        29
                    ],
                    "secret_checker_results": {
                        "tags": [
                            "active_secret"
                        ]
                    }
                }
            ]
        }
    },
    "scan_state": "done",
    "message": ""
}
```
