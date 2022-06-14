'use strict';

const express = require(`express`);
const request = require(`supertest`);

const search = require(`./search`);
const DataService = require(`../data-service/search`);

const {HttpCode} = require(`../../constants`);
const mockData = require(`./_stubs/search.json`);

const app = express();
app.use(express.json());
search(app, new DataService(mockData));

describe(`API returns offer based on search query`, () => {
  let response;

  beforeAll(async () => {
    response = await request(app)
      .get(`/search`)
      .query({
        query: `Продам отличную подборку фильмов на VHS`
      });
  });

  test(`Status code 200`, () => expect(response.statusCode).toBe(HttpCode.OK));
  test(`1 offer found`, () => expect(response.body.length).toBe(1));
  test(`Offer has correct id`, () => expect(response.body[0].id).toBe(`YIbmbQ`));
});

describe(`Search API - negative case: nothing is found and`, () => {

  let response;

  beforeAll(async () => {
    response = await request(app)
      .get(`/search`)
      .query({
        query: `Продам свою душу`
      });
  });

  test(`API returns code 200`, () => expect(response.statusCode).toBe(HttpCode.OK));
  test(`Body is empty`, () => expect(response.body.length).toBe(0));
});

describe(`Search API - negative case: query string is absent`, () => {
  test(`API returns 400`, () => request(app)
      .get(`/search`)
      .expect(HttpCode.BAD_REQUEST)
  );
});
