# Why Should I Use TypeScript?

TypeScript is a statically typed superset of JavaScript that brings several advantages to the table. Here are some reasons why you should consider using TypeScript in your projects:

## Strong Typing

JavaScript is a loosely typed language, which means you don't need to explicitly specify variable types. While this flexibility can be convenient, it can also lead to bugs that are hard to catch during development. TypeScript allows you to specify types for variables, function parameters, and return values, making it easier to understand and enforce the types of data being used in your code.

## Improved Code Readability

In JavaScript, function parameters and variables don't have any built-in type information. Developers often have to rely on documentation or guess based on the implementation of functions and variables. TypeScript adds a layer of self-documentation to your code by making types explicit. This makes it easier for developers to understand the intent and usage of different parts of the codebase.

## Early Error Detection

One of the significant advantages of TypeScript is its ability to catch type-related errors at compile-time rather than runtime. This means that you can catch and fix issues before your code ever runs, reducing the likelihood of runtime errors that can be difficult to debug.

## TypeScript Compiler

TypeScript code is transpiled into JavaScript using a compiler. This compilation step ensures that TypeScript is converted into JavaScript that can run in any environment where JavaScript is supported. This means you can use TypeScript in both frontend and backend development, as well as with popular frameworks and libraries.

## Type Assignment

In TypeScript, you can assign types explicitly or rely on type inference:

### Explicit Type Assignment

```typescript
let firstName: string = "Dylan";
```

### Implicit Type Assignment

```typescript
let firstName = "Dylan";
```

### Error In Type Assignment

```typescript
let firstName: string = "Dylan"; // type string
firstName = 33; // attempts to re-assign the value to a different type
```

## TypeScript Special Types

### Type: any
any is a type that disables type checking and effectively allows all types to be used.

```typescript
let variable: any = true;
variable = "string"; // no error as it can be "any" type
Math.round(variable); // no error as it can be "any" type
```
### Type: unknown
unknown is a similar, but safer alternative to any.

TypeScript will prevent unknown types from being used, as shown in the below example:


```typescript
let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting

```

### Type: never
never effectively throws an error whenever it is defined.


```typescript
let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

```
<span style="background-color: yellow;">never is rarely used, especially by itself, its primary use is in  <span style="color:red;">advanced generics</span>.
</span>

### Type: undefined & null
undefined and null are types that refer to the JavaScript primitives undefined and null respectively.



```typescript
let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

```
<span style="background-color: pink; ">These types don't have much use unless <span style="color:red;">strictNullChecks</span> is enabled in the  <span style="color:red;">tsconfig.json</span> file.


</span>

# TypeScript Arrays
TypeScript has a specific syntax for typing arrays.

```typescript
const names: string[] = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
```

### Readonly


The readonly keyword can prevent arrays from being changed.


```typescript
const names: readonly string[] = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
```

# TypeScript Tuples

## Typed Arrays

A tuple is a typed array with a pre-defined length and types for each index.

Tuples are great because they allow each element in the array to be a known type of value.

To define a tuple, specify the type of each element in the array:

```typescript
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

```
```typescript
// define our tuple
let ourTuple: [number, boolean, string];

// initialized incorrectly which throws an error
ourTuple = [false, 'Coding God was mistaken', 5];

```

### Readonly Tuple
A good practice is to make your tuple readonly.

Tuples only have strongly defined types for the initial values:
```typescript
// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);
```
```typescript
// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
ourReadonlyTuple.push('Coding God took a day off');

```

# Typescript Objects

```typescript
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};

```

### Example without an optional property
```typescript
const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota",
};
car.mileage = 2000;

```
### Example with an optional property

```typescript
const car: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
car.mileage = 2000;

```


## Type Aliases
Type Aliases allow defining types with a custom name (an Alias).

Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
```typescript
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};
```

# TypeScript Functions
### Return Type
The type of the value returned by the function can be explicitly defined.

```typescript
function getTime(): number {
  return new Date().getTime();
}

function printHello(): void {
  console.log('Hello!');
}


// Function parameters are typed with a similar syntax as variable declarations.
function multiply(a: number, b: number) {
  return a * b;
}

//By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.

// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

// For parameters with default values, the default value goes after the type annotation:
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

```

# TypeScript Casting


There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
Casting is the process of overriding a type.
```typescript
let x: unknown = 'hello';
console.log((x as string).length);

```
### Casting with <>

```typescript
let x: unknown = 'hello';
console.log((<string>x).length);
```
```typescript

```
```typescript

```