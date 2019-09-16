# Section Four: Non-Primitive Types

## Classes

* Classes combine related variables (fields) and functions (methods) together

* An object is an instance of the person class

## Declaring Classes

public class Person
{
  public string Name;

  public void Introduce()
  {
    Console.WriteLine("Hi, my name is " + Name);
  }
}

## Creating Objects (or instances of classes)

int number;

Person person = new Person();

var person = new Person(); // shorter version using var

person.Name = "Noah";

person.Introduce();

## Static Modifier
```
public class Calculator
{
  public static int Add(int a, int b)
  {
    return a + b;
  }
}

int result = Calculator.Add( 1, 2 );

class Program
{
  static void Main()
  {  
  }
}
```
static methods are available from the class and not the objects

## Structs or Structure

public struct RgbColor
{
  public int Red;
  public int Green;
  public int Blue;
}

* most of the time you use Classes not structures

## Arrays

Array : A data structure to store a collection of variables of the same type;

int number 1;
int number 2;
int number 3;

int[] numbers = new int[3];

int[] numbers = new int[3] { 1, 2, 3 };

* an array is an object behind the scenes.
* first element has the index of zero

## 4.31 Strings

String: A Sequence of characters. e.g. "Hello World" - we surround strings with double quotes

string literal:
```
string firstName = "Noah";
```
Use string concatenation
```
string name = firstName + " " + lastName;
```
Using string format:
```
string name = string.Format("{0} {1}", firstName, lastName);
```
Using string join
```
var numbers = new int[3] { 1, 2, 3 };

string list = string.Join(",", numbers);
```
string elements
```
string name = "Noah";

char firstChar = name[0];
```
Strings are Immutable
* Once you create them, you cannot change them
* Methods that modify strings always return a new string

Escape Characters:
* \n - new line
* \t - tab
* \\ - backslash
* \' - single quotation mark
* \" - double quotation mark

## 4.32 Verbatim Strings
```
string path = "c:\\projects\\project1\\folder1";

string path = @"c:\projects\project1\folder1";
```
## 4.33 Enum :

* Enum : A set of name / value pairs (constants)

* Use Enum where you have several related constants

## Reference Types and Value types

* We have Structures and Classes

* All primitive types are structures
* Arrays and Strings are Classes

Structures are Value Types
Classes are Reference Types (you need to allocate memory - with "new" operator ). Memory is allocated on heap. Garbage collected by CLR.

var anotherObject = someObject;
