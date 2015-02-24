# Forms

The Predix Experience Forms module defines styles for form elements such as `<input>`, `<label>`, `<select>` and so on.

## Dependencies

Px's Forms base depends on three other Px and inuitcss modules:

* [settings.defaults](https://github.com/inuitcss/settings.defaults)
* [px-colors-design](https://github.sw.ge.com/pxc/px-colors-design)
* [px-functions-design](https://github.sw.ge.com/pxc/px-functions-design)

## Installation

Install using bower

    bower install --save https://github.sw.ge.com/pxc/px-forms-design.git

Once installed, `@import` into your project's Sass file in its Base layer:

    @import "px-forms-design/sass/base.forms";

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
