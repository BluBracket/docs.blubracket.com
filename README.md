# securitysurvey.dev
DevOps Security Survey website (securitysurvey.dev)

Imported as a copy of https://github.com/h-enk/doks without history

This repo uses [Hugo, a static site generator written in Golang](https://gohugo.io), and the [Docs theme](https://github.com/h-enk/doks). 

Hugo has its own [documentation](https://gohugo.io/documentation/) for the template structure, functions, variables, and more. The Doks theme extends Hugo in an opinionated way that uses Node.js and `npm` to automate the few things that Hugo left undone.

## Getting started

This theme is automated using Node.js and `npm`.

### Install dependencies

```
npm install
```

### Preview the website

```
npm run start
```

Then visit [http://localhost:1313](http://localhost:1313) to see the generated website.

Hugo will remain running, watch for updates to any files, and re-render them as needed.

Any template changes leading to syntax or other execution errors will require restarting the preview server.

### Building the website

Generally, the website is built as part of the [GitHub Actions CI/CD workflow](blob/main/.github/workflows/cicd-githubpages.yml), however it can be run manually:

```
npm run build
```

In normal usage, that action should automatically build and push any changes to the `main` branch.

### Testing

In normal usage, tests are run on every pull request from the [GitHub Actions CI workflow](blob/main/.github/workflows/node.js-ci.yml). However, tests can also be run manually:

```
npm test
```

The extent of testing is currently limited to ensuring the JS integrates cleanly. It does not meaningfully test the templates or any aspect of the site content.
