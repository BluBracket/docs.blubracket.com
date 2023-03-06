---
title: "Intro to BluBracket APIs and API keys"
description: "How to access and use the BluBracket API."
lead: "How to access and use the BluBracket API."
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 100
toc: true
searchExtraKeywords:
  - "Event and Alert APIs – BluBracket"
resources:
  - src: portal-generate-api-key.png
---

In order to make requests into the event and alert APIs, you have to generate an API key, which you use to generate a token, and then you can setup any kind of integration that you would like to make authenticated requests into the Blu Event and Alert APIS.

### Generating an auth token

1. Create an API key by navigating to Settings > API Keys
    {{< figure src="portal-generate-api-key.png" caption="Generating a key in the BluBracket web console." >}}
1. Enter a name for the key
1. Select Integration from the drop down
1. Select Create Key
1. Save the JSON/CSV file to your desktop
1. Open the JSON/CSV file and copy the value of the token

    ```json
    {
      "api_keys": {
        "https://mycompany.blubracket.com": {
          "id": "BLU-a492144b-f118-4598-991e-f1d4d6209edf",
          "key": "TofsB.....EqwGg",
          "token": "QkxVL....xd0dn"
        }
      }
    }
    ```

### Testing and using the API token

With the generated token, you can make requests directly to BluBracket APIs. You will need to set the Authorization header and use the provided token as Bearer token.

Here are some examples using curl:

```sh
curl -H "Authorization: Bearer TOKEN_FROM_STEP_2" --data '{"filters":[]}' https://mycompany.blubracket.com/api/public/event/search

curl -H "Authorization: Bearer TOKEN_FROM_STEP_2" --data '{"filters":[]}' https://mycompany.blubracket.com/api/public/alert/search
```

Note: As per ISO 8601, date formatting requires either the Z or the +00:00 be supplied at the end. This is required to determine that the datetime is in the UTC timezone.

Example Python code is shown below:

```python
from datetime import datetime, timezone
datetime.now(timezone.utc).isoformat()
```

Output: `2021-07-20T23:45:06.342716+00:00`
