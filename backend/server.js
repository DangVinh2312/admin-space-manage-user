const express = require('express');
const app = express();
const port = 3001;
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
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

app.get('/api', async (req, res) => {
    const userData = await usersData.find({}).toArray();
    const users = userData.map((user) => {
        return {
            _id: user._id,
            username: user.username,
            displayName: user.displayName,
            phone: user.phone
        };
    });

    res.status(201).json(users).end();
});

app.listen(port, async () => {
    getData();
    console.log(`Listening to http:/localhost:${port}`);
})