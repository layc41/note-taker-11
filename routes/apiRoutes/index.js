const router = require('express').Router();
const { createNote } = require('../../lib/notes.js');

let notes = require('../../db/db.json')

// returns notes in db
router.get('/notes', (req, res) => {
	res.json(notes);
});

// takes new notes and puts it into db
router.post('/notes', (req, res) => {
	// call function to save note to db
	const addNote = req.body;
	createNote(addNote);
	res.json(notes);
});

module.exports = router;