# TITLE
This project uses [cypress](https://www.cypress.io/) to test for a black-box testing on web application.
Detected bugs in project can be found in [bugs](./docs/bugs.md)

# Docker Run
To simply run tests headless, only need to run the following command line (shell script):
```
./cy-run.sh
```
* Ensure that you have run permission with `chmod u+x ./cy-run.sh` command
* Note: To translate the docker command to docker compose

## Getting Started
A quick environment guide and how to get started running/writing tests.

#### Prerequisites
- [npm](https://www.npmjs.com/) installed as a default option.

#### Installing

After we have a working version of `npm`, we can start installing the project's dependencies.

```
npm install
```
#### Environment Variables
Create a `.env` file at the root of this project. You can find an example, and copy/paste them in [.env_example](./docs/.env_example). Update the values to reflect your environment.

#### Running the tests

- Running the tests headless:
```
npm run cypress:run
```
- Running the Cypress CLI:
```
npm run cypress:open
```

## Break down test structure 

### Page Object Model
[Page Objects Model](https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/) is an archtecture for e2e tests frameworks to ensure that:
- Design pattern architecture​
- Reuse of code​
- Clean code​
- Maintainability​
- Independence of tests

### Tests Tags
To prioritize and be able to run smoke x regression tests, the lib `@cypress/grep` is being used.
Add the argument `grepTags` to the run command or edit the env var `grep` with the desired tag. For example:
```
--env grepTags=@smoke
```
This will run only tests tagged as "smoke".
It is possible to use to filter by test name too.

## License
[MIT](https://choosealicense.com/licenses/mit/)
