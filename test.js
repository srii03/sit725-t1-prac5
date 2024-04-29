// Import required modules for testing
const expect = require("chai").expect;
const request = require("request");

// Test cases for '/addTwoNumbers' route
describe("Add Two Numbers API", function() {
    const url = "http://localhost:8080/addTwoNumbers/3/5";
    
    it("should return status 200", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it("should have statusCode key in body with value 200", function(done) {
        request(url, function(error, response, body) {
            const responseBody = JSON.parse(body);
            expect(responseBody.statusCode).to.equal(200);
            done();
        });
    });

    it("should return a number as result", function(done) {
        request(url, function(error, response, body) {
            const responseBody = JSON.parse(body);
            expect(responseBody.result).to.be.a('number');
            done();
        });
    });

    it("should return result equal to 8", function(done) {
        request(url, function(error, response, body) {
            const responseBody = JSON.parse(body);
            expect(responseBody.result).to.equal(8);
            done();
        });
    });

    it("should not return result equal to 15", function(done) {
        request(url, function(error, response, body) {
            const responseBody = JSON.parse(body);
            expect(responseBody.result).to.not.equal(15);
            done();
        });
    });
});

