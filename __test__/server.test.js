// //import {listening} from'../src/server/server';
// const listening = require('../src/server/server');

// describe("Testing expres server", () => {
//     test("Testing the listening function ", async () => {
//         await expect(listening).toBeDefined();
//     })
// });

const request = require("supertest");
const app = require("../src/server/server.js");

describe("Test the root", () => {
    test("Test the GET method / ", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
    });
  });