# The MERN Stack - Theory

## The Big Picture

- React is responsible for the presentation and user interface, what runs in the browser
- Node.js - Business Logic, File Storage
- Express - sends DB querries to the database server
- mongoDB - Database Server - Persistent Data Storage
-

Client and Browser communicate with Requests and Responses in a JSON format
JSON - JavaScript Object Notation

10. Diving Into the FrontEnd

## The Frontend (Client)

- React SPA
- Routes with react-router-dom

- State is data that influences what is rendered on the screen

## The Backend (Server)

- Decoupled Ends
- Backend == API
- REST - Representational State Transfer
- GraphQL API

### REST API - uses a combination of URLs or paths and HTTP Verbs to build endpoints to trigger different actions

### GraphQL API - One URL and One HTTP Verb - One endpoint that accepts query commands; the body contains the query expression that describes the operationd you want to accept.

### From the React App, you always send requests to the Node/Express APP, which then talks to the database

### REST & Http Methods (Http Verbs)

1. Get: Get a resource
2. Post: Post a resource, create or append
3. Put: create or overwrite
4. Patch: Update parts of an existing resource
5. Delete: Delete a resource

- Developer maps the keywords / verbs to actions.
- Verb path combination does not dictate what happens on the server

### Rest vs GraphQL

- Typically one single endpoint: POST/graphql
- The request has a body, which contains a query expression, which is parsed by the server.

```
{
  query { // operation type
    user { // operation endpoint
      name // requested fields
      age
    }
  }
}
```

https://academind.com/learn/node-js/graphql-with-node-react-full-app/

## REST API

- Request path + http method (="endpoint") identify a resource / action on the server
- API is stateless and decoupled from any frontend - any app can talk to the API
- The most common kind of API because of its ease of use

## GraphQL API

- Query expression identifies a resource and action
- API is stateless and decoupled from any frontend
- Popular but less common, because you need to learn the query language

## Two Ways of Connecting Node + React

- Server hosts Node API + React SPA
  - Node (Express) API handles incoming requests
  - Requests not targeting the API routes return React SPA
  - Data is exchanged between React app and Node API in JSON format
- Two separated servers
  - Node (Express) API handles incoming requests
  - React SPA served from separate static host
  - Data is exchanged between React app and Node API in JSON format

In both cases: Logically Separated Apps (SPA + API)
