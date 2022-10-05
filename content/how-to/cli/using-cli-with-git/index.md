---
title: "Using the CLI tool in git workflows"
aliases:
    - /how-to/cli/using-cli/
description: "Details about how to use the CLI tool."
lead: 
date: 2022-02-22T02:48:57+00:00
draft: false
weight: 400
toc: false
resources:
  - src:
---

### Installation

[How do I Install the BluBracket command line interface (CLI) tool?](/how-to/cli/installation/)

### Setting git hooks

In terminal, `cd` to the repo dir, then `blubracket install-git-hooks`

```bash
C:\Users\vbuzu\projects\sandbox>blubracket install-git-hooks
Successfully installed pre-commit hook to 'C:/Users/vbuzu/projects/sandbox/.git/hooks/pre-commit'
```

If git is setup to use global git hooks (specified by `core.hooksPath` git config), CLI will update/install the hook in that global folder.

Currently CLI will set only one hook, `pre-commit`.

#### Current limitations

CLI will install the pre-commit hook automatically only if the hook does not exist yet or the hook does exist and is implemented as a shell script (determined by the presence of `#!/bin/sh` or `#!/usr/bin/env bash` lines). In all other cases, e.g. if the hook is a python script, the CLI invocation must be added to the hook manually. It should be an equivalent of the follow shell command `blubracket pre-commit "$@" || { exit "$?"; }:` run `blubracket` command with `pre-commit` as the first parameter followed by all other parameters passed to the hook itself; exit/stop the hook on any non-zero exit codes from `blubracket`.

#### Pre-commit.com integration

