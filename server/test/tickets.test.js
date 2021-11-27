const chai = require("chai");
const chaiHttp = require("chai-http");
const config = require("./configurations/config");
const server = require("../index");

chai.should();
chai.use(chaiHttp);

describe("Tickets API", () => {
  // Test the GET all tickets route
  describe("GET /tickets", () => {
    it("Should get first 25 tickets", (done) => {
      chai
        .request(server)
        .get("https://zcccodingchallenge231.zendesk.com/tickets.json?page[size]=25", 
          config
        )
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");
          res.body.data.tickets.should.be.an("array");
          res.body.data.tickets.should.to.have.length("25");
          res.body.data.tickets[0].id.should.equal(1);
          res.body.data.tickets[24].id.should.equal(25);
          done();
        });
    });
  });
  describe("GET /ticket/:id", () => {
    const ticketId = 6;
    it("Should get a single ticket of ID 6", (done) => {
      chai
        .request(server)
        .get(`https://zcccodingchallenge231.zendesk.com/api/v2/tickets/${ticketId}`, config)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.ticket.should.be.an("object");
          res.body.data.ticket.id.should.equal(ticketId);
          done();
        });
    });
    it("Should get an Error 404 (As the ticket with this ID doesn't exist)", (done) => {
      chai
        .request(server)
        .get("https://zcccodingchallenge231.zendesk.com/api/v2/tickets/105", config)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
    it("Should get an Error 400 (ticket with invalid id)", (done) => {
      chai
        .request(server)
        .get("https://zcccodingchallenge231.zendesk.com/api/v2/tickets/xyz123", config)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
  describe("GET /*", () => {
    it("Should return 404", (done) => {
      chai
        .request(server)
        .get("/abc")
        .end((err, res) => {
          res.should.have.status("404");
          done();
        });
    });
  });
});
