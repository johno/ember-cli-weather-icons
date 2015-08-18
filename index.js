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
    this.app.import(app.bowerDirectory + '/weather-icons/font/weathericons-regular-webfont.eot',  { destDir: 'font' });
    this.app.import(app.bowerDirectory + '/weather-icons/font/weathericons-regular-webfont.svg',  { destDir: 'font' });
    this.app.import(app.bowerDirectory + '/weather-icons/font/weathericons-regular-webfont.ttf',  { destDir: 'font' });
    this.app.import(app.bowerDirectory + '/weather-icons/font/weathericons-regular-webfont.woff', { destDir: 'font' });
    this.app.import(app.bowerDirectory + '/weather-icons/font/weathericons-regular-webfont.woff2', { destDir: 'font' });
  }
};
