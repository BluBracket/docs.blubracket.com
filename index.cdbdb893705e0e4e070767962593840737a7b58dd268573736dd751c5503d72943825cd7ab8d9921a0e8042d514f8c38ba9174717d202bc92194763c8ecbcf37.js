var suggestions = document.getElementById('suggestions');
var search = document.getElementById('search');

if (search !== null) {
  document.addEventListener('keydown', inputFocus);
}

function inputFocus(e) {
  if (e.ctrlKey && e.key === '/' ) {
    e.preventDefault();
    search.focus();
  }
  if (e.key === 'Escape' ) {
    search.blur();
    suggestions.classList.add('d-none');
  }
}

document.addEventListener('click', function(event) {

  var isClickInsideElement = suggestions.contains(event.target);

  if (!isClickInsideElement) {
    suggestions.classList.add('d-none');
  }

});

/*
Source:
  - https://dev.to/shubhamprakash/trap-focus-using-javascript-6a3
*/

document.addEventListener('keydown',suggestionFocus);

function suggestionFocus(e) {
  const suggestionsHidden = suggestions.classList.contains('d-none');
  if (suggestionsHidden) return;

  const focusableSuggestions= [...suggestions.querySelectorAll('a')];
  if (focusableSuggestions.length === 0) return;

  const index = focusableSuggestions.indexOf(document.activeElement);

  if (e.key === "ArrowUp") {
    e.preventDefault();
    const nextIndex = index > 0 ? index - 1 : 0;
    focusableSuggestions[nextIndex].focus();
  }
  else if (e.key === "ArrowDown") {
    e.preventDefault();
    const nextIndex= index + 1 < focusableSuggestions.length ? index + 1 : index;
    focusableSuggestions[nextIndex].focus();
  }

}

/*
Source:
  - https://github.com/nextapps-de/flexsearch#index-documents-field-search
  - https://raw.githack.com/nextapps-de/flexsearch/master/demo/autocomplete.html
*/

