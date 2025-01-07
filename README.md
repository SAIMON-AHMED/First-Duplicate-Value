# First Duplicate Value

## Description
The `firstDuplicateValue` function takes an array of integers and returns the first integer that appears more than once in the array. If no such duplicate exists, the function returns `-1`. This solution efficiently tracks seen elements using an object to achieve a linear time complexity.

## Function Signature
```javascript
function firstDuplicateValue(array) {
```

## Parameters
- `array` (Array<number>): An array of integers. It may contain positive, negative, or zero values.

## Returns
- (number): The first duplicate value found in the array. Returns `-1` if no duplicate is found.

## Time and Space Complexity
- **Time Complexity:** O(n), where `n` is the length of the input array. The function iterates over the array once.
- **Space Complexity:** O(n), due to the creation of an object to track seen elements.

## Algorithm Explanation
1. Create an empty object called `elementObj` to keep track of numbers that have been seen.
2. Loop through each element in the array:
   - If the current element already exists in `elementObj`, return that element as the first duplicate.
   - If the current element is not in `elementObj`, add it to the object and continue.
3. If the loop completes without finding a duplicate, return `-1`.

## Example
```javascript
const inputArray = [2, 1, 5, 2, 3, 3, 4];
const result = firstDuplicateValue(inputArray);
console.log(result); // Output: 2
```
### Explanation:
- The number `2` is the first value that appears more than once.

## Edge Cases
- Empty array: Returns `-1`.
- Array with no duplicates: Returns `-1`.
- Array with multiple duplicates: Returns the first duplicate encountered.

## Usage
```javascript
const { firstDuplicateValue } = require('./yourFileName');

const input = [4, 5, 6, 3, 4, 7];
const output = firstDuplicateValue(input);
console.log(output); // Output: 4
```

## License
This code is provided under the MIT License. Feel free to use, modify, and distribute it as needed.

