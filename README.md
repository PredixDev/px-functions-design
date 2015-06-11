# Functions

The Predix Experience Functions module—like the Mixins module—contains a few Sass functions that are **required** for using virtually all Predix Experience and inuitcss modules.

## Sass Documentation

You can review Sass Documentation here: https://github.build.ge.com/pages/PXd/px-functions-design/sassdoc

## Dependency

Px's Functions module depends on one other inuitcss module:

* [inuit-functions](https://github.com/inuitcss/tools.functions)

## Installation

Install this module and its dependency using bower:

    bower install --save https://github.build.ge.com/PXd/px-functions-design.git

Once installed, `@import` into your project's Sass file in its Tools layer:

    @import "../px-functions-design/tools.functions";

See [px-getting-started](https://github.build.ge.com/PXd/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Functions provided

The following Sass functions are provided:

* `calculateRem($size)`: Convert a pixel into a rem
* `import-once($filename)`: Append to the `$imported-once-files` array Sass files to prevent duplicate imports
* `quarter|halve|double|quadruple|third|triple($inuit-number)`: Quarter, halve, third, double, triple, and quadruple numbers, returning rounded integers
