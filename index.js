const express = require('express');
const server = express();

server.listen(4000, () => {
    console.log('=== server listening on port 4000');
});

//GET route handler
server.get('/', (req, res) => {
    res.send('here it is');
});