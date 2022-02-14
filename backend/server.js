const express = require('express');
const app = express();
const port = 3001;
const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new mongodb.MongoClient(url);
const dbs_name = 'admin';
const cors = require('cors')

let _id = null;
let db = null;
let usersData = null;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function getData() {
    await client.connect();
    db = client.db(dbs_name);
    usersData = db.collection('UserLists');
}

//GET
app.get('/api/users', async (req, res) => {
    const userData = await usersData.find({}).toArray();
    res.status(201).json(userData).end();
});

//POST
app.post('/api/users/add', async (req, res) => {
    const { username, displayName, phone } = req.body;
    if (username !== "" && displayName !== "" && phone !== "") {
        await usersData.insertOne(req.body);
        res.status(201).end();
    } else {
        res.status(400).end();
    }
})

//PUT
app.put('/api/users/:id', async (req, res) => {
    try {
        await usersData.findOne({ _id: mongodb.ObjectId(req.params.id) });
        const { username, displayName, phone } = req.body;
        if (username !== "" && displayName !== "" && phone !== "") {
            await usersData.updateOne({ _id: mongodb.ObjectId(req.params.id) }, { $set: req.body });
            res.status(201).end();
        } else {
            res.status(400).end();
        }
    } catch (err){ 
        res.status(400).end();
    }

});

//DELETE
app.delete('/api/users/:id', async (req, res) => {
    try {
        await usersData.deleteOne({ _id: mongodb.ObjectId(req.params.id) });
        res.status(204).end();
    } catch (e) {
        res.status(400).end();
    }
})

app.listen(port, async () => {
    getData();
    console.log(`Listening to http:/localhost:${port}`);
})