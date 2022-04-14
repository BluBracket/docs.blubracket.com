---
title: "What file types are scanned?"
description: "BluBracket scans all text encoded files, as well as many types of archive formats."
lead: ""
date: 2022-04-09T01:59:00+00:00
draft: false
weight: 100
toc: false
tags:
  - files
  - file types
  - scanning
resources:
  - src:
---

### Source code and text files

BluBracket scans for code risks in all text encoded files, regardless of language.

### Archives

In addition, we also support scanning binary files. We support the following archive formats with different compression levels.

1. Zip
1. Rar
1. Tar
    - [br](https://en.wikipedia.org/wiki/Brotli)
    - [bz2](https://en.wikipedia.org/wiki/Bzip2)
    - [gz](https://en.wikipedia.org/wiki/Gzip)
    - [lz4](https://en.wikipedia.org/wiki/LZ4_(compression_algorithm))
    - [sz](https://en.wikipedia.org/wiki/Snappy_(compression))
    - [xz](https://en.wikipedia.org/wiki/XZ_Utils)
    - [zstd](https://en.wikipedia.org/wiki/Zstd)
1. 7-Zip (Coming soon)

In CLI, scanning archive files is supported using `scan-dir` subcommand.

Note: For Bitbucket Cloud & Server, archive files are only scanned during a full repo scan.
