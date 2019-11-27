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
/* 6: Handle selectedOptions, update demo */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-forms-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- 0: Import the styles-->
    <style include="px-forms-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-forms-design" description="The Predix UI Forms module is a simple implementation of forms and form fields. Form layouts follow rhythmic spacing with simple numeric patterns. The distance between elements creates the grouping and the visual hierarchy." layer="base" sassdoc-path="sassdoc.json" dependencies="[
    &quot;https://github.com/PredixDev/px-colors-design&quot;,
    &quot;https://github.com/PredixDev/px-defaults-design&quot;
  ]" selected-options="{{selectedOptions}}" tabs="[&quot;Input&quot;,&quot;Text area&quot;,&quot;Inline fields&quot;,&quot;Basic form&quot;,&quot;Select&quot;,&quot;Radio button&quot;,&quot;Checkbox&quot;]" selected-tab="{{selectedTab}}">

<!-- FOR 'Input' TAB -->
<template is="dom-if" if="[[_tabIs('Input',selectedTab)]]" restamp="">

<px-sass-doc-option slot="options" option-name="Input Length" choose-with="dropdown" choices="[
    &quot;auto&quot;,
    &quot;tiny&quot;,
    &quot;small&quot;,
    &quot;regular&quot;,
    &quot;large&quot;,
    &quot;huge&quot;
  ]" default-choice="regular">
</px-sass-doc-option>
<px-sass-doc-option slot="options" option-name="Validation States" choose-with="dropdown" choices="[
    &quot;none&quot;,
    &quot;warning&quot;,
    &quot;error&quot;,
    &quot;success&quot;
  ]" default-choice="none">
</px-sass-doc-option>
<px-sass-doc-option slot="options" option-name="Type" choose-with="dropdown" choices="[
    &quot;text&quot;,
    &quot;email&quot;,
    &quot;tel&quot;,
    &quot;search&quot;,
    &quot;number&quot;,
    &quot;password&quot;
  ]" default-choice="text">
</px-sass-doc-option>
<px-sass-doc-option slot="options" option-name="Disabled" choose-with="boolean" default-choice="false">
</px-sass-doc-option>
<px-sass-doc-option slot="options" option-name="Readonly" choose-with="boolean" default-choice="false">
</px-sass-doc-option>

<section slot="demo-html" id="demoContainer">

<label for="input1" class\$="{{labelClasses}}">Input Label</label>
<input class\$="{{inputClasses}}" id="input1" type\$="{{selectedOptions.Type}}" disabled\$="{{selectedOptions.Disabled}}" placeholder="Type something..." readonly\$="{{selectedOptions.Readonly}}">

</section>

<section slot="import">
{{inputImportCode}}
</section>

</template>

<!-- FOR 'Select' TAB -->
<template is="dom-if" if="[[_tabIs('Select',selectedTab)]]" restamp="">

<px-sass-doc-option slot="options" option-name="Multi-select" choose-with="boolean" default-choice="false">
</px-sass-doc-option>

<px-sass-doc-option slot="options" option-name="Disabled" choose-with="boolean" default-choice="false">
</px-sass-doc-option>

<section slot="demo-html" id="demoContainer">
<select multiple\$="{{selectedOptions.Multi-select}}" disabled\$="{{selectedOptions.Disabled}}">
  <option>First</option>
  <option>Second</option>
  <option>Third</option>
</select>
</section>

</template>

<!-- FOR 'Text area' TAB -->
<template is="dom-if" if="[[_tabIs('Text area',selectedTab)]]" restamp="">

<section slot="demo-html" id="demoContainer">
<textarea placeholder="Enter text here..."></textarea>
</section>

</template>

<!-- FOR 'Inline Fields' TAB -->
<template is="dom-if" if="[[_tabIs('Inline fields',selectedTab)]]" restamp="">
<px-sass-doc-option slot="options" option-name="Length" choose-with="dropdown" choices="[
    &quot;default&quot;,
    &quot;tiny&quot;,
    &quot;small&quot;,
    &quot;regular&quot;,
    &quot;large&quot;,
    &quot;huge&quot;
  ]" default-choice="tiny">
</px-sass-doc-option>
<px-sass-doc-option slot="options" option-name="Validation" choose-with="dropdown" choices="[
    &quot;none&quot;,
    &quot;warning&quot;,
    &quot;error&quot;,
    &quot;success&quot;
  ]" default-choice="none">
</px-sass-doc-option>

<section slot="demo-html" id="demoContainer">

<label class="label--inline" for="inline1">From</label>
<input class\$="{{inlineClasses}}" id="inline1" type="text">
<label class="label--inline" for="inline2">to</label>
<input class\$="{{inlineClasses}}" type="text">
<input id="inline3" type="checkbox">
<label class="label--inline" for="inline3">Inline checkbox</label>
<input class="form-field--inline btn btn--primary" type="submit" value="Submit">

</section>

<section slot="import">
{{inlineImportCode}}
</section>

