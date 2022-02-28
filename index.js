// To start, define a `employee` variable and assign it to an `Object` containing
// `name` and `streetAddress` keys; you can use whatever values you like. Use
// literal syntax to create your `Object`. Various updates will be applied to this
// variable (destructively and non-destructively) in this lab. :) 

// - `updateEmployeeWithKeyAndValue()`: this function should take in three
//   arguments: an `employee` `Object`, a `key` and a `value`. This function should
//   not mutate the `employee`; it should return a _new_ `Object` that has an
//   updated `value` for the `key` passed in. **Hint**: use the spread operator!

// - `destructivelyUpdateEmployeeWithKeyAndValue()`: this function should work the
//   same as `updateEmployeeWithKeyAndValue()` but it _should_ mutate the
//   `employee` `Object` passed in.

// - `deleteFromEmployeeByKey()`: this function should take in a `employee`
//   `Object` and a `key`. It should delete the property with that `key` from the
//   `employee` `Object`. This should not mutate the original `employee` `Object`;
//   it should return a _new_ `Object` that doesn't include the identified
//   key-value pair. **Hint**: use the spread operator!

// - `destructivelyDeleteFromEmployeeByKey()`: this function should work the same
//   as `deleteFromEmployeeByKey()` but it _should_ mutate the `employee` `Object`.

const employee = {
    name:"Sam",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {

    const newEmployeeObj = {...employee, key, value};

    newEmployeeObj[key] = value;

    return newEmployeeObj;
    return employee;
};