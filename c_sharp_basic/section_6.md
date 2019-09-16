# Section Six : Arrays

# Types of Arrays in C#

# Array Methods

## Array : represents a fixed number of variables of a fixed Types

## C# Has two types of arrays: single dimension and multi dimension arrays

single dimension arrays

var numbers = new int[5] { 1, 2, 3, 4, 5 };

multi-dimension arrays

1. Rectangular array
2. Jagged array

## Syntax (Rectangular 2D)

var matrix = new int[ 3, 5];

var colors = new int[3, 4, 5];

Jagged

var array = new int[3][];

array[0] = new int[4];
array[1] = new int[3];

Demo: Arrays
