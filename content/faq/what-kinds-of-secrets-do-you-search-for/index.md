---
title: "What types of secrets does BluBracket search for?"
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

BluBracket searches inside all text formatted files—regardless of language—to find secrets. → [See more about secrets in files](#secrets-in-files)

And, BluBracket identifies files that are generally considered unsafe in a repo, regardless of their contents. → [See more about sensitive files](#sensitive-files)

### Sensitive files

A number of files are considered sensitive regardless of their contents.

#### cryptographic_key_bundle .p12

Potential cryptographic key bundle

```sh
some-bundle.p12
```

#### cryptographic_key_bundle .pfx

Potential cryptographic key bundle

```sh
secrets/some-bundle.pfx
```

#### cryptographic_key_bundle .asc

Potential cryptographic key bundle

```sh
some-bundle.asc
```

#### openvpn_client_configuration_file .ovpn

Potential OpenVPN client configuration file

```sh
~/secret.ovpn
```

#### remote_desktop_connection_file .rdp

Potential Remote Desktop connection file

```sh
~/secret.rdp
```

#### microsoft_sql_database_file .mdf

Potential Microsoft SQL database file

```sh
~/msql-db.mdf
```

#### microsoft_sql_server_compact_database_file .sdf

Potential Microsoft SQL server compact database file

```sh
~/.sdf
```

#### sqlite_database_file .sqlite

Potential SQLite database file

```sh
/local/usr/db/.sqlite
```

#### microsoft_bitlocker_recovery_key_file .bek

Potential Microsoft BitLocker recovery key file

```sh
some_file.bek
```

#### microsoft_bitlocker_trusted_platform_module_password_file .tpm

Potential Microsoft BitLocker Trusted Platform Module password file

```sh
secrets.tpm
```

#### windows_bitLocker_full_volume_encrypted_data_file .fve

Potential Windows BitLocker full volume encrypted data file

```sh
some-dir/test.fve
```

#### java_keystore_file .jks

Potential Java KeyStore file

```sh
java-keystore.jks
```

#### password_safe_database_file .psafe3

Potential Password Safe database file

```sh
file.psafe3
```

#### 1password_password_manager_database_file .agilekeychain

Potential 1Password password manager database file

```sh
../complicated-path/../.project/test.agilekeychain
```

#### apple_keychain_database_file .keychain

Potential Apple Keychain database file

```sh
/../complicated-path/../.project/test.keychain
```

#### network_traffic_capture_file .pcap

Potential network traffic capture file

```sh
traffic.pcap
```

#### tunnelblick_vpn_configuration_file .tblk

Potential Tunnelblick VPN configuration file

```sh
test.tblk
```

#### postgresql_password_file .pgpass

Potential PostgreSQL password file

```sh
postgres/pgpass
```

#### aws_cli_credentials_file .aws/credentials

Potential AWS CLI credentials file

```sh
/~deploy/.aws/credentials
/prod/aws/credentials
```

#### apache_htpasswd_file .htpasswd

Potential Apache htpasswd file

```sh
~apache/.htpasswd
~httpd/htpasswd
```

#### rubygems_credentials_file .gem/credentials

Potential Rubygems credentials file

```sh
~/.gem/credentials
```

#### git_credential_store_helper_credentials_file .git-credentials

Potential git-credential-store helper credentials file

```sh
.git-credentials
```

#### environment_configuration_file .env

Potential environment configuration file

```sh
project/prod.env
```

#### mysql_client_command_history_file .mysql_history

Potential MySQL client command history file

```sh
db/mysql_history
~mysql/.mysql_history
```

#### postgresql_client_command_history_file .psql_history

Potential PostgreSQL client command history file

```sh
.psql_history
~db/psql_history
```

#### linux_shadow_file etc/shadow

Potential Linux shadow file

```sh
/etc/shadow
```

#### linux_passwd_file etc/passwd

Potential Linux passwd file

```sh
/etc/passwd
```

#### ruby_master_key_file master\.key

Potential Ruby master.key file

```sh
master.key
```

#### docker_configuration_file .dockercfg | .docker/config.json

Potential Docker configuration file

```sh
docker-compose/.dockercfg
docker/config.json
```

#### gnome_keyring_database_file .key(store|ring)

Potential GNOME Keyring database file

```sh
~/.local/share/keyrings/login.keyring
~/.local/share/keyrings/login.keystore
```

#### sftp_connection_configuration_file sftp-config.json

Potential SFTP connection configuration file

```sh
sftp-config.json
sftp-config
```

#### terraform_state_file .tfstate

Potential Terraform State File

```sh
deploy/default.tfstate
deploy/default.tfstate.backup
```

Negative example:

```sh
test.tfstates
```

#### shell_command_history_file

Potential shell command history file

```sh
.bash_history
.sh_history
.history
history
.zsh_history
.z_history
```

### Kerberos keytab

Potential kerberos keytab file

```sh
somefile.keytab
```

### Secrets in files

A sample of secrets BluBracket commonly detects in files includes:

#### password_assignment

Potential password assignment

```sh
'PaSswOrd' = '13579'
```

#### secret_assignment

Potential secret assignment

```sh
"test_token_123" = "my_secret_token"
```

#### credential_assignment

Potential credential assignment

```sh
AWS_creDentiAl: 'some-string'
```

#### google_api_key

Potential Google API key

```sh
AIzaSyA-k3UmEeCD6KpySp3cSAlGJwXTNV_oybM
```

#### google_api_key_base64

Potential Google API key (base64)

```sh
QUl6YVN5QS1rM1VtRWVDRDZLcHlTcDNjU0FsR0p3WFROVl9veWJN
```

#### google_oauth

Potential Google OAuth

```sh
3572-b3w78sfasfcvs87fasdf6hbvefs21nb3.apps.googleusercontent.com
```

#### google_oauth_access_token

Potential Google OAuth access token

```sh
ya29.sd8keCms2swx2sJNW8kWxqzj3
```

#### google_oauth_access_token_base64

Potential Google OAuth access token (base64)

```sh
eWEyOS5zZDhrZUNtczJzd3gyc0pOVzhrV3hxemoz
```

#### aws_access_key_id

Potential AWS access key ID

```sh
AKIA2E0A8F3B244C9986
```

#### aws_access_key_id_base64

Potential AWS access key ID (base64)

```sh
QUtJQTJFMEE4RjNCMjQ0Qzk5ODY non-token
```

#### aws_secret_key

Potential AWS Secret key

```sh
awS_secret="7CE556A3BC234CC1FF9E8A5C324C0BB70AA21B6D"
```

#### aws_account_id

Potential AWS account ID

```sh
"aWs_account": "3238-1074-6278"
```

#### aws_mws_key

Potential AWS MWS key

```sh
amzn.mws.a8fc03d7-7eb3-c92f-b3aa-ae93cbff7acd
```

#### aws_mws_key_base64

Potential AWS MWS key (base64)

```sh
YW16bi5td3MuYThmYzAzZDctN2ViMy1jOTJmLWIzYWEtYWU5M2NiZmY3YWNk
```

#### github_token

Potential GitHub token

```sh
'githUb_token': '9qjxsjq6HWBXKAOP87IJHmhsW8038d73Dm9eDu'
```

#### github_access_token

Potential GitHub access token or OAuth client secret

```sh
gIthub-access_token = '2b30cc694989f335a4298067c4753a6c09ccfe5e'
```

#### github_oauth_client_secret

Potential GitHub OAuth client secret

```sh
gIthub-oAuth_token = '2b30cc694989f335a4298067c4753a6c09ccfe5e'
```

#### github_token_base64

#### github_access_token_base64

#### github_oauth_client_secret_base64

Potential GitHub Personal Access Token or OAuth Client Secret (base64)

```sh
'githUb_token': 'OXFqeHNqcTZIV0JYS0FPUDg3SUpIbWhzVzgwMzhkNzNEbTllRHU'
```

#### github_personal_access_token

Potential GitHub personal access token

```sh
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
```

#### github_oauth_client_id

Potential GitHub OAuth Client ID

```sh
github_client-id : 'c7444c71c75965b07cdb'
```

#### github_user_to_server_token

Potential GitHub user-to-server token

```sh
ghu_16C7e42F292c6912E7710c838347Ae178B4a
```

#### github_server_to_server_token

Potential GitHub server-to-server token

```sh
ghs_16C7e42F292c6912E7710c838347Ae178B4a
```

#### github_refresh_token

Potential GitHub refresh token

```sh
ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498
```

#### gitlab_oauth_application_id_base64

#### gitlab_oauth_secret_base64

Potential Base64 Encoded GitLab OAuth application id or secret

```sh
gitLab: "Yzc0ZjNjZmQ0NDk0OWM3MGY3ZjM1NjEyOTViNjdlNjgyZDdlNGZmNjY5OTViNjdkNGUxNTRmZTMxMjU0ODFhOA=="
```

#### gitlab_access_token

Potential GitLab Access Token

```sh
gitLab= "y-WttoALkwHn_vWJ72DB"
```

#### gitlab_oauth_application_id

#### gitlab_oauth_secret

Potential GitLab OAuth Applicaiton ID or GitLab OAuth Secret

```sh
gitLab: "c74f3cfd44949c70f7f3561295b67e682d7e4ff66995b67d4e154fe3125481a8"
```

#### bitbucket_app_password

Potential Bitbucket App Password

```sh
bitbucKet-app_pwd := "YpHdUSPAB9aDNuwVq8uK"
```

#### bitbucket_app_password_base64

Potential Bitbucket App Password (base64)

```sh
bitbucKet-app_token := "WXBIZFVTUEFCOWFETnV3VnE4dUs="
```

#### bitbucket_oauth_key

Potential Bitbucket OAuth Key

```sh
bitbUCket_key= "NCnnHSXbMVmJZr8D8q"
```

#### bitbucket_oauth_key_base64

Potential Bitbucket OAuth Key (base64)

```sh
bitbUCket_key= TkNubkhTWGJNVm1KWnI4RDhx
```

#### bitbucket_oauth_secret

Potential Bitbucket OAuth Secret

```sh
"bitbuckeT_secret": "CMJ2bKZUPAzXezTwNGXyWDsegT8ZW3Yd"
```

#### bitbucket_oauth_secret_base64

Potential Bitbucket OAuth Secret (base64)

```sh
"bitbuckeT_secret": "Q01KMmJLWlVQQXpYZXpUd05HWHlXRHNlZ1Q4WlczWWQ"
```

#### azure_active_directory_client_id

Potential Azure Active Directory Client ID

```sh
azuRE_ad_client_id="7076aa77-81ef-46ea-ae22-d768babeed21"
```

#### azure_active_directory_client_secret

Potential Azure Active Directory Client Secret

```sh
aZure_client_secret="y5=KAF/PbpoMmum31/t]S88dDu5d:?S*"
```

#### azure_active_directory_client_secret_base64

Potential Azure Active Directory Client Secret (base64)

```sh
aZure_client_secret="SVt3Si1dRExyTFduYzBlRi11cEFtdVhlY0lMZVM2MzA="
```

#### azure_access_token

Potential Azure Access Token

```sh
'azUre_token'= "r5nt64ikuzhohfm7r4rmdk2gd5unb4tb7eberlombqazshrfdr3q"
```

#### azure_access_token_base64

Potential Azure Access Token (base64)

```sh
'azUre_token'= "cjVudDY0aWt1emhvaGZtN3I0cm1kazJnZDV1bmI0dGI3ZWJlcmxvbWJxYXpzaHJmZHIzcQ=="
```

#### microsoft_id_token

Potential Microsoft Identity Platform ID Token

```sh
micRosoft_id_token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyIsImtpZCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyJ9.eyJhdWQiOiJiMTRhNzUwNS05NmU5LTQ5MjctOTFlOC0wNjAxZDBmYzljYWEiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mYTE1ZDY5Mi1lOWM3LTQ0NjAtYTc0My0yOWYyOTU2ZmQ0MjkvIiwiaWF0IjoxNTM2Mjc1MTI0LCJuYmYiOjE1MzYyNzUxMjQsImV4cCI6MTUzNjI3OTAyNCwiYWlvIjoiQVhRQWkvOElBQUFBcXhzdUIrUjREMnJGUXFPRVRPNFlkWGJMRDlrWjh4ZlhhZGVBTTBRMk5rTlQ1aXpmZzN1d2JXU1hodVNTajZVVDVoeTJENldxQXBCNWpLQTZaZ1o5ay9TVTI3dVY5Y2V0WGZMT3RwTnR0Z2s1RGNCdGsrTExzdHovSmcrZ1lSbXY5YlVVNFhscGhUYzZDODZKbWoxRkN3PT0iLCJhbXIiOlsicnNhIl0sImVtYWlsIjoiYWJlbGlAbWljcm9zb2Z0LmNvbSIsImZhbWlseV9uYW1lIjoiTGluY29sbiIsImdpdmVuX25hbWUiOiJBYmUiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaXBhZGRyIjoiMTMxLjEwNy4yMjIuMjIiLCJuYW1lIjoiYWJlbGkiLCJub25jZSI6IjEyMzUyMyIsIm9pZCI6IjA1ODMzYjZiLWFhMWQtNDJkNC05ZWMwLTFiMmJiOTE5NDQzOCIsInJoIjoiSSIsInN1YiI6IjVfSjlyU3NzOC1qdnRfSWN1NnVlUk5MOHhYYjhMRjRGc2dfS29vQzJSSlEiLCJ0aWQiOiJmYTE1ZDY5Mi1lOWM3LTQ0NjAtYTc0My0yOWYyOTU2ZmQ0MjkiLCJ1bmlxdWVfbmFtZSI6IkFiZUxpQG1pY3Jvc29mdC5jb20iLCJ1dGkiOiJMeGVfNDZHcVRrT3BHU2ZUbG40RUFBIiwidmVyIjoiMS4wIn0=.UJQrCA6qn2bXq57qzGX_-D3HcPHqBMOKDPx4su1yKRLNErVD8xkxJLNLVRdASHqEcpyDctbdHccu6DPpkq5f0ibcaQFhejQNcABidJCTz0Bb2AbdUCTqAzdt9pdgQvMBnVH1xk3SCM6d4BbT4BkLLj10ZLasX7vRknaSjE_C5DI7Fg4WrZPwOhII1dB0HEZ_qpNaYXEiy-o94UJ94zCr07GgrqMsfYQqFR7kn-mn68AjvLcgwSfZvyR_yIK75S_K37vC3QryQ7cNoafDe9upql_6pB2ybMVlgWPs_DmbJ8g0om-sPlwyn74Cc1tW3ze-Xptw_2uVdPgWyqfuWAfq6Q"
```

#### atlassian_api_token

Potential Atlassian API Token

```sh
my_pagerduty_token="xbE0Z4lPlrsxCsbQljSD7AFF"
```

#### atlassian_api_token_base64

Potential Atlassian API Token (base64)

```sh
my_pagerduty_token="eGJFMFo0bFBscnN4Q3NiUWxqU0Q3QUZG"
```

#### dropbox_app_key_secret

Potential Dropbox App Key or App Secret

```sh
DROPBOX_APP_KEY: "4fyyzx73aeeouuy"
```

#### dropbox_app_key_secret_base64

Potential Dropbox App Key or App Secret (base64)

```sh
DROPBOX_APP_KEY: "NGZ5eXp4NzNhZWVvdXV5"
```

#### dropbox_app_access_refresh_token

Potential Dropbox App Access Token

```sh
dropbox_app_access_token: 'sTaeXjPl-kAAAAAAAAAAE4PSHCac-raR31ueSeFZUSHBJ5tlMGvyO8MeXRaRQOrU'
```

#### dropbox_app_access_refresh_token_base64

Potential Dropbox App Access Token (base64)

```sh
dropbox_app_access_token: 'c1RhZVhqUGwta0FBQUFBQUFBQUFFNFBTSENhYy1yYVIzMXVlU2VGWlVTSEJKNXRsTUd2eU84TWVYUmFSUU9yVQ=='
```

#### box_client_id_secret

Potential Box client id or client secret

```sh
box_client_id: "2zljm7yivjhfz9in4dkr566vk4xpje5y"
```

#### box_client_id_secret_base64

Potential Box client id or client secret (base64)

```sh
box_client_id: "Mnpsam03eWl2amhmejlpbjRka3I1NjZ2azR4cGplNXkK"
```

#### box_refresh_token

Potential Box refresh token

```sh
box_refresh_token: "Q8j0kTwbhQXHO95FAKg5zTfKhDwGWOUQyRue8i7njJoqWAwdRKfAPw4oK6zF3dPv"
```

#### box_refresh_token_base64

Potential Box refresh token (base64)

```sh
box_refresh_token: "UThqMGtUd2JoUVhITzk1RkFLZzV6VGZLaER3R1dPVVF5UnVlOGk3bmpKb3FXQXdkUktmQVB3NG9LNnpGM2RQdgo="
```

#### discord_client_id

Potential Discord Client ID

```sh
DiScORd: "618962312686075969"
```

#### discord_client_secret

Potential Discord Client Secret

```sh
disCORD_secret= "4cs2-cYx2KiKIRuOTKworwnM0_A4uJyy"
```

#### slack_legacy_token

Potential Slack Legacy Token

```sh
xoxp-559859041733-629723654435-752364182007-9ead8994051da71a0774db965b16a60b"
```

#### slack_legacy_token_base64

Potential Slack Legacy Token (base64)

```sh
eG94cC01NTk4NTkwNDE3MzMtNjI5NzIzNjU0NDM1LTc1MjM2NDE4MjAwNy05ZWFkODk5NDA1MWRhNzFhMDc3NGRiOTY1YjE2YTYwYg==
```

#### slack_app_client_id

Potential Slack App Client ID

```sh
slack_client_id='559859041733.752727218102'
```

#### slack_app_client_secret

#### slack_app_signing_secret

Potential Slack App Client Secret or Slack App Signing Secret

```sh
slack_secret="004c7fb45aeb0b795890128d763877ec"
```

#### slack_app_verification_token

Potential Slack App Verification Token

```sh
slack_token: "Bk1D7BxSbGRttZYpyngNZBSR"
```

#### slack_app_verification_token_base64

Potential Slack App Verification Token (base64)

```sh
slack_token: "QmsxRDdCeFNiR1J0dFpZcHluZ05aQlNS"
```

#### slack_bot_user_token

Potential Slack Bot User Token

```sh
slack_token: "xoxb-559859041733-629723654435-752364182007-9ead8994051da71a0774db965b16a60b"
```

#### slack_bot_user_token_base64

Potential Slack Bot User Token (base64)

```sh
eG94Yi01NTk4NTkwNDE3MzMtNjI5NzIzNjU0NDM1LTc1MjM2NDE4MjAwNy05ZWFkODk5NDA1MWRhNzFhMDc3NGRiOTY1YjE2YTYwYg==
```

#### slack_workspace_token

Potential Slack Workspace Token

```sh
slack_token: "xoxa-259859041733-629723654435-752364182007-9ead8994051da71a0774db965b16a60b"
```

#### slack_workspace_token_base64

Potential Slack Workspace Token (base64)

```sh
eG94YS0yNTk4NTkwNDE3MzMtNjI5NzIzNjU0NDM1LTc1MjM2NDE4MjAwNy05ZWFkODk5NDA1MWRhNzFhMDc3NGRiOTY1YjE2YTYwYg==
```

#### slack_webhook

Potential Slack Webhook

```sh
https://hooks.slack.com/services/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
```

#### stripe_test_secret_key

Potential Stripe Test Secret Key

```sh
sk_test_MfRuaFA9sgl5e1AUYzjwiNNt00UG6t6fvY
```

#### stripe_test_secret_key_base64

Potential Stripe Test Secret Key (base64)

```sh
c2tfdGVzdF9NZlJ1YUZBOXNnbDVlMUFVWXpqd2lOTnQwMFVHNnQ2ZnZZ
```

#### stripe_live_secret_key

Potential Stripe live secret key

```sh
sk_live_MfRuaFA9sgl5e1AUYzjwiNNt00UG6t6fvY
```

#### stripe_live_secret_key_base64

Potential Stripe live secret key (base64)

```sh
c2tfbGl2ZV9NZlJ1YUZBOXNnbDVlMUFVWXpqd2lOTnQwMFVHNnQ2ZnZZ
```

#### stripe_test_restricted_key

Potential Stripe Test Restricted Key

```sh
rk_test_Zu9Vz12eIYFNdGoFKe8aYiQn00gcclUvS0
```

#### stripe_test_restricted_key_base64

Potential Stripe Test Restricted Key (base64)

```sh
cmtfdGVzdF9adTlWejEyZUlZRk5kR29GS2U4YVlpUW4wMGdjY2xVdlMw
```

#### stripe_live_restricted_key

Potential Stripe live restricted key

```sh
rk_live_Zu9Vz12eIYFNdGoFKe8aYiQn00gcclUvS0
```

#### stripe_live_restricted_key_base64

Potential Stripe live restricted key (base64)

```sh
cmtfbGl2ZV9adTlWejEyZUlZRk5kR29GS2U4YVlpUW4wMGdjY2xVdlMw
```

#### mailgun_private_api_key

Potential Mailgun Private API Key

```sh
"mailgUn_key": 'key-b11b487224a7c184fed93795bf01adc9'
```

#### mailgun_private_api_key_base64

Potential Mailgun Private API Key (base64)

```sh
"mailgUn_key": 'a2V5LWIxMWI0ODcyMjRhN2MxODRmZWQ5Mzc5NWJmMDFhZGM5'
```

#### mailgun_public_validation_key

Potential Mailgun Public Validation Key

```sh
pubkey-14b4474da0d0a6551a9c711ee11aa996
```

#### mailgun_public_validation_key_base64

Potential Mailgun Public Validation Key (base64)

```sh
cHVia2V5LTE0YjQ0NzRkYTBkMGE2NTUxYTljNzExZWUxMWFhOTk2
```

#### mailgun_webhook_signing_key

Potential Mailgun Webhook Signing Key

```sh
mailgun_key='15304a8a0558637d8187630ddf11df1a'
```

#### mailgun_webhook_signing_key_base64

Potential Mailgun Webhook Signing Key (base64)

```sh
mailgun_key='MTUzMDRhOGEwNTU4NjM3ZDgxODc2MzBkZGYxMWRmMWE='
```

#### sendgrid_api_key

Potential Sendgrid API Key

```sh
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
```

#### sendgrid_api_key_base64

Potential Sendgrid API Key (base64)

```sh
U0cucFcyWFhnNi1UY2E4YkNCVEMwRWlZUS5ZNXBDOFNqZmJ3WWxNTURSaVQ5TTZxN0VmOWIzX0RDSGtQNS0zaXNYM3dN
```

#### twilio_auth_token

#### twilio_api_key

Potential Twilio Auth Token or API Key

```sh
twilio_token="692e03bfddd09d85946e1319dd5e7c61"
```

#### twilio_auth_token_base64

Potential Twilio Auth Token or API Key (base64)

```sh
twilio_token="NjkyZTAzYmZkZGQwOWQ4NTk0NmUxMzE5ZGQ1ZTdjNjE="
```

#### npm_access_token

Potential NPM Access Token

```sh
"npm : `f74fb6c7-15d7-46e7-85b4-02ca4988bd3c`"
```

#### npm_access_token_base64

Potential NPM Access Token (base64)

```sh
`npm : `Zjc0ZmI2YzctMTVkNy00NmU3LTg1YjQtMDJjYTQ5ODhiZDNj``
```

#### npmrc_auth

Potential .npmrc Auth

```sh
_auth = YWRtaW46YWRtaW4=
```

#### npmrc_auth_token

Potential .npmrc Auth token

```sh
_authToken=26dfe8d8-889b-4380-92ff-9c3c6ea5d930
```

#### pulumi_access_token

Potential Pulumi Access Token

```sh
pul-b521eabebc4b312eb2335beb7a911f9eb7f078c2
```

#### pulumi_access_token_base64

Potential Pulumi Access Token (base64)

```sh
cHVsLWI1MjFlYWJlYmM0YjMxMmViMjMzNWJlYjdhOTExZjllYjdmMDc4YzI=
```

#### alibaba_access_key_secret

Potential Alibaba Cloud Access Key Secret

```sh
alibaba_access_key ='3ihvGlklDPSXr22dnunrHTpZO4aKmS'
```

#### alibaba_access_key_secret_base64

Potential Alibaba Cloud Access Key Secret (base64)

```sh
alibaba_access_key ='M2lodkdsa2xEUFNYcjIyZG51bnJIVHBaTzRhS21T'
```

#### codeship_aes_key

Potential Cloudbees Codeship AES Key Secret

```sh
"codeship_token='/BaC5gedAC8hACwe5tZje+YVdOCTUxH+b+zkgKSKTkA='"
```

#### postman_api_key

Potential Postman API Key

```sh
"postman-api-key='PMAK-5e1c6889073b8400310886e0-40895969cc5bb51944fce153e94c33f3b9'"
```

#### postman_api_key_base64

Potential Postman API Key (base64)

```sh
postman-api-key='UE1BSy01ZTFjNjg4OTA3M2I4NDAwMzEwODg2ZTAtNDA4OTU5NjljYzViYjUxOTQ0ZmNlMTUzZTk0YzMzZjNiOQ=='
```

#### terraform_access_token

Potential Terraform Access Token

```sh
"QnbSxjjhVMHJgw.atlasv1.gxZnWIjI5j752DGqdwEUVLOFf0mtyaQ00H9bA1j90qWb254lEkQyOdfqqcq9zZL7Sm0"
```

#### gocardless_access_token

Potential Gocardless Cloud Access Token

```sh
gocardless_access_token = 'live_TKWImhFpoTRpzOIbpRhDS3-ezGa--nt4O9KU1Hd1'
```

#### gocardless_access_token_base64

Potential Gocardless Cloud Access Token (base64)

```sh
goCardLessToken = bGl2ZV9US1dJbWhGcG9UUnB6T0licFJoRFMzLWV6R2EtLW50NE85S1UxSGQx
```

#### password_in_xml

Potential password in XML

```sh
&lt;PaSswOrd&gt;UnitTest1234!&lt;/PaSswOrd&gt;
```

#### secret_in_xml

Potential secret in XML

```sh
&lt;Token&gt;0123456789abcdef&lt;/Token&gt;
```

#### password_function

Potential password in function

```sh
setPassword("$uperStrong1");
```

#### secret_function

Potential secret in function

```sh
setApiKey ( 'api_key' )
```

#### password_in_url

Potential password in URL

```sh
https://user:password@github.com/blubracket/rocks
```

#### password_in_url_params

Potential password in params

```sh
https://user:password@github.com/blubracket/rocks?passwd=1234
```

#### secret_in_url_params

Potential secret in params

```sh
https://github.com/blubracket/rocks?secret=1234
```

#### private_key

Potential Private Key

```sh
-----BEGIN RSA PRIVATE KEY-----\nProc-Type: 4,ENCRYPTED\nDEK-Info: DES-EDE3-L1D9CN2WmfoLeIBBJdQ2YngfSz……..</p><p>==\n-----END RSA PRIVATE KEY-----
```

#### pgp_private_key

Potential PGP Private Key

```sh
-----BEGIN PGP PRIVATE KEY BLOCK-----
```

#### blubracket_api_key

Potential BluBracket API key

```sh
api_key="BLU-72de3a5f-b1ff-5a7f-a5ae-1a9cf5a98b27"
```

#### blubracket_api_key_base64

Potential BluBracket API key (base64)

```sh
api_key="QkxVLTcyZGUzYTVmLWIxZmYtNWE3Zi1hNWFlLTFhOWNmNWE5OGIyNw=="
```

#### basic_auth_header

Potential Basic Auth Header

```sh
sh "set -e | curl -i -H 'Authorization: Basic QWxhZGRpbjpPcGVuU2VzYW1l' -T BackEnd/build/libs/example_api-0.1.0.jar
```

#### jwt_token

Potential Generic JWT token

```sh
jwt_access_token = "eyJhbGciOiJSUzI1NiIsImlzc3VlciI6InVybjpibHUiLCJyb2xlIjozLCJzZXJ2aWNlX2tleV9wYXRoIjoiL2FwaS9hbmFseXplci9wdWJsaWNfa2V5IiwidHlwIjoiSldUIn0.eyJleHAiOjE2MDUzMTI0MTksImlhdCI6MTYwNTMxMjM1OSwiaWQiOiJ0b2tlbl9pZCIsIm5idCI6MTYwNTMxMjM1OX0.l-MjVG33Ca76gtuiFLI-_AasHEsoMA3WcC36YvW0IHyQp-160z2Idc-sMdaJD8AwMsFto45vqnusDFkS1UYO7mZhU6sufv6pIMH86Ll7NwYvPzirqkWys40pvoXZdxxb3X5IBFTB8p9EuvLGOPUPFbEkA_if5jmExXjKUY98q0s"
```
