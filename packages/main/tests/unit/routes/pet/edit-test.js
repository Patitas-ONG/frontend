import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pet/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pet/edit');
    assert.ok(route);
  });
});
