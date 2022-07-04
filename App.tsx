import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import OnePokemonBloc from './components/OnePokemeonBloc';
import { getPokemons,getPokemon } from './controllers/pokemonControllers';


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
      <View style={styles.container}>
        <View style={styles.pokemondContainer}>
          {allPokemons.map((pokemon: any, i: any) => {
            return (
              <OnePokemonBloc name={pokemon.name} key={i}/>
              // <Text key={i}>hello</Text>
            )
          })}
        </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:30
  },
  pokemondContainer: {
    flex:1,
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:'space-between'
  }
});
