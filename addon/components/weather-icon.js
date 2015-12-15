import Ember from 'ember';
import layout from '../templates/components/weather-icon';

export default Ember.Component.extend({
  tagName: 'i',
  classNameBindings: ['prefixedClass'],
  layout: layout,

  prefixedClass: Ember.computed('name', function () {
    return 'wi wi-' + this.get('name');
  })
});

