import axios from 'axios';
  
export const getPokemons = async (limit,offset) =>  {
      try {
        let a = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
        return a.data.results
      } catch (error) {
        console.log(error)
      }
};

export const getOnePokemon = async (name) =>  {
  try {
    let a = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return a.data
  } catch (error) {
    console.log(error)
  }
};

export const getPokemonAbilities = async (name) =>  {
  try {
    let a = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return a.data
  } catch (error) {
    console.log(error)
  }
};

export const getPokeDescription = async (id) =>  {
  try {
    let a = await axios.get(`https://pokeapi.co/api/v2/characteristic/${id}`)
    return a.data.descriptions[7].description
  } catch (error) {
    console.log(error)
  }
};

export const getOnePokemonStats = async (name) =>  {
  try {
    let a = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return a.data.stats
  } catch (error) {
    console.log(error)
  }
};


//https://pokeapi.co/api/v2/characteristic/