var storage = {
  _store: null,
  set: function(key, val) {
    this._store[key] = val;
    return val;
  },
  get: function(key) {
    return this._store[key];
  },
  del: function(key) {
    delete this._store[key];
  }
};

(function setStorage() {
  var NUM_BYTES = 32;
  var bytes = [];

  for (var i = 0; i < NUM_BYTES; i++) bytes.push('0');
  bytes = bytes.join('');

  try {
    storage._store = window.sessionStorage;
    storage.set('storage_test', bytes);
    if (storage.get('storage_test') !== bytes)
      throw new Error('storage test failed');
    storage.del('storage_test');
  } catch (e) {
    console.log('sessionStorage is not available, using fallback.');
    storage._store = {};
  }
})();
