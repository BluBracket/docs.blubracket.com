---
title: "2021-03-05 release"
description: ""
lead: ""
date: 2021-03-05T02:48:57+00:00
draft: false
toc: false
resources:
  - src:
---

**New Features**
----------------

**Command Line Interface (CLI) Tool Enhancements**

* A number of significant changes have been added to the CLI tool this with this release of the Community Edition. All of these improvements, except for code signing of course, have been taken from the existing features within the enterprise version of the BluBracket solution.
    
* Activeness Checks - The CLI tool now runs an activeness check on a number of the tokens, keys and IDs to eliminate false positives.
    
* Code Signing - The CLI tool now alerts the developer as to whether or not the code is signed when committed and assists in the code signing configuration if not already configured. This can be configured to either block or warn when performing a push to the repository.
    
* Sensitive Words - The CLI tool now alerts the user if any sensitive words are being committed to the local repository. These are words like master, slave, dummer, etc.
    
* CLI Configurations - By default the CLI tool blocks secrets and allows sensitive words. It is possible to customize this behavior using config files. CLI loads config files from `<repo>/.blubracket/config.yaml` and `~/.blubracket/config.yaml`. The CLI mimics `git config` behavior where settings in a repo-local config overwrite settings in global config.
    
* For additional information about the CLI tool and other aspects of the Community Edition product, check out the [Getting Started with the Community Edition](https://support.blubracket.com/hc/en-us/sections/360011962771-Getting-Started-with-the-Community-Edition) section of the BluBracket Help Center.
    

**Repository List Table Update**

* Clicking on the repository table now automatically sorts the secrets table by the selected repository. This allows the user to see all of the relevant secrets associated with the repository as well as the secret scores that compose the repo risk score.
    
* Previously the clicking of any row in the table would expose a slide-out that showed relevant information. We are still determining which is the most helpful to users and would love your feedback. Please drop us a note at [support@blubracket.com](mailto:support@blubracket.com).
    

**Team Edition Links**

* There are a number of areas within the Community Edition interface that you can now sign up for a free trial of the BluBracket Team Edition. By simply clicking on one of these links you will be navigated to the BluBracket web page that will give you more information about the trial and allow you to submit a request for the trial. By default the trial is 14 days, but you can request more time if necessary.
    

**Bug Fixes**
-------------

* Only minor UI fixes in this release of the Community Edition.
    

**Known Issues and Critical Notifications**
-------------------------------------------

* There are no known issues or notifications at this time.