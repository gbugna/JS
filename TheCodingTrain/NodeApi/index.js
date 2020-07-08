const express = require("express");
const app = express();
const Datastore = require('nedb');


app.listen(3000);
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

const db = new Datastore('database.db');
db.loadDatabase();


app.get('/api', (req, res) => {

 db.find({}, (err, data) => {

res.json(data);
 })


});



app.post('/api', (req, res) => {

const data = req.body;
const timestamp = Date.now();
data.timestamp = timestamp;
db.insert(data);
res.json(data);
});
