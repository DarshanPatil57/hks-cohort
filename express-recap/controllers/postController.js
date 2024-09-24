let posts = [
    { id: 1, title: 'This is title one' },
    { id: 2, title: 'This is title two'  },
    { id: 3, title: 'This is title three'  },
  ];
  

// @desc - Get All Posts
// @route - GET /api/posts

 const getPosts = (req, res) => {
    const limit = parseInt(req.query.limit)
    if(! isNaN(limit) && limit > 0){
        res.json(posts.slice(0,limit))
    }
    else{
        res.json(posts)
    }
}


// @desc - Get Single Posts
// @route - GET /api/posts/:id

 const getSinglePosts = (req, res) => {   
    // console.log(req.params);
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if(!post){
        res.status(404).json({msg: `A post with the id of ${id} is not found`})
    } else {
        res.status(200).json(post)
    }
}

// @desc - Create new Posts
// @route - POST /api/posts/:id

 const createPost = (req,res) =>{
    const newPost ={
        id:posts.length + 1,
        title: req.body.title
    };

    if(!newPost.title){
        return res.status(400).json({msg:'Please include a title'})
    }

    posts.push(newPost)
    res.status(200).json(posts)
    
}

// @desc - Update Posts
// @route - Put /api/posts/:id

 const updatePost = (req,res)=>{
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    
    if(!post){
       return res.status(404).json({msg: `A post with the id of ${id} is not found`})
    }

    post.title = req.body.title
    res.status(200).json(posts)
}

// @desc - Delete Posts
// @route - Delete /api/posts/:id

 const deletePost = (req,res) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if(!post){
        return res.status(404).json({msg: `A post with the id of ${id} is not found`})
    }
    posts = posts.filter((post) => post.id !== id)
    res.status(200).json(posts)
}
module.exports = {
    getPosts,
    getSinglePosts,
    createPost,
    updatePost,
    deletePost,
  };