const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors=require('cors')
const Dbconnect = require('./DB/db');
const contactModal = require('./Modal/contactModal');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
Dbconnect();

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, mobile } = req.body;
        const newContact = await contactModal.create({ name, email, mobile });
        res.json(newContact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


app.listen(3001,()=>{
     console.log('server is running')
})