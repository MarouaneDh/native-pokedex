import axios from 'axios'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const OnePokemonScreen = (props: { route: { params: { pokemon: any } } }) => {
    let pokemon = props.route.params.pokemon
    const [thisPokemon, setThisPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [type, setType] = useState('')

    const getThisPokemon = async () => {
      try {
          await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon?.name}`).then(async (res) => {
              try {
                console.log(res);
                  await axios.get(res.data.forms[0].url).then((res) => {
                      setThisPokemon(res.data)
                      setType(res.data?.types[0]?.type?.name)
                      setLoading(false)
                      console.log(res.data);
                  })

              } catch (error) {
                  console.log(error)
              }
          })

      } catch (error) {
          console.log(error)
      }
  }

  getThisPokemon()

  console.log(thisPokemon?.sprites);

  const myStyle = () => {
    if (type === 'grass') {
        return {
            margin: 10,
            backgroundColor: 'green',
            borderRadius: 15,
            paddingHorizontal: 10,
        }
    }
    if (type === 'ice') {
        return {
            margin: 10,
            backgroundColor: '#48d1cc',
            borderRadius: 15,
            paddingHorizontal: 10,
        }
    }
    if (type === 'fighting') {
        return {
            margin: 10,
            backgroundColor: '#8b0000',
            borderRadius: 15,
            paddingHorizontal: 10,
        }
    }
    if (type === 'ground') {
        return {
            margin: 10,
            backgroundColor: '#bdb76b',
            borderRadius: 15,
            paddingHorizontal: 10,
        }
    }
    if (type === 'psychic') {
        return {
            margin: 10,
            backgroundColor: '#ff1493',
            borderRadius: 15,
            paddingHorizontal: 10,
        }
    }
    if (type === 'rock') {
        return {
            margin: 10,
            backgroundColor: '#daa520',
            borderRadius: 15,
            paddingHorizontal: 10,
        }
    }
    if (type === 'ghost') {
        return {
            margin: 10,
            backgroundColor: '#4b0082',
            borderRadius: 15,
            paddingHorizontal: 10,
        }
    }
    if (type === 'dark') {
        return {
            margin: 10,
            backgroundColor: '#010500',
            borderRadius: 15,
            paddingHorizontal: 10,
        }
    }
    if (type === 'dragon') {
        return {
            margin: 10,
            backgroundColor: '#000080',
            borderRadius: 15,
            paddingHorizontal: 10,
        }
    }
    if (type === 'steel') {
        return {
            margin: 10,
            backgroundColor: '#a9a9a9',
            borderRadius: 15,
            paddingHorizontal: 10,
        }
    }
    if (type === 'water') {
        return {
            margin: 10,
            backgroundColor: '#ADD8E6',
            borderRadius: 15,
            paddingHorizontal: 10,
        }
    }
    if (type === 'bug') {
        return {
            margin: 10,
            backgroundColor: '#7CFC00',
            borderRadius: 15,
            paddingHorizontal: 10,
        }
    }
    if (type === 'flying') {
        return {
            margin: 10,
            backgroundColor: '#C0C0C0',
            borderRadius: 15,
            paddingHorizontal: 10,
        }
    }
    if (type === 'normal') {
        return {
            margin: 10,
            backgroundColor: '#FFFFE0',
            borderRadius: 15,
            paddingHorizontal: 10,
        }
    }
    if (type === 'poison') {
        return {
            margin: 10,
            backgroundColor: '#FF00FF',
            borderRadius: 15,
            paddingHorizontal: 10,
        }
    }
    if (type === 'fire') {
        return {
            margin: 10,
            backgroundColor: 'orange',
            borderRadius: 15,
            paddingHorizontal: 10,
        }
    }
    if (type === 'electric') {
        return {
            margin: 10,
            backgroundColor: 'gold',
            borderRadius: 15,
            paddingHorizontal: 10,
        }
    } else {
        return {
            margin: 10,
            backgroundColor: '#ffb6c1',
            borderRadius: 15,
            paddingHorizontal: 10,
        }
    }
}

  return (
    <View>
        <Text>{thisPokemon.name}</Text>
        <Image
            style={styles.pic}
            source={{
                uri: `${thisPokemon?.sprites?.front_default}`,
            }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    pic: {
        width: 100,
        height: 100,
        position: "absolute",
        right: 10
    },
});

export default OnePokemonScreen