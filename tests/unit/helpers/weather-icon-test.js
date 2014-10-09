import {
  weatherIcon
} from 'ember-cli-weather-icons/helpers/weather-icon';

module('WeatherIconHelper');

// Replace this with your real tests.
test('it works', function() {
  var result = weatherIcon('sunny');
  equal(result.toString(), '<i class="wi wi-sunny"></i>');
});
