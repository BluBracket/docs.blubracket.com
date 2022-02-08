---
title: "Set Ignore Rules Globally for Tenant"
description: "How to Set Ignore Rules Globally for Tenant"
lead: "How to Ignore Rules Globally for Tenant"
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 200
toc: true
resources:
  - src: alert.png
---

Ignore rules can be set up globally for a BluBracket tenant. blubracket-ignore.yaml allows Blubracket users to ignore specific secret types, secret values, or paths. This file must be sent utilizing the Blubracket API’s. When a match of the ignore file is made, an alert will not be created however an event will still be made.

Note: This will not change any existing alerts/events in the platform.

1. Download integration API key

2. Set environment variable BLUBRACKET_INTEGRATION_KEY

    * `export BLUBRACKET_INTEGRATION_KEY='TOKEN'`
    * `$Env:BLUBRACKET_INTEGRATION_KEY='TOKEN'`

3. Create blubracket-ignore.yaml

```yaml
 ignores any of the paths below
- paths:
  - oanda_connector.py
  - MachLearn-23.py

# ignores any secret values below
- secret_values:
  - My$uperDuperP@ssw0rd!

# ignores any secret types below
- secret_types: 
  - aws_access_key_id

# per repo-rules
- repo_url: (?i)github.com/blubracket/bludemogh/(apache_tomcat_2.0|crm_order_management)
  rules:
    - secret_values:
      - My$uperDuperS3cret!
    - secret_types:
      - google_oauth
    - paths:
      - helm/values.yaml
```

4. Upload yaml file via API using curl:

POST

`curl -H "Authorization: Bearer ${BLUBRACKET_INTEGRATION_KEY}" --data-binary "@blubracket-ignore.yaml" https://TENANT.blubracket.com/api/public/blubracket-ignore`

5. Confirm upload using:

GET

`curl -i -H "Authorization: Bearer ${BLUBRACKET_INTEGRATION_KEY}" https://TENANT.blubracket.com/api/public/blubracket-ignore`

To delete blubracket-ignore:

DELETE

`curl -i -X DELETE -H "Authorization: Bearer ${BLUBRACKET_INTEGRATION_KEY}" https://TENANT.blubracket.com/api/public/blubracket-ignore`

Any new secrets, PII or Non-inclusive language ignored will automatically be annotated as “Reviewed as Not Important” and labeled as “Ignore rule”

![alert screenshot](alert.png)
