---
title: "What kinds of secrets does BluBracket search for?"
description: "What we can find and how we find it."
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 100
toc: false
tags:
  - secrets
searchExtraKeywords:
  - "What types of 'secrets in code' does BluBracket scan for - BluBracket"
resources:
  - src:
---

BluBracket uses a variety of technologies, including pattern matching and AI/ML to detect hundreds of different types of secrets in code, including tokens, keys, IDs, credentials and passwords. BluBracket also allows developers to specify additional alert triggers using regular expressions.

A sample of secrets BluBracket commonly detects includes:

### password_assignment

Potential password assignment

    'PaSswOrd' = '13579'

### secret_assignment

Potential secret assignment

    "test_token_123" = "my_secret_token"

### credential_assignment

Potential credential assignment

    AWS_creDentiAl: 'some-string'

### google_api_key

Potential Google API key

    AIzaSyA-k3UmEeCD6KpySp3cSAlGJwXTNV_oybM

### google_api_key_base64

Potential Google API key (base64)

    QUl6YVN5QS1rM1VtRWVDRDZLcHlTcDNjU0FsR0p3WFROVl9veWJN

### google_oauth

Potential Google OAuth

    3572-b3w78sfasfcvs87fasdf6hbvefs21nb3.apps.googleusercontent.com

### google_oauth_access_token

Potential Google OAuth access token

    ya29.sd8keCms2swx2sJNW8kWxqzj3

### google_oauth_access_token_base64

Potential Google OAuth access token (base64)

    eWEyOS5zZDhrZUNtczJzd3gyc0pOVzhrV3hxemoz

### aws_access_key_id

Potential AWS access key ID

    AKIA2E0A8F3B244C9986

### aws_access_key_id_base64

Potential AWS access key ID (base64)

    QUtJQTJFMEE4RjNCMjQ0Qzk5ODY non-token

### aws_secret_key

Potential AWS Secret key

    awS_secret="7CE556A3BC234CC1FF9E8A5C324C0BB70AA21B6D"

### aws_account_id

Potential AWS account ID

    "aWs_account": "3238-1074-6278"

### aws_mws_key

Potential AWS MWS key

    amzn.mws.a8fc03d7-7eb3-c92f-b3aa-ae93cbff7acd

### aws_mws_key_base64

Potential AWS MWS key (base64)

    YW16bi5td3MuYThmYzAzZDctN2ViMy1jOTJmLWIzYWEtYWU5M2NiZmY3YWNk

### github_token

Potential GitHub token

    'githUb_token': '9qjxsjq6HWBXKAOP87IJHmhsW8038d73Dm9eDu'

### github_access_token

Potential GitHub access token or OAuth client secret

    gIthub-access_token = '2b30cc694989f335a4298067c4753a6c09ccfe5e'

### github_oauth_client_secret

Potential GitHub OAuth client secret

    gIthub-oAuth_token = '2b30cc694989f335a4298067c4753a6c09ccfe5e'

### github_token_base64

### github_access_token_base64

### github_oauth_client_secret_base64

Potential GitHub Personal Access Token or OAuth Client Secret (base64)

    'githUb_token': 'OXFqeHNqcTZIV0JYS0FPUDg3SUpIbWhzVzgwMzhkNzNEbTllRHU'

### github_personal_access_token

Potential GitHub personal access token

    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

### github_oauth_client_id

Potential GitHub OAuth Client ID

    github_client-id : 'c7444c71c75965b07cdb'

### github_user_to_server_token

Potential GitHub user-to-server token

    ghu_16C7e42F292c6912E7710c838347Ae178B4a

### github_server_to_server_token

Potential GitHub server-to-server token

    ghs_16C7e42F292c6912E7710c838347Ae178B4a

### github_refresh_token

Potential GitHub refresh token

    ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498

### gitlab_oauth_application_id_base64

### gitlab_oauth_secret_base64

