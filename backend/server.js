const express = require('express');
const governanceRoutes = require('./api/governance'); // Import governance routes
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Use governance API routes
app.use('/api/governance', governanceRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to Web3Dev Strategy Consulting Backend!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});