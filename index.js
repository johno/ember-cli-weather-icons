module.exports = {
  name: 'ember-cli-weather-icons',

  treeFor: function(name) {
    if (name === 'vendor') {
      return this.treeGenerator(path.join(__dirname, 'bower_components'));
    }
  },

  included: function included(app) {
    this.app = app;

    app.import("vendor/weather-icons/css/weather-icons.css");
    app.import("vendor/weather-icons/fonts/weathericons-regular-webfont.eot",  { destDir: "fonts" });
    app.import("vendor/weather-icons/fonts/weathericons-regular-webfont.svg",  { destDir: "fonts" });
    app.import("vendor/weather-icons/fonts/weathericons-regular-webfont.ttf",  { destDir: "fonts" });
    app.import("vendor/weather-icons/fonts/weathericons-regular-webfont.woff", { destDir: "fonts" });
    app.import("vendor/weather-icons/fonts/WeatherIcons-Regular.otf",          { destDir: "fonts" });
  }
};
