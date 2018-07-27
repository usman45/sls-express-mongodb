const Adapter = require("enzyme-adapter-react-16");
require("enzyme").configure({ adapter: new Adapter() });

/* Create mocks for testing purposes when run in CI */
if (process.env.CI) {
  console.log = jest.fn();
  console.warn = jest.fn();
  console.error = jest.fn();
}

/* We use node-fetch for tests to be compliant with nock */
global.fetch = require("node-fetch");