Potential Base64 Encoded GitLab OAuth application id or secret

    gitLab: "Yzc0ZjNjZmQ0NDk0OWM3MGY3ZjM1NjEyOTViNjdlNjgyZDdlNGZmNjY5OTViNjdkNGUxNTRmZTMxMjU0ODFhOA=="

### gitlab_access_token

Potential GitLab Access Token

    gitLab= "y-WttoALkwHn_vWJ72DB"

### gitlab_oauth_application_id

### gitlab_oauth_secret

Potential GitLab OAuth Applicaiton ID or GitLab OAuth Secret

    gitLab: "c74f3cfd44949c70f7f3561295b67e682d7e4ff66995b67d4e154fe3125481a8"

### bitbucket_app_password

Potential Bitbucket App Password

    bitbucKet-app_pwd := "YpHdUSPAB9aDNuwVq8uK"

### bitbucket_app_password_base64

Potential Bitbucket App Password (base64)

    bitbucKet-app_token := "WXBIZFVTUEFCOWFETnV3VnE4dUs="

### bitbucket_oauth_key

Potential Bitbucket OAuth Key

    bitbUCket_key= "NCnnHSXbMVmJZr8D8q"

### bitbucket_oauth_key_base64

Potential Bitbucket OAuth Key (base64)

    bitbUCket_key= TkNubkhTWGJNVm1KWnI4RDhx

### bitbucket_oauth_secret

Potential Bitbucket OAuth Secret

    "bitbuckeT_secret": "CMJ2bKZUPAzXezTwNGXyWDsegT8ZW3Yd"

### bitbucket_oauth_secret_base64

Potential Bitbucket OAuth Secret (base64)

    "bitbuckeT_secret": "Q01KMmJLWlVQQXpYZXpUd05HWHlXRHNlZ1Q4WlczWWQ"

### azure_active_directory_client_id

Potential Azure Active Directory Client ID

    azuRE_ad_client_id="7076aa77-81ef-46ea-ae22-d768babeed21"

### azure_active_directory_client_secret

Potential Azure Active Directory Client Secret

    aZure_client_secret="y5=KAF/PbpoMmum31/t]S88dDu5d:?S*"

### azure_active_directory_client_secret_base64

Potential Azure Active Directory Client Secret (base64)

    aZure_client_secret="SVt3Si1dRExyTFduYzBlRi11cEFtdVhlY0lMZVM2MzA="

### azure_access_token

Potential Azure Access Token

    'azUre_token'= "r5nt64ikuzhohfm7r4rmdk2gd5unb4tb7eberlombqazshrfdr3q"

### azure_access_token_base64

Potential Azure Access Token (base64)

    'azUre_token'= "cjVudDY0aWt1emhvaGZtN3I0cm1kazJnZDV1bmI0dGI3ZWJlcmxvbWJxYXpzaHJmZHIzcQ=="

### microsoft_id_token

