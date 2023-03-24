import axios from "axios";

let getData = async (id: number) => {
   try {
      const listData = await axios.get('https://pokeapi.co/api/v2/pokemon')
      console.log(listData.data.results)
      const dataDetails: any = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      console.log();
      console.log('image:', dataDetails.data.sprites.back_default)
      console.log('name:', dataDetails.data.name);
      console.log('type:', dataDetails.data.types[0].name);
   } catch (error) {
      console.log(error);
   }
}
let id: number = 2
getData(id)