---
title: "Does BluBracket store/modify my code or any part of my code?"
description: ""
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 100
toc: false
resources:
  - src:
---

No. BluBracket clones repositories, scans them, creates a hash of each of the files (for later comparisons), then the entire checkout from the BluBracket servers. All of this happens within a few seconds, depending on the repository size.

After the scan, BluBracket saves specific metadata to support alerting and reporting on any found risks—things like repository names, file names, contributor IDs, commit IDs and times, etc.

BluBracket never stores any code after the scan. And BluBracket never makes any changes, and does not have permissions to make changes to your code.
