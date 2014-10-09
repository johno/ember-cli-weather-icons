import Ember from 'ember';

function weatherIcon(weather) {
  return new Ember.Handlebars.SafeString('<i class="wi wi-' + weather + '"></i>');
}

export { weatherIcon };

export default Ember.Handlebars.makeBoundHelper(weatherIcon);
