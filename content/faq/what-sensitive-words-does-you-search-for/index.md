---
title: "What non-inclusive language does the BluBracket search for?"
description: ""
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 100
toc: false
resources:
  - src:
---

It has become increasingly important lately to make sure specific sensitive words are not included in code or documentation. These would be words like: master, slave, dummy, blacklist, etc. Just as with secrets, the BluBracket code scanner and CLI tool automatically search for these sensitive words and notifies the developer before they are committed to repositories.

Example non-inclusive language includes the following words:

- master
- slave
- whitelist
- blacklist
- whitebox
- blackbox
- whitehat
- blackhat

Let us know if there are any others that you or your company think should be added to the list. You can always add your own via the regex configuration as well.
