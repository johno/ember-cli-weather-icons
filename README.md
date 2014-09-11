# Gravatar Image Tag

An [ember-cli](http://ember-cli.com) addon for
[Erik Flowers' weather icons](https://github.com/erikflowers/weather-icons).

## Disclaimer

Currently, the only weather-icon version available on Bower is `0.0.1`. As
a result, there have been a few path tweaks to play nicely with the outdated
version. Once a new version hits Bower, these changes will be reverted, and
only the latest version of weather-icons will work with this addon.

## Installation

First, you must install weather-icons with [bower](http://bower.io):

```
$ bower install --save weather-icons
```

Then, install ember-cli-weather-icons:

```
$ npm install --save ember-cli-weather-icons
```

## Usage

```hbs
{{weather-icon this.weather}}
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com).
