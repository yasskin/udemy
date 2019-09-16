# Section Three: Primitive Types and Expressions

## Variables and Constants

* Variable: A Name given to a storage location in memory where we can store a value
* Constant: an immutable value

## start with a type, followed by an identifier

* int number;

* int - type
* number - identifier
* semicolon

## C# is case sensitive

* const float Pi = 3.14f;

* We cannot define a constant without setting its value.

# Identifiers
* cannot start with a number
* cannot include whitespace
* cannot be a reserved keyword
* use meaningful names

# Naming Conventions in C language family
* Camel Case: firstName
* Pascal Case: FirstName
* Hungarian Notation: strFirstName (not used in C#)

* For local variables: Camel Case int numberOne;
* For constants use: Pascal Case int MaxZoom = 5;

## Primitive Types

* Real Numbers

* double is the default data type

* float number = 1.2f; // suffix 'f' tells the compiler to treat it as a float
* decimal number = 1.2m

## Non-Primitive Types

* String
* Array
* Enum
* Class

### 3.15 Overflowing

checked
{
  byte number = 255;
  number = number + 1;
}

### 3.16 Scope

* Scope is where a variable has meaning and is available

### 3.18 Type Conversion
* Implicit type Conversion
* Explicit type conversion (casting)
* Conversion between non-compatible types

* Implicit type Conversion
```
byte b = 1 // 00000001
int i = b; // 00000000 00000000 00000000 00000001
```
* Explicit type Conversion (Casting)
```
int i = b; // 00000000 00000000 00000000 00000001
byte b = (byte)i // 00000001

float f = 1.0f;
int i = (int)f;
```
* Non-Compatible Types
```
string s = "1";
int i = (int)s; // won't compile - cannot use casting

string s = "1";
int i = Convert.ToInt32(s);
int j = int.Parse(s);
```
## Convert Class
* ToByte()
* ToInt16() // to short
* ToInt32() // to an int
* ToInt64() // to a long

### 3.20 Operators

1. Arithmetic Operators
2. Comparison Operators
3. Assignment Operators
4. Logical Operators
5. Bitwise Operators

result of comparison expression is always a boolean expression (true or false)

### 3.23 Comments

* single-line comments // here is a single-line comment
* multi-line comments //  
```
/*
Here is a multi-line comment
That runs to two lines
*/
```
more common today in C#
```
// Here is a multi-line comment
// That runs to two lines
```

* Use Comments to explain the whys, hows, constraints, etc but not the whats (the code should explain the what)

### 3.24 Primitive Types
