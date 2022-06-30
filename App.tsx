import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getPokemons } from './controllers/pokemonControllers';


export default function App() {
  const [allPokemons, setAllPokemons] = useState([])

  const getAllPokemons = async () => {
    let a = await getPokemons(151, 0)
    setAllPokemons(a)
    console.log(allPokemons[0]);
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <View style={styles.container}>
      <View>
        {allPokemons.map((pokemon: any, i: any) => {
          return (
            <Text key={i}>{pokemon.name}</Text>
          )
        })}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
