const weakMap = new WeakMap();

function queryAPI(endpoint) {
  let called = weakMap.get(endpoint) || 0;
  called += 1;
  if (called >= 5) throw new Error('Endpoint load is high');
  weakMap.set(endpoint, called);
}

export { queryAPI, weakMap };