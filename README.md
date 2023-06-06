# Bulma Responsive Spacing

"Little" stylesheet to have all Bulma spacing classes
within responsive breakpoints.

I'm not an expert so, please, be merciful on judgements. :)

If I have done it right, the CSS has all the
spacing helpers classes of Bulma.

> You can find all spacing helpers here
> **https://bulma.io/documentation/helpers/spacing-helpers/#list-of-all-spacing-helpers**

## Default breakpoints

* `mobile`
* `tablet`
* `table-only`
* `touch`
* `desktop`
* `desktop-only`
* `until-widescreen`
* `widescreen`
* `widescreen-only`
* `until-fullhd`
* `fullhd`

> You can find all breakpoints here:  
> **https://bulma.io/documentation/overview/responsiveness/#breakpoints**

## Extend breakpoints

As suggested [here](https://github.com/jgthms/bulma/issues/451#issuecomment-1569994385), you can customize breakpoints.  
You only have to add them in `$my-breakpoints` map.

In ths example I just added the breakpoint posted in the link:

```scss
$mobile-md      : 480px !default;
$mobile-lg      : 600px !default;
$my-breakpoints : (
  "mobile-xs" : (
    "until" : $mobile-md
  ),
  "mobile-md" : (
    "from" : $mobile-md
  ),
  "mobile-lg": (
    "from" : $mobile-lg
  )
);
```

You must set the map like the `$breakpoints` map in `initial-variables.sass`.

> Check `$breakpoints` variable here:
> **https://bulma.io/documentation/customize/variables/**

## Allowed Space

`$allowed-space` map controls which classes must be created.

I don't know if it's useful, but maybe you need only responsive margins or padding, or maybe only you want to create classes only for a specific value of margin or padding. So I made this map:

If you set `globally-enabled` to false for margins,
so no margin classes will be created.

If you set `0`,`1`,`2`,`3`,`4`,`5` to false, only classes
with `6` value will be created (ex: `.mx-6`).

This can be useful to make a smaller css.

```scss
$allowed-space : (
  "margin": (
    "globally-enabled": true,
    "x": true,
    "y": true,
    "top": true,
    "right": true,
    "bottom": true,
    "left": true,
    "0": true,
    "1": true,
    "2": true,
    "3": true,
    "4": true,
    "5": true,
    "6": true,
    "auto": true,
  ),
  "padding": (
    "globally-enabled": true,
    "x": true,
    "y": true,
    "top": true,
    "right": true,
    "bottom": true,
    "left": true,
    "0": true,
    "1": true,
    "2": true,
    "3": true,
    "4": true,
    "5": true,
    "6": true,
    "auto": true,
  ),
);
```

## Breakpoint to responsify

`$breakpoint-to-responsify` is a map to enable or disable
the making of spacing classes for breakpoints.

As you can see, the maps is a manual merge
default breakpoints and custom breakpoints.

`widescreen` and `fullhd` related breakpoints are
based on `$widescreen-enabled` and `fullhd-enabled`
set on  `initial-variables.sass`.

```scss
$breakpoint-to-responsify : (
  "mobile": true,
  "tablet": true,
  "table-only": true,
  "touch": true,
  "desktop": true,
  "desktop-only": true,
  "until-widescreen": $widescreen-enabled,
  "widescreen": $widescreen-enabled,
  "widescreen-only": $widescreen-enabled,
  "until-fullhd": $fullhd-enabled,
  "fullhd": $fullhd-enabled,
  "mobile-xs": true,
  "mobile-md": true,
  "mobile-lg": true,
);
```