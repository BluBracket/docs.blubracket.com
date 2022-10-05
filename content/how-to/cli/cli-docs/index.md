---
title: "BluBracket CLI options and usage"
description: "Options and usage for the BluBracket CLI"
lead:
date: 2022-02-23T02:48:57+00:00
draft: false
weight: 300
toc: false
resources:
  - src:
---

The BluBracket CLI is a high-performance, compact risk scanner written in Go. Unlike some tools, it runs entirely locally without sending any data to remote hosts (unless explicitly configured otherwise).

[Installation for Linux, macOS, and Windows is detailed here](/how-to/cli/installation/).

Key usage of the BluBracket CLI tool is as [part of a local git workflow, such as for pre-commit hooks](/how-to/cli/using-cli-with-git/), scanning [STDIN](#file), a [file](#file) or [directory](#dir), or as a [local gRPC server](#gRPC) to support integrations with IDEs and other applications.

### blubracket --help {#help}

Overview of BluBracket commands.

```text
Usage:
  blubracket [command]

Available Commands:
  checks            Various system checks
  commit-signing    Top level command for commands specific to commit signing
  help              Help about any command
  install-git-hooks Installs git hooks
  license           Prints the license details
  scan-dir          Scan a directory
  scan-file         Scan a file
  serve             Run gRPC server
  upload-stats      Uploads stats to BluBracket portal; normally, it should not be used directly

Flags:
  -h, --help      help for blubracket
  -v, --version   version for blubracket
```

Commands and usage related to [local git workflows are documented here](/how-to/cli/using-cli-with-git/), additional commands detailed below.

### blubracket scan-file -h {#file}

Scanning a file or STDIN.

```text
Scan a file

Usage:
  blubracket scan-file [flags]

Flags:
      --filename string   Specifies input filename in case stdin is used as input, ignored if real file is used as input
  -h, --help              help for scan-file
  -i, --input string      If specified scans that file, otherwise it scans stdin
  -o, --output string     If specified output information about found secrets to that file, otherwise stdout
```

### blubracket scan-dir -h {#dir}

Scanning a directory.

```text
Scan a directory

Usage:
  blubracket scan-dir [flags]

Flags:
  -h, --help            help for scan-dir
  -o, --output string   Specifies the file to store information about found secrets (required)
  -p, --path string     If specified scans that directory, otherwise it scans current directory
```

### blubracket serve -h {#server}

Operating as a local server to support more sophisticated integrations.

```text
Starts a daemon that serves gRPC requests.

blubracket serve <listen-uri>
where <listen-uri> is of format <network>:<address>
<network> - must be "unix", "tcp", "tcp4", "tcp6"
<address> - specify network address

For example:
  blubracket serve unix:/tmp/blubracket-cli-server-123

Usage:
  blubracket serve [flags]

Flags:
  -h, --help   help for serve
```
