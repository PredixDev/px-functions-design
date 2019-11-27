/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-functions-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
  <!-- 0: Import the styles-->
  <style include="px-functions-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-functions-design" description="The functions module contains functions that are required for using all Predix UI CSS modules. Use it to convert between units (i.e. pixels to REM and back again) and to compute numbers." layer="tools" sassdoc-path="sassdoc.json" dependencies="[
    &quot;https://github.com/inuitcss/tools.functions&quot;
  ]" hide-demo-container="" selected-options="{{selectedOptions}}">

<section slot="intro">
# IMPORTANT NOTE: We recommend installing px-defaults-design instead

Rather than install this module directly, we recommend installing px-defaults-design which includes this module as a dependency. You'll have access to the functions in this module if you install px-defaults-design.

To find installation and import instructions for the px-defaults-design module, see its [Github README](https://github.com/PredixDev/px-defaults-design) or read its [Predix UI catalog documentation page](https://www.predix-ui.com/#/css/utilities/px-defaults-design).

For more information about this requirement, see this [discussion thread on Github](https://github.com/PredixDev/px-functions-design/pull/2).
</section>

<!-- 2: Provide Usage Info -->
<section slot="usage">
You can use this module's functions in your Sass files.

### Converting between size units

The two most-used functions provided by the functions module help convert between pixel (an absolute-size unit) and REM (a relative-size unit).

#### From pixel to REM

The \`calculateRem\` function takes a value in pixels and returns the equivalent in REM. You can use it like this:

\`\`\`
.special-font-class {
  font-size: calculateRem(16px);
}
\`\`\`

The size returned will depend on the base rem size set in your project (you'll set your base rem when you import the \`px-defaults-design\` module.)

#### From REM to pixel

The \`remTopx\` function does the opposite: it takes a value in REM and returns the equivalent in pixels. You can use it like this:

\`\`\`
.another-special-font-class {
  font-size: remToPx(1.4rem);
}
\`\`\`

Again, the size returned will depend on the base rem size set in your project.

### Additional functions

The functions module also provides a set of related utilities that take a number and compute a multiple or fraction of it. For example, you can use the following function to get the result of 3 * 4 and convert it to REM.

\`\`\`
.big-font-class {
  // Multiplying by 1rem is a simple way to add units after doing math
  font-size: triple(3) * 1rem;
}
\`\`\`

In addition to \`triple\`, you can use \`quarter\`, \`halve\`, \`double\`, \`quadruple\`, and \`third\`. All functions will return rounded integers.
</section>

</px-sass-doc>
`,

  is: 'px-functions-design-demo'
});
