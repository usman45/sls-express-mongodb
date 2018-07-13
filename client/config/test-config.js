const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const axios = require("axios");

Enzyme.configure({ adapter: new Adapter() });

jest.mock("axios");

require("../src/tests/mocks").setupMocks();
