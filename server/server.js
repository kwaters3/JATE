// imports
const express = require('express');

// create express server
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
require('./routes/htmlRoutes')(app);

// start server
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));

