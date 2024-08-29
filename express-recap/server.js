const express = require("express");
const app = express();
const port =process.env.PORT || 8000


// const path = require("path");
// this is used to serve static files,such as images,css,js files from a directory named
// {
//     app.use(express.static(path.join(__dirname, "public")))
// }

let posts = [
  { id: 1, post: 1 },
  { id: 2, post: 2 },
  { id: 3, post: 3 },
];

// get all posts
app.get("/api/posts", (req, res) => {
    const limit = parseInt(req.query.limit)
    if(! isNaN(limit) && limit > 0){
        res.json(posts.slice(0,limit))
    }
    else{
        res.json(post)
    }
});

// get single post 
app.get('/api/posts/:id', (req, res) => {   
    // console.log(req.params);
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if(!post){
        res.status(404).json({msg: `A post with the id of ${id} is not found`})
    } else {
        res.status(200).json(post)
    }
});


app.listen(8000, () => console.log(`server running on ${port} `));
