---
title: "What does the BluBracket CLI tool do?"
description: ""
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 100
toc: false
tags:
  - CLI
  - CLI tool
  - pre-commit
  - precommit
resources:
  - src:
---

The BluBracket CLI tool provides a number of developer conveniences, and is optimized to check for the following at git pre-commit:

- Secrets:the tool identifies hundreds of types of tokens, keys, IDs as well as passwords.
- Non-inclusive language: the tool identifies non-inclusive language like master, slave, dummy, and blacklist.
- Custom RegEx: you can configure your own regular expressions that the tool will identify and alert on.
- Commit Signing:the CLI can check that the commit is going to be signed or not.
- Large Binary Files - the CLI tool can check that a “large” binary file is going to be committed. By default binary files less than 500 KB will be ignored; if more than 500 KB but less than 10 MB, CLI will warn but allow the commit; if more than 10 MB then the commit will be blocked.

The tool can be configured to ignore, warn, or block when it finds any of the above during a git commit attempt.
