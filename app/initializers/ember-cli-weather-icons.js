import Ember from 'ember';
import { weatherIcon } from 'ember-cli-weather-icons/helpers/weather-icon';

export var initialize = function(/* container, app */) {
  Ember.Handlebars.helper('weather-icon', weatherIcon);
  Ember.Handlebars.helper('w-i', weatherIcon);
};

export default {
  name: 'ember-cli-weather-icon',
  initialize: initialize
};
