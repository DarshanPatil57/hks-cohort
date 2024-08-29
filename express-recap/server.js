const express = require("express");
const port =process.env.PORT || 8000
const post = require('./routes/post');
const logger = require("./middleware/logger");

const app = express();

// Body Parser middleware
app.use(express.json())
// app.use(express.urlencoded({extended:false}))

// middleware
app.use(logger)

const path = require("path");
// this is used to serve stati c files,such as images,css,js files from a directory named
{
    app.use(express.static(path.join(__dirname, "public")))
}

// Routes
app.use('/api/posts',post)


app.listen(8000, () => console.log(`server running on ${port} `));
 