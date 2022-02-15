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
        href: "/faq/example-question/",
        title: "An example question",
        description: "",
        content: ""
      })
      .add(
      {
        id: 1,
        href: "/how-to/add-code-servers/bitbucket-cloud/",
        title: "Bitbucket Cloud",
        description: "How to add a Bitbucket Cloud server to your tenant",
        content: "After selecting to add a Bitbucket Cloud code server, follow the instructions below to add a Bitbucket XXX as a code server in BluBracket.\nBitbucket uses the term \u0026ldquo;Bitbucket Cloud\u0026rdquo; to differentiate repositories hosted at bitbucket.com from their self-hosted enterprise offering.\nEach Bitbucket XXX is a different code server in BluBracket (see Bitbucket docs on XXX).\nEntering a workspace name # The next thing to do is select a workspace to point the server to. Workspaces are usually, but not always, set up as lines of business or projects. For example, Google may have workspaces for Nest, Android, Add Words, etc., all under the same server. It is possible to point a server at multiple workspaces. Enter the targeted workspace into the input field.\n  If you don’t know the workspace name you can find them in the Bitbucket administrator portal. Log into your Bitbucket account as an administrator and navigate to the following location, https://bitbucket.org/account/workspaces/. From this location, click Manage (under Actions) for one of the workspaces, and note the Workspace ID\n  Entering a personal access token (PAT) # The next step in adding the code server is adding the Personal Access Token (PAT). In order for BluBracket to access information within a given repository, an access token must be uploaded into the tenant.\nNote: The personal access token but be entered in the following format: username:token.\nExample: holland:Vgc9Kw8w5zQu58989Uxz\nhow to generate a personal access token on Bitbucket\nEnter the token in the location indicated below:\n  Finally, select either the “all repositories” or “customer select repositories” option and click on the save button.\n  At this point, if you’ve completed all of the above steps and entered the information accurately, the enterprise code server should be up and running and start to pull the desired data. Please note it can take anywhere from a few minutes to several hours for our system to finish analyzing your repositories. You can navigate to the \u0026ldquo;repositories\u0026rdquo; page to check the real-time scanning status.\n"
      })
      .add(
      {
        id: 2,
        href: "/how-to/add-code-servers/github-cloud/",
        title: "GitHub Cloud",
        description: "How to add a GitHub cloud code server to your tenant",
        content: "After selecting to add a GitHub Cloud code server, follow the instructions below to add a GitHub Organization as a code server in BluBracket.\nGitHub uses the term \u0026ldquo;GitHub Cloud\u0026rdquo; to differentiate repositories hosted at github.com from their self-hosted enterprise offering.\nEach GitHub Organization is a different code server in BluBracket (see GitHub\u0026rsquo;s docs on Organizations).\nEntering the organization name #   Enter the short form of the GitHub Organization name. The short form of the name is the version shown in the URL for the org.\nFor example: The Linux Foundation Engineering org\u0026rsquo;s short form name is LF-Engineering as seen in the URL on that page.\nYou can see all organizations you are a member of in your GitHub account at https://github.com/settings/organizations.:\n  Entering a Personal Access Token (PAT) # BluBracket uses a personal access token to access the repos you wish to scan (see GitHub\u0026rsquo;s docs on personal access tokens).\n  The \u0026ldquo;generate on GitHub\u0026rdquo; button will take you to the GitHub page specific to creating new tokens:\n  Click on the “generate token” button at the bottom of the page:\n  Copy the PAT token from the GitHub page and enter it in the BluBracket dashboard as shown:\n  Finally, select either the “all repositories” or “customer select repositories” option, and click on the \u0026ldquo;save\u0026rdquo; button.\n  After clicking \u0026ldquo;save,\u0026rdquo; BluBracket will start scanning for any risks in the code, as well as risks related to access and configuration of the GitHub account.\nIt can take anywhere from a few minutes to several hours for our system to finish analyzing your repositories. You can navigate to the ‘Repositories’ page to check the real-time scanning status.\n"
      })
      .add(
      {
        id: 3,
        href: "/how-to/add-code-servers/gitlab-cloud/",
        title: "GitLab Cloud",
        description: "How to add a GitLab Cloud code server to your tenant",
        content: "After selecting to add a GitLab Cloud code server, follow the instructions below to add a GitLab XXX as a code server in BluBracket.\nGitLab uses the term \u0026ldquo;GitLab Cloud\u0026rdquo; to differentiate repositories hosted at gitlab.com from their self-hosted enterprise offering.\nEach GitLab XXX is a different code server in BluBracket (see GitLab docs on XXX).\nEntering a Group name # The next thing to do is select a Group to point the server to. Groups are usually, but not always, set up as lines of business or projects. For example, Google may have Groups for Nest, Android, Add Words, etc., all under the same server. It is possible to point a server at multiple Groups. Enter the targeted Group into the input field.\n  If you don’t know the Group name you can find them in the Gitlab administrator portal. Log into your GitLab account as an administrator and navigate to the following location: Click on Menu, then Select Groups.\n  Entering a Personal Access Token (PAT) # The next step in adding the code server is adding the Personal Access Token (PAT). In order for BluBracket to access information within a given repository, an access token must be uploaded into the tenant.\n[How to generate a Personal Access Token (PAT) in GitLab] (https://support.blubracket.com/hc/en-us/articles/360060110692-How-To-Generate-Personal-Access-Token-PAT-in-GitLab)\nEnter the token in the location indicated below.\n  Click Next\nFinally, select either the “All Repositories” or “Customer Select Repositories” option and click on the Save button.\n  At this point, if you’ve completed all of the above steps and entered the information accurately, the Enterprise Code Server should be up and running and start to pull the desired data. Please note it can take anywhere from a few minutes to several hours for our system to finish analyzing your repositories. You can navigate to the ‘Repositories’ page to check the real-time scanning status.\n"
      })
      .add(
      {
        id: 4,
        href: "/api/intro-auth-keys/",
        title: "Intro to BluBracket APIs and API keys",
        description: "How to access and use the BluBracket API.",
        content: "In order to make requests into the event and alert APIs, you have to generate an API key, which you use to generate a token, and then you can setup any kind of integration that you would like to make authenticated requests into the Blu Event and Alert APIS.\nportal-generate-api-key.png\nGenerating an auth token #   Create an API key by navigating to Settings \u0026gt; API Keys  Generating a key in the BluBracket web console.\n    Enter a name for the key\n  Select Integration from the drop down\n  Select Generate Key\n  Save the JSON/CSV file to your desktop\n  Open the JSON/CSV file and copy the value of the token\n{ \u0026quot;api_keys\u0026quot;: { \u0026quot;https://mycompany.blubracket.com\u0026quot;: { \u0026quot;id\u0026quot;: \u0026quot;BLU-a492144b-f118-4598-991e-f1d4d6209edf\u0026quot;, \u0026quot;key\u0026quot;: \u0026quot;TofsB.....EqwGg\u0026quot;, \u0026quot;token\u0026quot;: \u0026quot;QkxVL....xd0dn\u0026quot; } } }    Testing and using the API token # With the generated token, you can make requests directly to BluBracket APIs. You will need to set the Authorization header and use the provided token as Bearer token.\nHere are some examples using curl:\ncurl -H \u0026quot;Authorization: Bearer TOKEN_FROM_STEP_2\u0026quot; --data '{\u0026quot;filters\u0026quot;:[]}' https://mycompany.blubracket.com/api/public/event/search curl -H \u0026quot;Authorization: Bearer TOKEN_FROM_STEP_2\u0026quot; --data '{\u0026quot;filters\u0026quot;:[]}' https://mycompany.blubracket.com/api/public/alert/search  Note: As per ISO 8601, date formatting requires either the Z or the +00:00 be supplied at the end. This is required to determine that the datetime is in the UTC timezone.\nExample Python code is shown below:\nfrom datetime import datetime, timezone datetime.now(timezone.utc).isoformat()  Output: 2021-07-20T23:45:06.342716+00:00\n"
      })
      .add(
      {
        id: 5,
        href: "/intro/",
        title: "Introduction to BluBracket ",
        description: "",
        content: ""
      })
      .add(
      {
        id: 6,
        href: "/intro/what-is-blubracket/",
        title: "What is BluBracket?",
        description: "BluBracket is a code and git security suite that identifies risks in your code, audits who and what has access to your code, and tracks where your code goes outside your git repos.\nBluBracket use-cases #  Identifying, blocking, and removing risks in code  Secrets Personally identifiable information (PII) Non-inclusive language (NIL) Infrastructure-as-code (IAC) risks   Auditing who has access Auditing where it goes  Who is BluBracket for?",
        content: "BluBracket is a code and git security suite that identifies risks in your code, audits who and what has access to your code, and tracks where your code goes outside your git repos.\nBluBracket use-cases #  Identifying, blocking, and removing risks in code  Secrets Personally identifiable information (PII) Non-inclusive language (NIL) Infrastructure-as-code (IAC) risks   Auditing who has access Auditing where it goes  Who is BluBracket for? # BluBracket is for individual developers, development and appsec teams of all sizes, and enterprise infosec teams.\n  BluBracket Community Edition\nCore BluBracket code security features—including the CLI tools.Available free with no time limit for personal and open source use.\n  BluBracket Teams Edition\nAll the BluBracket features to identify risks in your code, as well as git access and configuration risks.\nAvailable as a full-featured, free, no-obligation trial. After the trial, the account will automatically convert to a BluBracket Community Edition account.\n  BluBracket Enterprise Edition\nThe entire suite of BluBracket code security features to identify risks in your code, git access and configuration risks, and track where code goes outside your git repos.\nContact our customer success team for a free demo.\n  How BluBracket works # BluBracket has two parallel modes of operation:\n As a SaaS suite providing protection and alerts across a codebase, supporting the detection, analysis, and remediation of security risks in the code and related to code access As a local CLI tool scanning code locally, to support immediate identification of potential risks in the code, without the risk of sending that code to remote servers  And BluBracket integrates at multiple points in the SDLC workflow:\n Before code is committed, via the CLI and pre-commit hooks, and in popular IDEs Before code is merged, via CI checks (GitHub Checks, Bitbucket Code Insights, Jenkins, etc.) Actionable alerts in Slack and other tools when new risks are detected Tools to analyze and understand existing risks, and trend reports to see improvement over time  What does BluBracket integrate with? #  Local/workstation tools  CLI   Code servers  GitHub GitLab Bitbucket Azure DevOps (contact us for beta) Gerrit (coming soon)   CI servers  GitHub Checks Bitbucket Code Insights Jenkins and more via open API   Identity, authentication, and authorization  Azure AD Okta Ping SAML OAuth (coming soon)   Messaging  Slack Microsoft Teams   Ticketing \u0026amp; incident management  Jira ServiceNow PagerDuty Splunk   Build your own  APIs Webhooks (coming soon)    How to get started with BluBracket # Start a free, no-obligation trial today, or contact our customer success team for a free demo.\nOr see all the steps to getting started here.\n"
      })
      .add(
      {
        id: 7,
        href: "/how-to/add-code-servers/",
        title: "Adding code servers",
        description: "How to add code servers to your tenant",
        content: "The first step in setting up a BluBracket tenant is adding code servers. This enables the BluBracket servers to communicate with a company’s Git services, which are necessary to generate alerts, insights, and reports.\nNavigating to the \u0026ldquo;enterprise code servers\u0026rdquo; section of the \u0026ldquo;settings\u0026rdquo; page # Adding a code server starts with navigating to the appropriate section in the Settings section of the tenant portal. After authenticating into the portal, select the Settings option in the left navigation bar.\nOnce the setting section is exposed, select the “enterprise code servers” section. This will reveal any code servers that have already been configured as well as the “add code server” button for adding new code servers.\n  Selecting a server type # Now that the configuration bar is exposed, the first thing we want to do is select a Server Type. We will be setting up a GitHub Cloud server, so select the “GitHub Cloud” option.\n  "
      })
      .add(
      {
        id: 8,
        href: "/how-to/iac-checks/bitbucket/",
        title: "Bitbucket",
        description: "Configuring infrastructure as code on Bitbucket",
        content: "Step 1: Create Bitbucket Repository Variables:** #   Log into Bitbucket and select a repository where you want to enable Infrastructure as Code scanning.\n  Within the repository, select Repository settings, then Repository variables\n  Create five new Repositories variables\n  Name: DOCKER_HUB_EMAIL\nvalue: blusupport@blubracket.com\nName: DOCKER_HUB_USERNAME\nvalue: blusupport\nName: DOCKER_HUB_TOKEN\nvalue: 085ef825-b366-4636-be2a-8babaf65064f\nName: BLUBRACKET_SERVICE_ENDPOINT\nvalue: BluBracket Tenant name\nExample: https://acme.blubracket.com\nName: BLUBRACKET_INTEGRATION_KEY\nvalue: BluBracket Integration API key\nSteps to create a BluBracket API token: https://support.blubracket.com/hc/en-us/articles/4403018405140-Event-and-Alert-APIs\n  Step 2: Create Pipeline Workflow: #   Within the repository, select Pipelines and either update an existing pipelines.yaml script or create a new one\n  Add the following script to enable Infrastructure as Code scanning:\n  pipelines: pull-requests: '**': - step: name: 'Run BluBracket IaC Scan' image: name: blubracket/iac-checker:0.0.4-beta username: $DOCKER_HUB_USERNAME password: $DOCKER_HUB_TOKEN email: $DOCKER_HUB_EMAIL script: - echo \u0026quot;Running BluBracket IaC scan\u0026quot; - env - cd /home/blubracket/iac-checker - pipenv run run --repo-directory ${BITBUCKET_CLONE_DIR} --source-branch ${BITBUCKET_BRANCH} -target-branch ${BITBUCKET_PR_DESTINATION_BRANCH} --do-not-fail-on-misconfigurations branches: main: - step: name: 'Run Blubracket IaC Scan' image: name: blubracket/iac-checker:0.0.4-beta username: $DOCKER_HUB_USERNAME password: $DOCKER_HUB_TOKEN email: $DOCKER_HUB_EMAIL script: - echo \u0026quot;Running BluBracket IaC scan\u0026quot; - env - cd /home/blubracket/iac-checker - pipenv run run --repo-directory ${BITBUCKET_CLONE_DIR} --do-not-fail-on-misconfigurations --source-branch ${BITBUCKET_BRANCH}  Step 3: Run Workflow #  Ensure workflow runs successfully. This can be verified by expanding the pipenv run karat:     If Infrastructure as Code was detected, you will see entries that indicate a check has been performed (green check indicating scan passed, a red “x” indicating a risk has been detected).       For all detected risks (red “x”), an alert will be posted to the BluBracket portal.    "
      })
      .add(
      {
        id: 9,
        href: "/intro/use-cases/",
        title: "BluBracket use-cases",
        description: "BluBracket is most often used to identify risks in code, who has access, and where it goes:\n Identifying, blocking, and removing risks in code  Secrets Personally identifiable information (PII) Non-inclusive language (NIL) Infrastructure-as-code (IAC) risks   Auditing who has access Auditing where it goes  Secrets in code # Passwords, keys, and other secrets in code are no longer secret when code is shared across teams, repos are made public, or when employees leave with copies of the code.",
        content: "BluBracket is most often used to identify risks in code, who has access, and where it goes:\n Identifying, blocking, and removing risks in code  Secrets Personally identifiable information (PII) Non-inclusive language (NIL) Infrastructure-as-code (IAC) risks   Auditing who has access Auditing where it goes  Secrets in code # Passwords, keys, and other secrets in code are no longer secret when code is shared across teams, repos are made public, or when employees leave with copies of the code.\nBluBracket\u0026rsquo;s tools identify and help eliminate secrets throughout the development workflow (before commit, review on pull request, and alert on commits to monitored repos), and make it easy to triage and mitigate secrets previously committed.\nBluBracket\u0026rsquo;s deep scans identify secrets in git history, and can even identify active secrets so you know which ones are most important.\nPersonally identifiable information (PII) # Unlike secrets, personally identifiable information can\u0026rsquo;t be changed or rotated. As companies face growing liability for mishandling PII, finding and excising it from code is becoming a growing need.\nBluBracket\u0026rsquo;s deep scans identify PII in git history, show teams the PII risk across their codebase, and help remediate. Just as with BluBracket\u0026rsquo;s secret detection tools, BluBracket can block commits of new PII, block PRs with PII, and alert teams any time PII is committed to monitored repos.\nNon-inclusive language (NIL) # Companies and open source communities are both increasingly aware of the role inclusive language plays in attracting and retaining team members in all roles. Non-inclusive language creates both significant brand risks, as well as retention risks.\nBluBracket\u0026rsquo;s tools help identify non-inclusive language throughout the development process, and guide teams to continuous improvement over time.\nInfrastructure as code (IaC) risks # Auditing infrastructure-as-code for proper configuration before it\u0026rsquo;s applied to the infrastructure reduces risk and improves productivity for teams of all sizes.\nBluBracket\u0026rsquo;s tools audit IaC throughout the development process, but teams value the guidance most when reviewing pull requests.\nAccess auditing # Auditing who and what systems have access to code is critical to supporting modern workflows that often require broad access across the organization, while also protecting organizations and teams against stale permissions and misconfigurations that can emerge over time.\nIdentifying who has access to what, and calling out best-practice configuration of everything from git hooks to branch protection rules helps guide teams to continuous improvement and ongoing operational security. When teams know they can easily audit access, they\u0026rsquo;re both more productive because they can more easily grant access, and more secure because they have tools to\nCode leaks # 👉  This feature is only available to Enterprise customers.   Productive teams need to share code, but when code leaks outside the organization it can risk revealing key details attackers can leverage against the app, or worse.\nMost code leaks are unintentional—private code can be accidentally committed to open source projects or in gists to discuss a problem—but the pathways code moves through frustrates developers and hampers productivity. BluBracket can identify code leaks so they can be remediated before they cause significant harm.\n"
      })
      .add(
      {
        id: 10,
        href: "/how-to/cli/",
        title: "CLI tool",
        description: "This page is a stub. Please help add to it by opening a pull request with new content.",
        content: "This page is a stub. Please help add to it by opening a pull request with new content.\n"
      })
      .add(
      {
        id: 11,
        href: "/how-to/ignore-rules/",
        title: "Configure ignore rules",
        description: "How to set ignore rules",
        content: "Configuring rules for ignoring detected risks can be set at multiple levels:\n On a developer\u0026rsquo;s local machine, with configuration files in the user\u0026rsquo;s home directory Per repo, with configuration files in the repo Globally, for all users and repos in an account, with a configuration file in the account  "
      })
      .add(
      {
        id: 12,
        href: "/api/event-alert/",
        title: "Event \u0026 alert API",
        description: "Reading and searching events and alerts.",
        content: "Getting alert counts # Search alerts using filters over attributes\nEndpoint # POST /api/public/alert/count\nRequest # body # One or more filters\n{ \u0026quot;filters\u0026quot;:[ { \u0026quot;id\u0026quot;:\u0026quot;alert_type\u0026quot;, \u0026quot;value\u0026quot;:[\u0026quot;REPO_SCAN_MATCH\u0026quot;], \u0026quot;exact_match\u0026quot;:true }, { \u0026quot;id\u0026quot;:\u0026quot;repo_type\u0026quot;, \u0026quot;value\u0026quot;:[\u0026quot;ENTERPRISE_PUBLIC\u0026quot;,\u0026quot;PUBLIC\u0026quot;], \u0026quot;exact_match\u0026quot;:true }, { \u0026quot;id\u0026quot;:\u0026quot;state\u0026quot;, \u0026quot;value\u0026quot;:[\u0026quot;ACTIVE\u0026quot;], \u0026quot;exact_match\u0026quot;:true } ] }  Response # Success: 200\nNumber of alerts\nSearching alerts # Updating an alert # Update the state of one or more alerts.\n"
      })
      .add(
      {
        id: 13,
        href: "/how-to/iac-checks/github/",
        title: "GitHub",
        description: "Configuring infrastructure as code on GitHub",
        content: "Step 1: Create GitHub Repository Secrets:\n  Log into GitHub and select a repository where you want to enable Infrastructure as Code scanning.\n  Within the repository, select settings, then secrets\n  Create three new repositories secrets\n  Name: DOCKER_HUB_USERNAME\nvalue: blusupport\nName: DOCKER_HUB_TOKEN\nvalue: 085ef825-b366-4636-be2a-8babaf65064f\nName: BLUBRACKET_INTEGRATION_KEY\nvalue: BluBracket Integration API key\nSteps to create a BluBracket API token: https://support.blubracket.com/hc/en-us/articles/4403018405140-Event-and-Alert-APIs\n  Step 2: Create Actions Workflow:\n Within the repository, select Actions and either update an existing ci.yaml script or create a new one     Add the following script to enable Infrastructure as Code scanning:  Note: You must update BLUBRACKET_SERVICE_ENDPOINT=https://[Your BluBracket Tenant Name].blubracket.com to your BluBracket tenant name    Example: BLUBRACKET_SERVICE_ENDPOINT=https://acme.blubracket.com\n# This is a basic workflow to help you get started with Actions name: CI # Controls when the workflow will run on: # Triggers the workflow on push or pull request events but only for the main branch push: branches: [ main ] pull_request: branches: [ main ] # Allows you to run this workflow manually from the Actions tab workflow_dispatch: # A workflow run is made up of one or more jobs that can run sequentially or in parallel jobs: # This workflow contains a single job called \u0026quot;build\u0026quot; build: # The type of runner that the job will run on runs-on: ubuntu-latest # Steps represent a sequence of tasks that will be executed as part of the job steps: # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it - uses: actions/checkout@v2 with: fetch-depth: '0' - name: Login to DockerHub uses: docker/login-action@v1 with: username: ${{ secrets.DOCKERHUB_USERNAME }} password: ${{ secrets.DOCKERHUB_TOKEN }} # Runs a set of commands using the runners shell - name: Run Infra as Code Checker run: | set -ax env SOURCE_BRANCH=${GITHUB_REF/refs\\/heads\\//} BLUBRACKET_SERVICE_ENDPOINT=https://[BluBracket Tenant Name] BLUBRACKET_INTEGRATION_KEY=${{ secrets.BLUBRACKET_INTEGRATION_KEY }} docker run -v ${GITHUB_WORKSPACE}:/home/blubracket/iac-checker/repo \\ -u $(id -u):$(id -g) \\ blubracket/iac-checker:0.0.4-beta run \\ --blubracket-service-endpoint ${BLUBRACKET_SERVICE_ENDPOINT} \\ --integration-key ${BLUBRACKET_INTEGRATION_KEY} \\ --source-branch ${GITHUB_HEAD_REF:-${SOURCE_BRANCH}} \\ --target-branch ${GITHUB_BASE_REF:-\u0026quot;\u0026quot;} \\ --do-not-fail-on-misconfigurations  Step 3: Run Workflow #  Ensure workflow runs successfully. This can be verified by expanding the Run Infra As Code Checker karat:     If Infrastructure as Code was detected, you will see entries that indicate a check has been performed (green check indicating scan passed, a red “x” indicating a risk has been detected).       For all detected risks (red “x”), an alert will be posted to the BluBracket portal.  "
      })
      .add(
      {
        id: 14,
        href: "/how-to/iac-checks/gitlab/",
        title: "GitLab",
        description: "Configuring infrastructure as code on GitLab",
        content: "Step 1: Create GitLab Repository Variables: #   Log into GitLab and select a repository where you want to enable Infrastructure as Code scanning.\n  Within the repository, select Settings, then CI/CD\n  Expand Variables section and select Add variable\n  Create four new variables:\n  Name: DOCKER_HUB_USERNAME\nvalue: blusupport\nName: DOCKER_HUB_TOKEN\nvalue: 085ef825-b366-4636-be2a-8babaf65064f\nName: BLUBRACKET_SERVICE_ENDPOINT\nvalue: BluBracket Tenant name\nExample: https://acme.blubracket.com\nName: BLUBRACKET_INTEGRATION_KEY\nvalue: BluBracket Integration API key\nSteps to create a BluBracket API token:\nhttps://support.blubracket.com/hc/en-us/articles/4403018405140-Event-and-Alert-API\n  Step 2: Create Pipeline Workflow: #  Within the repository, select CI/CD, then Pipelines to either update an existing ci.yaml script or create a new one via the Editor option:     Add the following script to enable Infrastructure as Code scanning:  infra-as-code-scan: # Use the official docker image. image: docker:latest stage: build services: - docker:dind variables: GIT_STRATEGY: clone GIT_DEPTH: 0 before_script: - docker login -u \u0026quot;$DOCKERHUB_USERNAME\u0026quot; -p \u0026quot;$DOCKERHUB_TOKEN\u0026quot; script: - env - | set -ax docker run -v ${CI_PROJECT_DIR}:/home/blubracket/iac-checker/repo \\ -u $(id -u):$(id -g) \\ blubracket/iac-checker:0.0.4-beta run \\ --blubracket-service-endpoint ${BLUBRACKET_SERVICE_ENDPOINT} \\ --integration-key ${BLUBRACKET_INTEGRATION_KEY} \\ --source-branch ${CI_MERGE_REQUEST_SOURCE_BRANCH_NAME:-${CI_COMMIT_BRANCH}} \\ --target-branch ${CI_MERGE_REQUEST_TARGET_BRANCH_NAME:-\u0026quot;\u0026quot;} \\ --do-not-fail-on-misconfigurations rules: # Run diff workflow on all merge requests - if: '$CI_PIPELINE_SOURCE == \u0026quot;merge_request_event\u0026quot;' # Run branch workflow on pushes to default branch - if: '$CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH'  Step 3: Run Workflow #  Ensure workflow runs successfully. This can be verified by selecting Jobs and expanding the Executing “step_script” karat and scrolling to bottom of page:     If Infrastructure as Code was detected, you will see entries that indicate a check has been performed (green check indicating scan passed, a red “x” indicating a risk has been detected).       For all detected risks (red “x”), an alert will be posted to the BluBracket portal.    "
      })
      .add(
      {
        id: 15,
        href: "/how-to/ignore-rules/global/",
        title: "Globally",
        description: "How to Set Ignore Rules Globally for Tenant",
        content: "Ignore rules can be set up globally for a BluBracket tenant. blubracket-ignore.yaml allows Blubracket users to ignore specific secret types, secret values, or paths. This file must be sent utilizing the Blubracket API’s. When a match of the ignore file is made, an alert will not be created however an event will still be made.\nNote: This will not change any existing alerts/events in the platform.\n  Download integration API key\n  Set environment variable BLUBRACKET_INTEGRATION_KEY\n export BLUBRACKET_INTEGRATION_KEY='TOKEN' $Env:BLUBRACKET_INTEGRATION_KEY='TOKEN'    Create blubracket-ignore.yaml\n# ignores any of the paths below - paths: - oanda_connector.py - MachLearn-23.py # ignores any secret values below - secret_values: - My$uperDuperP@ssw0rd! # ignores any secret types below - secret_types: - aws_access_key_id # per repo-rules - repo_url: (?i)github.com/blubracket/bludemogh/(apache_tomcat_2.0|crm_order_management) rules: - secret_values: - My$uperDuperS3cret! - secret_types: - google_oauth - paths: - helm/values.yaml    Upload yaml file via API using curl:\ncurl -H \u0026quot;Authorization: Bearer ${BLUBRACKET_INTEGRATION_KEY}\u0026quot; --data-binary \u0026quot;@blubracket-ignore.yaml\u0026quot; https://TENANT.blubracket.com/api/public/blubracket-ignore    Confirm upload using:\ncurl -i -H \u0026quot;Authorization: Bearer ${BLUBRACKET_INTEGRATION_KEY}\u0026quot; https://TENANT.blubracket.com/api/public/blubracket-ignore    To delete blubracket-ignore:\ncurl -i -X DELETE -H \u0026quot;Authorization: Bearer ${BLUBRACKET_INTEGRATION_KEY}\u0026quot; https://TENANT.blubracket.com/api/public/blubracket-ignore  Any new secrets, PII or Non-inclusive language ignored will automatically be annotated as “Reviewed as Not Important” and labeled as “Ignore rule”\n  "
      })
      .add(
      {
        id: 16,
        href: "/how-to/iac-checks/",
        title: "IaC checks",
        description: "How to setup infrastructure as code (IaC) scanning",
        content: "By default the Infrastructure as Code feature is not configured for repositories on new tenants. This is mainly because it requires a few key steps within the git repository before BluBracket can properly scan and monitor for these types of vulnerabilities. Also, the steps involved in the configuration are slightly different for each git repository type. If you are interested in configuring Infrastructure as Code for the repositories you are monitoring, select the appropriate git repository provider below and we’ll walk you through it.\n  Configuring Infrastructure as Code on GitHub Repositories\n  Configuring Infrastructure as Code on Bitbucket Repositories\n  Configuring Infrastructure as Code on GitLab Repositories\n  "
      })
      .add(
      {
        id: 17,
        href: "/how-to/ignore-rules/local/",
        title: "Locally",
        description: "In some cases a developer may want the BluBracket CLI Tool to ignore specific secret types or entire files. This can be achieved by creating a .blubracket-ignore file. This file is then placed into the root directory of the repository.\nThe format of the .blubracket-ignore file is similar to a .gitignore file.\nEmpty lines and lines beginning with # will be ignored\nTo ignore all secrets in a file a glob pattern is recognized.",
        content: "In some cases a developer may want the BluBracket CLI Tool to ignore specific secret types or entire files. This can be achieved by creating a .blubracket-ignore file. This file is then placed into the root directory of the repository.\nThe format of the .blubracket-ignore file is similar to a .gitignore file.\nEmpty lines and lines beginning with # will be ignored\nTo ignore all secrets in a file a glob pattern is recognized. For example **/tests will ignore any secrets found in all files within any directory or sub-directory named “tests”.\nTo ignore a specific secret type, say passwords, you would add the following line: secret_type:password.*, where password.* is a perl compatible regular expression.\n**/tests/** secret_type:password.*  "
      })
      .add(
      {
        id: 18,
        href: "/how-to/ignore-rules/per-repo/",
        title: "Per repo",
        description: "How to Set Ignore Rules Ignore Rules For All Users of A Repository",
        content: "In some cases a repo administrator may want to ignore specific secret types, secret values, or paths. This can be achieved by creating an ignore.yaml file. This file is then placed into the root directory of the repository, within a .blubracket folder.\nWhen a match of the ignore file is made, an alert will not be created (but an event will still be generated).\nExample below is a repository called Test1, which has a .blubracket folder and within the folder is the ignore.yaml file.\n  Sample .blubracket/ignore.yaml # # Ignore by file path - paths: - \u0026quot;**/*_test.go\u0026quot; - cli/cmd/default-sensitive-words-config.yaml - cli/cmd/data/* # Ignore by secret value # Equivalent to 'secret_value == my_password OR secret_value == my_token' - secret_values: - my_password - my_token # Ignore by secret type # Equivalent to 'secret_type == password_assignment OR secret_type == secret_assignment' - secret_types: password_assignment  "
      })
      .add(
      {
        id: 19,
        href: "/how-to/",
        title: "User guide",
        description: "",
        content: ""
      })
      .add(
      {
        id: 20,
        href: "/how-to/add-user/",
        title: "Adding a BluBracket user",
        description: "How to add a BluBracket user",
        content: "The first thing you might want to do is add your team members to assist with the setup and management. As soon as you log into your BluBracket tenant, you should create at least one additional user for the admin portal:\n  Go to Settings.\n  Click Users.\n     Click Create User      Assign a unique username.\n  Enter the user’s email address.\n  Click Create.\n  "
      })
      .add(
      {
        id: 21,
        href: "/api/",
        title: "API",
        description: "How to access and use the BluBracket API.",
        content: ""
      })
      .add(
      {
        id: 22,
        href: "/api/ci-cd/",
        title: "CI/CD API",
        description: "APIs to monitor the CI/CD workflow.",
        content: ""
      })
      .add(
      {
        id: 23,
        href: "/intro/getting-started/",
        title: "Getting started with BluBracket",
        description: "",
        content: ""
      })
      .add(
      {
        id: 24,
        href: "/how-to/remediate-alerts/",
        title: "Remediate Alerts",
        description: "How to Remediate Alerts",
        content: "There are a number of best practices when it comes to handling secrets in code. Below are a few:\n  Encrypt your secrets\n  Use environmental variables\n  Use a secret manager to store your secrets, like HashiCorp Vault, Azure Key Vault, etc.\n  Once BluBracket has found a secret and you have had a chance to remediate the secret in code, marking it as reviewed will help you easily differentiate it from those that still require action.\n"
      })
      .add(
      {
        id: 25,
        href: "/faq/",
        title: "Frequently asked questions",
        description: "",
        content: ""
      })
      .add(
      {
        id: 26,
        href: "/intro/key-workflows/",
        title: "Key workflows",
        description: "BluBracket code security tools are optimized to prevent risks from getting into code, and to promote the process of continuous improvement that reduces existing risks from code over time.\nPreventing risks in code # As developers, we depend on a quick feedback loop to understand if our code is working and does what is expected. BluBracket tools can offer automated security guidance as part of that feedback loop, in the IDE of your choice, pre-commit, and as part of the CI flow.",
        content: "BluBracket code security tools are optimized to prevent risks from getting into code, and to promote the process of continuous improvement that reduces existing risks from code over time.\nPreventing risks in code # As developers, we depend on a quick feedback loop to understand if our code is working and does what is expected. BluBracket tools can offer automated security guidance as part of that feedback loop, in the IDE of your choice, pre-commit, and as part of the CI flow.\nPre-commit hooks # The BluBracket CLI scan for secrets, PII, and non-inclusive language before commits, to prevent risks from ever getting into repos from the start.\n[screenshot]\nThe CLI supports local configuration with directives in ~/.blubracket/, repo-level configuration for all committers to the repo with directives in .blubracket/ at the repo root, and global configuration for all users of a BluBracket account with directives set at that level. Additionally, inline directives inserted as code comments can be used to mark specific items to ignore, putting decisions about how to handle selected code risks in context with the code.\nUsers can choose to make pre-commit risk detection a blocking or non-blocking feature, to support whatever workflow a developer prefers.\nIDE integration # Popular IDEs, such VS Code and IntelliJ, present messages from pre-commit hooks in-context so you don\u0026rsquo;t have to interrupt your flow to get feedback.\n[screenshot]\nCI checks # Pre-commit hooks prevent most risks before they ever get into a repo, but CI checks provide an extra layer of guidance for teams.\n[screenshot]\nGitHub is just one supported code server and CI environment.\nAs with pre-commit hooks, CI checks and all BluBracket\u0026rsquo;s server-side code scanning supports repo-level configuration with directives in .blubracket/ at the repo root, and global configuration for all users and all repos in a BluBracket account with directives set at that level. Additionally, inline directives inserted as code comments can be used to mark specific items to ignore, putting decisions about how to handle selected code risks in context with the code.\nAlerts # BluBracket can send alerts any time if finds new risks committed to monitored repos. Messaging a Slack channel is just one option, see the full list of configurations for more.\n[screenshot]\nUnderstanding and taking action on existing risks #  Tools to analyze and understand existing risks, and trend reports to see improvement over time  Auditing git access \u0026amp; configuration # [placeholder]\n"
      })
      .add(
      {
        id: 27,
        href: "/intro/integrations/",
        title: "Integrations",
        description: " Local/workstation tools  CLI   Code servers  GitHub GitLab Bitbucket Azure DevOps (contact us for beta) Gerrit (coming soon)   CI servers  GitHub Checks Bitbucket Code Insights Jenkins and more via open API   Identity, authentication, and authorization  Azure AD Okta Ping SAML OAuth (coming soon)   Messaging  Slack Microsoft Teams   Ticketing \u0026amp; incident management  Jira ServiceNow PagerDuty Splunk   Build your own  APIs Webhooks (coming soon)    ",
        content: " Local/workstation tools  CLI   Code servers  GitHub GitLab Bitbucket Azure DevOps (contact us for beta) Gerrit (coming soon)   CI servers  GitHub Checks Bitbucket Code Insights Jenkins and more via open API   Identity, authentication, and authorization  Azure AD Okta Ping SAML OAuth (coming soon)   Messaging  Slack Microsoft Teams   Ticketing \u0026amp; incident management  Jira ServiceNow PagerDuty Splunk   Build your own  APIs Webhooks (coming soon)    "
      })
      .add(
      {
        id: 28,
        href: "/how-to/add-code-servers/azure-devops/",
        title: "Azure DevOps",
        description: "How to add an Azure DevOps code server to your tenant",
        content: "Azure DevOps support us available in private beta at this time. Please contact our team for a demo or to join the beta.\n"
      })
      .add(
      {
        id: 29,
        href: "/contact-support/",
        title: "Contact support",
        description: "",
        content: ""
      })
      .add(
      {
        id: 30,
        href: "/authoring-documentation/",
        title: "Authoring documentation",
        description: "How do write and edits the docs in this site.",
        content: "Filesystem organization # Each page is a Hugo page bundle, a directory with a index.md and any attachments/images used in the page.\n The directory name is the URL slug The page title and other metadata are set in the yaml-formatted front matter  Pages can be nested to create a hierarchical structure. If a directory contains multiple pages, the index.md must be prefixed with an underscore (_index.md) to tell Hugo to recurse into the directory for additional pages. Example:\n. └── content ├── _index.md \u0026lt;- https://example.com/ ├── intro | └── index.md \u0026lt;- https://example.com/intro/ ├── how-to | ├── _index.md \u0026lt;- https://example.com/how-to/ | ├── start | | └── index.md \u0026lt;- https://example.com/how-to/start/ | └── finish | └── index.md \u0026lt;- https://example.com/how-to/finish/ └── faq └── index.md \u0026lt;- https://example.com/faq/  Content markup # Content is formatted as Markdown, with support for many of the more advanced Markdown features, as well as a number of shortcodes supported by Hugo.\nLinks # Standard Markdown link syntax is preferred\n[link text](http://example.com/)\nHugo also provides a shortcode that can be used to make it easier to link to pages within the site:\n[Quick Start →]({{\u0026lt; relref \u0026quot;intro\u0026quot; \u0026gt;}})  Images # Small images can be embedded using normal Markdown syntax, but Hugo also provides a {{\u0026lt; figure \u0026gt;}} shortcode ideal for embedding larger images with more metadata.\nFor either syntax, the image should be committed in the directory with the page it appears on, and identified in the front matter resources object:\nresources: - src: demo-figure.jpg  Markdown syntax for small images # ![This kitten icon](demo-img.png)  Output:\nThis adorable kitten icon used as a demo img was downloaded from The Noun Project.\nFigure shortcode for large images # {{\u0026lt; figure src=\u0026quot;demo-figure.jpg\u0026quot; caption=\u0026quot;This adorable kitten used as the demo figure was [downloaded from Unsplash](https://unsplash.com/photos/tuomgxdoIP4).\u0026quot; \u0026gt;}}  All available options documented here.\nOutput:\n This adorable kitten used as the demo figure was downloaded from Unsplash.\n  Video # Many modern browsers accept videos in the img element (via the {{\u0026lt; figure \u0026gt;}} shortcode, for example), but embedding YouTube or Vimeo videos is most compatible.\nYouTube # For a given YouTube URL such as https://www.youtube.com/watch?v=w7Ft2ymGmfc, the YouTube shortcode should be:\n{{\u0026lt; youtube w7Ft2ymGmfc \u0026gt;}}  Output:\n  Vimeo # For a given Vimeo URL such as https://vimeo.com/channels/staffpicks/146022717, the Vimeo shortcode should be:\n{{\u0026lt; vimeo 146022717 \u0026gt;}}  Output:\n  Code # Standard code fencing with single and triple backticks works as expected. Hugo also supports code highlighting with the following shortcode:\n{{\u0026lt; highlight html \u0026gt;}} \u0026lt;section id=\u0026quot;main\u0026quot;\u0026gt; \u0026lt;div\u0026gt; \u0026lt;h1 id=\u0026quot;title\u0026quot;\u0026gt;{{ .Title }}\u0026lt;/h1\u0026gt; {{ range .Pages }} {{ .Render \u0026quot;summary\u0026quot;}} {{ end }} \u0026lt;/div\u0026gt; \u0026lt;/section\u0026gt; {{\u0026lt; /highlight \u0026gt;}}  Output:\n\u0026lt;section id=\u0026#34;main\u0026#34;\u0026gt; \u0026lt;div\u0026gt; \u0026lt;h1 id=\u0026#34;title\u0026#34;\u0026gt;{{ .Title }}\u0026lt;/h1\u0026gt; {{ range .Pages }} {{ .Render \u0026#34;summary\u0026#34;}} {{ end }} \u0026lt;/div\u0026gt; \u0026lt;/section\u0026gt; In-page emphasis # {{\u0026lt; alert icon=\u0026quot;👉\u0026quot; text=\u0026quot;The Alert shortcode should be used sparingly.\u0026quot; \u0026gt;}}  Output:\n👉  The Alert shortcode should be used sparingly.   Table of contents structure # Site menu # The left column table of contents follows the hierarchy set by the filesystem directory structure, but the order of pages at any given level is based on page weight set in the front matter of the page. By default, all pages are ordered by: Weight \u0026gt; Date \u0026gt; LinkTitle \u0026gt; FilePath.\nSee weight: 900 in the front matter in the source of this page as an example.\nPage headings # The right column table of contents follows the order of the headings in the doc.\nStyleguide # Sentence case # All headings in these docs should follow sentence case as described in this APA guide.\n"
      })
      .add(
      {
        id: 31,
        href: "/",
        title: "BluBracket Documentation",
        description: "Track what's in your code, who has access, and where it goes.",
        content: ""
      })
      .add(
      {
        id: 32,
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
