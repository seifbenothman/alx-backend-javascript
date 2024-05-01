const weakMap = new WeakMap();

export { weakMap };

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
  
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}