Potential Microsoft Identity Platform ID Token

    micRosoft_id_token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyIsImtpZCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyJ9.eyJhdWQiOiJiMTRhNzUwNS05NmU5LTQ5MjctOTFlOC0wNjAxZDBmYzljYWEiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mYTE1ZDY5Mi1lOWM3LTQ0NjAtYTc0My0yOWYyOTU2ZmQ0MjkvIiwiaWF0IjoxNTM2Mjc1MTI0LCJuYmYiOjE1MzYyNzUxMjQsImV4cCI6MTUzNjI3OTAyNCwiYWlvIjoiQVhRQWkvOElBQUFBcXhzdUIrUjREMnJGUXFPRVRPNFlkWGJMRDlrWjh4ZlhhZGVBTTBRMk5rTlQ1aXpmZzN1d2JXU1hodVNTajZVVDVoeTJENldxQXBCNWpLQTZaZ1o5ay9TVTI3dVY5Y2V0WGZMT3RwTnR0Z2s1RGNCdGsrTExzdHovSmcrZ1lSbXY5YlVVNFhscGhUYzZDODZKbWoxRkN3PT0iLCJhbXIiOlsicnNhIl0sImVtYWlsIjoiYWJlbGlAbWljcm9zb2Z0LmNvbSIsImZhbWlseV9uYW1lIjoiTGluY29sbiIsImdpdmVuX25hbWUiOiJBYmUiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaXBhZGRyIjoiMTMxLjEwNy4yMjIuMjIiLCJuYW1lIjoiYWJlbGkiLCJub25jZSI6IjEyMzUyMyIsIm9pZCI6IjA1ODMzYjZiLWFhMWQtNDJkNC05ZWMwLTFiMmJiOTE5NDQzOCIsInJoIjoiSSIsInN1YiI6IjVfSjlyU3NzOC1qdnRfSWN1NnVlUk5MOHhYYjhMRjRGc2dfS29vQzJSSlEiLCJ0aWQiOiJmYTE1ZDY5Mi1lOWM3LTQ0NjAtYTc0My0yOWYyOTU2ZmQ0MjkiLCJ1bmlxdWVfbmFtZSI6IkFiZUxpQG1pY3Jvc29mdC5jb20iLCJ1dGkiOiJMeGVfNDZHcVRrT3BHU2ZUbG40RUFBIiwidmVyIjoiMS4wIn0=.UJQrCA6qn2bXq57qzGX_-D3HcPHqBMOKDPx4su1yKRLNErVD8xkxJLNLVRdASHqEcpyDctbdHccu6DPpkq5f0ibcaQFhejQNcABidJCTz0Bb2AbdUCTqAzdt9pdgQvMBnVH1xk3SCM6d4BbT4BkLLj10ZLasX7vRknaSjE_C5DI7Fg4WrZPwOhII1dB0HEZ_qpNaYXEiy-o94UJ94zCr07GgrqMsfYQqFR7kn-mn68AjvLcgwSfZvyR_yIK75S_K37vC3QryQ7cNoafDe9upql_6pB2ybMVlgWPs_DmbJ8g0om-sPlwyn74Cc1tW3ze-Xptw_2uVdPgWyqfuWAfq6Q"

### atlassian_api_token

Potential Atlassian API Token

    my_jira_token="xbE0Z4lPlrsxCsbQljSD7AFF"

### atlassian_api_token_base64

Potential Atlassian API Token (base64)

    my_jira_token="eGJFMFo0bFBscnN4Q3NiUWxqU0Q3QUZG"

### dropbox_app_key_secret

Potential Dropbox App Key or App Secret

    DROPBOX_APP_KEY: "4fyyzx73aeeouuy"

### dropbox_app_key_secret_base64

Potential Dropbox App Key or App Secret (base64)

    DROPBOX_APP_KEY: "NGZ5eXp4NzNhZWVvdXV5"

### dropbox_app_access_refresh_token

Potential Dropbox App Access Token

    dropbox_app_access_token: 'sTaeXjPl-kAAAAAAAAAAE4PSHCac-raR31ueSeFZUSHBJ5tlMGvyO8MeXRaRQOrU'

### dropbox_app_access_refresh_token_base64

Potential Dropbox App Access Token (base64)

    dropbox_app_access_token: 'c1RhZVhqUGwta0FBQUFBQUFBQUFFNFBTSENhYy1yYVIzMXVlU2VGWlVTSEJKNXRsTUd2eU84TWVYUmFSUU9yVQ=='

### box_client_id_secret

Potential Box client id or client secret

    box_client_id: "2zljm7yivjhfz9in4dkr566vk4xpje5y"

### box_client_id_secret_base64

Potential Box client id or client secret (base64)

    box_client_id: "Mnpsam03eWl2amhmejlpbjRka3I1NjZ2azR4cGplNXkK"

### box_refresh_token

Potential Box refresh token

    box_refresh_token: "Q8j0kTwbhQXHO95FAKg5zTfKhDwGWOUQyRue8i7njJoqWAwdRKfAPw4oK6zF3dPv"

### box_refresh_token_base64

