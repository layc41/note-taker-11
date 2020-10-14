// require express
const express = require('express');
//instaniate the server
const app = express();
// assigns port as 3001 or another if available
const PORT = process.env.PORT || 3001;

//require routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// middleware
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// chain a listen to the server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})

