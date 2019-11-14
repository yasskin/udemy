# Section Two: JavaScript Foundation

## JavaScript Engine

* Single Threaded Language
* Interpreted Language
* Brendan Eich created the early verion of SpiderMonkey JS Engine
  
## JavaScript Engine

1. Parser
2. AST - Abstract 
3. Interpreter
4. Profiler
5. Compiler
6. Optimized Code
7. Bytecode

// JavaScript Engine
```
funciton jsengine(code){
  return code.split(/\s+/)
}

jsengine('var a = 5')
```

## Interpreter
Works on the fly. 

## Compiler
Works ahead of time to create a translation and compiles down to a language that can be understood by the machine
Takes the program in JS and writes in a new programing language that is usually a lower level language

All languages have to be interpreted (run) and translated into machine code

//x86_64 machine code
gets compiled into its own native microcode


Babel is a Javascript compiler that takes your modern JS code and returns  browser compatible JS (older JS code).
Typescript is a superset of Javascript that compiles down to Javascript.

Both of these do exactly what compilers do: Take one language and convert into a different one!