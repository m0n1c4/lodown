'use strict';

// YOU KNOW WHAT TO DO //
/**
 * This is proper documentation.
 * Everything in here describes and names the function
 * In plain english, in your own words.
 * Check out MDN or lodash for examples
 */
 
 /**
  * identity: Designed to pass through the value it is given, 
  * and return it unchanged.
  * 
  * // PARAMETERS //
  * @param {any value} value: The value to be returned.
  * 
  * // RETURN //
  * @return {any value} value: The same as the value passed in.
  * 
  * // EXAMPLES //
  * identity(5) --> 5
  * identity("slick") --> "slick"
  * 
  * 
 */
function identity(value){
    return value;
}
module.exports.identity = identity; //this is how code is exported in node environment
//module is an object which has an object exports

/**
 * typeOf: Designed to return the type of the value passed in
 * as a string.
 * 
 * // PARAMETERS //
 * @param {any value} value: contains the value whose type will be identified
 * 
 * // RETURN //
 * @return {any value} value: returns a string containing the type of <value>
 * *     Types are one of:
 *          - "string"
 *          - "array"
 *          - "object"
 *          - "undefined"
 *          - "number"
 *          - "boolean"
 *          - "null"
 *          - "function"
 * 
 * // EXAMPLES //
 *   typeOf("Elixir of Life") --> "string"
 *   typeOf(5) --> "number"
 *   typeOf() --> "undefined"
 * 
*/
function typeOf(value){
    if(Array.isArray(value)) return 'array';
    if(value === null) return 'null';
    if(value instanceof Date) return 'date';
    return typeof value;
}
module.exports.typeOf = typeOf; 
 
/**
 * first: Given an Array <array>, and a number <num>, 
 * will return the first <num> items of the array. If
 * no number is given,or not a number,  will return the
 * [0] index of <array>. If <array> is not an array, will
 * return [].
 * 
 * // PARAMETERS //
 * @param {Array or any value} array: conatins the array to be searched,
 *                   or if not an array, is converted to an empty array.
 * @param {Number or any value} num: contains the number used to select 
 *                   which array elements are returned. Not required.
 * 
 * // RETURN //
 * 
 * @return {Array} []: if <array> is not an array, or <num> < 0
 * @return {any value} array[0]: gives the zero index of <array>
 * @return {Array} array.slice(0, num): gives <array> contents up to
 *                                      though not including <num>
 * 
 * // EXAMPLES //
 * 
 * console.log(first("donkey kong", -1)); // '[]'
 * console.log(first(["Wednesday", "Mr. Nancy", "Shadow Moon"])); // 'Wednesday'
 * console.log(first(["Odin", "Anansi", "Thoth", 
 *                     "Anubis", "Captain Flint"], 3)); // ["Odin", "Anansi", "Thoth"]
 * 
*/

function first(array, num) {
    if(!Array.isArray(array) || num < 0) return [];
    if(num === undefined || typeof num !== 'number') return array[0]; 
    return array.slice(0, num); 
    
}
module.exports.first = first;

/**
 * last: Given an Array <array>, and a number <num>, 
 * will return the last <num> items of the array. If
 * no number is given,or not a number,  will return the
 * [array.length -1] index of <array>.  If <num> is greater 
 * than length of array, returns the entire array. If <array> 
 * is not an array, will return [].
 * 
 * // PARAMETERS //
 * @param {Array or any value} array: contains an array to be examined, otherwise
 *                             converts to an empty array.
 * @param {Number or any value} num: cotains a number indicating what indexes of
 *                              the array are to be searched, otherwise will be
 *                              searching at (array.length - 1), if greater than 
 *                              (array.length), it will be the entire array.
 * 
 * // RETURN //
 * @return {Array} []: if <array> is not an array, or <num> < 0
 * @return {Value} array[array.length - 1]: if <num> is undefined or nAn
 * @return {Array} array: if <num> is greater than array.length
 * @return {Array} array.slice(-num): gives all elements after the index of <num>
 * 
 * // EXAMPLES //
 * console.log(last("mario", -1)); // '[]'
 * console.log(last(["Wednesday", "Mr. Nancy", "Shadow Moon"])); // 'Shadow Moon'
 * console.log(last(["Odin", "Anansi", "Thoth", "Anubis", "Captain Flint"], 3)); // 'Thoth, Anubis, Captain Flint'
 * 
*/
function last(array, num){
    if (!Array.isArray(array) || num < 0) return [];
    if (num === undefined || typeof num !== 'number') return array[array.length - 1];
    if (num > array.length) return array;
    return array.slice(-num);
}
module.exports.last = last;

