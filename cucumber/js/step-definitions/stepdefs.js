const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('this step will fail', function () {
  assert.fail('this step always fails');
});

Given('this step will success', function () {
  // successful step
});

When('this step will fail', function () {
  assert.fail('this step always fails');
});

When('this step will success', function () {
  // successful step
});

When('this step is pending', function () {
  return 'pending';
});

When('this step will success using example {string}', function (variable) {
  // use variable if needed
});
