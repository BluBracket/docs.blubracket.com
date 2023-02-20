---
title: "Authoring documentation"
description: "How do write and edits the docs in this site."
lead: "How do write and edits the docs in this site."
date: 2022-01-12T02:48:57+00:00
draft: false
weight: 1000
toc: true
resources:
  - src: demo-img.jpg
  - src: demo-figure.jpg
---

## Filesystem organization

Each page is a [Hugo page bundle](https://gohugo.io/content-management/page-bundles/), a directory with a `index.md` and any attachments/images used in the page.

- The directory name is the URL slug
- The page title and other metadata are set in the [yaml-formatted front matter](https://gohugo.io/content-management/front-matter/)

Pages can be nested to create a hierarchical structure. If a directory contains multiple pages, the `index.md` must be prefixed with an underscore (`_index.md`) to tell Hugo to recurse into the directory for additional pages. Example:

```text
.
└── content
    ├── _index.md <- https://example.com/
    ├── intro
    |   └── index.md <- https://example.com/intro/
    ├── how-to
    |   ├── _index.md <- https://example.com/how-to/
    |   ├── start
    |   |   └── index.md <- https://example.com/how-to/start/
    |   └── finish
    |       └── index.md <- https://example.com/how-to/finish/
    └── faq
        └── index.md <- https://example.com/faq/
```

## Content markup

Content is formatted as [Markdown](https://www.markdownguide.org/basic-syntax/), with support for many of the more advanced Markdown features, as well as a number of [shortcodes supported by Hugo](https://gohugo.io/content-management/shortcodes/).

### Links

Standard Markdown link syntax is preferred

`[link text](http://example.com/)`

Hugo also provides a shortcode that can be used to make it easier to link to pages within the site:

```markdown
[Quick Start →]({{</* relref "intro" */>}})
```

### Images

Small images can be embedded using normal Markdown syntax, but Hugo also provides a `{{</* figure */>}}` shortcode ideal for embedding larger images with more metadata.

For either syntax, the image should be committed in the directory with the page it appears on, and identified in the front matter `resources` object:

```text
resources:
  - src: demo-figure.jpg
```

#### Markdown syntax for small images

```markdown
![This kitten icon](demo-img.png)
```

Output:

![This kitten icon](demo-img.png)

This adorable kitten icon used as a demo img was [downloaded from The Noun Project](https://thenounproject.com/icon/kitten-612280/).

#### Figure shortcode for large images

```text
{{</* figure src="demo-figure.jpg" caption="This adorable kitten used as the demo figure was [downloaded from Unsplash](https://unsplash.com/photos/tuomgxdoIP4)." */>}}
```

[All available options documented here](https://gohugo.io/content-management/shortcodes/#figure).

Output:

{{< figure src="demo-figure.jpg" caption="This adorable kitten used as the demo figure was [downloaded from Unsplash](https://unsplash.com/photos/tuomgxdoIP4).">}}

### Video

Many modern browsers accept videos in the `img` element (via the `{{</* figure */>}}` shortcode, for example), but embedding YouTube or Vimeo videos is most compatible.

#### YouTube

For a given YouTube URL such as `https://www.youtube.com/watch?v=w7Ft2ymGmfc`, the YouTube shortcode should be:

```text
{{</* youtube w7Ft2ymGmfc */>}}
```

Output:

{{< youtube w7Ft2ymGmfc >}}

#### Vimeo

For a given Vimeo URL such as `https://vimeo.com/channels/staffpicks/146022717`, the Vimeo shortcode should be:

```text
{{</* vimeo 146022717 */>}}
```

Output:

{{< vimeo 146022717 >}}

### Code

Standard code fencing with single and triple backticks works as expected. Hugo also supports code highlighting with the following shortcode:

```html
{{</* highlight html */>}}
<section id="main">
  <div>
   <h1 id="title">{{ .Title }}</h1>
    {{ range .Pages }}
        {{ .Render "summary"}}
    {{ end }}
  </div>
</section>
{{</* /highlight */>}}
```

Output:

{{< highlight html >}}
<section id="main">
  <div>
   <h1 id="title">{{ .Title }}</h1>
    {{ range .Pages }}
        {{ .Render "summary"}}
    {{ end }}
  </div>
</section>
{{< /highlight >}}

### In-page emphasis

```text
{{</* alert icon="👉" text="The Alert shortcode should be used sparingly." */>}}
```

Output:

{{< alert icon="👉" text="The Alert shortcode should be used sparingly." />}}

## Table of contents structure

### Site menu

The left column table of contents follows the hierarchy set by the filesystem directory structure, but the order of pages at any given level is based on page weight set in the front matter of the page. [By default, all pages are ordered by](https://gohugo.io/templates/lists/#default-weight--date--linktitle--filepath): Weight > Date > LinkTitle > FilePath.

See `weight: 900` in the front matter in the source of this page as an example.

### Page headings

The right column table of contents follows the order of the headings in the doc.

## Styleguide

### Sentence case

All headings in these docs should follow sentence case as [described in this APA guide](https://apastyle.apa.org/style-grammar-guidelines/capitalization/sentence-case).