/**
 * each: Designed to loop over <collection>, an Array or Object, and applies the 
 * Function <action> to each value in the collection.
 * 
 * // PARAMETERS //
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 * // RETURN //
 *  None.
 * 
 * // EXAMPLES //
 * each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
 * 
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each; 

/**
 * indexOf: Designed to loop over an array, and return the first occurance of
 * a value. If the value is not in the array, it will return -1.
 * 
 * // PARAMETERS //
 * @param {Array} array: contains the array to be checked
 * @param {Value} target: contains the value to be checked for 
 * 
 * // RETURN //
 * @return i: the first index of the target value in the array
 * @return -1: if the target value is not found
 * 
 * // EXAMPLES //
 * 
 * console.log(indexOf(['Jeremy', 'Black', 'Reagan'], 'Batman')); // '-1'
 * console.log(indexOf(['piano', 'keyboard', 'drums', 'vocals'], 'drums')); // '2'
 * 
*/
function indexOf(array, target){
    //loop over the elements of array[] and return the index of any match
    for (var i = 0; i < array.length; i++){
        if (array[i] === target){
            return i;
        }
    }
    return -1; //in case the target is not found
}
module.exports.indexOf = indexOf;

/**
 * filter: takes in an array, and a function. Looping through the array,
 * puts all array elements through  function, moves passing values into a new array.
 * 
 * // PARAMETERS //
 * @param {Array} array: contains the array to be filtered
 * @param {Function} test: contains the test conditions which determine if each array
 *                         element will pass the filter & be included in return array
 * 
 * // RETURN //
 * @return testPass: gives the array of all values passing the test function
 * 
 * // EXAMPLES //
 * console.log(filter([1, 2, 3, 4, 5], function(x){return x % 2 === 0})); // '[2, 4]'
 * console.log(filter(['Teach', 'Rackham', 'Bonny', 'Flint'], function(l){return l.length <= 5})); // '["Teach", "Bonny", "Flint"]'
*/
function filter(array, test){
    let testPass = [];
    each(array, function(value, index, array){
        if(test(value, index, array)){
            testPass.push(value);
        }
    });
    return testPass;
}
module.exports.filter = filter;

/**
 * reject: takes in an array, and a function. Looping through the array,
 * uses the function to test all elements of the array. Returns an array
 * of all the values that did not pass.
 * 
 * // PARAMETERS //
 * @param {Array} array: contains the values to be tested
 * @param {Function} truthTest: contains a function for testing array values, only those
 *                              which do not pass will be returned.
 * 
 * // RETURN //
 * @return falseyArr: gives an array of all values that did not pass through the function
 * 
 * // EXAMPLES //
 * console.log(reject([1, 2, 3, 4, 5], function(y){return y % 2 === 0})); // '[1, 3, 5]'
 * console.log(reject(['Teach', 'Rackham', 'Bonny', 'Flint', 'Silver'], function(l){return l.length <= 5})); // ['Rackham', 'Silver']
*/
function reject(array, truthTest){ 
    let falseyArr = [];
 filter(array, function(e, i, a) { 
        if(!(truthTest(e, i, a))){
            falseyArr.push(e);
        }
    });
    return falseyArr; 
}
module.exports.reject = reject;

