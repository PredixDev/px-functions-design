# Functions

The Predix Experience Functions module—like the Mixins module—contains a few Sass functions that are **required** for using virtually all Predix Experience and inuitcss modules.

## Dependencies

* [inuit-functions](https://github.com/inuitcss/tools.functions)

## Upstream dependency

The normalize module is also an upstream dependency in this meta kit:

* [px-starter-kit-design](https://github.sw.ge.com/pxc/px-starter-kit-design)

## Installation

Install this module and its dependencies using bower

    bower install --save https://github.sw.ge.com/pxc/px-functions-design.git

Once installed, `@import` into your project's Sass file in its Generic layer:

    @import "px-functions-design/sass/tools.functions";

## Functions provided

The following Sass functions are provided:

* `calculateRem($size)`: Convert a pixel into a rem
* `import-once($filename)`: Append to the `$imported-once-files` array Sass files to prevent duplicate imports
* `quarter|halve|double|quadruple($inuit-number)`: Quarter, halve, double, and quadruple numbers, returning rounded integers
