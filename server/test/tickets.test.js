const chai = require("chai");
const chaiHttp = require("chai-http");
const { response } = require("express");
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
          {
            auth: {
              username: 'jpatel82@asu.edu',
              password: 'Patel@0077'
            },
          }
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

    // it("Should get the next 25 tickets (26 - 50)", (done) => {
    //   chai
    //     .request(server)
    //     .get("/tickets")
    //     .end((err, res) => {
    //       res.should.have.status(200);
    //       chai
    //         .request(server)
    //         .get("/tickets")
    //         .query({ next: true, cursor: res.body.data.meta.after_cursor })
    //         .end((errNested, resNested) => {
    //           resNested.should.have.status(200);
    //           resNested.body.data.tickets.should.be.an("array");
    //           resNested.body.data.tickets.should.to.have.length("25");
    //           resNested.body.data.tickets[0].id.should.equal(26);
    //           resNested.body.data.tickets[24].id.should.equal(50);
    //         });
    //       done();
    //     });
    // });
  });
  describe("GET /ticket/:id", () => {
    const ticketId = 6;
    it("Should get a single ticket of ID 6", (done) => {
      chai
        .request(server)
        .get(`https://zcccodingchallenge231.zendesk.com/api/v2/tickets/${ticketId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.ticket.should.be.an("object");
          res.body.data.ticket.id.should.equal(ticketId);
          done();
        });
    });
    it("Should get a 404 (ticket with id doesn't exist)", (done) => {
      chai
        .request(server)
        .get("https://zcccodingchallenge231.zendesk.com/api/v2/tickets/105")
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
    it("Should get a 400 (ticket with invalid id)", (done) => {
      chai
        .request(server)
        .get("https://zcccodingchallenge231.zendesk.com/api/v2/tickets/xyz123")
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
