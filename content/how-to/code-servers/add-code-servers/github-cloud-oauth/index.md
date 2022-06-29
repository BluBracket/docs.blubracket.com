---
title: "Adding a GitHub Cloud code server on BluBracket Community & Team Editions"
description: ""
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 100
toc: false
resources:
  - src: step-1-add-code-server.png
  - src: step-2-select-code-server.png
  - src: step-3-add-github-cloud-org.png
  - src: step-4-github-org-selection.png
  - src: step-5a-all-repos.png
  - src: step-5b-select-repos.png
  - src: step-6-blubracket-scanning.png
  - src: step-7-review-risks.png
  - src: step-8-github-checks.png

---

### Getting started

Go to Settings → Code Servers in your BluBracket account and click the "add code server" button.

{{< figure src="step-1-add-code-server.png" caption="The Settings → Code Servers page." >}}

### Selecting to add a GitHub Cloud org as a new code server

Select GitHub Cloud from the list of available code server types.

{{< figure src="step-2-select-code-server.png" caption="The list of code server types in BluBracket." >}}

### Click the button to continue

Click the button to continue.

{{< figure src="step-3-add-github-cloud-org.png" caption="Additional details about how to add a GitHub Cloud code server to BluBracket." >}}

### Select your GitHub Org

BluBracket can monitor repos in any GitHub organization you have permissions to. Simply select the org you wish to monitor (you can add more later!).

{{< figure src="step-4-github-org-selection.png" caption="Select the GitHub org to monitor (repos can be chosen in the next step, and additional orgs can be added later)." >}}

### Select your repos

BluBracket can monitor all your repos (including any new ones you add later), or you can choose specific repos to monitor.

{{< figure src="step-5a-all-repos.png" caption="Monitor all GitHub repos in the org, including new ones created later." >}}

{{< figure src="step-5b-select-repos.png" caption="Specify GitHub repos to monitor." >}}

### BluBracket will start scanning your repos right away

We'll start scanning your repos immediately, but it can take a moment to scan through each selected repo and all their history. We recommend coming back in a few minutes and refreshing your browser for best results.

{{< figure src="step-6-blubracket-scanning.png" caption="BluBracket starting its initial repo scan after adding a GitHub org." >}}

### Review the historical findings

The history of your repos can go deep, but BluBracket will dig through everything and give you a comprehensive report on our findings.

{{< figure src="step-7-review-risks.png" caption="BluBracket's quick view of your code security health." >}}

### Stay protected

The BluBracket app for GitHub Checks will scan all new pull requests in real time to alert you to any risks while you're reviewing your code and before you merge it.

BluBracket checks are non-blocking by default.

{{< figure src="step-8-github-checks.png" caption="The BluBracket app for GitHub Checks helps protect each pull request." >}}
