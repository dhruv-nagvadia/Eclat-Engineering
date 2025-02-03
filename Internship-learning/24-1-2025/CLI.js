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
    let count=0;
    for(let post of posts){
      count++;
    }
        return count;    
}

async function longestTital(posts){
    let size=0;
    let detail;
    for(const post of posts){
        if(size<post.title.length){
            size=post.title.length;
            detail=post;
        }
    }
return detail;
}

 async function postperuser(posts){
    let num=0;
    let userid=1;
    for(let post of posts){
        if(userid==post.userId){
            num++;
        }else{
            console.log(`user id ${userid} : ${num} posts`);
            userid=post.userId;
            num=1;
            continue;
        }
    }
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
        console.log(`Body :---${detail.body}`);
        const details=await postperuser(posts);
        console.log(details);
    }catch(error){
        console.log(error);  
    }
}

main();