(function(){

  var index = new FlexSearch.Document({
    tokenize: "forward",
    cache: 100,
    document: {
      id: 'id',
      store: [
        "href", "title", "description"
      ],
      index: ["title", "description", "content"]
    }
  });


  // Not yet supported: https://github.com/nextapps-de/flexsearch#complex-documents

  /*
  var docs = [
    ];
  */

  // https://discourse.gohugo.io/t/range-length-or-last-element/3803/2

  index.add(
    {
        id: 0,
        href: "/how-to/add-code-servers/bitbucket-cloud/",
        title: "Adding a Bitbucket Cloud code server",
        description: "How to add a Bitbucket Cloud server to your tenant",
        content: "After selecting to add a Bitbucket Cloud code server, follow the instructions below to add a Bitbucket workspace as a code server in BluBracket.\nBitbucket uses the term \u0026ldquo;Bitbucket Cloud\u0026rdquo; to differentiate repositories hosted at bitbucket.com from their self-hosted enterprise offering.\nEach Bitbucket workspace is a different code server in BluBracket (see Bitbucket docs on workspaces).\nEntering a workspace name # The next thing to do is select a workspace to point the server to. Workspaces are usually, but not always, set up as lines of business or projects. For example, Google may have workspaces for Nest, Android, AdWords, etc., all under the same server. It is possible to point a server at multiple workspaces. Enter the targeted workspace into the input field.\n  If you don’t know the workspace name you can find them in the Bitbucket administrator portal. Log into your Bitbucket account as an administrator and navigate to the following location, https://bitbucket.org/account/workspaces/. From this location, click Manage (under Actions) for one of the workspaces, and note the Workspace ID\n  Entering a personal access token (PAT) # The next step in adding the code server is adding the Personal Access Token (PAT). In order for BluBracket to access information within a given repository, an access token must be uploaded into the tenant.\nNote: The personal access token but be entered in the following format: username:token.\nExample: holland:Vgc9Kw8w5zQu58989Uxz\nHow to generate a personal access token on Bitbucket\nEnter the token in the location indicated below:\n  Finally, select either the “all repositories” or “customer select repositories” option and click on the save button.\n  At this point, if you’ve completed all of the above steps and entered the information accurately, the enterprise code server should be up and running and start to pull the desired data. Please note it can take anywhere from a few minutes to several hours for our system to finish analyzing your repositories. You can navigate to the \u0026ldquo;repositories\u0026rdquo; page to check the real-time scanning status.\n"
      })
      .add(
      {
        id: 1,
        href: "/how-to/add-code-servers/github-cloud/",
        title: "Adding a GitHub Cloud code server",
        description: "How to add a GitHub cloud code server to your tenant",
        content: "After selecting to add a GitHub Cloud code server, follow the instructions below to add a GitHub Organization as a code server in BluBracket.\nGitHub uses the term \u0026ldquo;GitHub Cloud\u0026rdquo; to differentiate repositories hosted at github.com from their self-hosted enterprise offering.\nEach GitHub Organization is a different code server in BluBracket (see GitHub\u0026rsquo;s docs on Organizations).\nEntering the organization name #   Enter the short form of the GitHub Organization name. The short form of the name is the version shown in the URL for the org.\nFor example: The Linux Foundation Engineering org\u0026rsquo;s short form name is LF-Engineering as seen in the URL on that page.\nYou can see all organizations you are a member of in your GitHub account at https://github.com/settings/organizations.:\n  Entering a Personal Access Token (PAT) # BluBracket uses a personal access token to access the repos you wish to scan (see GitHub\u0026rsquo;s docs on personal access tokens).\n  The \u0026ldquo;generate on GitHub\u0026rdquo; button will take you to the GitHub page specific to creating new tokens:\n  Click on the “generate token” button at the bottom of the page:\n  Copy the PAT token from the GitHub page and enter it in the BluBracket dashboard as shown:\n  Finally, select either the “all repositories” or “customer select repositories” option, and click on the \u0026ldquo;save\u0026rdquo; button.\n  After clicking \u0026ldquo;save,\u0026rdquo; BluBracket will start scanning for any risks in the code, as well as risks related to access and configuration of the GitHub account.\nIt can take anywhere from a few minutes to several hours for our system to finish analyzing your repositories. You can navigate to the ‘Repositories’ page to check the real-time scanning status.\n"
      })
      .add(
      {
        id: 2,
        href: "/how-to/add-code-servers/gitlab-cloud/",
        title: "Adding a GitLab Cloud code server",
        description: "How to add a GitLab Cloud code server to your tenant",
        content: "After selecting to add a GitLab Cloud code server, follow the instructions below to add a GitLab Organization as a code server in BluBracket.\nGitLab uses the term \u0026ldquo;GitLab Cloud\u0026rdquo; to differentiate repositories hosted at gitlab.com from their self-hosted enterprise offering.\nEach GitLab Organization is a different code server in BluBracket (see GitLab docs on organizations).\nEntering a Group name # The next thing to do is select a Group to point the server to. Groups are usually, but not always, set up as lines of business or projects. For example, Google may have Groups for Nest, Android, Add Words, etc., all under the same server. It is possible to point a server at multiple Groups. Enter the targeted Group into the input field.\n  If you don’t know the Group name you can find them in the Gitlab administrator portal. Log into your GitLab account as an administrator and navigate to the following location: Click on Menu, then Select Groups.\n  Entering a Personal Access Token (PAT) # The next step in adding the code server is adding the Personal Access Token (PAT). In order for BluBracket to access information within a given repository, an access token must be uploaded into the tenant.\nHow to generate a Personal Access Token (PAT) in GitLab\nEnter the token in the location indicated below.\n  Click Next\nFinally, select either the “All Repositories” or “Customer Select Repositories” option and click on the Save button.\n  At this point, if you’ve completed all of the above steps and entered the information accurately, the Enterprise Code Server should be up and running and start to pull the desired data. Please note it can take anywhere from a few minutes to several hours for our system to finish analyzing your repositories. You can navigate to the ‘Repositories’ page to check the real-time scanning status.\n"
      })
      .add(
      {
        id: 3,
        href: "/faq/can-i-customize-secrets-detected-by-the-cli/",
        title: "Can I customize what secrets are detected by the CLI tool?",
        description: "Yes. BluBracket can identify hundreds of different types of secrets in code, including tokens, keys, IDs and passwords, but the BluBracket CLI tool also supports user-defined regular expressions to match and alert on.\nFor more detailed information on how to add regular expressions to the CLI, look here.",
        content: "Yes. BluBracket can identify hundreds of different types of secrets in code, including tokens, keys, IDs and passwords, but the BluBracket CLI tool also supports user-defined regular expressions to match and alert on.\nFor more detailed information on how to add regular expressions to the CLI, look here.\n"
      })
      .add(
      {
        id: 4,
        href: "/faq/can-i-find-secrets-before-committed/",
        title: "Can I find secrets before they are committed?",
        description: "Yes. With the BluBracket Command Line Interface (CLI) tool, you can catch secrets before the code is committed to a repository. Once downloaded and configured, the tool will report any risks found in commits and optionally block commits until they\u0026rsquo;re addressed.\nThe BluBracket CLI tool works with pre-commit hooks, and with any IDEs where the pre-commit hooks are supported.",
        content: "Yes. With the BluBracket Command Line Interface (CLI) tool, you can catch secrets before the code is committed to a repository. Once downloaded and configured, the tool will report any risks found in commits and optionally block commits until they\u0026rsquo;re addressed.\nThe BluBracket CLI tool works with pre-commit hooks, and with any IDEs where the pre-commit hooks are supported.\n"
      })
      .add(
      {
        id: 5,
        href: "/faq/do-i-need-a-credit-card/",
        title: "Do I need a credit card to sign up?",
        description: "No credit card is needed to sign up for either the BluBracket Community Edition or free trial.\nLearn how to sign up here.",
        content: "No credit card is needed to sign up for either the BluBracket Community Edition or free trial.\nLearn how to sign up here.\n"
      })
      .add(
      {
        id: 6,
        href: "/faq/does-blubracket-scan-new-commits-to-repositories/",
        title: "Does BluBracket scan new commits to repositories?",
        description: "Yes. Each time a new commit is made to a monitored repository, BluBracket immediately scans the commit for any new risks. Any risks that are found will be displayed in the web dashboard, and alerted through any configured alert integrations.",
        content: "Yes. Each time a new commit is made to a monitored repository, BluBracket immediately scans the commit for any new risks. Any risks that are found will be displayed in the web dashboard, and alerted through any configured alert integrations.\n"
      })
      .add(
      {
        id: 7,
        href: "/faq/does-blubracket-store-modify-my-code/",
        title: "Does BluBracket store/modify my code or any part of my code?",
        description: "No. BluBracket clones repositories, scans them, creates a hash of each of the files (for later comparisons), then the entire checkout from the BluBracket servers. All of this happens within a few seconds, depending on the repository size.\nAfter the scan, BluBracket saves specific metadata to support alerting and reporting on any found risks—things like repository names, file names, contributor IDs, commit IDs and times, etc.\nBluBracket never stores any code after the scan.",
        content: "No. BluBracket clones repositories, scans them, creates a hash of each of the files (for later comparisons), then the entire checkout from the BluBracket servers. All of this happens within a few seconds, depending on the repository size.\nAfter the scan, BluBracket saves specific metadata to support alerting and reporting on any found risks—things like repository names, file names, contributor IDs, commit IDs and times, etc.\nBluBracket never stores any code after the scan. And BluBracket never makes any changes, and does not have permissions to make changes to your code.\n"
      })
      .add(
      {
        id: 8,
        href: "/how-to/add-code-servers/gitlab-cloud/generate-pat/",
        title: "Generate a personal access token (PAT) in GitLab",
        description: "Entering a token and creating a GitLab personal access token #   In order for BluBracket to access information within a given repository, an access token must be uploaded into the tenant. An administrator for the GitLab account can create a new token by taking the following steps:\n  For GitLab Cloud, once logged into the GitLab interface, select Preferences → Access Tokens. You should end up at a URL similar to the following: https://gitlab.",
        content: "Entering a token and creating a GitLab personal access token #   In order for BluBracket to access information within a given repository, an access token must be uploaded into the tenant. An administrator for the GitLab account can create a new token by taking the following steps:\n  For GitLab Cloud, once logged into the GitLab interface, select Preferences → Access Tokens. You should end up at a URL similar to the following: https://gitlab.com/-/profile/personal_access_tokens\n  For GitLab Self-Managed, once logged into the GitLab interface, select Preferences → Access Tokens. You should end up at a URL similar to the following: /-/profile/personal_access_tokens\n  Create a ‘Name’ for your PAT and an ‘Expiration Date’ as shown below:\n      Select the following scopes:\n  api\n  read_api\n  These are the permissions that the token must have for BluBracket to communicate correctly with the GitLab account:\n  *See the notes at the bottom of the document for scope requirements.\n Click on the “Create personal access token” button at the bottom of the page.     This token should now be available to copy.  Scope additional requirements #   For permissions, the user associated with the token has to be added as an org member.\n  For the org, user can add themselves as an org to track repositories under their personal account.\n  "
      })
      .add(
      {
        id: 9,
        href: "/how-to/add-code-servers/bitbucket-cloud/generate-pat/",
        title: "Generate an app password or personal access token (PAT) in Bitbucket",
        description: "In order for BluBracket to access information within a given repository, an App Password (Bitbucket Cloud) or Personal Access Token (Bitbucket Server) must be uploaded into the tenant. An administrator for the Bitbucket account can create a new password or token by taking the following steps:\nBitbucket Cloud #   For Bitbucket Cloud, once logged in to Bitbucket select Personal Settings → App Passwords. You should end up at a URL similar to the following: https://bitbucket.",
        content: "In order for BluBracket to access information within a given repository, an App Password (Bitbucket Cloud) or Personal Access Token (Bitbucket Server) must be uploaded into the tenant. An administrator for the Bitbucket account can create a new password or token by taking the following steps:\nBitbucket Cloud #   For Bitbucket Cloud, once logged in to Bitbucket select Personal Settings → App Passwords. You should end up at a URL similar to the following: https://bitbucket.org/account/settings/app-passwords/\n  Select Create app password\n  Provide a label\n  Select the following permissions\n    Bitbucket server #   For Bitbucket Server, once logged into the Bitbucket interface, select Manage Account → Personal access tokens. You should end up at a URL similar to the following: https://serverURL /plugins/servlet/access-tokens/manage\n  Select Create a token\n  Provide a Token name\n  Select the following permissions\n    "
      })
      .add(
      {
        id: 10,
        href: "/faq/how-do-i-add-a-repo/",
        title: "How do I add a repo to monitor?",
        description: "To monitor a code repository in BluBracket, it must be part of a monitored code server.\n👉 How to add code servers\nFor many code servers supported by BluBracket, you have an option of automatically monitoring all repos on the code server, or choosing which repos to monitor. View your configured code servers in Settings → Code Servers, then select \u0026ldquo;edit monitored repositories\u0026rdquo; from the options menu for the code server:",
        content: "To monitor a code repository in BluBracket, it must be part of a monitored code server.\n👉 How to add code servers\nFor many code servers supported by BluBracket, you have an option of automatically monitoring all repos on the code server, or choosing which repos to monitor. View your configured code servers in Settings → Code Servers, then select \u0026ldquo;edit monitored repositories\u0026rdquo; from the options menu for the code server:\n  From there, choose which repositories to monitor:\n  "
      })
      .add(
      {
        id: 11,
        href: "/faq/how-long-does-it-take-to-scan-new-commits/",
        title: "How long does it take for BB to scan new commits?",
        description: "The time it takes for BluBracket to scan new commits depends on the size of the commit. In most cases though the scan is perceived as immediate.",
        content: "The time it takes for BluBracket to scan new commits depends on the size of the commit. In most cases though the scan is perceived as immediate.\n"
      })
      .add(
      {
        id: 12,
        href: "/api/intro-auth-keys/",
        title: "Intro to BluBracket APIs and API keys",
        description: "How to access and use the BluBracket API.",
        content: "In order to make requests into the event and alert APIs, you have to generate an API key, which you use to generate a token, and then you can setup any kind of integration that you would like to make authenticated requests into the Blu Event and Alert APIS.\nGenerating an auth token #   Create an API key by navigating to Settings \u0026gt; API Keys  Generating a key in the BluBracket web console.\n    Enter a name for the key\n  Select Integration from the drop down\n  Select Generate Key\n  Save the JSON/CSV file to your desktop\n  Open the JSON/CSV file and copy the value of the token\n{ \u0026quot;api_keys\u0026quot;: { \u0026quot;https://mycompany.blubracket.com\u0026quot;: { \u0026quot;id\u0026quot;: \u0026quot;BLU-a492144b-f118-4598-991e-f1d4d6209edf\u0026quot;, \u0026quot;key\u0026quot;: \u0026quot;TofsB.....EqwGg\u0026quot;, \u0026quot;token\u0026quot;: \u0026quot;QkxVL....xd0dn\u0026quot; } } }    Testing and using the API token # With the generated token, you can make requests directly to BluBracket APIs. You will need to set the Authorization header and use the provided token as Bearer token.\nHere are some examples using curl:\ncurl -H \u0026quot;Authorization: Bearer TOKEN_FROM_STEP_2\u0026quot; --data '{\u0026quot;filters\u0026quot;:[]}' https://mycompany.blubracket.com/api/public/event/search curl -H \u0026quot;Authorization: Bearer TOKEN_FROM_STEP_2\u0026quot; --data '{\u0026quot;filters\u0026quot;:[]}' https://mycompany.blubracket.com/api/public/alert/search  Note: As per ISO 8601, date formatting requires either the Z or the +00:00 be supplied at the end. This is required to determine that the datetime is in the UTC timezone.\nExample Python code is shown below:\nfrom datetime import datetime, timezone datetime.now(timezone.utc).isoformat()  Output: 2021-07-20T23:45:06.342716+00:00\n"
      })
      .add(
      {
        id: 13,
        href: "/intro/",
        title: "Introduction to BluBracket ",
        description: "",
        content: ""
      })
      .add(
      {
        id: 14,
        href: "/faq/what-alerts-are-shown/",
        title: "What alerts are shown in BluBracket?",
        description: "This page is a stub.",
        content: "This page is a stub.\n"
      })
      .add(
      {
        id: 15,
        href: "/faq/what-can-i-do-with-blubracket-apis/",
        title: "What can I do with BluBracket APIs?",
        description: "Use BluBracket APIs to integrate with your CI/DC solution. This will help make sure that there are no secrets accidentally checked in to code by any of your team members.\nYou may also leverage BluBracket APIs to export secret found events to other systems in addition to our support for Slack, Splunk, and others.",
        content: "Use BluBracket APIs to integrate with your CI/DC solution. This will help make sure that there are no secrets accidentally checked in to code by any of your team members.\nYou may also leverage BluBracket APIs to export secret found events to other systems in addition to our support for Slack, Splunk, and others.\n"
      })
      .add(
      {
        id: 16,
        href: "/faq/what-can-i-do-with-the-free-trial/",
        title: "What can I do with the free trial?",
        description: "The free trial has all the features of the BluBracket Teams Edition, including:\n Risk detection for secrets, PII, non-inclusive language, and infrastructure-as-code, as well as git access and configuration Workflow support from pre-commit through historical risk remediation  Those tools can help you:\n Understand your overall code health and see the areas of highest risk Implement workflows to stop new risks from getting into code Monitor your code health and watch it improve with every commit  These docs walk through the sign-up process.",
        content: "The free trial has all the features of the BluBracket Teams Edition, including:\n Risk detection for secrets, PII, non-inclusive language, and infrastructure-as-code, as well as git access and configuration Workflow support from pre-commit through historical risk remediation  Those tools can help you:\n Understand your overall code health and see the areas of highest risk Implement workflows to stop new risks from getting into code Monitor your code health and watch it improve with every commit  These docs walk through the sign-up process.\n"
      })
      .add(
      {
        id: 17,
        href: "/faq/what-does-the-cli-tool-do/",
        title: "What does the BluBracket CLI tool do?",
        description: "The BluBracket CLI tool provides a number of developer conveniences, and is optimized to check for the following at git pre-commit:\n Secrets:the tool identifies hundreds of types of tokens, keys, IDs as well as passwords. Non-inclusive language: the tool identifies non-inclusive language like master, slave, dummy, and blacklist. Custom RegEx: you can configure your own regular expressions that the tool will identify and alert on. Commit Signing:the CLI can check that the commit is going to be signed or not.",
        content: "The BluBracket CLI tool provides a number of developer conveniences, and is optimized to check for the following at git pre-commit:\n Secrets:the tool identifies hundreds of types of tokens, keys, IDs as well as passwords. Non-inclusive language: the tool identifies non-inclusive language like master, slave, dummy, and blacklist. Custom RegEx: you can configure your own regular expressions that the tool will identify and alert on. Commit Signing:the CLI can check that the commit is going to be signed or not. Large Binary Files - the CLI tool can check that a “large” binary file is going to be committed. By default binary files less than 500 KB will be ignored; if more than 500 KB but less than 10 MB, CLI will warn but allow the commit; if more than 10 MB then the commit will be blocked.  The tool can be configured to ignore, warn, or block when it finds any of the above during a git commit attempt.\n"
      })
      .add(
      {
        id: 18,
        href: "/faq/what-permissions-do-you-require/",
        title: "What GitHub permissions does the BluBracket app require?",
        description: "When you authenticate into BluBracket using GitHub Oauth you will see and approve the following permissions:\n Read access to administration, code, members, metadata, organization administration, and pull requests Read and write access to checks, organization hooks, and repository hooks  These permissions allow BluBracket to monitor the repositories that you select and present you with any secrets found as well as contributor/commit information.",
        content: "When you authenticate into BluBracket using GitHub Oauth you will see and approve the following permissions:\n Read access to administration, code, members, metadata, organization administration, and pull requests Read and write access to checks, organization hooks, and repository hooks  These permissions allow BluBracket to monitor the repositories that you select and present you with any secrets found as well as contributor/commit information.\n"
      })
      .add(
      {
        id: 19,
        href: "/faq/what-happens-when-my-free-trial-runs-out/",
        title: "What happens when my free trial runs out?",
        description: "If your free trial expires, it will automatically convert to our BluBracket Community Edition, a completely free product with the most-used features of our Team and Enterprise editions.\nBluBracket Community Edition is free to use with no time limits.",
        content: "If your free trial expires, it will automatically convert to our BluBracket Community Edition, a completely free product with the most-used features of our Team and Enterprise editions.\nBluBracket Community Edition is free to use with no time limits.\n"
      })
      .add(
      {
        id: 20,
        href: "/faq/supported-ide/",
        title: "What IDEs are supported by the CLI tool?",
        description: "In our testing, any IDE (integrated developer environment) with built-in support for git and pre-commit hooks supports supports the feedback and alerts from the BluBracket CLI tool.\nBluBracket officially supports the following IDEs:\n IntelliJ VS Code  ",
        content: "In our testing, any IDE (integrated developer environment) with built-in support for git and pre-commit hooks supports supports the feedback and alerts from the BluBracket CLI tool.\nBluBracket officially supports the following IDEs:\n IntelliJ VS Code  "
      })
      .add(
      {
        id: 21,
        href: "/faq/what-if-i-need-more-time-for-my-free-trial/",
        title: "What if I need more time for my free trial?",
        description: "Just ask and we\u0026rsquo;ll extend your free trial!\nOur goal is to build a product you want to use because it provides value to you. If you need more time, we\u0026rsquo;ll gladly help.\nContact our customer success team here.",
        content: "Just ask and we\u0026rsquo;ll extend your free trial!\nOur goal is to build a product you want to use because it provides value to you. If you need more time, we\u0026rsquo;ll gladly help.\nContact our customer success team here.\n"
      })
      .add(
      {
        id: 22,
        href: "/intro/what-is-blubracket/",
        title: "What is BluBracket?",
        description: "BluBracket is a code and git security suite that identifies risks in your code, monitors who and what has access to your code, and tracks where your code goes outside your git repos.\n  BluBracket use-cases #  Identifying, preventing, and removing risks in code  Secrets Personally identifiable information (PII) Non-inclusive language (NIL) Infrastructure-as-code (IAC) risks   Monitoring who and what has access to your code Monitoring where your code goes  Who is BluBracket for?",
        content: "BluBracket is a code and git security suite that identifies risks in your code, monitors who and what has access to your code, and tracks where your code goes outside your git repos.\n  BluBracket use-cases #  Identifying, preventing, and removing risks in code  Secrets Personally identifiable information (PII) Non-inclusive language (NIL) Infrastructure-as-code (IAC) risks   Monitoring who and what has access to your code Monitoring where your code goes  Who is BluBracket for? # BluBracket is for individual developers, development and appsec teams of all sizes, and enterprise infosec teams.\n  BluBracket Community Edition\nCore BluBracket code security features—including the CLI tools.Available free with no time limit for personal and open source use.\n  BluBracket Teams Edition\nAll the BluBracket features to identify risks in your code, as well as git access and configuration risks.\nAvailable as a full-featured, free, no-obligation trial. After the trial, the account will automatically convert to a BluBracket Community Edition account.\n  BluBracket Enterprise Edition\nThe entire suite of BluBracket code security features to identify risks in your code, git access and configuration risks, and track where code goes outside your git repos.\nContact our customer success team for a free demo.\n  How BluBracket works # BluBracket has two parallel modes of operation:\n As a SaaS suite providing protection and alerts across a codebase, supporting the detection, analysis, and remediation of security risks in the code and related to code access As a local CLI tool scanning code locally, to support immediate identification of potential risks in the code, without the risk of sending that code to remote servers  And BluBracket integrates at multiple points in the SDLC workflow:\n Before code is committed, via the CLI and pre-commit hooks, and in popular IDEs Before code is merged, via CI checks (GitHub Checks, Bitbucket Code Insights, Jenkins, etc.) Actionable alerts in Slack and other tools when new risks are detected Tools to analyze and understand existing risks, and trend reports to see improvement over time  Where does BluBracket integrate? #  Local/workstation tools Code servers, like GitHub and Bitbucket CI servers, like GitHub Actions and Jenkins Identity, authentication, and authorization systems like SAML and Active Directory Messaging systems, like Slack Ticketing \u0026amp; incident management systems, like Jira and PagerDuty Build your own with APIs and webhooks  How to get started with BluBracket # Start a free, no-obligation trial today, or contact our customer success team for a free demo.\nOr see all the steps to getting started here.\n"
      })
      .add(
      {
        id: 23,
        href: "/faq/what-kinds-of-secrets-do-you-search-for/",
        title: "What kinds of secrets does BluBracket search for?",
        description: "BluBracket uses a variety of technologies, including pattern matching and AI/ML to detect hundreds of different types of secrets in code, including tokens, keys, IDs, credentials and passwords. BluBracket also allows developers to specify additional alert triggers using regular expressions.\nA sample of secrets BluBracket commonly detects includes:\npassword_assignment # Potential password assignment\n'PaSswOrd' = '13579'  secret_assignment # Potential secret assignment\n\u0026quot;test_token_123\u0026quot; = \u0026quot;my_secret_token\u0026quot;  credential_assignment # Potential credential assignment",
        content: "BluBracket uses a variety of technologies, including pattern matching and AI/ML to detect hundreds of different types of secrets in code, including tokens, keys, IDs, credentials and passwords. BluBracket also allows developers to specify additional alert triggers using regular expressions.\nA sample of secrets BluBracket commonly detects includes:\npassword_assignment # Potential password assignment\n'PaSswOrd' = '13579'  secret_assignment # Potential secret assignment\n\u0026quot;test_token_123\u0026quot; = \u0026quot;my_secret_token\u0026quot;  credential_assignment # Potential credential assignment\nAWS_creDentiAl: 'some-string'  google_api_key # Potential Google API key\nAIzaSyA-k3UmEeCD6KpySp3cSAlGJwXTNV_oybM  google_api_key_base64 # Potential Google API key (base64)\nQUl6YVN5QS1rM1VtRWVDRDZLcHlTcDNjU0FsR0p3WFROVl9veWJN  google_oauth # Potential Google OAuth\n3572-b3w78sfasfcvs87fasdf6hbvefs21nb3.apps.googleusercontent.com  google_oauth_access_token # Potential Google OAuth access token\nya29.sd8keCms2swx2sJNW8kWxqzj3  google_oauth_access_token_base64 # Potential Google OAuth access token (base64)\neWEyOS5zZDhrZUNtczJzd3gyc0pOVzhrV3hxemoz  aws_access_key_id # Potential AWS access key ID\nAKIA2E0A8F3B244C9986  aws_access_key_id_base64 # Potential AWS access key ID (base64)\nQUtJQTJFMEE4RjNCMjQ0Qzk5ODY non-token  aws_secret_key # Potential AWS Secret key\nawS_secret=\u0026quot;7CE556A3BC234CC1FF9E8A5C324C0BB70AA21B6D\u0026quot;  aws_account_id # Potential AWS account ID\n\u0026quot;aWs_account\u0026quot;: \u0026quot;3238-1074-6278\u0026quot;  aws_mws_key # Potential AWS MWS key\namzn.mws.a8fc03d7-7eb3-c92f-b3aa-ae93cbff7acd  aws_mws_key_base64 # Potential AWS MWS key (base64)\nYW16bi5td3MuYThmYzAzZDctN2ViMy1jOTJmLWIzYWEtYWU5M2NiZmY3YWNk  github_token # Potential GitHub token\n'githUb_token': '9qjxsjq6HWBXKAOP87IJHmhsW8038d73Dm9eDu'  github_access_token # Potential GitHub access token or OAuth client secret\ngIthub-access_token = '2b30cc694989f335a4298067c4753a6c09ccfe5e'  github_oauth_client_secret # Potential GitHub OAuth client secret\ngIthub-oAuth_token = '2b30cc694989f335a4298067c4753a6c09ccfe5e'  github_token_base64 # github_access_token_base64 # github_oauth_client_secret_base64 # Potential GitHub Personal Access Token or OAuth Client Secret (base64)\n'githUb_token': 'OXFqeHNqcTZIV0JYS0FPUDg3SUpIbWhzVzgwMzhkNzNEbTllRHU'  github_personal_access_token # Potential GitHub personal access token\n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  github_oauth_client_id # Potential GitHub OAuth Client ID\ngithub_client-id : 'c7444c71c75965b07cdb'  github_user_to_server_token # Potential GitHub user-to-server token\nghu_16C7e42F292c6912E7710c838347Ae178B4a  github_server_to_server_token # Potential GitHub server-to-server token\nghs_16C7e42F292c6912E7710c838347Ae178B4a  github_refresh_token # Potential GitHub refresh token\nghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498  gitlab_oauth_application_id_base64 # gitlab_oauth_secret_base64 # Potential Base64 Encoded GitLab OAuth application id or secret\ngitLab: \u0026quot;Yzc0ZjNjZmQ0NDk0OWM3MGY3ZjM1NjEyOTViNjdlNjgyZDdlNGZmNjY5OTViNjdkNGUxNTRmZTMxMjU0ODFhOA==\u0026quot;  gitlab_access_token # Potential GitLab Access Token\ngitLab= \u0026quot;y-WttoALkwHn_vWJ72DB\u0026quot;  gitlab_oauth_application_id # gitlab_oauth_secret # Potential GitLab OAuth Applicaiton ID or GitLab OAuth Secret\ngitLab: \u0026quot;c74f3cfd44949c70f7f3561295b67e682d7e4ff66995b67d4e154fe3125481a8\u0026quot;  bitbucket_app_password # Potential Bitbucket App Password\nbitbucKet-app_pwd := \u0026quot;YpHdUSPAB9aDNuwVq8uK\u0026quot;  bitbucket_app_password_base64 # Potential Bitbucket App Password (base64)\nbitbucKet-app_token := \u0026quot;WXBIZFVTUEFCOWFETnV3VnE4dUs=\u0026quot;  bitbucket_oauth_key # Potential Bitbucket OAuth Key\nbitbUCket_key= \u0026quot;NCnnHSXbMVmJZr8D8q\u0026quot;  bitbucket_oauth_key_base64 # Potential Bitbucket OAuth Key (base64)\nbitbUCket_key= TkNubkhTWGJNVm1KWnI4RDhx  bitbucket_oauth_secret # Potential Bitbucket OAuth Secret\n\u0026quot;bitbuckeT_secret\u0026quot;: \u0026quot;CMJ2bKZUPAzXezTwNGXyWDsegT8ZW3Yd\u0026quot;  bitbucket_oauth_secret_base64 # Potential Bitbucket OAuth Secret (base64)\n\u0026quot;bitbuckeT_secret\u0026quot;: \u0026quot;Q01KMmJLWlVQQXpYZXpUd05HWHlXRHNlZ1Q4WlczWWQ\u0026quot;  azure_active_directory_client_id # Potential Azure Active Directory Client ID\nazuRE_ad_client_id=\u0026quot;7076aa77-81ef-46ea-ae22-d768babeed21\u0026quot;  azure_active_directory_client_secret # Potential Azure Active Directory Client Secret\naZure_client_secret=\u0026quot;y5=KAF/PbpoMmum31/t]S88dDu5d:?S*\u0026quot;  azure_active_directory_client_secret_base64 # Potential Azure Active Directory Client Secret (base64)\naZure_client_secret=\u0026quot;SVt3Si1dRExyTFduYzBlRi11cEFtdVhlY0lMZVM2MzA=\u0026quot;  azure_access_token # Potential Azure Access Token\n'azUre_token'= \u0026quot;r5nt64ikuzhohfm7r4rmdk2gd5unb4tb7eberlombqazshrfdr3q\u0026quot;  azure_access_token_base64 # Potential Azure Access Token (base64)\n'azUre_token'= \u0026quot;cjVudDY0aWt1emhvaGZtN3I0cm1kazJnZDV1bmI0dGI3ZWJlcmxvbWJxYXpzaHJmZHIzcQ==\u0026quot;  microsoft_id_token # Potential Microsoft Identity Platform ID Token\nmicRosoft_id_token=\u0026quot;eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyIsImtpZCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyJ9.eyJhdWQiOiJiMTRhNzUwNS05NmU5LTQ5MjctOTFlOC0wNjAxZDBmYzljYWEiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mYTE1ZDY5Mi1lOWM3LTQ0NjAtYTc0My0yOWYyOTU2ZmQ0MjkvIiwiaWF0IjoxNTM2Mjc1MTI0LCJuYmYiOjE1MzYyNzUxMjQsImV4cCI6MTUzNjI3OTAyNCwiYWlvIjoiQVhRQWkvOElBQUFBcXhzdUIrUjREMnJGUXFPRVRPNFlkWGJMRDlrWjh4ZlhhZGVBTTBRMk5rTlQ1aXpmZzN1d2JXU1hodVNTajZVVDVoeTJENldxQXBCNWpLQTZaZ1o5ay9TVTI3dVY5Y2V0WGZMT3RwTnR0Z2s1RGNCdGsrTExzdHovSmcrZ1lSbXY5YlVVNFhscGhUYzZDODZKbWoxRkN3PT0iLCJhbXIiOlsicnNhIl0sImVtYWlsIjoiYWJlbGlAbWljcm9zb2Z0LmNvbSIsImZhbWlseV9uYW1lIjoiTGluY29sbiIsImdpdmVuX25hbWUiOiJBYmUiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaXBhZGRyIjoiMTMxLjEwNy4yMjIuMjIiLCJuYW1lIjoiYWJlbGkiLCJub25jZSI6IjEyMzUyMyIsIm9pZCI6IjA1ODMzYjZiLWFhMWQtNDJkNC05ZWMwLTFiMmJiOTE5NDQzOCIsInJoIjoiSSIsInN1YiI6IjVfSjlyU3NzOC1qdnRfSWN1NnVlUk5MOHhYYjhMRjRGc2dfS29vQzJSSlEiLCJ0aWQiOiJmYTE1ZDY5Mi1lOWM3LTQ0NjAtYTc0My0yOWYyOTU2ZmQ0MjkiLCJ1bmlxdWVfbmFtZSI6IkFiZUxpQG1pY3Jvc29mdC5jb20iLCJ1dGkiOiJMeGVfNDZHcVRrT3BHU2ZUbG40RUFBIiwidmVyIjoiMS4wIn0=.UJQrCA6qn2bXq57qzGX_-D3HcPHqBMOKDPx4su1yKRLNErVD8xkxJLNLVRdASHqEcpyDctbdHccu6DPpkq5f0ibcaQFhejQNcABidJCTz0Bb2AbdUCTqAzdt9pdgQvMBnVH1xk3SCM6d4BbT4BkLLj10ZLasX7vRknaSjE_C5DI7Fg4WrZPwOhII1dB0HEZ_qpNaYXEiy-o94UJ94zCr07GgrqMsfYQqFR7kn-mn68AjvLcgwSfZvyR_yIK75S_K37vC3QryQ7cNoafDe9upql_6pB2ybMVlgWPs_DmbJ8g0om-sPlwyn74Cc1tW3ze-Xptw_2uVdPgWyqfuWAfq6Q\u0026quot;  atlassian_api_token # Potential Atlassian API Token\nmy_jira_token=\u0026quot;xbE0Z4lPlrsxCsbQljSD7AFF\u0026quot;  atlassian_api_token_base64 # Potential Atlassian API Token (base64)\nmy_jira_token=\u0026quot;eGJFMFo0bFBscnN4Q3NiUWxqU0Q3QUZG\u0026quot;  dropbox_app_key_secret # Potential Dropbox App Key or App Secret\nDROPBOX_APP_KEY: \u0026quot;4fyyzx73aeeouuy\u0026quot;  dropbox_app_key_secret_base64 # Potential Dropbox App Key or App Secret (base64)\nDROPBOX_APP_KEY: \u0026quot;NGZ5eXp4NzNhZWVvdXV5\u0026quot;  dropbox_app_access_refresh_token # Potential Dropbox App Access Token\ndropbox_app_access_token: 'sTaeXjPl-kAAAAAAAAAAE4PSHCac-raR31ueSeFZUSHBJ5tlMGvyO8MeXRaRQOrU'  dropbox_app_access_refresh_token_base64 # Potential Dropbox App Access Token (base64)\ndropbox_app_access_token: 'c1RhZVhqUGwta0FBQUFBQUFBQUFFNFBTSENhYy1yYVIzMXVlU2VGWlVTSEJKNXRsTUd2eU84TWVYUmFSUU9yVQ=='  box_client_id_secret # Potential Box client id or client secret\nbox_client_id: \u0026quot;2zljm7yivjhfz9in4dkr566vk4xpje5y\u0026quot;  box_client_id_secret_base64 # Potential Box client id or client secret (base64)\nbox_client_id: \u0026quot;Mnpsam03eWl2amhmejlpbjRka3I1NjZ2azR4cGplNXkK\u0026quot;  box_refresh_token # Potential Box refresh token\nbox_refresh_token: \u0026quot;Q8j0kTwbhQXHO95FAKg5zTfKhDwGWOUQyRue8i7njJoqWAwdRKfAPw4oK6zF3dPv\u0026quot;  box_refresh_token_base64 # Potential Box refresh token (base64)\nbox_refresh_token: \u0026quot;UThqMGtUd2JoUVhITzk1RkFLZzV6VGZLaER3R1dPVVF5UnVlOGk3bmpKb3FXQXdkUktmQVB3NG9LNnpGM2RQdgo=\u0026quot;  discord_client_id # Potential Discord Client ID\nDiScORd: \u0026quot;618962312686075969\u0026quot;  discord_client_secret # Potential Discord Client Secret\ndisCORD_secret= \u0026quot;4cs2-cYx2KiKIRuOTKworwnM0_A4uJyy\u0026quot;  slack_legacy_token # Potential Slack Legacy Token\nxoxp-559859041733-629723654435-752364182007-9ead8994051da71a0774db965b16a60b\u0026quot;  slack_legacy_token_base64 # Potential Slack Legacy Token (base64)\neG94cC01NTk4NTkwNDE3MzMtNjI5NzIzNjU0NDM1LTc1MjM2NDE4MjAwNy05ZWFkODk5NDA1MWRhNzFhMDc3NGRiOTY1YjE2YTYwYg==  slack_app_client_id # Potential Slack App Client ID\nslack_client_id='559859041733.752727218102'  slack_app_client_secret # slack_app_signing_secret # Potential Slack App Client Secret or Slack App Signing Secret\nslack_secret=\u0026quot;004c7fb45aeb0b795890128d763877ec\u0026quot;  slack_app_verification_token # Potential Slack App Verification Token\nslack_token: \u0026quot;Bk1D7BxSbGRttZYpyngNZBSR\u0026quot;  slack_app_verification_token_base64 # Potential Slack App Verification Token (base64)\nslack_token: \u0026quot;QmsxRDdCeFNiR1J0dFpZcHluZ05aQlNS\u0026quot;  slack_bot_user_token # Potential Slack Bot User Token\nslack_token: \u0026quot;xoxb-559859041733-629723654435-752364182007-9ead8994051da71a0774db965b16a60b\u0026quot;  slack_bot_user_token_base64 # Potential Slack Bot User Token (base64)\neG94Yi01NTk4NTkwNDE3MzMtNjI5NzIzNjU0NDM1LTc1MjM2NDE4MjAwNy05ZWFkODk5NDA1MWRhNzFhMDc3NGRiOTY1YjE2YTYwYg==  slack_workspace_token # Potential Slack Workspace Token\nslack_token: \u0026quot;xoxa-259859041733-629723654435-752364182007-9ead8994051da71a0774db965b16a60b\u0026quot;  slack_workspace_token_base64 # Potential Slack Workspace Token (base64)\neG94YS0yNTk4NTkwNDE3MzMtNjI5NzIzNjU0NDM1LTc1MjM2NDE4MjAwNy05ZWFkODk5NDA1MWRhNzFhMDc3NGRiOTY1YjE2YTYwYg==  slack_webhook # Potential Slack Webhook\nhttps://hooks.slack.com/services/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  stripe_test_secret_key # Potential Stripe Test Secret Key\nsk_test_MfRuaFA9sgl5e1AUYzjwiNNt00UG6t6fvY  stripe_test_secret_key_base64 # Potential Stripe Test Secret Key (base64)\nc2tfdGVzdF80ZUMzOUhxTHlqV0Rhcmp0VDF6ZHA3ZGM=  stripe_live_secret_key # Potential Stripe live secret key\nsk_live_MfRuaFA9sgl5e1AUYzjwiNNt00UG6t6fvY  stripe_live_secret_key_base64 # Potential Stripe live secret key (base64)\nc2tfbGl2ZV9NZlJ1YUZBOXNnbDVlMUFVWXpqd2lOTnQwMFVHNnQ2ZnZZ  stripe_test_restricted_key # Potential Stripe Test Restricted Key\nrk_test_Zu9Vz12eIYFNdGoFKe8aYiQn00gcclUvS0  stripe_test_restricted_key_base64 # Potential Stripe Test Restricted Key (base64)\ncmtfdGVzdF9adTlWejEyZUlZRk5kR29GS2U4YVlpUW4wMGdjY2xVdlMw  stripe_live_restricted_key # Potential Stripe live restricted key\nrk_live_Zu9Vz12eIYFNdGoFKe8aYiQn00gcclUvS0  stripe_live_restricted_key_base64 # Potential Stripe live restricted key (base64)\ncmtfbGl2ZV9adTlWejEyZUlZRk5kR29GS2U4YVlpUW4wMGdjY2xVdlMw  mailgun_private_api_key # Potential Mailgun Private API Key\n\u0026quot;mailgUn_key\u0026quot;: 'key-b11b487224a7c184fed93795bf01adc9'  mailgun_private_api_key_base64 # Potential Mailgun Private API Key (base64)\n\u0026quot;mailgUn_key\u0026quot;: 'a2V5LWIxMWI0ODcyMjRhN2MxODRmZWQ5Mzc5NWJmMDFhZGM5'  mailgun_public_validation_key # Potential Mailgun Public Validation Key\npubkey-14b4474da0d0a6551a9c711ee11aa996  mailgun_public_validation_key_base64 # Potential Mailgun Public Validation Key (base64)\ncHVia2V5LTE0YjQ0NzRkYTBkMGE2NTUxYTljNzExZWUxMWFhOTk2  mailgun_webhook_signing_key # Potential Mailgun Webhook Signing Key\nmailgun_key='15304a8a0558637d8187630ddf11df1a'  mailgun_webhook_signing_key_base64 # Potential Mailgun Webhook Signing Key (base64)\nmailgun_key='MTUzMDRhOGEwNTU4NjM3ZDgxODc2MzBkZGYxMWRmMWE='  sendgrid_api_key # Potential Sendgrid API Key\n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  sendgrid_api_key_base64 # Potential Sendgrid API Key (base64)\nU0cucFcyWFhnNi1UY2E4YkNCVEMwRWlZUS5ZNXBDOFNqZmJ3WWxNTURSaVQ5TTZxN0VmOWIzX0RDSGtQNS0zaXNYM3dN  twilio_auth_token # twilio_api_key # Potential Twilio Auth Token or API Key\ntwilio_token=\u0026quot;692e03bfddd09d85946e1319dd5e7c61\u0026quot;  twilio_auth_token_base64 # Potential Twilio Auth Token or API Key (base64)\ntwilio_token=\u0026quot;NjkyZTAzYmZkZGQwOWQ4NTk0NmUxMzE5ZGQ1ZTdjNjE=\u0026quot;  npm_access_token # Potential NPM Access Token\n\u0026quot;npm : `f74fb6c7-15d7-46e7-85b4-02ca4988bd3c`\u0026quot;  npm_access_token_base64 # Potential NPM Access Token (base64)\n`npm : `Zjc0ZmI2YzctMTVkNy00NmU3LTg1YjQtMDJjYTQ5ODhiZDNj``  npmrc_auth # Potential .npmrc Auth\n_auth = YWRtaW46YWRtaW4=  npmrc_auth_token # Potential .npmrc Auth token\n_authToken=26dfe8d8-889b-4380-92ff-9c3c6ea5d930  pulumi_access_token # Potential Pulumi Access Token\npul-b521eabebc4b312eb2335beb7a911f9eb7f078c2  pulumi_access_token_base64 # Potential Pulumi Access Token (base64)\ncHVsLWI1MjFlYWJlYmM0YjMxMmViMjMzNWJlYjdhOTExZjllYjdmMDc4YzI=  alibaba_access_key_secret # Potential Alibaba Cloud Access Key Secret\nalibaba_access_key ='3ihvGlklDPSXr22dnunrHTpZO4aKmS'  alibaba_access_key_secret_base64 # Potential Alibaba Cloud Access Key Secret (base64)\nalibaba_access_key ='M2lodkdsa2xEUFNYcjIyZG51bnJIVHBaTzRhS21T'  codeship_aes_key # Potential Cloudbees Codeship AES Key Secret\n\u0026quot;codeship_token='/BaC5gedAC8hACwe5tZje+YVdOCTUxH+b+zkgKSKTkA='\u0026quot;  postman_api_key # Potential Postman API Key\n\u0026quot;postman-api-key='PMAK-5e1c6889073b8400310886e0-40895969cc5bb51944fce153e94c33f3b9'\u0026quot;  postman_api_key_base64 # Potential Postman API Key (base64)\npostman-api-key='UE1BSy01ZTFjNjg4OTA3M2I4NDAwMzEwODg2ZTAtNDA4OTU5NjljYzViYjUxOTQ0ZmNlMTUzZTk0YzMzZjNiOQ=='  terraform_access_token # Potential Terraform Access Token\n\u0026quot;QnbSxjjhVMHJgw.atlasv1.gxZnWIjI5j752DGqdwEUVLOFf0mtyaQ00H9bA1j90qWb254lEkQyOdfqqcq9zZL7Sm0\u0026quot;  gocardless_access_token # Potential Gocardless Cloud Access Token\ngocardless_access_token = 'live_TKWImhFpoTRpzOIbpRhDS3-ezGa--nt4O9KU1Hd1'  gocardless_access_token_base64 # Potential Gocardless Cloud Access Token (base64)\ngoCardLessToken = bGl2ZV9US1dJbWhGcG9UUnB6T0licFJoRFMzLWV6R2EtLW50NE85S1UxSGQx  password_in_xml # Potential password in XML\n\u0026amp;lt;PaSswOrd\u0026amp;gt;UnitTest1234!\u0026amp;lt;/PaSswOrd\u0026amp;gt;  secret_in_xml # Potential secret in XML\n\u0026amp;lt;Token\u0026amp;gt;0123456789abcdef\u0026amp;lt;/Token\u0026amp;gt;  password_function # Potential password in function\nsetPassword(\u0026quot;$uperStrong1\u0026quot;);  secret_function # Potential secret in function\nsetApiKey ( 'api_key' )  password_in_url # Potential password in URL\nhttps://user:password@github.com/blubracket/rocks  password_in_url_params # Potential password in params\nhttps://user:password@github.com/blubracket/rocks?passwd=1234  secret_in_url_params # Potential secret in params\nhttps://github.com/blubracket/rocks?secret=1234  private_key # Potential Private Key\n-----BEGIN RSA PRIVATE KEY-----\\nProc-Type: 4,ENCRYPTED\\nDEK-Info: DES-EDE3-L1D9CN2WmfoLeIBBJdQ2YngfSz……..\u0026lt;/p\u0026gt;\u0026lt;p\u0026gt;==\\n-----END RSA PRIVATE KEY-----  pgp_private_key # Potential PGP Private Key\n-----BEGIN PGP PRIVATE KEY BLOCK-----  blubracket_api_key # Potential BluBracket API key\napi_key=\u0026quot;BLU-72de3a5f-b1ff-5a7f-a5ae-1a9cf5a98b27\u0026quot;  blubracket_api_key_base64 # Potential BluBracket API key (base64)\napi_key=\u0026quot;QkxVLTcyZGUzYTVmLWIxZmYtNWE3Zi1hNWFlLTFhOWNmNWE5OGIyNw==\u0026quot;  basic_auth_header # Potential Basic Auth Header\nsh \u0026quot;set -e | curl -i -H 'Authorization: Basic QWxhZGRpbjpPcGVuU2VzYW1l' -T BackEnd/build/libs/example_api-0.1.0.jar  jwt_token # Potential Generic JWT token\njwt_access_token = \u0026quot;eyJhbGciOiJSUzI1NiIsImlzc3VlciI6InVybjpibHUiLCJyb2xlIjozLCJzZXJ2aWNlX2tleV9wYXRoIjoiL2FwaS9hbmFseXplci9wdWJsaWNfa2V5IiwidHlwIjoiSldUIn0.eyJleHAiOjE2MDUzMTI0MTksImlhdCI6MTYwNTMxMjM1OSwiaWQiOiJ0b2tlbl9pZCIsIm5idCI6MTYwNTMxMjM1OX0.l-MjVG33Ca76gtuiFLI-_AasHEsoMA3WcC36YvW0IHyQp-160z2Idc-sMdaJD8AwMsFto45vqnusDFkS1UYO7mZhU6sufv6pIMH86Ll7NwYvPzirqkWys40pvoXZdxxb3X5IBFTB8p9EuvLGOPUPFbEkA_if5jmExXjKUY98q0s\u0026quot;  "
      })
      .add(
      {
        id: 24,
        href: "/faq/what-sensitive-words-does-you-search-for/",
        title: "What non-inclusive language does the BluBracket search for?",
        description: "It has become increasingly important lately to make sure specific sensitive words are not included in code or documentation. These would be words like: master, slave, dummy, blacklist, etc. Just as with secrets, the BluBracket code scanner and CLI tool automatically search for these sensitive words and notifies the developer before they are committed to repositories.\nExample non-inclusive language includes the following words:\n master slave whitelist blacklist whitebox blackbox whitehat blackhat  Let us know if there are any others that you or your company think should be added to the list.",
        content: "It has become increasingly important lately to make sure specific sensitive words are not included in code or documentation. These would be words like: master, slave, dummy, blacklist, etc. Just as with secrets, the BluBracket code scanner and CLI tool automatically search for these sensitive words and notifies the developer before they are committed to repositories.\nExample non-inclusive language includes the following words:\n master slave whitelist blacklist whitebox blackbox whitehat blackhat  Let us know if there are any others that you or your company think should be added to the list. You can always add your own via the regex configuration as well.\n"
      })
      .add(
      {
        id: 25,
        href: "/faq/cli-supported-platforms/",
        title: "What platforms are supported by the BluBracket CLI tool?",
        description: "The BluBracket CLI tool is supported on the following platforms:\n Mac OSX 10.12 and later Linux  Alpine 5 and later Ubuntu 16.04 and later CentOS 7 and later   Windows 10  ",
        content: "The BluBracket CLI tool is supported on the following platforms:\n Mac OSX 10.12 and later Linux  Alpine 5 and later Ubuntu 16.04 and later CentOS 7 and later   Windows 10  "
      })
      .add(
      {
        id: 26,
        href: "/faq/what-repositories-can-i-monitor/",
        title: "What repositories can I monitor?",
        description: "BluBracket can monitor any repositories on a supported code server that you have access to. Fully supported code servers include cloud and enterprise versions of:\n GitHub GitLab Bitbucket  Support for additional code servers is in development, and may be available in private beta.\nOn GitHub, for example, you can monitor repos in your personal GitHub org as well as company/group orgs where you have permission to add apps.",
        content: "BluBracket can monitor any repositories on a supported code server that you have access to. Fully supported code servers include cloud and enterprise versions of:\n GitHub GitLab Bitbucket  Support for additional code servers is in development, and may be available in private beta.\nOn GitHub, for example, you can monitor repos in your personal GitHub org as well as company/group orgs where you have permission to add apps.\n"
      })
      .add(
      {
        id: 27,
        href: "/faq/why-should-i-use-blubracket-discover-secrets/",
        title: "Why should I use the BluBracket to discover secrets in code when there are so many other tools available?",
        description: "Best in class secret detection # Testing demonstrates that BluBracket can identify more tokens, keys and IDs than the other tools. Additionally, it supports user-defined custom patterns so you can match whatever is important to you.\nFewest false positives # Expansive detection is critical to ensuring secrets are found, but BluBracket’s rules engine also actively eliminates potential false positives allowing developers to focus on the most important findings.\nComprehensive threat detection # In addition to secrets, BluBracket scans for the following risks in code:",
        content: "Best in class secret detection # Testing demonstrates that BluBracket can identify more tokens, keys and IDs than the other tools. Additionally, it supports user-defined custom patterns so you can match whatever is important to you.\nFewest false positives # Expansive detection is critical to ensuring secrets are found, but BluBracket’s rules engine also actively eliminates potential false positives allowing developers to focus on the most important findings.\nComprehensive threat detection # In addition to secrets, BluBracket scans for the following risks in code:\n Personally identifiable information (PII) Non-inclusive language (NIL) Infrastructure as code (IaC) best practices  Additionally, BluBracket monitors who and what has access to your code, and where your code is going.\nComplete workflow # Detection is easy, but building workflows and tools that help prevent risks from getting into code, and support continuous improvement through risk scoring, filtering, and reporting is what makes BluBracket an indispensable part of modern development practices.\n"
      })
      .add(
      {
        id: 28,
        href: "/how-to/cli/installation/",
        title: "CLI tool installation",
        description: "Instructions to install the CLI tool for Windows, macOS, and Linux",
        content: "Windows Installation | macOS Installation | Linux Installation | Try out the BluBracket CLI commit hook\nInstalling the BluBracket CLI Tool is simple! Download the tool from the BluBracket portal:\n  Login to your BluBracket portal\n  Select Settings from left pane menu\n  Select Code Scanning\n  Download the CLI OS version of your choice (Mac, Windows, Linux)\n    Windows Installation #   Extract the files into any directory that is available in PATH.\n  For example, into the git installation folder, \u0026ldquo;C:\\Program Files\\Git\\cmd\u0026rdquo;\n  Verify the installation\n C:\\Users\\vbuzu\u0026gt;blubracket --version blubracket 2021-01-14-42f4dfe2c2abef161ee5066b0b774b41832c7c51    Setting up git hooks for Windows #   In your terminal, cd to your repository directory, then run blubracket install-git-hooks\nC:\\Users\\vbuzu\\projects\\sandbox\u0026gt;blubracket install-git-hooks Successfully installed pre-commit hook to \u0026lsquo;C:/Users/vbuzu/projects/sandbox/.git/hooks/pre-commit\u0026rsquo;\n  If git is setup to use global git hooks (specified by core.hooksPath git config), CLI will update/install the hook in that global folder.\n  Currently BluBracket CLI will set only one hook, pre-commit.\n  macOS Installation #   The macOS .pkg will automatically install the app into the /Applications/BluBracket folder (or the ~/Applications/BluBracket folder if you selected install for me only).\n  Open a terminal and add the BluBracket path to your bash profile:\n If you selected Install for all users of this computer:  echo 'export PATH=\u0026quot;/Applications/blubracket:$PATH\u0026quot;' \u0026gt;\u0026gt;~/.bash_profile source ~/.bash_profile\n Alternatively, if you selected Install for me only:  echo 'export PATH=\u0026quot;~/Applications/blubracket:$PATH\u0026quot;' \u0026gt;\u0026gt;~/.bash_profile; source ~/.bash_profile\n  If your IDE is open you may need to restart it in order to pick up the new bash profile changes.\n  Verify the installation\n% blubracket --version blubracket 2021-01-14-42f4dfe2c2abef161ee5066b0b774b41832c7c51\n  Note: If blubracket is not found when attempting to run blubracket \u0026ndash;version, you may also need to perform the following\n  Create a file named blubracket in /etc/paths.d. The file content should be /Applications/BluBracket\n  Example:\n Open the terminal and cd to your desktop Type: echo “Applications/BluBracket” \u0026gt; blubracket Open Finder and move the blubracket file from your desktop into /etc/paths.d  etc is a hidden folder, so you may need to select Command+Shit+. to show hidden folders and files   Restart your terminal or application for changes to take effect.      Setting up git hooks on macOS #   In your terminal, cd to your repository directory, then run blubracket install-git-hooks\n  % blubracket install-git-hooks Successfully installed pre-commit hook to '/Users/vbuzu/sandbox/.git/hooks/pre-commit'\n  NOTE:\n  If git is setup to use global git hooks (specified by core.hooksPath git config), BluBracketCLI will update/install the hook in that global folder.\n  Currently BluBracket CLI will set only one hook, pre-commit.\n    Linux Installation #   Extract the file into any directory that is available in PATH.\n  Please follow instructions from step 2 onwards in macOS section above.\n  Try out the BluBracket CLI commit hook #   In your terminal, cd to your repository directory\n  Then add the following example secret into any file in your repository: myPassword=\u0026quot;My$uperDuperS3cret!\u0026quot;\n  Now try to commit your change with git commit - your new BluBracket CLI hook should prevent the commit from happening.\n  "
      })
      .add(
      {
        id: 29,
        href: "/how-to/cli/using-cli/",
        title: "Using the CLI tool",
        description: "Installation # How do I Install the BluBracket Command Line Interface (CLI) Tool?\nSetting Git Hooks # In terminal, cd to the repo dir, then blubracket install-git-hooks\nC:\\Users\\vbuzu\\projects\\sandbox\u0026gt;blubracket install-git-hooks Successfully installed pre-commit hook to 'C:/Users/vbuzu/projects/sandbox/.git/hooks/pre-commit'  If git is setup to use global git hooks (specified by core.hooksPath git config), CLI will update/install the hook in that global folder.\nCurrently CLI will set only one hook, pre-commit.\nCurrent Limitations # CLI will install the pre-commit hook automatically only if the hook does not exist yet or the hook does exist and is implemented as a shell script (determined by the presence of #!",
        content: "Installation # How do I Install the BluBracket Command Line Interface (CLI) Tool?\nSetting Git Hooks # In terminal, cd to the repo dir, then blubracket install-git-hooks\nC:\\Users\\vbuzu\\projects\\sandbox\u0026gt;blubracket install-git-hooks Successfully installed pre-commit hook to 'C:/Users/vbuzu/projects/sandbox/.git/hooks/pre-commit'  If git is setup to use global git hooks (specified by core.hooksPath git config), CLI will update/install the hook in that global folder.\nCurrently CLI will set only one hook, pre-commit.\nCurrent Limitations # CLI will install the pre-commit hook automatically only if the hook does not exist yet or the hook does exist and is implemented as a shell script (determined by the presence of #!/bin/sh or #!/usr/bin/env bash lines). In all other cases, e.g. if the hook is a python script, the CLI invocation must be added to the hook manually. It should be an equivalent of the follow shell command blubracket pre-commit \u0026quot;$@\u0026quot; || { exit \u0026quot;$?\u0026quot;; }: run blubracket command with pre-commit as the first parameter followed by all other parameters passed to the hook itself; exit/stop the hook on any non-zero exit codes from blubracket.\nPre-commit.com Integration # The CLI tool integrates with the https://pre-commit.com hook management tool now. If it is detected that the pre-commit tool is used to manager the hooks, the CLI will add itself as one of the hooks to .pre-commit-config.yaml.\nNote: Currently only the default configuration file is supported, if pre-commit tool is configured to use a different file, CLI will NOT add itself to it automatically. In that case, it can be done manually by adding following lines under repos key:\n- repo: local hooks: - id: blubracket name: BluBracket language: system entry: blubracket pre-commit stages: - commit verbose: true always_run: true pass_filenames: false  Secrets # Use your normal git workflow, edit and stage some files, then try to commit. If the changes have secrets, the commit will be blocked. For example:\nC:\\Users\\vbuzu\\projects\\sandbox\u0026gt;git commit -m \u0026quot;test commit\u0026quot; -a Blubracket found 4 secret(s) C:\\Users\\vbuzu\\projects\\sandbox\\src\\app.cpp:7:11: password_assignment C:\\Users\\vbuzu\\projects\\sandbox\\tests\\dir2\\tests\\file1.txt:11:16: bitbucket_oauth_key_base64 C:\\Users\\vbuzu\\projects\\sandbox\\tests\\dir2\\tests\\file1.txt:12:11: password_assignment C:\\Users\\vbuzu\\projects\\sandbox\\tests\\dir2\\tests\\file1.txt:13:14: password_in_url  .blubracket-ignore # Sometimes it might be necessary to ignore secrets in some files or secrets of some types. To achieve this just create a .blubracket-ignore file in the root directory of the repo. The format of the file is similar to .gitignore. Empty lines and lines started with # are ignored. To ignore all secrets in a file, put a glob pattern, e.g. **/tests will ignore secrets found in all files in any tests directory and sub-directories. To ignore specific a secret type, e.g. any password like secrets, add a line like secret_type:password.*, where password.* is perl compatible regular expression. To ignore specific secret, add a line like secret_value:my_test_gcp_token where my_test_gcp_token is the real secret/token you want to ignore.\n**/tests/** secret_type:password.* secret_value:my_test_gcp_token  Current Limitations: #   negate mask (!) is not supported\n  .blubraket-ignore is read only from the root repo directory, placing it in a sub directory will have no effect.\n  Inline Comments # In addition to .blubracket-ignore file, it is possible to mark a secret to be ignored by placing a “comment” on the same line as the secret. The comment/line has to have BluBracketIgnore string in it, please note that CLI will do case-sensitive comparison.\nPossible workarounds for false positives # Ignoring whole folders and/or secret type all the time could be dangerous as it can be easy to miss secrets. The recommended ways to deal with false positives are inline comments or ignoring the particular secret using secret_value rule in the .blubracket-ignore file.\nAdding Checks for your Own Secrets # Out of the box BluBracket does support around 50 different secret types. If you want to check other secret types, it is easy. In a repo/clone folder create a file .blubracket/customregex.yml (if you want new secret checks be applicable for any repo, create the file in $HOME folder instead). The content of the file is a list of secrets to check. Each secret is defined by two properties: description and pattern. Description is textual name for the secret that will be displayed by CLI if the secret is detected. Pattern is a regex to match the secret. Here is an example of how to a check for SSNs:\n- pattern: (?P\u0026lt;value\u0026gt;\\d{3}-\\d{2}-\\d{4}) description: simple_ssn  PII Secrets # In addition to built-in secrets and custom secrets, CLI does support the ability to define a different group of “secrets” related to PII (Personally Identifiable Information) such as Social Security Numbers (SSN), emails, URLs, IP-addresses, etc. This feature is fully customizable. Out of the box CLI defines several patterns but all can be disabled, or the corresponded action changed. Here is the default configuration file:\ndefaults: action: allow disabled: false patterns: - type: ssn description: Social Security Number pattern: \\b(?P\u0026lt;ssn1\u0026gt;\\d{3})-(?P\u0026lt;ssn2\u0026gt;\\d{2})-(?P\u0026lt;ssn3\u0026gt;\\d{4})\\b exclude_if: | /000|666|9../.test(ssn1) || ssn2 == \u0026quot;00\u0026quot; || ssn3 == \u0026quot;0000\u0026quot; action: block - type: email pattern: \\b(?P\u0026lt;username\u0026gt;[a-z0-9!#'+^_~-]+(?:\\.[a-z0-9!#'+^_~-]+)*)@(?P\u0026lt;domain\u0026gt;[a-zA-Z0-9-.]+)\\b # exclude_if can be any valid JavaScript expression returns boolean value # it is not limited to a single expression, it can be even a full fledged function. # all matched groups defined in 'pattern' regex will be available as variables in the global execution context # the full matched value will be available as 'full_match' variable # Here is an example that uses a function: it will report only @github.com emails #exclude_if: | # (function(){ # if (domain.toLowerCase() != \u0026quot;github.com\u0026quot;) return true; # return false; # })() disabled: true - type: url description: URL pattern: \\b(?:(?P\u0026lt;scheme\u0026gt;[a-zA-Z][a-zA-Z\\d+-.]*):)(?:\\/\\/)?(?:(?P\u0026lt;userinfo\u0026gt;(?:[a-zA-Z\\d\\-._~\\!$\u0026amp;'()*+,;=%]*)(?::(?:[a-zA-Z\\d\\-._~\\!$\u0026amp;'()*+,;=:%]*))?)@)?(?P\u0026lt;host\u0026gt;[a-zA-Z\\d\\-.%]+)\\b disabled: true - type: ip_v4 description: IPv4 pattern: \\b((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b - type: ip_v6 description: IPv6 pattern: (([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))  Configuration file can be global, for all the repos, it is located in ~/.blubracket/pii.yaml, or local, in repo’s .blubracket/pii.yaml file. If repo-local file exists, it will be used, otherwise the global file will be used. Upon launch, CLI with create the global file if it does not exist yet. After file has been created, it is OK to fully change it, CLI will not touch it anymore.\nSensitive Words # In addition to checking secrets, CLI can check for sensitive/offensive words that might be good idea to avoid. Examples includes master, slave, etc. By default CLI only warns if a sensitive word has been found but allows commit to proceed. Sensitive Words can be configured in the similar way as PII Secrets. The configuration file name is ~/.blubracket/sensitive-words.yaml (or a repo-local alternative). Here is the default file:\ndefaults: action: block disabled: false patterns: - type: master description: master pattern: \\b(?i)(master(\\w)*)\\b - type: slave description: slave pattern: \\b(?i)(slave)\\b - type: whitelist description: whitelist pattern: \\b(?i)(whitelist(ed|ing){0,1})\\b - type: blacklist description: blacklist pattern: \\b(?i)(blacklist(ed|ing){0,1})\\b - type: whitebox description: whitebox pattern: \\b(?i)(whitebox)\\b - type: blackbox description: blackbox pattern: \\b(?i)(blackbox)\\b - type: whitehat description: whitehat pattern: \\b(?i)(whitehat)\\b - type: blackhat description: blackhat pattern: \\b(?i)(blackhat)\\b - type: man_hours description: man-hours pattern: \\b(?i)(man[ -]hours{0,1})\\b - type: man_days description: man-days pattern: \\b(?i)(man[ -]days{0,1})\\b  Example output:\nC:\\Users\\vbuzu\\projects\\sandbox\u0026gt;git commit -m \u0026quot;test\u0026quot; -a BluBracket blocked 1 secret(s): C:\\Users\\vbuzu\\projects\\sandbox\\test2:8:27: custom_regex: simple SSN: BluBracket allowed 1 sensitive word(s): C:\\Users\\vbuzu\\projects\\sandbox\\test2:8:4: Master: config: sensitive_keywords.action: allow  Commit Signing # BluBracket can check that the commit is going to be signed or not and warn or block in case the commit is not signed. By default BluBracket only warns if commit is not signed.\nNote: Blubracket only checks git config commit.gpgSign value and not -Soption passed to git commit command to determine signing status. The reason is that commit signing makes sense if all the commits are signed. Thus using commit.gpgSign is the most proper way to enable signing\nExample Output:\nC:\\Users\\vbuzu\\projects\\sandbox\u0026gt;git commit -m \u0026quot;test\u0026quot; -a BluBracket allowed unsigned commit Use `blubracket commit-signing configure` to enable commit signing [master 94ca89a] test 1 file changed, 2 insertions(+), 1 deletion(-)  Configure Commit Signing # In addition to checking is commit signed or not, BluBracket helps configuring signing if it is not done already. To do that use blubracket commit-signing configure command. This should be run inside a clone directory as it will configure the signing only for the one current repo/clone. To configure signing globally, for all the current and future clones, add --global flag. Internally CLI will create a gpg key if needed, will configure git to use it, and will point how to upload the key’s public key to git providers, like GitHub and GitLab.\nNotes:\n  CLI checks and configures gpg keys only, not S-MIME/X509\n  CLI will try to use gpg command already available on the user’s device. If gpg is not found:\n  on Linux, CLI will do nothing, as gpg actually expected to be installed by default\n  on Windows, CLI will use gpg from a git for Windows distribution, if available. CLI will NOT install gpg4Win\n on Mac/OSX, CLI will install gnupg2 using brew. CLI will NOT install brew itself. Along side with gnupg2, CLI will install and configure pinentry-mac, so key management can be integrated with OSX keychain and commit signing works not only from terminal but from IDEs as well.      If a key needs to be generated, it is generated with default parameters (same as gpg \u0026ndash;quick-gen-key command). Currently there is no way to customize this.\n  Example output:\nC:\\Users\\vbuzu\\projects\\test-repo\u0026gt;blubracket commit-signing configure Finding gpg... found: C:\\Program Files\\Git\\usr\\bin\\gpg.exe Checking gpg key for user-id 'John Doe \u0026lt;john@acme.com\u0026gt;' ...About to create a key for: \u0026quot;John Doe \u0026lt;john@acme.com\u0026gt;\u0026quot; Continue? (Y/n) We need to generate a lot of random bytes. It is a good idea to perform some other action (type on the keyboard, move the mouse, utilize the disks) during the prime generation; this gives the random number generator a better chance to gain enough entropy. We need to generate a lot of random bytes. It is a good idea to perform some other action (type on the keyboard, move the mouse, utilize the disks) during the prime generation; this gives the random number generator a better chance to gain enough entropy. gpg: key 25ADA7C6E06D60A0 marked as ultimately trusted gpg: revocation certificate stored as '/c/Users/vbuzu/.gnupg/openpgp-revocs.d/AF06E23594DC979D3AC56B5625ADA7C6E06D60A0.rev' public and secret key created and signed. pub rsa3072 2021-03-10 [SC] [expires: 2023-03-10] AF06E23594DC979D3AC56B5625ADA7C6E06D60A0 uid John Doe \u0026lt;john@acme.com\u0026gt; sub rsa3072 2021-03-10 [E] Configuring git to use commit signing...done Getting public key for gpg key '25ADA7C6E06D60A0' ...done -----BEGIN PGP PUBLIC KEY BLOCK----- mQGNBGBJJmUBDACiyaGZTTAN+fizZQ8h4t9kie1iM6nLzNxCPtvh2pk9IQUkDbK9 PZHpsGIGpZRZwW+IZktWVINMJpuFeakxO7zOk7JdHsqC1wduSTIvBkYxc/VkUk3V 5P2kupj4lCj3IernvlJ1RY25MbUaErMTyEm5HAHaQPWlfAJReh8C2GWc1m68DWF0 lcZuOFCPg/fD5IbV6tLllS7OKcg0On+tRakiIunIzlVyfUBzmrVV13ZBkBc+oJWx EAIMCOMWkXR0rEeqaWqxOXoKpC1iSlXzlXTdko6r3Z9dEUu5P7xHc63/4GVhmDLf B72jJMnmJqh7zQAlQvmZ56H6qeDSK41W9KLFazAXI3MQ5WsWdBcErNS9/HaD1oPu ZChpdWLljd/UFB6ES7podqDPa5v8ttIL5QPIUTRgjGNTZE4wG2YVojC1r5DcVUm3 9Up5RMOkUzhUW/u7bLa0OI/KxR2tZkLtuuCeaWx4LMOqLbJ3oU6VRVm8IaZM3q2x +AFh/uRMeIilRyUAEQEAAbQYSm9obiBEb2UgPGpvaG5AYWNtZS5jb20+iQHUBBMB CAA+FiEErwbiNZTcl506xWtWJa2nxuBtYKAFAmBJJmUCGwMFCQPCZwAFCwkIBwIG FQoJCAsCBBYCAwECHgECF4AACgkQJa2nxuBtYKDfOAv/TxXbc3BAZsrm652VwAlw YcJgQX5ByjZ3lsJ2nTVMtqpF1yPiz8MxammmHJRJ3indCWnXDDdxY4N2CS0I+HSb aJp6rUxlEkvPg8rtDIJSGjb/qkfSMLJqE9t86e1LFYMpvDhtei/dhHibN/UFkLer MJOVO40jvoPeaMlmgY4JlWqLtuv0rzq4FMRZQ7mqrvwk9E8LYL6UoFbp0merOe4K cRW6kAe8YvEOj9pZUbwzLTv/HNq7poR7G5gpUz7mgNf7wScG+QV4JsX+5Z7Px40/ fGjkHf1uz8pF/xbTPeu4jh54nwDBWkb2VxteyIwGNNCxP4BAFXtmMlZ5NToISixC kDrNQDeWSQdy3xbLFUxQMORqZXWlcJVyOO8bhbgIFswzcRhhqP3T6qUi5+yvKqxF T52bY5MJVGxiKQ85veYoPPDdyGl73h9jX2A3+E2/GMAYanYuSo8AIbglYbsffqmm fy/5tRJWcUgPBiulo6LJCZSxMF6OmJ/hRBtpVisKT2/vuQGNBGBJJmUBDADbaErL iaoTWQUIDaMxWxrmhFl5pHX1KX1NdYgScv3hswjV8YRpofA92z4GrC9TXB6/rhJ4 a3s57nY3XgKOwkq68PmtK4ueOqmHxz/paAFpA33EPmr636zOMWJqcj00HWr0LXzX CZ6gWjMYtpGhlSXMKSzUeO9bOsiW3F+0joFbnbxsfvXKhx8Ta8BvjrUkCU5LZvID pctWpKbHQ8j+7t5qwDNZ0cROpn54jJGykoWmCtayS+1oUOy0BXZ5fdktyhurrmzv eFKucf3ZOfQJtyTomACFCwUIKzqs2n9tK3Pz4WEVGJO5zlRsZdEik13HowiQWPNi niUr/ulSiBKIc71IhbJCawp/0bS+QkK08PQKxOR4l1Vhctr48GWySzqNsSO8Be9e wDuUo7kGkSXrbwr7ZPSQv4HG/RFjMd9gp0gH8dcbskTm1gCW43O4b+fmcRqYuyCK YuwDAVz2l5LSsxiN00MF5+LHPfX5ZZfbRjm/HM/PZtRVhYQiyBHHwLZtHiMAEQEA AYkBtgQYAQgAIBYhBK8G4jWU3JedOsVrViWtp8bgbWCgBQJgSSZlAhsMAAoJECWt p8bgbWCg4NIMAIVGvgOVlxF7FMZjVqfZnNqZDj2HXduyvjsadoKzDdPiulsAVYMx 5MAKrE4vrr0+/V10irSLZzUSHyt/r2A5E8xo6jqpxWN2Cipm6lUcOKQItTsyBYt2 EoZxiTvMx+aRhrnT376lysRaAyHaqsf4QOWv+CQV0gOS56p3Su3FQPObe84IzjMI 6PRYQCvGsofRLTuoOFcTj1mSPKwrQhZg0d2XpRmCfLJg19V1rQSMU+z7YhlR5bua qvnuJzqIHd2+2GZB/75cpxN4rtVrac2WM2FYmC5TW7LXVybwpJ451Z77UAhe5gGg nvtdNpxrHfyq21LB1YJrod/wTvNSjDxseX+7Xcq0FzunvGImV5rVq0Cx4t3cmG78 4FhDDwjXcWE8QOdPWJpdATiE+40g/zWAxY6kHTrJTg5q9rVwSCrGFW6NB6apVkNs 3qKT4Ko1WpCfIukP13vsVx7SpxbAIzOl8GrKprAcTMBxoXtL33F9P90Q0FrmOZ27 3OYqf//nWVG3qA== =ulRA -----END PGP PUBLIC KEY BLOCK----- Public Key has been copied to system clipboard. Next, add it to your git provider: For GitHub: navigate to https://github.com/settings/keys For GitLab: navigate to https://gitlab.com/-/profile/gpg_keys  Binary Files # The CLI can check that a “large” binary file is going to be committed and either ignore, warn, or block the commit depending on the file size. By default binary files less than 500 KB will be ignored; if more than 500 KB but less than 10 MB, CLI will warn but allow the commit; if more than 10 MB then the commit will be blocked. To disable only warning or blocking the size can be set to 0 (see configuration options below).\nSample output:\nC:\\Users\\vbuzu\\projects\\test-repo\u0026gt;git commit -m \u0026quot;test\u0026quot; BluBracket blocked 1 binary file Blocked binary files: C:\\Users\\vbuzu\\projects\\test-repo\\bluscanner.exe: 81.2 MB Consider using git-lfs to manage large binary files, https://git-lfs.github.com/  CLI Configuration # By default CLI blocks secrets and allows sensitive words. It is possible to customize this behavior using config files. CLI loads config files from \u0026lt;repo\u0026gt;/.blubracket/config.yaml and ~/.blubracket/config.yaml. CLI mimics git config behavior where settings in a repo-local config overwrite settings in global config. Here is an example of the config file that has all the default values:\nsecrets: disabled: false action: block commit_signing: disabled: false action: allow binary_files: disabled: false allow_larger: 500KB block_larger: 10MB  Supported Platforms #   Windows 10\n  Mac OSX \u0026gt;= 10.12\n  Linux\n  Alpine \u0026gt;= 5\n  Ubuntu \u0026gt;= 16.04\n  CentOS \u0026gt;= 7\n    "
      })
      .add(
      {
        id: 30,
        href: "/how-to/add-code-servers/",
        title: "Adding code servers",
        description: "How to add code servers to your tenant",
        content: "The first step in setting up a BluBracket tenant is adding code servers. This enables the BluBracket servers to communicate with a company’s Git services, which are necessary to generate alerts, insights, and reports.\nNavigating to the \u0026ldquo;enterprise code servers\u0026rdquo; section of the \u0026ldquo;settings\u0026rdquo; page # Adding a code server starts with navigating to the appropriate section in the Settings section of the tenant portal. After authenticating into the portal, select the Settings option in the left navigation bar.\nOnce the setting section is exposed, select the “enterprise code servers” section. This will reveal any code servers that have already been configured as well as the “add code server” button for adding new code servers.\n  Selecting a server type # Now that the configuration bar is exposed, the first thing we want to do is select a Server Type. We will be setting up a GitHub Cloud server, so select the “GitHub Cloud” option.\n  "
      })
      .add(
      {
        id: 31,
        href: "/intro/use-cases/",
        title: "BluBracket use-cases",
        description: "BluBracket is most often used to identify risks in code, who has access, and where it goes:\n Identifying, preventing, and removing risks in code  Secrets Personally identifiable information (PII) Non-inclusive language (NIL) Infrastructure-as-code (IAC) risks   Monitoring who and what has access to your code Monitoring where your code goes  Secrets in code # Passwords, keys, and other secrets in code are no longer secret when code is shared across teams, repos are made public, or when employees leave with copies of the code.",
        content: "BluBracket is most often used to identify risks in code, who has access, and where it goes:\n Identifying, preventing, and removing risks in code  Secrets Personally identifiable information (PII) Non-inclusive language (NIL) Infrastructure-as-code (IAC) risks   Monitoring who and what has access to your code Monitoring where your code goes  Secrets in code # Passwords, keys, and other secrets in code are no longer secret when code is shared across teams, repos are made public, or when employees leave with copies of the code.\nBluBracket\u0026rsquo;s tools identify and help eliminate secrets throughout the development workflow (before commit, review on pull request, and alert on commits to monitored repos), and make it easy to triage and mitigate secrets previously committed.\nBluBracket\u0026rsquo;s deep scans identify secrets in git history, and can even identify active secrets so you know which ones are most important.\nPersonally identifiable information (PII) # Unlike secrets, personally identifiable information can\u0026rsquo;t be changed or rotated. As companies face growing liability for mishandling PII, finding and excising it from code is becoming a growing need.\nBluBracket\u0026rsquo;s deep scans identify PII in git history, show teams the PII risk across their codebase, and help remediate. Just as with BluBracket\u0026rsquo;s secret detection tools, BluBracket can block commits of new PII, block PRs with PII, and alert teams any time PII is committed to monitored repos.\nNon-inclusive language (NIL) # Companies and open source communities are both increasingly aware of the role inclusive language plays in attracting and retaining team members in all roles. Non-inclusive language creates both significant brand risks, as well as retention risks.\nBluBracket\u0026rsquo;s tools help identify non-inclusive language throughout the development process, and guide teams to continuous improvement over time.\nInfrastructure as code (IaC) risks # Monitoring infrastructure-as-code for proper configuration before it\u0026rsquo;s applied to the infrastructure reduces risk and improves productivity for teams of all sizes.\nBluBracket\u0026rsquo;s tools automatically and continuously audit IaC throughout the development process, but teams value the guidance most when reviewing pull requests.\nMonitoring git access \u0026amp; configuration # Knowing who and what systems have access to code is critical to supporting modern workflows that often require broad access across the organization, while also protecting organizations and teams against stale permissions and misconfigurations that can emerge over time.\nIdentifying who has access to what, and calling out the best-practice configuration of everything from git hooks to branch protection rules helps guide teams to continuous improvement and ongoing operational security. When teams know they can automatically and continuously audit access, they\u0026rsquo;re both more productive because they can more easily grant access, and more secure because they have tools to\nCode leaks # 👉  This feature is only available to Enterprise customers.   Productive teams need to share code, but when code leaks outside the organization it can risk revealing key details attackers can leverage against the app, or worse.\nMost code leaks are unintentional—private code can be accidentally committed to open source projects or in gists to discuss a problem—but the pathways code moves through frustrates developers and hampers productivity. BluBracket can identify code leaks so they can be remediated before they cause significant harm.\n"
      })
      .add(
      {
        id: 32,
        href: "/how-to/cli/",
        title: "CLI tool",
        description: "The BluBracket CLI tool enables the detection of risks before they are committed. Utilizing pre-commit hooks and a configurable .blubracket-ignore file, the CLI tool can be customized to detect and prevent risks from being committed into a project.",
        content: "The BluBracket CLI tool enables the detection of risks before they are committed. Utilizing pre-commit hooks and a configurable .blubracket-ignore file, the CLI tool can be customized to detect and prevent risks from being committed into a project.\n"
      })
      .add(
      {
        id: 33,
        href: "/how-to/ignore-rules/",
        title: "Configure ignore rules",
        description: "Instructions on how to configure ignore fules for different levels, locally, per repo, and globally",
        content: "Configuring rules for ignoring detected risks can be set at multiple levels:\n On a developer\u0026rsquo;s local machine, with configuration files in the user\u0026rsquo;s home directory Per repo, with configuration files in the repo Globally, for all users and repos in an account, with a configuration file in the account  "
      })
      .add(
      {
        id: 34,
        href: "/how-to/ignore-rules/global/",
        title: "Configuring global ignore rules",
        description: "How to setup global ignore rules for all users of a tenant",
        content: "Ignore rules can be set up globally for a BluBracket tenant. blubracket-ignore.yaml allows Blubracket users to ignore specific secret types, secret values, or paths. This file must be sent utilizing the Blubracket API’s. When a match of the ignore file is made, an alert will not be created however an event will still be made.\nNote: This will not change any existing alerts/events in the platform.\n  Download integration API key\n  Set environment variable BLUBRACKET_INTEGRATION_KEY\n export BLUBRACKET_INTEGRATION_KEY='TOKEN' $Env:BLUBRACKET_INTEGRATION_KEY='TOKEN'    Create blubracket-ignore.yaml\n# ignores any of the paths below - paths: - oanda_connector.py - MachLearn-23.py # ignores any secret values below - secret_values: - My$uperDuperP@ssw0rd! # ignores any secret types below - secret_types: - aws_access_key_id # per repo-rules - repo_url: (?i)github.com/blubracket/bludemogh/(apache_tomcat_2.0|crm_order_management) rules: - secret_values: - My$uperDuperS3cret! - secret_types: - google_oauth - paths: - helm/values.yaml    Upload yaml file via API using curl:\ncurl -H \u0026quot;Authorization: Bearer ${BLUBRACKET_INTEGRATION_KEY}\u0026quot; --data-binary \u0026quot;@blubracket-ignore.yaml\u0026quot; https://TENANT.blubracket.com/api/public/blubracket-ignore    Confirm upload using:\ncurl -i -H \u0026quot;Authorization: Bearer ${BLUBRACKET_INTEGRATION_KEY}\u0026quot; https://TENANT.blubracket.com/api/public/blubracket-ignore    To delete blubracket-ignore:\ncurl -i -X DELETE -H \u0026quot;Authorization: Bearer ${BLUBRACKET_INTEGRATION_KEY}\u0026quot; https://TENANT.blubracket.com/api/public/blubracket-ignore  Any new secrets, PII or Non-inclusive language ignored will automatically be annotated as “Reviewed as Not Important” and labeled as “Ignore rule”\n  "
      })
      .add(
      {
        id: 35,
        href: "/how-to/ignore-rules/per-repo/",
        title: "Configuring ignore rules per repo",
        description: "How to set ignore rules ignore rules for all users of a repository",
        content: "In some cases a repo administrator may want to ignore specific secret types, secret values, or paths for all commits by any contributor to that repo. This can be achieved by creating an ignore.yaml file. This file is then placed into the root directory of the repository, within a .blubracket directory at the repo root.\nWhen a match of the ignore file is made, an alert will not be created (but an event will still be generated).\nExample below is a repository called Test1, which has a .blubracket directory and within the folder is the ignore.yaml file.\n  Sample .blubracket/ignore.yaml # # Ignore by file path - paths: - \u0026quot;**/*_test.go\u0026quot; - cli/cmd/default-sensitive-words-config.yaml - cli/cmd/data/* # Ignore by secret value # Equivalent to 'secret_value == my_password OR secret_value == my_token' - secret_values: - my_password - my_token # Ignore by secret type # Equivalent to 'secret_type == password_assignment OR secret_type == secret_assignment' - secret_types: password_assignment  "
      })
      .add(
      {
        id: 36,
        href: "/how-to/iac-checks/bitbucket/",
        title: "Configuring infrastructure as code scanning on Bitbucket",
        description: "Step 1: Create Bitbucket Repository Variables: #   Log into Bitbucket and select a repository where you want to enable Infrastructure as Code scanning.\n  Within the repository, select Repository settings, then Repository variables\n  Create five new Repositories variables\n  Name: DOCKER_HUB_EMAIL\nvalue: blusupport@blubracket.com\nName: DOCKER_HUB_USERNAME\nvalue: blusupport\nName: DOCKER_HUB_TOKEN\nvalue: 085ef825-b366-4636-be2a-8babaf65064f\nName: BLUBRACKET_SERVICE_ENDPOINT\nvalue: BluBracket Tenant name\nExample: https://acme.blubracket.com\nName: BLUBRACKET_INTEGRATION_KEY\nvalue: BluBracket Integration API key",
        content: "Step 1: Create Bitbucket Repository Variables: #   Log into Bitbucket and select a repository where you want to enable Infrastructure as Code scanning.\n  Within the repository, select Repository settings, then Repository variables\n  Create five new Repositories variables\n  Name: DOCKER_HUB_EMAIL\nvalue: blusupport@blubracket.com\nName: DOCKER_HUB_USERNAME\nvalue: blusupport\nName: DOCKER_HUB_TOKEN\nvalue: 085ef825-b366-4636-be2a-8babaf65064f\nName: BLUBRACKET_SERVICE_ENDPOINT\nvalue: BluBracket Tenant name\nExample: https://acme.blubracket.com\nName: BLUBRACKET_INTEGRATION_KEY\nvalue: BluBracket Integration API key\nSteps to create a BluBracket API token: https://support.blubracket.com/hc/en-us/articles/4403018405140-Event-and-Alert-APIs\n  Step 2: Create Pipeline Workflow: #   Within the repository, select Pipelines and either update an existing pipelines.yaml script or create a new one\n  Add the following script to enable Infrastructure as Code scanning:\n  pipelines: pull-requests: '**': - step: name: 'Run BluBracket IaC Scan' image: name: blubracket/iac-checker:0.0.4-beta username: $DOCKER_HUB_USERNAME password: $DOCKER_HUB_TOKEN email: $DOCKER_HUB_EMAIL script: - echo \u0026quot;Running BluBracket IaC scan\u0026quot; - env - cd /home/blubracket/iac-checker - pipenv run run --repo-directory ${BITBUCKET_CLONE_DIR} --source-branch ${BITBUCKET_BRANCH} -target-branch ${BITBUCKET_PR_DESTINATION_BRANCH} --do-not-fail-on-misconfigurations branches: main: - step: name: 'Run Blubracket IaC Scan' image: name: blubracket/iac-checker:0.0.4-beta username: $DOCKER_HUB_USERNAME password: $DOCKER_HUB_TOKEN email: $DOCKER_HUB_EMAIL script: - echo \u0026quot;Running BluBracket IaC scan\u0026quot; - env - cd /home/blubracket/iac-checker - pipenv run run --repo-directory ${BITBUCKET_CLONE_DIR} --do-not-fail-on-misconfigurations --source-branch ${BITBUCKET_BRANCH}  Step 3: Run Workflow #  Ensure workflow runs successfully. This can be verified by expanding the pipenv run karat:     If Infrastructure as Code was detected, you will see entries that indicate a check has been performed (green check indicating scan passed, a red “x” indicating a risk has been detected).       For all detected risks (red “x”), an alert will be posted to the BluBracket portal.    "
      })
      .add(
      {
        id: 37,
        href: "/how-to/iac-checks/github/",
        title: "Configuring infrastructure as code scanning on GitHub",
        description: "Step 1: Create GitHub Repository Secrets:\n  Log into GitHub and select a repository where you want to enable Infrastructure as Code scanning.\n  Within the repository, select settings, then secrets\n  Create three new repositories secrets\n  Name: DOCKER_HUB_USERNAME\nvalue: blusupport\nName: DOCKER_HUB_TOKEN\nvalue: 085ef825-b366-4636-be2a-8babaf65064f\nName: BLUBRACKET_INTEGRATION_KEY\nvalue: BluBracket Integration API key\nSteps to create a BluBracket API token: https://support.blubracket.com/hc/en-us/articles/4403018405140-Event-and-Alert-APIs\n  Step 2: Create Actions Workflow:",
        content: "Step 1: Create GitHub Repository Secrets:\n  Log into GitHub and select a repository where you want to enable Infrastructure as Code scanning.\n  Within the repository, select settings, then secrets\n  Create three new repositories secrets\n  Name: DOCKER_HUB_USERNAME\nvalue: blusupport\nName: DOCKER_HUB_TOKEN\nvalue: 085ef825-b366-4636-be2a-8babaf65064f\nName: BLUBRACKET_INTEGRATION_KEY\nvalue: BluBracket Integration API key\nSteps to create a BluBracket API token: https://support.blubracket.com/hc/en-us/articles/4403018405140-Event-and-Alert-APIs\n  Step 2: Create Actions Workflow:\n Within the repository, select Actions and either update an existing ci.yaml script or create a new one     Add the following script to enable Infrastructure as Code scanning:  Note: You must update BLUBRACKET_SERVICE_ENDPOINT=https://[Your BluBracket Tenant Name].blubracket.com to your BluBracket tenant name    Example: BLUBRACKET_SERVICE_ENDPOINT=https://acme.blubracket.com\n# This is a basic workflow to help you get started with Actions name: CI # Controls when the workflow will run on: # Triggers the workflow on push or pull request events but only for the main branch push: branches: [ main ] pull_request: branches: [ main ] # Allows you to run this workflow manually from the Actions tab workflow_dispatch: # A workflow run is made up of one or more jobs that can run sequentially or in parallel jobs: # This workflow contains a single job called \u0026quot;build\u0026quot; build: # The type of runner that the job will run on runs-on: ubuntu-latest # Steps represent a sequence of tasks that will be executed as part of the job steps: # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it - uses: actions/checkout@v2 with: fetch-depth: '0' - name: Login to DockerHub uses: docker/login-action@v1 with: username: ${{ secrets.DOCKERHUB_USERNAME }} password: ${{ secrets.DOCKERHUB_TOKEN }} # Runs a set of commands using the runners shell - name: Run Infra as Code Checker run: | set -ax env SOURCE_BRANCH=${GITHUB_REF/refs\\/heads\\//} BLUBRACKET_SERVICE_ENDPOINT=https://[BluBracket Tenant Name] BLUBRACKET_INTEGRATION_KEY=${{ secrets.BLUBRACKET_INTEGRATION_KEY }} docker run -v ${GITHUB_WORKSPACE}:/home/blubracket/iac-checker/repo \\ -u $(id -u):$(id -g) \\ blubracket/iac-checker:0.0.4-beta run \\ --blubracket-service-endpoint ${BLUBRACKET_SERVICE_ENDPOINT} \\ --integration-key ${BLUBRACKET_INTEGRATION_KEY} \\ --source-branch ${GITHUB_HEAD_REF:-${SOURCE_BRANCH}} \\ --target-branch ${GITHUB_BASE_REF:-\u0026quot;\u0026quot;} \\ --do-not-fail-on-misconfigurations  Step 3: Run Workflow #  Ensure workflow runs successfully. This can be verified by expanding the Run Infra As Code Checker karat:     If Infrastructure as Code was detected, you will see entries that indicate a check has been performed (green check indicating scan passed, a red “x” indicating a risk has been detected).       For all detected risks (red “x”), an alert will be posted to the BluBracket portal.  "
      })
      .add(
      {
        id: 38,
        href: "/how-to/iac-checks/gitlab/",
        title: "Configuring infrastructure as code scanning on GitLab",
        description: "Step 1: Create GitLab Repository Variables: #   Log into GitLab and select a repository where you want to enable Infrastructure as Code scanning.\n  Within the repository, select Settings, then CI/CD\n  Expand Variables section and select Add variable\n  Create four new variables:\n  Name: DOCKER_HUB_USERNAME\nvalue: blusupport\nName: DOCKER_HUB_TOKEN\nvalue: 085ef825-b366-4636-be2a-8babaf65064f\nName: BLUBRACKET_SERVICE_ENDPOINT\nvalue: BluBracket Tenant name\nExample: https://acme.blubracket.com\nName: BLUBRACKET_INTEGRATION_KEY\nvalue: BluBracket Integration API key",
        content: "Step 1: Create GitLab Repository Variables: #   Log into GitLab and select a repository where you want to enable Infrastructure as Code scanning.\n  Within the repository, select Settings, then CI/CD\n  Expand Variables section and select Add variable\n  Create four new variables:\n  Name: DOCKER_HUB_USERNAME\nvalue: blusupport\nName: DOCKER_HUB_TOKEN\nvalue: 085ef825-b366-4636-be2a-8babaf65064f\nName: BLUBRACKET_SERVICE_ENDPOINT\nvalue: BluBracket Tenant name\nExample: https://acme.blubracket.com\nName: BLUBRACKET_INTEGRATION_KEY\nvalue: BluBracket Integration API key\nSteps to create a BluBracket API token:\nhttps://support.blubracket.com/hc/en-us/articles/4403018405140-Event-and-Alert-API\n  Step 2: Create Pipeline Workflow: #  Within the repository, select CI/CD, then Pipelines to either update an existing ci.yaml script or create a new one via the Editor option:     Add the following script to enable Infrastructure as Code scanning:  infra-as-code-scan: # Use the official docker image. image: docker:latest stage: build services: - docker:dind variables: GIT_STRATEGY: clone GIT_DEPTH: 0 before_script: - docker login -u \u0026quot;$DOCKERHUB_USERNAME\u0026quot; -p \u0026quot;$DOCKERHUB_TOKEN\u0026quot; script: - env - | set -ax docker run -v ${CI_PROJECT_DIR}:/home/blubracket/iac-checker/repo \\ -u $(id -u):$(id -g) \\ blubracket/iac-checker:0.0.4-beta run \\ --blubracket-service-endpoint ${BLUBRACKET_SERVICE_ENDPOINT} \\ --integration-key ${BLUBRACKET_INTEGRATION_KEY} \\ --source-branch ${CI_MERGE_REQUEST_SOURCE_BRANCH_NAME:-${CI_COMMIT_BRANCH}} \\ --target-branch ${CI_MERGE_REQUEST_TARGET_BRANCH_NAME:-\u0026quot;\u0026quot;} \\ --do-not-fail-on-misconfigurations rules: # Run diff workflow on all merge requests - if: '$CI_PIPELINE_SOURCE == \u0026quot;merge_request_event\u0026quot;' # Run branch workflow on pushes to default branch - if: '$CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH'  Step 3: Run Workflow #  Ensure workflow runs successfully. This can be verified by selecting Jobs and expanding the Executing “step_script” karat and scrolling to bottom of page:     If Infrastructure as Code was detected, you will see entries that indicate a check has been performed (green check indicating scan passed, a red “x” indicating a risk has been detected).       For all detected risks (red “x”), an alert will be posted to the BluBracket portal.    "
      })
      .add(
      {
        id: 39,
        href: "/how-to/ignore-rules/local/",
        title: "Configuring local ignore rules",
        description: "How to set ignore rules for your local machine",
        content: "In some cases a developer may want the BluBracket CLI Tool to ignore specific secret types or entire files. This can be achieved by creating a .blubracket-ignore file. This file is then placed into the root directory of the repository.\nThe format of the .blubracket-ignore file is similar to a .gitignore file.\nEmpty lines and lines beginning with # will be ignored\nTo ignore all secrets in a file a glob pattern is recognized. For example **/tests will ignore any secrets found in all files within any directory or sub-directory named “tests”.\nTo ignore a specific secret type, say passwords, you would add the following line: secret_type:password.*, where password.* is a perl compatible regular expression.\n**/tests/** secret_type:password.*  "
      })
      .add(
      {
        id: 40,
        href: "/api/event-alert/",
        title: "Event \u0026 alert",
        description: "Reading and searching events and alerts.",
        content: "Getting alert counts # Search alerts using filters over attributes\nEndpoint # POST /api/public/alert/count\nRequest body # One or more filters\n{ \u0026quot;filters\u0026quot;: [ { \u0026quot;id\u0026quot;: \u0026quot;alert_type\u0026quot;, \u0026quot;value\u0026quot;: [ \u0026quot;REPO_SCAN_MATCH\u0026quot; ], \u0026quot;exact_match\u0026quot;: true }, { \u0026quot;id\u0026quot;: \u0026quot;repo_type\u0026quot;, \u0026quot;value\u0026quot;: [ \u0026quot;ENTERPRISE_PUBLIC\u0026quot;, \u0026quot;PUBLIC\u0026quot; ], \u0026quot;exact_match\u0026quot;: true }, { \u0026quot;id\u0026quot;: \u0026quot;state\u0026quot;, \u0026quot;value\u0026quot;: [ \u0026quot;ACTIVE\u0026quot; ], \u0026quot;exact_match\u0026quot;: true } ] }  Response # Success: 200\nNumber of alerts\nSearching alerts # Updating an alert # Update the state of one or more alerts.\n"
      })
      .add(
      {
        id: 41,
        href: "/how-to/",
        title: "User guide",
        description: "",
        content: ""
      })
      .add(
      {
        id: 42,
        href: "/how-to/ci-checks/github-checks/",
        title: "Configure GitHub Checks",
        description: "Prerequisites # To install GitHub Checks, permissions to install a GitHub App on an org are required. This would be an organization owner or someone with admin level permissions in a repository\nGitHub cloud checks setup for BluBracket free trial edition # This version of GitHub Checks is for customers using a BluBracket Free Trial tenant.\n  Navigate to BluBracket portal, import code server, track repos\n  Install the following app on the organization (should be done by someone who has permissions to install the app): https://github.",
        content: "Prerequisites # To install GitHub Checks, permissions to install a GitHub App on an org are required. This would be an organization owner or someone with admin level permissions in a repository\nGitHub cloud checks setup for BluBracket free trial edition # This version of GitHub Checks is for customers using a BluBracket Free Trial tenant.\n  Navigate to BluBracket portal, import code server, track repos\n  Install the following app on the organization (should be done by someone who has permissions to install the app): https://github.com/apps/blubracket-standard\n  Future PRs + commits to PRs should automatically run the scans via GitHub Checks\n    \nGitHub cloud checks setup for BluBracket enterprise tenants # This version of GitHub Checks is for paid customers running on the BluBracket production servers\n  Navigate to BluBracket portal, import code server, track repos\n  Install the following app on the organization (should be done by someone who has permissions to install the app): https://github.com/apps/blubracket-checks-app\n  Future PRs + commits to PRs should automatically run the scans via GitHub Checks\n    \nGitHub enterprise server checks setup # This version of GitHub Checks is for paid customers using the on-premise GitHub Enterprise Server\n  Navigate to the BluBracket portal, import code server, track repos\n  Create the GitHub Enterprise Server Checks app (follow the instructions at https://github.com/BluBracket/blubracket-tools/tree/main/github-checks-app )\n As part of the last step in that README.md file, send over the relevant configuration details. Wait for confirmation from us that our internal set up has been completed before proceeding.    Install the app created from step 2 on the organization (should be done by someone who has permissions to install the app).\n  Future PRs + commits to PRs should automatically run the scans via GitHub Checks\n  \nGitHub checks workflow # The BluBracket GitHub checks workflow will run on your CI/CD workflow within GitHub. For example when a pull request is made the BluBracket GitHub checks will scan the pull request for secrets.\nFor example when a secret is found within a pull request, the check will fail and will give details on where and what type of secret was found.\n Example of a failing check on a pull request\n  If the BluBracket checks app doesn\u0026rsquo;t find any blocking items such as secrets, the check will pass and the pull request can be successfully merged.\n Example of a passing check on a pull request\n  "
      })
      .add(
      {
        id: 43,
        href: "/how-to/add-user/",
        title: "Adding a BluBracket user",
        description: "How to add a BluBracket user",
        content: "The first thing you might want to do is add your team members to assist with the setup and management. As soon as you log into your BluBracket tenant, you should create at least one additional user for the admin portal:\n  Go to Settings.\n  Click Account Tab.\n     Click Add User      Assign a unique username.\n  Enter the user’s email address.\n  Click Create.\n  "
      })
      .add(
      {
        id: 44,
        href: "/api/",
        title: "API",
        description: "How to access and use the BluBracket API.",
        content: ""
      })
      .add(
      {
        id: 45,
        href: "/api/ci-checks/",
        title: "CI checks",
        description: "These APIs can be used to integrate BluBracket checks into a continuous integration (CI) workflow and help prevent risks being committed to a protected branch.\nStart a scan # Start a scan for a list of commits or a pull request\nEndpoint # POST /api/analyzer/commit/scan\nParameters #   repo_url (string, required): URL of the repo\n  pull_request_number (int, optional): The id number of the pull request to be scanned.",
        content: "These APIs can be used to integrate BluBracket checks into a continuous integration (CI) workflow and help prevent risks being committed to a protected branch.\nStart a scan # Start a scan for a list of commits or a pull request\nEndpoint # POST /api/analyzer/commit/scan\nParameters #   repo_url (string, required): URL of the repo\n  pull_request_number (int, optional): The id number of the pull request to be scanned.\n  commit_shas (a list of strings, optional): full SHA of the commits to be scanned\n  Sample request body # For scanning a pull request\n{ \u0026quot;repo_url\u0026quot;: \u0026quot;https://github.com/my_org/my_repo\u0026quot;, \u0026quot;pull_request_number\u0026quot;: 3891 }  For scanning a list of commits\n{ \u0026quot;repo_url\u0026quot;: \u0026quot;https://github.com/my_org/my_repo\u0026quot;, \u0026quot;commit_shas\u0026quot;: [ \u0026quot;a20cb4ca5c14ff27bdf16989d450c83b22f156d8\u0026quot;, \u0026quot;d0d6593d1d4e81acd073244f42b6893fa65c99d8\u0026quot; ] }  Sample response # { \u0026quot;scan_uuid\u0026quot;: \u0026quot;fd974b65-61ba-4576-849a-0e6aa1fdd16b\u0026quot; }  Note: The scan_uuid returned in the response can be used to query the result once it’s ready.\nGet the scan result # Get the result of the scan with a given id\nEndpoint # GET /api/analyzer/commit/scan/{scan_uuid}\nwhere scan_uuid is the ID of the scan\nResponse code # 200 - Scan is completed\n202 - Scan is still in progress\nSample response # { \u0026quot;secrets\u0026quot;: { \u0026quot;d0d6593d1d4e81acd073244f42b6893fa65c99d8\u0026quot;: { \u0026quot;secrets_found\u0026quot;: [ { \u0026quot;secret_hash\u0026quot;: \u0026quot;a392d713-4000-419a-b720-6a037b6147e3\u0026quot;, \u0026quot;secret_type\u0026quot;: \u0026quot;google_api_key\u0026quot;, \u0026quot;file_path\u0026quot;: \u0026quot;token.py\u0026quot;, \u0026quot;line_no\u0026quot;: 32, \u0026quot;cols\u0026quot;: [ 13, 29 ], \u0026quot;secret_checker_results\u0026quot;: { \u0026quot;tags\u0026quot;: [ \u0026quot;active_secret\u0026quot; ] } } ] } }, \u0026quot;scan_state\u0026quot;: \u0026quot;done\u0026quot;, \u0026quot;message\u0026quot;: \u0026quot;\u0026quot; }  "
      })
      .add(
      {
        id: 46,
        href: "/intro/getting-started/",
        title: "Getting started with BluBracket",
        description: "Getting started with BluBracket",
        content: "Getting started with BluBracket is a three step process: sign up, add a code server, then start improving security. Using our scanning tool, you you find the risks in your code and dig deeper into the information provided.\nOnce you have signed up, you can immediately start scanning repositories and commits for vulnerabilities.\nIf you are ready to improve your code\u0026rsquo;s security, please read below to get started for free.\nSigning up with BluBracket # To create a user account, visit https://blubracket.com/contact/get-started/. Click the Start for Free button.\n Begin your three-step process by clicking the yellow Start for Free button.\n  Enter your email. Then, click the Start Trial button.\n Enter your email to get started with your account with BluBracket.\n  Once you have submitted your email, you should receive a confirmation page that asks you to check your email for your login link.\n BluBracket gives a confirmation page after receiving email.\n  Check your email # Next, check your email for a link to confirm your account and create a password.\nIn your email, you will find the following link. Click the Set Password button to set the password of your BluBracket login account.\nNOTE: This password request expires in 48 hours.\n Click the blue Set Your Password button to set your password.\n  Once you have set your password, you are ready to get started with connecting your repositories to BluBracket.\nSet your password #  Follow the password requirements to set your new password for your BluBracket account.\n  Fill in your email address and password.\nPassword criteria:\n Passwords must be at least eight characters. Passwords must include at least one number, a special character or symbol, and one uppercase letter.  Signing in # Refer to your welcome email when you first signed in to BluBracket for your personalized dashboard URL. You must use this URL in order to sign in.\n BluBracket provides your login link through email.\n  Adding your first code server # Go to Settings \u0026gt; Code Servers in the BluBracket web console to add one or more code repositories hosted on GitHub, GitLab, Bitbucket, or another supported code server.\nFull details about how to add a code server are available in the usage guide.\nImprove your code security with every commit #  Add BluBracket to your workflow with the CLI tool, GitHub Checks, or other CI checks so you can identify risks before your next commit. Review existing risks to understand your overall code health and make a plan for what is urgent and what can wait. Track your security health improvements with every commit.  "
      })
      .add(
      {
        id: 47,
        href: "/how-to/iac-checks/",
        title: "IaC checks",
        description: "Infrastructure as code (IaC) scanning configuration instructions",
        content: "Infrastructure as code (IaC) scanning operates differently from other checks in BluBracket. It runs as a job within the CI tool of your choice, and reports its findings back to BluBracket where you can evaluate any found risks. Despite the different operation model, any alerts related to IaC risks are processed by BluBracket as usual, and trigger messages in Slack for example.\nOfficially supported CI systems for IaC scanning include:\n"
      })
      .add(
      {
        id: 48,
        href: "/how-to/remediate-alerts/",
        title: "Remediate alerts",
        description: "How to remediate alerts",
        content: "There are a number of best practices when it comes to handling secrets in code. Below are a few:\n  Encrypt your secrets\n  Use environmental variables\n  Use a secret manager to store your secrets, like HashiCorp Vault, Azure Key Vault, etc.\n  Once BluBracket has found a secret and you have had a chance to remediate the secret in code, marking it as reviewed will help you easily differentiate it from those that still require action.\n"
      })
      .add(
      {
        id: 49,
        href: "/faq/",
        title: "Frequently asked questions",
        description: "",
        content: ""
      })
      .add(
      {
        id: 50,
        href: "/intro/key-workflows/",
        title: "Key workflows",
        description: "BluBracket code security tools are optimized to prevent risks from getting into code, and to promote the process of continuous improvement that reduces existing risks from code over time.\nPreventing risks in code # As developers, we depend on a quick feedback loop to understand if our code is working and does what is expected. BluBracket tools can offer automated security guidance as part of that feedback loop, in the IDE of your choice, pre-commit, and as part of the CI flow.",
        content: "BluBracket code security tools are optimized to prevent risks from getting into code, and to promote the process of continuous improvement that reduces existing risks from code over time.\nPreventing risks in code # As developers, we depend on a quick feedback loop to understand if our code is working and does what is expected. BluBracket tools can offer automated security guidance as part of that feedback loop, in the IDE of your choice, pre-commit, and as part of the CI flow.\nPre-commit hooks # The BluBracket CLI scan for secrets, PII, and non-inclusive language before commits, to prevent risks from ever getting into repos from the start.\n The BluBracket CLI tool can identify and optionally block secrets before they\u0026rsquo;re committed.\n  The CLI supports local configuration with directives in ~/.blubracket/, repo-level configuration for all committers to the repo with directives in .blubracket/ at the repo root, and global configuration for all users of a BluBracket account with directives set at that level. Additionally, inline directives inserted as code comments can be used to mark specific items to ignore, putting decisions about how to handle selected code risks in context with the code.\nUsers can choose to make pre-commit risk detection a blocking or non-blocking feature, to support whatever workflow a developer prefers.\n Usage guide: installing and using the CLI.  IDE integration # Popular IDEs, such as VS Code and IntelliJ, present messages from pre-commit hooks in context so you don\u0026rsquo;t have to interrupt your flow to get feedback.\n FAQ: supported IDEs.  CI checks # Pre-commit hooks prevent most risks before they ever get into a repo, but CI checks provide an extra layer of guidance for teams.\n BluBracket can identify risks in the CI workflow via GitHub Checks and others.\n  GitHub is just one supported code server and CI environment.\nAs with pre-commit hooks, CI checks and all BluBracket\u0026rsquo;s server-side code scanning supports repo-level configuration with directives in .blubracket/ at the repo root, and global configuration for all users and all repos in a BluBracket account with directives set at that level. Additionally, inline directives inserted as code comments can be used to mark specific items to ignore, putting decisions about how to handle selected code risks in context with the code.\n Usage guide: configuring CI checks.  Alerts # BluBracket can send alerts any time it finds new risks committed to monitored repos. Messaging a Slack channel is just one option, see the full list of configurations for more.\n BluBracket integration with Slack can alert teams about code risks in new commits in real time.\n   More info: messaging and SIEM/ticketing integrations.  Understanding and taking action on existing risks # Preventing new risks from getting into your code is one of the most important steps to continuous improvement. Understanding your overall code health so you can prioritize and track your efforts at continuous improvement is the next most critical step.\nBluBracket scans your code, including every historical commit, to identify secrets, PII, non-inclusive language, and infrastructure-as-code risks lurking within.\n BluBracket categorizes risks so you can understand your code health and areas of highest risk.\n  Reviewing those risks in the BluBracket dashboard allows you to see the overall health of your scanned codebase, the areas of highest risk, and find specific issues you can act on now to improve your code security.\nRepo risk scores #  BluBracket risk scores make it easy to see code health and prioritize effort.\n  BluBracket evaluates the health of every scanned repo and sums it up in an easy-to-understand score so you can rank and prioritize effort across your codebase.\nDetailed filtering and reporting #  Filter risks to understand code health and find actionable issues.\n  Filtering tools allow you to take control to see exactly what risks exist in your codebase and where to target and prioritize efforts based on your specific code condition and threat model.\nAutomated git access \u0026amp; configuration monitoring # It\u0026rsquo;s as important to monitor who and what has access to code as it is to monitor the risks in the code. BluBracket\u0026rsquo;s tools make it easy to support multiple privilege models as needed for your organization.\nPrivilege models that grant developers broad access to code and workflow configuration by default can enable increased productivity and innovation across the codebase, but require automatic and continuous auditing of access and configuration to ensure security.\nLeast privilege models can maximize security, but enforcing it with common git code servers can be difficult without automated, continuous audits of access and configuration.\n A sample of BluBracket\u0026rsquo;s automated git access \u0026amp; configuration monitoring alerts.\n  BluBracket\u0026rsquo;s git access and configuration monitoring tools make it easy to see who and what has access across the codebase, and alert when access permissions don\u0026rsquo;t conform to policy.\n"
      })
      .add(
      {
        id: 51,
        href: "/how-to/ci-checks/",
        title: "CI checks",
        description: "BluBracket integrates into the CI workflow to automatically check pull requests before they are merged.\nBluBracket can be configured to warn or block pull requests when it finds risks in code. Most teams prefer only to warn when risks are detected in code, and data shows those warnings are effective in helping those teams recognize and prevent new risks from being merged in PRs.\nBluBracket rich support for:\n GitHub Checks Bitbucket Code Insights  Additionally, the CI API can be used to extend CI checks into nearly any workflow.",
        content: "BluBracket integrates into the CI workflow to automatically check pull requests before they are merged.\nBluBracket can be configured to warn or block pull requests when it finds risks in code. Most teams prefer only to warn when risks are detected in code, and data shows those warnings are effective in helping those teams recognize and prevent new risks from being merged in PRs.\nBluBracket rich support for:\n GitHub Checks Bitbucket Code Insights  Additionally, the CI API can be used to extend CI checks into nearly any workflow.\n"
      })
      .add(
      {
        id: 52,
        href: "/intro/integrations/",
        title: "Integrations",
        description: "Local workflow tools #  The BluBracket CLI tool can identify and block secrets before they\u0026rsquo;re committed.\n  Available local tools and integrations\n CLI IntelliJ (via CLI, full plugin coming soon) Visual Studio Code (via CLI)  Usage guide: installing and using the CLI.\nCode servers #  BluBracket scans repositories hosted in GitHub, GitLab, Bitbucket, and others.\n  Certified \u0026amp; supported code servers:\n GitHub GitLab Bitbucket Azure DevOps (contact us for beta) Gerrit (coming soon)  Usage guide: adding code servers.",
        content: "Local workflow tools #  The BluBracket CLI tool can identify and block secrets before they\u0026rsquo;re committed.\n  Available local tools and integrations\n CLI IntelliJ (via CLI, full plugin coming soon) Visual Studio Code (via CLI)  Usage guide: installing and using the CLI.\nCode servers #  BluBracket scans repositories hosted in GitHub, GitLab, Bitbucket, and others.\n  Certified \u0026amp; supported code servers:\n GitHub GitLab Bitbucket Azure DevOps (contact us for beta) Gerrit (coming soon)  Usage guide: adding code servers.\nCI servers #  BluBracket can identify risks in the CI workflow via GitHub Checks and others.\n  Certified \u0026amp; supported CI servers:\n GitHub Checks Bitbucket Code Insights Jenkins  Additional integrations are available via our open CI API.\nUsage guide: configuring CI checks.\nIdentity, authentication, and authorization #  BluBracket supports Okta and other single sign-on solutions.\n  Certified \u0026amp; supported identity integrations:\n Azure AD Okta Ping SAML GitHub OAuth (coming soon) Gitlab OAuth (coming soon) Bitbucket OAuth (coming soon)  Messaging #  BluBracket integration with Slack can alert teams about code risks in new commits in real time.\n  Certified \u0026amp; supported messaging integrations:\n Slack Microsoft Teams  Ticketing \u0026amp; incident management #  BluBracket can automatically create a Jira ticket when risks are found in new commits.\n  Certified \u0026amp; supported ticketing \u0026amp; incident management integrations:\n Jira ServiceNow PagerDuty Splunk  Build your own #  APIs Webhooks (coming soon)  "
      })
      .add(
      {
        id: 53,
        href: "/how-to/add-code-servers/azure-devops/",
        title: "Adding an Azure DevOps code server",
        description: "How to add an Azure DevOps code server to your tenant",
        content: "Azure DevOps support is available in private beta at this time. Please contact our team for a demo or to join the beta.\n"
      })
      .add(
      {
        id: 54,
        href: "/contact-support/",
        title: "Contact support",
        description: "",
        content: ""
      })
      .add(
      {
        id: 55,
        href: "/authoring-documentation/",
        title: "Authoring documentation",
        description: "How do write and edits the docs in this site.",
        content: "Filesystem organization # Each page is a Hugo page bundle, a directory with a index.md and any attachments/images used in the page.\n The directory name is the URL slug The page title and other metadata are set in the yaml-formatted front matter  Pages can be nested to create a hierarchical structure. If a directory contains multiple pages, the index.md must be prefixed with an underscore (_index.md) to tell Hugo to recurse into the directory for additional pages. Example:\n. └── content ├── _index.md \u0026lt;- https://example.com/ ├── intro | └── index.md \u0026lt;- https://example.com/intro/ ├── how-to | ├── _index.md \u0026lt;- https://example.com/how-to/ | ├── start | | └── index.md \u0026lt;- https://example.com/how-to/start/ | └── finish | └── index.md \u0026lt;- https://example.com/how-to/finish/ └── faq └── index.md \u0026lt;- https://example.com/faq/  Content markup # Content is formatted as Markdown, with support for many of the more advanced Markdown features, as well as a number of shortcodes supported by Hugo.\nLinks # Standard Markdown link syntax is preferred\n[link text](http://example.com/)\nHugo also provides a shortcode that can be used to make it easier to link to pages within the site:\n[Quick Start →]({{\u0026lt; relref \u0026quot;intro\u0026quot; \u0026gt;}})  Images # Small images can be embedded using normal Markdown syntax, but Hugo also provides a {{\u0026lt; figure \u0026gt;}} shortcode ideal for embedding larger images with more metadata.\nFor either syntax, the image should be committed in the directory with the page it appears on, and identified in the front matter resources object:\nresources: - src: demo-figure.jpg  Markdown syntax for small images # ![This kitten icon](demo-img.png)  Output:\nThis adorable kitten icon used as a demo img was downloaded from The Noun Project.\nFigure shortcode for large images # {{\u0026lt; figure src=\u0026quot;demo-figure.jpg\u0026quot; caption=\u0026quot;This adorable kitten used as the demo figure was [downloaded from Unsplash](https://unsplash.com/photos/tuomgxdoIP4).\u0026quot; \u0026gt;}}  All available options documented here.\nOutput:\n This adorable kitten used as the demo figure was downloaded from Unsplash.\n  Video # Many modern browsers accept videos in the img element (via the {{\u0026lt; figure \u0026gt;}} shortcode, for example), but embedding YouTube or Vimeo videos is most compatible.\nYouTube # For a given YouTube URL such as https://www.youtube.com/watch?v=w7Ft2ymGmfc, the YouTube shortcode should be:\n{{\u0026lt; youtube w7Ft2ymGmfc \u0026gt;}}  Output:\n  Vimeo # For a given Vimeo URL such as https://vimeo.com/channels/staffpicks/146022717, the Vimeo shortcode should be:\n{{\u0026lt; vimeo 146022717 \u0026gt;}}  Output:\n  Code # Standard code fencing with single and triple backticks works as expected. Hugo also supports code highlighting with the following shortcode:\n{{\u0026lt; highlight html \u0026gt;}} \u0026lt;section id=\u0026quot;main\u0026quot;\u0026gt; \u0026lt;div\u0026gt; \u0026lt;h1 id=\u0026quot;title\u0026quot;\u0026gt;{{ .Title }}\u0026lt;/h1\u0026gt; {{ range .Pages }} {{ .Render \u0026quot;summary\u0026quot;}} {{ end }} \u0026lt;/div\u0026gt; \u0026lt;/section\u0026gt; {{\u0026lt; /highlight \u0026gt;}}  Output:\n\u0026lt;section id=\u0026#34;main\u0026#34;\u0026gt; \u0026lt;div\u0026gt; \u0026lt;h1 id=\u0026#34;title\u0026#34;\u0026gt;{{ .Title }}\u0026lt;/h1\u0026gt; {{ range .Pages }} {{ .Render \u0026#34;summary\u0026#34;}} {{ end }} \u0026lt;/div\u0026gt; \u0026lt;/section\u0026gt; In-page emphasis # {{\u0026lt; alert icon=\u0026quot;👉\u0026quot; text=\u0026quot;The Alert shortcode should be used sparingly.\u0026quot; \u0026gt;}}  Output:\n👉  The Alert shortcode should be used sparingly.   Table of contents structure # Site menu # The left column table of contents follows the hierarchy set by the filesystem directory structure, but the order of pages at any given level is based on page weight set in the front matter of the page. By default, all pages are ordered by: Weight \u0026gt; Date \u0026gt; LinkTitle \u0026gt; FilePath.\nSee weight: 900 in the front matter in the source of this page as an example.\nPage headings # The right column table of contents follows the order of the headings in the doc.\nStyleguide # Sentence case # All headings in these docs should follow sentence case as described in this APA guide.\n"
      })
      .add(
      {
        id: 56,
        href: "/",
        title: "BluBracket Documentation",
        description: "Track what's in your code, who has access, and where it goes.",
        content: ""
      })
      .add(
      {
        id: 57,
        href: "/contributors/",
        title: "Contributors",
        description: "",
        content: ""
      })
      ;

  search.addEventListener('input', show_results, true);

  function show_results(s){

    // Support calling this function with search args (s)
    // or getting the search from another context
    if ((typeof s === 'string') && (0 < s.length))
    {
      // accept the argument value
      var searchQuery = s;
    }
    else
    {
      // get the value from this
      var searchQuery = this.value;
    }

    const maxResult = 5;

    var results = index.search(searchQuery, {limit: maxResult, enrich: true});

    // flatten results since index.search() returns results for each indexed field
    const flatResults = new Map(); // keyed by href to dedupe results
    for (const result of results.flatMap(r => r.result)) {
      if (flatResults.has(result.doc.href)) continue;
      flatResults.set(result.doc.href, result.doc);
    }

    suggestions.innerHTML = "";
    suggestions.classList.remove('d-none');

    // inform user that no results were found
    if (flatResults.size === 0 && searchQuery) {
      const noResultsMessage = document.createElement('div')
      noResultsMessage.innerHTML = `No results for "<strong>${searchQuery}</strong>"`
      noResultsMessage.classList.add("suggestion__no-results");
      suggestions.appendChild(noResultsMessage);
      return;
    }

    // construct a list of suggestions
    for(const [href, doc] of flatResults) {
        const entry = document.createElement('div');
        suggestions.appendChild(entry);

        const a = document.createElement('a');
        a.href = href;
        entry.appendChild(a);

        const title = document.createElement('span');
        title.textContent = doc.title;
        title.classList.add("suggestion__title");
        a.appendChild(title);

        const description = document.createElement('span');
        description.textContent = doc.description;
        description.classList.add("suggestion__description");
        a.appendChild(description);

        suggestions.appendChild(entry);

        if(suggestions.childElementCount == maxResult) break;
    }
  }

  var urlSearchQuery = urlParam("s");
  if(urlSearchQuery){
    document.getElementById("search").value = urlSearchQuery;
    search.focus();
    show_results(urlSearchQuery);
  }

  function urlParam(name) {
      return decodeURIComponent((location.search.split(name + '=')[1] || '').split('&')[0]).replace(/\+/g, ' ');
  }

}());
