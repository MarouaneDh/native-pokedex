import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import OnePokemonBloc from './components/OnePokemonBloc';
import { getPokemons } from './controllers/pokemonControllers';


export default function App() {
  const [allPokemons, setAllPokemons] = useState([])

  const getAllPokemons = async () => {
    let a = await getPokemons(151, 0)
    setAllPokemons(a)
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <ScrollView>
      {
        allPokemons ?
          <View style={styles.container}>
            <View style={styles.pokemonContainer}>
              {allPokemons.map((pokemon: any, i: any) => {
                return (
                  // <Text key={i}>{pokemon.name}</Text>
                  <OnePokemonBloc key={i} pokemon={pokemon} />
                )
              })}
            </View>
            <StatusBar style="auto" />
          </View> :
          <Text>Hello app</Text>
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    paddingTop: 50
  },
  pokemonContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
});
