const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');

app.get('/', (req, res) => {
    console.log("Request for all tickets");
    let arr;
    axios.get(`https://zcccodingchallenge231.zendesk.com/api/v2/tickets.json`,{ 
        auth: {
            username: 'jpatel82@asu.edu',
            password: 'Patel@0077'
        },
    })
    .then(result => res.json(result.data))
})

app.get('/id', (req, res) => {
    console.log("Request for particular ticket");
    let arr;
    axios.get(`https://zcccodingchallenge231.zendesk.com/api/v2/tickets/${req.query.ticketId}`,{ 
        auth: {
            username: 'jpatel82@asu.edu',
            password: 'Patel@0077'
        },
    })
    .then(result => res.json(result.data))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})