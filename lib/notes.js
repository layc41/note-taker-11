const fa = require('fs');
const path = require('path');

let notes = require('..db/db.json');

//creates a new note and adds it to the database
function createNote(body) {
    const note = body;
    
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return note;
}

module.exports = createNote;