// require express
const express = require('express');
// require fs
const fs = require('fs')
//instaniate the server
const app = express();
// assigns port as 3001 or another if available
const PORT = process.env.PORT || 3001;
const notes = require('./db/db.json');
const path = require('path');


// middleware
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    note = req.body;
    notes.push(note);
    fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify([{note}], null, 2));
    res.json(req.body);
});

// chain a listen to the server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})

