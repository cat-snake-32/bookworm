//TDD:
// Identify the feature to be added
// Write a test that tests that the feature exists and works
// Run your tests and ensure that your new test is failing (because the feature doesn't exist yet)
// Write the code to implement your feature by following the errors, and pass the test
// Repeat

// [ ] optionally, run npm install -g jest to be able to run jest <filename> to run individual tests

const request = require('supertest');

const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });

  describe('/books/all', () => {
    describe('GET', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .get('/books/all')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });

      // For this test, you'll need to inspect the body of the response and
      // ensure it contains the markets list. Check the markets.dev.json file
      // in the dev database to get an idea of what shape you're expecting.
      

      // it('markets from "DB" json are in body of response', () => {
      //   return request(server)
      //     .get('/markets')
      //     .expect('Content-type', /application\/json/)
      //     .then((res) => {
      //       expect(res.body).toEqual([])
      //     });
      // });
    });
});
});
