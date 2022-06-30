import axios from 'axios';

export const getPokemon = (url) => {
    axios
      .get(url)
      .then((res) => {
        console.log('===========res===========')
        console.log(res.data)
      }
      )
      .catch((err) => console.log(err));
};
  
export const getPokemons = async (limit,offset) =>  {
      try {
        let a = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
        return a.data.results
      } catch (error) {
        console.log(error)
      }
};

