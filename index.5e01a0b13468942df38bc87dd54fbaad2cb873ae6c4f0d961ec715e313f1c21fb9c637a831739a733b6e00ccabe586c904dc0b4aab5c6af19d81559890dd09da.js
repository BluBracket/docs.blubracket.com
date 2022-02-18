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
        content: "After selecting to add a Bitbucket Cloud code server, follow the instructions below to add a Bitbucket XXX as a code server in BluBracket.\nBitbucket uses the term \u0026ldquo;Bitbucket Cloud\u0026rdquo; to differentiate repositories hosted at bitbucket.com from their self-hosted enterprise offering.\nEach Bitbucket XXX is a different code server in BluBracket (see Bitbucket docs on XXX).\nEntering a workspace name # The next thing to do is select a workspace to point the server to. Workspaces are usually, but not always, set up as lines of business or projects. For example, Google may have workspaces for Nest, Android, Add Words, etc., all under the same server. It is possible to point a server at multiple workspaces. Enter the targeted workspace into the input field.\n  If you don’t know the workspace name you can find them in the Bitbucket administrator portal. Log into your Bitbucket account as an administrator and navigate to the following location, https://bitbucket.org/account/workspaces/. From this location, click Manage (under Actions) for one of the workspaces, and note the Workspace ID\n  Entering a personal access token (PAT) # The next step in adding the code server is adding the Personal Access Token (PAT). In order for BluBracket to access information within a given repository, an access token must be uploaded into the tenant.\nNote: The personal access token but be entered in the following format: username:token.\nExample: holland:Vgc9Kw8w5zQu58989Uxz\nhow to generate a personal access token on Bitbucket\nEnter the token in the location indicated below:\n  Finally, select either the “all repositories” or “customer select repositories” option and click on the save button.\n  At this point, if you’ve completed all of the above steps and entered the information accurately, the enterprise code server should be up and running and start to pull the desired data. Please note it can take anywhere from a few minutes to several hours for our system to finish analyzing your repositories. You can navigate to the \u0026ldquo;repositories\u0026rdquo; page to check the real-time scanning status.\n"
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
        content: "After selecting to add a GitLab Cloud code server, follow the instructions below to add a GitLab XXX as a code server in BluBracket.\nGitLab uses the term \u0026ldquo;GitLab Cloud\u0026rdquo; to differentiate repositories hosted at gitlab.com from their self-hosted enterprise offering.\nEach GitLab XXX is a different code server in BluBracket (see GitLab docs on XXX).\nEntering a Group name # The next thing to do is select a Group to point the server to. Groups are usually, but not always, set up as lines of business or projects. For example, Google may have Groups for Nest, Android, Add Words, etc., all under the same server. It is possible to point a server at multiple Groups. Enter the targeted Group into the input field.\n  If you don’t know the Group name you can find them in the Gitlab administrator portal. Log into your GitLab account as an administrator and navigate to the following location: Click on Menu, then Select Groups.\n  Entering a Personal Access Token (PAT) # The next step in adding the code server is adding the Personal Access Token (PAT). In order for BluBracket to access information within a given repository, an access token must be uploaded into the tenant.\n[How to generate a Personal Access Token (PAT) in GitLab] (https://support.blubracket.com/hc/en-us/articles/360060110692-How-To-Generate-Personal-Access-Token-PAT-in-GitLab)\nEnter the token in the location indicated below.\n  Click Next\nFinally, select either the “All Repositories” or “Customer Select Repositories” option and click on the Save button.\n  At this point, if you’ve completed all of the above steps and entered the information accurately, the Enterprise Code Server should be up and running and start to pull the desired data. Please note it can take anywhere from a few minutes to several hours for our system to finish analyzing your repositories. You can navigate to the ‘Repositories’ page to check the real-time scanning status.\n"
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
        href: "/faq/does-blubracket-scan-new-commits-to-repositories/",
        title: "Does BluBracket scan new commits to repositories?",
        description: "Yes. Each time a new commit is made to a monitored repository, BluBracket immediately scans the commit for any new risks. Any risks that are found will be displayed in the web dashboard, and alerted through any configured alert integrations.",
        content: "Yes. Each time a new commit is made to a monitored repository, BluBracket immediately scans the commit for any new risks. Any risks that are found will be displayed in the web dashboard, and alerted through any configured alert integrations.\n"
      })
      .add(
      {
        id: 6,
        href: "/faq/does-blubracket-store-modify-my-code/",
        title: "Does BluBracket store/modify my code or any part of my code?",
        description: "No. BluBracket clones repositories, scans them, creates a hash of each of the files (for later comparisons), then the entire checkout from the BluBracket servers. All of this happens within a few seconds, depending on the repository size.\nAfter the scan, BluBracket saves specific metadata to support alerting and reporting on any found risks—things like repository names, file names, contributor IDs, commit IDs and times, etc.\nBluBracket never stores any code after the scan.",
        content: "No. BluBracket clones repositories, scans them, creates a hash of each of the files (for later comparisons), then the entire checkout from the BluBracket servers. All of this happens within a few seconds, depending on the repository size.\nAfter the scan, BluBracket saves specific metadata to support alerting and reporting on any found risks—things like repository names, file names, contributor IDs, commit IDs and times, etc.\nBluBracket never stores any code after the scan. And BluBracket never makes any changes, and does not have permissions to make changes to your code.\n"
      })
      .add(
      {
        id: 7,
        href: "/faq/how-long-does-it-take-to-scan-new-commits/",
        title: "How long does it take for BB to scan new commits?",
        description: "The time it takes for BluBracket to scan new commits depends on the size of the commit. In most cases though the scan is perceived as immediate.",
        content: "The time it takes for BluBracket to scan new commits depends on the size of the commit. In most cases though the scan is perceived as immediate.\n"
      })
      .add(
      {
        id: 8,
        href: "/api/intro-auth-keys/",
        title: "Intro to BluBracket APIs and API keys",
        description: "How to access and use the BluBracket API.",
        content: "In order to make requests into the event and alert APIs, you have to generate an API key, which you use to generate a token, and then you can setup any kind of integration that you would like to make authenticated requests into the Blu Event and Alert APIS.\nportal-generate-api-key.png\nGenerating an auth token #   Create an API key by navigating to Settings \u0026gt; API Keys  Generating a key in the BluBracket web console.\n    Enter a name for the key\n  Select Integration from the drop down\n  Select Generate Key\n  Save the JSON/CSV file to your desktop\n  Open the JSON/CSV file and copy the value of the token\n{ \u0026quot;api_keys\u0026quot;: { \u0026quot;https://mycompany.blubracket.com\u0026quot;: { \u0026quot;id\u0026quot;: \u0026quot;BLU-a492144b-f118-4598-991e-f1d4d6209edf\u0026quot;, \u0026quot;key\u0026quot;: \u0026quot;TofsB.....EqwGg\u0026quot;, \u0026quot;token\u0026quot;: \u0026quot;QkxVL....xd0dn\u0026quot; } } }    Testing and using the API token # With the generated token, you can make requests directly to BluBracket APIs. You will need to set the Authorization header and use the provided token as Bearer token.\nHere are some examples using curl:\ncurl -H \u0026quot;Authorization: Bearer TOKEN_FROM_STEP_2\u0026quot; --data '{\u0026quot;filters\u0026quot;:[]}' https://mycompany.blubracket.com/api/public/event/search curl -H \u0026quot;Authorization: Bearer TOKEN_FROM_STEP_2\u0026quot; --data '{\u0026quot;filters\u0026quot;:[]}' https://mycompany.blubracket.com/api/public/alert/search  Note: As per ISO 8601, date formatting requires either the Z or the +00:00 be supplied at the end. This is required to determine that the datetime is in the UTC timezone.\nExample Python code is shown below:\nfrom datetime import datetime, timezone datetime.now(timezone.utc).isoformat()  Output: 2021-07-20T23:45:06.342716+00:00\n"
      })
      .add(
      {
        id: 9,
        href: "/intro/",
        title: "Introduction to BluBracket ",
        description: "",
        content: ""
      })
      .add(
      {
        id: 10,
        href: "/faq/what-alerts-are-shown/",
        title: "What alerts are shown in BluBracket?",
        description: "This page is a stub.",
        content: "This page is a stub.\n"
      })
      .add(
      {
        id: 11,
        href: "/faq/what-can-i-do-with-blubracket-apis/",
        title: "What can I do with BluBracket APIs?",
        description: "Use BluBracket APIs to integrate with your CI/DC solution. This will help make sure that there are no secrets accidentally checked in to code by any of your team members.\nYou may also leverage BluBracket APIs to export secret found events to other systems in addition to our support for Slack, Splunk, and others.",
        content: "Use BluBracket APIs to integrate with your CI/DC solution. This will help make sure that there are no secrets accidentally checked in to code by any of your team members.\nYou may also leverage BluBracket APIs to export secret found events to other systems in addition to our support for Slack, Splunk, and others.\n"
      })
      .add(
      {
        id: 12,
        href: "/faq/what-does-the-cli-tool-do/",
        title: "What does the BluBracket CLI tool do?",
        description: "The BluBracket CLI tool provides a number of developer conveniences, and is optimized to check for the following at git pre-commit:\n Secrets:the tool identifies hundreds of types of tokens, keys, IDs as well as passwords. Non-inclusive language: the tool identifies non-inclusive language like master, slave, dummy, and blacklist. Custom RegEx: you can configure your own regular expressions that the tool will identify and alert on. Commit Signing:the CLI can check that the commit is going to be signed or not.",
        content: "The BluBracket CLI tool provides a number of developer conveniences, and is optimized to check for the following at git pre-commit:\n Secrets:the tool identifies hundreds of types of tokens, keys, IDs as well as passwords. Non-inclusive language: the tool identifies non-inclusive language like master, slave, dummy, and blacklist. Custom RegEx: you can configure your own regular expressions that the tool will identify and alert on. Commit Signing:the CLI can check that the commit is going to be signed or not. Large Binary Files - the CLI tool can check that a “large” binary file is going to be committed. By default binary files less than 500 KB will be ignored; if more than 500 KB but less than 10 MB, CLI will warn but allow the commit; if more than 10 MB then the commit will be blocked.  The tool can be configured to ignore, warn, or block when it finds any of the above during a git commit attempt.\n"
      })
      .add(
      {
        id: 13,
        href: "/faq/what-permissions-do-you-require/",
        title: "What GitHub permissions does the BluBracket app require?",
        description: "When you authenticate into BluBracket using GitHub Oauth you will see and approve the following permissions:\n Read access to administration, code, members, metadata, organization administration, and pull requests Read and write access to checks, organization hooks, and repository hooks  These permissions allow BluBracket to monitor the repositories that you select and present you with any secrets found as well as contributor/commit information.",
        content: "When you authenticate into BluBracket using GitHub Oauth you will see and approve the following permissions:\n Read access to administration, code, members, metadata, organization administration, and pull requests Read and write access to checks, organization hooks, and repository hooks  These permissions allow BluBracket to monitor the repositories that you select and present you with any secrets found as well as contributor/commit information.\n"
      })
      .add(
      {
        id: 14,
        href: "/faq/supported-ide/",
        title: "What IDEs are supported by the CLI tool?",
        description: "In our testing, any IDE (integrated developer environment) with built-in support for git and pre-commit hooks supports supports the feedback and alerts from the BluBracket CLI tool.\nBluBracket officially supports the following IDEs:\n IntelliJ VS Code  ",
        content: "In our testing, any IDE (integrated developer environment) with built-in support for git and pre-commit hooks supports supports the feedback and alerts from the BluBracket CLI tool.\nBluBracket officially supports the following IDEs:\n IntelliJ VS Code  "
      })
      .add(
      {
        id: 15,
        href: "/intro/what-is-blubracket/",
        title: "What is BluBracket?",
        description: "BluBracket is a code and git security suite that identifies risks in your code, monitors who and what has access to your code, and tracks where your code goes outside your git repos.\nBluBracket use-cases #  Identifying, preventing, and removing risks in code  Secrets Personally identifiable information (PII) Non-inclusive language (NIL) Infrastructure-as-code (IAC) risks   Monitoring who and what has access to your code Monitoring where your code goes  Who is BluBracket for?",
        content: "BluBracket is a code and git security suite that identifies risks in your code, monitors who and what has access to your code, and tracks where your code goes outside your git repos.\nBluBracket use-cases #  Identifying, preventing, and removing risks in code  Secrets Personally identifiable information (PII) Non-inclusive language (NIL) Infrastructure-as-code (IAC) risks   Monitoring who and what has access to your code Monitoring where your code goes  Who is BluBracket for? # BluBracket is for individual developers, development and appsec teams of all sizes, and enterprise infosec teams.\n  BluBracket Community Edition\nCore BluBracket code security features—including the CLI tools.Available free with no time limit for personal and open source use.\n  BluBracket Teams Edition\nAll the BluBracket features to identify risks in your code, as well as git access and configuration risks.\nAvailable as a full-featured, free, no-obligation trial. After the trial, the account will automatically convert to a BluBracket Community Edition account.\n  BluBracket Enterprise Edition\nThe entire suite of BluBracket code security features to identify risks in your code, git access and configuration risks, and track where code goes outside your git repos.\nContact our customer success team for a free demo.\n  How BluBracket works # BluBracket has two parallel modes of operation:\n As a SaaS suite providing protection and alerts across a codebase, supporting the detection, analysis, and remediation of security risks in the code and related to code access As a local CLI tool scanning code locally, to support immediate identification of potential risks in the code, without the risk of sending that code to remote servers  And BluBracket integrates at multiple points in the SDLC workflow:\n Before code is committed, via the CLI and pre-commit hooks, and in popular IDEs Before code is merged, via CI checks (GitHub Checks, Bitbucket Code Insights, Jenkins, etc.) Actionable alerts in Slack and other tools when new risks are detected Tools to analyze and understand existing risks, and trend reports to see improvement over time  Where does BluBracket integrate? #  Local/workstation tools Code servers, like GitHub and Bitbucket CI servers, like GitHub Actions and Jenkins Identity, authentication, and authorization systems like SAML and Active Directory Messaging systems, like Slack Ticketing \u0026amp; incident management systems, like Jira and PagerDuty Build your own with APIs and webhooks  How to get started with BluBracket # Start a free, no-obligation trial today, or contact our customer success team for a free demo.\nOr see all the steps to getting started here.\n"
      })
      .add(
      {
        id: 16,
        href: "/faq/what-kinds-of-secrets-do-you-search-for/",
        title: "What kinds of secrets does BluBracket search for?",
        description: "BluBracket uses a variety of technologies, including pattern matching and AI/ML to detect hundreds of different types of secrets in code, including tokens, keys, IDs, credentials and passwords. BluBracket also allows developers to specify additional alert triggers using regular expressions.\nA sample of secrets BluBracket commonly detects includes:\npassword_assignment # Potential password assignment\n'PaSswOrd' = '13579'  secret_assignment # Potential secret assignment\n\u0026quot;test_token_123\u0026quot; = \u0026quot;my_secret_token\u0026quot;  credential_assignment # Potential credential assignment",
        content: "BluBracket uses a variety of technologies, including pattern matching and AI/ML to detect hundreds of different types of secrets in code, including tokens, keys, IDs, credentials and passwords. BluBracket also allows developers to specify additional alert triggers using regular expressions.\nA sample of secrets BluBracket commonly detects includes:\npassword_assignment # Potential password assignment\n'PaSswOrd' = '13579'  secret_assignment # Potential secret assignment\n\u0026quot;test_token_123\u0026quot; = \u0026quot;my_secret_token\u0026quot;  credential_assignment # Potential credential assignment\nAWS_creDentiAl: 'some-string'  google_api_key # Potential Google API key\nAIzaSyA-k3UmEeCD6KpySp3cSAlGJwXTNV_oybM  google_api_key_base64 # Potential Google API key (base64)\nQUl6YVN5QS1rM1VtRWVDRDZLcHlTcDNjU0FsR0p3WFROVl9veWJN  google_oauth # Potential Google OAuth\n3572-b3w78sfasfcvs87fasdf6hbvefs21nb3.apps.googleusercontent.com  google_oauth_access_token # Potential Google OAuth access token\nya29.sd8keCms2swx2sJNW8kWxqzj3  google_oauth_access_token_base64 # Potential Google OAuth access token (base64)\neWEyOS5zZDhrZUNtczJzd3gyc0pOVzhrV3hxemoz  aws_access_key_id # Potential AWS access key ID\nAKIA2E0A8F3B244C9986  aws_access_key_id_base64 # Potential AWS access key ID (base64)\nQUtJQTJFMEE4RjNCMjQ0Qzk5ODY non-token  aws_secret_key # Potential AWS Secret key\nawS_secret=\u0026quot;7CE556A3BC234CC1FF9E8A5C324C0BB70AA21B6D\u0026quot;  aws_account_id # Potential AWS account ID\n\u0026quot;aWs_account\u0026quot;: \u0026quot;3238-1074-6278\u0026quot;  aws_mws_key # Potential AWS MWS key\namzn.mws.a8fc03d7-7eb3-c92f-b3aa-ae93cbff7acd  aws_mws_key_base64 # Potential AWS MWS key (base64)\nYW16bi5td3MuYThmYzAzZDctN2ViMy1jOTJmLWIzYWEtYWU5M2NiZmY3YWNk  github_token # Potential GitHub token\n'githUb_token': '9qjxsjq6HWBXKAOP87IJHmhsW8038d73Dm9eDu'  github_access_token # Potential GitHub access token or OAuth client secret\ngIthub-access_token = '2b30cc694989f335a4298067c4753a6c09ccfe5e'  github_oauth_client_secret # Potential GitHub OAuth client secret\ngIthub-oAuth_token = '2b30cc694989f335a4298067c4753a6c09ccfe5e'  github_token_base64 # github_access_token_base64 # github_oauth_client_secret_base64 # Potential GitHub Personal Access Token or OAuth Client Secret (base64)\n'githUb_token': 'OXFqeHNqcTZIV0JYS0FPUDg3SUpIbWhzVzgwMzhkNzNEbTllRHU'  github_personal_access_token # Potential GitHub personal access token\n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  github_oauth_client_id # Potential GitHub OAuth Client ID\ngithub_client-id : 'c7444c71c75965b07cdb'  github_user_to_server_token # Potential GitHub user-to-server token\nghu_16C7e42F292c6912E7710c838347Ae178B4a  github_server_to_server_token # Potential GitHub server-to-server token\nghs_16C7e42F292c6912E7710c838347Ae178B4a  github_refresh_token # Potential GitHub refresh token\nghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498  gitlab_oauth_application_id_base64 # gitlab_oauth_secret_base64 # Potential Base64 Encoded GitLab OAuth application id or secret\ngitLab: \u0026quot;Yzc0ZjNjZmQ0NDk0OWM3MGY3ZjM1NjEyOTViNjdlNjgyZDdlNGZmNjY5OTViNjdkNGUxNTRmZTMxMjU0ODFhOA==\u0026quot;  gitlab_access_token # Potential GitLab Access Token\ngitLab= \u0026quot;y-WttoALkwHn_vWJ72DB\u0026quot;  gitlab_oauth_application_id # gitlab_oauth_secret # Potential GitLab OAuth Applicaiton ID or GitLab OAuth Secret\ngitLab: \u0026quot;c74f3cfd44949c70f7f3561295b67e682d7e4ff66995b67d4e154fe3125481a8\u0026quot;  bitbucket_app_password # Potential Bitbucket App Password\nbitbucKet-app_pwd := \u0026quot;YpHdUSPAB9aDNuwVq8uK\u0026quot;  bitbucket_app_password_base64 # Potential Bitbucket App Password (base64)\nbitbucKet-app_token := \u0026quot;WXBIZFVTUEFCOWFETnV3VnE4dUs=\u0026quot;  bitbucket_oauth_key # Potential Bitbucket OAuth Key\nbitbUCket_key= \u0026quot;NCnnHSXbMVmJZr8D8q\u0026quot;  bitbucket_oauth_key_base64 # Potential Bitbucket OAuth Key (base64)\nbitbUCket_key= TkNubkhTWGJNVm1KWnI4RDhx  bitbucket_oauth_secret # Potential Bitbucket OAuth Secret\n\u0026quot;bitbuckeT_secret\u0026quot;: \u0026quot;CMJ2bKZUPAzXezTwNGXyWDsegT8ZW3Yd\u0026quot;  bitbucket_oauth_secret_base64 # Potential Bitbucket OAuth Secret (base64)\n\u0026quot;bitbuckeT_secret\u0026quot;: \u0026quot;Q01KMmJLWlVQQXpYZXpUd05HWHlXRHNlZ1Q4WlczWWQ\u0026quot;  azure_active_directory_client_id # Potential Azure Active Directory Client ID\nazuRE_ad_client_id=\u0026quot;7076aa77-81ef-46ea-ae22-d768babeed21\u0026quot;  azure_active_directory_client_secret # Potential Azure Active Directory Client Secret\naZure_client_secret=\u0026quot;y5=KAF/PbpoMmum31/t]S88dDu5d:?S*\u0026quot;  azure_active_directory_client_secret_base64 # Potential Azure Active Directory Client Secret (base64)\naZure_client_secret=\u0026quot;SVt3Si1dRExyTFduYzBlRi11cEFtdVhlY0lMZVM2MzA=\u0026quot;  azure_access_token # Potential Azure Access Token\n'azUre_token'= \u0026quot;r5nt64ikuzhohfm7r4rmdk2gd5unb4tb7eberlombqazshrfdr3q\u0026quot;  azure_access_token_base64 # Potential Azure Access Token (base64)\n'azUre_token'= \u0026quot;cjVudDY0aWt1emhvaGZtN3I0cm1kazJnZDV1bmI0dGI3ZWJlcmxvbWJxYXpzaHJmZHIzcQ==\u0026quot;  microsoft_id_token # Potential Microsoft Identity Platform ID Token\nmicRosoft_id_token=\u0026quot;eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyIsImtpZCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyJ9.eyJhdWQiOiJiMTRhNzUwNS05NmU5LTQ5MjctOTFlOC0wNjAxZDBmYzljYWEiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mYTE1ZDY5Mi1lOWM3LTQ0NjAtYTc0My0yOWYyOTU2ZmQ0MjkvIiwiaWF0IjoxNTM2Mjc1MTI0LCJuYmYiOjE1MzYyNzUxMjQsImV4cCI6MTUzNjI3OTAyNCwiYWlvIjoiQVhRQWkvOElBQUFBcXhzdUIrUjREMnJGUXFPRVRPNFlkWGJMRDlrWjh4ZlhhZGVBTTBRMk5rTlQ1aXpmZzN1d2JXU1hodVNTajZVVDVoeTJENldxQXBCNWpLQTZaZ1o5ay9TVTI3dVY5Y2V0WGZMT3RwTnR0Z2s1RGNCdGsrTExzdHovSmcrZ1lSbXY5YlVVNFhscGhUYzZDODZKbWoxRkN3PT0iLCJhbXIiOlsicnNhIl0sImVtYWlsIjoiYWJlbGlAbWljcm9zb2Z0LmNvbSIsImZhbWlseV9uYW1lIjoiTGluY29sbiIsImdpdmVuX25hbWUiOiJBYmUiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaXBhZGRyIjoiMTMxLjEwNy4yMjIuMjIiLCJuYW1lIjoiYWJlbGkiLCJub25jZSI6IjEyMzUyMyIsIm9pZCI6IjA1ODMzYjZiLWFhMWQtNDJkNC05ZWMwLTFiMmJiOTE5NDQzOCIsInJoIjoiSSIsInN1YiI6IjVfSjlyU3NzOC1qdnRfSWN1NnVlUk5MOHhYYjhMRjRGc2dfS29vQzJSSlEiLCJ0aWQiOiJmYTE1ZDY5Mi1lOWM3LTQ0NjAtYTc0My0yOWYyOTU2ZmQ0MjkiLCJ1bmlxdWVfbmFtZSI6IkFiZUxpQG1pY3Jvc29mdC5jb20iLCJ1dGkiOiJMeGVfNDZHcVRrT3BHU2ZUbG40RUFBIiwidmVyIjoiMS4wIn0=.UJQrCA6qn2bXq57qzGX_-D3HcPHqBMOKDPx4su1yKRLNErVD8xkxJLNLVRdASHqEcpyDctbdHccu6DPpkq5f0ibcaQFhejQNcABidJCTz0Bb2AbdUCTqAzdt9pdgQvMBnVH1xk3SCM6d4BbT4BkLLj10ZLasX7vRknaSjE_C5DI7Fg4WrZPwOhII1dB0HEZ_qpNaYXEiy-o94UJ94zCr07GgrqMsfYQqFR7kn-mn68AjvLcgwSfZvyR_yIK75S_K37vC3QryQ7cNoafDe9upql_6pB2ybMVlgWPs_DmbJ8g0om-sPlwyn74Cc1tW3ze-Xptw_2uVdPgWyqfuWAfq6Q\u0026quot;  atlassian_api_token # Potential Atlassian API Token\nmy_jira_token=\u0026quot;xbE0Z4lPlrsxCsbQljSD7AFF\u0026quot;  atlassian_api_token_base64 # Potential Atlassian API Token (base64)\nmy_jira_token=\u0026quot;eGJFMFo0bFBscnN4Q3NiUWxqU0Q3QUZG\u0026quot;  dropbox_app_key_secret # Potential Dropbox App Key or App Secret\nDROPBOX_APP_KEY: \u0026quot;4fyyzx73aeeouuy\u0026quot;  dropbox_app_key_secret_base64 # Potential Dropbox App Key or App Secret (base64)\nDROPBOX_APP_KEY: \u0026quot;NGZ5eXp4NzNhZWVvdXV5\u0026quot;  dropbox_app_access_refresh_token # Potential Dropbox App Access Token\ndropbox_app_access_token: 'sTaeXjPl-kAAAAAAAAAAE4PSHCac-raR31ueSeFZUSHBJ5tlMGvyO8MeXRaRQOrU'  dropbox_app_access_refresh_token_base64 # Potential Dropbox App Access Token (base64)\ndropbox_app_access_token: 'c1RhZVhqUGwta0FBQUFBQUFBQUFFNFBTSENhYy1yYVIzMXVlU2VGWlVTSEJKNXRsTUd2eU84TWVYUmFSUU9yVQ=='  box_client_id_secret # Potential Box client id or client secret\nbox_client_id: \u0026quot;2zljm7yivjhfz9in4dkr566vk4xpje5y\u0026quot;  box_client_id_secret_base64 # Potential Box client id or client secret (base64)\nbox_client_id: \u0026quot;Mnpsam03eWl2amhmejlpbjRka3I1NjZ2azR4cGplNXkK\u0026quot;  box_refresh_token # Potential Box refresh token\nbox_refresh_token: \u0026quot;Q8j0kTwbhQXHO95FAKg5zTfKhDwGWOUQyRue8i7njJoqWAwdRKfAPw4oK6zF3dPv\u0026quot;  box_refresh_token_base64 # Potential Box refresh token (base64)\nbox_refresh_token: \u0026quot;UThqMGtUd2JoUVhITzk1RkFLZzV6VGZLaER3R1dPVVF5UnVlOGk3bmpKb3FXQXdkUktmQVB3NG9LNnpGM2RQdgo=\u0026quot;  discord_client_id # Potential Discord Client ID\nDiScORd: \u0026quot;618962312686075969\u0026quot;  discord_client_secret # Potential Discord Client Secret\ndisCORD_secret= \u0026quot;4cs2-cYx2KiKIRuOTKworwnM0_A4uJyy\u0026quot;  slack_legacy_token # Potential Slack Legacy Token\nxoxp-559859041733-629723654435-752364182007-9ead8994051da71a0774db965b16a60b\u0026quot;  slack_legacy_token_base64 # Potential Slack Legacy Token (base64)\neG94cC01NTk4NTkwNDE3MzMtNjI5NzIzNjU0NDM1LTc1MjM2NDE4MjAwNy05ZWFkODk5NDA1MWRhNzFhMDc3NGRiOTY1YjE2YTYwYg==  slack_app_client_id # Potential Slack App Client ID\nslack_client_id='559859041733.752727218102'  slack_app_client_secret # slack_app_signing_secret # Potential Slack App Client Secret or Slack App Signing Secret\nslack_secret=\u0026quot;004c7fb45aeb0b795890128d763877ec\u0026quot;  slack_app_verification_token # Potential Slack App Verification Token\nslack_token: \u0026quot;Bk1D7BxSbGRttZYpyngNZBSR\u0026quot;  slack_app_verification_token_base64 # Potential Slack App Verification Token (base64)\nslack_token: \u0026quot;QmsxRDdCeFNiR1J0dFpZcHluZ05aQlNS\u0026quot;  slack_bot_user_token # Potential Slack Bot User Token\nslack_token: \u0026quot;xoxb-559859041733-629723654435-752364182007-9ead8994051da71a0774db965b16a60b\u0026quot;  slack_bot_user_token_base64 # Potential Slack Bot User Token (base64)\neG94Yi01NTk4NTkwNDE3MzMtNjI5NzIzNjU0NDM1LTc1MjM2NDE4MjAwNy05ZWFkODk5NDA1MWRhNzFhMDc3NGRiOTY1YjE2YTYwYg==  slack_workspace_token # Potential Slack Workspace Token\nslack_token: \u0026quot;xoxa-259859041733-629723654435-752364182007-9ead8994051da71a0774db965b16a60b\u0026quot;  slack_workspace_token_base64 # Potential Slack Workspace Token (base64)\neG94YS0yNTk4NTkwNDE3MzMtNjI5NzIzNjU0NDM1LTc1MjM2NDE4MjAwNy05ZWFkODk5NDA1MWRhNzFhMDc3NGRiOTY1YjE2YTYwYg==  slack_webhook # Potential Slack Webhook\nhttps://hooks.slack.com/services/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  stripe_test_secret_key # Potential Stripe Test Secret Key\nsk_test_MfRuaFA9sgl5e1AUYzjwiNNt00UG6t6fvY  stripe_test_secret_key_base64 # Potential Stripe Test Secret Key (base64)\nc2tfdGVzdF80ZUMzOUhxTHlqV0Rhcmp0VDF6ZHA3ZGM=  stripe_live_secret_key # Potential Stripe live secret key\nsk_live_MfRuaFA9sgl5e1AUYzjwiNNt00UG6t6fvY  stripe_live_secret_key_base64 # Potential Stripe live secret key (base64)\nc2tfbGl2ZV9NZlJ1YUZBOXNnbDVlMUFVWXpqd2lOTnQwMFVHNnQ2ZnZZ  stripe_test_restricted_key # Potential Stripe Test Restricted Key\nrk_test_Zu9Vz12eIYFNdGoFKe8aYiQn00gcclUvS0  stripe_test_restricted_key_base64 # Potential Stripe Test Restricted Key (base64)\ncmtfdGVzdF9adTlWejEyZUlZRk5kR29GS2U4YVlpUW4wMGdjY2xVdlMw  stripe_live_restricted_key # Potential Stripe live restricted key\nrk_live_Zu9Vz12eIYFNdGoFKe8aYiQn00gcclUvS0  stripe_live_restricted_key_base64 # Potential Stripe live restricted key (base64)\ncmtfbGl2ZV9adTlWejEyZUlZRk5kR29GS2U4YVlpUW4wMGdjY2xVdlMw  mailgun_private_api_key # Potential Mailgun Private API Key\n\u0026quot;mailgUn_key\u0026quot;: 'key-b11b487224a7c184fed93795bf01adc9'  mailgun_private_api_key_base64 # Potential Mailgun Private API Key (base64)\n\u0026quot;mailgUn_key\u0026quot;: 'a2V5LWIxMWI0ODcyMjRhN2MxODRmZWQ5Mzc5NWJmMDFhZGM5'  mailgun_public_validation_key # Potential Mailgun Public Validation Key\npubkey-14b4474da0d0a6551a9c711ee11aa996  mailgun_public_validation_key_base64 # Potential Mailgun Public Validation Key (base64)\ncHVia2V5LTE0YjQ0NzRkYTBkMGE2NTUxYTljNzExZWUxMWFhOTk2  mailgun_webhook_signing_key # Potential Mailgun Webhook Signing Key\nmailgun_key='15304a8a0558637d8187630ddf11df1a'  mailgun_webhook_signing_key_base64 # Potential Mailgun Webhook Signing Key (base64)\nmailgun_key='MTUzMDRhOGEwNTU4NjM3ZDgxODc2MzBkZGYxMWRmMWE='  sendgrid_api_key # Potential Sendgrid API Key\n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  sendgrid_api_key_base64 # Potential Sendgrid API Key (base64)\nU0cucFcyWFhnNi1UY2E4YkNCVEMwRWlZUS5ZNXBDOFNqZmJ3WWxNTURSaVQ5TTZxN0VmOWIzX0RDSGtQNS0zaXNYM3dN  twilio_auth_token # twilio_api_key # Potential Twilio Auth Token or API Key\ntwilio_token=\u0026quot;692e03bfddd09d85946e1319dd5e7c61\u0026quot;  twilio_auth_token_base64 # Potential Twilio Auth Token or API Key (base64)\ntwilio_token=\u0026quot;NjkyZTAzYmZkZGQwOWQ4NTk0NmUxMzE5ZGQ1ZTdjNjE=\u0026quot;  npm_access_token # Potential NPM Access Token\n\u0026quot;npm : `f74fb6c7-15d7-46e7-85b4-02ca4988bd3c`\u0026quot;  npm_access_token_base64 # Potential NPM Access Token (base64)\n`npm : `Zjc0ZmI2YzctMTVkNy00NmU3LTg1YjQtMDJjYTQ5ODhiZDNj``  npmrc_auth # Potential .npmrc Auth\n_auth = YWRtaW46YWRtaW4=  npmrc_auth_token # Potential .npmrc Auth token\n_authToken=26dfe8d8-889b-4380-92ff-9c3c6ea5d930  pulumi_access_token # Potential Pulumi Access Token\npul-b521eabebc4b312eb2335beb7a911f9eb7f078c2  pulumi_access_token_base64 # Potential Pulumi Access Token (base64)\ncHVsLWI1MjFlYWJlYmM0YjMxMmViMjMzNWJlYjdhOTExZjllYjdmMDc4YzI=  alibaba_access_key_secret # Potential Alibaba Cloud Access Key Secret\nalibaba_access_key ='3ihvGlklDPSXr22dnunrHTpZO4aKmS'  alibaba_access_key_secret_base64 # Potential Alibaba Cloud Access Key Secret (base64)\nalibaba_access_key ='M2lodkdsa2xEUFNYcjIyZG51bnJIVHBaTzRhS21T'  codeship_aes_key # Potential Cloudbees Codeship AES Key Secret\n\u0026quot;codeship_token='/BaC5gedAC8hACwe5tZje+YVdOCTUxH+b+zkgKSKTkA='\u0026quot;  postman_api_key # Potential Postman API Key\n\u0026quot;postman-api-key='PMAK-5e1c6889073b8400310886e0-40895969cc5bb51944fce153e94c33f3b9'\u0026quot;  postman_api_key_base64 # Potential Postman API Key (base64)\npostman-api-key='UE1BSy01ZTFjNjg4OTA3M2I4NDAwMzEwODg2ZTAtNDA4OTU5NjljYzViYjUxOTQ0ZmNlMTUzZTk0YzMzZjNiOQ=='  terraform_access_token # Potential Terraform Access Token\n\u0026quot;QnbSxjjhVMHJgw.atlasv1.gxZnWIjI5j752DGqdwEUVLOFf0mtyaQ00H9bA1j90qWb254lEkQyOdfqqcq9zZL7Sm0\u0026quot;  gocardless_access_token # Potential Gocardless Cloud Access Token\ngocardless_access_token = 'live_TKWImhFpoTRpzOIbpRhDS3-ezGa--nt4O9KU1Hd1'  gocardless_access_token_base64 # Potential Gocardless Cloud Access Token (base64)\ngoCardLessToken = bGl2ZV9US1dJbWhGcG9UUnB6T0licFJoRFMzLWV6R2EtLW50NE85S1UxSGQx  password_in_xml # Potential password in XML\n\u0026amp;lt;PaSswOrd\u0026amp;gt;UnitTest1234!\u0026amp;lt;/PaSswOrd\u0026amp;gt;  secret_in_xml # Potential secret in XML\n\u0026amp;lt;Token\u0026amp;gt;0123456789abcdef\u0026amp;lt;/Token\u0026amp;gt;  password_function # Potential password in function\nsetPassword(\u0026quot;$uperStrong1\u0026quot;);  secret_function # Potential secret in function\nsetApiKey ( 'api_key' )  password_in_url # Potential password in URL\nhttps://user:password@github.com/blubracket/rocks  password_in_url_params # Potential password in params\nhttps://user:password@github.com/blubracket/rocks?passwd=1234  secret_in_url_params # Potential secret in params\nhttps://github.com/blubracket/rocks?secret=1234  private_key # Potential Private Key\n-----BEGIN RSA PRIVATE KEY-----\\nProc-Type: 4,ENCRYPTED\\nDEK-Info: DES-EDE3-L1D9CN2WmfoLeIBBJdQ2YngfSz……..\u0026lt;/p\u0026gt;\u0026lt;p\u0026gt;==\\n-----END RSA PRIVATE KEY-----  pgp_private_key # Potential PGP Private Key\n-----BEGIN PGP PRIVATE KEY BLOCK-----  blubracket_api_key # Potential BluBracket API key\napi_key=\u0026quot;BLU-72de3a5f-b1ff-5a7f-a5ae-1a9cf5a98b27\u0026quot;  blubracket_api_key_base64 # Potential BluBracket API key (base64)\napi_key=\u0026quot;QkxVLTcyZGUzYTVmLWIxZmYtNWE3Zi1hNWFlLTFhOWNmNWE5OGIyNw==\u0026quot;  basic_auth_header # Potential Basic Auth Header\nsh \u0026quot;set -e | curl -i -H 'Authorization: Basic QWxhZGRpbjpPcGVuU2VzYW1l' -T BackEnd/build/libs/example_api-0.1.0.jar  jwt_token # Potential Generic JWT token\njwt_access_token = \u0026quot;eyJhbGciOiJSUzI1NiIsImlzc3VlciI6InVybjpibHUiLCJyb2xlIjozLCJzZXJ2aWNlX2tleV9wYXRoIjoiL2FwaS9hbmFseXplci9wdWJsaWNfa2V5IiwidHlwIjoiSldUIn0.eyJleHAiOjE2MDUzMTI0MTksImlhdCI6MTYwNTMxMjM1OSwiaWQiOiJ0b2tlbl9pZCIsIm5idCI6MTYwNTMxMjM1OX0.l-MjVG33Ca76gtuiFLI-_AasHEsoMA3WcC36YvW0IHyQp-160z2Idc-sMdaJD8AwMsFto45vqnusDFkS1UYO7mZhU6sufv6pIMH86Ll7NwYvPzirqkWys40pvoXZdxxb3X5IBFTB8p9EuvLGOPUPFbEkA_if5jmExXjKUY98q0s\u0026quot;  "
      })
      .add(
      {
        id: 17,
        href: "/faq/what-sensitive-words-does-you-search-for/",
        title: "What non-inclusive language does the BluBracket search for?",
        description: "It has become increasingly important lately to make sure specific sensitive words are not included in code or documentation. These would be words like: master, slave, dummy, blacklist, etc. Just as with secrets, the BluBracket code scanner and CLI tool automatically search for these sensitive words and notifies the developer before they are committed to repositories.\nExample non-inclusive language includes the following words:\n master slave whitelist blacklist whitebox blackbox whitehat blackhat  Let us know if there are any others that you or your company think should be added to the list.",
        content: "It has become increasingly important lately to make sure specific sensitive words are not included in code or documentation. These would be words like: master, slave, dummy, blacklist, etc. Just as with secrets, the BluBracket code scanner and CLI tool automatically search for these sensitive words and notifies the developer before they are committed to repositories.\nExample non-inclusive language includes the following words:\n master slave whitelist blacklist whitebox blackbox whitehat blackhat  Let us know if there are any others that you or your company think should be added to the list. You can always add your own via the regex configuration as well.\n"
      })
      .add(
      {
        id: 18,
        href: "/faq/cli-supported-platforms/",
        title: "What platforms are supported by the BluBracket CLI tool?",
        description: "The BluBracket CLI tool is supported on the following platforms:\n Mac OSX 10.12 and later Linux  Alpine 5 and later Ubuntu 16.04 and later CentOS 7 and later   Windows 10  ",
        content: "The BluBracket CLI tool is supported on the following platforms:\n Mac OSX 10.12 and later Linux  Alpine 5 and later Ubuntu 16.04 and later CentOS 7 and later   Windows 10  "
      })
      .add(
      {
        id: 19,
        href: "/faq/what-repositories-can-i-monitor/",
        title: "What repositories can I monitor?",
        description: "BluBracket can monitor any repositories on a supported code server that you have access to. Fully supported code servers include cloud and enterprise versions of:\n GitHub GitLab Bitbucket  Support for additional code servers is in development, and may be available in private beta.\nOn GitHub, for example, you can monitor repos in your personal GitHub org as well as company/group orgs where you have permission to add apps.",
        content: "BluBracket can monitor any repositories on a supported code server that you have access to. Fully supported code servers include cloud and enterprise versions of:\n GitHub GitLab Bitbucket  Support for additional code servers is in development, and may be available in private beta.\nOn GitHub, for example, you can monitor repos in your personal GitHub org as well as company/group orgs where you have permission to add apps.\n"
      })
      .add(
      {
        id: 20,
        href: "/faq/why-should-i-use-blubracket-discover-secrets/",
        title: "Why should I use the BluBracket to discover secrets in code when there are so many other tools available?",
        description: "Best in class secret detection # Testing demonstrates that BluBracket can identify more tokens, keys and IDs than the other tools. Additionally, it supports user-defined custom patterns so you can match whatever is important to you.\nFewest false positives # Expansive detection is critical to ensuring secrets are found, but BluBracket’s rules engine also actively eliminates potential false positives allowing developers to focus on the most important findings.\nComprehensive threat detection # In addition to secrets, BluBracket scans for the following risks in code:",
        content: "Best in class secret detection # Testing demonstrates that BluBracket can identify more tokens, keys and IDs than the other tools. Additionally, it supports user-defined custom patterns so you can match whatever is important to you.\nFewest false positives # Expansive detection is critical to ensuring secrets are found, but BluBracket’s rules engine also actively eliminates potential false positives allowing developers to focus on the most important findings.\nComprehensive threat detection # In addition to secrets, BluBracket scans for the following risks in code:\n Personally identifiable information (PII) Non-inclusive language (NIL) Infrastructure as code (IaC) best practices  Additionally, BluBracket monitors who and what has access to your code, and where your code is going.\nComplete workflow # Detection is easy, but building workflows and tools that help prevent risks from getting into code, and support continuous improvement through risk scoring, filtering, and reporting is what makes BluBracket an indispensable part of modern development practices.\n"
      })
      .add(
      {
        id: 21,
        href: "/how-to/add-code-servers/",
        title: "Adding code servers",
        description: "How to add code servers to your tenant",
        content: "The first step in setting up a BluBracket tenant is adding code servers. This enables the BluBracket servers to communicate with a company’s Git services, which are necessary to generate alerts, insights, and reports.\nNavigating to the \u0026ldquo;enterprise code servers\u0026rdquo; section of the \u0026ldquo;settings\u0026rdquo; page # Adding a code server starts with navigating to the appropriate section in the Settings section of the tenant portal. After authenticating into the portal, select the Settings option in the left navigation bar.\nOnce the setting section is exposed, select the “enterprise code servers” section. This will reveal any code servers that have already been configured as well as the “add code server” button for adding new code servers.\n  Selecting a server type # Now that the configuration bar is exposed, the first thing we want to do is select a Server Type. We will be setting up a GitHub Cloud server, so select the “GitHub Cloud” option.\n  "
      })
      .add(
      {
        id: 22,
        href: "/intro/use-cases/",
        title: "BluBracket use-cases",
        description: "BluBracket is most often used to identify risks in code, who has access, and where it goes:\n Identifying, preventing, and removing risks in code  Secrets Personally identifiable information (PII) Non-inclusive language (NIL) Infrastructure-as-code (IAC) risks   Monitoring who and what has access to your code Monitoring where your code goes  Secrets in code # Passwords, keys, and other secrets in code are no longer secret when code is shared across teams, repos are made public, or when employees leave with copies of the code.",
        content: "BluBracket is most often used to identify risks in code, who has access, and where it goes:\n Identifying, preventing, and removing risks in code  Secrets Personally identifiable information (PII) Non-inclusive language (NIL) Infrastructure-as-code (IAC) risks   Monitoring who and what has access to your code Monitoring where your code goes  Secrets in code # Passwords, keys, and other secrets in code are no longer secret when code is shared across teams, repos are made public, or when employees leave with copies of the code.\nBluBracket\u0026rsquo;s tools identify and help eliminate secrets throughout the development workflow (before commit, review on pull request, and alert on commits to monitored repos), and make it easy to triage and mitigate secrets previously committed.\nBluBracket\u0026rsquo;s deep scans identify secrets in git history, and can even identify active secrets so you know which ones are most important.\nPersonally identifiable information (PII) # Unlike secrets, personally identifiable information can\u0026rsquo;t be changed or rotated. As companies face growing liability for mishandling PII, finding and excising it from code is becoming a growing need.\nBluBracket\u0026rsquo;s deep scans identify PII in git history, show teams the PII risk across their codebase, and help remediate. Just as with BluBracket\u0026rsquo;s secret detection tools, BluBracket can block commits of new PII, block PRs with PII, and alert teams any time PII is committed to monitored repos.\nNon-inclusive language (NIL) # Companies and open source communities are both increasingly aware of the role inclusive language plays in attracting and retaining team members in all roles. Non-inclusive language creates both significant brand risks, as well as retention risks.\nBluBracket\u0026rsquo;s tools help identify non-inclusive language throughout the development process, and guide teams to continuous improvement over time.\nInfrastructure as code (IaC) risks # Monitoring infrastructure-as-code for proper configuration before it\u0026rsquo;s applied to the infrastructure reduces risk and improves productivity for teams of all sizes.\nBluBracket\u0026rsquo;s tools automatically and continuously audit IaC throughout the development process, but teams value the guidance most when reviewing pull requests.\nMonitoring git access \u0026amp; configuration # Knowing who and what systems have access to code is critical to supporting modern workflows that often require broad access across the organization, while also protecting organizations and teams against stale permissions and misconfigurations that can emerge over time.\nIdentifying who has access to what, and calling out the best-practice configuration of everything from git hooks to branch protection rules helps guide teams to continuous improvement and ongoing operational security. When teams know they can automatically and continuously audit access, they\u0026rsquo;re both more productive because they can more easily grant access, and more secure because they have tools to\nCode leaks # 👉  This feature is only available to Enterprise customers.   Productive teams need to share code, but when code leaks outside the organization it can risk revealing key details attackers can leverage against the app, or worse.\nMost code leaks are unintentional—private code can be accidentally committed to open source projects or in gists to discuss a problem—but the pathways code moves through frustrates developers and hampers productivity. BluBracket can identify code leaks so they can be remediated before they cause significant harm.\n"
      })
      .add(
      {
        id: 23,
        href: "/how-to/cli/",
        title: "CLI tool",
        description: "This page is a stub. Please help add to it by opening a pull request with new content.",
        content: "This page is a stub. Please help add to it by opening a pull request with new content.\n"
      })
      .add(
      {
        id: 24,
        href: "/how-to/ignore-rules/",
        title: "Configure ignore rules",
        description: "How to set ignore rules",
        content: "Configuring rules for ignoring detected risks can be set at multiple levels:\n On a developer\u0026rsquo;s local machine, with configuration files in the user\u0026rsquo;s home directory Per repo, with configuration files in the repo Globally, for all users and repos in an account, with a configuration file in the account  "
      })
      .add(
      {
        id: 25,
        href: "/how-to/ignore-rules/global/",
        title: "Configuring global ignore rules",
        description: "How to Set Ignore Rules Globally for Tenant",
        content: "Ignore rules can be set up globally for a BluBracket tenant. blubracket-ignore.yaml allows Blubracket users to ignore specific secret types, secret values, or paths. This file must be sent utilizing the Blubracket API’s. When a match of the ignore file is made, an alert will not be created however an event will still be made.\nNote: This will not change any existing alerts/events in the platform.\n  Download integration API key\n  Set environment variable BLUBRACKET_INTEGRATION_KEY\n export BLUBRACKET_INTEGRATION_KEY='TOKEN' $Env:BLUBRACKET_INTEGRATION_KEY='TOKEN'    Create blubracket-ignore.yaml\n# ignores any of the paths below - paths: - oanda_connector.py - MachLearn-23.py # ignores any secret values below - secret_values: - My$uperDuperP@ssw0rd! # ignores any secret types below - secret_types: - aws_access_key_id # per repo-rules - repo_url: (?i)github.com/blubracket/bludemogh/(apache_tomcat_2.0|crm_order_management) rules: - secret_values: - My$uperDuperS3cret! - secret_types: - google_oauth - paths: - helm/values.yaml    Upload yaml file via API using curl:\ncurl -H \u0026quot;Authorization: Bearer ${BLUBRACKET_INTEGRATION_KEY}\u0026quot; --data-binary \u0026quot;@blubracket-ignore.yaml\u0026quot; https://TENANT.blubracket.com/api/public/blubracket-ignore    Confirm upload using:\ncurl -i -H \u0026quot;Authorization: Bearer ${BLUBRACKET_INTEGRATION_KEY}\u0026quot; https://TENANT.blubracket.com/api/public/blubracket-ignore    To delete blubracket-ignore:\ncurl -i -X DELETE -H \u0026quot;Authorization: Bearer ${BLUBRACKET_INTEGRATION_KEY}\u0026quot; https://TENANT.blubracket.com/api/public/blubracket-ignore  Any new secrets, PII or Non-inclusive language ignored will automatically be annotated as “Reviewed as Not Important” and labeled as “Ignore rule”\n  "
      })
      .add(
      {
        id: 26,
        href: "/how-to/ignore-rules/per-repo/",
        title: "Configuring ignore rules per repo",
        description: "How to Set Ignore Rules Ignore Rules For All Users of A Repository",
        content: "In some cases a repo administrator may want to ignore specific secret types, secret values, or paths for all commits by any contributor to that repo. This can be achieved by creating an ignore.yaml file. This file is then placed into the root directory of the repository, within a .blubracket directory at the repo root.\nWhen a match of the ignore file is made, an alert will not be created (but an event will still be generated).\nExample below is a repository called Test1, which has a .blubracket directory and within the folder is the ignore.yaml file.\n  Sample .blubracket/ignore.yaml # # Ignore by file path - paths: - \u0026quot;**/*_test.go\u0026quot; - cli/cmd/default-sensitive-words-config.yaml - cli/cmd/data/* # Ignore by secret value # Equivalent to 'secret_value == my_password OR secret_value == my_token' - secret_values: - my_password - my_token # Ignore by secret type # Equivalent to 'secret_type == password_assignment OR secret_type == secret_assignment' - secret_types: password_assignment  "
      })
      .add(
      {
        id: 27,
        href: "/how-to/ignore-rules/local/",
        title: "Configuring local ignore rules",
        description: "In some cases a developer may want the BluBracket CLI Tool to ignore specific secret types or entire files. This can be achieved by creating a .blubracket-ignore file. This file is then placed into the root directory of the repository.\nThe format of the .blubracket-ignore file is similar to a .gitignore file.\nEmpty lines and lines beginning with # will be ignored\nTo ignore all secrets in a file a glob pattern is recognized.",
        content: "In some cases a developer may want the BluBracket CLI Tool to ignore specific secret types or entire files. This can be achieved by creating a .blubracket-ignore file. This file is then placed into the root directory of the repository.\nThe format of the .blubracket-ignore file is similar to a .gitignore file.\nEmpty lines and lines beginning with # will be ignored\nTo ignore all secrets in a file a glob pattern is recognized. For example **/tests will ignore any secrets found in all files within any directory or sub-directory named “tests”.\nTo ignore a specific secret type, say passwords, you would add the following line: secret_type:password.*, where password.* is a perl compatible regular expression.\n**/tests/** secret_type:password.*  "
      })
      .add(
      {
        id: 28,
        href: "/api/event-alert/",
        title: "Event \u0026 alert API",
        description: "Reading and searching events and alerts.",
        content: "Getting alert counts # Search alerts using filters over attributes\nEndpoint # POST /api/public/alert/count\nRequest # body # One or more filters\n{ \u0026quot;filters\u0026quot;:[ { \u0026quot;id\u0026quot;:\u0026quot;alert_type\u0026quot;, \u0026quot;value\u0026quot;:[\u0026quot;REPO_SCAN_MATCH\u0026quot;], \u0026quot;exact_match\u0026quot;:true }, { \u0026quot;id\u0026quot;:\u0026quot;repo_type\u0026quot;, \u0026quot;value\u0026quot;:[\u0026quot;ENTERPRISE_PUBLIC\u0026quot;,\u0026quot;PUBLIC\u0026quot;], \u0026quot;exact_match\u0026quot;:true }, { \u0026quot;id\u0026quot;:\u0026quot;state\u0026quot;, \u0026quot;value\u0026quot;:[\u0026quot;ACTIVE\u0026quot;], \u0026quot;exact_match\u0026quot;:true } ] }  Response # Success: 200\nNumber of alerts\nSearching alerts # Updating an alert # Update the state of one or more alerts.\n"
      })
      .add(
      {
        id: 29,
        href: "/how-to/iac-checks/",
        title: "IaC checks",
        description: "How to setup infrastructure as code (IaC) scanning",
        content: "Infrastructure as code (IaC) scanning operates differently from other checks in BluBracket. It runs as a job within the CI tool of your choice, and reports its findings back to BluBracket where you can evaluate any found risks. Despite the different operation model, any alerts related to IaC risks are processed by BluBracket as usual, and trigger messages in Slack for example.\nOfficially supported CI systems for IaC scanning include:\n"
      })
      .add(
      {
        id: 30,
        href: "/how-to/iac-checks/bitbucket/",
        title: "Setting up IAC scanning in Bitbucket",
        description: "Configuring infrastructure as code on Bitbucket",
        content: "Step 1: Create Bitbucket Repository Variables:** #   Log into Bitbucket and select a repository where you want to enable Infrastructure as Code scanning.\n  Within the repository, select Repository settings, then Repository variables\n  Create five new Repositories variables\n  Name: DOCKER_HUB_EMAIL\nvalue: blusupport@blubracket.com\nName: DOCKER_HUB_USERNAME\nvalue: blusupport\nName: DOCKER_HUB_TOKEN\nvalue: 085ef825-b366-4636-be2a-8babaf65064f\nName: BLUBRACKET_SERVICE_ENDPOINT\nvalue: BluBracket Tenant name\nExample: https://acme.blubracket.com\nName: BLUBRACKET_INTEGRATION_KEY\nvalue: BluBracket Integration API key\nSteps to create a BluBracket API token: https://support.blubracket.com/hc/en-us/articles/4403018405140-Event-and-Alert-APIs\n  Step 2: Create Pipeline Workflow: #   Within the repository, select Pipelines and either update an existing pipelines.yaml script or create a new one\n  Add the following script to enable Infrastructure as Code scanning:\n  pipelines: pull-requests: '**': - step: name: 'Run BluBracket IaC Scan' image: name: blubracket/iac-checker:0.0.4-beta username: $DOCKER_HUB_USERNAME password: $DOCKER_HUB_TOKEN email: $DOCKER_HUB_EMAIL script: - echo \u0026quot;Running BluBracket IaC scan\u0026quot; - env - cd /home/blubracket/iac-checker - pipenv run run --repo-directory ${BITBUCKET_CLONE_DIR} --source-branch ${BITBUCKET_BRANCH} -target-branch ${BITBUCKET_PR_DESTINATION_BRANCH} --do-not-fail-on-misconfigurations branches: main: - step: name: 'Run Blubracket IaC Scan' image: name: blubracket/iac-checker:0.0.4-beta username: $DOCKER_HUB_USERNAME password: $DOCKER_HUB_TOKEN email: $DOCKER_HUB_EMAIL script: - echo \u0026quot;Running BluBracket IaC scan\u0026quot; - env - cd /home/blubracket/iac-checker - pipenv run run --repo-directory ${BITBUCKET_CLONE_DIR} --do-not-fail-on-misconfigurations --source-branch ${BITBUCKET_BRANCH}  Step 3: Run Workflow #  Ensure workflow runs successfully. This can be verified by expanding the pipenv run karat:     If Infrastructure as Code was detected, you will see entries that indicate a check has been performed (green check indicating scan passed, a red “x” indicating a risk has been detected).       For all detected risks (red “x”), an alert will be posted to the BluBracket portal.    "
      })
      .add(
      {
        id: 31,
        href: "/how-to/iac-checks/github/",
        title: "Setting up IaC scanning in GitHub",
        description: "Configuring infrastructure as code on GitHub",
        content: "Step 1: Create GitHub Repository Secrets:\n  Log into GitHub and select a repository where you want to enable Infrastructure as Code scanning.\n  Within the repository, select settings, then secrets\n  Create three new repositories secrets\n  Name: DOCKER_HUB_USERNAME\nvalue: blusupport\nName: DOCKER_HUB_TOKEN\nvalue: 085ef825-b366-4636-be2a-8babaf65064f\nName: BLUBRACKET_INTEGRATION_KEY\nvalue: BluBracket Integration API key\nSteps to create a BluBracket API token: https://support.blubracket.com/hc/en-us/articles/4403018405140-Event-and-Alert-APIs\n  Step 2: Create Actions Workflow:\n Within the repository, select Actions and either update an existing ci.yaml script or create a new one     Add the following script to enable Infrastructure as Code scanning:  Note: You must update BLUBRACKET_SERVICE_ENDPOINT=https://[Your BluBracket Tenant Name].blubracket.com to your BluBracket tenant name    Example: BLUBRACKET_SERVICE_ENDPOINT=https://acme.blubracket.com\n# This is a basic workflow to help you get started with Actions name: CI # Controls when the workflow will run on: # Triggers the workflow on push or pull request events but only for the main branch push: branches: [ main ] pull_request: branches: [ main ] # Allows you to run this workflow manually from the Actions tab workflow_dispatch: # A workflow run is made up of one or more jobs that can run sequentially or in parallel jobs: # This workflow contains a single job called \u0026quot;build\u0026quot; build: # The type of runner that the job will run on runs-on: ubuntu-latest # Steps represent a sequence of tasks that will be executed as part of the job steps: # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it - uses: actions/checkout@v2 with: fetch-depth: '0' - name: Login to DockerHub uses: docker/login-action@v1 with: username: ${{ secrets.DOCKERHUB_USERNAME }} password: ${{ secrets.DOCKERHUB_TOKEN }} # Runs a set of commands using the runners shell - name: Run Infra as Code Checker run: | set -ax env SOURCE_BRANCH=${GITHUB_REF/refs\\/heads\\//} BLUBRACKET_SERVICE_ENDPOINT=https://[BluBracket Tenant Name] BLUBRACKET_INTEGRATION_KEY=${{ secrets.BLUBRACKET_INTEGRATION_KEY }} docker run -v ${GITHUB_WORKSPACE}:/home/blubracket/iac-checker/repo \\ -u $(id -u):$(id -g) \\ blubracket/iac-checker:0.0.4-beta run \\ --blubracket-service-endpoint ${BLUBRACKET_SERVICE_ENDPOINT} \\ --integration-key ${BLUBRACKET_INTEGRATION_KEY} \\ --source-branch ${GITHUB_HEAD_REF:-${SOURCE_BRANCH}} \\ --target-branch ${GITHUB_BASE_REF:-\u0026quot;\u0026quot;} \\ --do-not-fail-on-misconfigurations  Step 3: Run Workflow #  Ensure workflow runs successfully. This can be verified by expanding the Run Infra As Code Checker karat:     If Infrastructure as Code was detected, you will see entries that indicate a check has been performed (green check indicating scan passed, a red “x” indicating a risk has been detected).       For all detected risks (red “x”), an alert will be posted to the BluBracket portal.  "
      })
      .add(
      {
        id: 32,
        href: "/how-to/iac-checks/gitlab/",
        title: "Setting up IaC scanning in GitLab",
        description: "Configuring infrastructure as code on GitLab",
        content: "Step 1: Create GitLab Repository Variables: #   Log into GitLab and select a repository where you want to enable Infrastructure as Code scanning.\n  Within the repository, select Settings, then CI/CD\n  Expand Variables section and select Add variable\n  Create four new variables:\n  Name: DOCKER_HUB_USERNAME\nvalue: blusupport\nName: DOCKER_HUB_TOKEN\nvalue: 085ef825-b366-4636-be2a-8babaf65064f\nName: BLUBRACKET_SERVICE_ENDPOINT\nvalue: BluBracket Tenant name\nExample: https://acme.blubracket.com\nName: BLUBRACKET_INTEGRATION_KEY\nvalue: BluBracket Integration API key\nSteps to create a BluBracket API token:\nhttps://support.blubracket.com/hc/en-us/articles/4403018405140-Event-and-Alert-API\n  Step 2: Create Pipeline Workflow: #  Within the repository, select CI/CD, then Pipelines to either update an existing ci.yaml script or create a new one via the Editor option:     Add the following script to enable Infrastructure as Code scanning:  infra-as-code-scan: # Use the official docker image. image: docker:latest stage: build services: - docker:dind variables: GIT_STRATEGY: clone GIT_DEPTH: 0 before_script: - docker login -u \u0026quot;$DOCKERHUB_USERNAME\u0026quot; -p \u0026quot;$DOCKERHUB_TOKEN\u0026quot; script: - env - | set -ax docker run -v ${CI_PROJECT_DIR}:/home/blubracket/iac-checker/repo \\ -u $(id -u):$(id -g) \\ blubracket/iac-checker:0.0.4-beta run \\ --blubracket-service-endpoint ${BLUBRACKET_SERVICE_ENDPOINT} \\ --integration-key ${BLUBRACKET_INTEGRATION_KEY} \\ --source-branch ${CI_MERGE_REQUEST_SOURCE_BRANCH_NAME:-${CI_COMMIT_BRANCH}} \\ --target-branch ${CI_MERGE_REQUEST_TARGET_BRANCH_NAME:-\u0026quot;\u0026quot;} \\ --do-not-fail-on-misconfigurations rules: # Run diff workflow on all merge requests - if: '$CI_PIPELINE_SOURCE == \u0026quot;merge_request_event\u0026quot;' # Run branch workflow on pushes to default branch - if: '$CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH'  Step 3: Run Workflow #  Ensure workflow runs successfully. This can be verified by selecting Jobs and expanding the Executing “step_script” karat and scrolling to bottom of page:     If Infrastructure as Code was detected, you will see entries that indicate a check has been performed (green check indicating scan passed, a red “x” indicating a risk has been detected).       For all detected risks (red “x”), an alert will be posted to the BluBracket portal.    "
      })
      .add(
      {
        id: 33,
        href: "/how-to/",
        title: "User guide",
        description: "",
        content: ""
      })
      .add(
      {
        id: 34,
        href: "/how-to/add-user/",
        title: "Adding a BluBracket user",
        description: "How to add a BluBracket user",
        content: "The first thing you might want to do is add your team members to assist with the setup and management. As soon as you log into your BluBracket tenant, you should create at least one additional user for the admin portal:\n  Go to Settings.\n  Click Users.\n     Click Create User      Assign a unique username.\n  Enter the user’s email address.\n  Click Create.\n  "
      })
      .add(
      {
        id: 35,
        href: "/api/",
        title: "API",
        description: "How to access and use the BluBracket API.",
        content: ""
      })
      .add(
      {
        id: 36,
        href: "/api/ci-cd/",
        title: "CI/CD API",
        description: "APIs to monitor the CI/CD workflow.",
        content: ""
      })
      .add(
      {
        id: 37,
        href: "/intro/getting-started/",
        title: "Getting started with BluBracket",
        description: "",
        content: ""
      })
      .add(
      {
        id: 38,
        href: "/how-to/remediate-alerts/",
        title: "Remediate Alerts",
        description: "How to Remediate Alerts",
        content: "There are a number of best practices when it comes to handling secrets in code. Below are a few:\n  Encrypt your secrets\n  Use environmental variables\n  Use a secret manager to store your secrets, like HashiCorp Vault, Azure Key Vault, etc.\n  Once BluBracket has found a secret and you have had a chance to remediate the secret in code, marking it as reviewed will help you easily differentiate it from those that still require action.\n"
      })
      .add(
      {
        id: 39,
        href: "/faq/",
        title: "Frequently asked questions",
        description: "",
        content: ""
      })
      .add(
      {
        id: 40,
        href: "/intro/key-workflows/",
        title: "Key workflows",
        description: "BluBracket code security tools are optimized to prevent risks from getting into code, and to promote the process of continuous improvement that reduces existing risks from code over time.\nPreventing risks in code # As developers, we depend on a quick feedback loop to understand if our code is working and does what is expected. BluBracket tools can offer automated security guidance as part of that feedback loop, in the IDE of your choice, pre-commit, and as part of the CI flow.",
        content: "BluBracket code security tools are optimized to prevent risks from getting into code, and to promote the process of continuous improvement that reduces existing risks from code over time.\nPreventing risks in code # As developers, we depend on a quick feedback loop to understand if our code is working and does what is expected. BluBracket tools can offer automated security guidance as part of that feedback loop, in the IDE of your choice, pre-commit, and as part of the CI flow.\nPre-commit hooks # The BluBracket CLI scan for secrets, PII, and non-inclusive language before commits, to prevent risks from ever getting into repos from the start.\n[screenshot: BluBracket CLI warning of found secret]\nThe CLI supports local configuration with directives in ~/.blubracket/, repo-level configuration for all committers to the repo with directives in .blubracket/ at the repo root, and global configuration for all users of a BluBracket account with directives set at that level. Additionally, inline directives inserted as code comments can be used to mark specific items to ignore, putting decisions about how to handle selected code risks in context with the code.\nUsers can choose to make pre-commit risk detection a blocking or non-blocking feature, to support whatever workflow a developer prefers.\nIDE integration # Popular IDEs, such as VS Code and IntelliJ, present messages from pre-commit hooks in context so you don\u0026rsquo;t have to interrupt your flow to get feedback.\nCI checks # Pre-commit hooks prevent most risks before they ever get into a repo, but CI checks provide an extra layer of guidance for teams.\n[screenshot: GitHub Checks blocking on found secret]\nGitHub is just one supported code server and CI environment.\nAs with pre-commit hooks, CI checks and all BluBracket\u0026rsquo;s server-side code scanning supports repo-level configuration with directives in .blubracket/ at the repo root, and global configuration for all users and all repos in a BluBracket account with directives set at that level. Additionally, inline directives inserted as code comments can be used to mark specific items to ignore, putting decisions about how to handle selected code risks in context with the code.\nAlerts # BluBracket can send alerts any time it finds new risks committed to monitored repos. Messaging a Slack channel is just one option, see the full list of configurations for more.\n[screenshot: BluBracket alert in Slack]\nUnderstanding and taking action on existing risks # Preventing new risks from getting into your code is one of the most important steps to continuous improvement. Understanding your overall code health so you can prioritize and track your efforts at continuous improvement is the next most critical step.\nBluBracket scans your code, including every historical commit, to identify secrets, PII, non-inclusive language, and infrastructure-as-code risks lurking within.\n[screenshot: risk categories in a single repo]\nReviewing those risks in the BluBracket dashboard allows you to see the overall health of your scanned codebase, the areas of highest risk, and find specific issues you can act on now to improve your code security.\nRepo risk scores # [screenshot: risk ranking across repos]\nBluBracket evaluates the health of every scanned repo and sums it up in an easy-to-understand score so you can rank and prioritize effort across your codebase.\nDetailed filtering and reporting # [screenshot: filtering by risk detail]\nFiltering tools allow you to take control to see exactly what risks exist in your codebase and where to target and prioritize efforts based on your specific code condition and threat model.\nAutomated git access \u0026amp; configuration monitoring # It\u0026rsquo;s as important to monitor who and what has access to code as it is to monitor the risks in the code. BluBracket\u0026rsquo;s tools make it easy to support multiple privilege models as needed for your organization.\nPrivilege models that grant developers broad access to code and workflow configuration by default can enable increased productivity and innovation across the codebase, but require automatic and continuous auditing of access and configuration to ensure security.\nLeast privilege models can maximize security, but enforcing it with common git code servers can be difficult without automated, continuous audits of access and configuration.\n[screenshot: git access and configuration alerts]\nBluBracket\u0026rsquo;s git access and configuration monitoring tools make it easy to see who and what has access across the codebase, and alert when access permissions don\u0026rsquo;t conform to policy.\n"
      })
      .add(
      {
        id: 41,
        href: "/intro/integrations/",
        title: "Integrations",
        description: "Local workflow tools #  The BluBracket CLI tool can identify and block secrets before they\u0026rsquo;re committed.\n  Available local tools and integrations\n CLI IntelliJ (via CLI, full plugin coming soon) VS Code (via CLI)  Code servers #  BluBracket scans repositories hosted in GitHub, GitLab, Bitbucket, and others.\n  Certified \u0026amp; supported code servers:\n GitHub GitLab Bitbucket Azure DevOps (contact us for beta) Gerrit (coming soon)  CI servers #  BluBracket can identify risks in the CI workflow via GitHub Checks and others.",
        content: "Local workflow tools #  The BluBracket CLI tool can identify and block secrets before they\u0026rsquo;re committed.\n  Available local tools and integrations\n CLI IntelliJ (via CLI, full plugin coming soon) VS Code (via CLI)  Code servers #  BluBracket scans repositories hosted in GitHub, GitLab, Bitbucket, and others.\n  Certified \u0026amp; supported code servers:\n GitHub GitLab Bitbucket Azure DevOps (contact us for beta) Gerrit (coming soon)  CI servers #  BluBracket can identify risks in the CI workflow via GitHub Checks and others.\n  Certified \u0026amp; supported CI servers:\n GitHub Checks Bitbucket Code Insights Jenkins  Additional integrations are available via our open CI API.\nIdentity, authentication, and authorization #  BluBracket supports Okta and other single sign-on solutions.\n  Certified \u0026amp; supported identity integrations:\n Azure AD Okta Ping SAML GitHub OAuth (coming soon) Gitlab OAuth (coming soon) Bitbucket OAuth (coming soon)  Messaging #  BluBracket integration with Slack can alert teams about code risks in new commits in real time.\n  Certified \u0026amp; supported messaging integrations:\n Slack Microsoft Teams  Ticketing \u0026amp; incident management # [screenshot: Jira ticket created from alert]\nCertified \u0026amp; supported ticketing \u0026amp; incident management integrations:\n Jira ServiceNow PagerDuty Splunk  Build your own #  APIs Webhooks (coming soon)  "
      })
      .add(
      {
        id: 42,
        href: "/how-to/add-code-servers/azure-devops/",
        title: "Adding an Azure DevOps code server",
        description: "How to add an Azure DevOps code server to your tenant",
        content: "Azure DevOps support us available in private beta at this time. Please contact our team for a demo or to join the beta.\n"
      })
      .add(
      {
        id: 43,
        href: "/contact-support/",
        title: "Contact support",
        description: "",
        content: ""
      })
      .add(
      {
        id: 44,
        href: "/authoring-documentation/",
        title: "Authoring documentation",
        description: "How do write and edits the docs in this site.",
        content: "Filesystem organization # Each page is a Hugo page bundle, a directory with a index.md and any attachments/images used in the page.\n The directory name is the URL slug The page title and other metadata are set in the yaml-formatted front matter  Pages can be nested to create a hierarchical structure. If a directory contains multiple pages, the index.md must be prefixed with an underscore (_index.md) to tell Hugo to recurse into the directory for additional pages. Example:\n. └── content ├── _index.md \u0026lt;- https://example.com/ ├── intro | └── index.md \u0026lt;- https://example.com/intro/ ├── how-to | ├── _index.md \u0026lt;- https://example.com/how-to/ | ├── start | | └── index.md \u0026lt;- https://example.com/how-to/start/ | └── finish | └── index.md \u0026lt;- https://example.com/how-to/finish/ └── faq └── index.md \u0026lt;- https://example.com/faq/  Content markup # Content is formatted as Markdown, with support for many of the more advanced Markdown features, as well as a number of shortcodes supported by Hugo.\nLinks # Standard Markdown link syntax is preferred\n[link text](http://example.com/)\nHugo also provides a shortcode that can be used to make it easier to link to pages within the site:\n[Quick Start →]({{\u0026lt; relref \u0026quot;intro\u0026quot; \u0026gt;}})  Images # Small images can be embedded using normal Markdown syntax, but Hugo also provides a {{\u0026lt; figure \u0026gt;}} shortcode ideal for embedding larger images with more metadata.\nFor either syntax, the image should be committed in the directory with the page it appears on, and identified in the front matter resources object:\nresources: - src: demo-figure.jpg  Markdown syntax for small images # ![This kitten icon](demo-img.png)  Output:\nThis adorable kitten icon used as a demo img was downloaded from The Noun Project.\nFigure shortcode for large images # {{\u0026lt; figure src=\u0026quot;demo-figure.jpg\u0026quot; caption=\u0026quot;This adorable kitten used as the demo figure was [downloaded from Unsplash](https://unsplash.com/photos/tuomgxdoIP4).\u0026quot; \u0026gt;}}  All available options documented here.\nOutput:\n This adorable kitten used as the demo figure was downloaded from Unsplash.\n  Video # Many modern browsers accept videos in the img element (via the {{\u0026lt; figure \u0026gt;}} shortcode, for example), but embedding YouTube or Vimeo videos is most compatible.\nYouTube # For a given YouTube URL such as https://www.youtube.com/watch?v=w7Ft2ymGmfc, the YouTube shortcode should be:\n{{\u0026lt; youtube w7Ft2ymGmfc \u0026gt;}}  Output:\n  Vimeo # For a given Vimeo URL such as https://vimeo.com/channels/staffpicks/146022717, the Vimeo shortcode should be:\n{{\u0026lt; vimeo 146022717 \u0026gt;}}  Output:\n  Code # Standard code fencing with single and triple backticks works as expected. Hugo also supports code highlighting with the following shortcode:\n{{\u0026lt; highlight html \u0026gt;}} \u0026lt;section id=\u0026quot;main\u0026quot;\u0026gt; \u0026lt;div\u0026gt; \u0026lt;h1 id=\u0026quot;title\u0026quot;\u0026gt;{{ .Title }}\u0026lt;/h1\u0026gt; {{ range .Pages }} {{ .Render \u0026quot;summary\u0026quot;}} {{ end }} \u0026lt;/div\u0026gt; \u0026lt;/section\u0026gt; {{\u0026lt; /highlight \u0026gt;}}  Output:\n\u0026lt;section id=\u0026#34;main\u0026#34;\u0026gt; \u0026lt;div\u0026gt; \u0026lt;h1 id=\u0026#34;title\u0026#34;\u0026gt;{{ .Title }}\u0026lt;/h1\u0026gt; {{ range .Pages }} {{ .Render \u0026#34;summary\u0026#34;}} {{ end }} \u0026lt;/div\u0026gt; \u0026lt;/section\u0026gt; In-page emphasis # {{\u0026lt; alert icon=\u0026quot;👉\u0026quot; text=\u0026quot;The Alert shortcode should be used sparingly.\u0026quot; \u0026gt;}}  Output:\n👉  The Alert shortcode should be used sparingly.   Table of contents structure # Site menu # The left column table of contents follows the hierarchy set by the filesystem directory structure, but the order of pages at any given level is based on page weight set in the front matter of the page. By default, all pages are ordered by: Weight \u0026gt; Date \u0026gt; LinkTitle \u0026gt; FilePath.\nSee weight: 900 in the front matter in the source of this page as an example.\nPage headings # The right column table of contents follows the order of the headings in the doc.\nStyleguide # Sentence case # All headings in these docs should follow sentence case as described in this APA guide.\n"
      })
      .add(
      {
        id: 45,
        href: "/",
        title: "BluBracket Documentation",
        description: "Track what's in your code, who has access, and where it goes.",
        content: ""
      })
      .add(
      {
        id: 46,
        href: "/contributors/",
        title: "Contributors",
        description: "",
        content: ""
      })
      ;

  search.addEventListener('input', show_results, true);

  function show_results(){
    const maxResult = 5;
    var searchQuery = this.value;
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
}());
