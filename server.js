const express = require("express");
const app = express();


app.get("/addTwoNumbers/:firstNumber/:secondNumber", function(req, res) {
    const firstNumber = parseInt(req.params.firstNumber);
    const secondNumber = parseInt(req.params.secondNumber);
    const result = firstNumber + secondNumber || null;

    if (result === null) {
        res.status(400).json({ result: result, statusCode: 400 });
    } else {
        res.status(200).json({ result: result, statusCode: 200 });
    }
});


const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = server; 