Potential Box refresh token (base64)

    box_refresh_token: "UThqMGtUd2JoUVhITzk1RkFLZzV6VGZLaER3R1dPVVF5UnVlOGk3bmpKb3FXQXdkUktmQVB3NG9LNnpGM2RQdgo="

### discord_client_id

Potential Discord Client ID

    DiScORd: "618962312686075969"

### discord_client_secret

Potential Discord Client Secret

    disCORD_secret= "4cs2-cYx2KiKIRuOTKworwnM0_A4uJyy"

### slack_legacy_token

Potential Slack Legacy Token

    xoxp-559859041733-629723654435-752364182007-9ead8994051da71a0774db965b16a60b"

### slack_legacy_token_base64

Potential Slack Legacy Token (base64)

    eG94cC01NTk4NTkwNDE3MzMtNjI5NzIzNjU0NDM1LTc1MjM2NDE4MjAwNy05ZWFkODk5NDA1MWRhNzFhMDc3NGRiOTY1YjE2YTYwYg==

### slack_app_client_id

Potential Slack App Client ID

    slack_client_id='559859041733.752727218102'

### slack_app_client_secret

### slack_app_signing_secret

Potential Slack App Client Secret or Slack App Signing Secret

    slack_secret="004c7fb45aeb0b795890128d763877ec"

### slack_app_verification_token

Potential Slack App Verification Token

    slack_token: "Bk1D7BxSbGRttZYpyngNZBSR"

### slack_app_verification_token_base64

Potential Slack App Verification Token (base64)

    slack_token: "QmsxRDdCeFNiR1J0dFpZcHluZ05aQlNS"

### slack_bot_user_token

Potential Slack Bot User Token

    slack_token: "xoxb-559859041733-629723654435-752364182007-9ead8994051da71a0774db965b16a60b"

### slack_bot_user_token_base64

Potential Slack Bot User Token (base64)

    eG94Yi01NTk4NTkwNDE3MzMtNjI5NzIzNjU0NDM1LTc1MjM2NDE4MjAwNy05ZWFkODk5NDA1MWRhNzFhMDc3NGRiOTY1YjE2YTYwYg==

### slack_workspace_token

Potential Slack Workspace Token

    slack_token: "xoxa-259859041733-629723654435-752364182007-9ead8994051da71a0774db965b16a60b"

### slack_workspace_token_base64

Potential Slack Workspace Token (base64)

    eG94YS0yNTk4NTkwNDE3MzMtNjI5NzIzNjU0NDM1LTc1MjM2NDE4MjAwNy05ZWFkODk5NDA1MWRhNzFhMDc3NGRiOTY1YjE2YTYwYg==

### slack_webhook

Potential Slack Webhook

    https://hooks.slack.com/services/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

### stripe_test_secret_key

Potential Stripe Test Secret Key

    sk_test_MfRuaFA9sgl5e1AUYzjwiNNt00UG6t6fvY

### stripe_test_secret_key_base64

Potential Stripe Test Secret Key (base64)

    c2tfdGVzdF80ZUMzOUhxTHlqV0Rhcmp0VDF6ZHA3ZGM=

### stripe_live_secret_key

Potential Stripe live secret key

    sk_live_MfRuaFA9sgl5e1AUYzjwiNNt00UG6t6fvY

### stripe_live_secret_key_base64

Potential Stripe live secret key (base64)

    c2tfbGl2ZV9NZlJ1YUZBOXNnbDVlMUFVWXpqd2lOTnQwMFVHNnQ2ZnZZ

### stripe_test_restricted_key

Potential Stripe Test Restricted Key

    rk_test_Zu9Vz12eIYFNdGoFKe8aYiQn00gcclUvS0

### stripe_test_restricted_key_base64

Potential Stripe Test Restricted Key (base64)

    cmtfdGVzdF9adTlWejEyZUlZRk5kR29GS2U4YVlpUW4wMGdjY2xVdlMw

