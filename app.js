const express = require('express'); // like a PHP require
const server = express (); 

server.get("/", (req, res) => {
    console.log('you have now hit the home route');
    res.send('your first express app');
})

server.get("/contact", (req, res) => {
    console.log('hit the contact route');
    res.send('hit the contact page');
})

const port = process.env.PORT || 3000; // localhost:3000

server.listen(port, () => {
  console.log(`Server running at ${port}/`);
});