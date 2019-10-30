const express = require('express');
const server = express();
const db = require('./data/hubs-model')

server.listen(4000, () => {
    console.log('=== server listening on port 4000');
});

server.use(express.json());

//GET route handler
server.get('/', (req, res) => {
    res.send('Home route');
});

server.get('/hubs', (req, res) => {
    db.find()
        .then(hubs => {
            res.status(200).json(hubs);
        })
        .catch(err => {
            res.status(500).json({
                message: err,
                success: false
            });
        });
});

//POST
server.post('/hubs', (req, res) => {
    const hubInfo = req.body;
    db.add(hubInfo)
        .then(hub) => {
            res.status(201).json({success:true, hub});
        }
        
});