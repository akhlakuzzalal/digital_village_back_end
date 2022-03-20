const supertest = require('supertest');
const mockApp = require('../mockApp');

const api = supertest(mockApp);

module.exports = api;
