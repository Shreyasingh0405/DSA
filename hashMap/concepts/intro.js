//In JavaScript, a hashmap (also known as an associative array or an object) is a data structure that allows you to store key-value pairs. The keys in a hashmap can be any value (including objects and functions), while the values can be any data type.

//object VS MAP VS HASHMAP

// Object

// Definition: A collection of properties (key-value pairs). Keys are strings (or symbols).
// Key Types: Only strings and symbols.
// Order of Entries: No guaranteed order of properties (prior to ES6); properties are iterated in the order of insertion (for string keys) in ES6 and beyond.
// Performance: O(1) for property access, but performance may degrade with many properties due to prototype chain lookups.
// Methods: Common methods include Object.keys(), Object.values(), Object.entries(), and Object.hasOwnProperty().
// Size: No built-in method to determine the number of properties (need to use Object.keys() or similar).
// Use Cases: Used for simple data structures, configurations, and where keys are known and limited.
// Prototype Chain: Inherits from Object.prototype, which may affect performance and behavior.
// Serialization: Can be serialized to JSON easily with JSON.stringify().

// Map

// Definition: A collection of key-value pairs where keys can be of any type (including objects).
// Key Types: Any value (including functions and objects).
// Order of Entries: Maintains the order of insertion.
// Performance: O(1) for insertion, deletion, and access; more consistent performance than objects for large datasets.
// Methods: Includes .set(key, value), .get(key), .has(key), .delete(key), .clear(), and iteration methods like .forEach().
// Size: Has a .size property to get the number of key-value pairs.
// Use Cases: Preferred when keys are unknown or can be of any type; useful for storing large collections of data.
// Prototype Chain: Does not have a prototype chain, which can improve performance for certain operations.
// Serialization: Requires custom methods to serialize/deserialize since JSON.stringify() does not support Maps.

// HashMap (Generic Concept)

// Definition: A data structure that maps keys to values, using a hash function to compute an index.
// Key Types: Any value (depending on the implementation of the hash function).
// Order of Entries: Not inherently ordered (depends on the implementation).
// Performance: O(1) for insertion, deletion, and access in average cases, but can degrade with collisions.
// Methods: Varies based on implementation, typically includes set, get, and remove methods.
// Size: Typically needs to keep track of size internally.
// Use Cases: Useful in scenarios where efficient lookups and insertions are required, like caching or frequency counting.
// Prototype Chain: Typically does not use a prototype chain.
// Serialization: Depends on the implementation, similar to Maps regarding serialization.

//Sure! Here’s the updated summary of hashmaps and their trade-offs in JavaScript, including `console.log` examples for both **Object** and **Map**.

// ### 1. Definition
// - **Object**: A collection of properties (key-value pairs) where keys must be strings (or symbols).
//   - **Example**:

    const obj = {
        name: 'Alice',
        age: 30,
        city: 'New York'
    };
    console.log(obj); // Output: { name: 'Alice', age: 30, city: 'New York' }

// - **Map**: A collection of key-value pairs where keys can be of any type (including objects).
//   - **Example**:

    const map = new Map();
    map.set('name', 'Bob');
    map.set(25, 'age');
    map.set({}, 'objectKey'); // key can be an object
    console.log(map); // Output: Map(3) { 'name' => 'Bob', 25 => 'age', {} => 'objectKey' }

// ### 2. Key Types
// - **Object**: Only string and symbol keys are allowed.
//   - **Example**:

    obj['city'] = 'Los Angeles'; // Valid
    obj[10] = 'Ten'; // Coerced to string: '10'
    console.log(obj); // Output: { name: 'Alice', age: 30, city: 'Los Angeles', '10': 'Ten' }


// - **Map**: Any value (including functions and objects) can be used as keys.
//   - **Example**:

    const keyObj = {};
    map.set(keyObj, 'value associated with an object');
    console.log(map.get(keyObj)); // Output: value associated with an object


// ### 3. Order of Entries
// - **Object**: No guaranteed order of properties (prior to ES6); properties are iterated in the order of insertion for string keys in ES6 and beyond.
//   - **Example**:
    const unorderedObj = {};
    unorderedObj['b'] = 2;
    unorderedObj['a'] = 1;
    console.log(Object.keys(unorderedObj)); // Output: ['b', 'a'] (no guaranteed order)

// - **Map**: Maintains the order of insertion.
//   - **Example**:
    const orderedMap = new Map();
    orderedMap.set('b', 2);
    orderedMap.set('a', 1);
    console.log([...orderedMap.keys()]); // Output: ['b', 'a'] (maintains order)

// ### 4. Performance
// - **Object**: Average O(1) time complexity for property access but may degrade due to prototype chain lookups.
//   - **Example**:

    const start1 = performance.now();
    for (let i = 0; i < 1e6; i++) {
        const val = obj['name']; // O(1)
    }
    const end1 = performance.now();
    console.log(`Object access time: ${end1 - start1} ms`);

// - **Map**: Average O(1) for insertion, deletion, and access with more consistent performance.
//   - **Example**:

    const start = performance.now();
    for (let i = 0; i < 1e6; i++) {
        map.set(`key${i}`, i); // O(1)
    }
    const end = performance.now();
    console.log(`Map insertion time: ${end - start} ms`);

// ### 5. Methods
// - **Object**: Uses standard property access and methods like `Object.keys()`, `Object.values()`, etc.
//   - **Example**:

console.log(Object.keys(obj)); // Output: ['name', 'age', 'city', '10']

// - **Map**: Provides built-in methods like `.set()`, `.get()`, `.has()`, and `.delete()`.
//   - **Example**:

    console.log(map.get('name')); // Output: Bob
    console.log(map.has(25)); // Output: true

// ### 6. Space Complexity
// - **Object**: Generally requires less memory for small datasets but can be inefficient for large datasets.
// - **Map**: Requires more memory due to storing keys and values but is more efficient with larger datasets.

// ### 7. Collisions
// - **Object**: No native collision resolution; keys are overwritten if a duplicate key is added.
//   - **Example**:

    obj['key1'] = 'value1';
    obj['key1'] = 'value2'; // Overwrites previous value
    console.log(obj['key1']); // Output: value2

// - **Map**: Handles collisions inherently; keys are unique, and duplicate keys will overwrite existing entries.
//   - **Example**:

    map.set('key1', 'value1');
    map.set('key1', 'value2'); // Overwrites previous value
    console.log(map.get('key1')); // Output: value2

// ### 8. Serialization
// - **Object**: Easily serialized to JSON with `JSON.stringify()`.
//   - **Example**:

    const jsonString = JSON.stringify(obj);
    console.log(jsonString); // Output: '{"name":"Alice","age":30,"city":"Los Angeles","10":"Ten"}'


// - **Map**: Requires custom methods for serialization since `JSON.stringify()` does not support Maps.
//   - **Example**:

    const jsonMap = JSON.stringify([...map]);
    console.log(jsonMap); // Output: '[["name","Bob"],[25,"age"],[{},"objectKey"]]'


