'use strict';

module.exports = {
  name: 'ember-cli-weather-icons',

  included: function included(app) {
    this.app = app;
    this._super.included(app);

    app.import("bower_components/weather-icons/css/weather-icons.css");
    app.import("bower_components/weather-icons/font/weathericons-regular-webfont.eot",  { destDir: "font" });
    app.import("bower_components/weather-icons/font/weathericons-regular-webfont.svg",  { destDir: "font" });
    app.import("bower_components/weather-icons/font/weathericons-regular-webfont.ttf",  { destDir: "font" });
    app.import("bower_components/weather-icons/font/weathericons-regular-webfont.woff", { destDir: "font" });
//  app.import("bower_components/weather-icons/font/WeatherIcons-Regular.otf",          { destDir: "fonts" });
  }
};