</template>

<!-- FOR 'Basic Form' TAB -->
<template is="dom-if" if="[[_tabIs('Basic form',selectedTab)]]" restamp="">

<section slot="demo-html" id="demoContainer">

<form>
  <fieldset class="form-field" style="max-width:400px;">
    <legend>Basic form</legend>
    <ol class="list-bare">
      <li class="form-field">
        <label for="basic-form-name">Name</label>
        <input class="text-input" id="basic-form-name" type="text" placeholder="First name">
      </li>
      <li class="form-field">
        <input id="basic-form-checkbox" type="checkbox">
        <span class="label--inline" for="basic-form-checkbox">No Lastname</span>
      </li>
    </ol>
    <input class="btn" type="reset" value="Cancel">
    <input class="btn btn--primary" type="submit" value="Submit">
  </fieldset>
</form>
</section>

<section slot="import">
@import 'px-forms-design/_base.forms.scss';
</section>

</template>

<!-- FOR 'Checkbox' TAB -->
<template is="dom-if" if="[[_tabIs('Checkbox',selectedTab)]]" restamp="">

<px-sass-doc-option slot="options" option-name="Disabled" choose-with="boolean" default-choice="false">
</px-sass-doc-option>

<px-sass-doc-option slot="options" option-name="Checked" choose-with="boolean" default-choice="false">
</px-sass-doc-option>

<section slot="demo-html" id="demoContainer">
<input id="checkbox1" type="checkbox" disabled\$="{{selectedOptions.Disabled}}" checked\$="{{selectedOptions.Checked}}">
<label class="label--inline" for="checkbox1">Option 1</label>
<br>
<input id="checkbox2" class="u-mt" type="checkbox" disabled\$="{{selectedOptions.Disabled}}" checked\$="{{selectedOptions.Checked}}">
<label class="label--inline" for="checkbox2">Option 2</label>
</section>

</template>

<!-- FOR 'Radio button' TAB -->
<template is="dom-if" if="[[_tabIs('Radio button',selectedTab)]]" restamp="">

<px-sass-doc-option slot="options" option-name="Disabled" choose-with="boolean" default-choice="false">
</px-sass-doc-option>

<section slot="demo-html" id="demoContainer">
<input id="radio1" name="radio-group" type="radio" disabled\$="{{selectedOptions.Disabled}}">
<label class="label--inline" for="radio1">Option 1</label>
<br>
<input id="radio2" class="u-mt" name="radio-group" type="radio" disabled\$="{{selectedOptions.Disabled}}">
<label class="label--inline" for="radio2">Option 2</label>
</section>

</template>

