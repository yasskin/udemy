C# Fundamentals

1. C# vs .NET
2. CLR (Common Language Run-time)
3. Architecture of .NET Applications
4. Our First C# Application


1. C# is a programming language

* .NET is a framework
1. CLR (Common Language RunTime)
2.

* C# is complied into IL Code or Intermediate Language Code independent of the computer on which it is running

* CLR is an application whose job is to translate Jit Just-in-time compilation

2. 2.8 Architecture of .NET Applications

* Classes collaborate with each other
* Class is a container that has Data or Attributes (State of Application) and Functions or Methods (Behavior)

* Namespace is a container for related classes
* Assembly (DLL or EXE) is a container for related namespaces ( a file )
* DLL dynamically linked library
* An Application has one or more assemblies

## To write C# code, you need Microsoft Visual Studio. Visual Studio comes in different editions:
* Community, Professional and Ultimate.

## As an individual, or a student or a small team, you can download Visual Studio Community Edition
for free and build your free or paid apps with it. To download Visual Studio Community Edition,
please visit:

* https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx

Summary
Section 2, Lecture 12
So in this section, you learned the basics of C#.

C# vs .NET

C# is a programming language, while .NET is a framework. It consists of a run-time environment (CLR) and a class library that we use for building applications.

CLR

When you compile an application, C# compiler compiles your code to IL (Intermediate Language) code. IL code is platform agnostics, which makes it possible to a take a C# program on a different computer with different hardware architecture and operating system and run it. For this to happen, we need CLR. When you run a C# application, CLR compiles the IL code into the native machine code for the computer on which it is running. This process is called Just-in-time Compilation (JIT).

Architecture of .NET Applications

In terms of architecture, an application written with C# consists of building blocks called classes. A class is a container for data (attributes) and methods (functions). Attributes represent the state of the application. Methods include code. They have logic. That's where we implement our algorithms and write code.

A namespace is a container for related classes. So as your application grows in size, you may want to group the related classes into various namespaces for better maintainability.

As the number of classes and namespaces even grow further, you may want to physically separate related namespaces into separate assemblies. An assembly is a file (DLL or EXE) that contains one or more namespaces and classes. An EXE file represents a program that can be executed. A DLL is a file that includes code that can be re-used across different programs.

In the next section, you'll learn about basics of the C# language, including variables, constants, type conversion and operators.
