async function name() {

    try{
        const result=await fetch(`https://jsonplaceholder.typicode.com/posts`);        
        if(!result.ok){
            throw new Error("not found");            
        }
            const res=await result.json();
            return res;
        }catch(error){
            console.error(error.message);
            throw new Error("Add");
        }
   
}

async function totalposts(posts) {
    let sum = posts.reduce((count) => count+1, 0);
    return sum;

}

async function longestTital(posts){
//   const maxLength = Math.max(...posts.map(post => post.title.length));
//   const longestPosts = posts.filter(post => post.title.length === maxLength);

//   return longestPosts; 

        
  const longestPost=posts.reduce((longest,post)=>{
        return post.title.length > (longest?.title.length || 0) ? post :longest; 
  },null);
  
  return longestPost;
    
} 


 async function postperuser(posts){
    
    // let num=0;
    // let userid=1;
    // for(let post of posts){
    //     if(userid==post.userId){
    //         num++;
    //     }else{
    //         console.log(`user id ${userid} : ${num} posts`);
    //         userid=post.userId;
    //         num=1;
    //         continue;
    //     }
    // }
    const postsPerUser = posts.reduce((acc, post) => {
        acc[post.userId] = (acc[post.userId] || 0) + 1; 
        return acc;
    }, {});
    
    console.log(postsPerUser);
    
    
    return "-------------------------"
 }

async function main(){
    try{
        const posts=await name();
        const total=await totalposts(posts);
        console.log(`total number of posts ${total}`);
        console.log("post with longest tital")
        const detail = await longestTital(posts);
        console.log(`userID:--${detail.userId}`);
        console.log(`ID:------${detail.id}`);
        console.log(`title:---${detail.title}`);
        // for(let post of detail){
        //     console.log(`userID:--${post.userId}`);
        //     console.log(`ID:------${post.id}`);
        //     console.log(`title:---${post.title}`);
        //     console.log(`Body :---${post.body}`);
        // }
        
        const details=await postperuser(posts);
        console.log(details);
    }catch(error){
        console.log(error);  
    }
}

main();





