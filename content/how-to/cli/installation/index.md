---
title: "CLI tool installation"
description: "Instructions to install the CLI tool for Windows, macOS, and Linux"
lead:
date: 2022-02-23T02:48:57+00:00
draft: false
weight: 200
toc: false
resources:
  - src:
---

The BluBracket CLI is a high-performance, compact risk scanner written in Go. Unlike some tools, it runs entirely locally without sending any data to remote hosts (unless explicitly configured otherwise).

macOS, multiple Linux distros, and Windows are all supported.

Use these direct links to download the executables:

- macOS: https://static.blubracket.com/cli/latest/blubracket-macos
- Linux: https://static.blubracket.com/cli/latest/blubracket-linux
- Windows: https://static.blubracket.com/cli/latest/blubracket-win.exe

For example, to download and run the latest BluBracket CLI on macOS, you could run:

```sh
curl https://static.blubracket.com/cli/latest/blubracket-macos -o blubracket
chmod +x ./blubracket
mv ./blubracket /usr/local/bin/
```
