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
        href: "/faq/what-file-types-are-scanned/",
        title: "What file types are scanned?",
        description: "BluBracket scans all text encoded files, as well as many types of archive formats.",
        
          
            
          
            
          
            
          
        
        
        
        content: "filesfile typesscanningSource code and text files # BluBracket scans for code risks in all text encoded files, regardless of language.\nArchives # In addition, we also support scanning binary files. We support the following archive formats with different compression levels.\n Zip Rar Tar   br   bz2   gz   lz4   sz   xz   zstd    7-Zip (Coming soon)  In CLI, scanning archive files is supported using scan-dir subcommand.\nNote: For Bitbucket Cloud \u0026amp; Server, archive files are only scanned during a full repo scan.\n"
        
      })
      .add(
      {
        id: 1,
        href: "/how-to/code-servers/add-code-servers/azure-devops/generate-pat/",
        title: "Generate a personal access token (PAT) in Azure DevOps",
        description: "Creating an Azure DevOps personal access token #  In order for BluBracket to access information within a given Azure DevOps organization or repository, an access token must be set in the tenant.  Generating a token #  Follow the Azure DevOps documentation to create a PAT .  Entering your personal access token #  After generating your personal access token, it needs to be entered into BluBracket.    ",
        
        
          
            
          
        
        
        content: "Creating an Azure DevOps personal access token #  In order for BluBracket to access information within a given Azure DevOps organization or repository, an access token must be set in the tenant.  Generating a token #  Follow the Azure DevOps documentation to create a PAT .  Entering your personal access token #  After generating your personal access token, it needs to be entered into BluBracket.    "
        
      })
      .add(
      {
        id: 2,
        href: "/how-to/code-servers/add-code-servers/github-cloud/generate-pat/",
        title: "Generate a personal access token (PAT) in GitHub",
        description: "Creating a GitHub personal access token #   In order for BluBracket to access information within a given repository, an access token must be uploaded into the tenant.\n  If you want to use a PAT to access resources owned by an organization that uses SAML SSO, you must authorize the PAT. For more information, see \u0026ldquo;About authentication with SAML single sign-on\u0026rdquo; and \u0026ldquo;Authorizing a personal access token for use with SAML single sign-on\u0026rdquo; in the GitHub Enterprise Cloud documentation.",
        
        
          
            
          
        
        
        content: "How To Generate Personal Access Token (PAT) in GitHub – BluBracketCreating a GitHub personal access token #   In order for BluBracket to access information within a given repository, an access token must be uploaded into the tenant.\n  If you want to use a PAT to access resources owned by an organization that uses SAML SSO, you must authorize the PAT. For more information, see \u0026ldquo;About authentication with SAML single sign-on\u0026rdquo; and \u0026ldquo;Authorizing a personal access token for use with SAML single sign-on\u0026rdquo; in the GitHub Enterprise Cloud documentation.\n  In the BluBracket settings page when selecting GitHub Cloud you will be presented with the option to generate a GitHub token with appropriate scopes. You must be signed into the GitHub account that you wish to use with BluBracket for this function to work. This option is only available for GitHub Cloud.\n    Generating a token #    Verify your email address , if it hasn\u0026rsquo;t been verified yet.\n  In the upper-right corner of any page, click your profile photo, then click Settings.     In the left sidebar, click Developer settings.\n  In the left sidebar, click Personal access tokens.\n   Click Generate new token.     Give your token a descriptive name.     To give your token an expiration, select the Expiration drop-down menu, then click a default or use the calendar picker.     Select the scopes, or permissions, you\u0026rsquo;d like to grant this token. The screenshot below shows the scopes or permissions that BluBracket needs.     Click Generate token.     The token will be displayed on the screen and you will have the option to copy it into your clipboard. The token will not be accessible in the future so ensure you have copied it before closing the window.     To use your token to authenticate to an organization that uses SAML single sign-on, authorize the token. For more information, see \u0026ldquo;Authorizing a personal access token for use with SAML single sign-on\u0026rdquo; in the GitHub Enterprise Cloud documentation.  Entering your personal access token #  After generating your personal access token, it needs to be entered into BluBracket. In the BluBracket portal go Settings, and then click Add Code Server.     On the Add Code Server page select GitHub Cloud     After selecting GitHub Cloud you will be presented with the page to enter your organization and personal access token. Enter the organization with the repositories you wish to monitor and paste your personal access token.     Click next and then select All repositories or choose which repositories you wish to monitor.  "
        
      })
      .add(
      {
        id: 3,
        href: "/how-to/code-servers/add-code-servers/github-cloud-oauth/",
        title: "Adding a GitHub Cloud code server on BluBracket Community \u0026 Team Editions",
        description: "Getting started # Go to Settings → Code Servers in your BluBracket account and click the \u0026ldquo;add code server\u0026rdquo; button.\n The Settings → Code Servers page.\n  Selecting to add a GitHub Cloud org as a new code server # Select GitHub Cloud from the list of available code server types.\n The list of code server types in BluBracket.\n  Click the button to continue # Click the button to continue.",
        
        
        
        content: "Getting started # Go to Settings → Code Servers in your BluBracket account and click the \u0026ldquo;add code server\u0026rdquo; button.\n The Settings → Code Servers page.\n  Selecting to add a GitHub Cloud org as a new code server # Select GitHub Cloud from the list of available code server types.\n The list of code server types in BluBracket.\n  Click the button to continue # Click the button to continue.\n Additional details about how to add a GitHub Cloud code server to BluBracket.\n  Select your GitHub Org # BluBracket can monitor repos in any GitHub organization you have permissions to. Simply select the org you wish to monitor (you can add more later!).\n Select the GitHub org to monitor (repos can be chosen in the next step, and additional orgs can be added later).\n  Select your repos # BluBracket can monitor all your repos (including any new ones you add later), or you can choose specific repos to monitor.\n Monitor all GitHub repos in the org, including new ones created later.\n   Specify GitHub repos to monitor.\n  BluBracket will start scanning your repos right away # We\u0026rsquo;ll start scanning your repos immediately, but it can take a moment to scan through each selected repo and all their history. We recommend coming back in a few minutes and refreshing your browser for best results.\n BluBracket starting its initial repo scan after adding a GitHub org.\n  Review the historical findings # The history of your repos can go deep, but BluBracket will dig through everything and give you a comprehensive report on our findings.\n BluBracket\u0026rsquo;s quick view of your code security health.\n  Stay protected # The BluBracket app for GitHub Checks will scan all new pull requests in real time to alert you to any risks while you\u0026rsquo;re reviewing your code and before you merge it.\nBluBracket checks are non-blocking by default.\n The BluBracket app for GitHub Checks helps protect each pull request.\n  "
        
      })
      .add(
      {
        id: 4,
        href: "/faq/can-i-customize-secrets-detected-by-the-cli/",
        title: "Can I customize what secrets are detected by the CLI tool?",
        description: "Yes. BluBracket can identify hundreds of different types of secrets in code, including tokens, keys, IDs and passwords, but the BluBracket CLI tool also supports user-defined regular expressions to match and alert on.\nFor more detailed information on how to add regular expressions to the CLI, look here .",
        
          
            
          
            
          
            
          
        
        
        
        content: "secretsblubracketignoreconfigurationYes. BluBracket can identify hundreds of different types of secrets in code, including tokens, keys, IDs and passwords, but the BluBracket CLI tool also supports user-defined regular expressions to match and alert on.\nFor more detailed information on how to add regular expressions to the CLI, look here .\n"
        
      })
      .add(
      {
        id: 5,
        href: "/faq/can-i-find-secrets-before-committed/",
        title: "Can I find secrets before they are committed?",
        description: "Yes. With the BluBracket Command Line Interface (CLI) tool, you can catch secrets before the code is committed to a repository. Once downloaded and configured, the tool will report any risks found in commits and optionally block commits until they\u0026rsquo;re addressed.\nThe BluBracket CLI tool works with pre-commit hooks, and with any IDEs where the pre-commit hooks are supported.",
        
          
            
          
            
          
            
          
            
          
            
          
        
        
        
        content: "secretsCLICLI toolpre-commitprecommitYes. With the BluBracket Command Line Interface (CLI) tool, you can catch secrets before the code is committed to a repository. Once downloaded and configured, the tool will report any risks found in commits and optionally block commits until they\u0026rsquo;re addressed.\nThe BluBracket CLI tool works with pre-commit hooks, and with any IDEs where the pre-commit hooks are supported.\n"
        
      })
      .add(
      {
        id: 6,
        href: "/faq/do-i-need-a-credit-card/",
        title: "Do I need a credit card to sign up?",
        description: "No credit card is needed to sign up for either the BluBracket Community Edition or the BluBracket Team Edition free trial.\n Learn how to sign up here .",
        
          
            
          
        
        
        
        content: "free trialNo credit card is needed to sign up for either the BluBracket Community Edition or the BluBracket Team Edition free trial.\n Learn how to sign up here .\n"
        
      })
      .add(
      {
        id: 7,
        href: "/faq/do-i-need-a-github-account-to-start-free/",
        title: "Do I need a GitHub account to try BluBracket?",
        description: "A GitHub account is required to create a free account with BluBracket.\nAdditional users can be added to an account via email.",
        
          
            
          
            
          
            
          
        
        
          
            
          
        
        
        content: "free trialoauthGitHubA GitHub account is required to create a free account with BluBracket.\nAdditional users can be added to an account via email.\n"
        
      })
      .add(
      {
        id: 8,
        href: "/faq/does-blubracket-scan-new-commits-to-repositories/",
        title: "Does BluBracket scan new commits to repositories?",
        description: "Yes. Each time a new commit is made to a monitored repository, BluBracket immediately scans the commit for any new risks. Any risks that are found will be displayed in the web dashboard, and alerted through any configured alert integrations.",
        
          
            
          
            
          
            
          
        
        
        
        content: "code serverreposscansYes. Each time a new commit is made to a monitored repository, BluBracket immediately scans the commit for any new risks. Any risks that are found will be displayed in the web dashboard, and alerted through any configured alert integrations.\n"
        
      })
      .add(
      {
        id: 9,
        href: "/faq/does-blubracket-store-modify-my-code/",
        title: "Does BluBracket store/modify my code or any part of my code?",
        description: "No. BluBracket clones repositories, scans them, creates a hash of each of the files (for later comparisons), then the entire checkout from the BluBracket servers. All of this happens within a few seconds, depending on the repository size.\nAfter the scan, BluBracket saves specific metadata to support alerting and reporting on any found risks—things like repository names, file names, contributor IDs, commit IDs and times, etc.\nBluBracket never stores any code after the scan.",
        
          
            
          
            
          
            
          
        
        
        
        content: "codesecurityhow it worksNo. BluBracket clones repositories, scans them, creates a hash of each of the files (for later comparisons), then the entire checkout from the BluBracket servers. All of this happens within a few seconds, depending on the repository size.\nAfter the scan, BluBracket saves specific metadata to support alerting and reporting on any found risks—things like repository names, file names, contributor IDs, commit IDs and times, etc.\nBluBracket never stores any code after the scan. And BluBracket never makes any changes, and does not have permissions to make changes to your code.\n"
        
      })
      .add(
      {
        id: 10,
        href: "/how-to/code-servers/add-code-servers/gitlab-cloud/generate-pat/",
        title: "Generate a personal access token (PAT) in GitLab",
        description: "Entering a token and creating a GitLab personal access token #   In order for BluBracket to access information within a given repository, an access token must be uploaded into the tenant. An administrator for the GitLab account can create a new token by taking the following steps:\n  For GitLab Cloud, once logged into the GitLab interface, select Preferences → Access Tokens. You should end up at a URL similar to the following: https://gitlab.",
        
        
        
        content: "Entering a token and creating a GitLab personal access token #   In order for BluBracket to access information within a given repository, an access token must be uploaded into the tenant. An administrator for the GitLab account can create a new token by taking the following steps:\n  For GitLab Cloud, once logged into the GitLab interface, select Preferences → Access Tokens. You should end up at a URL similar to the following: https://gitlab.com/-/profile/personal_access_tokens   For GitLab Self-Managed, once logged into the GitLab interface, select Preferences → Access Tokens. You should end up at a URL similar to the following: /-/profile/personal_access_tokens\n  Create a ‘Name’ for your PAT and an ‘Expiration Date’ as shown below:\n      Select the following scopes:\n  api\n  read_api\n  These are the permissions that the token must have for BluBracket to communicate correctly with the GitLab account:\n  *See the notes at the bottom of the document for scope requirements.\n Click on the “Create personal access token” button at the bottom of the page.     This token should now be available to copy.  Scope additional requirements #   For permissions, the user associated with the token has to be added as an org member.\n  For the org, user can add themselves as an org to track repositories under their personal account.\n  "
        
      })
      .add(
      {
        id: 11,
        href: "/how-to/code-servers/add-code-servers/bitbucket-cloud/generate-pat/",
        title: "Generate an app password or personal access token (PAT) in Bitbucket",
        description: "In order for BluBracket to access information within a given repository, an App Password (Bitbucket Cloud) or Personal Access Token (Bitbucket Server) must be uploaded into the tenant. An administrator for the Bitbucket account can create a new password or token by taking the following steps:\nBitbucket Cloud #   For Bitbucket Cloud, once logged in to Bitbucket select Personal Settings → App Passwords. You should end up at a URL similar to the following: https://bitbucket.",
        
        
        
        content: "In order for BluBracket to access information within a given repository, an App Password (Bitbucket Cloud) or Personal Access Token (Bitbucket Server) must be uploaded into the tenant. An administrator for the Bitbucket account can create a new password or token by taking the following steps:\nBitbucket Cloud #   For Bitbucket Cloud, once logged in to Bitbucket select Personal Settings → App Passwords. You should end up at a URL similar to the following: https://bitbucket.org/account/settings/app-passwords/\n  Select Create app password\n  Provide a label\n  Select the following permissions\n    Bitbucket server #   For Bitbucket Server, once logged into the Bitbucket interface, select Manage Account → Personal access tokens. You should end up at a URL similar to the following: https://serverURL /plugins/servlet/access-tokens/manage\n  Select Create a token\n  Provide a Token name\n  Select the following permissions\n    "
        
      })
      .add(
      {
        id: 12,
        href: "/faq/how-do-i-add-a-repo/",
        title: "How do I add a repo to monitor?",
        description: "To monitor a code repository in BluBracket, it must be part of a monitored code server.\n👉 How to add code servers For many code servers supported by BluBracket, you have an option of automatically monitoring all repos on the code server, or choosing which repos to monitor. View your configured code servers in Settings → Code Servers, then select \u0026ldquo;edit monitored repositories\u0026rdquo; from the options menu for the code server:",
        
          
            
          
            
          
        
        
        
        content: "code serverreposTo monitor a code repository in BluBracket, it must be part of a monitored code server.\n👉 How to add code servers For many code servers supported by BluBracket, you have an option of automatically monitoring all repos on the code server, or choosing which repos to monitor. View your configured code servers in Settings → Code Servers, then select \u0026ldquo;edit monitored repositories\u0026rdquo; from the options menu for the code server:\n  From there, choose which repositories to monitor:\n  "
        
      })
      .add(
      {
        id: 13,
        href: "/faq/how-to-sign-in-to-blubracket/",
        title: "How do I sign in to BluBracket?",
        description: "Every BluBracket account uses a different domain name to provide you the most secure, reliable, and personalized experience.\nTo sign in to your account, go to the account domain in your welcome email and follow the prompts to sign in.\n BluBracket provides your login link through email.\n  ",
        
          
            
          
            
          
        
        
          
            
          
        
        
        content: "free trialoauthEvery BluBracket account uses a different domain name to provide you the most secure, reliable, and personalized experience.\nTo sign in to your account, go to the account domain in your welcome email and follow the prompts to sign in.\n BluBracket provides your login link through email.\n  "
        
      })
      .add(
      {
        id: 14,
        href: "/faq/how-does-blubracket-code-vulnerability-scanning-compare-to-semgrep/",
        title: "How does BluBracket code vulnerability scanning compare to Semgrep?",
        description: "Detection by Semgrep. Workflow by BluBracket.",
        
          
            
          
            
          
            
          
        
        
        
        content: "semgrepcode vulnerabilitiescode scanningBluBracket\u0026rsquo;s IaC scanning is built on the open source Semgrep scanner, combined with BluBracket\u0026rsquo;s workflow tools optimized to help development teams identify new risks before propagating in code, and knock down the risks already in their code through continuous improvement.\n"
        
      })
      .add(
      {
        id: 15,
        href: "/faq/how-does-blubracket-iac-scanning-compare-to-checkov/",
        title: "How does BluBracket IaC scanning compare to Checkov?",
        description: "Detection by Checkov. Workflow by BluBracket.",
        
          
            
          
            
          
        
        
        
        content: "infrastructure as codeIaCBluBracket\u0026rsquo;s IaC scanning is built on the open source Checkov scanner, combined with BluBracket\u0026rsquo;s workflow tools optimized to help development teams identify new risks before propagating in code, and knock down the risks already in their code through continuous improvement.\n    Checkov BluBracket IaC scanning     IaC scanning ✅ ✅   Graph-based queries ✅ On roadmap   IDE integration ✅ ✅   IaC policy violations ✅ ✅   Custom policies Requires customization On roadmap   Notifications ⛔️ ✅   Dashboards ⛔️ ✅   External dependencies/\nsupply chain tracking ⛔️ On roadmap   Compliance reporting ⛔️ ✅   Repo integration ⛔️ ✅   Central configuration ⛔️ ✅   REST API ⛔️ ✅   CI/CD integrations Limited ✅   Notifications ⛔️ ✅   Support level Community Enterprise    "
        
      })
      .add(
      {
        id: 16,
        href: "/faq/what-does-blubracket-do-with-my-data/",
        title: "How does BluBracket use my data?",
        description: "First and foremost, BluBracket is committed to helping customers improve security. To that end, we minimize the data we have access to, minimize the data we store, and delete code and secrets from BluBracket systems after processing is complete.\nBluBracket only stores metadata about your code and git servers, and uses cryptographic hashes to track and compare files and secrets across different contexts—BluBracket never stores sensitive data after processing.\nThis metadata is retained exclusively for your use on our platform, and is deleted upon termination.",
        
          
            
          
            
          
            
          
        
        
          
            
          
        
        
        content: "data usagepolicyprivacyFirst and foremost, BluBracket is committed to helping customers improve security. To that end, we minimize the data we have access to, minimize the data we store, and delete code and secrets from BluBracket systems after processing is complete.\nBluBracket only stores metadata about your code and git servers, and uses cryptographic hashes to track and compare files and secrets across different contexts—BluBracket never stores sensitive data after processing.\nThis metadata is retained exclusively for your use on our platform, and is deleted upon termination.\nBluBracket uses your data to provide services to you # We use your data to deliver the services you request of us, including providing notifications and alerts about security issues in your code. All customer data is deleted upon termination, and BluBracket minimizes the data we can access and collect as described above.\nBluBracket uses data to measure, analyze, and improve the accuracy of our services to you # We use the information we have to measure and improve the effectiveness of our services to you. Additionally, we may combine that data in aggregate and anonymous form to understand and report on trends, and to optimize services for all.\n"
        
      })
      .add(
      {
        id: 17,
        href: "/faq/how-does-the-blubracket-checks-app-check-my-pull-requests/",
        title: "How does the BluBracket checks app check my pull requests?",
        description: "Overview of how the BluBracket checks app for GitHub works.",
        
          
            
          
            
          
            
          
            
          
        
        
        
        content: "githubGitHub Checkspull requestsCIThe BluBracket app for GitHub Checks scans pull requests for any secrets and reports its findings in the pull request.\n  Operational detail # BluBracket receives a web hook with every pull request in every repo it is installed on. When that webhook is received, BluBracket checks out the branch for the pull request and scans it for any secrets. The app then annotates the PR at lines where it detected secrets, and generates a summary report.\nAll checks typically run and are reported back to GitHub within seconds of receiving the webhook, though repo size and similar factors may increase latency.\nModes of operation # The BluBracket app can run in either advisory or blocking mode. The app detects the same secrets either way, but the advisory mode does not block the pull request. Our data shows that the advisory mode is over 80% effective at stopping new code security debt before it is merged, without the frustration created by blocking PRs.\nInstallation and usage # Full installation and usage details are in the CI checks user guide .\n"
        
      })
      .add(
      {
        id: 18,
        href: "/faq/how-long-does-it-take-to-scan-new-commits/",
        title: "How long does it take for BB to scan new commits?",
        description: "The time it takes for BluBracket to scan new commits depends on the size of the commit. In most cases though the scan is perceived as immediate.",
        
          
            
          
            
          
            
          
        
        
        
        content: "code serverreposcode scanningThe time it takes for BluBracket to scan new commits depends on the size of the commit. In most cases though the scan is perceived as immediate.\n"
        
      })
      .add(
      {
        id: 19,
        href: "/faq/created-free-account-github-can-i-check-gitlab-bitbucket-repos/",
        title: "If I create a free account via GitHub, can I check code on GitLab or Bitbucket servers?",
        description: "Yes! After sign up, you can add repositories via any supported supported code server .",
        
          
            
          
            
          
            
          
        
        
          
            
          
        
        
        content: "free trialoauthGitHubYes! After sign up, you can add repositories via any supported supported code server .\n"
        
      })
      .add(
      {
        id: 20,
        href: "/api/intro-auth-keys/",
        title: "Intro to BluBracket APIs and API keys",
        description: "How to access and use the BluBracket API.",
        
        
          
            
          
        
        
        content: "Event and Alert APIs – BluBracketIn order to make requests into the event and alert APIs, you have to generate an API key, which you use to generate a token, and then you can setup any kind of integration that you would like to make authenticated requests into the Blu Event and Alert APIS.\nGenerating an auth token #   Create an API key by navigating to Settings \u0026gt; API Keys  Generating a key in the BluBracket web console.\n    Enter a name for the key\n  Select Integration from the drop down\n  Select Generate Key\n  Save the JSON/CSV file to your desktop\n  Open the JSON/CSV file and copy the value of the token\n{ \u0026quot;api_keys\u0026quot;: { \u0026quot;https://mycompany.blubracket.com\u0026quot;: { \u0026quot;id\u0026quot;: \u0026quot;BLU-a492144b-f118-4598-991e-f1d4d6209edf\u0026quot;, \u0026quot;key\u0026quot;: \u0026quot;TofsB.....EqwGg\u0026quot;, \u0026quot;token\u0026quot;: \u0026quot;QkxVL....xd0dn\u0026quot; } } }    Testing and using the API token # With the generated token, you can make requests directly to BluBracket APIs. You will need to set the Authorization header and use the provided token as Bearer token.\nHere are some examples using curl:\ncurl -H \u0026quot;Authorization: Bearer TOKEN_FROM_STEP_2\u0026quot; --data '{\u0026quot;filters\u0026quot;:[]}' https://mycompany.blubracket.com/api/public/event/search curl -H \u0026quot;Authorization: Bearer TOKEN_FROM_STEP_2\u0026quot; --data '{\u0026quot;filters\u0026quot;:[]}' https://mycompany.blubracket.com/api/public/alert/search  Note: As per ISO 8601, date formatting requires either the Z or the +00:00 be supplied at the end. This is required to determine that the datetime is in the UTC timezone.\nExample Python code is shown below:\nfrom datetime import datetime, timezone datetime.now(timezone.utc).isoformat()  Output: 2021-07-20T23:45:06.342716+00:00\n"
        
      })
      .add(
      {
        id: 21,
        href: "/intro/",
        title: "Introduction to BluBracket ",
        description: "",
        
        
        
        content: ""
        
      })
      .add(
      {
        id: 22,
        href: "/faq/what-can-i-do-with-blubracket-apis/",
        title: "What can I do with BluBracket APIs?",
        description: "Use BluBracket APIs to integrate with your CI/DC solution. This will help make sure that there are no secrets accidentally checked in to code by any of your team members.\nYou may also leverage BluBracket APIs to export secret found events to other systems in addition to our support for Slack, Splunk, and others.",
        
          
            
          
        
        
        
        content: "APIUse BluBracket APIs to integrate with your CI/DC solution. This will help make sure that there are no secrets accidentally checked in to code by any of your team members.\nYou may also leverage BluBracket APIs to export secret found events to other systems in addition to our support for Slack, Splunk, and others.\n"
        
      })
      .add(
      {
        id: 23,
        href: "/faq/what-can-i-do-with-the-free-trial/",
        title: "What can I do with BluBracket Community Edition?",
        description: "BluBracket Community Edition has all the features of the BluBracket Team Edition , including:\n Risk detection for secrets , PII , non-inclusive language , and infrastructure-as-code , and other risks in code  Workflow support from pre-commit through historical risk remediation  Those tools can help you:\n Understand your overall code health and see the areas of highest risk Implement workflows to stop new risks from getting into code Monitor your code health and watch it improve with every commit   These docs walk through the sign-up process .",
        
          
            
          
        
        
        
        content: "free trialBluBracket Community Edition has all the features of the BluBracket Team Edition , including:\n Risk detection for secrets , PII , non-inclusive language , and infrastructure-as-code , and other risks in code  Workflow support from pre-commit through historical risk remediation  Those tools can help you:\n Understand your overall code health and see the areas of highest risk Implement workflows to stop new risks from getting into code Monitor your code health and watch it improve with every commit   These docs walk through the sign-up process .\n"
        
      })
      .add(
      {
        id: 24,
        href: "/faq/what-does-the-cli-tool-do/",
        title: "What does the BluBracket CLI tool do?",
        description: "The BluBracket CLI tool provides a number of developer conveniences, and is optimized to check for the following at git pre-commit:\n Secrets:the tool identifies hundreds of types of tokens, keys, IDs as well as passwords. Non-inclusive language: the tool identifies non-inclusive language like master, slave, dummy, and blacklist. Custom RegEx: you can configure your own regular expressions that the tool will identify and alert on. Commit Signing:the CLI can check that the commit is going to be signed or not.",
        
          
            
          
            
          
            
          
            
          
        
        
        
        content: "CLICLI toolpre-commitprecommitThe BluBracket CLI tool provides a number of developer conveniences, and is optimized to check for the following at git pre-commit:\n Secrets:the tool identifies hundreds of types of tokens, keys, IDs as well as passwords. Non-inclusive language: the tool identifies non-inclusive language like master, slave, dummy, and blacklist. Custom RegEx: you can configure your own regular expressions that the tool will identify and alert on. Commit Signing:the CLI can check that the commit is going to be signed or not. Large Binary Files - the CLI tool can check that a “large” binary file is going to be committed. By default binary files less than 500 KB will be ignored; if more than 500 KB but less than 10 MB, CLI will warn but allow the commit; if more than 10 MB then the commit will be blocked.  The tool can be configured to ignore, warn, or block when it finds any of the above during a git commit attempt.\n"
        
      })
      .add(
      {
        id: 25,
        href: "/faq/what-permissions-do-you-require/",
        title: "What GitHub permissions does the BluBracket app require?",
        description: "When you authenticate into BluBracket using GitHub Oauth you will see and approve the following permissions:\n Read access to administration, code, members, metadata, organization administration, and pull requests Read and write access to checks, organization hooks, and repository hooks  These permissions allow BluBracket to monitor the repositories that you select and present you with any secrets found as well as contributor/commit information.",
        
          
            
          
            
          
        
        
        
        content: "code serverspermissionsWhen you authenticate into BluBracket using GitHub Oauth you will see and approve the following permissions:\n Read access to administration, code, members, metadata, organization administration, and pull requests Read and write access to checks, organization hooks, and repository hooks  These permissions allow BluBracket to monitor the repositories that you select and present you with any secrets found as well as contributor/commit information.\n"
        
      })
      .add(
      {
        id: 26,
        href: "/faq/supported-ide/",
        title: "What IDEs are supported by the CLI tool?",
        description: "In our testing, any IDE (integrated developer environment) with built-in support for git and pre-commit hooks supports supports the feedback and alerts from the BluBracket CLI tool.\nBluBracket officially supports the following IDEs:\n IntelliJ VS Code  ",
        
          
            
          
            
          
        
        
        
        content: "integrationsIDEIn our testing, any IDE (integrated developer environment) with built-in support for git and pre-commit hooks supports supports the feedback and alerts from the BluBracket CLI tool.\nBluBracket officially supports the following IDEs:\n IntelliJ VS Code  "
        
      })
      .add(
      {
        id: 27,
        href: "/faq/what-if-i-need-more-time-for-my-free-trial/",
        title: "What if I need more time for my free trial?",
        description: "The BluBracket Community Edition is free for individuals and teams of up to 50 developers, and has no time limits.\nFree trials of the BluBracket Team Edition have no time limit. Our goal is to build a product you want to use because it provides value to you.\nAs always, our customer success team is here to help .",
        
          
            
          
        
        
        
        content: "free trialThe BluBracket Community Edition is free for individuals and teams of up to 50 developers, and has no time limits.\nFree trials of the BluBracket Team Edition have no time limit. Our goal is to build a product you want to use because it provides value to you.\nAs always, our customer success team is here to help .\n"
        
      })
      .add(
      {
        id: 28,
        href: "/intro/what-is-blubracket/",
        title: "What is BluBracket?",
        description: "BluBracket is a code and git security suite that identifies risks in your code, monitors who and what has access to your code, and tracks where your code goes outside your git repos.\n  BluBracket use-cases #  Identifying, preventing, and removing risks in code   Secrets   Personally identifiable information (PII)   Non-inclusive language (NIL)   Code analysis (SAST)   Infrastructure-as-code (IAC) risks   Dependency vulnerabilities     Monitoring who and what has access to your code   Monitoring where your code goes   Who is BluBracket for?",
        
        
        
        content: "BluBracket is a code and git security suite that identifies risks in your code, monitors who and what has access to your code, and tracks where your code goes outside your git repos.\n  BluBracket use-cases #  Identifying, preventing, and removing risks in code   Secrets   Personally identifiable information (PII)   Non-inclusive language (NIL)   Code analysis (SAST)   Infrastructure-as-code (IAC) risks   Dependency vulnerabilities     Monitoring who and what has access to your code   Monitoring where your code goes   Who is BluBracket for? # BluBracket is for individual developers, development and appsec teams of all sizes, and enterprise infosec teams.\n  BluBracket Community Edition\nCore BluBracket code security features—including the CLI tools. Available free with no time limit for personal use and teams under 50 devs .\n  BluBracket Team Edition\nAll the BluBracket features to identify risks in your code, and improve code security with every commit. Available as a full-featured, free, no-obligation trial .\n  BluBracket Enterprise Edition\nThe entire suite of BluBracket code security features to identify risks in your code, git access and configuration risks, and track where code goes outside your git repos. Contact our customer success team for a free demo .\n  How BluBracket works # BluBracket has two parallel modes of operation:\n As a SaaS suite providing protection and alerts across a codebase, supporting the detection, analysis, and remediation of security risks in the code and related to code access  As a local code security tool , with integrations to popular IDEs to support immediate identification of potential risks in the code, without the risk of sending that code to remote servers  And BluBracket integrates at multiple points in the SDLC workflow:\n  Before code is committed , via the CLI and pre-commit hooks, and in popular IDEs  Before code is merged , via CI checks (GitHub Checks, Bitbucket Code Insights, Jenkins, etc.)  Actionable alerts in Slack and other tools when new risks are detected  Tools to analyze and understand existing risks , and trend reports to see improvement over time  Where does BluBracket integrate? #   Local/workstation tools  Code servers , like GitHub and Bitbucket  CI servers , like GitHub Actions and Jenkins  Identity, authentication, and authorization systems like SAML and Active Directory  Messaging systems , like Slack  Ticketing \u0026amp; incident management systems , like Jira and PagerDuty  Build your own with APIs and webhooks   How to get started with BluBracket # Our Community Edition is always free and you can do a no-obligation trial of our Team Edition, just sign in here to get started . Interested in all our features? Contact our customer success team for a free Enterprise Edition demo .\n See all the steps to getting started for free, online here .\n"
        
      })
      .add(
      {
        id: 29,
        href: "/faq/what-sensitive-words-does-you-search-for/",
        title: "What non-inclusive language does the BluBracket search for?",
        description: "It has become increasingly important lately to make sure specific sensitive words are not included in code or documentation. These would be words like: master, slave, dummy, blacklist, etc. Just as with secrets, the BluBracket code scanner and CLI tool automatically search for these sensitive words and notifies the developer before they are committed to repositories.\nExample non-inclusive language includes the following words:\n master slave whitelist blacklist whitebox blackbox whitehat blackhat  Let us know if there are any others that you or your company think should be added to the list.",
        
          
            
          
            
          
        
        
          
            
          
        
        
        content: "NILnon-inclusive languageWhat sensitive words does the BluBracket CLI tool search for? – BluBracketIt has become increasingly important lately to make sure specific sensitive words are not included in code or documentation. These would be words like: master, slave, dummy, blacklist, etc. Just as with secrets, the BluBracket code scanner and CLI tool automatically search for these sensitive words and notifies the developer before they are committed to repositories.\nExample non-inclusive language includes the following words:\n master slave whitelist blacklist whitebox blackbox whitehat blackhat  Let us know if there are any others that you or your company think should be added to the list. You can always add your own via the regex configuration as well.\n"
        
      })
      .add(
      {
        id: 30,
        href: "/faq/cli-supported-platforms/",
        title: "What platforms are supported by the BluBracket CLI tool?",
        description: "The BluBracket CLI tool is supported on the following platforms:\n Mac OSX 10.12 and later Linux  Alpine 5 and later Ubuntu 16.04 and later CentOS 7 and later   Windows 10  ",
        
          
            
          
            
          
            
          
            
          
        
        
        
        content: "CLICLI toolpre-commitprecommitThe BluBracket CLI tool is supported on the following platforms:\n Mac OSX 10.12 and later Linux  Alpine 5 and later Ubuntu 16.04 and later CentOS 7 and later   Windows 10  "
        
      })
      .add(
      {
        id: 31,
        href: "/faq/what-repositories-can-i-monitor/",
        title: "What repositories can I monitor?",
        description: "BluBracket can monitor any repositories on a supported code server that you have access to. Fully supported code servers include cloud and enterprise versions of:\n GitHub GitLab Bitbucket  Support for additional code servers is in development, and may be available in private beta.\nOn GitHub, for example, you can monitor repos in your personal GitHub org as well as company/group orgs where you have permission to add apps.",
        
          
            
          
            
          
            
          
        
        
        
        content: "integrationscode serversrepositoriesBluBracket can monitor any repositories on a supported code server that you have access to. Fully supported code servers include cloud and enterprise versions of:\n GitHub GitLab Bitbucket  Support for additional code servers is in development, and may be available in private beta.\nOn GitHub, for example, you can monitor repos in your personal GitHub org as well as company/group orgs where you have permission to add apps.\n"
        
      })
      .add(
      {
        id: 32,
        href: "/faq/what-risks-can-code-vulnerabilities-uncover/",
        title: "What risks can the code vulnerabilty checks uncover?",
        description: "Default code vulnerability scanning policies and capabilities",
        
          
            
          
            
          
            
          
        
        
        
        content: "semgrepcode vulnerabilitiescode scanningBluBracket\u0026rsquo;s code vulnerability scanning runs automatically on every repository. If the repo contains any supported code, it will be scanned for risks according to best-practices recommendations outlined below.\nWhat languages are supported #  C# GitHub Actions YAML Go Java JavaScript Python Ruby TypeScript  What rules are checked # C# # Command injection #  csharp.lang.security.injections.os-command.os-command-injection.yaml  Deserialization #  csharp.lang.security.insecure-deserialization.binary-formatter.insecure-binaryformatter-deserialization.yaml csharp.lang.security.insecure-deserialization.fast-json.insecure-fastjson-deserialization.yaml csharp.lang.security.insecure-deserialization.fs-pickler.insecure-fspickler-deserialization.yaml csharp.lang.security.insecure-deserialization.javascript-serializer.insecure-javascriptserializer-deserialization.yaml csharp.lang.security.insecure-deserialization.los-formatter.insecure-losformatter-deserialization.yaml csharp.lang.security.insecure-deserialization.net-data-contract.insecure-netdatacontract-deserialization.yaml csharp.lang.security.insecure-deserialization.newtonsoft.insecure-newtonsoft-deserialization.yaml csharp.lang.security.insecure-deserialization.soap-formatter.insecure-soapformatter-deserialization.yaml  GitHub Actions YAML #  yaml.github-actions.security.allowed-unsecure-commands.allowed-unsecure-commands.yaml yaml.github-actions.security.pull-request-target-code-checkout.pull-request-target-code-checkout yaml.github-actions.security.run-shell-injection.run-shell-injection.yaml  Go # Crypto #  go.lang.security.audit.crypto.bad_imports.insecure-module-used.yaml go.lang.security.audit.crypto.insecure_ssh.avoid-ssh-insecure-ignore-host-key.yaml go.lang.security.audit.crypto.math_random.math-random-used.yaml go.lang.security.audit.crypto.missing-ssl-minversion.missing-ssl-minversion.yaml go.lang.security.audit.crypto.ssl.ssl-v3-is-insecure.yaml go.lang.security.audit.crypto.tls.tls-with-insecure-cipher.yaml go.lang.security.audit.crypto.use_of_weak_crypto.use-of-DES.yaml go.lang.security.audit.crypto.use_of_weak_crypto.use-of-md5.yaml go.lang.security.audit.crypto.use_of_weak_crypto.use-of-rc4.yaml go.lang.security.audit.crypto.use_of_weak_crypto.use-of-sha1.yaml go.lang.security.audit.crypto.use_of_weak_rsa_key.use-of-weak-rsa-key.yaml go.lang.security.audit.net.use-tls.use-tls.yaml  User I/O sanitization and validation #  go.gorilla.security.audit.handler-assignment-from-multiple-sources.handler-assignment-from-multiple-sources.yaml go.gorilla.security.audit.session-cookie-missing-httponly.session-cookie-missing-httponly.yaml go.gorilla.security.audit.session-cookie-missing-secure.session-cookie-missing-secure.yaml go.lang.security.audit.database.string-formatted-query.string-formatted-query.yaml go.lang.security.audit.net.cookie-missing-httponly.cookie-missing-httponly.yaml go.lang.security.audit.net.cookie-missing-secure.cookie-missing-secure.yaml go.lang.security.audit.net.formatted-template-string.formatted-template-string.yaml go.lang.security.audit.net.pprof.pprof-debug-exposure.yaml go.lang.security.audit.net.unescaped-data-in-htmlattr.unescaped-data-in-htmlattr.yaml go.lang.security.audit.net.unescaped-data-in-js.unescaped-data-in-js.yaml go.lang.security.audit.net.unescaped-data-in-url.unescaped-data-in-url.yaml go.lang.security.audit.net.wip-xss-using-responsewriter-and-printf.wip-xss-using-responsewriter-and-printf.yaml go.lang.security.audit.xss.no-printf-in-responsewriter.no-printf-in-responsewriter.yaml  Other #  go.lang.security.audit.net.bind_all.avoid-bind-to-all-interfaces.yaml go.lang.security.audit.net.dynamic-httptrace-clienttrace.dynamic-httptrace-clienttrace.yaml go.lang.security.audit.reflect-makefunc.reflect-makefunc.yaml go.lang.security.audit.unsafe-reflect-by-name.unsafe-reflect-by-name.yaml  Java #  java.jax-rs.security.insecure-resteasy.default-resteasy-provider-abuse.yaml java.jax-rs.security.insecure-resteasy.insecure-resteasy-deserialization.yaml java.jax-rs.security.jax-rs-path-traversal.jax-rs-path-traversal.yaml java.jboss.security.seam-log-injection.seam-log-injection.yaml java.jjwt.security.jwt-none-alg.jjwt-none-alg.yaml java.lang.security.audit.anonymous-ldap-bind.anonymous-ldap-bind.yaml java.lang.security.audit.bad-hexa-conversion.bad-hexa-conversion.yaml java.lang.security.audit.blowfish-insufficient-key-size.blowfish-insufficient-key-size.yaml java.lang.security.audit.cbc-padding-oracle.cbc-padding-oracle.yaml java.lang.security.audit.command-injection-formatted-runtime-call.command-injection-formatted-runtime-call.yaml java.lang.security.audit.cookie-missing-httponly.cookie-missing-httponly.yaml java.lang.security.audit.cookie-missing-samesite.cookie-missing-samesite.yaml java.lang.security.audit.cookie-missing-secure-flag.cookie-missing-secure-flag.yaml java.lang.security.audit.crlf-injection-logs.crlf-injection-logs.yaml java.lang.security.audit.crypto.des-is-deprecated.des-is-deprecated.yaml java.lang.security.audit.crypto.desede-is-deprecated.desede-is-deprecated.yaml java.lang.security.audit.crypto.ecb-cipher.ecb-cipher.yaml java.lang.security.audit.crypto.no-null-cipher.no-null-cipher.yaml java.lang.security.audit.crypto.no-static-initialization-vector.no-static-initialization-vector.yaml java.lang.security.audit.crypto.rsa-no-padding.rsa-no-padding.yaml java.lang.security.audit.crypto.ssl.avoid-implementing-custom-digests.avoid-implementing-custom-digests.yaml java.lang.security.audit.crypto.ssl.defaulthttpclient-is-deprecated.defaulthttpclient-is-deprecated.yaml java.lang.security.audit.crypto.ssl.insecure-hostname-verifier.insecure-hostname-verifier.yaml java.lang.security.audit.crypto.ssl.insecure-trust-manager.insecure-trust-manager.yaml java.lang.security.audit.crypto.unencrypted-socket.unencrypted-socket.yaml java.lang.security.audit.crypto.use-of-md5.use-of-md5.yaml java.lang.security.audit.crypto.use-of-sha1.use-of-sha1.yaml java.lang.security.audit.crypto.weak-random.weak-random.yaml java.lang.security.audit.crypto.weak-rsa.use-of-weak-rsa-key.yaml java.lang.security.audit.dangerous-groovy-shell.dangerous-groovy-shell.yaml java.lang.security.audit.el-injection.el-injection.yaml java.lang.security.audit.formatted-sql-string.formatted-sql-string.yaml java.lang.security.audit.http-response-splitting.http-response-splitting.yaml java.lang.security.audit.insecure-smtp-connection.insecure-smtp-connection.yaml java.lang.security.audit.jdbc-sql-formatted-string.jdbc-sql-formatted-string.yaml java.lang.security.audit.ldap-entry-poisoning.ldap-entry-poisoning.yaml java.lang.security.audit.ldap-injection.ldap-injection.yaml java.lang.security.audit.object-deserialization.object-deserialization.yaml java.lang.security.audit.ognl-injection.ognl-injection.yaml java.lang.security.audit.overly-permissive-file-permission.overly-permissive-file-permission.yaml java.lang.security.audit.script-engine-injection.script-engine-injection.yaml java.lang.security.audit.sqli.tainted-sql-from-http-request.tainted-sql-from-http-request.yaml java.lang.security.audit.tainted-cmd-from-http-request.tainted-cmd-from-http-request.yaml java.lang.security.audit.tainted-ldapi-from-http-request.tainted-ldapi-from-http-request.yaml java.lang.security.audit.tainted-session-from-http-request.tainted-session-from-http-request.yaml java.lang.security.audit.tainted-xpath-from-http-request.tainted-xpath-from-http-request.yaml java.lang.security.audit.unvalidated-redirect.unvalidated-redirect.yaml java.lang.security.audit.url-rewriting.url-rewriting.yaml java.lang.security.audit.weak-ssl-context.weak-ssl-context.yaml java.lang.security.audit.xml-decoder.xml-decoder.yaml java.lang.security.audit.xss.jsp.use-jstl-escaping.use-jstl-escaping.yaml java.lang.security.audit.xssrequestwrapper-is-insecure.xssrequestwrapper-is-insecure.yaml java.lang.security.httpservlet-path-traversal.httpservlet-path-traversal.yaml java.lang.security.insecure-jms-deserialization.insecure-jms-deserialization.yaml java.lang.security.servletresponse-writer-xss.servletresponse-writer-xss.yaml java.lang.security.xmlinputfactory-external-entities-enabled.xmlinputfactory-external-entities-enabled.yaml java.lang.security.xmlinputfactory-possible-xxe.xmlinputfactory-possible-xxe.yaml java.rmi.security.server-dangerous-class-deserialization.server-dangerous-class-deserialization.yaml java.rmi.security.server-dangerous-object-deserialization.server-dangerous-object-deserialization.yaml java.spring.security.audit.spel-injection.spel-injection.yaml java.spring.security.audit.spring-actuator-fully-enabled.spring-actuator-fully-enabled.yaml java.spring.security.audit.spring-csrf-disabled.spring-csrf-disabled.yaml java.spring.security.audit.spring-jsp-eval.spring-jsp-eval.yaml java.spring.security.audit.spring-unvalidated-redirect.spring-unvalidated-redirect.yaml java.spring.security.unrestricted-request-mapping.unrestricted-request-mapping.yaml  JavaScript #  javascript.bluebird.security.audit.tofastproperties-code-execution.tofastproperties-code-execution.yaml javascript.browser.security.eval-detected.eval-detected.yaml javascript.browser.security.insufficient-postmessage-origin-validation.insufficient-postmessage-origin-validation.yaml javascript.browser.security.open-redirect.js-open-redirect.yaml javascript.browser.security.raw-html-concat.raw-html-concat.yaml javascript.browser.security.wildcard-postmessage-configuration.wildcard-postmessage-configuration.yaml javascript.express.security.audit.express-cookie-settings.express-cookie-session-default-name.yaml javascript.express.security.audit.express-cookie-settings.express-cookie-session-no-domain.yaml javascript.express.security.audit.express-cookie-settings.express-cookie-session-no-expires.yaml javascript.express.security.audit.express-cookie-settings.express-cookie-session-no-httponly.yaml javascript.express.security.audit.express-cookie-settings.express-cookie-session-no-path.yaml javascript.express.security.audit.express-cookie-settings.express-cookie-session-no-secure.yaml javascript.express.security.audit.express-jwt-not-revoked.express-jwt-not-revoked.yaml javascript.express.security.audit.express-path-join-resolve-traversal.express-path-join-resolve-traversal.yaml javascript.express.security.audit.express-xml2json-xxe-event.express-xml2json-xxe-event.yaml javascript.express.security.audit.possible-user-input-redirect.unknown-value-in-redirect.yaml javascript.express.security.audit.res-render-injection.res-render-injection.yaml javascript.express.security.audit.xss.ejs.var-in-script-src.var-in-script-src.yaml javascript.express.security.audit.xss.ejs.var-in-script-tag.var-in-script-tag.yaml javascript.express.security.audit.xss.mustache.var-in-href.var-in-href.yaml javascript.express.security.audit.xss.mustache.var-in-script-tag.var-in-script-tag.yaml javascript.express.security.express-expat-xxe.express-expat-xxe.yaml javascript.express.security.express-jwt-hardcoded-secret.express-jwt-hardcoded-secret.yaml javascript.express.security.express-phantom-injection.express-phantom-injection.yaml javascript.express.security.express-puppeteer-injection.express-puppeteer-injection.yaml javascript.express.security.express-vm-injection.express-vm-compilefunction-context-injection.yaml javascript.express.security.express-vm-injection.express-vm-runincontext-context-injection.yaml javascript.express.security.express-vm-injection.express-vm-runinnewcontext-context-injection.yaml javascript.express.security.express-vm2-injection.express-vm2-context-injection.yaml javascript.express.security.express-wkhtml-injection.express-wkhtmltoimage-injection.yaml javascript.express.security.express-wkhtml-injection.express-wkhtmltopdf-injection.yaml javascript.express.security.express-xml2json-xxe.express-xml2json-xxe.yaml javascript.express.security.require-request.require-request.yaml javascript.fbjs.security.audit.insecure-createnodesfrommarkup.insecure-createnodesfrommarkup.yaml javascript.grpc.security.grpc-nodejs-insecure-connection.grpc-nodejs-insecure-connection.yaml javascript.lang.security.audit.dangerous-spawn-shell.dangerous-spawn-shell.yaml javascript.lang.security.audit.path-traversal.path-join-resolve-traversal.path-join-resolve-traversal.yaml javascript.lang.security.audit.unknown-value-with-script-tag.unknown-value-with-script-tag.yaml javascript.lang.security.audit.vm-injection.vm-compilefunction-code-injection.yaml javascript.lang.security.audit.vm-injection.vm-compilefunction-context-injection.yaml javascript.lang.security.audit.vm-injection.vm-runincontext-code-injection.yaml javascript.lang.security.audit.vm-injection.vm-runincontext-context-injection.yaml javascript.lang.security.audit.vm-injection.vm-runinnewcontext-code-injection.yaml javascript.lang.security.audit.vm-injection.vm-runinnewcontext-context-injection.yaml javascript.lang.security.audit.vm-injection.vm-runinthiscontext-code-injection.yaml javascript.lang.security.audit.vm-injection.vm-script-code-injection.yaml javascript.lang.security.audit.vm-injection.vm-sourcetextmodule-code-injection.yaml javascript.lang.security.detect-child-process.detect-child-process.yaml javascript.lang.security.detect-disable-mustache-escape.detect-disable-mustache-escape.yaml javascript.lang.security.detect-eval-with-expression.detect-eval-with-expression.yaml javascript.lang.security.detect-non-literal-require.detect-non-literal-require.yaml javascript.node-expat.security.audit.expat-xxe.expat-xxe.yaml javascript.passport-jwt.security.passport-hardcode.hardcoded-passport-secret.yaml javascript.sax.security.audit.sax-xxe.sax-xxe.yaml javascript.sequelize.security.audit.sequelize-enforce-tls.sequelize-enforce-tls.yaml javascript.sequelize.security.audit.sequelize-tls-disabled-cert-validation.sequelize-tls-disabled-cert-validation.yaml javascript.sequelize.security.audit.sequelize-weak-tls-version.sequelize-weak-tls-version.yaml javascript.serialize-javascript.security.audit.unsafe-serialize-javascript.unsafe-serialize-javascript.yaml javascript.shelljs.security.shelljs-exec-injection.shelljs-exec-injection.yaml javascript.xml2json.security.audit.xml2json-xxe.xml2json-xxe.yaml  Python #  python.boto3.security.hardcoded-token.hardcoded-token.yaml python.cryptography.security.insecure-cipher-algorithms.insecure-cipher-algorithm-blowfish.yaml python.cryptography.security.insecure-cipher-algorithms.insecure-cipher-algorithm-idea.yaml python.cryptography.security.insecure-cipher-algorithms.insecure-cipher-algorithm-rc4.yaml python.cryptography.security.insecure-cipher-mode-ecb.insecure-cipher-mode-ecb.yaml python.cryptography.security.insecure-hash-algorithms.insecure-hash-algorithm-md5.yaml python.cryptography.security.insecure-hash-algorithms.insecure-hash-algorithm-sha1.yaml python.cryptography.security.insufficient-dsa-key-size.insufficient-dsa-key-size.yaml python.cryptography.security.insufficient-ec-key-size.insufficient-ec-key-size.yaml python.cryptography.security.insufficient-rsa-key-size.insufficient-rsa-key-size.yaml python.django.security.audit.avoid-insecure-deserialization.avoid-insecure-deserialization.yaml python.django.security.audit.avoid-mark-safe.avoid-mark-safe.yaml python.django.security.audit.csrf-exempt.no-csrf-exempt.yaml python.django.security.audit.django-ratelimit.missing-ratelimit.missing-ratelimit.yaml python.django.security.audit.django-rest-framework.missing-throttle-config.missing-throttle-config.yaml python.django.security.audit.query-set-extra.avoid-query-set-extra.yaml python.django.security.audit.raw-query.avoid-raw-sql.yaml python.django.security.audit.secure-cookies.django-secure-set-cookie.yaml python.django.security.audit.templates.debug-template-tag.debug-template-tag.yaml python.django.security.audit.unvalidated-password.unvalidated-password.yaml python.django.security.audit.xss.template-blocktranslate-no-escape.template-blocktranslate-no-escape.yaml python.django.security.audit.xss.template-href-var.template-href-var.yaml python.django.security.audit.xss.template-translate-as-no-escape.template-translate-as-no-escape.yaml python.django.security.audit.xss.var-in-script-tag.var-in-script-tag.yaml python.django.security.passwords.password-empty-string.password-empty-string.yaml python.django.security.passwords.use-none-for-password-default.use-none-for-password-default.yaml python.flask.security.audit.app-run-param-config.avoid_app_run_with_bad_host.yaml python.flask.security.audit.app-run-security-config.avoid_using_app_run_directly.yaml python.flask.security.audit.debug-enabled.debug-enabled.yaml python.flask.security.audit.hardcoded-config.avoid_hardcoded_config_DEBUG.yaml python.flask.security.audit.hardcoded-config.avoid_hardcoded_config_ENV.yaml python.flask.security.audit.hardcoded-config.avoid_hardcoded_config_SECRET_KEY.yaml python.flask.security.audit.hardcoded-config.avoid_hardcoded_config_TESTING.yaml python.flask.security.audit.secure-set-cookie.secure-set-cookie.yaml python.flask.security.audit.wtf-csrf-disabled.flask-wtf-csrf-disabled.yaml python.flask.security.insecure-deserialization.insecure-deserialization.yaml python.flask.security.open-redirect.open-redirect.yaml python.flask.security.secure-static-file-serve.avoid_send_file_without_path_sanitization.yaml python.flask.security.xss.audit.template-href-var.template-href-var.yaml python.flask.security.xss.audit.template-unquoted-attribute-var.template-unquoted-attribute-var.yaml python.jinja2.security.audit.autoescape-disabled.autoescape-disabled.yaml python.lang.security.audit.conn_recv.multiprocessing-recv.yaml python.lang.security.audit.dangerous-spawn-process.dangerous-spawn-process.yaml python.lang.security.audit.dangerous-system-call.dangerous-system-call.yaml python.lang.security.audit.dynamic-urllib-use-detected.dynamic-urllib-use-detected.yaml python.lang.security.audit.eval-detected.eval-detected.yaml python.lang.security.audit.exec-detected.exec-detected.yaml python.lang.security.audit.ftplib.ftplib.yaml python.lang.security.audit.httpsconnection-detected.httpsconnection-detected.yaml python.lang.security.audit.mako-templates-detected.mako-templates-detected.yaml python.lang.security.audit.marshal.marshal-usage.yaml python.lang.security.audit.network.bind.avoid-bind-to-all-interfaces.yaml python.lang.security.audit.network.disabled-cert-validation.disabled-cert-validation.yaml python.lang.security.audit.network.http-not-https-connection.http-not-https-connection.yaml python.lang.security.audit.paramiko-implicit-trust-host-key.paramiko-implicit-trust-host-key.yaml python.lang.security.audit.paramiko.paramiko-exec-command.paramiko-exec-command.yaml python.lang.security.audit.ssl-wrap-socket-is-deprecated.ssl-wrap-socket-is-deprecated.yaml python.lang.security.audit.subprocess-shell-true.subprocess-shell-true.yaml python.lang.security.audit.system-wildcard-detected.system-wildcard-detected.yaml python.lang.security.audit.telnetlib.telnetlib.yaml python.lang.security.audit.weak-ssl-version.weak-ssl-version.yaml python.lang.security.deserialization.avoid-pyyaml-load.avoid-pyyaml-load.yaml python.lang.security.deserialization.avoid-unsafe-ruamel.avoid-unsafe-ruamel.yaml python.lang.security.deserialization.pickle.avoid-cPickle.yaml python.lang.security.deserialization.pickle.avoid-dill.yaml python.lang.security.deserialization.pickle.avoid-pickle.yaml python.lang.security.deserialization.pickle.avoid-shelve.yaml python.lang.security.insecure-hash-algorithms.insecure-hash-algorithm-md5.yaml python.lang.security.insecure-hash-algorithms.insecure-hash-algorithm-sha1.yaml python.lang.security.insecure-hash-function.insecure-hash-function.yaml python.lang.security.unquoted-csv-writer.unquoted-csv-writer.yaml python.lang.security.unverified-ssl-context.unverified-ssl-context.yaml python.lang.security.use-defused-xml.use-defused-xml.yaml python.lang.security.use-defused-xmlrpc.use-defused-xmlrpc.yaml python.pycryptodome.security.insecure-cipher-algorithm.insecure-cipher-algorithm-blowfish.yaml python.pycryptodome.security.insecure-cipher-algorithm.insecure-cipher-algorithm-des.yaml python.pycryptodome.security.insecure-cipher-algorithm.insecure-cipher-algorithm-rc2.yaml python.pycryptodome.security.insecure-cipher-algorithm.insecure-cipher-algorithm-rc4.yaml python.pycryptodome.security.insecure-cipher-algorithm.insecure-cipher-algorithm-xor.yaml python.pycryptodome.security.insecure-hash-algorithm.insecure-hash-algorithm-md2.yaml python.pycryptodome.security.insecure-hash-algorithm.insecure-hash-algorithm-md4.yaml python.pycryptodome.security.insecure-hash-algorithm.insecure-hash-algorithm-md5.yaml python.pycryptodome.security.insecure-hash-algorithm.insecure-hash-algorithm-sha1.yaml python.pycryptodome.security.insufficient-dsa-key-size.insufficient-dsa-key-size.yaml python.pycryptodome.security.insufficient-rsa-key-size.insufficient-rsa-key-size.yaml python.requests.security.disabled-cert-validation.disabled-cert-validation.yaml python.requests.security.no-auth-over-http.no-auth-over-http.yaml  Ruby #  ruby.lang.security.dangerous-exec.dangerous-exec.yaml ruby.lang.security.dangerous-subshell.dangerous-subshell.yaml ruby.lang.security.hardcoded-http-auth-in-controller.hardcoded-http-auth-in-controller.yaml ruby.lang.security.mass-assignment-protection-disabled.mass-assignment-protection-disabled.yaml ruby.lang.security.missing-csrf-protection.missing-csrf-protection.yaml ruby.lang.security.unprotected-mass-assign.mass-assignment-vuln.yaml ruby.rails.security.audit.xss.avoid-content-tag.avoid-content-tag.yaml ruby.rails.security.audit.xss.avoid-html-safe.avoid-html-safe.yaml ruby.rails.security.audit.xss.avoid-raw.avoid-raw.yaml ruby.rails.security.audit.xss.avoid-render-inline.avoid-render-inline.yaml ruby.rails.security.audit.xss.avoid-render-text.avoid-render-text.yaml ruby.rails.security.audit.xss.manual-template-creation.manual-template-creation.yaml ruby.rails.security.audit.xss.templates.dangerous-link-to.dangerous-link-to.yaml  TypeScript #  typescript.react.security.audit.react-css-injection.react-css-injection.yaml typescript.react.security.audit.react-dangerouslysetinnerhtml.react-dangerouslysetinnerhtml.yaml typescript.react.security.audit.react-http-leak.react-http-leak.yaml typescript.react.security.audit.react-missing-noreferrer.react-missing-noreferrer.yaml typescript.react.security.audit.react-props-injection.react-props-injection.yaml typescript.react.security.react-insecure-request.react-insecure-request.yaml  Implementation # BluBracket\u0026rsquo;s code vulnerability scanning is powered by open source Semgrep , and adds BluBracket workflow and reporting.\n"
        
      })
      .add(
      {
        id: 33,
        href: "/faq/what-risks-can-the-iac-scans-find/",
        title: "What risks can the infrastructure-as-code (IaC) checks uncover?",
        description: "Default IaC scanning policies and capabilities",
        
          
            
          
            
          
        
        
        
        content: "infrastructure as codeIaCBluBracket\u0026rsquo;s infrastructure-as-code (IaC) scanning runs automatically on every repository. If there are any supported IaC-related files, they\u0026rsquo;ll be scanned for risks according to best-practices recommendations outlined below.\nWhat IaC file types are supported #  Terraform (for AWS, GCP, Azure and OCI) CloudFormation (including AWS SAM) Azure Resource Manager (ARM) Serverless framework Helm charts Kubernetes Docker  What rules are checked # AWS General #  AWS EBS Volumes are not encrypted AWS EBS Snapshots are not encrypted AWS EBS volumes do not have encrypted launch configurations AWS RDS DB cluster data is not encrypted at rest Data stored in SageMaker is not securely encrypted at rest AWS SNS topic server-side encryption is not enabled AWS SQS server-side encryption is not enabled Amazon DynamoDB Point-In-Time Recovery (PITR) is not enabled AWS ElastiCache Redis cluster data is not encrypted at rest AWS ElastiCache Redis cluster data in-transit is not encrypted AWS ElastiCache Replication Group data in-transit is not encrypted AWS Elastic File System (EFS) data is not encrypted at rest AWS Kinesis streams server-side encryption is not enabled Amazon Neptune storage is not securely encrypted Amazon DynamoDB Accelerator (DAX) is not securely encrypted at rest Amazon Elastic Container Registry (ECR) image tags are not immutable AWS Redshift cluster data is not encrypted at rest Amazon CloudFront distribution does not have Web Application Firewall (WAF) enabled Amazon DocumentDB data is not securely encrypted at rest AWS Athena Database is not securely encrypted at rest AWS CodeBuild project encryption is disabled AWS EC2 Instance Metadata Service version 1 (IMDSv1) is enabled Amazon Managed Streaming for Apache Kafka (MSK) cluster encryption at rest and in transit is not enabled AWS Athena workgroup does not prevent disabling encryption AWS Glue Data Catalog encryption is not enabled Amazon Aurora data is not securely encrypted at rest Elastic File System (EFS) volumes in ECS task definitions do not have encryption in transit enabled AWS SageMaker notebook instance data is not encrypted at rest AWS Glue security configuration encryption is not enabled Amazon Neptune cluster instance is publicly available AWS Load Balancer listener is not using TLS 1.2 AWS Load Balancer does not have deletion protection Amazon Elastic MapReduce (EMR) cluster is not configured with Kerberos authentication AWS Lambda function is not configured for function-level concurrent execution limit AWS Lambda does not have dead letter queue configured AWS Lambda Function is not assigned to access within VPC Amazon DynamoDB tables are not encrypted Elastic load balancers do not use SSL Certificates provided by AWS Certificate Manager AWS KMS Customer Managed key rotation is disabled AWS RDS instance does not have backup policy Amazon ElastiCache Redis clusters do not have automatic backup turned on AWS EC2 instance is not EBS optimized AWS Elastic Container Registry (ECR) repository encryption is disabled AWS RDS cluster/instance has deletion protection disabled AWS RDS Global Cluster data is not encrypted Amazon Redshit cluster version upgrades are disabled Amazon Redshit cluster data is not encrypted using AWS KMS AWS S3 bucket lock configuration is disabled AWS S3 bucket cross-region replication disabled AWS S3 bucket objects are not encrypted using AWS KMS AWS RDS instance does not have Multi-AZ enabled AWS Elastic Container Registry (ECR) image scan on push is not enabled AWS resource does not have any tags set EBS volume attached to AWS EC2 Instance is not encrypted Amazon GuardDuty is not enabled to specific org/region AWS RDS cluster does not have AWS Backup\u0026rsquo;s backup plan AWS EBS volume does not have AWS Backup\u0026rsquo;s backup plan AWS Redshift cluster does not have AWS Backup\u0026rsquo;s backup plan Amazon DynamoDB table does not have Auto Scaling enabled Amazon Elastic File System (EFS) does not have AWS Backup\u0026rsquo;s backup plan Dynamodb point in time recovery is not enabled for global tables Backup Vault is not encrypted at rest using KMS CMK Glacier Vault access policy is public and not restricted to specific services or principals SQS queue policy is public and access is not restricted to specific services or principals SNS topic policy is public and access is not restricted to specific services or principals QLDB ledger permissions mode is not set to STANDARD EMR cluster is not configured with SSE KMS for data at rest encryption (Amazon S3 with EMRFS) AWS Image Builder component not encrypted using Customer Managed Key AWS S3 Object Copy not encrypted using Customer Managed Key AWS Doc DB not encrypted using Customer Managed Key AWS EBS Snapshot Copy not encrypted using Customer Managed Key AWS Elastic File System (EFS) not encrypted using Customer Managed Key AWS Kinesis streams encryption using default KMS keys instead of Customer\u0026rsquo;s Managed Master Keys AWS S3 Object Copy not encrypted using Customer Managed Key AWS Sagemaker domain not encrypted using Customer Managed Key AWS Redshift Cluster not encrypted using Customer Managed Key AWS EBS Volume not encrypted using Customer Managed Key AWS Elasticache replication group not configured with CMK key** AWS Glue component has no security configuration associated Route53 A Record does not have Attached Resource  AWS Networking #  AWS Application Load Balancer (ALB) protocol is not HTTPS Not every Security Group rule has a description AWS Security Group allows all traffic on SSH port 22 Security Group allows ingress from 0.0.0.0/0 to port 3389 Amazon CloudFront distribution ViewerProtocolPolicy is not set to HTTPS Amazon DocumentDB Transport Layer Security (TLS) is disabled AWS SageMaker notebook instance is not configured with direct internet access feature AWS VPC endpoint service is not configured for manual acceptance AWS Application Load Balancer (ALB) does not drop HTTP headers AWS ElasticSearch cluster is not in a VPC AWS Elastic Load Balancer (ELB) has cross-zone load balancing disabled Not all Network Access Control Lists (NACLs) are attached to subnets Security Groups are not attached to EC2 instances or ENIs AWS S3 Bucket does not have public access blocks Amazon EMR cluster security groups are open to the world AWS Default Security Group does not restrict all traffic Auto scaling groups associated with a load balancer do not use elastic load balancing health checks AWS EC2 instance is not configured with VPC Not all Eastic IP addresses allocated to a VPC are attached to EC2 instances or NAT Gateways Application Load Balancer (ALB) does not redirect HTTP requests into HTTPS Transfer Server is publicly exposed CloudFront web distribution that allow TLS versions 1.0 or lower AWS WAF does not have associated rules WAF allows message lookup in Log4j2 Application Load Balancer (ALB) not configured with AWS Web Application Firewall v2 (AWS WAFv2) Public API gateway not configured with AWS Web Application Firewall v2 (AWS WAFv2)  AWS Logging #  AWS KMS Customer Managed Key (CMK) rotation is not enabled AWS CloudTrail logs are not encrypted using AWS KMS Customer Managed Key (CMK) AWS CloudTrail log validation is not enabled in all regions Amazon MQ Broker logging is not enabled Container insights are not enabled on ECS cluster AWS CloudWatch log groups do not specify retention days AWS CloudTrail is not enabled in all regions AWS Redshift database does not have audit logging enabled Amazon API Gateway does not have X-Ray tracing enabled AWS Global Accelerator does not have Flow logs enabled Amazon API Gateway does not have access logging enabled Amazon Managed Streaming for Apache Kafka (MSK) cluster logging is not enabled Amazon DocumentDB logging is not enabled Amazon CloudFront distribution has access logging disabled AWS Classic Elastic Load Balancer (ELB) does not have access logging enabled AWS Elastic Load Balancer (ELB) does not have access logging enabled Amazon Neptune logging is not enabled Enhanced monitoring for Amazon RDS instances is enabled AWS config is not enabled in all regions AWS CloudFormation stack configured without SNS topic Detailed monitoring for EC2 instances is disabled Amazon CloudWatch logs are not encrypted at rest using KMS CMKs Amazon API Gateway stage does not have logging level defined appropriately AWS CloudTrail trail is not integrated with CloudWatch Log AWS VPC Flow logs not enabled Postgres RDS does not have Query Logging enabled Postgres RDS does not have Query Logging enabled AWS WAF2 does not have a Logging Configuration  AWS IAM #  AWS IAM policy allows full administrative privileges AWS IAM password policy does not expire within 90 days AWS IAM password policy does not have a minimum of 14 characters AWS IAM password policy does not have a lowercase character AWS IAM password policy does not have a number AWS IAM password policy allows password reuse AWS IAM password policy does not have a symbol AWS IAM password policy does not have an uppercase character AWS IAM policies are not only attached to Groups and Roles AWS IAM policy documents allow * (asterisk) as a statement\u0026rsquo;s action AWS IAM role does not allow only specific services or principals to be assumed AWS IAM policy allows assume role permission across all services AWS IAM policy allows full administrative privileges AWS IAM policy documents allow * (asterisk) as a statement\u0026rsquo;s action AWS SQS policy documents allow * (asterisk) as a statement\u0026rsquo;s action AWS IAM policies allow credentials exposure for ECR AWS IAM policies allow data exfiltration without resource constraints AWS IAM policies allow modification of policies and exposes resources AWS IAM policies allow write access without constraint IAM authentication for Amazon RDS clusters is disabled Respective logs of Amazon RDS are disabled AWS IAM groups do not include at least one IAM user Not all AWS IAM users are members of at least one IAM group IAM User has access to the console  AWS ElasticSearch #  AWS Elasticsearch domain encryption for data at rest is disabled AWS Elasticsearch does not have node-to-node encryption enabled AWS Elasticsearch domains do not have enforce HTTPS AWS Elasticsearch domain logging is not enabled  AWS Public #  AWS RDS database instance is publicly accessible AWS ECR repository is exposed to public Amazon API gateway methods are publicly accessible Amazon MQ is publicly accessible AWS Redshift clusters should not be publicly accessible AWS EC2 instances with public IP and associated with security groups have Internet access AWS Database Migration Service (DMS) replication instance should be publicly accessible  AWS S3 #  AWS access logging is not enabled on S3 buckets Data stored in the AWS S3 bucket is not securely encrypted at rest AWS S3 Bucket ACL grants READ permission to everyone AWS S3 object versioning is disabled AWS S3 bucket has block public ACLs disabled AWS S3 bucket BlockPublicPolicy is not set to True AWS S3 bucket IgnorePublicAcls is not set to True AWS S3 bucket RestrictPublicBucket is not set to True AWS S3 bucket is publicly writable AWS S3 bucket allows an action with any Principal AWS S3 bucket policy locks out all but root user  AWS EKS #  AWS EKS control plane logging is disabled AWS EKS cluster security group overly permissive to all traffic AWS EKS cluster endpoint access is publicly enabled AWS EKS cluster does not have secrets encryption enabled AWS EKS node group does not have implicit SSH access from 0.0.0.0/0 AWS EKS Kubernetes secrets are not encrypted  AWS Secrets #  AWS access keys and secrets are hard coded in infrastructure AWS Lambda function\u0026rsquo;s environment variables expose secrets AWS EC2 Instance user data exposes secrets  AWS Serverless #  AWS Lambda functions do not have tracing enabled  Azure General #  Azure VM data disk is encrypted with the default encryption key instead of ADE/CMK Azure App Service Web app authentication is Off Standard pricing tier is not selected No security contact phone number is present Send email notification for high severity alerts is not enabled Send email notification for high severity alerts to admins is not enabled Azure SQL Server threat detection alerts are not enabled for all threat types Azure SQL server send alerts to field value is not set MSSQL servers do not have email service and co-administrators enabled Not all keys have an expiration date Azure key vault is not recoverable A retention period of less than 90 days is not specified Azure Linux scale set does not use an SSH key Virtual Machine extensions are installed Azure Security Center Defender is set to Off for servers Azure function app authentication is set to Off CORS allows resource to access app services Azure Security Center Defender is set to Off for app service CORS allows resources to access function apps Azure function app does not use HTTP 2.0 Azure Security Center Defender is set to Off for Azure SQL database servers Managed identity provider is not enabled for app services Remote debugging is enabled for app services Automation account variables are not encrypted Azure Data Explorer does not use disk encryption Azure Data Explorer does not use double encryption Azure Batch account does not use key vault to encrypt data FTP Deployments are enabled Azure Defender is set to Off for SQL servers on machines Azure App Service Web app does not use the latest .Net Core version Azure App Service Web app does not use the latest PHP version Azure App Service Web app does not use the latest Python version Azure App Service Web app does not use the latest Java version Azure Security Center Defender is set to Off for storage Azure Security Center Defender is set to Off for Kubernetes Azure Defender is set to Off for container registries Azure Security Center Defender set to Off for Key Vault App services do not use Azure files Azure Virtual Machines are not utilizing managed disks Managed disks do not use a specific set of disk encryption sets for customer-managed key encryption My SQL server disables geo-redundant backups Automatic OS image patching is disabled for Virtual Machine scale sets MySQL server disables infrastructure encryption Virtual Machine scale sets do not have encryption at host enabled Cosmos DB Accounts do not have CMKs encrypting data at rest PostgreSQL server disables geo-redundant backups Azure Data Factory does not use Git repository for source control Unencrypted Data Lake Store accounts Key vault disables purge protection Key vault does not enable soft delete Key vault key is not backed by HSM Key vault secrets do not have content_type set My SQL server does not enable Threat Detection policy PostgreSQL server does not enable Threat Detection policy MariaDB server does not enable geo-redundant backups PostgreSQL server does not enable infrastructure encryption Security contact emails are not set Storage for critical data are not encrypted with CMKs Azure SQL server ADS Vulnerability Assessment is disabled Azure SQL server ADS Vulnerability Assessment Periodic recurring scans is disabled Azure SQL server ADS VA Send scan reports to is not configured Azure SQL server ADS VA Also send email notifications to admins and subscription owners is disabled SQL servers do not have Azure Active Directory admin configured Azure Virtual Machines are not utilizing managed disks Microsoft Antimalware is not configured to automatically update Virtual Machines Azure Data Explorer encryption at rest does not use a CMK Virtual Machines are not backed up using Azure backup SQL servers do not enable data security policy Unattached disks are not encrypted Azure data factories are not encrypted with a CMK MySQL server does not enable CMKs for encryption PostgreSQL server does not enable CMKs for encryption Azure storage account encryption CMKs are disabled  Azure Logging #  Azure Network Watcher NSG flow logs retention is less than 90 days Azure SQL server auditing is disabled Azure SQL server audit log retention is less than 91 days Storage logging for queue service does not have read, write, and delete requests enabled Activity log retention is set to less than 365 days Log profile is not configured to capture all activities App service does not enable HTTP logging App service disables detailed error messages App service does not enable failed request tracing The storage container storing activity logs is publicly accessible Azure storage account logging for tables is disabled Azure storage account logging for blobs is disabled  Azure IAM #  App Service is not registered with an Azure Active Directory account Azure subscriptions with custom roles are overly permissive  Azure Networking #  Azure instance does not authenticate using SSH keys RDP Internet access is not restricted SSH Internet access is not restricted SQL databases allow ingress from 0.0.0.0/0 Azure App Service Web app does not redirect HTTP to HTTPS Web App does not use the latest version of TLS encryption Web App does not have incoming client certificates enabled Web App does not use the latest version of HTTP MySQL server databases do not have Enforce SSL connection enabled Azure PostgreSQL database server with SSL connection is disabled Azure PostgreSQL database server with log checkpoints parameter is disabled Azure PostgreSQL database server with log connections parameter is disabled Azure PostgreSQL database server with connection throttling parameter is disabled Public access level for Blob Containers is not set to private Azure Storage Account default network access is set to Allow Azure Storage Account Trusted Microsoft Services access is not enabled MariaDB servers do not have Enforce SSL connection enabled Azure Synapse Workspaces do not enable managed virtual networks Azure storage account allows blob container with public access Storage accounts without secure transfer enabled Azure file sync enables public network access PostgreSQL server does not disable public network access Function apps are not only accessible over HTTPS UDP Services are not restricted from the Internet Azure cache for Redis has public network access enabled My SQL server enables public network access Not only SSL are enabled for cache for Redis Azure container container group is not deployed into a virtual network Cosmos DB accounts do not have restricted access Azure Cosmos DB enables public network access Azure Data factory public network access is enabled Azure Event Grid domain public network access is enabled API management services do not use virtual networks* Azure IoT Hub enables public network access Key vault does not allow firewall rules settings SQL Server is enabled for public network access Azure virtual machine NIC has IP forwarding enabled Network interfaces use public IPs Azure application gateway does not have WAF enabled Azure front door does not have WAF enabled Application gateway does not use WAF in Detection or Prevention modes Azure front door does not use WAF in Detection or Prevention modes Azure cognitive search does not disable public network access Azure Synapse workspaces have IP firewall rules attached Front Door WAF allows message lookup in Log4j2 Cognitive Services does not disable public network access Application Gateway WAF allows message lookup in Log4j2  Azure Storage #  Secure transfer required is not enabled Storage account does not use the latest version of TLS encryption CosmosDB account enables privileged escalation by not restricting management plane changes Cognitive Services account encryption CMKs are disabled  Azure Kubernetes Service #  Azure AKS cluster monitoring is not enabled Azure AKS enable RBAC not enforced AKS API server does not define authorized IP ranges AKS cluster network policies are not enforced Kubernetes dashboard is not disabled AKS is not enabled for private clusters AKS does not use Azure policies add-on AKS does not use disk encryption set  Azure Secrets #  AKV secrets do not have an expiration date set AKV secrets do not have an expiration date set  Azure Public #  MariaDB servers do not have public network access enabled set to False  Google Kubernetes Engine #  Stackdriver logging on Kubernetes engine clusters is disabled ABAC authorization on Kubernetes engine clusters is enabled GCP Kubernetes engine clusters have stackdriver logging disabled GCP Kubernetes cluster node auto-repair configuration is disabled GCP Kubernetes cluster node auto-upgrade configuration is disabled GCP Kubernetes engine clusters have network policy disabled GCP Kubernetes engine clusters have client certificate disabled GKE control plane is public GCP Kubernetes engine clusters have basic authentication enabled Master authorized networks are not enabled in GKE clusters GCP Kubernetes engine clusters do not have any label information GCP Kubernetes engine clusters are not using Container-Optimized OS for node image Kubernetes clusters are not created with alias IP ranges enabled PodSecurityPolicy controller is not enabled on Kubernetes engine clusters Private cluster is disabled when creating Kubernetes clusters VPC flow logs and intranode visibility are disabled GCP Kubernetes Engine Clusters not configured with private nodes feature Kubernetes RBAC users are not managed with Google Groups for GKE Binary authorization is not used GCP Kubernetes engine clusters have legacy compute engine metadata endpoints enabled Secure boot for shielded GKE nodes is disabled The GKE metadata server is disabled Shielded GKE nodes are not enabled Integrity monitoring for shielded GKE nodes is not enabled GCP Kubernetes engine cluster nodes have default service account for project access  GCP Networking #  GCP Firewall rule allows all traffic on SSH port 22 GCP Firewall rule allows all traffic on RDP port 3389 GCP HTTPS load balancer is configured with SSL policy having TLS version 1.1 or lower Cloud SQL database instances are publicly accessible GCP Cloud DNS has DNSSEC disabled RSASHA1 is used for Zone-Signing and Key-Signing Keys in Cloud DNS DNSSEC Default network exists in a project GCP VM instances have block project-wide SSH keys feature disabled GCP projects have OS login disabled Project instance overrides the project setting enabling OSLogin GCP VM instances have serial port access enabled IP forwarding on instances is enabled GCP project is configured with legacy network Cloud Armor allows message lookup in Log4j2 GCP Firewall rule allows all traffic on MySQL port 3306  GCP General #  Incoming connections to Cloud SQL database instances do not use SSL Cloud SQL database instances do not have backup configuration enabled GCP BigQuery dataset is publicly accessible GCP VM disks not encrypted with CSEKs Boot disks for instances do not use CSEKs Compute instances launch without shielded VM enabled GCP KMS encryption key is not rotating every 90 days There are not only GCP-managed service account keys for each service account Cloud KMS cryptokeys are anonymously or publicly accessible GCP Memorystore for Redis has AUTH disabled  GCP Logging #  GCP VPC flow logs for the subnet is set to Off GCP log bucket retention policy is not configured using bucket lock GCP project audit logging is not configured properly across all services and all users in a project  GCP IAM #  Instances use default Compute Engine service account Instances use default service account with full access to cloud APIs IAM users are assigned Service Account User or Service Account Token creator roles at project level Service Account has admin privileges Roles impersonate or manage Service Accounts used at folder level Roles impersonate or manage Service Accounts used at organizational level Default Service Account is used at project level Default Service Account is used at organization level Default Service Account is used at folder level Roles impersonate or manage Service Accounts used at project level A MySQL database instance allows anyone to connect with administrative privileges GCP Cloud KMS key ring is publicly accessible  Google Cloud Storage #  Google storage buckets are not encrypted GCP cloud storage bucket with uniform bucket-level access are disabled Bucket does not log access Bucket logs to itself  Google Cloud SQL #  GCP MySQL instance with local_infile database flag is not disabled Cloud SQL PostgreSQL instances have log_checkpoints database flag set to Off GCP PostgreSQL instance database flag log_connections is disabled GCP PostgreSQL instance database flag log_disconnections is disabled GCP PostgreSQL instance database flag log_lock_waits is disabled GCP PostgreSQL instance database flag log_min_messages is not set GCP PostgreSQL instance database flag log_temp_files is not set to 0 GCP PostgreSQL instance database flag log_min_duration_statement is not set to -1 Cloud SQL SQL server instance database flag cross db ownership chaining is set to On Cloud SQL SQL server instance contained database authentication database flag is set to On Cloud SQL database instances have public IPs  GCP Public #  GCP storage bucket is publicly accessible to all authenticated users Google Compute Engine (GCE) instances have public IP addresses GCP Vertex AI Workbench has a public IPs GCP Cloud Dataflow job has public IPs GCP Dataproc cluster is anonymously or publicly accessible GCP Pub/Sub Topic is anonymously or publicly accessible GCP BigQuery table is publicly accessible Artifact Registry repository is anonymously or publicly accessible GCP Cloud Run service is anonymously or publicly accessible GCP Dataproc cluster has a public IP Google Container Registry repository is anonymously or publicly accessible  Dockerfile #  Port 22 is exposed Healthcheck instructions have not been added to container images A user for the container has not been created Copy is not used instead of Add in Dockerfiles Update instructions are used alone in a Dockerfile LABEL maintainer is not used instead of MAINTAINER (deprecated) Base image uses a latest version tag Last USER is root  Kubernetes #  Containers wishing to share host process ID namespace admitted Privileged containers are admitted Containers wishing to share host IPC namespace admitted Containers wishing to share host network namespace admitted Containers run with AllowPrivilegeEscalation Root containers admitted Containers with NET_RAW capability admitted Liveness probe is not configured Readiness probe is not configured CPU request is not set CPU limits are not set Memory requests are not set Memory limits are not set Image tag is not set to Fixed Image pull policy is not set to Always Container is privileged Containers share host process ID namespace Containers share host IPC namespace Containers share the host network namespace Containers run with AllowPrivilegeEscalation Default namespace is used Read-Only filesystem for containers is not used Admission of root containers not minimized Containers with added capability are allowed Admission of containers with added capability is not minimized hostPort is specified Mounting Docker socket daemon in a container is not limited Admission of containers with NET_RAW capability is not minimized securityContext is not applied to pods and containers securityContext is not applied to pods and containers seccomp is not set to Docker/Default or Runtime/Default seccomp profile is not set to Docker/Default or Runtime/Default Kubernetes dashboard is deployed Tiller (Helm V2) is deployed Secrets used as environment variables Admission of containers with capabilities assigned is not limited Admission of containers with capabilities assigned is not limited Service account tokens are not mounted where necessary CAP_SYS_ADMIN Linux capability is used Containers do not run with a high UID Default service accounts are actively used Default service accounts are actively used Images are not selected using a digest Tiller (Helm v2) service is not deleted Tiller (Helm V2) deployment is accessible from within the cluster The --anonymous-auth argument is not set to False The --basic-auth-file argument is Set The --token-auth-file argument is Set The --kubelet-https argument is not set to True The --kubelet-client-certificate and --kubelet-client-key arguments are not set appropriately The --kubelet-certificate-authority argument is not set appropriately The --authorization-mode argument is set to AlwaysAllow The --authorization-mode argument does not include node The --authorization-mode argument does not include RBAC The admission control plugin EventRateLimit is not set The admission control plugin AlwaysAdmit is set The admission control plugin AlwaysPullImages is not set The admission control plugin SecurityContextDeny is set if PodSecurityPolicy is used The admission control plugin ServiceAccount is not set The admission control plugin NamespaceLifecycle is not set The admission control plugin PodSecurityPolicy is not set The admission control plugin NodeRestriction is not set The --insecure-bind-address argument is set The --insecure-port argument is not set to 0 The --secure-port argument is set to 0 The --profiling argument is not set to False The --audit-log-path argument is not set The --audit-log-maxage argument is not set appropriately The --audit-log-maxbackup argument is not set appropriately The --audit-log-maxsize argument is not set appropriately The --request-timeout argument is not set appropriately The --service-account-lookup argument is not set to True The --service-account-key-file argument is not set appropriately The --etcd-certfile and --etcd-keyfile arguments are not set appropriately The --tls-cert-file and --tls-private-key-file arguments are not set appropriately The --etcd-cafile argument is not set appropriately Encryption providers are not appropriately configured The API server does not make use of strong cryptographic ciphers The --terminated-pod-gc-threshold argument for controller managers is not set appropriately The --profiling argument for controller managers is not set to False The --use-service-account-credentials argument for controller managers is not set to True The --service-account-private-key-file argument for controller managers is not set appropriately The --root-ca-file argument for controller managers is not set appropriately The RotateKubeletServerCertificate argument for controller managers is not set to True The --bind-address argument for controller managers is not set to 127.0.0.1 The --profiling argument is not set to False The --bind-address argument is not set to 127.0.0.1 The --cert-file and --key-file arguments are not set appropriately The --client-cert-auth argument is not set to True The --auto-tls argument is set to True The --peer-cert-file and --peer-key-file arguments are not set appropriately The --peer-client-cert-auth argument is not set to True The --anonymous-auth argument is not set to False The --authorization-mode argument is set to AlwaysAllow The --client-ca-file argument for API Servers is not set appropriately The --read-only-port argument is not set to 0 The --streaming-connection-idle-timeout argument is set to 0 The --protect-kernel-defaults argument is not set to True The --make-iptables-util-chains argument is not set to True The --hostname-override argument is set The --event-qps argument is not set to a level that ensures appropriate event capture The --tls-cert-file and --tls-private-key-file arguments are not set appropriately The --rotate-certificates argument is set to False Kubelet does not use strong cryptographic ciphers ClusterRoles that grant control over validating or mutating admission webhook configurations are not minimized ClusterRoles that grant permissions to approve CertificateSigningRequests are not minimized Roles and ClusterRoles that grant permissions to bind RoleBindings or ClusterRoleBindings are not minimized Roles and ClusterRoles that grant permissions to escalate Roles or ClusterRole are not minimized  Bridgecrew #  Bridgecrew provider has hard-coded API token  Oracle Cloud Infrastructure #  OCI private keys are hard coded in the provider OCI Block Storage Block Volume has backup is disabled OCI Block Storage Block Volumes are not encrypted with a Customer Managed Key (CMK) OCI Compute Instance boot volume has in-transit data encryption is disabled OCI Compute Instance has Legacy MetaData service endpoint enabled OCI Compute Instance has monitoring disabled OCI Object Storage bucket does not emit object events OCI Object Storage Bucket has object Versioning disabled OCI Object Storage Bucket is not encrypted with a Customer Managed Key (CMK) OCI Object Storage bucket is publicly accessible OCI IAM password policy for local (non-federated) users does not have a lowercase character OCI IAM password policy for local (non-federated) users does not have a number OCI IAM password policy for local (non-federated) users does not have a symbol OCI IAM password policy for local (non-federated) users does not have an uppercase character] OCI File Storage File Systems are not encrypted with a Customer Managed Key (CMK) OCI VCN has no inbound security list OCI VCN Security list has stateful security rules OCI IAM password policy for local (non-federated) users does not have minimum 14 characters  OpenAPI #  OpenAPI securityDefinitions is not defined or is empty If the security scheme is not of type \u0026lsquo;oauth2\u0026rsquo;, the array value must be empty Security scheme allows cleartext credentials over unencrypted channels Security object needs to have defined rules in its array and rules should be defined in the securityScheme Security object for operations, if defined, must define a security scheme, otherwise it should be considered an error Security requirement not defined in the security definitions  Implementation # BluBracket\u0026rsquo;s IaC scanning is powered by the open source Checkov library , and adds BluBracket workflow and reporting.\n"
        
      })
      .add(
      {
        id: 34,
        href: "/faq/what-kinds-of-secrets-do-you-search-for/",
        title: "What types of secrets does BluBracket search for?",
        description: "What we can find and how we find it.",
        
          
            
          
        
        
          
            
          
        
        
        content: "secretsWhat types of 'secrets in code' does BluBracket scan for - BluBracketBluBracket uses a variety of technologies, including pattern matching and AI/ML to detect hundreds of different types of secrets in code, including tokens, keys, IDs, credentials and passwords. BluBracket also allows developers to specify additional alert triggers using regular expressions.\nBluBracket searches inside all text formatted files—regardless of language—to find secrets. → See more about secrets in files And, BluBracket identifies files that are generally considered unsafe in a repo, regardless of their contents. → See more about sensitive files Sensitive files # A number of files are considered sensitive regardless of their contents.\ncryptographic_key_bundle .p12 # Potential cryptographic key bundle\nsome-bundle.p12  cryptographic_key_bundle .pfx # Potential cryptographic key bundle\nsecrets/some-bundle.pfx  cryptographic_key_bundle .asc # Potential cryptographic key bundle\nsome-bundle.asc  openvpn_client_configuration_file .ovpn # Potential OpenVPN client configuration file\n~/secret.ovpn  remote_desktop_connection_file .rdp # Potential Remote Desktop connection file\n~/secret.rdp  microsoft_sql_database_file .mdf # Potential Microsoft SQL database file\n~/msql-db.mdf  microsoft_sql_server_compact_database_file .sdf # Potential Microsoft SQL server compact database file\n~/.sdf  sqlite_database_file .sqlite # Potential SQLite database file\n/local/usr/db/.sqlite  microsoft_bitlocker_recovery_key_file .bek # Potential Microsoft BitLocker recovery key file\nsome_file.bek  microsoft_bitlocker_trusted_platform_module_password_file .tpm # Potential Microsoft BitLocker Trusted Platform Module password file\nsecrets.tpm  windows_bitLocker_full_volume_encrypted_data_file .fve # Potential Windows BitLocker full volume encrypted data file\nsome-dir/test.fve  java_keystore_file .jks # Potential Java KeyStore file\njava-keystore.jks  password_safe_database_file .psafe3 # Potential Password Safe database file\nfile.psafe3  1password_password_manager_database_file .agilekeychain # Potential 1Password password manager database file\n../complicated-path/../.project/test.agilekeychain  apple_keychain_database_file .keychain # Potential Apple Keychain database file\n/../complicated-path/../.project/test.keychain  network_traffic_capture_file .pcap # Potential network traffic capture file\ntraffic.pcap  tunnelblick_vpn_configuration_file .tblk # Potential Tunnelblick VPN configuration file\ntest.tblk  postgresql_password_file .pgpass # Potential PostgreSQL password file\npostgres/pgpass  aws_cli_credentials_file .aws/credentials # Potential AWS CLI credentials file\n/~deploy/.aws/credentials /prod/aws/credentials  apache_htpasswd_file .htpasswd # Potential Apache htpasswd file\n~apache/.htpasswd ~httpd/htpasswd  rubygems_credentials_file .gem/credentials # Potential Rubygems credentials file\n~/.gem/credentials  git_credential_store_helper_credentials_file .git-credentials # Potential git-credential-store helper credentials file\n.git-credentials  environment_configuration_file .env # Potential environment configuration file\nproject/prod.env  mysql_client_command_history_file .mysql_history # Potential MySQL client command history file\ndb/mysql_history ~mysql/.mysql_history  postgresql_client_command_history_file .psql_history # Potential PostgreSQL client command history file\n.psql_history ~db/psql_history  linux_shadow_file etc/shadow # Potential Linux shadow file\n/etc/shadow  linux_passwd_file etc/passwd # Potential Linux passwd file\n/etc/passwd  ruby_master_key_file master.key # Potential Ruby master.key file\nmaster.key  docker_configuration_file .dockercfg | .docker/config.json # Potential Docker configuration file\ndocker-compose/.dockercfg docker/config.json  gnome_keyring_database_file .key(store|ring) # Potential GNOME Keyring database file\n~/.local/share/keyrings/login.keyring ~/.local/share/keyrings/login.keystore  sftp_connection_configuration_file sftp-config.json # Potential SFTP connection configuration file\nsftp-config.json sftp-config  terraform_state_file .tfstate # Potential Terraform State File\ndeploy/default.tfstate deploy/default.tfstate.backup  Negative example:\ntest.tfstates  shell_command_history_file # Potential shell command history file\n.bash_history .sh_history .history history .zsh_history .z_history  Kerberos keytab # Potential kerberos keytab file\nsomefile.keytab  Secrets in files # A sample of secrets BluBracket commonly detects in files includes:\npassword_assignment # Potential password assignment\n'PaSswOrd' = '13579'  secret_assignment # Potential secret assignment\n\u0026quot;test_token_123\u0026quot; = \u0026quot;my_secret_token\u0026quot;  credential_assignment # Potential credential assignment\nAWS_creDentiAl: 'some-string'  google_api_key # Potential Google API key\nAIzaSyA-k3UmEeCD6KpySp3cSAlGJwXTNV_oybM  google_api_key_base64 # Potential Google API key (base64)\nQUl6YVN5QS1rM1VtRWVDRDZLcHlTcDNjU0FsR0p3WFROVl9veWJN  google_oauth # Potential Google OAuth\n3572-b3w78sfasfcvs87fasdf6hbvefs21nb3.apps.googleusercontent.com  google_oauth_access_token # Potential Google OAuth access token\nya29.sd8keCms2swx2sJNW8kWxqzj3  google_oauth_access_token_base64 # Potential Google OAuth access token (base64)\neWEyOS5zZDhrZUNtczJzd3gyc0pOVzhrV3hxemoz  aws_access_key_id # Potential AWS access key ID\nAKIA2E0A8F3B244C9986  aws_access_key_id_base64 # Potential AWS access key ID (base64)\nQUtJQTJFMEE4RjNCMjQ0Qzk5ODY non-token  aws_secret_key # Potential AWS Secret key\nawS_secret=\u0026quot;7CE556A3BC234CC1FF9E8A5C324C0BB70AA21B6D\u0026quot;  aws_account_id # Potential AWS account ID\n\u0026quot;aWs_account\u0026quot;: \u0026quot;3238-1074-6278\u0026quot;  aws_mws_key # Potential AWS MWS key\namzn.mws.a8fc03d7-7eb3-c92f-b3aa-ae93cbff7acd  aws_mws_key_base64 # Potential AWS MWS key (base64)\nYW16bi5td3MuYThmYzAzZDctN2ViMy1jOTJmLWIzYWEtYWU5M2NiZmY3YWNk  github_token # Potential GitHub token\n'githUb_token': '9qjxsjq6HWBXKAOP87IJHmhsW8038d73Dm9eDu'  github_access_token # Potential GitHub access token or OAuth client secret\ngIthub-access_token = '2b30cc694989f335a4298067c4753a6c09ccfe5e'  github_oauth_client_secret # Potential GitHub OAuth client secret\ngIthub-oAuth_token = '2b30cc694989f335a4298067c4753a6c09ccfe5e'  github_token_base64 # github_access_token_base64 # github_oauth_client_secret_base64 # Potential GitHub Personal Access Token or OAuth Client Secret (base64)\n'githUb_token': 'OXFqeHNqcTZIV0JYS0FPUDg3SUpIbWhzVzgwMzhkNzNEbTllRHU'  github_personal_access_token # Potential GitHub personal access token\n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  github_oauth_client_id # Potential GitHub OAuth Client ID\ngithub_client-id : 'c7444c71c75965b07cdb'  github_user_to_server_token # Potential GitHub user-to-server token\nghu_16C7e42F292c6912E7710c838347Ae178B4a  github_server_to_server_token # Potential GitHub server-to-server token\nghs_16C7e42F292c6912E7710c838347Ae178B4a  github_refresh_token # Potential GitHub refresh token\nghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498  gitlab_oauth_application_id_base64 # gitlab_oauth_secret_base64 # Potential Base64 Encoded GitLab OAuth application id or secret\ngitLab: \u0026quot;Yzc0ZjNjZmQ0NDk0OWM3MGY3ZjM1NjEyOTViNjdlNjgyZDdlNGZmNjY5OTViNjdkNGUxNTRmZTMxMjU0ODFhOA==\u0026quot;  gitlab_access_token # Potential GitLab Access Token\ngitLab= \u0026quot;y-WttoALkwHn_vWJ72DB\u0026quot;  gitlab_oauth_application_id # gitlab_oauth_secret # Potential GitLab OAuth Applicaiton ID or GitLab OAuth Secret\ngitLab: \u0026quot;c74f3cfd44949c70f7f3561295b67e682d7e4ff66995b67d4e154fe3125481a8\u0026quot;  bitbucket_app_password # Potential Bitbucket App Password\nbitbucKet-app_pwd := \u0026quot;YpHdUSPAB9aDNuwVq8uK\u0026quot;  bitbucket_app_password_base64 # Potential Bitbucket App Password (base64)\nbitbucKet-app_token := \u0026quot;WXBIZFVTUEFCOWFETnV3VnE4dUs=\u0026quot;  bitbucket_oauth_key # Potential Bitbucket OAuth Key\nbitbUCket_key= \u0026quot;NCnnHSXbMVmJZr8D8q\u0026quot;  bitbucket_oauth_key_base64 # Potential Bitbucket OAuth Key (base64)\nbitbUCket_key= TkNubkhTWGJNVm1KWnI4RDhx  bitbucket_oauth_secret # Potential Bitbucket OAuth Secret\n\u0026quot;bitbuckeT_secret\u0026quot;: \u0026quot;CMJ2bKZUPAzXezTwNGXyWDsegT8ZW3Yd\u0026quot;  bitbucket_oauth_secret_base64 # Potential Bitbucket OAuth Secret (base64)\n\u0026quot;bitbuckeT_secret\u0026quot;: \u0026quot;Q01KMmJLWlVQQXpYZXpUd05HWHlXRHNlZ1Q4WlczWWQ\u0026quot;  azure_active_directory_client_id # Potential Azure Active Directory Client ID\nazuRE_ad_client_id=\u0026quot;7076aa77-81ef-46ea-ae22-d768babeed21\u0026quot;  azure_active_directory_client_secret # Potential Azure Active Directory Client Secret\naZure_client_secret=\u0026quot;y5=KAF/PbpoMmum31/t]S88dDu5d:?S*\u0026quot;  azure_active_directory_client_secret_base64 # Potential Azure Active Directory Client Secret (base64)\naZure_client_secret=\u0026quot;SVt3Si1dRExyTFduYzBlRi11cEFtdVhlY0lMZVM2MzA=\u0026quot;  azure_access_token # Potential Azure Access Token\n'azUre_token'= \u0026quot;r5nt64ikuzhohfm7r4rmdk2gd5unb4tb7eberlombqazshrfdr3q\u0026quot;  azure_access_token_base64 # Potential Azure Access Token (base64)\n'azUre_token'= \u0026quot;cjVudDY0aWt1emhvaGZtN3I0cm1kazJnZDV1bmI0dGI3ZWJlcmxvbWJxYXpzaHJmZHIzcQ==\u0026quot;  microsoft_id_token # Potential Microsoft Identity Platform ID Token\nmicRosoft_id_token=\u0026quot;eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyIsImtpZCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyJ9.eyJhdWQiOiJiMTRhNzUwNS05NmU5LTQ5MjctOTFlOC0wNjAxZDBmYzljYWEiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mYTE1ZDY5Mi1lOWM3LTQ0NjAtYTc0My0yOWYyOTU2ZmQ0MjkvIiwiaWF0IjoxNTM2Mjc1MTI0LCJuYmYiOjE1MzYyNzUxMjQsImV4cCI6MTUzNjI3OTAyNCwiYWlvIjoiQVhRQWkvOElBQUFBcXhzdUIrUjREMnJGUXFPRVRPNFlkWGJMRDlrWjh4ZlhhZGVBTTBRMk5rTlQ1aXpmZzN1d2JXU1hodVNTajZVVDVoeTJENldxQXBCNWpLQTZaZ1o5ay9TVTI3dVY5Y2V0WGZMT3RwTnR0Z2s1RGNCdGsrTExzdHovSmcrZ1lSbXY5YlVVNFhscGhUYzZDODZKbWoxRkN3PT0iLCJhbXIiOlsicnNhIl0sImVtYWlsIjoiYWJlbGlAbWljcm9zb2Z0LmNvbSIsImZhbWlseV9uYW1lIjoiTGluY29sbiIsImdpdmVuX25hbWUiOiJBYmUiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaXBhZGRyIjoiMTMxLjEwNy4yMjIuMjIiLCJuYW1lIjoiYWJlbGkiLCJub25jZSI6IjEyMzUyMyIsIm9pZCI6IjA1ODMzYjZiLWFhMWQtNDJkNC05ZWMwLTFiMmJiOTE5NDQzOCIsInJoIjoiSSIsInN1YiI6IjVfSjlyU3NzOC1qdnRfSWN1NnVlUk5MOHhYYjhMRjRGc2dfS29vQzJSSlEiLCJ0aWQiOiJmYTE1ZDY5Mi1lOWM3LTQ0NjAtYTc0My0yOWYyOTU2ZmQ0MjkiLCJ1bmlxdWVfbmFtZSI6IkFiZUxpQG1pY3Jvc29mdC5jb20iLCJ1dGkiOiJMeGVfNDZHcVRrT3BHU2ZUbG40RUFBIiwidmVyIjoiMS4wIn0=.UJQrCA6qn2bXq57qzGX_-D3HcPHqBMOKDPx4su1yKRLNErVD8xkxJLNLVRdASHqEcpyDctbdHccu6DPpkq5f0ibcaQFhejQNcABidJCTz0Bb2AbdUCTqAzdt9pdgQvMBnVH1xk3SCM6d4BbT4BkLLj10ZLasX7vRknaSjE_C5DI7Fg4WrZPwOhII1dB0HEZ_qpNaYXEiy-o94UJ94zCr07GgrqMsfYQqFR7kn-mn68AjvLcgwSfZvyR_yIK75S_K37vC3QryQ7cNoafDe9upql_6pB2ybMVlgWPs_DmbJ8g0om-sPlwyn74Cc1tW3ze-Xptw_2uVdPgWyqfuWAfq6Q\u0026quot;  atlassian_api_token # Potential Atlassian API Token\nmy_jira_token=\u0026quot;xbE0Z4lPlrsxCsbQljSD7AFF\u0026quot;  atlassian_api_token_base64 # Potential Atlassian API Token (base64)\nmy_jira_token=\u0026quot;eGJFMFo0bFBscnN4Q3NiUWxqU0Q3QUZG\u0026quot;  dropbox_app_key_secret # Potential Dropbox App Key or App Secret\nDROPBOX_APP_KEY: \u0026quot;4fyyzx73aeeouuy\u0026quot;  dropbox_app_key_secret_base64 # Potential Dropbox App Key or App Secret (base64)\nDROPBOX_APP_KEY: \u0026quot;NGZ5eXp4NzNhZWVvdXV5\u0026quot;  dropbox_app_access_refresh_token # Potential Dropbox App Access Token\ndropbox_app_access_token: 'sTaeXjPl-kAAAAAAAAAAE4PSHCac-raR31ueSeFZUSHBJ5tlMGvyO8MeXRaRQOrU'  dropbox_app_access_refresh_token_base64 # Potential Dropbox App Access Token (base64)\ndropbox_app_access_token: 'c1RhZVhqUGwta0FBQUFBQUFBQUFFNFBTSENhYy1yYVIzMXVlU2VGWlVTSEJKNXRsTUd2eU84TWVYUmFSUU9yVQ=='  box_client_id_secret # Potential Box client id or client secret\nbox_client_id: \u0026quot;2zljm7yivjhfz9in4dkr566vk4xpje5y\u0026quot;  box_client_id_secret_base64 # Potential Box client id or client secret (base64)\nbox_client_id: \u0026quot;Mnpsam03eWl2amhmejlpbjRka3I1NjZ2azR4cGplNXkK\u0026quot;  box_refresh_token # Potential Box refresh token\nbox_refresh_token: \u0026quot;Q8j0kTwbhQXHO95FAKg5zTfKhDwGWOUQyRue8i7njJoqWAwdRKfAPw4oK6zF3dPv\u0026quot;  box_refresh_token_base64 # Potential Box refresh token (base64)\nbox_refresh_token: \u0026quot;UThqMGtUd2JoUVhITzk1RkFLZzV6VGZLaER3R1dPVVF5UnVlOGk3bmpKb3FXQXdkUktmQVB3NG9LNnpGM2RQdgo=\u0026quot;  discord_client_id # Potential Discord Client ID\nDiScORd: \u0026quot;618962312686075969\u0026quot;  discord_client_secret # Potential Discord Client Secret\ndisCORD_secret= \u0026quot;4cs2-cYx2KiKIRuOTKworwnM0_A4uJyy\u0026quot;  slack_legacy_token # Potential Slack Legacy Token\nxoxp-559859041733-629723654435-752364182007-9ead8994051da71a0774db965b16a60b\u0026quot;  slack_legacy_token_base64 # Potential Slack Legacy Token (base64)\neG94cC01NTk4NTkwNDE3MzMtNjI5NzIzNjU0NDM1LTc1MjM2NDE4MjAwNy05ZWFkODk5NDA1MWRhNzFhMDc3NGRiOTY1YjE2YTYwYg==  slack_app_client_id # Potential Slack App Client ID\nslack_client_id='559859041733.752727218102'  slack_app_client_secret # slack_app_signing_secret # Potential Slack App Client Secret or Slack App Signing Secret\nslack_secret=\u0026quot;004c7fb45aeb0b795890128d763877ec\u0026quot;  slack_app_verification_token # Potential Slack App Verification Token\nslack_token: \u0026quot;Bk1D7BxSbGRttZYpyngNZBSR\u0026quot;  slack_app_verification_token_base64 # Potential Slack App Verification Token (base64)\nslack_token: \u0026quot;QmsxRDdCeFNiR1J0dFpZcHluZ05aQlNS\u0026quot;  slack_bot_user_token # Potential Slack Bot User Token\nslack_token: \u0026quot;xoxb-559859041733-629723654435-752364182007-9ead8994051da71a0774db965b16a60b\u0026quot;  slack_bot_user_token_base64 # Potential Slack Bot User Token (base64)\neG94Yi01NTk4NTkwNDE3MzMtNjI5NzIzNjU0NDM1LTc1MjM2NDE4MjAwNy05ZWFkODk5NDA1MWRhNzFhMDc3NGRiOTY1YjE2YTYwYg==  slack_workspace_token # Potential Slack Workspace Token\nslack_token: \u0026quot;xoxa-259859041733-629723654435-752364182007-9ead8994051da71a0774db965b16a60b\u0026quot;  slack_workspace_token_base64 # Potential Slack Workspace Token (base64)\neG94YS0yNTk4NTkwNDE3MzMtNjI5NzIzNjU0NDM1LTc1MjM2NDE4MjAwNy05ZWFkODk5NDA1MWRhNzFhMDc3NGRiOTY1YjE2YTYwYg==  slack_webhook # Potential Slack Webhook\nhttps://hooks.slack.com/services/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  stripe_test_secret_key # Potential Stripe Test Secret Key\nsk_test_MfRuaFA9sgl5e1AUYzjwiNNt00UG6t6fvY  stripe_test_secret_key_base64 # Potential Stripe Test Secret Key (base64)\nc2tfdGVzdF9NZlJ1YUZBOXNnbDVlMUFVWXpqd2lOTnQwMFVHNnQ2ZnZZ  stripe_live_secret_key # Potential Stripe live secret key\nsk_live_MfRuaFA9sgl5e1AUYzjwiNNt00UG6t6fvY  stripe_live_secret_key_base64 # Potential Stripe live secret key (base64)\nc2tfbGl2ZV9NZlJ1YUZBOXNnbDVlMUFVWXpqd2lOTnQwMFVHNnQ2ZnZZ  stripe_test_restricted_key # Potential Stripe Test Restricted Key\nrk_test_Zu9Vz12eIYFNdGoFKe8aYiQn00gcclUvS0  stripe_test_restricted_key_base64 # Potential Stripe Test Restricted Key (base64)\ncmtfdGVzdF9adTlWejEyZUlZRk5kR29GS2U4YVlpUW4wMGdjY2xVdlMw  stripe_live_restricted_key # Potential Stripe live restricted key\nrk_live_Zu9Vz12eIYFNdGoFKe8aYiQn00gcclUvS0  stripe_live_restricted_key_base64 # Potential Stripe live restricted key (base64)\ncmtfbGl2ZV9adTlWejEyZUlZRk5kR29GS2U4YVlpUW4wMGdjY2xVdlMw  mailgun_private_api_key # Potential Mailgun Private API Key\n\u0026quot;mailgUn_key\u0026quot;: 'key-b11b487224a7c184fed93795bf01adc9'  mailgun_private_api_key_base64 # Potential Mailgun Private API Key (base64)\n\u0026quot;mailgUn_key\u0026quot;: 'a2V5LWIxMWI0ODcyMjRhN2MxODRmZWQ5Mzc5NWJmMDFhZGM5'  mailgun_public_validation_key # Potential Mailgun Public Validation Key\npubkey-14b4474da0d0a6551a9c711ee11aa996  mailgun_public_validation_key_base64 # Potential Mailgun Public Validation Key (base64)\ncHVia2V5LTE0YjQ0NzRkYTBkMGE2NTUxYTljNzExZWUxMWFhOTk2  mailgun_webhook_signing_key # Potential Mailgun Webhook Signing Key\nmailgun_key='15304a8a0558637d8187630ddf11df1a'  mailgun_webhook_signing_key_base64 # Potential Mailgun Webhook Signing Key (base64)\nmailgun_key='MTUzMDRhOGEwNTU4NjM3ZDgxODc2MzBkZGYxMWRmMWE='  sendgrid_api_key # Potential Sendgrid API Key\n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  sendgrid_api_key_base64 # Potential Sendgrid API Key (base64)\nU0cucFcyWFhnNi1UY2E4YkNCVEMwRWlZUS5ZNXBDOFNqZmJ3WWxNTURSaVQ5TTZxN0VmOWIzX0RDSGtQNS0zaXNYM3dN  twilio_auth_token # twilio_api_key # Potential Twilio Auth Token or API Key\ntwilio_token=\u0026quot;692e03bfddd09d85946e1319dd5e7c61\u0026quot;  twilio_auth_token_base64 # Potential Twilio Auth Token or API Key (base64)\ntwilio_token=\u0026quot;NjkyZTAzYmZkZGQwOWQ4NTk0NmUxMzE5ZGQ1ZTdjNjE=\u0026quot;  npm_access_token # Potential NPM Access Token\n\u0026quot;npm : `f74fb6c7-15d7-46e7-85b4-02ca4988bd3c`\u0026quot;  npm_access_token_base64 # Potential NPM Access Token (base64)\n`npm : `Zjc0ZmI2YzctMTVkNy00NmU3LTg1YjQtMDJjYTQ5ODhiZDNj``  npmrc_auth # Potential .npmrc Auth\n_auth = YWRtaW46YWRtaW4=  npmrc_auth_token # Potential .npmrc Auth token\n_authToken=26dfe8d8-889b-4380-92ff-9c3c6ea5d930  pulumi_access_token # Potential Pulumi Access Token\npul-b521eabebc4b312eb2335beb7a911f9eb7f078c2  pulumi_access_token_base64 # Potential Pulumi Access Token (base64)\ncHVsLWI1MjFlYWJlYmM0YjMxMmViMjMzNWJlYjdhOTExZjllYjdmMDc4YzI=  alibaba_access_key_secret # Potential Alibaba Cloud Access Key Secret\nalibaba_access_key ='3ihvGlklDPSXr22dnunrHTpZO4aKmS'  alibaba_access_key_secret_base64 # Potential Alibaba Cloud Access Key Secret (base64)\nalibaba_access_key ='M2lodkdsa2xEUFNYcjIyZG51bnJIVHBaTzRhS21T'  codeship_aes_key # Potential Cloudbees Codeship AES Key Secret\n\u0026quot;codeship_token='/BaC5gedAC8hACwe5tZje+YVdOCTUxH+b+zkgKSKTkA='\u0026quot;  postman_api_key # Potential Postman API Key\n\u0026quot;postman-api-key='PMAK-5e1c6889073b8400310886e0-40895969cc5bb51944fce153e94c33f3b9'\u0026quot;  postman_api_key_base64 # Potential Postman API Key (base64)\npostman-api-key='UE1BSy01ZTFjNjg4OTA3M2I4NDAwMzEwODg2ZTAtNDA4OTU5NjljYzViYjUxOTQ0ZmNlMTUzZTk0YzMzZjNiOQ=='  terraform_access_token # Potential Terraform Access Token\n\u0026quot;QnbSxjjhVMHJgw.atlasv1.gxZnWIjI5j752DGqdwEUVLOFf0mtyaQ00H9bA1j90qWb254lEkQyOdfqqcq9zZL7Sm0\u0026quot;  gocardless_access_token # Potential Gocardless Cloud Access Token\ngocardless_access_token = 'live_TKWImhFpoTRpzOIbpRhDS3-ezGa--nt4O9KU1Hd1'  gocardless_access_token_base64 # Potential Gocardless Cloud Access Token (base64)\ngoCardLessToken = bGl2ZV9US1dJbWhGcG9UUnB6T0licFJoRFMzLWV6R2EtLW50NE85S1UxSGQx  password_in_xml # Potential password in XML\n\u0026amp;lt;PaSswOrd\u0026amp;gt;UnitTest1234!\u0026amp;lt;/PaSswOrd\u0026amp;gt;  secret_in_xml # Potential secret in XML\n\u0026amp;lt;Token\u0026amp;gt;0123456789abcdef\u0026amp;lt;/Token\u0026amp;gt;  password_function # Potential password in function\nsetPassword(\u0026quot;$uperStrong1\u0026quot;);  secret_function # Potential secret in function\nsetApiKey ( 'api_key' )  password_in_url # Potential password in URL\nhttps://user:password@github.com/blubracket/rocks  password_in_url_params # Potential password in params\nhttps://user:password@github.com/blubracket/rocks?passwd=1234  secret_in_url_params # Potential secret in params\nhttps://github.com/blubracket/rocks?secret=1234  private_key # Potential Private Key\n-----BEGIN RSA PRIVATE KEY-----\\nProc-Type: 4,ENCRYPTED\\nDEK-Info: DES-EDE3-L1D9CN2WmfoLeIBBJdQ2YngfSz……..\u0026lt;/p\u0026gt;\u0026lt;p\u0026gt;==\\n-----END RSA PRIVATE KEY-----  pgp_private_key # Potential PGP Private Key\n-----BEGIN PGP PRIVATE KEY BLOCK-----  blubracket_api_key # Potential BluBracket API key\napi_key=\u0026quot;BLU-72de3a5f-b1ff-5a7f-a5ae-1a9cf5a98b27\u0026quot;  blubracket_api_key_base64 # Potential BluBracket API key (base64)\napi_key=\u0026quot;QkxVLTcyZGUzYTVmLWIxZmYtNWE3Zi1hNWFlLTFhOWNmNWE5OGIyNw==\u0026quot;  basic_auth_header # Potential Basic Auth Header\nsh \u0026quot;set -e | curl -i -H 'Authorization: Basic QWxhZGRpbjpPcGVuU2VzYW1l' -T BackEnd/build/libs/example_api-0.1.0.jar  jwt_token # Potential Generic JWT token\njwt_access_token = \u0026quot;eyJhbGciOiJSUzI1NiIsImlzc3VlciI6InVybjpibHUiLCJyb2xlIjozLCJzZXJ2aWNlX2tleV9wYXRoIjoiL2FwaS9hbmFseXplci9wdWJsaWNfa2V5IiwidHlwIjoiSldUIn0.eyJleHAiOjE2MDUzMTI0MTksImlhdCI6MTYwNTMxMjM1OSwiaWQiOiJ0b2tlbl9pZCIsIm5idCI6MTYwNTMxMjM1OX0.l-MjVG33Ca76gtuiFLI-_AasHEsoMA3WcC36YvW0IHyQp-160z2Idc-sMdaJD8AwMsFto45vqnusDFkS1UYO7mZhU6sufv6pIMH86Ll7NwYvPzirqkWys40pvoXZdxxb3X5IBFTB8p9EuvLGOPUPFbEkA_if5jmExXjKUY98q0s\u0026quot;  "
        
      })
      .add(
      {
        id: 35,
        href: "/faq/why-is-env-file-blocked/",
        title: "Why is my .env file blocked?",
        description: "Alarming on .env files, database files and dumps, and even Terraform state files are among the most controversial policies that BluBracket supports by default.\nContents\n  Risk background   Best practices background   But you really want to commit that .env, what can you do   Understanding the risk of .env files # The majority of our users have asked us to alert them about these in their code because they represent risks they\u0026rsquo;re trying to eliminate.",
        
          
            
          
            
          
        
        
        
        content: "code qualitysecretsAlarming on .env files, database files and dumps, and even Terraform state files are among the most controversial policies that BluBracket supports by default.\nContents\n  Risk background   Best practices background   But you really want to commit that .env, what can you do   Understanding the risk of .env files # The majority of our users have asked us to alert them about these in their code because they represent risks they\u0026rsquo;re trying to eliminate. From dev.to :\n Let\u0026rsquo;s face it, .env files are amazing. They have an easy-to-read syntax that stores all of our essential configurations into one file. Not only that, they keep our deepest, darkest secrets as web developers. They make sure that our precious API keys and database passwords are kept locally, away from prying eyes. Having such a critical role in our code bases, we are constantly reminded by the community to never share our .env files; to treat them like how the government treats their confidential information.\nThis is especially enforced in the open-source community where everyone shares, copies, and reuses code with each other. Accidentally committing and pushing the .env file is considered by many as a relatable moment. Personally, I have never done it myself yet, but I\u0026rsquo;m sure my fate is sealed at this point.\nA stain in the commit history #  Running a quick search on GitHub reveals that there are still a number of people who didn\u0026rsquo;t get the memo. The occasional add .env and remove .env commit titles appear every now and then in the search results. Looking into the content of the commits indeed shows their precious API keys and database passwords. It\u0026rsquo;s honestly funny to see how they revert their changes like how a child becomes guilty of doing something they shouldn\u0026rsquo;t have.\nWhat\u0026rsquo;s more alarming about this is that there are still some others who have not reverted their commits. The .env file is still alive and well in their repositories. For all we know, these might be real, actual API keys and database passwords they currently depend on in a regular basis. To make matters worse, sorting the search results by recently committed shows how common and frequent these commits are.\nThe problem with simply removing the .env file in the working tree is the fact that Git keeps a record of all the commits made in a repository, even the earliest ones. Unless clever tricks have been made (more on that later), committing that .env file will forever be a stain in the commit history. This is just what a version control system is supposed to do after all: keep a history of changes, even the bad ones.\n Configuration best practices # Many of our users who have asked us to alert on .env files have also pointed out that they want to exclude them from repos even if they can ensure there are no secrets in them.\n Larry Garfield has an excellent overview of this that starts from first principles of how to configure applications and extends all the way out how to make localized adjustments to that configuration as needed for testing and local development. It\u0026rsquo;s worth looking at the whole thing, but here\u0026rsquo;s the part that gets at .env files:\n This is where the .env file comes into play. .env is a de facto standard for an ini-like file that contains fake environment variables. An application that supports .env files will, on boot, run through each line in that file and read key=value pairs. For each, it will run \u0026ldquo;IF an environment variable with this name doesn\u0026rsquo;t already exist, set it based on this file.\u0026rdquo; That will set the variable only within the scope of your application\u0026rsquo;s process, without impacting any other processes on the computer. Then the rest of your application can proceed and read from the environment as it would anywhere else, entirely ignorant of that switcheroo. (Don\u0026rsquo;t write that code yourself. There are .env support libraries in every language that all do exactly the same thing. Use one of those.)\nThat, and only that, is the purpose of .env files: values that change per-environment, and thus are not part of your code base. Which brings up the most important thing to remember about .env files: they do not belong in Git. Anything in Git is going to be the same on every environment, by design, which is exactly the opposite of what environment variables and .env file are for.\nValues that do not change between environments also do not belong in the .env file. The site name, admin email address, and so on should either be in a read-only config file that is committed to Git or in the database, depending on if you want those configuration values to be end-user modifiable. (Either way is valid, as long as you do it deliberately.) But those values do not belong in the .env file, because they are not environment-specific.\n These are the points we\u0026rsquo;ve heard from many customers, and they reflect why BluBracket alerts users to .env files (along with database content and more) by default.\nHowever, BluBracket is a tool for all, and we understand not everybody shares the same policies.\nYah yah, just let me merge this .env file already # To override the default policy that alerts on .env file, one of the following can be used:\nAllow .env files in a single repository #  Create a .blubracket/ignore.yml file in the repository with the following content:\n# BluBracket ignore file # Full docs at # https://docs.blubracket.com/how-to/ignore-rules/per-repo/ # Ignore by file path - paths: - **/.env  Allow .env files in any repository #  Follow the documentation for global ignore rules here .\n"
        
      })
      .add(
      {
        id: 36,
        href: "/faq/why-should-i-use-blubracket-discover-secrets/",
        title: "Why should I use the BluBracket to discover secrets in code when there are so many other tools available?",
        description: "Best in class secret detection # Testing demonstrates that BluBracket can identify more tokens, keys and IDs than the other tools. Additionally, it supports user-defined custom patterns so you can match whatever is important to you.\nFewest false positives # Expansive detection is critical to ensuring secrets are found, but BluBracket’s rules engine also actively eliminates potential false positives allowing developers to focus on the most important findings.\nComprehensive threat detection # In addition to secrets, BluBracket scans for the following risks in code:",
        
          
            
          
        
        
          
            
          
        
        
        content: "secretsWhy should I use the BluBracket Free Trial to discover secrets in code when there are so many other tools available? – BluBracketBest in class secret detection # Testing demonstrates that BluBracket can identify more tokens, keys and IDs than the other tools. Additionally, it supports user-defined custom patterns so you can match whatever is important to you.\nFewest false positives # Expansive detection is critical to ensuring secrets are found, but BluBracket’s rules engine also actively eliminates potential false positives allowing developers to focus on the most important findings.\nComprehensive threat detection # In addition to secrets, BluBracket scans for the following risks in code:\n  Personally identifiable information (PII)   Non-inclusive language (NIL)   Infrastructure as code (IaC) best practices   Additionally, BluBracket monitors who and what has access to your code , and where your code is going .\nComplete workflow # Detection is easy, but building workflows and tools that help prevent risks from getting into code , and support continuous improvement through risk scoring, filtering, and reporting is what makes BluBracket an indispensable part of modern development practices.\n"
        
      })
      .add(
      {
        id: 37,
        href: "/how-to/code-servers/add-code-servers/github-cloud/",
        title: "Adding a GitHub Cloud code server on BluBracket Enterprise Edition",
        description: "After selecting to add a GitHub Cloud code server , follow the instructions below to add a GitHub Organization as a code server in BluBracket.\nGitHub uses the term \u0026ldquo;GitHub Cloud\u0026rdquo; to differentiate repositories hosted at github.com from their self-hosted enterprise offering.\nEach GitHub Organization is a different code server in BluBracket ( see GitHub\u0026rsquo;s docs on Organizations ).\nEntering the organization name #   Enter the short form of the GitHub Organization name.",
        
        
        
        content: "   After selecting to add a GitHub Cloud code server , follow the instructions below to add a GitHub Organization as a code server in BluBracket.\nGitHub uses the term \u0026ldquo;GitHub Cloud\u0026rdquo; to differentiate repositories hosted at github.com from their self-hosted enterprise offering.\nEach GitHub Organization is a different code server in BluBracket ( see GitHub\u0026rsquo;s docs on Organizations ).\nEntering the organization name #   Enter the short form of the GitHub Organization name. The short form of the name is the version shown in the URL for the org.\nFor example: The Linux Foundation Engineering org\u0026rsquo;s short form name is LF-Engineering as seen in the URL on that page.\nYou can see all organizations you are a member of in your GitHub account at https://github.com/settings/organizations. :\n  Generating and entering a personal access token (PAT) # BluBracket uses a personal access token to access the repos you wish to scan ( see GitHub\u0026rsquo;s docs on personal access tokens ).\n Instructions on generating and entering a personal access token. "
        
      })
      .add(
      {
        id: 38,
        href: "/api/system-audit/",
        title: "System Audit",
        description: "Auditing list of users who have accessed the BluBracket System",
        
        
        
        content: "Getting a list of users # Getting an audit of users and events of when they have logged in and out.\nThis is the API version of the data available at https://[hostname]/settings/systemaudit\nEndpoint # POST https://[hostname]/api/system-audit/search\nCalled with bearer token.\nRequest body # { \u0026quot;filters\u0026quot;: [], \u0026quot;limit\u0026quot;: 200, \u0026quot;page\u0026quot;: 1 }  Response # Success: 200\nSet of 200 user objects.\nExample user object\n{ \u0026quot;email\u0026quot;: \u0026quot;user@domain.com\u0026quot;, \u0026quot;audit_time\u0026quot;: \u0026quot;2022-07-15T16:00:56.979661+00:00\u0026quot;, \u0026quot;request_id\u0026quot;: \u0026quot;547b4309-5094-4d6b-9f86-a8ea5e2cf9ef\u0026quot;, \u0026quot;description\u0026quot;: \u0026quot;User 'user@domain.com' logged in.\u0026quot;, \u0026quot;details\u0026quot;: null, \u0026quot;audit_state\u0026quot;: \u0026quot;Login\u0026quot;, \u0026quot;user_id\u0026quot;: \u0026quot;dc82244c-07c9-4c21-9988-cfd5f2d4b615\u0026quot;, \u0026quot;id\u0026quot;: \u0026quot;ef6c2130-bb38-408b-a8c7-4d26a24579be\u0026quot;, \u0026quot;audit_type\u0026quot;: \u0026quot;User\u0026quot; }  "
        
      })
      .add(
      {
        id: 39,
        href: "/how-to/cli/installation/",
        title: "CLI tool installation",
        description: "Instructions to install the CLI tool for Windows, macOS, and Linux",
        
        
        
        content: "The BluBracket CLI is a high-performance, compact risk scanner written in Go. Unlike some tools, it runs entirely locally without sending any data to remote hosts (unless explicitly configured otherwise).\nmacOS, multiple Linux distros, and Windows are all supported.\nInstallation # Use these direct links to download the executables:\n macOS: https://static.blubracket.com/cli/latest/blubracket-macos Linux: https://static.blubracket.com/cli/latest/blubracket-linux Windows: https://static.blubracket.com/cli/latest/blubracket-win.exe  For example, to download and run the latest BluBracket CLI on macOS, you could run:\ncurl https://static.blubracket.com/cli/latest/blubracket-macos -o blubracket chmod +x ./blubracket mv ./blubracket /usr/local/bin/  Supported platforms #  Windows \u0026gt;= 10 macOS \u0026gt;= 10.12 Linux  Alpine \u0026gt;= 5 Ubuntu \u0026gt;= 16.04 CentOS \u0026gt;= 7    "
        
      })
      .add(
      {
        id: 40,
        href: "/how-to/code-servers/add-code-servers/bitbucket-cloud/",
        title: "Adding a Bitbucket Cloud code server",
        description: "How to add a Bitbucket Cloud server to your tenant",
        
        
        
        content: "After selecting to add a Bitbucket Cloud code server , follow the instructions below to add a Bitbucket workspace as a code server in BluBracket.\nBitbucket uses the term \u0026ldquo;Bitbucket Cloud\u0026rdquo; to differentiate repositories hosted at bitbucket.com from their self-hosted enterprise offering.\nEach Bitbucket workspace is a different code server in BluBracket ( see Bitbucket docs on workspaces ).\nEntering a workspace name # The next thing to do is select a workspace to point the server to. Workspaces are usually, but not always, set up as lines of business or projects. For example, Google may have workspaces for Nest, Android, AdWords, etc., all under the same server. It is possible to point a server at multiple workspaces. Enter the targeted workspace into the input field.\n  If you don’t know the workspace name you can find them in the Bitbucket administrator portal. Log into your Bitbucket account as an administrator and navigate to the following location, https://bitbucket.org/account/workspaces/. From this location, click Manage (under Actions) for one of the workspaces, and note the Workspace ID\n  Entering a personal access token (PAT) # The next step in adding the code server is adding the Personal Access Token (PAT). In order for BluBracket to access information within a given repository, an access token must be uploaded into the tenant.\nNote: The personal access token must be entered in the following format: username:token.\nExample: holland:Vgc9Kw8w5zQu58989Uxz\n How to generate a personal access token on Bitbucket Enter the token in the location indicated below:\n  Finally, select either the “all repositories” or “customer select repositories” option and click on the save button.\n  At this point, if you’ve completed all of the above steps and entered the information accurately, the enterprise code server should be up and running and start to pull the desired data. Please note it can take anywhere from a few minutes to several hours for our system to finish analyzing your repositories. You can navigate to the \u0026ldquo;repositories\u0026rdquo; page to check the real-time scanning status.\n"
        
      })
      .add(
      {
        id: 41,
        href: "/how-to/code-servers/add-code-servers/gitlab-cloud/",
        title: "Adding a GitLab Cloud code server",
        description: "How to add a GitLab Cloud code server to your tenant",
        
        
        
        content: "After selecting to add a GitLab Cloud code server , follow the instructions below to add a GitLab Organization as a code server in BluBracket.\nGitLab uses the term \u0026ldquo;GitLab Cloud\u0026rdquo; to differentiate repositories hosted at gitlab.com from their self-hosted enterprise offering.\nEach GitLab Organization is a different code server in BluBracket ( see GitLab docs on organizations ).\nEntering a Group name # The next thing to do is select a Group to point the server to. Groups are usually, but not always, set up as lines of business or projects. For example, Google may have Groups for Nest, Android, Add Words, etc., all under the same server. It is possible to point a server at multiple Groups. Enter the targeted Group into the input field.\n  If you don’t know the Group name you can find them in the Gitlab administrator portal. Log into your GitLab account as an administrator and navigate to the following location: Click on Menu, then Select Groups.\n  Entering a Personal Access Token (PAT) # The next step in adding the code server is adding the Personal Access Token (PAT). In order for BluBracket to access information within a given repository, an access token must be uploaded into the tenant.\n How to generate a Personal Access Token (PAT) in GitLab Enter the token in the location indicated below.\n  Click Next\nFinally, select either the “All Repositories” or “Customer Select Repositories” option and click on the Save button.\n  At this point, if you’ve completed all of the above steps and entered the information accurately, the Enterprise Code Server should be up and running and start to pull the desired data. Please note it can take anywhere from a few minutes to several hours for our system to finish analyzing your repositories. You can navigate to the ‘Repositories’ page to check the real-time scanning status.\n"
        
      })
      .add(
      {
        id: 42,
        href: "/how-to/code-servers/add-code-servers/",
        title: "Adding code servers",
        description: "How to add code servers to your tenant",
        
        
        
        content: "Adding a code server is the first step in setting up a BluBracket account. It allows BluBracket to scan and analyze code so you can see your current code security health and areas of highest risk, as well as specific risks, insights, and reports.\nGo to Settings → Code Servers page # Go to Settings → Code Servers in your BluBracket account and click the \u0026ldquo;add code server\u0026rdquo; button.\n The Settings → Code Servers page.\n  Selecting a server type # Different BluBracket editions support different server types:\n    BluBracket\nCommunity Edition BluBracket\nTeam Edition BluBracket\nEnterprise Edition     GitHub Cloud  Add via OAuth   Add via OAuth   Add via PAT    GitHub Enterprise Server Not supported Not supported Add via PAT   GitLab Cloud  Add via PAT   Add via PAT   Add via PAT    GitLab on-prem Not supported Not supported Add via PAT   Bitbucket Cloud  Add via PAT   Add via PAT   Add via PAT    BitBucket server Not supported Not supported Add via PAT   Azure DevOps  Add via PAT   Add via PAT   Add via PAT      The list of code server types in a BluBracket account.\n    "
        
      })
      .add(
      {
        id: 43,
        href: "/intro/use-cases/",
        title: "BluBracket use-cases",
        description: "Risks BluBracket solves and how.",
        
        
          
            
          
            
          
        
        
        content: "Scanning End Points for Code Copies Using the BluBracket Scanner – BluBracketWhy should I use the BluBracket Free Trial to discover secrets in code when there are so many other tools available? – BluBracketBluBracket is most often used to identify risks in code, who has access, and where it goes:\n Identifying, preventing, and removing risks in code   Secrets   Personally identifiable information (PII)   Non-inclusive language (NIL)   Code analysis (SAST)   Infrastructure-as-code (IAC) risks   Dependency vulnerabilities     Monitoring who and what has access to your code   Monitoring where your code goes   Secrets in code # Passwords, keys, and other secrets in code are no longer secret when code is shared across teams, repos are made public, or when employees leave with copies of the code.\nBluBracket\u0026rsquo;s tools identify and help eliminate secrets throughout the development workflow (before commit, review on pull request, and alert on commits to monitored repos), and make it easy to triage and mitigate secrets previously committed.\nBluBracket\u0026rsquo;s deep scans identify secrets in git history, and can even identify active secrets so you know which ones are most important.\nPersonally identifiable information (PII) # Unlike secrets, personally identifiable information can\u0026rsquo;t be changed or rotated. As companies face growing liability for mishandling PII, finding and excising it from code is becoming a growing need.\nBluBracket\u0026rsquo;s deep scans identify PII in git history, show teams the PII risk across their codebase, and help remediate. Just as with BluBracket\u0026rsquo;s secret detection tools, BluBracket can block commits of new PII, block PRs with PII, and alert teams any time PII is committed to monitored repos.\nNon-inclusive language (NIL) # Companies and open source communities are both increasingly aware of the role inclusive language plays in attracting and retaining team members in all roles. Non-inclusive language creates both significant brand risks, as well as retention risks.\nBluBracket\u0026rsquo;s tools help identify non-inclusive language throughout the development process, and guide teams to continuous improvement over time.\nInfrastructure as code (IaC) risks (powered by Checkov) # Monitoring infrastructure-as-code for proper configuration before it\u0026rsquo;s applied to the infrastructure reduces risk and improves productivity for teams of all sizes.\nBluBracket\u0026rsquo;s tools automatically and continuously audit IaC throughout the development process, but teams value the guidance most when reviewing pull requests.\n Learn more about how BluBracket has integrated Checkov and the unique features available when using Checkov inside BluBracket.\nDependency vulnerabilities (powered by Snyk) # 👉  This feature is an available option for Enterprise customers.   BluBracket\u0026rsquo;s core tools give security teams and developers comprehensive visibility to their internal code supply chain. And now, integrated dependency vulnerability reports powered by Snyk Open Source add visibility to the external code supply chain.\nThe combined power of BluBracket and Snyk offers the only end-to-end code supply chain security solution available today.\nCode analysis (powered by Semgrep) # 👉  This feature is only available to Enterprise customers.   Spotting SQL injection, XSS, insecure crypto, and other OWASP top ten risks, as well as performance and maintainability best practices helps runtime security and overall code quality.\nCode analysis recommendations are presented side-by-side other code risks, giving developers and security teams a comprehensive view of code health.\nMonitoring git access \u0026amp; configuration # 👉  This feature is only available to Enterprise customers.   Knowing who and what systems have access to code is critical to supporting modern workflows that often require broad access across the organization, while also protecting organizations and teams against stale permissions and misconfigurations that can emerge over time.\nIdentifying who has access to what, and calling out the best-practice configuration of everything from git hooks to branch protection rules helps guide teams to continuous improvement and ongoing operational security. When teams know they can automatically and continuously audit access, they\u0026rsquo;re both more productive because they can more easily grant access, and more secure because they have tools to\nCode leaks # 👉  This feature is only available to Enterprise customers.   Productive teams need to share code, but when code leaks outside the organization it can risk revealing key details attackers can leverage against the app, or worse.\nMost code leaks are unintentional—private code can be accidentally committed to open source projects or in gists to discuss a problem—but the pathways code moves through frustrates developers and hampers productivity. BluBracket can identify code leaks so they can be remediated before they cause significant harm.\n"
        
      })
      .add(
      {
        id: 44,
        href: "/how-to/cli/",
        title: "CLI tool",
        description: "How to install and use the BluBracket CLI Tool.",
        
        
          
            
          
        
        
        content: "The BluBracket Command Line Interface (CLI) Tool – BluBracketThe BluBracket CLI tool enables the detection of risks before they are committed. Utilizing pre-commit hooks and a configurable .blubracket-ignore file, the CLI tool can be customized to detect and prevent risks from being committed into a project.\n"
        
      })
      .add(
      {
        id: 45,
        href: "/how-to/code-servers/",
        title: "Code servers",
        description: "Code lives in git repos, and git repos are hosted by code servers. Most git hosting providers structure git repos into collections such as GitHub\u0026rsquo;s Organizations and Bitbucket\u0026rsquo;s Workspaces. In BluBracket, each of those collections is a separate code server.\nSupported code servers in BluBracket #    GitHub GitLab Bitbucket Azure DevOps     Cloud \u0026amp; Enterprise Cloud \u0026amp; on-prem Cloud \u0026amp; Server Cloud    Supported access \u0026amp; configuration risks   Supported access \u0026amp; configuration risks  Access \u0026amp; configuration risks not supported Access \u0026amp; configuration risks not supported    GitHub Checks    Bitbucket Code Insights      Add a GitHub code server   Add a GitLab code server   Add a Bitbucket code server   Add an Azure DevOps code server     ",
        
        
        
        content: "Code lives in git repos, and git repos are hosted by code servers. Most git hosting providers structure git repos into collections such as GitHub\u0026rsquo;s Organizations and Bitbucket\u0026rsquo;s Workspaces. In BluBracket, each of those collections is a separate code server.\nSupported code servers in BluBracket #    GitHub GitLab Bitbucket Azure DevOps     Cloud \u0026amp; Enterprise Cloud \u0026amp; on-prem Cloud \u0026amp; Server Cloud    Supported access \u0026amp; configuration risks   Supported access \u0026amp; configuration risks  Access \u0026amp; configuration risks not supported Access \u0026amp; configuration risks not supported    GitHub Checks    Bitbucket Code Insights      Add a GitHub code server   Add a GitLab code server   Add a Bitbucket code server   Add an Azure DevOps code server     "
        
      })
      .add(
      {
        id: 46,
        href: "/how-to/ignore-rules/",
        title: "Configure ignore rules",
        description: "Instructions on how to configure ignore fules for different levels, locally, per repo, and globally",
        
        
        
        content: "Configuring rules for ignoring detected risks can be set at multiple levels:\n  Per repo , with configuration files in the repo  Globally , for all users and repos in an account, with a configuration file in the account  "
        
      })
      .add(
      {
        id: 47,
        href: "/how-to/ignore-rules/global/",
        title: "Configuring global ignore rules",
        description: "How to setup global ignore rules for all users of a BluBracket account",
        
        
        
        content: "Ignore rules can be set up globally for a BluBracket tenant. blubracket-ignore.yaml allows Blubracket users to ignore specific secret types, secret values, or paths. This file must be sent utilizing the Blubracket API’s. When a match of the ignore file is made, an alert will not be created however an event will still be made.\nNote: This will not change any existing alerts/events in the platform.\n  Download integration API key\n  Set environment variables\nThe TOKEN for BLUBRACKET_INTEGRATION_KEY can be found in the .json file downloaded after generating an API key.\nThe BLUBRACKET_HOST is the base URL for your BluBracket account, prepended with https:// and with no trailing /.\n On Linux and macOS:  export BLUBRACKET_INTEGRATION_KEY='TOKEN' export BLUBRACKET_HOST='https://YOURBLUBRACKETHOST.blubracket.com'   Windows:  $Env:BLUBRACKET_INTEGRATION_KEY='TOKEN' $Env:BLUBRACKET_HOST ='https://YOURBLUBRACKETHOST.blubracket.com'      Create blubracket-ignore.yaml\n# ignores any of the paths below - paths: - oanda_connector.py - MachLearn-23.py # ignores any secret values below - secret_values: - My$uperDuperP@ssw0rd! # ignores any secret types below - secret_types: - aws_access_key_id # per repo-rules - repo_url: (?i)github.com/blubracket/(apache_tomcat_2.0|crm_order_management) rules: - secret_values: - My$uperDuperS3cret! - secret_types: - google_oauth - paths: - helm/values.yaml    Upload yaml file via API using curl:\ncurl -H \u0026quot;Authorization: Bearer ${BLUBRACKET_INTEGRATION_KEY}\u0026quot; --data-binary \u0026quot;@blubracket-ignore.yaml\u0026quot; ${BLUBRACKET_HOST}/api/public/blubracket-ignore    Confirm upload using:\ncurl -i -H \u0026quot;Authorization: Bearer ${BLUBRACKET_INTEGRATION_KEY}\u0026quot; ${BLUBRACKET_HOST}/api/public/blubracket-ignore    To delete blubracket-ignore:\ncurl -i -X DELETE -H \u0026quot;Authorization: Bearer ${BLUBRACKET_INTEGRATION_KEY}\u0026quot; ${BLUBRACKET_HOST}/api/public/blubracket-ignore    Any new secrets, PII or Non-inclusive language ignored will automatically be annotated as “Reviewed as Not Important” and labeled as “Ignore rule”\n  "
        
      })
      .add(
      {
        id: 48,
        href: "/how-to/ignore-rules/per-repo/",
        title: "Configuring ignore rules per repo",
        description: "How to set ignore rules ignore rules for all users of a repository",
        
        
        
        content: "In some cases a repo administrator may want to ignore specific secret types, secret values, or paths for all commits by any contributor to that repo. This can be achieved by creating an ignore.yaml file. This file is then placed into the root directory of the repository, within a .blubracket directory at the repo root.\nWhen a match of the ignore file is made, an alert will not be created (but an event will still be generated).\nExample below is a repository called Test1, which has a .blubracket directory and within the folder is the ignore.yaml file.\n  Sample .blubracket/ignore.yaml # # Ignore by file path - paths: - \u0026quot;**/*_test.go\u0026quot; - cli/cmd/default-sensitive-words-config.yaml - cli/cmd/data/* # Ignore by secret value # Equivalent to 'secret_value == my_password OR secret_value == my_token' - secret_values: - my_password - my_token # Ignore by secret type # Equivalent to 'secret_type == password_assignment OR secret_type == secret_assignment' - secret_types: password_assignment  "
        
      })
      .add(
      {
        id: 49,
        href: "/api/event-alert/",
        title: "Event \u0026 alert",
        description: "Reading and searching events and alerts.",
        
        
        
        content: "Getting a list of alerts # Filter for getting all secrets, first page of results, return 10 results.\nEndpoint # POST https://[hostname]/api/public/alert/search\nCalled with bearer token.\nRequest body # { \u0026quot;filters\u0026quot;: [ { \u0026quot;id\u0026quot;: \u0026quot;alert_type\u0026quot;, \u0026quot;value\u0026quot;: [ \u0026quot;REPO_SCAN_MATCH\u0026quot; ], \u0026quot;op\u0026quot;: \u0026quot;EQ\u0026quot;, \u0026quot;exact_match\u0026quot;: true } ], \u0026quot;limit\u0026quot;: 10, \u0026quot;page\u0026quot;: 1 }  Response # Success: 200\nSet of 10 alert objects.\nGetting alerts for a specific set of repos # Filter for getting all secrets in a set of repos, first page of results, return 10 results.\nEndpoint # POST https://[hostname]/api/public/alert/search\nCalled with bearer token.\nRequest body # { \u0026quot;filters\u0026quot;: [ { \u0026quot;id\u0026quot;: \u0026quot;alert_type\u0026quot;, \u0026quot;value\u0026quot;: [ \u0026quot;REPO_SCAN_MATCH\u0026quot; ], \u0026quot;op\u0026quot;: \u0026quot;EQ\u0026quot;, \u0026quot;exact_match\u0026quot;: true }, { \u0026quot;id\u0026quot;: \u0026quot;url\u0026quot;, \u0026quot;value\u0026quot;: [ \u0026quot;git://github.com/bludemogh/myfirstrepo.git\u0026quot;, \u0026quot;git://github.com/bludemogh/myotherrepo.git\u0026quot; ], \u0026quot;op\u0026quot;: \u0026quot;EQ\u0026quot;, \u0026quot;exact_match\u0026quot;: true } ], \u0026quot;limit\u0026quot;: 100, \u0026quot;page\u0026quot;: 1 }  Response # Success: 200\nSet of 10 alert objects in the specified repos.\n"
        
      })
      .add(
      {
        id: 50,
        href: "/how-to/code-servers/git-server-acccess-configuration/",
        title: "Git server access \u0026 configuration",
        description: "Supported access and configuration risks by code server.",
        
        
        
        content: "Supported access and configuration risks by code server.\n"
        
      })
      .add(
      {
        id: 51,
        href: "/how-to/code-servers/git-server-acccess-configuration/github/",
        title: "GitHub access \u0026 configuration risks",
        description: "BluBracket monitors and alerts on potential security security issues related to access and configuration of GitHub accounts. The following is a list of these configurations that BluBracket is currently monitoring. BluBracket will continue to add to this list and as we have support for other solutions we will add similar alerts.\nOrganization-level configuration risks #  Base level setting is too permissive: Base permissions to the organization’s repositories apply to all members and exclude outside collaborators.",
        
        
        
        content: "BluBracket monitors and alerts on potential security security issues related to access and configuration of GitHub accounts. The following is a list of these configurations that BluBracket is currently monitoring. BluBracket will continue to add to this list and as we have support for other solutions we will add similar alerts.\nOrganization-level configuration risks #  Base level setting is too permissive: Base permissions to the organization’s repositories apply to all members and exclude outside collaborators. Since organization members can have permissions from multiple sources, members and collaborators who have been granted a higher level of access than the base permissions will retain their higher permission privileges. If this setting is set to anything other than “None” BluBracket will display an alert. It is best practice to have this set to “None” and configure each repository individually. Members can create public repositories: BluBracket will display an alert if organization members can create public repositories. It is understood that some members may need to create public repositories for collaboration reasons, yet at the same time it can be a code egress point and therefore is displayed as an alert. Two factor is not enforced on the organization: BluBracket will display an alert if two factor authentication is not configured on the organization. This may not be an issue if a company is using an external SAML solution, since two factor could be set there. Members can fork private repositories (coming soon). Members can change repository visibilities (coming soon). Members can delete or transfer repositories (coming soon).  Repository-level configuration risks #  No branch protection rules set on the repository: This alert will only be thrown if no branch protection rules are set. The repository does not restrict direct pushes: BluBracket will display an alert if there are no restrictions for direct pushes across any branch. A specific risk here would be the ability for a developer to push code directly into the main branch without any review process in place. The repository does not require pull request reviews: This alert will be displayed for repositories only if no branches in the repository have pull request restrictions. It is common for some branches to not have pull request restrictions, but best practice is that critical branches should have some level of restrictions. The repository requires an insufficient number of reviewers: BluBracket will display an alert if the number of reviewers is set below the minimum threshold number. This requires additional user inputs fields in the BluBracket interface and is currently unavailable/disabled. The repository does not invalidate stale reviews: This alert will be displayed if a developer can continue to push changes to a pull request without requesting further reviews. This is a potential risk path for unreviewed code being pushed into a critical branch.  "
        
      })
      .add(
      {
        id: 52,
        href: "/how-to/code-servers/git-server-acccess-configuration/gitlab/",
        title: "GitLab access \u0026 configuration risks",
        description: "BluBracket monitors and alerts on potential security security issues related to access and configuration of GitLab accounts. The following is a list of these configurations that BluBracket is currently monitoring. BluBracket will continue to add to this list and as we have support for other solutions we will add similar alerts.\nSystem-level configuration risks (on-prem only) # Note: these features can be enabled by request.\n Too many admins on system: Default is five.",
        
        
        
        content: "BluBracket monitors and alerts on potential security security issues related to access and configuration of GitLab accounts. The following is a list of these configurations that BluBracket is currently monitoring. BluBracket will continue to add to this list and as we have support for other solutions we will add similar alerts.\nSystem-level configuration risks (on-prem only) # Note: these features can be enabled by request.\n Too many admins on system: Default is five. Public sign-up enabled: Any user who visits the on-premise domain can register for an account. By default, this is allowed. Combined with a public organization and public repositories, this would allow anyone to view available code. Triggered only if whitelist domains are not specified. Repository mirroring enabled Two factor is not enforced on the system: BluBracket will display an alert if 2FA is not configured on the system. Default group visibility set to public Default project visibility set to public No default branch protection rules set: Branch protection rules across the instance should be set up by default to protect against force pushes and branch deletion. If it has been explicitly downgraded to none, an alert will be triggered.  Organization-level configuration risks #  Too many owners in org: Default is five. Two factor is not enforced on the organization (cloud only): If 2FA is not enforced on the system, BluBracket will check if 2FA is enforced on the organization. An alert is triggered if 2FA is not enforced for all the users in the organization. Group visibility is set to public: When the organization is set to public, repositories under that organization can be set to public as well. Members of the organization with appropriate access may be able to create public repositories. Projects in this group can be forked outside the group (requires GitLab Silver/Premium+ and v13.3+) SAML SSO not enabled (requires GitLab Silver/Premium+ paid license, cloud only)  Repository-level configuration risks #  Repository is being mirrored: GitLab provides a mirroring feature, where the tracked repository can be kept in sync with another internal or external repository. When this GitLab repository is a “pull mirror”, where the tracked repository pulls in changes from another repository, an event is created. When this GitLab repository is a “push mirror”, where the tracked repository pushes code changes to another repository, an event and alert are created. Too many maintainers in repository: Default is five. No branch protection rules set on repository: Without branch protection rules, both developers and maintainers can force push changes, as well as delete branches. By default, branch protection rules should be set, so if it has been explicitly downgraded to none, an alert will be triggered. Repository does not restrict direct pushes to default branch: Even with branch protection rules set, some users, by default, are still allowed to push to the default branch. Repository does not restrict direct pushes: Even with branch protection rules set, some users, by default, are still allowed to push to a protected branch. Granular access to allow no one to push to a protected branch is available via GitLab. An alert will be triggered if this granular access has not been updated to disallow pushing to a protected branch. Repository does not allow merges: Merges are disabled, and no users can merge code changes into the default branch. Repository does not require merge request reviews: This alert will be triggered in a few cases (requires GitLab Bronze/Starter+ paid license):  Merge requests are enabled, but requirements for reviews can be overridden Merge requests are enabled, but no reviewers are required Merge requests are enabled, and the merge requires one reviewer, but the author is allowed to approve their own merge request   Repository requires an insufficient number of reviewers: This alert will be triggered if the effective number of reviewers is set below the minimum threshold number, which can be specified in the BluBracket interface. The effective number of reviewers required will be the number of reviewers discounting the author’s approval if the author is allowed to approve their own merge request. Default is two. (Requires GitLab Bronze/Starter+ paid license.) Repository does not invalidate stale reviews: This alert will be triggered if new pushes to a merge request do not invalidate old reviews. (Requires GitLab Bronze/Starter+ paid license.)  "
        
      })
      .add(
      {
        id: 53,
        href: "/how-to/",
        title: "User guide",
        description: "",
        
        
        
        content: ""
        
      })
      .add(
      {
        id: 54,
        href: "/how-to/ci-checks/bitbucket-insights/",
        title: "Configure BitBucket Code Insights",
        description: "Prerequisites # This integration depends on an API endpoint to fetch the pull request details from the commit . This API endpoint specifically requires pull request links to be indexed, which means that within the lifetime of the repository a user has to have clicked “go to pull request” from the per commit view of the Bitbucket Cloud UI at least once.\nEnable BitBucket Code Insights #  Contact the customer success team to enable BitBucket Code Insights.",
        
        
        
        content: "Prerequisites # This integration depends on an API endpoint to fetch the pull request details from the commit . This API endpoint specifically requires pull request links to be indexed, which means that within the lifetime of the repository a user has to have clicked “go to pull request” from the per commit view of the Bitbucket Cloud UI at least once.\nEnable BitBucket Code Insights #  Contact the customer success team to enable BitBucket Code Insights.\n"
        
      })
      .add(
      {
        id: 55,
        href: "/how-to/ci-checks/github-checks/",
        title: "Configure GitHub Checks",
        description: "Prerequisites # To install the BluBracket app for GitHub Checks, permissions to install a GitHub App on an org are required. This would be an organization owner or someone with admin level permissions in a repository .\nChoosing which app to install # The BluBracket app for GitHub Checks is available for all BluBracket editions, and multiple offerings of GitHub.\n    GitHub Cloud GitHub Enterprise\n(including Server)     BluBracket Community Edition  BluBracket Community \u0026amp; Team Edition  n/a   BluBracket Team Edition  BluBracket Community \u0026amp; Team Edition  n/a   BluBracket Enterprise Edition  BluBracket Enterprise Edition   BluBracket Enterprise Edition \u0026amp; GitHub Enterprise Server     GitHub Checks setup for GitHub Cloud and BluBracket Community \u0026amp; Team Edition accounts # BluBracket Community and Team Edition accounts are monitored by the BluBracket Community Edition app.",
        
        
        
        content: "Prerequisites # To install the BluBracket app for GitHub Checks, permissions to install a GitHub App on an org are required. This would be an organization owner or someone with admin level permissions in a repository .\nChoosing which app to install # The BluBracket app for GitHub Checks is available for all BluBracket editions, and multiple offerings of GitHub.\n    GitHub Cloud GitHub Enterprise\n(including Server)     BluBracket Community Edition  BluBracket Community \u0026amp; Team Edition  n/a   BluBracket Team Edition  BluBracket Community \u0026amp; Team Edition  n/a   BluBracket Enterprise Edition  BluBracket Enterprise Edition   BluBracket Enterprise Edition \u0026amp; GitHub Enterprise Server     GitHub Checks setup for GitHub Cloud and BluBracket Community \u0026amp; Team Edition accounts # BluBracket Community and Team Edition accounts are monitored by the BluBracket Community Edition app. .\n    The BluBracket app for GitHub Checks is automatically installed when adding a GitHub org to your BluBracket Community Edition and BluBracket Team Edition account.\nNote: if you added your GitHub org to BluBracket before 1 June 2022, the GitHub Checks was not automatically configured. Please follow these instructions to add GitHub Checks:\n If you are monitoring all repos in the GitHub org: go through the steps to add the GitHub org as a code server again (don\u0026rsquo;t delete the old code server). This won\u0026rsquo;t create any duplicate, it will simply add GitHub Checks to the existing configuration. If you are not monitoring all repos in the GitHub org: remove the current code server and re-add it to BluBracket . When re-adding the code server, the GitHub interface will allow you to select which repos you wish to monitor.  Whatever path you choose, your future PRs + commits to PRs in monitored repos will be checked by BluBracket.\nGitHub Checks setup for BluBracket Enterprise Edition # BluBracket Enterprise Edition accounts are monitored by the BluBracket Checks App. .\nOnce your BluBracket Enterprise Edition account is configured and code servers setup, simply install the BluBracket Checks App. (this must be done by someone who has permissions in GitHub to install the app). Once installed, your future PRs + commits to PRs in monitored repos will be checked by BluBracket.\n    GitHub Checks setup for GitHub Enterprise Server # This version of GitHub Checks is for paid customers using the on-premise GitHub Enterprise Server\n Setup your BluBracket Enterprise Edition and configure code servers setup Create the GitHub Enterprise Server Checks app (follow the instructions here )  One step in those instructions is to send the configuration details to the customer success team. Wait for confirmation from the team before proceeding.   Install the app created from step 2 on the organization (this must be done by someone who has permissions in GitHub to install the app).  Once installed, your future PRs + commits to PRs in monitored repos will be checked by BluBracket.\n    BluBracket app for GitHub Checks workflow # Whatever version of the BluBracket app for GitHub Checks you choose, it will run for every pull request, and for every new commit to any open pull requests.\nThe app will alert you to any secrets found in the pull request, including both the tip of the pull request and the history of any commits. The alert includes details on where and what type of secret was found.\n Example of a failing check on a pull request\n  By default, the BluBracket app for GitHub Checks does not block any pull requests. Usage statistics show over 80% of warnings about secrets in PRs are fixed before commit, and the non-blocking workflow is more respectful of developer needs.\nConfiguring repositories # To configure which repositories the BluBracket app for GitHub Checks monitors after installation, go to your GitHub organization → settings → GitHub apps (the URL pattern is github.com/organizations/{orgname}/settings/installations) to review all applications installed in the org.\nConfiguration is the same for all versions of the BluBracket app for GitHub Checks.\n The BluBracket app for GitHub Checks for BluBracket Community and Team Edition accounts as it appears in the GitHub app configuration page\n  Find the BluBracket app for GitHub Checks in the list and click the \u0026ldquo;configure\u0026rdquo; button.\n Configuring the BluBracket app for GitHub Checks for BluBracket Community and Team Edition accounts\n  Using the GitHub interface, make selections about which repos the app can access, and save the changes.\nAny changes take effect with the next pull request (or commit in an open pull request), and apply to all users of the org.\nDisabling GitHub Checks # Follow the steps to configure the BluBracket app for GitHub Checks app. From the configuration page, select either suspend or uninstall.\n The options to uninstall the BluBracket app for GitHub Checks for BluBracket Community and Team Edition accounts\n  Both options take effect immediately and apply to the entire GitHub org.\n"
        
      })
      .add(
      {
        id: 56,
        href: "/how-to/cli/cli-docs/",
        title: "BluBracket CLI options and usage",
        description: "Options and usage for the BluBracket CLI",
        
        
        
        content: "The BluBracket CLI is a high-performance, compact risk scanner written in Go. Unlike some tools, it runs entirely locally without sending any data to remote hosts (unless explicitly configured otherwise).\n Installation for Linux, macOS, and Windows is detailed here .\nKey usage of the BluBracket CLI tool is as part of a local git workflow, such as for pre-commit hooks , scanning STDIN , a file or directory , or as a local gRPC server to support integrations with IDEs and other applications.\nblubracket \u0026ndash;help # Overview of BluBracket commands.\nUsage: blubracket [command] Available Commands: checks Various system checks commit-signing Top level command for commands specific to commit signing help Help about any command install-git-hooks Installs git hooks license Prints the license details scan-dir Scan a directory scan-file Scan a file serve Run gRPC server upload-stats Uploads stats to BluBracket portal; normally, it should not be used directly Flags: -h, --help help for blubracket -v, --version version for blubracket  Commands and usage related to local git workflows are documented here , additional commands detailed below.\nblubracket scan-file -h # Scanning a file or STDIN.\nScan a file Usage: blubracket scan-file [flags] Flags: --filename string Specifies input filename in case stdin is used as input, ignored if real file is used as input -h, --help help for scan-file -i, --input string If specified scans that file, otherwise it scans stdin -o, --output string If specified output information about found secrets to that file, otherwise stdout  blubracket scan-dir -h # Scanning a directory.\nScan a directory Usage: blubracket scan-dir [flags] Flags: -h, --help help for scan-dir -o, --output string Specifies the file to store information about found secrets (required) -p, --path string If specified scans that directory, otherwise it scans current directory  blubracket serve -h # Operating as a local server to support more sophisticated integrations.\nStarts a daemon that serves gRPC requests. blubracket serve \u0026lt;listen-uri\u0026gt; where \u0026lt;listen-uri\u0026gt; is of format \u0026lt;network\u0026gt;:\u0026lt;address\u0026gt; \u0026lt;network\u0026gt; - must be \u0026quot;unix\u0026quot;, \u0026quot;tcp\u0026quot;, \u0026quot;tcp4\u0026quot;, \u0026quot;tcp6\u0026quot; \u0026lt;address\u0026gt; - specify network address For example: blubracket serve unix:/tmp/blubracket-cli-server-123 Usage: blubracket serve [flags] Flags: -h, --help help for serve  "
        
      })
      .add(
      {
        id: 57,
        href: "/how-to/add-user/",
        title: "Adding a BluBracket user",
        description: "How to add a BluBracket user",
        
        
        
        content: "The first thing you might want to do is add your team members to assist with the setup and management. As soon as you log into your BluBracket tenant, you should create at least one additional user for the admin portal:\n  Go to Settings.\n  Click Account Tab.\n     Click Add User      Assign a unique username.\n  Enter the user’s email address.\n  Click Create.\n  "
        
      })
      .add(
      {
        id: 58,
        href: "/how-to/code-servers/add-code-servers/azure-devops/",
        title: "Adding an Azure DevOps code server",
        description: "How to add an Azure DevOps code server to your tenant",
        
        
        
        content: "After selecting to add an Azure DevOps code server , follow the instructions below to add an Azure DevOps Organization as a code server in BluBracket.\nEach Azure DevOps Organization is a different code server in BluBracket.\nEntering the organization name #   Enter the short form of the Azure DevOps Organization name. The short form of the name is the version shown in the URL for the org.\nGenerating and entering a personal access token (PAT) # BluBracket uses a personal access token to access the repos you wish to scan ( see Azure\u0026rsquo;s docs on personal access tokens ).\n Instructions on generating and entering a personal access token. "
        
      })
      .add(
      {
        id: 59,
        href: "/api/",
        title: "API",
        description: "How to access and use the BluBracket API.",
        
        
        
        content: ""
        
      })
      .add(
      {
        id: 60,
        href: "/api/ci-checks/",
        title: "CI checks",
        description: "These APIs can be used to integrate BluBracket checks into a continuous integration (CI) workflow and help prevent risks being committed to a protected branch.\nStart a scan # Start a scan for a list of commits or a pull request\nEndpoint # POST /api/analyzer/commit/scan\nParameters #  repo_url (string, required): URL of the repo pull_request_number (int, one of pull_request_number or commit_shas is required): The id number of the pull request to be scanned.",
        
        
        
        content: "These APIs can be used to integrate BluBracket checks into a continuous integration (CI) workflow and help prevent risks being committed to a protected branch.\nStart a scan # Start a scan for a list of commits or a pull request\nEndpoint # POST /api/analyzer/commit/scan\nParameters #  repo_url (string, required): URL of the repo pull_request_number (int, one of pull_request_number or commit_shas is required): The id number of the pull request to be scanned. commit_shas (a list of strings, one of commit_shas or pull_request_number is required): full SHA of the commits to be scanned  Sample request body # For scanning a pull request\n{ \u0026quot;repo_url\u0026quot;: \u0026quot;https://github.com/my_org/my_repo\u0026quot;, \u0026quot;pull_request_number\u0026quot;: 3891 }  For scanning a list of commits\n{ \u0026quot;repo_url\u0026quot;: \u0026quot;https://github.com/my_org/my_repo\u0026quot;, \u0026quot;commit_shas\u0026quot;: [ \u0026quot;a20cb4ca5c14ff27bdf16989d450c83b22f156d8\u0026quot;, \u0026quot;d0d6593d1d4e81acd073244f42b6893fa65c99d8\u0026quot; ] }  Sample response # { \u0026quot;scan_uuid\u0026quot;: \u0026quot;fd974b65-61ba-4576-849a-0e6aa1fdd16b\u0026quot; }  Note: The scan_uuid returned in the response can be used to query the result once it’s ready.\nGet the scan result # Get the result of the scan with a given id\nEndpoint # GET /api/analyzer/commit/scan/{scan_uuid}\nwhere scan_uuid is the ID of the scan\nResponse code # 200 - Scan is completed\n202 - Scan is still in progress\nSample response # { \u0026quot;secrets\u0026quot;: { \u0026quot;d0d6593d1d4e81acd073244f42b6893fa65c99d8\u0026quot;: { \u0026quot;secrets_found\u0026quot;: [ { \u0026quot;secret_hash\u0026quot;: \u0026quot;a392d713-4000-419a-b720-6a037b6147e3\u0026quot;, \u0026quot;secret_type\u0026quot;: \u0026quot;google_api_key\u0026quot;, \u0026quot;file_path\u0026quot;: \u0026quot;token.py\u0026quot;, \u0026quot;line_no\u0026quot;: 32, \u0026quot;cols\u0026quot;: [ 13, 29 ], \u0026quot;secret_checker_results\u0026quot;: { \u0026quot;tags\u0026quot;: [ \u0026quot;active_secret\u0026quot; ] } } ] } }, \u0026quot;scan_state\u0026quot;: \u0026quot;done\u0026quot;, \u0026quot;message\u0026quot;: \u0026quot;\u0026quot; }  "
        
      })
      .add(
      {
        id: 61,
        href: "/how-to/add-user-ad-saml/",
        title: "Configure Azure AD",
        description: "How to configure Azure AD SAML and manage users",
        
        
        
        content: "BluBracket supports single sign-on and federated identity services with Azure Active Directory using SAML. This article covers configuring the BluBracket app in Azure AD, configuring the Azure AD SAML federation in BluBracket, and managing users.\nOnce single sign-on is configured as described below, authentication, passwords, and two-factor authentication are managed and configured in Azure AD.\nHowever, users must be registered in both BluBracket and Azure AD. Removing a user from either Azure or BluBracket will terminate their access to BluBracket. Additionally, the email address for each user in BluBracket must match the email address in Azure AD.\nBluBracket requires an email attribute in order to successful identify and authenticate users; BluBracket looks for this value from the SAML identity claim http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress.\nRegister the BluBracket app in Azure Active Directory #  Login to Azure AD as an Administrator https://portal.azure.com  Select the Azure Active Directory service    Select Enterprise applications    Select + New application    Select Application you\u0026rsquo;re developing    Select the link Ok, take me to App Registrations to register my new application    Select + New registration.    Register the Application  App name: BluBracket Select the appropriate radio button for who can use this application Specify the Redirect URI  Type: Web URI: https://TENANT_NAME.blubracket.com/api/saml/sso (Be sure to replace TENANT_NAME with the name of your tenant name provided by BluBracket)   Select Register       Get the federation metadata document URL from Azure AD #  Navigate to Azure Active Directory portal . Under Manage, select App registrations, and then select Endpoints in the top menu, then copy and save the Federation metadata document.    Select the BluBracket application    Copy and save the Application (client) ID     Set the SAML federation metadata document URL and client ID in BluBracket #  Navigate to https://TENANT_NAME.blubracket.com/settings/auth (Be sure to replace TENANT_NAME with the name of your tenant name provided by BluBracket). Expand Single Sign-On and enter the federation metadata document URL.    Enter the Application (client) ID from step 15     Grant permissions to users in Azure AD to use BluBracket #  Navigate to Enterprise applications in the Azure portal.    Select the BluBracket application    Add users:    Select Users and groups, and then select Add user. On Add Assignment, select Users and groups to open the Users and groups selection list. Select as many groups or users as you want, then click or tap Select to add them to the Add Assignment list. You can also assign a role to a user at this stage. Select Assign to assign the users or groups to the selected enterprise application    Add users in BluBracket # Tenant administrators must add users to their BluBracket tenant prior to login via single sign-on. Full details are here .\n  Test the Azure AD/SAML configuration # Open https://TENANT_NAME.blubracket.com in a new private browser window or open a different browser to test the Single Sign-on changes (Be sure to replace TENANT_NAME with the name of your tenant name provided by BluBracket). The login page should automatically redirect to Azure AD, if Azure AD authentication is successful, the user will then be redirected back to BluBracket and logged into the tenant.\nTroubleshooting: use https://TENANT_NAME.blubracket.com/login?force=true to login via local authentication\n"
        
      })
      .add(
      {
        id: 62,
        href: "/intro/getting-started/",
        title: "Getting started with BluBracket",
        description: "How to sign up and start using BluBracket for free",
        
          
            
          
            
          
            
          
        
        
          
            
          
            
          
        
        
        content: "free trialoauthGitHubGetting Started with BluBracket Team and Enterprise Editions - BluBracketGetting Started with the Free Trial - BluBracketGetting started with BluBracket is a three step process:\n Sign up Add a code server Start improving security  Signing up #   To start using BluBracket for free, visit our signup page and click the start for free button.\n Begin your three-step process by clicking the start for free button.\n  Then approve the GitHub OAuth request.\n Accept the GitHub OAuth request.\n  After authenticating and approving the permissions to sign in with GitHub, we\u0026rsquo;ll create a free account for you.\nBookmark your account so you can come back easily.\nSigning in # Refer to your welcome email when you first signed in to BluBracket for your personalized account dashboard URL. You must use this URL in order to sign in.\n BluBracket provides your login link through email.\n  Adding your first code server #   Go to Settings → Code Servers in the BluBracket web console to add repos from your GitHub, GitLab, Bitbucket, or another supported code server.\nFull details about how to add a code server are available in the usage guide .\nImprove your code security with every commit #  Add BluBracket to your workflow with GitHub Checks or the CLI tool so you can identify risks before your next commit. Review existing risks to understand your overall code health and make a plan for what is urgent and what can wait. Track your security health improvements with every commit.    "
        
      })
      .add(
      {
        id: 63,
        href: "/how-to/remediate-alerts/",
        title: "Remediate alerts",
        description: "How to remediate alerts",
        
        
        
        content: "There are a number of best practices when it comes to handling secrets in code. Below are a few:\n  Encrypt your secrets\n  Use environmental variables\n  Use a secret manager to store your secrets, like HashiCorp Vault, Azure Key Vault, etc.\n  Once BluBracket has found a secret and you have had a chance to remediate the secret in code, marking it as reviewed will help you easily differentiate it from those that still require action.\n"
        
      })
      .add(
      {
        id: 64,
        href: "/how-to/cli/using-cli-with-git/",
        title: "Using the CLI tool in git workflows",
        description: "Details about how to use the CLI tool.",
        
        
        
        content: "Installation #  How do I Install the BluBracket command line interface (CLI) tool? Setting git hooks # In terminal, cd to the repo dir, then blubracket install-git-hooks\nC:\\Users\\vbuzu\\projects\\sandbox\u0026gt;blubracket install-git-hooks Successfully installed pre-commit hook to 'C:/Users/vbuzu/projects/sandbox/.git/hooks/pre-commit'  If git is setup to use global git hooks (specified by core.hooksPath git config), CLI will update/install the hook in that global folder.\nCurrently CLI will set only one hook, pre-commit.\nCurrent limitations # CLI will install the pre-commit hook automatically only if the hook does not exist yet or the hook does exist and is implemented as a shell script (determined by the presence of #!/bin/sh or #!/usr/bin/env bash lines). In all other cases, e.g. if the hook is a python script, the CLI invocation must be added to the hook manually. It should be an equivalent of the follow shell command blubracket pre-commit \u0026quot;$@\u0026quot; || { exit \u0026quot;$?\u0026quot;; }: run blubracket command with pre-commit as the first parameter followed by all other parameters passed to the hook itself; exit/stop the hook on any non-zero exit codes from blubracket.\nPre-commit.com integration # The CLI tool integrates with the https://pre-commit.com hook management tool now. If it is detected that the pre-commit tool is used to manager the hooks, the CLI will add itself as one of the hooks to .pre-commit-config.yaml.\nNote: Currently only the default configuration file is supported, if pre-commit tool is configured to use a different file, CLI will NOT add itself to it automatically. In that case, it can be done manually by adding following lines under repos key:\n- repo: local hooks: - id: blubracket name: BluBracket language: system entry: blubracket pre-commit stages: - commit verbose: true always_run: true pass_filenames: false  Testing the BluBracket CLI commit hook #   In your terminal, cd to your repository directory\n  Then add the following example secret into any file in your repository: myPassword=\u0026quot;My$uperDuperS3cret!\u0026quot;\n  Now try to commit your change with git commit - your new BluBracket CLI hook should prevent the commit from happening.\n  Secrets # Use your normal git workflow, edit and stage some files, then try to commit. If the changes have secrets, the commit will be blocked. For example:\nC:\\Users\\vbuzu\\projects\\sandbox\u0026gt;git commit -m \u0026quot;test commit\u0026quot; -a Blubracket found 4 secret(s) C:\\Users\\vbuzu\\projects\\sandbox\\src\\app.cpp:7:11: password_assignment C:\\Users\\vbuzu\\projects\\sandbox\\tests\\dir2\\tests\\file1.txt:11:16: bitbucket_oauth_key_base64 C:\\Users\\vbuzu\\projects\\sandbox\\tests\\dir2\\tests\\file1.txt:12:11: password_assignment C:\\Users\\vbuzu\\projects\\sandbox\\tests\\dir2\\tests\\file1.txt:13:14: password_in_url  .blubracket-ignore # Sometimes it might be necessary to ignore secrets in some files or secrets of some types. To achieve this just create a .blubracket-ignore file in the root directory of the repo. The format of the file is similar to .gitignore. Empty lines and lines started with # are ignored. To ignore all secrets in a file, put a glob pattern, e.g. **/tests will ignore secrets found in all files in any tests directory and sub-directories. To ignore specific a secret type, e.g. any password like secrets, add a line like secret_type:password.*, where password.* is perl compatible regular expression. To ignore specific secret, add a line like secret_value:my_test_gcp_token where my_test_gcp_token is the real secret/token you want to ignore.\n**/tests/** secret_type:password.* secret_value:my_test_gcp_token  Current limitations: #   negate mask (!) is not supported\n  .blubraket-ignore is read only from the root repo directory, placing it in a sub directory will have no effect.\n  Inline comments # In addition to .blubracket-ignore file, it is possible to mark a secret to be ignored by placing a “comment” on the same line as the secret. The comment/line has to have BluBracketIgnore string in it, please note that CLI will do case-sensitive comparison.\nPossible workarounds for false positives # Ignoring whole folders and/or secret type all the time could be dangerous as it can be easy to miss secrets. The recommended ways to deal with false positives are inline comments or ignoring the particular secret using secret_value rule in the .blubracket-ignore file.\nAdding checks for your own secrets # BluBracket supports hundreds of different secret types, but you can extend it to detect any pattern you want.\nIn a repo/clone folder create a file .blubracket/customregex.yml (if you want new secret checks be applicable for any repo, create the file in $HOME folder instead). The content of the file is a list of secrets to check. Each secret is defined by two properties: description and pattern. Description is textual name for the secret that will be displayed by CLI if the secret is detected. Pattern is a regex to match the secret. Here is an example of how to a check for SSNs:\n- pattern: (?P\u0026lt;value\u0026gt;\\d{3}-\\d{2}-\\d{4}) description: simple_ssn  PII # In addition to built-in secrets and custom secrets, the CLI supports the ability to define a different group of “secrets” related to PII (Personally Identifiable Information) such as Social Security Numbers (SSN), emails, URLs, IP-addresses, etc. This feature is fully customizable. Out of the box CLI defines several patterns but all can be disabled, or the corresponded action changed. Here is the default configuration file:\ndefaults: action: allow disabled: false patterns: - type: ssn description: Social Security Number pattern: \\b(?P\u0026lt;ssn1\u0026gt;\\d{3})-(?P\u0026lt;ssn2\u0026gt;\\d{2})-(?P\u0026lt;ssn3\u0026gt;\\d{4})\\b exclude_if: | /000|666|9../.test(ssn1) || ssn2 == \u0026quot;00\u0026quot; || ssn3 == \u0026quot;0000\u0026quot; action: block - type: email pattern: \\b(?P\u0026lt;username\u0026gt;[a-z0-9!#'+^_~-]+(?:\\.[a-z0-9!#'+^_~-]+)*)@(?P\u0026lt;domain\u0026gt;[a-zA-Z0-9-.]+)\\b # exclude_if can be any valid JavaScript expression returns boolean value # it is not limited to a single expression, it can be even a full fledged function. # all matched groups defined in 'pattern' regex will be available as variables in the global execution context # the full matched value will be available as 'full_match' variable # Here is an example that uses a function: it will report only @github.com emails #exclude_if: | # (function(){ # if (domain.toLowerCase() != \u0026quot;github.com\u0026quot;) return true; # return false; # })() disabled: true - type: url description: URL pattern: \\b(?:(?P\u0026lt;scheme\u0026gt;[a-zA-Z][a-zA-Z\\d+-.]*):)(?:\\/\\/)?(?:(?P\u0026lt;userinfo\u0026gt;(?:[a-zA-Z\\d\\-._~\\!$\u0026amp;'()*+,;=%]*)(?::(?:[a-zA-Z\\d\\-._~\\!$\u0026amp;'()*+,;=:%]*))?)@)?(?P\u0026lt;host\u0026gt;[a-zA-Z\\d\\-.%]+)\\b disabled: true - type: ip_v4 description: IPv4 pattern: \\b((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b - type: ip_v6 description: IPv6 pattern: (([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))  The configuration file can be global, for all the repos, it is located in ~/.blubracket/pii.yaml, or local, in repo’s .blubracket/pii.yaml file. If repo-local file exists, it will be used, otherwise the global file will be used. Upon launch, CLI with create the global file if it does not exist yet. After file has been created, it is OK to fully change it, CLI will not touch it anymore.\nSensitive words # In addition to checking secrets, CLI can check for sensitive/offensive words that might be good idea to avoid. Examples includes master, slave, etc. By default CLI only warns if a sensitive word has been found but allows commit to proceed. Sensitive Words can be configured in the similar way as PII Secrets. The configuration file name is ~/.blubracket/sensitive-words.yaml (or a repo-local alternative). Here is the default file:\ndefaults: action: block disabled: false patterns: - type: master description: master pattern: \\b(?i)(master(\\w)*)\\b - type: slave description: slave pattern: \\b(?i)(slave)\\b - type: whitelist description: whitelist pattern: \\b(?i)(whitelist(ed|ing){0,1})\\b - type: blacklist description: blacklist pattern: \\b(?i)(blacklist(ed|ing){0,1})\\b - type: whitebox description: whitebox pattern: \\b(?i)(whitebox)\\b - type: blackbox description: blackbox pattern: \\b(?i)(blackbox)\\b - type: whitehat description: whitehat pattern: \\b(?i)(whitehat)\\b - type: blackhat description: blackhat pattern: \\b(?i)(blackhat)\\b - type: man_hours description: man-hours pattern: \\b(?i)(man[ -]hours{0,1})\\b - type: man_days description: man-days pattern: \\b(?i)(man[ -]days{0,1})\\b  Example output:\nC:\\Users\\vbuzu\\projects\\sandbox\u0026gt;git commit -m \u0026quot;test\u0026quot; -a BluBracket blocked 1 secret(s): C:\\Users\\vbuzu\\projects\\sandbox\\test2:8:27: custom_regex: simple SSN: BluBracket allowed 1 sensitive word(s): C:\\Users\\vbuzu\\projects\\sandbox\\test2:8:4: Master: config: sensitive_keywords.action: allow  Commit signing # BluBracket can check that the commit is going to be signed or not and warn or block in case the commit is not signed. By default BluBracket only warns if commit is not signed.\nNote: Blubracket only checks git config commit.gpgSign value and not -Soption passed to git commit command to determine signing status. The reason is that commit signing makes sense if all the commits are signed. Thus using commit.gpgSign is the most proper way to enable signing\nExample Output:\nC:\\Users\\vbuzu\\projects\\sandbox\u0026gt;git commit -m \u0026quot;test\u0026quot; -a BluBracket allowed unsigned commit Use `blubracket commit-signing configure` to enable commit signing [master 94ca89a] test 1 file changed, 2 insertions(+), 1 deletion(-)  Configure commit signing # In addition to checking is commit signed or not, BluBracket helps configuring signing if it is not done already. To do that use blubracket commit-signing configure command. This should be run inside a clone directory as it will configure the signing only for the one current repo/clone. To configure signing globally, for all the current and future clones, add --global flag. Internally CLI will create a gpg key if needed, will configure git to use it, and will point how to upload the key’s public key to git providers, like GitHub and GitLab.\nNotes:\n  CLI checks and configures gpg keys only, not S-MIME/X509\n  CLI will try to use gpg command already available on the user’s device. If gpg is not found:\n  on Linux, CLI will do nothing, as gpg actually expected to be installed by default\n  on Windows, CLI will use gpg from a git for Windows distribution, if available. CLI will NOT install gpg4Win\n on Mac/OSX, CLI will install gnupg2 using brew. CLI will NOT install brew itself. Along side with gnupg2, CLI will install and configure pinentry-mac, so key management can be integrated with OSX keychain and commit signing works not only from terminal but from IDEs as well.      If a key needs to be generated, it is generated with default parameters (same as gpg \u0026ndash;quick-gen-key command). Currently there is no way to customize this.\n  Example output:\nC:\\Users\\vbuzu\\projects\\test-repo\u0026gt;blubracket commit-signing configure Finding gpg... found: C:\\Program Files\\Git\\usr\\bin\\gpg.exe Checking gpg key for user-id 'John Doe \u0026lt;john@acme.com\u0026gt;' ...About to create a key for: \u0026quot;John Doe \u0026lt;john@acme.com\u0026gt;\u0026quot; Continue? (Y/n) We need to generate a lot of random bytes. It is a good idea to perform some other action (type on the keyboard, move the mouse, utilize the disks) during the prime generation; this gives the random number generator a better chance to gain enough entropy. We need to generate a lot of random bytes. It is a good idea to perform some other action (type on the keyboard, move the mouse, utilize the disks) during the prime generation; this gives the random number generator a better chance to gain enough entropy. gpg: key 25ADA7C6E06D60A0 marked as ultimately trusted gpg: revocation certificate stored as '/c/Users/vbuzu/.gnupg/openpgp-revocs.d/AF06E23594DC979D3AC56B5625ADA7C6E06D60A0.rev' public and secret key created and signed. pub rsa3072 2021-03-10 [SC] [expires: 2023-03-10] AF06E23594DC979D3AC56B5625ADA7C6E06D60A0 uid John Doe \u0026lt;john@acme.com\u0026gt; sub rsa3072 2021-03-10 [E] Configuring git to use commit signing...done Getting public key for gpg key '25ADA7C6E06D60A0' ...done -----BEGIN PGP PUBLIC KEY BLOCK----- mQGNBGBJJmUBDACiyaGZTTAN+fizZQ8h4t9kie1iM6nLzNxCPtvh2pk9IQUkDbK9 PZHpsGIGpZRZwW+IZktWVINMJpuFeakxO7zOk7JdHsqC1wduSTIvBkYxc/VkUk3V 5P2kupj4lCj3IernvlJ1RY25MbUaErMTyEm5HAHaQPWlfAJReh8C2GWc1m68DWF0 lcZuOFCPg/fD5IbV6tLllS7OKcg0On+tRakiIunIzlVyfUBzmrVV13ZBkBc+oJWx EAIMCOMWkXR0rEeqaWqxOXoKpC1iSlXzlXTdko6r3Z9dEUu5P7xHc63/4GVhmDLf B72jJMnmJqh7zQAlQvmZ56H6qeDSK41W9KLFazAXI3MQ5WsWdBcErNS9/HaD1oPu ZChpdWLljd/UFB6ES7podqDPa5v8ttIL5QPIUTRgjGNTZE4wG2YVojC1r5DcVUm3 9Up5RMOkUzhUW/u7bLa0OI/KxR2tZkLtuuCeaWx4LMOqLbJ3oU6VRVm8IaZM3q2x +AFh/uRMeIilRyUAEQEAAbQYSm9obiBEb2UgPGpvaG5AYWNtZS5jb20+iQHUBBMB CAA+FiEErwbiNZTcl506xWtWJa2nxuBtYKAFAmBJJmUCGwMFCQPCZwAFCwkIBwIG FQoJCAsCBBYCAwECHgECF4AACgkQJa2nxuBtYKDfOAv/TxXbc3BAZsrm652VwAlw YcJgQX5ByjZ3lsJ2nTVMtqpF1yPiz8MxammmHJRJ3indCWnXDDdxY4N2CS0I+HSb aJp6rUxlEkvPg8rtDIJSGjb/qkfSMLJqE9t86e1LFYMpvDhtei/dhHibN/UFkLer MJOVO40jvoPeaMlmgY4JlWqLtuv0rzq4FMRZQ7mqrvwk9E8LYL6UoFbp0merOe4K cRW6kAe8YvEOj9pZUbwzLTv/HNq7poR7G5gpUz7mgNf7wScG+QV4JsX+5Z7Px40/ fGjkHf1uz8pF/xbTPeu4jh54nwDBWkb2VxteyIwGNNCxP4BAFXtmMlZ5NToISixC kDrNQDeWSQdy3xbLFUxQMORqZXWlcJVyOO8bhbgIFswzcRhhqP3T6qUi5+yvKqxF T52bY5MJVGxiKQ85veYoPPDdyGl73h9jX2A3+E2/GMAYanYuSo8AIbglYbsffqmm fy/5tRJWcUgPBiulo6LJCZSxMF6OmJ/hRBtpVisKT2/vuQGNBGBJJmUBDADbaErL iaoTWQUIDaMxWxrmhFl5pHX1KX1NdYgScv3hswjV8YRpofA92z4GrC9TXB6/rhJ4 a3s57nY3XgKOwkq68PmtK4ueOqmHxz/paAFpA33EPmr636zOMWJqcj00HWr0LXzX CZ6gWjMYtpGhlSXMKSzUeO9bOsiW3F+0joFbnbxsfvXKhx8Ta8BvjrUkCU5LZvID pctWpKbHQ8j+7t5qwDNZ0cROpn54jJGykoWmCtayS+1oUOy0BXZ5fdktyhurrmzv eFKucf3ZOfQJtyTomACFCwUIKzqs2n9tK3Pz4WEVGJO5zlRsZdEik13HowiQWPNi niUr/ulSiBKIc71IhbJCawp/0bS+QkK08PQKxOR4l1Vhctr48GWySzqNsSO8Be9e wDuUo7kGkSXrbwr7ZPSQv4HG/RFjMd9gp0gH8dcbskTm1gCW43O4b+fmcRqYuyCK YuwDAVz2l5LSsxiN00MF5+LHPfX5ZZfbRjm/HM/PZtRVhYQiyBHHwLZtHiMAEQEA AYkBtgQYAQgAIBYhBK8G4jWU3JedOsVrViWtp8bgbWCgBQJgSSZlAhsMAAoJECWt p8bgbWCg4NIMAIVGvgOVlxF7FMZjVqfZnNqZDj2HXduyvjsadoKzDdPiulsAVYMx 5MAKrE4vrr0+/V10irSLZzUSHyt/r2A5E8xo6jqpxWN2Cipm6lUcOKQItTsyBYt2 EoZxiTvMx+aRhrnT376lysRaAyHaqsf4QOWv+CQV0gOS56p3Su3FQPObe84IzjMI 6PRYQCvGsofRLTuoOFcTj1mSPKwrQhZg0d2XpRmCfLJg19V1rQSMU+z7YhlR5bua qvnuJzqIHd2+2GZB/75cpxN4rtVrac2WM2FYmC5TW7LXVybwpJ451Z77UAhe5gGg nvtdNpxrHfyq21LB1YJrod/wTvNSjDxseX+7Xcq0FzunvGImV5rVq0Cx4t3cmG78 4FhDDwjXcWE8QOdPWJpdATiE+40g/zWAxY6kHTrJTg5q9rVwSCrGFW6NB6apVkNs 3qKT4Ko1WpCfIukP13vsVx7SpxbAIzOl8GrKprAcTMBxoXtL33F9P90Q0FrmOZ27 3OYqf//nWVG3qA== =ulRA -----END PGP PUBLIC KEY BLOCK----- Public Key has been copied to system clipboard. Next, add it to your git provider: For GitHub: navigate to https://github.com/settings/keys For GitLab: navigate to https://gitlab.com/-/profile/gpg_keys  Binary files # The CLI can check that a “large” binary file is going to be committed and either ignore, warn, or block the commit depending on the file size. By default binary files less than 500 KB will be ignored; if more than 500 KB but less than 10 MB, CLI will warn but allow the commit; if more than 10 MB then the commit will be blocked. To disable only warning or blocking the size can be set to 0 (see configuration options below).\nSample output:\nC:\\Users\\vbuzu\\projects\\test-repo\u0026gt;git commit -m \u0026quot;test\u0026quot; BluBracket blocked 1 binary file Blocked binary files: C:\\Users\\vbuzu\\projects\\test-repo\\bluscanner.exe: 81.2 MB Consider using git-lfs to manage large binary files, https://git-lfs.github.com/  CLI configuration # By default CLI blocks secrets and allows sensitive words. It is possible to customize this behavior using config files. CLI loads config files from \u0026lt;repo\u0026gt;/.blubracket/config.yaml and ~/.blubracket/config.yaml. CLI mimics git config behavior where settings in a repo-local config overwrite settings in global config. Here is an example of the config file that has all the default values:\nsecrets: disabled: false action: block commit_signing: disabled: false action: allow binary_files: disabled: false allow_larger: 500KB block_larger: 10MB  "
        
      })
      .add(
      {
        id: 65,
        href: "/faq/",
        title: "Frequently asked questions",
        description: "A searchable list of all FAQs.",
        
        
          
            
          
            
          
        
        
        content: "Knowledge Base – BluBracketFAQ – BluBracket"
        
      })
      .add(
      {
        id: 66,
        href: "/intro/key-workflows/",
        title: "Key workflows",
        description: "BluBracket code security tools are optimized to prevent risks from getting into code, and to promote the process of continuous improvement that reduces existing risks from code over time.\nPreventing risks in code # As developers, we depend on a quick feedback loop to understand if our code is working and does what is expected. BluBracket tools can offer automated security guidance as part of that feedback loop, in the IDE of your choice, pre-commit, and as part of the CI flow.",
        
          
            
          
        
        
          
            
          
        
        
        content: "workflowsWhy should I use the BluBracket Free Trial to discover secrets in code when there are so many other tools available? – BluBracketBluBracket code security tools are optimized to prevent risks from getting into code, and to promote the process of continuous improvement that reduces existing risks from code over time.\nPreventing risks in code # As developers, we depend on a quick feedback loop to understand if our code is working and does what is expected. BluBracket tools can offer automated security guidance as part of that feedback loop, in the IDE of your choice, pre-commit, and as part of the CI flow.\nIDE integration #  IntelliJ integration warns developers about risks in the moment.\n  Popular IDEs, such as VS Code and IntelliJ, present messages from pre-commit hooks in context so you don\u0026rsquo;t have to interrupt your flow to get feedback.\n FAQ: supported IDEs .  Pre-commit hooks # The BluBracket CLI scan for secrets, PII, and non-inclusive language before commits, to prevent risks from ever getting into repos from the start.\n The BluBracket CLI tool can identify and optionally block secrets before they\u0026rsquo;re committed.\n  The CLI supports local configuration with directives in ~/.blubracket/, repo-level configuration for all committers to the repo with directives in .blubracket/ at the repo root, and global configuration for all users of a BluBracket account with directives set at that level. Additionally, inline directives inserted as code comments can be used to mark specific items to ignore, putting decisions about how to handle selected code risks in context with the code.\nUsers can choose to make pre-commit risk detection a blocking or non-blocking feature, to support whatever workflow a developer prefers.\n Usage guide: installing and using the CLI .  CI checks # Pre-commit hooks prevent most risks before they ever get into a repo, but CI checks provide an extra layer of guidance for teams.\n BluBracket can identify risks in the CI workflow via GitHub Checks and others.\n  GitHub is just one supported code server and CI environment .\n  As with pre-commit hooks, CI checks and all BluBracket\u0026rsquo;s server-side code scanning supports repo-level configuration with directives in .blubracket/ at the repo root, and global configuration for all users and all repos in a BluBracket account with directives set at that level. Additionally, inline directives inserted as code comments can be used to mark specific items to ignore, putting decisions about how to handle selected code risks in context with the code.\n Usage guide: configuring CI checks .  Alerts # BluBracket can send alerts any time it finds new risks committed to monitored repos. Messaging a Slack channel is just one option, see the full list of configurations for more .\n BluBracket integration with Slack can alert teams about code risks in new commits in real time.\n   More info: messaging and SIEM/ticketing integrations.  Understanding and taking action on existing risks # Preventing new risks from getting into your code is one of the most important steps to continuous improvement. Understanding your overall code health so you can prioritize and track your efforts at continuous improvement is the next most critical step.\nBluBracket scans your code, including every historical commit, to identify secrets , PII , non-inclusive language , and infrastructure-as-code risks lurking within.\n  Reviewing those risks in the BluBracket dashboard allows you to see the overall health of your scanned codebase, the areas of highest risk, and find specific issues you can act on now to improve your code security.\nRepo risk scores #  BluBracket risk scores make it easy to see code health and prioritize effort.\n  BluBracket evaluates the health of every scanned repo and sums it up in an easy-to-understand score so you can rank and prioritize effort across your codebase.\nDetailed filtering and reporting #   Filtering tools allow you to take control to see exactly what risks exist in your codebase and where to target and prioritize efforts based on your specific code condition and threat model.\nAutomated git access \u0026amp; configuration monitoring # It\u0026rsquo;s as important to monitor who and what has access to code as it is to monitor the risks in the code. BluBracket\u0026rsquo;s tools make it easy to support multiple privilege models as needed for your organization.\nPrivilege models that grant developers broad access to code and workflow configuration by default can enable increased productivity and innovation across the codebase, but require automatic and continuous auditing of access and configuration to ensure security.\nLeast privilege models can maximize security, but enforcing it with common git code servers can be difficult without automated, continuous audits of access and configuration.\n A sample of BluBracket\u0026rsquo;s automated git access \u0026amp; configuration monitoring alerts.\n  BluBracket\u0026rsquo;s git access and configuration monitoring tools make it easy to see who and what has access across the codebase, and alert when access permissions don\u0026rsquo;t conform to policy.\n"
        
      })
      .add(
      {
        id: 67,
        href: "/how-to/messaging/slack/app/",
        title: "BluBracket Slack App",
        description: "Visit the Slack App creation page.\n  Click the Create New App button.    Click the From an app manifest option.    Select your workspace and click Next.    Copy and paste the following app manifest into the json input:\n{ \u0026quot;display_information\u0026quot;: { \u0026quot;name\u0026quot;: \u0026quot;BluBracket\u0026quot;, \u0026quot;description\u0026quot;: \u0026quot;Pipeline Security Tools\u0026quot;, \u0026quot;background_color\u0026quot;: \u0026quot;#2b2b2b\u0026quot;, \u0026quot;long_description\u0026quot;: \u0026quot;What if code security could be improved with the same techniques we use to improve code quality?",
        
          
            
          
        
        
        
        content: "slack  Visit the Slack App creation page.\n  Click the Create New App button.    Click the From an app manifest option.    Select your workspace and click Next.    Copy and paste the following app manifest into the json input:\n{ \u0026quot;display_information\u0026quot;: { \u0026quot;name\u0026quot;: \u0026quot;BluBracket\u0026quot;, \u0026quot;description\u0026quot;: \u0026quot;Pipeline Security Tools\u0026quot;, \u0026quot;background_color\u0026quot;: \u0026quot;#2b2b2b\u0026quot;, \u0026quot;long_description\u0026quot;: \u0026quot;What if code security could be improved with the same techniques we use to improve code quality? Tests and code coverage reports integrated in our workflows giving us quick feedback on PRs and in our IDEs have helped us build better, faster, and more maintainable code together, and now it’s time to do the same to improve security.\u0026quot; }, \u0026quot;features\u0026quot;: { \u0026quot;bot_user\u0026quot;: { \u0026quot;display_name\u0026quot;: \u0026quot;BluBracket\u0026quot;, \u0026quot;always_online\u0026quot;: false } }, \u0026quot;oauth_config\u0026quot;: { \u0026quot;scopes\u0026quot;: { \u0026quot;bot\u0026quot;: [ \u0026quot;chat:write\u0026quot;, \u0026quot;incoming-webhook\u0026quot; ] } }, \u0026quot;settings\u0026quot;: { \u0026quot;org_deploy_enabled\u0026quot;: false, \u0026quot;socket_mode_enabled\u0026quot;: false, \u0026quot;token_rotation_enabled\u0026quot;: false } }  and click Next.    Confirm the permissions match the following image and click Create.    That\u0026rsquo;s it! # You now have a BluBracket Slack App and can begin creating connections "
        
      })
      .add(
      {
        id: 68,
        href: "/how-to/messaging/slack/connection/",
        title: "Slack Connection",
        description: "Requirements #  Create a BluBracket Slack App and install to your workspace.  Creating a Slack Connection #   Navigate to Slack integrations by clicking the Slack link on the integrations page    Begin creating a BluBracket Slack connection by clicking the + CONNECTION button    Visit the installations page in your BluBracket Slack App and copy the bot token presented on the screen.",
        
          
            
          
        
        
        
        content: "slackRequirements #  Create a BluBracket Slack App and install to your workspace.  Creating a Slack Connection #   Navigate to Slack integrations by clicking the Slack link on the integrations page    Begin creating a BluBracket Slack connection by clicking the + CONNECTION button    Visit the installations page in your BluBracket Slack App and copy the bot token presented on the screen.\n  Paste the bot token into the token input and click TEST \u0026amp; SAVE.    Now you\u0026rsquo;re ready to create subscriptions for this connection and start seeing BluBracket notifications in Slack.\n"
        
      })
      .add(
      {
        id: 69,
        href: "/how-to/messaging/slack/subscription/",
        title: "Slack Subscription",
        description: "Requirements #  Create a BluBracket Slack App and install to your workspace. Create Slack connection   Creating a Slack Subscription #   Navigate to Slack integrations by clicking the Slack link on the integrations page    Click the + SUBSCRIPTION button to begin the creation process.    Choose a name for the subscription as well as the saved filters you would like the subscription to be based on.",
        
          
            
          
        
        
        
        content: "slackRequirements #  Create a BluBracket Slack App and install to your workspace. Create Slack connection   Creating a Slack Subscription #   Navigate to Slack integrations by clicking the Slack link on the integrations page    Click the + SUBSCRIPTION button to begin the creation process.    Choose a name for the subscription as well as the saved filters you would like the subscription to be based on.\n  Choose the connection for the subscription output and the slack channel.\n  Click SAVE    BluBracket events matching your filters will be sent to your specified channel in Slack.\n"
        
      })
      .add(
      {
        id: 70,
        href: "/how-to/messaging/slack/",
        title: "Slack Integration",
        description: " BluBracket integration with Slack can alert teams about code risks in new commits in real time.\n  Requirements # Integration with Slack requires the following:\n   Create a BluBracket Slack App and install on your workspace    Create a Slack connection    Create a Slack subscription   ",
        
          
            
          
            
          
            
          
        
        
        
        content: "integrationsmessagingslack BluBracket integration with Slack can alert teams about code risks in new commits in real time.\n  Requirements # Integration with Slack requires the following:\n   Create a BluBracket Slack App and install on your workspace    Create a Slack connection    Create a Slack subscription   "
        
      })
      .add(
      {
        id: 71,
        href: "/how-to/ci-checks/",
        title: "CI checks",
        description: "Integrating BluBracket into the CI code review process.",
        
          
            
          
            
          
            
          
            
          
        
        
          
            
          
            
          
        
        
        content: "integrationsworkflowsCIcontinuous integrationCI secret scanning for Azure Pipelines – BluBracketCI secret scanning for GitLab – BluBracketBluBracket integrates into the CI workflow to automatically check pull requests before they are merged.\nBluBracket can be configured to warn or block pull requests when it finds risks in code. Most teams prefer only to warn when risks are detected in code, and data shows those warnings are effective in helping those teams recognize and prevent new risks from being merged in PRs.\nBluBracket has full support for:\n  GitHub Checks   Bitbucket Code Insights   Additionally, the CI API can be used to extend CI checks into nearly any workflow.\n"
        
      })
      .add(
      {
        id: 72,
        href: "/intro/integrations/",
        title: "Integrations",
        description: "Local workflow tools #  The BluBracket CLI tool can identify and block secrets before they\u0026rsquo;re committed.\n  Available local tools and integrations\n  CLI  IntelliJ (via CLI, full plugin coming soon) Visual Studio Code (via CLI)  Usage guide: installing and using the CLI .\nCode servers #  BluBracket scans repositories hosted in GitHub, GitLab, Bitbucket, and others.\n  Certified \u0026amp; supported code servers:",
        
          
            
          
        
        
        
        content: "integrationsLocal workflow tools #  The BluBracket CLI tool can identify and block secrets before they\u0026rsquo;re committed.\n  Available local tools and integrations\n  CLI  IntelliJ (via CLI, full plugin coming soon) Visual Studio Code (via CLI)  Usage guide: installing and using the CLI .\nCode servers #  BluBracket scans repositories hosted in GitHub, GitLab, Bitbucket, and others.\n  Certified \u0026amp; supported code servers:\n GitHub Cloud GitHub Enterprise (including on-prem) GitLab Cloud GitLab on-prem Bitbucket Cloud Bitbucket Server Azure DevOps Gerrit  Usage guide: adding code servers .\nCI servers #  BluBracket can identify risks in the CI workflow via GitHub Checks and others.\n  Certified \u0026amp; supported CI servers:\n GitHub Checks Bitbucket Code Insights Jenkins  Additional integrations are available via our open CI API .\nUsage guide: configuring CI checks .\nIdentity, authentication, and authorization #  BluBracket supports Okta and other single sign-on solutions.\n  Certified \u0026amp; supported identity integrations:\n Azure AD Okta Ping SAML GitHub OAuth Gitlab OAuth (coming soon) Bitbucket OAuth (coming soon)  Messaging #  BluBracket integration with Slack can alert teams about code risks in new commits in real time.\n  Certified \u0026amp; supported messaging integrations:\n  Slack  Microsoft Teams  Ticketing \u0026amp; incident management #  BluBracket can automatically create a Jira ticket when risks are found in new commits.\n  Certified \u0026amp; supported ticketing \u0026amp; incident management integrations:\n  Jira  ServiceNow PagerDuty Splunk  Build your own #   APIs  Webhooks (coming soon)  "
        
      })
      .add(
      {
        id: 73,
        href: "/how-to/ticketing/jira/",
        title: "JIRA",
        description: "JIRA Integration #  BluBracket can automatically create a Jira ticket when risks are found in new commits.\n  Requirements #    Atlassian API Token    JIRA Base URL    JIRA Project for events and alerts to be added to.   If you are interested in integrating JIRA into your BluBracket workflow please contact support. ",
        
          
            
          
            
          
            
          
        
        
        
        content: "integrationsticketingJIRAJIRA Integration #  BluBracket can automatically create a Jira ticket when risks are found in new commits.\n  Requirements #    Atlassian API Token    JIRA Base URL    JIRA Project for events and alerts to be added to.   If you are interested in integrating JIRA into your BluBracket workflow please contact support. "
        
      })
      .add(
      {
        id: 74,
        href: "/contact-support/",
        title: "Contact support",
        description: "",
        
        
        
        content: ""
        
      })
      .add(
      {
        id: 75,
        href: "/release-notes/",
        title: "Release notes",
        description: "",
        
        
        
        content: ""
        
      })
      .add(
      {
        id: 76,
        href: "/how-to/messaging/",
        title: "Messaging",
        description: "Messaging security team members and developers when risks are found in code in the real-time commit scans can help increase visibility of risks and reduce the time to remediate risks.\nOut of the box, BluBracket supports messaging via Slack and Microsoft Teams, and additional integrations are possible via the flexible APIs.",
        
          
            
          
            
          
        
        
        
        content: "integrationsmessagingMessaging security team members and developers when risks are found in code in the real-time commit scans can help increase visibility of risks and reduce the time to remediate risks.\nOut of the box, BluBracket supports messaging via Slack and Microsoft Teams, and additional integrations are possible via the flexible APIs.\n"
        
      })
      .add(
      {
        id: 77,
        href: "/how-to/ticketing/",
        title: "Ticketing",
        description: "Automatic ticketing of detected issues gives security and developer teams visibility into security issues in the tools they\u0026rsquo;re using to plan, track, and report work. No need to sign into or use another too.\nOut of the box, BluBracket supports Jira and ServiceNow, and additional integrations are possible via the flexible APIs.",
        
          
            
          
            
          
        
        
        
        content: "integrationsticketingAutomatic ticketing of detected issues gives security and developer teams visibility into security issues in the tools they\u0026rsquo;re using to plan, track, and report work. No need to sign into or use another too.\nOut of the box, BluBracket supports Jira and ServiceNow, and additional integrations are possible via the flexible APIs.\n"
        
      })
      .add(
      {
        id: 78,
        href: "/authoring-documentation/",
        title: "Authoring documentation",
        description: "How do write and edits the docs in this site.",
        
        
        
        content: "Filesystem organization # Each page is a Hugo page bundle , a directory with a index.md and any attachments/images used in the page.\n The directory name is the URL slug The page title and other metadata are set in the yaml-formatted front matter   Pages can be nested to create a hierarchical structure. If a directory contains multiple pages, the index.md must be prefixed with an underscore (_index.md) to tell Hugo to recurse into the directory for additional pages. Example:\n. └── content ├── _index.md \u0026lt;- https://example.com/ ├── intro | └── index.md \u0026lt;- https://example.com/intro/ ├── how-to | ├── _index.md \u0026lt;- https://example.com/how-to/ | ├── start | | └── index.md \u0026lt;- https://example.com/how-to/start/ | └── finish | └── index.md \u0026lt;- https://example.com/how-to/finish/ └── faq └── index.md \u0026lt;- https://example.com/faq/  Content markup # Content is formatted as Markdown , with support for many of the more advanced Markdown features, as well as a number of shortcodes supported by Hugo .\nLinks # Standard Markdown link syntax is preferred\n[link text](http://example.com/)\nHugo also provides a shortcode that can be used to make it easier to link to pages within the site:\n[Quick Start →]({{\u0026lt; relref \u0026quot;intro\u0026quot; \u0026gt;}})  Images # Small images can be embedded using normal Markdown syntax, but Hugo also provides a {{\u0026lt; figure \u0026gt;}} shortcode ideal for embedding larger images with more metadata.\nFor either syntax, the image should be committed in the directory with the page it appears on, and identified in the front matter resources object:\nresources: - src: demo-figure.jpg  Markdown syntax for small images # ![This kitten icon](demo-img.png)  Output:\nThis adorable kitten icon used as a demo img was downloaded from The Noun Project .\nFigure shortcode for large images # {{\u0026lt; figure src=\u0026quot;demo-figure.jpg\u0026quot; caption=\u0026quot;This adorable kitten used as the demo figure was [downloaded from Unsplash](https://unsplash.com/photos/tuomgxdoIP4).\u0026quot; \u0026gt;}}   All available options documented here .\nOutput:\n This adorable kitten used as the demo figure was downloaded from Unsplash.\n  Video # Many modern browsers accept videos in the img element (via the {{\u0026lt; figure \u0026gt;}} shortcode, for example), but embedding YouTube or Vimeo videos is most compatible.\nYouTube # For a given YouTube URL such as https://www.youtube.com/watch?v=w7Ft2ymGmfc, the YouTube shortcode should be:\n{{\u0026lt; youtube w7Ft2ymGmfc \u0026gt;}}  Output:\n  Vimeo # For a given Vimeo URL such as https://vimeo.com/channels/staffpicks/146022717, the Vimeo shortcode should be:\n{{\u0026lt; vimeo 146022717 \u0026gt;}}  Output:\n  Code # Standard code fencing with single and triple backticks works as expected. Hugo also supports code highlighting with the following shortcode:\n{{\u0026lt; highlight html \u0026gt;}} \u0026lt;section id=\u0026quot;main\u0026quot;\u0026gt; \u0026lt;div\u0026gt; \u0026lt;h1 id=\u0026quot;title\u0026quot;\u0026gt;{{ .Title }}\u0026lt;/h1\u0026gt; {{ range .Pages }} {{ .Render \u0026quot;summary\u0026quot;}} {{ end }} \u0026lt;/div\u0026gt; \u0026lt;/section\u0026gt; {{\u0026lt; /highlight \u0026gt;}}  Output:\n\u0026lt;section id=\u0026#34;main\u0026#34;\u0026gt; \u0026lt;div\u0026gt; \u0026lt;h1 id=\u0026#34;title\u0026#34;\u0026gt;{{ .Title }}\u0026lt;/h1\u0026gt; {{ range .Pages }} {{ .Render \u0026#34;summary\u0026#34;}} {{ end }} \u0026lt;/div\u0026gt; \u0026lt;/section\u0026gt; In-page emphasis # {{\u0026lt; alert icon=\u0026quot;👉\u0026quot; text=\u0026quot;The Alert shortcode should be used sparingly.\u0026quot; \u0026gt;}}  Output:\n👉  The Alert shortcode should be used sparingly.   Table of contents structure # Site menu # The left column table of contents follows the hierarchy set by the filesystem directory structure, but the order of pages at any given level is based on page weight set in the front matter of the page. By default, all pages are ordered by : Weight \u0026gt; Date \u0026gt; LinkTitle \u0026gt; FilePath.\nSee weight: 900 in the front matter in the source of this page as an example.\nPage headings # The right column table of contents follows the order of the headings in the doc.\nStyleguide # Sentence case # All headings in these docs should follow sentence case as described in this APA guide .\n"
        
      })
      .add(
      {
        id: 79,
        href: "/how-to/architecture/",
        title: "Integration architecture",
        description: "How BluBracket connects to your world",
        
        
        
        content: "BluBracket runs as SaaS, on-prem, or in your VPC, and integrates with a variety of cloud-hosted or on-prem tools to secure your entire code pipeline from developer to deploy.\n BluBracket architecture diagram. View larger.\n  Risk detection orchestration engine # BluBracket executes risk scanners on-demand, in response to events like new code pushes or pull requests, and on a periodic schedule as appropriate for the resource being scanned and user needs.\nBluBracket\u0026rsquo;s native risk detectors run in this layer, but external risk detectors can be integrated by pushing results to BluBracket, or BluBracket can request or poll for results.\nUser code is never stored anywhere in BluBracket. It is deleted after scanning and indexing, and only code fingerprints and risk data are stored.\nAll secrets needed to integrate with customer resources are stored in an encrypted vault. No other customer secrets are ever stored in BluBracket.\nResults aggregation \u0026amp; outbound integrations engine # All user-facing interactions and downstream integrations are managed here.\nBluBracket\u0026rsquo;s alert pipelines support fine-grained routing of alerts to multiple destinations based on customer-defined rules.\nRich filtering and reporting tools give users visibility to their overall code health, areas of highest risk, and actionable things they can do now to improve their code health.\nAll secrets needed to integrate with customer resources are stored in an encrypted vault. No other customer secrets are ever stored in BluBracket.\nCustomer SCM solutions # GitHub, GitLab, Bitbucket, Azure DevOps, and more, running in the cloud and on-prem are supported .\nBluBracket registers webhooks to receive events for every code push, pull request, and others.\n Automated pull request security reviews (in supported platforms) provide feedback when developers need it.\nPartner SaaS code scanners # BluBracket integrates with optional partner SaaS risk detectors through webhooks, polling, and other API interactions as defined by the integration.\nCustomer code scanners # BluBracket supports customer-defined risk scanners running in customer infrastructure to aggregate results and leverage BluBracket\u0026rsquo;s alert pipelines.\nCustomer-specific integrations # BluBracket integrates wherever customers need reliable, actionable, real-time risk information. Full API docs available in-product, with intro here .\nIdentity, SSO, and RBAC providers #  Single sign-on support with rich RBAC allows teams to share access with everybody who needs it.\nMessaging integrations # BluBracket can push events to a variety of messaging solutions .\nTicketing integrations # BluBracket can push events to a variety of ticketing solutions .\nIncident management integrations # BluBracket can push events to a variety of incident management and SIEM solutions .\n"
        
      })
      .add(
      {
        id: 80,
        href: "/release-notes/2022-06/",
        title: "2022-06 release",
        description: "New features, enhancements, and bug fixes #  SOC 2 Type II compliance for SaaS services, recognizing the rigorous operational and security practices across the organization for safe and reliable handling of customer data CLI: new open-source recipes for scanning S3, syslog, and Confluence wiki pages New risk severity for all events gives detailed information to identify and prioritize risk across your codebase The new filtering experience is now enabled for all customers  ",
        
        
        
        content: "New features, enhancements, and bug fixes #  SOC 2 Type II compliance for SaaS services, recognizing the rigorous operational and security practices across the organization for safe and reliable handling of customer data CLI: new open-source recipes for scanning S3, syslog, and Confluence wiki pages New risk severity for all events gives detailed information to identify and prioritize risk across your codebase The new filtering experience is now enabled for all customers  "
        
      })
      .add(
      {
        id: 81,
        href: "/release-notes/2022-05/",
        title: "2022-05 release",
        description: "New features, enhancements, and bug fixes #  New alert search and filtering experience improves workflows and findability of actionable Support for git repositories on Gerrit code servers Ongoing false positive improvements, including more nuanced inspection and reporting for multi-part secrets (such as AWS keys and secret keys) New OAuth signup/sign-in support CLI: offline scan, which operates entirely without network interaction, is now the default  ",
        
        
        
        content: "New features, enhancements, and bug fixes #  New alert search and filtering experience improves workflows and findability of actionable Support for git repositories on Gerrit code servers Ongoing false positive improvements, including more nuanced inspection and reporting for multi-part secrets (such as AWS keys and secret keys) New OAuth signup/sign-in support CLI: offline scan, which operates entirely without network interaction, is now the default  "
        
      })
      .add(
      {
        id: 82,
        href: "/release-notes/2022-04/",
        title: "2022-04 release",
        description: "New features, enhancements, and bug fixes #  Redesigned and re-imagined views of alerts optimized around quick triage and remediation workflows New support for tracking detailed branch info Snyk integration beta for tracking and reporting dependency vulnerabilities for a complete view of the external and internal code supply chain CLI: searching inside archive files, including .tar, .zip, and others CLI: support for scanning a specific file or files  ",
        
        
        
        content: "New features, enhancements, and bug fixes #  Redesigned and re-imagined views of alerts optimized around quick triage and remediation workflows New support for tracking detailed branch info Snyk integration beta for tracking and reporting dependency vulnerabilities for a complete view of the external and internal code supply chain CLI: searching inside archive files, including .tar, .zip, and others CLI: support for scanning a specific file or files  "
        
      })
      .add(
      {
        id: 83,
        href: "/release-notes/2022-03/",
        title: "2022-03 release",
        description: "New features, enhancements, and bug fixes #  Track and manage your work by marking the triaged state of each alert Event reconciliation on pattern/logic changes New settings page outlining available integrations New support for tracking commit info, including tip of main branch Refactored user management in preparation for OAuth and RBAC New documentation website (this site, yay!)  ",
        
        
        
        content: "New features, enhancements, and bug fixes #  Track and manage your work by marking the triaged state of each alert Event reconciliation on pattern/logic changes New settings page outlining available integrations New support for tracking commit info, including tip of main branch Refactored user management in preparation for OAuth and RBAC New documentation website (this site, yay!)  "
        
      })
      .add(
      {
        id: 84,
        href: "/release-notes/2022-02/",
        title: "2022-02 release",
        description: "New features, enhancements, and bug fixes #  Improved false positive rejection Periodic scans re-process data with the latest rules, and catch pushes missed in case the git host dropped the webhook Support for filtering by commit time Big fixes and improvements to the BluPrint report New report: most used secrets across your code base (calculated by hash, BluBracket does not store your code or any secrets)  ",
        
        
        
        content: "New features, enhancements, and bug fixes #  Improved false positive rejection Periodic scans re-process data with the latest rules, and catch pushes missed in case the git host dropped the webhook Support for filtering by commit time Big fixes and improvements to the BluPrint report New report: most used secrets across your code base (calculated by hash, BluBracket does not store your code or any secrets)  "
        
      })
      .add(
      {
        id: 85,
        href: "/",
        title: "BluBracket Documentation",
        description: "Track what's in your code, who has access, and where it goes.",
        
        
        
        content: ""
        
      })
      .add(
      {
        id: 86,
        href: "/release-notes/2022-01/",
        title: "2022-01 release",
        description: "New features, enhancements, and bug fixes #  Initial support for repos in Azure DevOps Bitbucket Insights support gives developers guidance about risks in their code during the review process, eliminating unnecessary alerts Scalability improvements around integrations Scalability improvements for git host webhook processing and job queueing  ",
        
        
        
        content: "New features, enhancements, and bug fixes #  Initial support for repos in Azure DevOps Bitbucket Insights support gives developers guidance about risks in their code during the review process, eliminating unnecessary alerts Scalability improvements around integrations Scalability improvements for git host webhook processing and job queueing  "
        
      })
      .add(
      {
        id: 87,
        href: "/release-notes/2021-12/",
        title: "2021-12 release",
        description: "New features, enhancements, and bug fixes #  Self-hosted (VPC/on-prem) installer improvements, including support for Terraform Bulk code server import to import multiple GitHub Organizations, Bitbucket Workspaces, or GitLab Workspaces with a single click Activeness checks for multi-part secrets, such as AWS keys and secret keys CLI: Ability to scan an arbitrary directory outside a git repo  ",
        
        
        
        content: "New features, enhancements, and bug fixes #  Self-hosted (VPC/on-prem) installer improvements, including support for Terraform Bulk code server import to import multiple GitHub Organizations, Bitbucket Workspaces, or GitLab Workspaces with a single click Activeness checks for multi-part secrets, such as AWS keys and secret keys CLI: Ability to scan an arbitrary directory outside a git repo  "
        
      })
      .add(
      {
        id: 88,
        href: "/release-notes/2021-11-22/",
        title: "2021-11-22 release",
        description: "New Features and Enhancements #  “Other” type has been added to the Secret Types pie chart on the BluPrint page. The pie chart should now show the top 6 secret types as well as a 7th that is composed of all of the remaining types. Clicking on any of the pie sections should take the user to a filtered table for the selected secret type. Many additional enhancements have been added to identify false positives where secrets are concerned.",
        
        
        
        content: "New Features and Enhancements #  “Other” type has been added to the Secret Types pie chart on the BluPrint page. The pie chart should now show the top 6 secret types as well as a 7th that is composed of all of the remaining types. Clicking on any of the pie sections should take the user to a filtered table for the selected secret type. Many additional enhancements have been added to identify false positives where secrets are concerned. Additional tags have been added to auto-dismissed secrets - staging and sample False positive improvements made with regards to passwords found in XML files  Bug Fixes #  CORE-8828 - Descriptions in Alerts and Events were not matching for Non-inclusive Language. Events were just showing “Customer Regex” instead of helpful description. Many bug fixes with regards to false positives as well.  "
        
      })
      .add(
      {
        id: 89,
        href: "/release-notes/2021-10-11/",
        title: "2021-10-11 release",
        description: "New Features and Enhancements #  New public API to return repo scan status Added infinite label filter to support scrolling through all labels.  Bug Fixes #  CORE-8192 URL of webhook was not displayed in the compliance alerts flyover details CORE-8343 Enhanced false positive detection where secret type is “token” CORE-8414 - Fixed Slack integration issue where deep link was not being displayed in message Fix table pagination loading bugs  ",
        
        
        
        content: "New Features and Enhancements #  New public API to return repo scan status Added infinite label filter to support scrolling through all labels.  Bug Fixes #  CORE-8192 URL of webhook was not displayed in the compliance alerts flyover details CORE-8343 Enhanced false positive detection where secret type is “token” CORE-8414 - Fixed Slack integration issue where deep link was not being displayed in message Fix table pagination loading bugs  "
        
      })
      .add(
      {
        id: 90,
        href: "/release-notes/2021-09-28/",
        title: "2021-09-28 release",
        description: "New Features and Enhancements #   Additional checks performed when user adds new code server. We now identify and show a message if the user does not have adequate organization level permissions, even if the Personal Access Token does have required permissions. Inadequate user permissions will result in incomplete repo risk calculations.\n  Code Leaks now filters out Public to Public alerts.\n  Code Leaks details now displays a deep link to the selected leaked file",
        
        
        
        content: "New Features and Enhancements #   Additional checks performed when user adds new code server. We now identify and show a message if the user does not have adequate organization level permissions, even if the Personal Access Token does have required permissions. Inadequate user permissions will result in incomplete repo risk calculations.\n  Code Leaks now filters out Public to Public alerts.\n  Code Leaks details now displays a deep link to the selected leaked file\n  Free Trial Edition # The Enterprise Edition features and bug fixes listed in these release notes also apply to the Free Trial Edition.\nBug Fixes #   CORE-8075 Repos not showing up right away in Monitored Repo Select Screen\n  CORE-8182 Fix issue where unable to deselect monitored repos from repo select page\n  CORE-8323 - Fix issue where unable to add internal/external domains to Enterprise Repositories page\n  CORE-7905 - Fix slow API response for code leak api /api/publicanalyzer/codecopy/repo\n  "
        
      })
      .add(
      {
        id: 91,
        href: "/release-notes/2021-09-13/",
        title: "2021-09-13 release",
        description: "New Features and Enhancements #   New Repo Details Design. When clicking on a Repository, you will now see a new design that lists the risk rating and number of violations for each risk category. Clicking on the violations number will provide a filter view of all violations of that risk category type.\n    The terminology “Alerts” has been replaced with “All Violations”, which is a new tab next to Code Risks at top of screen.",
        
        
        
        content: "New Features and Enhancements #   New Repo Details Design. When clicking on a Repository, you will now see a new design that lists the risk rating and number of violations for each risk category. Clicking on the violations number will provide a filter view of all violations of that risk category type.\n    The terminology “Alerts” has been replaced with “All Violations”, which is a new tab next to Code Risks at top of screen.\n  New Product Tour when first on-boarding or logging in to the latest version\n  CSV download now available when clicking on a risk category Violation count link\n  Two new public API’s have been released\n  /api/public/blubracket-ignore\n blubracket-ignore is an API that can be used to globally ignore secret types or secret values. For example, you may want to ignore any passwords that have the value of “password”. Ignore means an event will be created, but not an alert for that secret.    /api/public/repo/scan_status\n scan_status is an API that can be used to the scan status of a specified repository      Free Trial Edition # The Enterprise Edition features and bug fixes listed in these release notes also apply to the Free Trial Edition.\nBug Fixes #   CORE-7770-Repos not showing up right away in Monitored Repo Select Screen\n  CORE-7853- Filter for selecting unmonitored repos not display results\n  CORE-7923 - Fixed several multi-select navigation issues\n  CORE-7743 - Fix filtering by developer and type returns 0 results\n  "
        
      })
      .add(
      {
        id: 92,
        href: "/release-notes/2021-09-07/",
        title: "2021-09-07 release",
        description: "New Features and Enhancements #   Access Risk Categories now links to appropriate alerts in the repo details page.\n  Enhanced Code Server onboarding for Bitbucket and GitLab.\n  Updated Infrastructure Code Alerts and Events to be more descriptive.\n  Added breadcrumbs to repository details page in portal.\n  Updated support for global Ignore.yaml. If you place a folder labeled “.blubracket” into a repository, then create a file called ignore.",
        
        
        
        content: "New Features and Enhancements #   Access Risk Categories now links to appropriate alerts in the repo details page.\n  Enhanced Code Server onboarding for Bitbucket and GitLab.\n  Updated Infrastructure Code Alerts and Events to be more descriptive.\n  Added breadcrumbs to repository details page in portal.\n  Updated support for global Ignore.yaml. If you place a folder labeled “.blubracket” into a repository, then create a file called ignore.yaml in the .blubracket folder (see example below), you are able to ignore all of a certain type of secret from being detected as an alert within the BluBracket portal.\n ignore.yaml example below will ignore all secrets values for the type aws_secret_key    # ignores any secret types below\n# secret_type == password_assignment OR secret_type == secret_assignment\n- secret_types:\n- aws_secret_key\nThe ignore.yaml file can also be configured to ignore paths, or secret types.\nContact support for more information on the global ignore feature\nFree Trial Edition # The Enterprise Edition features and bug fixes listed in these release notes also apply to the Free Trial Edition.\n Improved Repo selection page when onboarding a new Code Server  Bug Fixes #  Fix page count from erroring out when applying filters  "
        
      })
      .add(
      {
        id: 93,
        href: "/release-notes/2021-08-16/",
        title: "2021-08-16 release",
        description: "New Features and Enhancements # Enterprise Edition # New Code Risks Categories\nBluBracket has added two additional Risk Categories to the repo detail view, PII and Non-inclusive language!\n  All newly created tenants will automatically have three Non-inclusive language regular expressions configured (blacklist, slave, master) and one PII regular expression for social security numbers.\nFor existing customers, if you would like to utilize the new PII and Non-inclusive Language categories, please follow the instructions below:",
        
        
        
        content: "New Features and Enhancements # Enterprise Edition # New Code Risks Categories\nBluBracket has added two additional Risk Categories to the repo detail view, PII and Non-inclusive language!\n  All newly created tenants will automatically have three Non-inclusive language regular expressions configured (blacklist, slave, master) and one PII regular expression for social security numbers.\nFor existing customers, if you would like to utilize the new PII and Non-inclusive Language categories, please follow the instructions below:\n Login to the BluBracket portal and select Settings, then Code Scanning Under Custom Expression, select ADD REGEX For Non-inclusive Language, create the following regular expressions:  Description: Non-inclusive Language - Master Expression: \\b(?i)(master)\\b Example: Master Description: Non-inclusive Language - Slave Expression: \\b(?i)(slave)\\b Example: Slave Description: Non-inclusive Language - Blacklist Expression: \\b(?i)(blacklist(ed|ing){0,1})\\b Example: Blacklist   For PII, create the following regular expressions:  Description: PII - SSN Expression: \\b(?P\u0026lt;ssn1\u0026gt;\\d{3})-(?P\u0026lt;ssn2\u0026gt;\\d{2})-(?P\u0026lt;ssn3\u0026gt;\\d{4})\\b Example: 123-45-6789    Note: you are able to add any additional custom regular expressions, but in order for them to appear in the PII or Non-inclusive Language categories, you must prepend each custom expression Description with either PII - [any value] or Non-inclusive Language - [any value] (Note: the filter is case sensitive, so you must capitalize as the examples appear).\nExample for adding a custom non-inclusive language for the term “whitelist”.\n Description: Non-inclusive Language - Whitelist Expression: \\b(?i)(whitelist(ed|ing){0,1})\\b Example: Whitelist  In addition to the above, an enhancement was made to rename Code Copies to Code Leaks\nFree Trial Edition # The Enterprise Edition features and bug fixes listed in these release notes also apply to the Free Trial Edition.\nBug Fixes #  CORE-7654 - Fix regular expression fields from disappearing in UI view until page was refreshed when an edit was made CORE-7659 - Fix routing issue with PagerDuty integration CORE-7693 - Fix API Key “Last Used” column showing no value  "
        
      })
      .add(
      {
        id: 94,
        href: "/release-notes/2021-07-21/",
        title: "2021-07-21 release",
        description: "New Features and Enhancements # Enterprise Edition # No new features or enhancements added to the Enterprise Edition with this release.\nCommunity Edition # No new features or enhancements added to the Community Edition with this release.\nBug Fixes #   CORE-7410 - Fix filtering issue when attempting to filter for a value that does not exist. Now returns “no events found” instead of returning all results.\n  CORE-7514 - Fix custom date range bug for Last Activity column in repository list view",
        
        
        
        content: "New Features and Enhancements # Enterprise Edition # No new features or enhancements added to the Enterprise Edition with this release.\nCommunity Edition # No new features or enhancements added to the Community Edition with this release.\nBug Fixes #   CORE-7410 - Fix filtering issue when attempting to filter for a value that does not exist. Now returns “no events found” instead of returning all results.\n  CORE-7514 - Fix custom date range bug for Last Activity column in repository list view\n  CORE-7408 - Fix sorting issue for Developer column on Alerts and Events page\n  "
        
      })
      .add(
      {
        id: 95,
        href: "/release-notes/2021-07-03/",
        title: "2021-07-03 release",
        description: "New Features and Enhancements # Enterprise Edition # Code Risks #   Within the repository details page the Code Risks tab now indicates the level of risk associated with any of the risk categories that BluBracket could potentially be identifying. As seen in the screenshot below, all categories are designated with a High/Medium/Low indicator and the number of violations associated with the risk category type. Clicking risk category type will navigate the user to a list view of the violations.",
        
        
        
        content: "New Features and Enhancements # Enterprise Edition # Code Risks #   Within the repository details page the Code Risks tab now indicates the level of risk associated with any of the risk categories that BluBracket could potentially be identifying. As seen in the screenshot below, all categories are designated with a High/Medium/Low indicator and the number of violations associated with the risk category type. Clicking risk category type will navigate the user to a list view of the violations.\n      Access Table in Repo Details #   The Access tab in the repository details page has been updated to include a permissions column and icons to indicate the type of user that has access to the repository.\n      Secret Scan Updates #   There are a number of updates that have been added to the secret scanning algorithm. These are continuously improved upon. Calling out some of the more substantial improvements here:\n  Adding passphrase types to the list of secrets found - e.g. sshpassphrase, sshpass123, etc.\n  Passwords in XML with attributes - e.g. e.g. \u0026lt;Pass encoding=\u0026quot;base64\u0026quot;\u0026gt;NjllNWU5ZWMwZDU0MmU5Y2QwOTY4MWM5YzZhMDdkYWVmNjg3OWE3MDMzM2Q4MWJmCg==\u0026lt;/Pass\u0026gt;\n  Client key - e.g. client_key: 383c8164d4bdd95d8b1bfbf4f540d754 # Informative\n    Server to Server Tokens #  BluBracket now allows the user of server to server tokens when adding code servers. Previously only Personal Access Tokens (PATs) were allowed here.  Community Edition # No new features or enhancements added to the Community Edition with this release.\nBug Fixes #   CORE-7303 - Owners column was incorrectly rendering on the repository list view.\n  CORE-7302 - Repository details page was seeing strange rendering of incorrect data in some instances.\n  CORE-7309 - Issue where the events table was rendering an extra column.\n  CORE-7339 - Number of violations on the Code Risk table were not matching filtered view in Alert table. This has been addressed with the new Code Risk table as well.\n  CORE-7349 - Repository filter was not functioning properly in the repository selection screen in code server configurations.\n  CORE-7287 - Risk scores that were not fully calculated were always showing up as gray. They now adhere to the normal color scheme which is determined by total score.\n  "
        
      })
      .add(
      {
        id: 96,
        href: "/release-notes/2021-06-05/",
        title: "2021-06-05 release",
        description: "New Features and Enhancements # Enterprise Edition # High Risks #  The BluPrint page now contains a new table that displays the most risky repos that are currently being monitored. The repository with the highest risk score is at the top of the list, descending to the 100th highest at the bottom. The Alert tiles have been moved to just below this table and are now, by default, in a collapsed state.",
        
        
        
        content: "New Features and Enhancements # Enterprise Edition # High Risks #  The BluPrint page now contains a new table that displays the most risky repos that are currently being monitored. The repository with the highest risk score is at the top of the list, descending to the 100th highest at the bottom. The Alert tiles have been moved to just below this table and are now, by default, in a collapsed state.  Repository URL in web hook events #  Now showing the repository name and repository URL in the details of web hook events.  Organization Column in Contribution Table #  The contribution table in the developer details page now contains a column for the associated organization.  Additional Password Variations #  The following variations on the left hand side of any password equation have been added to the list of identified secrets: PSWRD, PWRD and PSWD. As we identify more of these types of variations on password and credential words we will add them to the list.  Google API and Calendar Keys #  Due to the high number of instances where customers have requested that these be ignored, BluBracket now filters out both Google API and calendar keys. We would love to hear your feedback on this as well.  Community Edition # No new features or enhancements added to the Community Edition with this release.\nBug Fixes #   CORE-7114 - Back button in the portal is not navigating correctly in some instances. Fixed.\n  CORE-6916 - Repository table should be sorted by Risk Score. Updated.\n  CORE-6757 - Commit messages should be truncated when too verbose. Updated.\n  CORE-6871 - Filter icon is disappearing in some situations and then reappearing. Fixed.\n  CORE-6876 - Text based search is not working in the Org column of some tables. Fixed.\n  CORE-6844 - Sort should work for all header types in the repository list view. Updated.\n  CORE-6875 - Select All option in some filters not working properly. Fixed.\n  CORE-6969 - Some columns were removed from the alert/event CSV download in the last release. This has been revered.\n  CORE-6981 - Error thrown in some cases when the label filter is used in the repository list view. Fixed.\n  CORE-6905 - Code copies table header text is being cut off. Fixed.\n  CORE-6904 - Code server fly-over text fields colliding between views. Fixed.\n  CORE-6874 - Selection of active alerts is cached on reviewed alerts. Fixed.\n  CORE-6908 - Repo and clone counts were showing 0 in some cases in the developer list view. Fixed.\n  CORE-6922 - Active and inactive secret labels were not being displayed in the alert fly-over. Fixed.\n  CORE-6647 - Fixed an issue with the number of alerts capping out at 2500 cumulatively for both active and reviewed alerts.\n  CORE-7056 - Code copies deep link missing for repository details. Updated.\n  CORE-6954 - Sort functions not working correctly for both repository and developer columns in the alerts table. Fixed.\n  CORE-6847 - Time filter behaves erratically when manually entering dates. Fixed.\n  CORE-6125 - Secrets starting with “$” were previously not being detected. Fixed.\n  "
        
      })
      .add(
      {
        id: 97,
        href: "/release-notes/2021-05-03/",
        title: "2021-05-03 release",
        description: "New Features and Enhancements # Enterprise Edition # Event Tagging and Alert Enabling #   Event Tagging: For quite some time now BluBracket has been using tagging events with things like “Active Token”, “Inactive Token”, “Strong Password”, etc. These tags have been used to notify the user of specific information related to the event. It quickly became apparent that these could be useful for customers when integrating with other systems, or just for filtering purposes.",
        
        
        
        content: "New Features and Enhancements # Enterprise Edition # Event Tagging and Alert Enabling #   Event Tagging: For quite some time now BluBracket has been using tagging events with things like “Active Token”, “Inactive Token”, “Strong Password”, etc. These tags have been used to notify the user of specific information related to the event. It quickly became apparent that these could be useful for customers when integrating with other systems, or just for filtering purposes. As such, we have added the capability to add tags to events. By navigating to the settings/alerts section of the portal the user will see a table with a comprehensive list of all of the events that BluBracket monitors for. Users can add any text tag to associate with the event, and as these events are recognized the tag will be added to the metadata of the event.\n  Alert Enabling: Previous BluBracket determined the events that would be escalated to Alerts. While this was done to focus on the events that BluBracket felt would be the most compelling it quickly became apparent that some other events were very important to some customer workflows and should be escalated as well. As such we have given the tenant administrators the ability to enable alerts for any of the events that we report. In the same location noted above (settings/alerts) the user will see the toggle on the left side of the table that enables the alerts. Once enabled for an event these will show up in the Alerts APIs and under the Alerts tab in the Alerts \u0026amp; Events page of the portal. NOTE: Today these alerts are auto-dismissed in the Alerts table. This is due to some legacy design. It does not affect the APIs but is confusing for those reviewing in the portal. We will shortly update this so that they are not auto-dismissed and will note this in the appropriate release notes.\n  Community Edition # No new features or enhancements added to the Community Edition with this release.\nBug Fixes #   CORE-6746 - There was an issue with some dismissed alerts displaying the “Dismiss” button instead of the “Reinstate” option.\n  CORE-5441 - Fixed the issue with multiple secrets in a single line of code - only the first one found was being reported.\n  "
        
      })
      .add(
      {
        id: 98,
        href: "/release-notes/2021-04-27/",
        title: "2021-04-27 release",
        description: "New Features and Enhancements # Enterprise Edition # PCRE Library #  The PCRE library has now been added to the BluBracket regular expression feature. This is an extension to our previous library and will allow users to pattern match more regular expressions than previously.  Community Edition # Command Line Interface (CLI) Tool - PII Addition #  In addition to built-in secrets and custom secrets, CLI does support the ability to define a different group of “secrets” related to PII (Personally Identifiable Information) such as Social Security Numbers (SSN), emails, URLs, IP-addresses, etc.",
        
        
        
        content: "New Features and Enhancements # Enterprise Edition # PCRE Library #  The PCRE library has now been added to the BluBracket regular expression feature. This is an extension to our previous library and will allow users to pattern match more regular expressions than previously.  Community Edition # Command Line Interface (CLI) Tool - PII Addition #  In addition to built-in secrets and custom secrets, CLI does support the ability to define a different group of “secrets” related to PII (Personally Identifiable Information) such as Social Security Numbers (SSN), emails, URLs, IP-addresses, etc. This feature is fully customizable. Out of the box CLI defines several patterns but all can be disabled, or the corresponded action changed. See the CLI Support page for more detailed information on this feature.  Bug Fixes #   CORE-5543 - Error thrown on the repository contribution table in some instances when selected. Has been addressed.\n  CORE-6491 - Dismissed alerts are missing the option to reinstate. This has been fixed.\n  CORE-6379 - Bad data being displayed in both CE and EE CSV download tables. This has been addressed.\n  CORE-6507 - Developer filter type has stopped working. This has been fixed.\n  CORE-6529 - Additional text being displayed in the BluPrint alerts. Addressed.\n  CORE-6516 - Addressed a column ordering issue with repository scanning.\n  CORE-6511 - Fixed an issue with generating a scanner API key.\n  CORE-6505 - Addressed an issue where the BluPrint alert counts were not matching table counts.\n  CORE-6540/6366 - Incorrect details were being displayed in the alert detail slide-out. Fixed.\n  CORE-6501 - Fixed a repository sorting issue.\n  CORE-6606 - End time for pending scans was showing invalid in some cases.\n  CORE-6124 - Minor issue with the rows per column display in the Community Edition secrets table.\n  CORE-6675 - Fixed an issue in the Community Edition monitored repos table - not filtering alerts.\n  CORE-6693 - “Alerts” at top of BluPrint page should not be displayed if not alerts. Fixed.\n  CORE-6596 - Toke permission error not displaying correctly when user adding code servers. Addressed.\n  CORE-6677 - Community Edition insights were not sorting from most to least. Fixed.\n  CORE-6709 - Removing a filter in the secrets table throws an error. This has been addressed.\n  CORE-6315 - Fixed an issue where the CLI tool “panics” if the regular expression is formed incorrectly.\n  CORE-5441 - Addressed an issue where secrets of the same type in the same line of code are not identified after finding the first one.\n  CORE-6523 - Fixed an issue with the first added code server not displaying code copy information.\n  "
        
      })
      .add(
      {
        id: 99,
        href: "/release-notes/2021-04-16/",
        title: "2021-04-16 release",
        description: "New Features and Enhancements # No new features in this release. # Bug Fixes #   CORE-6128 - CE - Incorrect count being displayed for duplicate alerts. Has been addressed.\n  CORE-5030 - Redundant URL being displayed in code copy details. Fixed.\n  CORE-5543 - Repository contribution table on BluPrint page is throwing an error when clicked. This is now fixed.\n  CORE-6284 - Issue with GitHub Checks app never completing scan if two users are both monitoring the same repository.",
        
        
        
        content: "New Features and Enhancements # No new features in this release. # Bug Fixes #   CORE-6128 - CE - Incorrect count being displayed for duplicate alerts. Has been addressed.\n  CORE-5030 - Redundant URL being displayed in code copy details. Fixed.\n  CORE-5543 - Repository contribution table on BluPrint page is throwing an error when clicked. This is now fixed.\n  CORE-6284 - Issue with GitHub Checks app never completing scan if two users are both monitoring the same repository. This has been fixed.\n  "
        
      })
      .add(
      {
        id: 100,
        href: "/release-notes/2021-03-26/",
        title: "2021-03-26 release",
        description: "New Features and Enhancements # Enterprise Edition # Rescan Repository #  It is now possible to rescan an entire repository, including all of the repository history, at the click of a button. Normally a full scan of a repository is done at the time of adding the code server that the repository belongs to, or whenever the repository is added. After that the initial scan the repository is monitored and all new commits are scanned and only periodically is the entire repository scanned.",
        
        
        
        content: "New Features and Enhancements # Enterprise Edition # Rescan Repository #  It is now possible to rescan an entire repository, including all of the repository history, at the click of a button. Normally a full scan of a repository is done at the time of adding the code server that the repository belongs to, or whenever the repository is added. After that the initial scan the repository is monitored and all new commits are scanned and only periodically is the entire repository scanned. This new button allows administrators to scan the entire repository whenever they would like.  Terms and Conditions #  A link to the BluBracket terms and conditions has been added to the bottom of the tenant portal. These terms and conditions have always been available in the BluBracket website and contracts but have been added here to make them easier to access.  Community Edition # Commit Date #  A commit date and deep link has now been added to the secrets table CSV download file. This makes it easier to share, understand and remediate issues directly from the document.  Terms and Conditions #  A link to the BluBracket terms and conditions has been added to the bottom of the tenant portal. These terms and conditions have always been available in the BluBracket website and contracts but have been added here to make them easier to access.  Bug Fixes #   CORE-6122 - Filters were previously not working in the Community Edition portal with repositories stared with numerical text. This has been addressed.\n  CORE-N/A - Fixed issue with the risk score formatting in the Enterprise Edition.\n  CORE-N/A - Removed the deep link for webhook URLs in alert details.\n  CORE-6083 - The Code Types chart was displaying 0% for code types that represented less than 1% of the total. We’ve added a tenth of a percent to handle this issue.\n  CORE-6121 - Sorting by date was displayed incorrectly in the Community Edition interface. This has been fixed.\n  "
        
      })
      .add(
      {
        id: 101,
        href: "/release-notes/2021-03-12/",
        title: "2021-03-12 release",
        description: "New Features and Enhancements # New Public APIs #   Two new APIs have been added to the list of public APIs available. The two new APIs allow users to dismiss alerts and re-enabled alerts that have been dismissed. This is especially important for users that have integrated with their CICD solutions and want to complete the loop. For example, a developer commits code that triggers a BluBracket alert, the user’s CICD integration recognizes the alert, creates a ticket and notification to the appropriate developer/administrator to remediate the issue, the developer/administrator remediates and closes the ticket, which triggers the API to dismissed the addressed alert in BluBracket.",
        
        
        
        content: "New Features and Enhancements # New Public APIs #   Two new APIs have been added to the list of public APIs available. The two new APIs allow users to dismiss alerts and re-enabled alerts that have been dismissed. This is especially important for users that have integrated with their CICD solutions and want to complete the loop. For example, a developer commits code that triggers a BluBracket alert, the user’s CICD integration recognizes the alert, creates a ticket and notification to the appropriate developer/administrator to remediate the issue, the developer/administrator remediates and closes the ticket, which triggers the API to dismissed the addressed alert in BluBracket.\n  For additional information on available BluBracket APIs navigate to the support documentation here .\n  Bug Fixes #   CORE-4127 - description of “Repository pushed to public server” was showing up in red text. Has been addressed.\n  CORE-4927 - Developer Type chart on the BluPrint page was showing a drop-down that should not have been there. This has been fixed.\n  "
        
      })
      .add(
      {
        id: 102,
        href: "/release-notes/2021-03-05/",
        title: "2021-03-05 release",
        description: "New Features # Command Line Interface (CLI) Tool Enhancements #   A number of significant changes have been added to the CLI tool this with this release of the Community Edition. All of these improvements, except for code signing of course, have been taken from the existing features within the enterprise version of the BluBracket solution.\n  Activeness Checks - The CLI tool now runs an activeness check on a number of the tokens, keys and IDs to eliminate false positives.",
        
        
        
        content: "New Features # Command Line Interface (CLI) Tool Enhancements #   A number of significant changes have been added to the CLI tool this with this release of the Community Edition. All of these improvements, except for code signing of course, have been taken from the existing features within the enterprise version of the BluBracket solution.\n  Activeness Checks - The CLI tool now runs an activeness check on a number of the tokens, keys and IDs to eliminate false positives.\n  Code Signing - The CLI tool now alerts the developer as to whether or not the code is signed when committed and assists in the code signing configuration if not already configured. This can be configured to either block or warn when performing a push to the repository.\n  Sensitive Words - The CLI tool now alerts the user if any sensitive words are being committed to the local repository. These are words like master, slave, dummer, etc.\n  CLI Configurations - By default the CLI tool blocks secrets and allows sensitive words. It is possible to customize this behavior using config files. CLI loads config files from \u0026lt;repo\u0026gt;/.blubracket/config.yaml and ~/.blubracket/config.yaml. The CLI mimics git config behavior where settings in a repo-local config overwrite settings in global config.\n  For additional information about the CLI tool and other aspects of the Community Edition product, check out the Getting Started with the Community Edition section of the BluBracket Help Center.\n  Repository List Table Update #   Clicking on the repository table now automatically sorts the secrets table by the selected repository. This allows the user to see all of the relevant secrets associated with the repository as well as the secret scores that compose the repo risk score.\n  Previously the clicking of any row in the table would expose a slide-out that showed relevant information. We are still determining which is the most helpful to users and would love your feedback. Please drop us a note at support@blubracket.com .\n  Team Edition Links #  There are a number of areas within the Community Edition interface that you can now sign up for a free trial of the BluBracket Team Edition. By simply clicking on one of these links you will be navigated to the BluBracket web page that will give you more information about the trial and allow you to submit a request for the trial. By default the trial is 14 days, but you can request more time if necessary.  Bug Fixes #  Only minor UI fixes in this release of the Community Edition.  Known Issues and Critical Notifications #  There are no known issues or notifications at this time.  "
        
      })
      .add(
      {
        id: 103,
        href: "/release-notes/2021-02-12/",
        title: "2021-02-12 release",
        description: "New Features # Repo Details Slide Out #   Clicking on any row within the repository table will now expose a repository details slide out panel. Within this panel the user can see all of the unreviewed secrets that compose the Repo Risk Score for the specific repository. Users are still able to navigate to the GitHub repository, as was the previous action by clicking on a given repo, by clicking on the deep link within the slide out.",
        
        
        
        content: "New Features # Repo Details Slide Out #   Clicking on any row within the repository table will now expose a repository details slide out panel. Within this panel the user can see all of the unreviewed secrets that compose the Repo Risk Score for the specific repository. Users are still able to navigate to the GitHub repository, as was the previous action by clicking on a given repo, by clicking on the deep link within the slide out.\n  In the next release clicking on the repository will also automatically sort the secret table for those secrets within the repository.\n  Repo Risk Score Bubbles #   Previously if a repository was added but the score was not yet calculated we just showed an empty space in the Risk column, and it was a bit confusing as to whether there were no secrets found or otherwise. As of this release the space will display a gray bubble with a tool-tip that the Repo Risk Score has not yet been calculated.\n  Along the same line, we have now added a green bubble for Repo Risk Scores that are zero.\n  As a reminder, the Repo Risk Score is recalculated and updated every 24 hours and is based solely on the unreviewed secrets. The Repo Risk Score is not immediately recalculated upon reviewing a found secret.\n  Support Links #  All support documentation is now directly linked to the BluBracket Help Center. This still allows the end users to focus on the desired information as well as quick access to other related documentation.  Bug Fixes #   Repository Sorting - this now sorts correctly by Repo Risk Score (high to low) by default\n  Filters - previously there were filters exposed that didn’t apply to the specific tables. This has been addressed.\n  Minor UI fixes within the portal interface\n  Known Issues and Critical Notifications #  No known issues at this time  "
        
      })
      .add(
      {
        id: 104,
        href: "/release-notes/2021-02-02/",
        title: "2021-02-02 release",
        description: "New Features # Repo Risk Score and Secret Risk Score #   The BluBracket Community Edition has introduced the concepts of Repository Risk Score and Secret Risk Score to the interface as of this release. This feature is meant to give the user, at a glance, an idea of the potential risk involved with a specific repository.\n  The Repository Risk Score is a number that is meant to reflect the number of unreviewed secrets that exist within the repository as well as their potential severity.",
        
        
        
        content: "New Features # Repo Risk Score and Secret Risk Score #   The BluBracket Community Edition has introduced the concepts of Repository Risk Score and Secret Risk Score to the interface as of this release. This feature is meant to give the user, at a glance, an idea of the potential risk involved with a specific repository.\n  The Repository Risk Score is a number that is meant to reflect the number of unreviewed secrets that exist within the repository as well as their potential severity. The higher the number the more secrets that may exist in the repository or the more severe the secrets in the repository may be.\n  The Secret Score is a number that is assigned to each secret that is found in a repository. The higher the secret score the more severe the secret is likely to be. For example, if a token is found to be active it will have a much higher number than one that is inactive.\n  The Repo Risk Score is an accumulation of the Secret Scores found in a given repository. These numbers are still being refined. We would love your feedback on how these are working for you. Let us know. support@blubracket.com\n  Command Line Interface (CLI) Tool #  The BluBracket Command Line Interface (CLI) Tool is a downloadable application that developers can run on their devices to catch secrets before they are committed to a repository. The tool leverages pre-commit hooks and will identify any of the 50+ tokens, keys and IDs as well as passwords and regular expressions. The tool can be downloaded from the main portal page. For more information check out the extensive documentation within the Getting Started with the Community Edition section of the BluBracket Help Center.  Community Edition Settings Page #  In our initial release we made the settings page available for beta users and we have now exposed this to all Community Edition users. This page allows users to modify the organization and repositories within the organization as well as the capability to generate an API key to leverage the BluBracket CICD and Events/Alerts APIs.  UI Improvements #  We have swapped the repository and secrets tables. As you will notice the secrets table is now on the bottom of the main portal page, and the repository table is at the top. This is to better highlight the Repository Risk Score, which is intended to be the main focus of the main portal page.  Community Edition Tour #  Since the last release at tour of the main portal page has been added to explain all of the feature. This tour will only be displayed on the first visit to the portal within a given browser but can be accessed at any time from the support “?” menu at the top right of the main portal page.  Bug Fixes #  Only minor UI fixes in this release of the Community Edition.  Known Issues and Critical Notifications #   Filters and Sorting\n  At this time there are filters in the repository table that are not immediately useful. This is a known issue and will be addressed with the next release\n  The repository table should be sorted on the Repo Risk Score - highest to lowest. At this time it is being sorted on the scan time. This will be updated in the next release.\n    "
        
      })
      .add(
      {
        id: 105,
        href: "/release-notes/2021-01-22/",
        title: "2021-01-22 release",
        description: "Bug Fixes #  CORE-5377 - Updated the Community Edition secrets table to include a loading spinner CORE-5468 - Fixed the incorrect URL for Secrets in Code documentation CORE-4744 - Sorting fix for the repository list view CORE-5357 - A number of minor UI fixes were taken care of in the Community Edition CORE-5370 - Fixed the Community Edition Safari issue with the insight tile sizing CORE-5371 - Topbar icon fix for Community Edition CORE-5485 - Addressed the Bitbucket push event when no nickname in payload  ",
        
        
        
        content: "Bug Fixes #  CORE-5377 - Updated the Community Edition secrets table to include a loading spinner CORE-5468 - Fixed the incorrect URL for Secrets in Code documentation CORE-4744 - Sorting fix for the repository list view CORE-5357 - A number of minor UI fixes were taken care of in the Community Edition CORE-5370 - Fixed the Community Edition Safari issue with the insight tile sizing CORE-5371 - Topbar icon fix for Community Edition CORE-5485 - Addressed the Bitbucket push event when no nickname in payload  "
        
      })
      .add(
      {
        id: 106,
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
