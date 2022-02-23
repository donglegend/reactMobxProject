import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

var mock = new MockAdapter(axios);

export default mock;