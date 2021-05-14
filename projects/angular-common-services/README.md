# angular-common-services


### Services Built With
* [Angular 11.2.3](https://angular.io)

## Services Dependencies

    "jwt-decode": "3.1.2",
    "broadcast-channel": "3.5.3",

### Services Installation

1. Install dependencies
```sh
  npm i --save jwt-decode@3.1.2 broadcast-channel@3.5.3
```
2. Install library `npm i @openchannel/angular-common-services`

3. Add import to app.module
```sh
  OcCommonServiceModule.forRoot(environment),
```
4. Add property to environment.ts
```sh
  apiUrl: 'https://client-api.openchannel.io/',
```

## Services Development

### Connect library to project

1. `ng build angular-common-services`

2. `cd dist/angular-common-services`

5. `sudo npm link` Then copy result link.

4. In your angular project run:<br> `npm install file:<{absolute path to angular-common-components or copied path}/dist/angular-common-components>`

### Documentation Compodoc
Compodoc shows project structure. (modules, components, routes and etc.)
* Install NPM packages :<br>
  ``npm install``

* Generate Documentation :<br>

  ``npm run create-compodoc``

* Run Compodoc :<br>

  ``npm run start-compodoc``

* Documentation [http://localhost:8801](http://localhost:8801)
<!-- USAGE EXAMPLES -->
## Services Usage

<!-- CONTACT -->
## Services Contact

Project Link: [https://bitbucket.org/openchannel/angular-common-service-library/src/develop/](https://bitbucket.org/openchannel/angular-common-service-library/src/develop/)