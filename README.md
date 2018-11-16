# meteor_react_material

A simple boilerplate to start projects with Meteor, React, and Material-UI.

## Installed Components
* Meteor
* React
* Material-UI
* Eslint
* Prettier
* Jest
* Storybook
* TODO / TBD
    - React Router
    - Redux
    - Redux Forms
    - Flow

## Tech Notes
* Roboto Font is included via link in main.html

## Testing

### Notes
* The intention is to be able to use...
    + 'jest / enzyme' for unit testing
        - test logic, function and module results
        - typically mocking systems not under test, 3rd party and meteor modules
    + 'meteor test --full-app' for complex integration testing
        - test module integration
        - test meteor / environment behavior (mocking APIs / modules as needed) 
        - test behavior across client / server connection (mocking " " )
        - test actual external API behavior as needed
    + 'chimp' for end to end testing
        - test UI and application flow
    
> NOTE: It is more common or advantageous to run integration tests using 'meteor test --full-app'. Although load time is slightly slower, it does allow tests to be run across the client server divide. At this time, there is not a known significant benefit for running non '--full-app' integration tests in addition to running the '--full-app' integration tests. (running both, takes significantly longer)

### Test Runner File Naming Conventions

#### Default test file names / locations for Jest, Meteor, and Chimp
* [jest](http://facebook.github.io/jest/docs/configuration.html#testregex-string):
  - loads all test files: `(/tests/.*|(\\.jest\\.jsx?$)`
* ['meteor test'](https://guide.meteor.com/testing.html#test-modes): (NOTE: Typically not used for testing. Use --full-app.)
  - loads all test files: `"*.test[s].js[x]"` or `"*.spec[s].js[x]"`
      + ignores any files in any `tests/` directory
  - DOES NOT eagerly load application code, only modules imported by tests
* ['meteor test --full-app'](https://guide.meteor.com/testing.html#test-modes): 
  - loads all test files: `"*.app-test[s].js"` or `"*.app-spec[s].js"`
      + ignores any files in any `tests/` directory
  - DOES eagerly load application code, as meteor build normally would
* [chimp](https://chimp.readme.io/docs/command-line-options):
  - loads end to end tests from: `tests/end-to-end`
  - test files should be named `*_spec.js`
  - __RECOMMENDED__: run meteor server in test mode, this uses the meteor test database instead of development database (there is a package.json script to do so)

#### Project test file location and naming convention
 * The following convention allows you to colocate test files in the same or sub directory of the system under test, without the test runners picking up the incorrect test file
    + place all meteor test files in the same directory as the module / system under test
    + place all jest unit tests in 'tests' sub directory of the module / system under test
        - set [jest test filenames (testRegex)](http://facebook.github.io/jest/docs/configuration.html#testregex-string) to `/tests/.*\\.jest\\.jsx?$`
        - jest file name convention `filename.jest.js[x]`
    + place all chimp tests in 'tests' sub directory of the project root
        - NOTE: create additional sub directories in this directory to organize tests
 * example:
    + `<project-root>/.../system-under-test/tests/Navbar.jest.jsx` (tests run by __jest__ only)
    + `<project-root>/.../system-under-test/Navbar.tests.jsx` (tests run by __'meteor test'__ only)
    + `<project-root>/.../system-under-test/calledMethods.app-tests.js` (tests run by __'meteor test --full-app'__ only)
    + `<project-root>/tests/end-to-end/.../*_spec.js` (tests to be run by __'chimp'__)
    
  NOTE: placing all 'non meteor application' code, such as tests and storybook stories, in `tests/` directories prevents meteor server from restarting when in development mode

#### Assertions
Each testing framework comes with a default, or set of available assertion libraries. To avoid the confusion of mixing similar libraries (e.g., jest's jasmine based expect & practicalmeteor's chai based expect), use the following specified assertion libraries for each test framework.
* For unit / jest testing, use the jest provided assertions [(expect)](https://facebook.github.io/jest/docs/expect.html).
* For integration testing (`meteor test`), use practicalmeteor:chai assert.

### Jest
#### Configuration Settings
* NOTE: setting 'clearMocks' to true, which clears mock call information between tests
#### Mocking Meteor packages
* Many commonly used meteor packages were mocked, by creating mock modules, and using the moduleNameMapper configuration setting
    + some details and light exmaples can be seen on this [meteor forum discussion](https://forums.meteor.com/t/mocking-meteor-package-imports-in-jest/27780/9)
* Other helpful meteor mocking resources
    + [jest configuration docs, moduleNameMapper](http://facebook.github.io/jest/docs/configuration.html#modulenamemapper-object-string-string)
    + [example jest meteor mocks (some usable examples)](https://github.com/Astrocoders/jest-meteor-mocks)
* One specific, complex example, was mocking SimpleSchema. It took some effort, and trial and error, to mimic being able to reference a returned function from an inline instantiated object
    + eg  `const myValidator = new SimpleSchema({...}).validator();`
    + see the aldeed:simple-schema.js mock for validator() 
#### Snapshots
* when initially creating, or even updating, __be sure to examine the contents of the snapshot file__
    - it is possible to capture incorrect code or even 'undefined' in cases
* snapshot files are to be kept in the default location, a `__snapshots__` subdirectory
    
### Chimp
* Install chimp globally
    - this prevents an in issue sometimes arising when deploying to galaxy (an error installing chromedriver)
    - also, as of 10/19/17, yarn was failing on chimp install (so easier to install globally using 'npm')
* Continuous Integration
    - in order for all test tiers to succeed, it 'seemed' a pause of around 5 seconds was needed between the integration and end-to-end tests. Else, the end-to-end test would get random failures (timeouts, elements not found)
* NOTE (strange behavior):
    - when searching two times in a row in a test, for an element that is wrapped in a createContainer, the second search may fail
        + e.g. waitForExist(someButton), then click(someButton) may result in an 'element not found on page' error on the click call

## Storybook
* Story file location and naming convention
    - story file names are to follow the convetion `filename.stories.js`
    - story files are to be placed in a `tests/__stories__/` subdirectory of the module / component      
