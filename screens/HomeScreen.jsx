import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import OnePokemonBloc from '../components/OnePokemonBloc';
import { getPokemons } from '../controllers/pokemonControllers';


export default function App() {
  const [allPokemons, setAllPokemons] = useState([])
  const [offset, setOffset] = useState(0)

  const getAllPokemons = async () => {
    let a = await getPokemons(151, 0)
    setAllPokemons(a)
  }

  const nextPage = () => {
    let a = offset
    setOffset(a+9)
  }

  const prevPage = () => {
      let a = offset
      setOffset(a-9)
  }

  useEffect(() => {
    getAllPokemons()
  }, [offset])

  // const displayThesePokemons = () => {
  //   let tab = []
  //   for (let i=offset; i<offset+9;i++){
  //     tab.push(allPokemons[i])
  //   }
  //   return (
  //       tab.map((poke,i)=>{
  //         <OnePokemonBloc key={i} pokemon={poke} />
  //       })
      
  //   )
  // }

  return (
    <ScrollView>
      {
        allPokemons ?
          <View style={styles.container}>
            <View style={styles.pokemonContainer}>
              {allPokemons.map((pokemon, i) => {
                return (
                  <OnePokemonBloc key={i} pokemon={pokemon} />
                )
              })}
              {/* {
                displayThesePokemons()
              } */}
            </View>
            <View style={styles.pagination}>
                {
                  offset!==0?
                  <Button onPress={()=>prevPage()} title='back'/>:
                  <Button onPress={()=>prevPage()} disabled title='back'/>
                }
                <Text>{(offset/9)+1}</Text>
                <Button onPress={()=>nextPage()} title='next'/>
            </View>
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
    paddingTop: 30
  },
  pokemonContainer: {
    flex: 1,
    justifyContent: 'space-around',
    width: "100%",
  },
  pagination:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width:'100%',
    alignItems: 'center'
  }
});
