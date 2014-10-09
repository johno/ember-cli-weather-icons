'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-weather-icons',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/weather-icons/css/weather-icons.css');
    this.app.import(app.bowerDirectory + '/weather-icons/fonts/weathericons-regular-webfont.eot',  { destDir: 'fonts' });
    this.app.import(app.bowerDirectory + '/weather-icons/fonts/weathericons-regular-webfont.svg',  { destDir: 'fonts' });
    this.app.import(app.bowerDirectory + '/weather-icons/fonts/weathericons-regular-webfont.ttf',  { destDir: 'fonts' });
    this.app.import(app.bowerDirectory + '/weather-icons/fonts/weathericons-regular-webfont.woff', { destDir: 'fonts' });
    this.app.import(app.bowerDirectory + '/weather-icons/fonts/WeatherIcons-Regular.otf', { destDir: 'fonts' });
  }
};
