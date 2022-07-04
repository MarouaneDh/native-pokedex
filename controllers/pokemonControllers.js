import axios from 'axios';

export const getPokemon = async (name) => {
  try {
    let a = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    await console.log('============================')
    return a['data']
  } catch (error) {
    console.log(error)
  }
};
  
export const getPokemons = async (limit,offset) =>  {
      try {
        let a = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
        return a.data.results
      } catch (error) {
        console.log(error)
      }
};

