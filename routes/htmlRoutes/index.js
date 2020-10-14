const path = require('path');
const router = require('express').Router();

// gets index.html when requested
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// gets notes when requested
router.get('/notes', (req, res) => {
	res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// exports routes back to the server
module.exports = router;