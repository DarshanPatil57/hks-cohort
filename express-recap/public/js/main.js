const output = document.querySelector('.output')
const button = document.querySelector('.get-post-btn')

// get and show function 
async function showPost(){
    try {
        const res = await fetch("http://localhost:8000/api/posts")
        if(!res.ok){
            throw new Error('Fialed to fecth posts')
        }
    
        const posts = await res.json()
        output.innerHTML = ''
    
        posts.forEach(post => {
            const postEL = document.createElement('div')
            postEL.textContent = post.title
            output.appendChild(postEL)
        });
    } catch (error) {
        console.log('Error occured' , error);
        
    }
}

// event listerns

button.addEventListener('click',showPost)