---
title: "Why is my .env file blocked?"
description: ""
lead: ""
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 100
toc: false
tags:
  - code quality
  - secrets
resources:
  - src:
---

Alarming on `.env` files, database files and dumps, and even Terraform state files are among the most controversial policies that BluBracket supports by default.

Contents

- [Risk background](#risk)
- [Best practices background](#configuration)
- [But you really want to commit that `.env`, what can you do](#workarounds)

### Understanding the risk of `.env` files {#risk}

The majority of our users have asked us to alert them about these in their code because they represent risks they're trying to eliminate. [From dev.to](https://dev.to/somedood/please-dont-commit-env-3o9h):

> Let's face it, `.env` files are amazing. They have an easy-to-read syntax that stores all of our essential configurations into one file. Not only that, they keep our deepest, darkest secrets as web developers. They make sure that our precious API keys and database passwords are kept locally, away from prying eyes. Having such a critical role in our code bases, we are constantly reminded by the community to never share our `.env` files; to treat them like how the government treats their confidential information.
>
> This is especially enforced in the open-source community where everyone shares, copies, and reuses code with each other. Accidentally committing and pushing the `.env` file is considered by many as a relatable moment. Personally, I have never done it myself yet, but I'm sure my fate is sealed at this point.
>
> #### A stain in the commit history
>
> [Running a quick search on GitHub](https://github.com/search?q=add+env&type=Commits) reveals that there are still a number of people who didn't get the memo. The occasional add `.env` and remove `.env` commit titles appear every now and then in the search results. Looking into the content of the commits indeed shows their precious API keys and database passwords. It's honestly funny to see how they revert their changes like how a child becomes guilty of doing something they shouldn't have.
>
> What's more alarming about this is that there are still some others who have not reverted their commits. The `.env` file is still alive and well in their repositories. For all we know, these might be real, actual API keys and database passwords they currently depend on in a regular basis. To make matters worse, [sorting the search results by recently committed](https://github.com/search?o=desc&q=add+env&s=committer-date&type=Commits) shows how common and frequent these commits are.
>
> The problem with simply removing the `.env` file in the working tree is the fact that Git keeps a record of all the commits made in a repository, even the earliest ones. Unless clever tricks have been made (more on that later), committing that `.env` file will forever be a stain in the commit history. This is just what a version control system is supposed to do after all: keep a history of changes, even the bad ones.

### Configuration best practices {#configuration}

Many of our users who have asked us to alert on `.env` files have also pointed out that they want to exclude them from repos even if they can ensure there are no secrets in them.

[Larry Garfield has an excellent overview of this](https://platform.sh/blog/2021/we-need-to-talk-about-the-env) that starts from first principles of how to configure applications and extends all the way out how to make localized adjustments to that configuration as needed for testing and local development. It's worth looking at the whole thing, but here's the part that gets at `.env` files:

> This is where the `.env` file comes into play. `.env` is a de facto standard for an ini-like file that contains fake environment variables. An application that supports `.env` files will, on boot, run through each line in that file and read key=value pairs. For each, it will run "IF an environment variable with this name doesn't already exist, set it based on this file." That will set the variable only within the scope of your application's process, without impacting any other processes on the computer. Then the rest of your application can proceed and read from the environment as it would anywhere else, entirely ignorant of that switcheroo. (Don't write that code yourself. There are `.env` support libraries in every language that all do exactly the same thing. Use one of those.)
>
> That, and only that, is the purpose of `.env` files: values that change per-environment, and thus are not part of your code base. **Which brings up the most important thing to remember about `.env` files: they do not belong in Git. Anything in Git is going to be the same on every environment, by design, which is exactly the opposite of what environment variables and `.env` file are for.**
>
> Values that do not change between environments also do not belong in the `.env` file. The site name, admin email address, and so on should either be in a read-only config file that is committed to Git or in the database, depending on if you want those configuration values to be end-user modifiable. (Either way is valid, as long as you do it deliberately.) But those values do not belong in the `.env` file, because they are not environment-specific.

These are the points we've heard from many customers, and they reflect why BluBracket alerts users to `.env` files (along with database content and more) by default.

However, BluBracket is a tool for all, and we understand not everybody shares the same policies.

### Yah yah, just let me merge this `.env` file already {#workarounds}

To override the default policy that alerts on `.env` file, one of the following can be used:

#### Allow `.env` files in a single repository

[Create a `.blubracket/ignore.yml` file in the repository](https://docs.blubracket.com/how-to/ignore-rules/per-repo/) with the following content:

```txt
# BluBracket ignore file
# Full docs at
#   https://docs.blubracket.com/how-to/ignore-rules/per-repo/

# Ignore by file path
- paths:
    - **/.env
```

#### Allow `.env` files in any repository

[Follow the documentation for global ignore rules here](https://docs.blubracket.com/how-to/ignore-rules/global/).
