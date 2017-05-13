# meteocons.css v0.2.1

[![Greenkeeper badge](https://badges.greenkeeper.io/tomlutzenberger/meteocons.css.svg)](https://greenkeeper.io/)
meteocons.css is a small css library for the Meteocons Font made by [Alessio Atzeni](http://www.alessioatzeni.com/meteocons/).
It comes with currently 47 weather icons.


## Usage
The icons may be used with `<i>` or `<span>` tags, including the base class `mi` and an icon name.
Example:
```html
<i class="mi mi-sunset"></i>
<span class="mi mi-cloud"></span>
```

## Features
Pretty much like Font Awesome

### Fixed width
- `.mi-fw`

### Sizing
- `.mi-lg` (133%)
- `.mi-2x`
- `.mi-3x`
- `.mi-4x`
- `.mi-5x`

### Lists
```html
<ul class="mi mi-ul">
  <li><i class="mi mi-li mi-sun"></i>The sun...</li>
  <li><i class="mi mi-li mi-moon"></i>...and the moon</li>
</ul>
```

### Inline
You can also use the icons in inline text.
Try
- `<sup>`
- `<sub>`
- `<mark>`


## License
This library is published under the **MIT License** and can be used for any commercial and personal projects.


## Changelog
- v0.2.1 - Updated Bootstrap, added linting, harmonized coding style
- v0.2.0 - Second release including overview and frontend tests
- v0.1.0 - Pre-release with basic implementation, barely tested.


## Thanks
Alessio Atzeni who created this font and made it free.
Dave Gandy who inspired with his work on [fontawesome.io](http://fontawesome.io)
