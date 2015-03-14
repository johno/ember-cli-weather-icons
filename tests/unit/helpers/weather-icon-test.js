import {
  weatherIcon
} from 'ember-cli-weather-icons/helpers/weather-icon';

module('WeatherIconHelper');

test('it returns an icon with the correct sunny class', function() {
  var result = weatherIcon('sunny');
  equal(result.toString(), '<i class="wi wi-sunny"></i>');
});

test('it returns an icon with the correct moon-full class', function() {
  var result = weatherIcon('moon-full');
  equal(result.toString(), '<i class="wi wi-moon-full"></i>');
});
