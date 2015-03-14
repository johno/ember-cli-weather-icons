'use strict';

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('weather-icons', '~1.3.2');
  }
};
