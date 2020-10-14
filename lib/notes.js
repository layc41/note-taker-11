const fs = require('fs');
const path = require('path');

let notes = require('../db/db.json');

//creates a new note and adds it to the database
const createNote = (body) => {
    const note = body;

    const addNote = {
        title: note.title,
        text: note.text
    }

    notes.push(addNote);
    
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    return note;
}

module.exports = { createNote };