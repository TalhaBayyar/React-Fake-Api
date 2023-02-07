import axios from "axios";


const getUsers = (user_id) => {
    return new Promise(async (resolve, reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id)
        resolve(data);
    } )

}


const getPosts = (user_id) => {
    return new Promise(async (resolve, reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts?id=" + user_id)
        resolve(data);
    } )

}




async function getData(user_id){
    try{
      const users = await getUsers(user_id);  
      const posts = await getPosts(user_id);  
      console.log(users);
      console.log(posts);
    }catch(e){
      console.log(e)  
    }
}

export default getData;