### stripe_live_restricted_key

Potential Stripe live restricted key

    rk_live_Zu9Vz12eIYFNdGoFKe8aYiQn00gcclUvS0

### stripe_live_restricted_key_base64

Potential Stripe live restricted key (base64)

    cmtfbGl2ZV9adTlWejEyZUlZRk5kR29GS2U4YVlpUW4wMGdjY2xVdlMw

### mailgun_private_api_key

Potential Mailgun Private API Key

    "mailgUn_key": 'key-b11b487224a7c184fed93795bf01adc9'

### mailgun_private_api_key_base64

Potential Mailgun Private API Key (base64)

    "mailgUn_key": 'a2V5LWIxMWI0ODcyMjRhN2MxODRmZWQ5Mzc5NWJmMDFhZGM5'

### mailgun_public_validation_key

Potential Mailgun Public Validation Key

    pubkey-14b4474da0d0a6551a9c711ee11aa996

### mailgun_public_validation_key_base64

Potential Mailgun Public Validation Key (base64)

    cHVia2V5LTE0YjQ0NzRkYTBkMGE2NTUxYTljNzExZWUxMWFhOTk2

### mailgun_webhook_signing_key

Potential Mailgun Webhook Signing Key

    mailgun_key='15304a8a0558637d8187630ddf11df1a'

### mailgun_webhook_signing_key_base64

Potential Mailgun Webhook Signing Key (base64)

    mailgun_key='MTUzMDRhOGEwNTU4NjM3ZDgxODc2MzBkZGYxMWRmMWE='

### sendgrid_api_key

Potential Sendgrid API Key

    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

### sendgrid_api_key_base64

Potential Sendgrid API Key (base64)

    U0cucFcyWFhnNi1UY2E4YkNCVEMwRWlZUS5ZNXBDOFNqZmJ3WWxNTURSaVQ5TTZxN0VmOWIzX0RDSGtQNS0zaXNYM3dN

### twilio_auth_token

### twilio_api_key

Potential Twilio Auth Token or API Key

    twilio_token="692e03bfddd09d85946e1319dd5e7c61"

### twilio_auth_token_base64

Potential Twilio Auth Token or API Key (base64)

    twilio_token="NjkyZTAzYmZkZGQwOWQ4NTk0NmUxMzE5ZGQ1ZTdjNjE="

### npm_access_token

Potential NPM Access Token

    "npm : `f74fb6c7-15d7-46e7-85b4-02ca4988bd3c`"

### npm_access_token_base64

Potential NPM Access Token (base64)

    `npm : `Zjc0ZmI2YzctMTVkNy00NmU3LTg1YjQtMDJjYTQ5ODhiZDNj``

### npmrc_auth

Potential .npmrc Auth

    _auth = YWRtaW46YWRtaW4=

### npmrc_auth_token

Potential .npmrc Auth token

    _authToken=26dfe8d8-889b-4380-92ff-9c3c6ea5d930

### pulumi_access_token

Potential Pulumi Access Token

    pul-b521eabebc4b312eb2335beb7a911f9eb7f078c2

### pulumi_access_token_base64

Potential Pulumi Access Token (base64)

    cHVsLWI1MjFlYWJlYmM0YjMxMmViMjMzNWJlYjdhOTExZjllYjdmMDc4YzI=

### alibaba_access_key_secret

Potential Alibaba Cloud Access Key Secret

    alibaba_access_key ='3ihvGlklDPSXr22dnunrHTpZO4aKmS'

### alibaba_access_key_secret_base64

Potential Alibaba Cloud Access Key Secret (base64)

    alibaba_access_key ='M2lodkdsa2xEUFNYcjIyZG51bnJIVHBaTzRhS21T'

### codeship_aes_key

Potential Cloudbees Codeship AES Key Secret

    "codeship_token='/BaC5gedAC8hACwe5tZje+YVdOCTUxH+b+zkgKSKTkA='"

### postman_api_key

