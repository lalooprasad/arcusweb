/**
 * Copyright 2019 Arcus Project
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import $ from 'jquery';
import fixture from 'can-fixture/';
import assert from 'chai';
import loginAndRender from 'i2web/test/util/loginAndRender';
import Place from 'i2web/models/place';
import places from 'i2web/models/fixtures/data/place/place.json';
import './notification-list';

let cleanupAfterRender;

describe('i2web/components/subsystem/alarms/notification-list', function favorite() {
  before(function before() {
    fixture.reset();
  });

  beforeEach(function beforeEach(done) {
    loginAndRender({
      renderTo: '#test-area',
      template: '<arcus-subsystem-alarms-notification-list {place}="place" />',
      scope: {
        place: new Place(places[0]),
      },
      appScope: {

      },
    }).then(({ cleanup }) => {
      cleanupAfterRender = cleanup;
      done();
    }).catch(() => {
      console.error(arguments);
      done();
    });
  });

  afterEach(function after(done) {
    cleanupAfterRender().then(() => {
      done();
    }).catch(() => {
      console.error(arguments);
      done();
    });
  });

  describe('rendering', function rendering() {
    it('shall be rendered on the page', function isRendered() {
      assert.lengthOf($('arcus-subsystem-alarms-notification-list'), 1, 'arcus-subsystem-alarms-notification-list is rendered');
    });
  });
});