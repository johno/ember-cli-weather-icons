'use strict';

module.exports = {
  description: 'ember-cli-weather-icons',

  afterInstall: function(options) {
    return this.addBowerPackageToProject('weather-icons');
  }
};
