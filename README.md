# Forms

The Predix Experience Forms module defines styles for form elements such as `<input>`, `<label>`, `<select>` and so on. It is based on Formalize (http://formalize.me) by Nathan Smith (http://sonspring.com/)

## Dependencies

Px's Forms module depends on three other Px and inuitcss modules:

* [settings.defaults](https://github.com/inuitcss/settings.defaults)
* [px-colors-design](https://github.sw.ge.com/pxc/px-colors-design)
* [px-functions-design](https://github.sw.ge.com/pxc/px-functions-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save https://github.sw.ge.com/pxc/px-forms-design.git

Once installed, `@import` into your project's Sass file in its Base layer:

    @import "../px-forms-design/base.forms";

See [px-getting-started](https://github.sw.ge.com/pxc/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Import once

All rulesets are wrapped in the following `@if` statement:

    @if import-once('base.forms') { ... }

## Usage

This flag is available and, if needed, should be set to `true` prior to importing the module:

    $px-enable-form-field-inner-shadow

The following variables are available for use in the module:

    $px-form-field-inner-shadow
    $px-form-field-border-color
    $px-form-field-radius

Basic usage of forms.base requires `<input>` fields with the following `type` attributes to carry the `text-input` class:

    [type=date]
    [type=datetime]
    [type=datetime-local]
    [type=email]
    [type=month]
    [type=number]
    [type=password]
    [type=search]
    [type=tel]
    [type=text]
    [type=time]
    [type=url]
    [type=week]

## Options

* `.input-bare`: display form fields without margin, padding, or borders.
* `.input-btn`: styles for buttons attached to form fields
* `.input--[tiny|small|regular|large|huge]`: define fixed widths for form fields.