/**
 * partition: takes in an array, and a function. Loops through
 * the array, testing each element and pushing the value to an array
 * depending on if it passes or fails in the function. Returns an array
 * containing an array of all passing values and an array of all failing values.
 * 
 * // PARAMETERS //
 * @param {Array} array: contains an array of values to be tested
 * @param {Function} test: contains a function to test each element of the input array,
 *                         pushing failing elements to one array, and passing elements to
 *                         another.
 * // RETURN //
 * @return [pass, fail]: gives an array containing the arrays pass & fail
 * // EXAMPLES //
 * console.log(partition([1, 2, 3, 4, 5], function(g){return g % 2 === 0})); // [[2, 4], [1, 3, 5]]
 * console.log(partition(['Verax', 'Rambeau', 'Ragtime', 'Jasper'], function(n){return n[0] === 'R'})); // [["Rambeau", "Ragtime"], ["Verax", "Jasper"]]
*/
function partition(array, test){
    let pass = [], fail = []; 
    each(array, function(value, key, array) {
        (test(value, key, array) ? pass : fail).push(value); 
    });
    return [pass, fail]; 
}
module.exports.partition = partition;

/**
 * unique: takes a single array argument, returns an array with all duplicated
 * elements removed.
 * // PARAMETERS //
 * @param {Array} array: holds the array to be searched
 * 
 * // RETURN //
 * @return uniqueArr: array containing a single index of each element
 * 
 * // EXAMPLES //
 * console.log(unique([1, 1, 2, 2, 2, 3, 4])); // [1, 2, 3, 4]
 * console.log(unique(["aa", "aa", "bb", "cc", "cc"])); // ["aa", "bb", "cc"]
 * 
*/
function unique(array){
    var uniqueArr = [];
    each(array, function(v, i, a){
        if(indexOf(array, v) === i){
            uniqueArr.push(v);
        }
    });
    return uniqueArr;
}
module.exports.unique = unique;

/**
 * map: takes a collection (either an array or an object), and a function.
 * Iterates through each element in the collection, using function on each.
 * Returns the value of the function called on each element in a new array.
 * 
 * // PARAMETERS //
 * @param {Array or Object} collection: contains the values that will be passed 
 *                                      through the function
 * @param {Function} func: contains the operation to be performed on each element
 * 
 * // RETURN //
 * @return mapResult: a new array containing each element passed through the function
 * 
 * // EXAMPLES //
 * console.log(map([2, 4, 6, 8], function(b){return b * 2})); // [4, 8, 12, 16]
 * console.log(map(['Hoard', 'Braid', 'Ziggurat'], function(text){return text + ' is a game.'})); // ["Hoard is a game.", "Braid is a game.", "Ziggurat is a game."]
*/
function map(collection, func){
    var mapResult = [];
    each(collection, function(value, index, collection){ 
        mapResult.push(func(value, index, collection)); 
    });
   return mapResult;
}
module.exports.map = map;

/**
 * pluck: takes an array of objects and a property. Map through each
 * object in the collection. Returns an array containing the value of 
 * property on every object in the array.
 * 
 * // PARAMETERS //
 * @param {Array} objArr: an array containing objects
 * @param {Value} property: a property that will be tested for
 * 
 * // RETURN //
 * @return map(objArr, function(value){...}): encapsulating return that makes 
 *                                           an array of all objects and values, 
 *                                           only returns value specified in second
 *                                           return statement
 * @return value[property]: gives the value of property only, on the current object
 * 
 * // EXAMPLES //
 * 
*/
function pluck(objArr, property){
    return map(objArr, function(value){
        return value[property];
            });
}
module.exports.pluck = pluck;

/**
 * contains: loop through the array, checking if it contains value, 
 * if value is found, returns true. Otherwise returns false.
 * 
 * // PARAMETERS //
 * @param {Array} arr: an array to be looped through
 * @param {Value} value: a value to be looked for in the given array
 * // RETURN //
 * @return : uses ternary operator to return true or false depending on condition
 *           of the value's index
 * // EXAMPLES //
*/
function contains(arr, value){
    return arr.indexOf(value) > -1 ? true : false; 
}
module.exports.contains = contains;

