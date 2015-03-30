# Functions

The Predix Experience Functions module—like the Mixins module—contains a few Sass functions that are **required** for using virtually all Predix Experience and inuitcss modules.

## Dependency

Px's Functions module depends on one other inuitcss module:

* [inuit-functions](https://github.com/inuitcss/tools.functions)

## Upstream dependency

The Functions module is also an upstream dependency in this meta kit:

* [px-starter-kit-design](https://github.sw.ge.com/PXd/px-starter-kit-design)

## Installation

Install this module and its dependency using bower:

    bower install --save https://github.sw.ge.com/PXd/px-functions-design.git

Once installed, `@import` into your project's Sass file in its Tools layer:

    @import "../px-functions-design/tools.functions";

See [px-getting-started](https://github.sw.ge.com/PXd/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Functions provided

The following Sass functions are provided:

* `calculateRem($size)`: Convert a pixel into a rem
* `import-once($filename)`: Append to the `$imported-once-files` array Sass files to prevent duplicate imports
* `quarter|halve|double|quadruple($inuit-number)`: Quarter, halve, double, and quadruple numbers, returning rounded integers
