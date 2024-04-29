
const { expect } = require('chai');
const request = require('request');

describe("Add Two Numbers API", function() {
  var url = "http://localhost:8080/addTwoNumbers/3/5"; L

  
  it("should return status 200", function(done) {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("should return the correct result", function(done) {
    request(url, function(error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.equal(8); 
      done();
    });
  });
});


describe("Add Two Strings API", function() {
  var url = "http://localhost:8080/addTwoNumbers/a/b"; 

  // Test case to check if the API returns status 400
  it("should return status 400", function(done) {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(400);
      done();
    });
  });

  
  it("should return null as result", function(done) {
    request(url, function(error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.be.null; 
      done();
    });
  });
});