<!-- 5: Set Usage HTML -->
<section slot="usage">
<h4>Input Field:</h4>
\`\`\`
<label for="input1">Input Label</label>
<input class="text-input" id="input1" type="text" placeholder="Type something...">
\`\`\`

<h4>Checkbox:</h4>
\`\`\`
<input id="checkbox1" type="checkbox" disabled="">
<label class="label--inline" for="checkbox1">Checkbox</label>
\`\`\`

<h4>Radio Button:</h4>
\`\`\`
<input id="radio1" name="radios" type="radio" disabled="">
<p class="label--inline" for="radio1">Option 1</p>
<input id="radio2" name="radios" type="radio" disabled="">
<p class="label--inline" for="radio2">Option 2</p>
\`\`\`

<h4>Select (Dropdown):</h4>
\`\`\`
<select disabled="">
  <optgroup label="Header 1">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
    <option>Option 4</option>
  </optgroup>
  <optgroup label="Header 2">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
    <option>Option 4</option>
  </optgroup>
</select>
\`\`\`

<h4>Multi-select:</h4>
\`\`\`
<select multiple="">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
  <option>Option 4</option>
</select>
\`\`\`

<h4>Text Area:</h4>
\`\`\`
<textarea placeholder="Type something..."></textarea>
\`\`\`

<h4>Inline Form:</h4>
\`\`\`
<label class="label--inline" for="inline1">Label Text</label>
<input class="text-input input--small" id="inline1" type="text">
\`\`\`

<h4>Basic Form:</h4>
\`\`\`
<form>
  <fieldset class="form-field">
    <legend>Basic form</legend>
    <ol class="list-bare">
      <li class="form-field">
        <label for="basic-form-name">Name</label>
        <input id="basic-form-name" class="text-input" type="text" placeholder="First name">
        <span class="form-field__help">Hint Text</span>
      </li>
      <li class="form-field">
        <input id="basic-form-checkbox" type="checkbox">
        <label class="label--inline" for="basic-form-checkbox">No Lastname</label>
      </li>
    </ol>
    <input class="btn" type="reset" value="Cancel">
    <input class="btn btn--primary" type="submit" value="Submit">
  </fieldset>
</form>
\`\`\`
</section>

</px-sass-doc>
`,

  is: 'px-forms-design-demo',

  attached : function(){
    var boundHandler = this._handleOptionsUpdated.bind(this);
    this.addEventListener('px-sass-doc-options-updated', boundHandler);
  },

  detached : function(){
    this.removeEventListener('px-sass-doc-options-updated', boundHandler);
  },

  _handleOptionsUpdated : function(evt) {
    //call functions created below
    this.inputClasses = this._calcInputClasses();
    this.inlineClasses = this._calcInlineClasses();
    this.inputImportCode = this._inputImportCode();
    this.inlineImportCode = this._inlineImportCode();
    this.hintClasses = this._calcHintClasses();
    this.labelClasses = this._calcLabelClasses();

    // Wait, then tell the highlighter to run after dom-if restamps
    this.async(function(){ this.fire('px-sass-doc-demo-updated', {}) }, 10);
  },

  _calcInputClasses : function() {
    var opts = this.selectedOptions || {}, strings = [];

    if (opts["Input Length"] === "tiny")     strings.push("input--tiny");
    if (opts["Input Length"] === "small")    strings.push("input--small");
    if (opts["Input Length"] === "regular")  strings.push("input--regular");
    if (opts["Input Length"] === "large")    strings.push("input--large");
    if (opts["Input Length"] === "huge")     strings.push("input--huge");

    if (opts["Validation States"] === "warning")   strings.push("validation-warning");
    if (opts["Validation States"] === "error")     strings.push("validation-error");
    if (opts["Validation States"] === "success")   strings.push("validation-success");

    if (opts.Bare === true)              strings.push("text-input--bare");

    return ("text-input " + strings.join(" ")).trim();
  },

  _calcLabelClasses : function() {
    var opts = this.selectedOptions || {}, strings = [];
    return opts.Disabled ? "disabled" : "";
  },

  _calcHintClasses : function() {
    var opts = this.selectedOptions || {}, strings = [];
    if (opts["Validation States"] === "warning")   strings.push("validation-warning");
    if (opts["Validation States"] === "error")     strings.push("validation-error");
    if (opts["Validation States"] === "success")   strings.push("validation-success");
    return ("form-field__help " + strings.join(" ")).trim();
  },

  _calcInlineClasses : function() {
    var optsInline = this.selectedOptions || {}, strings = [];

    if (optsInline.Length === "tiny")     strings.push("input--tiny");
    if (optsInline.Length === "small")    strings.push("input--small");
    if (optsInline.Length === "regular")  strings.push("input--regular");
    if (optsInline.Length === "large")    strings.push("input--large");
    if (optsInline.Length === "huge")     strings.push("input--huge");

    if (optsInline.Validation === "warning")   strings.push("validation-warning");
    if (optsInline.Validation === "error")     strings.push("validation-error");
    if (optsInline.Validation === "success")   strings.push("validation-success");

    return ("text-input " + strings.join(" ")).trim();
  },

  _inputImportCode : function() {
    var opts = this.selectedOptions || {}, strings = [];

    if (opts["Input Length"] === "tiny")    strings.push("$inuit-enable-input--tiny : true;");
    if (opts["Input Length"] === "small")   strings.push("$inuit-enable-input--small : true;");
    if (opts["Input Length"] === "regular") strings.push("$inuit-enable-input--regular : true;");
    if (opts["Input Length"] === "large")   strings.push("$inuit-enable-input--large : true;");
    if (opts["Input Length"] === "huge")    strings.push("$inuit-enable-input--huge : true;");

    if (opts["Validation States"] === "warning")  strings.push("$inuit-enable-validation-states : true;");
    if (opts["Validation States"] === "error")    strings.push("$inuit-enable-validation-states : true;");
    if (opts["Validation States"] === "success")  strings.push("$inuit-enable-validation-states : true;");

    if (opts.Bare === true)              strings.push("$inuit-enable-text-input--bare : true;");

    return (strings.join("\n") + "\n@import 'px-forms-design/_base.forms.scss';").trim();
  },

  _inlineImportCode : function() {
    var opts = this.selectedOptions || {}, strings = [];

    if (opts["Length"] === "tiny")    strings.push("$inuit-enable-input--tiny : true;");
    if (opts["Length"] === "small")   strings.push("$inuit-enable-input--small : true;");
    if (opts["Length"] === "regular") strings.push("$inuit-enable-input--regular : true;");
    if (opts["Length"] === "large")   strings.push("$inuit-enable-input--large : true;");
    if (opts["Length"] === "huge")    strings.push("$inuit-enable-input--huge : true;");

    if (opts["Validation"] === "warning")    strings.push("$inuit-enable-validation-states : true;");
    if (opts["Validation"] === "error")    strings.push("$inuit-enable-validation-states : true;");
    if (opts["Validation"] === "success")    strings.push("$inuit-enable-validation-states : true;");

    return (strings.join("\n") + "\n@import 'px-forms-design/_base.forms.scss';").trim();
  },

  _tabIs : function(tabName) {
    var selected = this.selectedTab || "";
    return selected === tabName;
  }
});
