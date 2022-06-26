import axios from 'axios';

export const getPokemon = (id) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        console.log('===========res===========')
        console.log(res.data)
      }
      )
      .catch((err) => console.log(err));
};
  
export const getPokemons = () =>  {
      axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then((res) => {
        console.log('===========res===========')
        console.log(res)
      }
      )
      .catch((err) => console.log(err));
};

