// Import required modules
const express = require("express");
const app = express();

// Define routes
app.get('/addTwoNumbers/:firstNumber/:secondNumber', (req, res) => {
    // Parse parameters to integers
    const firstNumber = parseInt(req.params.firstNumber);
    const secondNumber = parseInt(req.params.secondNumber);
    
    // Calculate result
    const result = firstNumber + secondNumber || null;
    
    // Check if result is null
    if (result === null) {
        // Send response with status code 400
        res.status(400).json({ result: result, statusCode: 400 });
    } else {
        // Send response with status code 200
        res.status(200).json({ result: result, statusCode: 200 });
    }
});

// Start the server
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Export the server for testing purposes
module.exports = server;
