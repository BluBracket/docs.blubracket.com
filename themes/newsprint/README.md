# Newsprint

[![Issue Tracker on Soquee][badge]][issues]

**Newsprint** is a vertically-oriented theme for [Hugo] that focuses on
readability (even on mobile) and showcasing photography.
It is typeset in [Cormorant Garamond] by Christian Thalmann ([Catharsis Fonts]).

Known issues are recorded on [Soquee][issues].

[![Screenshot][screenshot]][screenshot]


## Configuration

### Site params

In addition to the standard parameters, the site may be configured by setting
any of the following in the main config file:

**subtitle**: A subtitle or slogan for the site to display under the main title.

### Post params

In addition to the standard parameters, individual posts may be configured by
setting any of the following parameters:

**article_class**: Classes to add to the main `article` element for a post. This
affects the header (cover image, title, date, etc.) and the content.

**categories**: A list of tags for the post (must be iterable).

**content_class**: Classes to add to the main content `section` element for a
post. This affects only the textual content (not the cover image or title).

**cover**: An image to be shown above the post. Somewhere around 640 pixels wide
looks nice.

**cover_alt**: The `alt` attribute of the **cover** image.

**cover_caption**: A string to display under the cover image. This does *not*
support HTML as it is set as an attribute on the images parent div.

**cover_link**: A URL that the image should link too. Commonly this loads a
higher resolution version of the image in a lightbox, or links to the image on a
photo sharing site.

**cover_title**: The `title` attribute of the **cover** image.

**cover_width**: A value for the `width` attribute of the **cover** image.
Setting this value is not required, but doing so lets the browser allocate
enough space for the image and may prevent the scroll bar from jumping around
after the image loads on slow connections. It is highly recommended that you set
this value on all pages with a cover image.

**description**: A description of the page that will be set in a meta element
that can be read by search engines, and overrides the incipit displayed on list
pages (unless the **excerpt** parameter is specified).

**excerpt**: A string that overrides the incipit displayed on list pages.

**nocopy**: Remove the authors copyright information from the footer of a post
(eg. for posts that specify their own copyright information).

**square_thumb**: If true, display the **thumbnail** image without rounding the
corners.

**thumbnail**: A small image to be shown next to the post on list pages. 150×150
versions of the **cover** image work well.


### Styles

The stylesheet loaded by newsprint styles the following attributes in special
ways:

**body article h2[data-accent]**: Any `h2` element inside of a post is prefixed
with a `❦` character by default. Manually creating an `h2` element with a
`data-accent` attribute can be used to customize this accent character.

**.pullquote-right[data-pullquote]**: Elements with the `pullquote-right` class
create a pull quote to the right side of the text with the `data-pullquote`
attribute as the pull quote text. This is not part of the main text flow and
will not be selected if the user attempts to select the main text; nor will it
appear as duplicate text to search engines.

**blockquote footer cite**: Block quotes with a `footer` element that contains a
`cite` element will render the cite element prefixed by a long dash (eg. " —
Benjamin Franklin").

**.poem**: The `poem` class can be used in the **content_class** param to limit
the width of the content to 30rem and center the content block (the text will
remain left aligned).

**.badge**:  The `badge` class can be added to spans to make them render as a
small pill shaped box with a grey background color.

**.badge-success**: The `badge-success` class changes the background color of
badges (or anything, really) to green.


## License

Licensed under the BSD 2 Clause License ([LICENSE] or
https://opensource.org/licenses/BSD-2-Clause)


### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you shall be licensed as above, without any
additional terms or conditions.

[badge]: https://img.shields.io/badge/style-issue%20tracker-green.svg?longCache=true&style=popout-square&label=soquee
[issues]: https://www.soquee.net/issues/samwhited/newsprint
[screenshot]: https://raw.githubusercontent.com/SamWhited/newsprint/master/images/screenshot.png
[Hugo]: https://gohugo.io/
[Cormorant Garamond]: https://www.behance.net/gallery/28579883/Cormorant-an-open-source-display-font-family
[Catharsis Fonts]: https://www.myfonts.com/foundry/Catharsis_Fonts/
[LICENSE]: https://raw.githubusercontent.com/SamWhited/newsprint/master/LICENSE.md