The CLI tool integrates with the [https://pre-commit.com](https://pre-commit.com) hook management tool now. If it is detected that the pre-commit tool is used to manager the hooks, the CLI will add itself as one of the hooks to `.pre-commit-config.yaml`.

Note: Currently only the default configuration file is supported, if pre-commit tool is configured to use a different file, CLI will NOT add itself to it automatically. In that case, it can be done manually by adding following lines under `repos` key:

```yaml
 - repo: local
    hooks:
      - id: blubracket
        name: BluBracket
        language: system
        entry: blubracket pre-commit
        stages:
          - commit
        verbose: true
        always_run: true
        pass_filenames: false
```

#### Testing the BluBracket CLI commit hook

* In your terminal, `cd` to your repository directory

* Then add the following example secret into any file in your repository:
     `myPassword="My$uperDuperS3cret!"`

* Now try to commit your change with git commit - your new BluBracket CLI hook should prevent the commit from happening.

### Secrets

Use your normal git workflow, edit and stage some files, then try to commit. If the changes have secrets, the commit will be blocked. For example:

```bat
C:\Users\vbuzu\projects\sandbox>git commit -m "test commit" -a
Blubracket found 4 secret(s)
C:\Users\vbuzu\projects\sandbox\src\app.cpp:7:11: password_assignment
C:\Users\vbuzu\projects\sandbox\tests\dir2\tests\file1.txt:11:16: bitbucket_oauth_key_base64
C:\Users\vbuzu\projects\sandbox\tests\dir2\tests\file1.txt:12:11: password_assignment
C:\Users\vbuzu\projects\sandbox\tests\dir2\tests\file1.txt:13:14: password_in_url
```

#### .blubracket-ignore

Sometimes it might be necessary to ignore secrets in some files or secrets of some types. To achieve this just create a `.blubracket-ignore` file in the root directory of the repo. The format of the file is similar to `.gitignore`. Empty lines and lines started with # are ignored. To ignore all secrets in a file, put a glob pattern, e.g. `**/tests` will ignore secrets found in all files in any tests directory and sub-directories. To ignore specific a secret type, e.g. any password like secrets, add a line like `secret_type:password.*`, where `password.*` is perl compatible regular expression. To ignore specific secret, add a line like `secret_value:my_test_gcp_token` where `my_test_gcp_token` is the real secret/token you want to ignore.

```yaml
**/tests/**
secret_type:password.*
secret_value:my_test_gcp_token
```

#### Current limitations:
  
* negate mask (!) is not supported

* `.blubraket-ignore` is read only from the root repo directory, placing it in a sub directory will have no effect.

#### Inline comments

In addition to .blubracket-ignore file, it is possible to mark a secret to be ignored by placing a “comment” on the **same** line as the secret. The comment/line has to have `BluBracketIgnore` string in it, please note that CLI will do case-sensitive comparison.

#### Possible workarounds for false positives

Ignoring whole folders and/or secret type all the time could be dangerous as it can be easy to miss secrets. The recommended ways to deal with false positives are inline comments or ignoring the particular secret using `secret_value` rule in the `.blubracket-ignore` file.

#### Adding checks for your own secrets {#own-secrets}

BluBracket supports hundreds of different secret types, but you can extend it to detect any pattern you want.

In a repo/clone folder create a file `.blubracket/customregex.yml` (if you want new secret checks be applicable for any repo, create the file in `$HOME` folder instead). The content of the file is a list of secrets to check. Each secret is defined by two properties: `description` and `pattern`. Description is textual name for the secret that will be displayed by CLI if the secret is detected. Pattern is a regex to match the secret. Here is an example of how to a check for SSNs:

```yaml
- pattern: (?P<value>\d{3}-\d{2}-\d{4})
  description: simple_ssn
  ```

### PII

In addition to built-in secrets and custom secrets, the CLI supports the ability to define a different group of “secrets” related to PII (Personally Identifiable Information) such as Social Security Numbers (SSN), emails, URLs, IP-addresses, etc. This feature is fully customizable. Out of the box CLI defines several patterns but all can be disabled, or the corresponded action changed. Here is the default configuration file:

  ```yaml
  defaults:
  action: allow
  disabled: false

patterns:
  - type: ssn
    description: Social Security Number
    pattern: \b(?P<ssn1>\d{3})-(?P<ssn2>\d{2})-(?P<ssn3>\d{4})\b
    exclude_if: |
      /000|666|9../.test(ssn1) ||
      ssn2 == "00" ||
      ssn3 == "0000"
    action: block

  - type: email
    pattern: \b(?P<username>[a-z0-9!#'+^_~-]+(?:\.[a-z0-9!#'+^_~-]+)*)@(?P<domain>[a-zA-Z0-9-.]+)\b
    # exclude_if can be any valid JavaScript expression returns boolean value
    # it is not limited to a single expression, it can be even a full fledged function.
    # all matched groups defined in 'pattern' regex will be available as variables in the global execution context
    # the full matched value will be available as 'full_match' variable
    # Here is an example that uses a function: it will report only @github.com emails
    #exclude_if: |
    #  (function(){
    #    if (domain.toLowerCase() != "github.com") return true;
    #    return false;
    #  })()
    disabled: true

  - type: url
    description: URL
    pattern: \b(?:(?P<scheme>[a-zA-Z][a-zA-Z\d+-.]*):)(?:\/\/)?(?:(?P<userinfo>(?:[a-zA-Z\d\-._~\!$&'()*+,;=%]*)(?::(?:[a-zA-Z\d\-._~\!$&'()*+,;=:%]*))?)@)?(?P<host>[a-zA-Z\d\-.%]+)\b
    disabled: true

  - type: ip_v4
    description: IPv4
    pattern: \b((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\b

  - type: ip_v6
    description: IPv6
    pattern: (([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))

```

The configuration file can be global, for all the repos, it is located in `~/.blubracket/pii.yaml`, or local, in repo’s `.blubracket/pii.yaml` file. If repo-local file exists, it will be used, otherwise the global file will be used. Upon launch, CLI with create the global file if it does not exist yet. After file has been created, it is OK to fully change it, CLI will not touch it anymore.

### Sensitive words

In addition to checking secrets, CLI can check for sensitive/offensive words that might be good idea to avoid. Examples includes master, slave, etc. By default CLI only warns if a sensitive word has been found but allows commit to proceed. Sensitive Words can be configured in the similar way as PII Secrets. The configuration file name is `~/.blubracket/sensitive-words.yaml` (or a repo-local alternative). Here is the default file:

```yaml
defaults:
  action: block
  disabled: false

patterns:
  - type: master
    description: master
    pattern: \b(?i)(master(\w)*)\b
  - type: slave
    description: slave
    pattern: \b(?i)(slave)\b
  - type: whitelist
    description: whitelist
    pattern: \b(?i)(whitelist(ed|ing){0,1})\b
  - type: blacklist
    description: blacklist
    pattern: \b(?i)(blacklist(ed|ing){0,1})\b
  - type: whitebox
    description: whitebox
    pattern: \b(?i)(whitebox)\b
  - type: blackbox
    description: blackbox
    pattern: \b(?i)(blackbox)\b
  - type: whitehat
    description: whitehat
    pattern: \b(?i)(whitehat)\b
  - type: blackhat
    description: blackhat
    pattern: \b(?i)(blackhat)\b
  - type:  man_hours
    description: man-hours
    pattern: \b(?i)(man[ -]hours{0,1})\b
  - type: man_days
    description: man-days
    pattern: \b(?i)(man[ -]days{0,1})\b
```

Example output:

```bat
C:\Users\vbuzu\projects\sandbox>git commit -m "test" -a
BluBracket blocked 1 secret(s):
C:\Users\vbuzu\projects\sandbox\test2:8:27: custom_regex: simple SSN:
BluBracket allowed 1 sensitive word(s):
C:\Users\vbuzu\projects\sandbox\test2:8:4: Master: config: sensitive_keywords.action: allow
```

### Commit signing

BluBracket can check that the commit is going to be signed or not and warn or block in case the commit is not signed. By default BluBracket only warns if commit is not signed.

Note: Blubracket only checks git config commit.gpgSign value and not `-S`option passed to `git commit` command to determine signing status. The reason is that commit signing makes sense if all the commits are signed. Thus using commit.gpgSign is the most proper way to enable signing

Example Output:

```bat
C:\Users\vbuzu\projects\sandbox>git commit -m "test" -a
BluBracket allowed unsigned commit
Use `blubracket commit-signing configure` to enable commit signing
[master 94ca89a] test
 1 file changed, 2 insertions(+), 1 deletion(-)
```

#### Configure commit signing

In addition to checking is commit signed or not, BluBracket helps configuring signing if it is not done already. To do that use `blubracket commit-signing configure command`. This should be run inside a clone directory as it will configure the signing only for the one current repo/clone. To configure signing globally, for all the current and future clones, add `--global` flag. Internally CLI will create a gpg key if needed, will configure git to use it, and will point how to upload the key’s public key to git providers, like GitHub and GitLab.

Notes:

* CLI checks and configures gpg keys only, not S-MIME/X509

* CLI will try to use `gpg` command already available on the user’s device. If `gpg` is not found:

  * on Linux, CLI will do nothing, as gpg actually expected to be installed by default

  * on Windows, CLI will use gpg from a git for Windows distribution, if available. CLI will NOT install gpg4Win

    * on Mac/OSX, CLI will install gnupg2 using brew. CLI will NOT install brew itself. Along side with gnupg2, CLI will install and configure pinentry-mac, so key management can be integrated with OSX keychain and commit signing works not only from terminal but from IDEs as well.

* If a key needs to be generated, it is generated with default parameters (same as gpg --quick-gen-key command). Currently there is no way to customize this.

Example output:

```bat
C:\Users\vbuzu\projects\test-repo>blubracket commit-signing configure
Finding gpg... found: C:\Program Files\Git\usr\bin\gpg.exe
Checking gpg key for user-id 'John Doe <john@acme.com>' ...About to create a key for:
    "John Doe <john@acme.com>"

Continue? (Y/n)
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
gpg: key 25ADA7C6E06D60A0 marked as ultimately trusted
gpg: revocation certificate stored as '/c/Users/vbuzu/.gnupg/openpgp-revocs.d/AF06E23594DC979D3AC56B5625ADA7C6E06D60A0.rev'
public and secret key created and signed.

pub   rsa3072 2021-03-10 [SC] [expires: 2023-03-10]
      AF06E23594DC979D3AC56B5625ADA7C6E06D60A0
uid                      John Doe <john@acme.com>
sub   rsa3072 2021-03-10 [E]

Configuring git to use commit signing...done
Getting public key for gpg key '25ADA7C6E06D60A0' ...done
-----BEGIN PGP PUBLIC KEY BLOCK-----

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
3OYqf//nWVG3qA==
=ulRA
-----END PGP PUBLIC KEY BLOCK-----

Public Key has been copied to system clipboard. Next, add it to your git provider:
For GitHub: navigate to https://github.com/settings/keys
For GitLab: navigate to https://gitlab.com/-/profile/gpg_keys
```

### Binary files

The CLI can check that a “large” binary file is going to be committed and either ignore, warn, or block the commit depending on the file size. By default binary files less than 500 KB will be ignored; if more than 500 KB but less than 10 MB, CLI will warn but allow the commit; if more than 10 MB then the commit will be blocked. To disable only warning or blocking the size can be set to 0 (see configuration options below).

Sample output:

```bat
C:\Users\vbuzu\projects\test-repo>git commit -m "test"
BluBracket blocked 1 binary file
Blocked binary files:
C:\Users\vbuzu\projects\test-repo\bluscanner.exe: 81.2 MB
Consider using git-lfs to manage large binary files, https://git-lfs.github.com/
```

### CLI configuration

By default CLI blocks secrets and allows sensitive words. It is possible to customize this behavior using config files. CLI loads config files from `<repo>/.blubracket/config.yaml` and `~/.blubracket/config.yaml`. CLI mimics `git config` behavior where settings in a repo-local config overwrite settings in global config. Here is an example of the config file that has all the default values:

```yaml
secrets:
    disabled: false
    action: block
   
commit_signing:
    disabled: false
    action: allow    
  
binary_files:
    disabled: false
    allow_larger: 500KB
    block_larger: 10MB
```