/**
 * every: takes a collection and a function. Iterates through the collection,
 * checking every value for truthiness. If the return value of every item function is
 * called on is true, every returns true. Otherwise, returns false.
 * 
 * // PARAMETERS //
 * @param {Array or Object} coll: collection that will be examined
 * @param {Function} func: function which is used to determine if values 
 *                         qualify for the every condition
 * // RETURN //
 * @return true: if the argument func is not a function & the result is true, or each
 *               element in the collection returns true after passing through function
 * @return false: if the argument func is not a function & the result is false, or at least
 *                one element in the collection returns false after passing through function
 * // EXAMPLES //
 * console.log(every([2,4,6], function(e){return e % 2 === 0})); // true+
*/
function every(coll, func){
    var result = true; 
    each(coll, function(x){if(!x){result = false}}); 
    
      if(typeof func !== 'function' && result === true){return true}
      else if(typeof func !== 'function' && result === false){return false}
    
    var testTrue = false, testFalse = true; 
     each(coll, function(v, i, c){
        if(!func(v, i, c)){testFalse = false}
        else{testTrue = true}
     });
   
    if(testFalse && !testTrue){return result}
    else if(!testFalse){return false}
    else if(testTrue){return true}
       
}
module.exports.every = every;

/**
 * some: takes a collection and a function. Iterates through the collection, checking
 * each element for truthyness. If the return value of any item is true, then some returns true.
 * 
 * // PARAMETERS //
 * @param collection:
 * @param action:
 * 
 * // RETURN //
 * @return true: if any element returns true, or function is not a function but
 *               the result is true, will return true
 * @return false: if every element returns false, or the function is not a function
 *                and the result is false.
 * // EXAMPLES //
*/
function some(collection, action){
    
   var result = false;
     each(collection, function(any){if(any){result = true}}); 
     if(typeof action !== 'function' && result === true){return true}
     else if(typeof action !== 'function' && result === false){return false}
     
     var isTrue = false;
     var isFalse = true; 
     
     each(collection, function(v, i, c){ 
         if(action(v, i, c)){isTrue = true}
         else{isFalse = false}
     });
     
     if(isTrue){return true}
     else if(!isFalse){return false} 
}
module.exports.some = some;

/**
 * reduce:takes in a collection, a function, and a seed. Iterates through the collection,
 * if seed exists we use it to iterate, if seed does not exist it is created and set to the
 * first element of collection. Returns the seed.
 * 
 * // PARAMETERS //
 * @param {Array or Object} collection: contains all elements to be passed through 
 * @param {Function} func: contains the function to be performed on each element
 * @param {Number} seed: not required, if not given populated by the first element 
 *                       of the collection
 * // RETURN //
 * @return seed: gives the seed
 * // EXAMPLES //
*/
function reduce(collection, func, seed){
      //iterating through the collection
    each(collection, function(element, index, collection){
       
        if(seed === undefined){seed = collection[0]}
        
        else{seed = func(seed, element, index)}
    });
    return seed;
}
module.exports.reduce = reduce;

/**
 * extend: given an unlimited number of object parameters, copies every element 
 * of the input object into the first object. Returns the update on the first object.
 * 
 * // PARAMETERS //
 * @param {Object} massObj: initial object, may be empty, will be used to contain 
 *                          all other object elements passed in
 * @param {Object} obj2: secondary object, may be passed into massObj
 * 
 * // RETURN //
 * @return massObj: gives the first object parameter with all subsequent object 
 *                  elements copied into it
 * // EXAMPLES //
*/
function extend(massObj, obj2){
     
    each(arguments, function(obj, index, args){
        
        if(index > 0){
           each(obj, function(value, key, obj){
               massObj[key] = value;
           });
        }
    });
    return massObj;
}
module.exports.extend = extend;