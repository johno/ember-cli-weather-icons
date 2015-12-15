import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('weather-icon', 'Integration | Component | weather icon', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{weather-icon}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#weather-icon}}
      template block text
    {{/weather-icon}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it uses the correct tag', function(assert) {
  this.render(hbs`{{weather-icon}}`);
  assert.equal(this.$('> :first-child').prop('tagName'), 'I');
});

test('it adds the wi class', function(assert) {
  this.render(hbs`{{weather-icon name='sunny'}}`);
  assert.ok(this.$('> :first-child').hasClass('wi'));
});

test('it adds the prefixed class', function(assert) {
  this.render(hbs`{{weather-icon name='day-sunny'}}`);
  assert.ok(this.$('> :first-child').hasClass('wi-day-sunny'));
});

test('it correctly binds prefixedClass to the name property', function(assert) {
  this.set('currWeather', 'day-sunny');

  this.render(hbs`{{weather-icon name=currWeather}}`);

  this.set('currWeather', 'cloudy');

  assert.ok(this.$('> :first-child').hasClass('wi-cloudy'));
});
