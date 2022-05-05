---
title: "2021-03-26 release"
description: ""
lead: ""
date: 2021-03-26T02:48:57+00:00
draft: false
toc: false
resources:
  - src:
---

### New Features and Enhancements

### Enterprise Edition

### Rescan Repository

* It is now possible to rescan an entire repository, including all of the repository history, at the click of a button. Normally a full scan of a repository is done at the time of adding the code server that the repository belongs to, or whenever the repository is added. After that the initial scan the repository is monitored and all new commits are scanned and only periodically is the entire repository scanned. This new button allows administrators to scan the entire repository whenever they would like.

### Terms and Conditions

* A link to the BluBracket terms and conditions has been added to the bottom of the tenant portal. These terms and conditions have always been available in the BluBracket website and contracts but have been added here to make them easier to access.

### Community Edition

### Commit Date

* A commit date and deep link has now been added to the secrets table CSV download file. This makes it easier to share, understand and remediate issues directly from the document.

### Terms and Conditions

* A link to the BluBracket terms and conditions has been added to the bottom of the tenant portal. These terms and conditions have always been available in the BluBracket website and contracts but have been added here to make them easier to access.

### Bug Fixes

* CORE-6122 - Filters were previously not working in the Community Edition portal with repositories stared with numerical text. This has been addressed.

* CORE-N/A - Fixed issue with the risk score formatting in the Enterprise Edition.

* CORE-N/A - Removed the deep link for webhook URLs in alert details.

* CORE-6083 - The Code Types chart was displaying 0% for code types that represented less than 1% of the total. We’ve added a tenth of a percent to handle this issue.

* CORE-6121 - Sorting by date was displayed incorrectly in the Community Edition interface. This has been fixed.
