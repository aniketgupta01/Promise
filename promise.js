let posts = [
    {title:'Post one', body:'This is post one'},
    {title:'Post two', body:'This is post two'}

];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000)
}

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            resolve();

        },1000)
    })

}
    

getPosts();