Potential Postman API Key

    "postman-api-key='PMAK-5e1c6889073b8400310886e0-40895969cc5bb51944fce153e94c33f3b9'"

### postman_api_key_base64

Potential Postman API Key (base64)

    postman-api-key='UE1BSy01ZTFjNjg4OTA3M2I4NDAwMzEwODg2ZTAtNDA4OTU5NjljYzViYjUxOTQ0ZmNlMTUzZTk0YzMzZjNiOQ=='

### terraform_access_token

Potential Terraform Access Token

    "QnbSxjjhVMHJgw.atlasv1.gxZnWIjI5j752DGqdwEUVLOFf0mtyaQ00H9bA1j90qWb254lEkQyOdfqqcq9zZL7Sm0"

### gocardless_access_token

Potential Gocardless Cloud Access Token

    gocardless_access_token = 'live_TKWImhFpoTRpzOIbpRhDS3-ezGa--nt4O9KU1Hd1'

### gocardless_access_token_base64

Potential Gocardless Cloud Access Token (base64)

    goCardLessToken = bGl2ZV9US1dJbWhGcG9UUnB6T0licFJoRFMzLWV6R2EtLW50NE85S1UxSGQx

### password_in_xml

Potential password in XML

    &lt;PaSswOrd&gt;UnitTest1234!&lt;/PaSswOrd&gt;

### secret_in_xml

Potential secret in XML

    &lt;Token&gt;0123456789abcdef&lt;/Token&gt;

### password_function

Potential password in function

    setPassword("$uperStrong1");

### secret_function

Potential secret in function

    setApiKey ( 'api_key' )

### password_in_url

Potential password in URL

    https://user:password@github.com/blubracket/rocks

### password_in_url_params

Potential password in params

    https://user:password@github.com/blubracket/rocks?passwd=1234

### secret_in_url_params

Potential secret in params

    https://github.com/blubracket/rocks?secret=1234

### private_key

Potential Private Key

    -----BEGIN RSA PRIVATE KEY-----\nProc-Type: 4,ENCRYPTED\nDEK-Info: DES-EDE3-L1D9CN2WmfoLeIBBJdQ2YngfSz……..</p><p>==\n-----END RSA PRIVATE KEY-----

### pgp_private_key

Potential PGP Private Key

    -----BEGIN PGP PRIVATE KEY BLOCK-----

### blubracket_api_key

Potential BluBracket API key

    api_key="BLU-72de3a5f-b1ff-5a7f-a5ae-1a9cf5a98b27"

### blubracket_api_key_base64

Potential BluBracket API key (base64)

    api_key="QkxVLTcyZGUzYTVmLWIxZmYtNWE3Zi1hNWFlLTFhOWNmNWE5OGIyNw=="

### basic_auth_header

Potential Basic Auth Header

    sh "set -e | curl -i -H 'Authorization: Basic QWxhZGRpbjpPcGVuU2VzYW1l' -T BackEnd/build/libs/example_api-0.1.0.jar

### jwt_token

Potential Generic JWT token

    jwt_access_token = "eyJhbGciOiJSUzI1NiIsImlzc3VlciI6InVybjpibHUiLCJyb2xlIjozLCJzZXJ2aWNlX2tleV9wYXRoIjoiL2FwaS9hbmFseXplci9wdWJsaWNfa2V5IiwidHlwIjoiSldUIn0.eyJleHAiOjE2MDUzMTI0MTksImlhdCI6MTYwNTMxMjM1OSwiaWQiOiJ0b2tlbl9pZCIsIm5idCI6MTYwNTMxMjM1OX0.l-MjVG33Ca76gtuiFLI-_AasHEsoMA3WcC36YvW0IHyQp-160z2Idc-sMdaJD8AwMsFto45vqnusDFkS1UYO7mZhU6sufv6pIMH86Ll7NwYvPzirqkWys40pvoXZdxxb3X5IBFTB8p9EuvLGOPUPFbEkA_if5jmExXjKUY98q0s"
