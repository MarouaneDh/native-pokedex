import React from 'react'
import { Text } from 'react-native'

const OnePokemonScreen = (props) => {
    let pokemon = props.route.params.pokemon
  return (
    <Text>{pokemon.name}</Text>
  )
}

export default OnePokemonScreen