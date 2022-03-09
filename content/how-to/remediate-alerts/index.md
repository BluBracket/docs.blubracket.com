---
title: "How to remediate alerts in code once they have been found by BluBracket."
description: 
lead: 
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 300
toc: true
resources:
  - src: 
---

There are a number of best practices when it comes to handling secrets in code.  Below are a few:

* Encrypt your secrets

* Use environmental variables

* Use a secret manager to store your secrets, like HashiCorp Vault, Azure Key Vault, etc.

Once BluBracket has found a secret and you have had a chance to remediate the secret in code, marking it as reviewed will help you easily differentiate it from those that still require action.
