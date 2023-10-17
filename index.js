const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes.js');
const authRoutes = require('./routes/auth.routes.js');
const itemRoutes = require('./routes/item.routes.js');
const orderRoutes = require('./routes/order.routes.js');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Initialize web sockets
const initializeChangeStream = require('./app/services/changeStreamService');
initializeChangeStream(server);

// Routes
app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api', itemRoutes);
app.use('/api', orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

server.listen(3001, () => {
    console.log('WebSocket server is running on port 3000');
  });
  
