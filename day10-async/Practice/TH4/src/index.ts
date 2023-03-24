import axios from "axios";

const getData = async () => {
   try {
      const listPost = await axios.get('http://jsonplaceholder.typicode.com/posts')
      console.log(listPost.data);
      const dataDetail = await axios.get('http://jsonplaceholder.typicode.com/posts/1')
   } catch (error) {
      console.log(error);
   }
}
getData()