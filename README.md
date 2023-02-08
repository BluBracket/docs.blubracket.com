# docs.blubracket.com

BluBracket documentation website [https://docs.blubracket.com
](docs.blubracket.com).

This repo uses [Hugo, a static site generator written in Golang](https://gohugo.io), and the [Doks theme](https://github.com/h-enk/doks).

Hugo has its own [documentation](https://gohugo.io/documentation/) for the template structure, functions, variables, and more. The Doks theme extends Hugo in an opinionated way that uses Node.js and `npm` to automate the few things that Hugo left undone.

## Getting started

This theme is automated using Node.js and `npm`.

### Install NVM

Follow the lastest docs for setup on the [NVM repo](https://github.com/nvm-sh/nvm#install--update-script)

Then run:

```
nvm --version
```

If you're seeing a command about NVM not found, add this to your terminal profile:
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
Then reload the terminal source (or open a new terminal tab).

### Install a specific version of Node

```
nvm install v14.21.2
```

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

### Credits

The theme in this repo is based on https://github.com/h-enk/doks by [Henk Verlinde](https://github.com/h-enk) and used under the [terms of the MIT license](https://github.com/h-enk/doks/blob/b91e6494de91b1f137013be07314ae360b8ff65c/LICENSE).
