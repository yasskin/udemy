# Angular2 and NodeJS

NodeJS is the language running on the server
Angular2 is the language running on the browser/client
Express is the framework built on top of NodeJS.
Typescript is the language used for Angular2

## Course Structure

## Commands

* Navigate to the project folder:
```
> npm install

> npm run gulp

```
* First start the mongoDB / To run the Mongo server:
```
> brew services start mongodb
```
Or go to <mongodb-install-directory>/bin directory:
```
> ./mongod
```
You can shut down the mongo db by
```
> brew services stop mongodb
```
For more options
```
> brew info mongodb
```
* If you want to run the mongo shell client:
```
> mongo
```
Or go to <mongodb-install-directory>/bin directory
```
> ./mongo
```
* Next, after the mongo database is up, run the node.js server. To start the server, navigate to the seed-project folder and run:
```
$ npm start
```
* Then, go to:
http://localhost:3000/

* Lastly, in a new tab, run Webpack for front end code watches files for changes and recompiles typescript
```
$ npm run build
```

Mongo ? Commands:
```
> use node-angular
> show collections
messages [example]
users
> db.messages.find()
```
mongoose - a package that allows us to define schemas & models, validation, intuitive database operations
```
npm install --save mongoose

```
MongoDB Shell
```
use node-angular
db.users.find()
```

HTTP Requests

Get - Get a resource
Post - Create a resource on the server
Patch - Change an existing resource on the server
Put - Replace a resource on the server
Delete - Delete a resource

Data

Request: Has a header e.g. Content Type & Body (w/data)
Response: Has a header e.g. Content Type & Body (w/data)

Request
has body / params / query

Data Format
JSON - lightweight format - JS Object as a string
Plain text
File
Url encoded

Angular 2 and Components

The application is built out of these components / modules.












.
