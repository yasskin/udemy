# REACT BASICS

## The Birth of React.js

- Released by Facebook in 2013
- In 2014, Google rewrote Angular
- Success of React

1. Virtual DOM. Dont' touch the DOM. I'll do it - Declarative paradigm - One big JS object describes how the page should look.
2. Reusable Components. Build websites like Lego blocks.
3. One Way Data Flow: Unidirectional so it's easier to debug.
4. UI Libary, the rest is up to you. Not really a framework.

## Imperative paradigm: Directly change the app. DOM changes are intensive; Repaint and reflow. Expensive operation.

## Declarative paradigm: Declare what the state or data of our app should be like. React takes the blueprint of how things should look and does everything on the DOM for you.

- Based on the data, state, change everything for you

* Virtual Dom: A tree-like object that gives React a blueprint of how it should update the actual DOM.

* React 360: Create 360 and VR experiences using React
* https://facebook.github.io/react-360/
* React Desktop: bring a native desktop experience to the web for macOS and Windows 10
* https://reactdesktop.js.org/


## Functional Components

* Functional components, unlike classes, do not have access to state or lifecycle methods
* Functional components is just a component that gets some props and retusn some html
* 