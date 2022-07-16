import * as React from 'react';
import { Button, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import OnePokemonBloc from '../components/OnePokemonBloc';
import { getPokemons } from '../controllers/pokemonControllers';


export default class HomeScreen extends React.Component {

  props: any
	state: any

  constructor(props: any) {
    super(props)
    this.state={
      allPokemons: null,
      offset:0
    }
  }

  getAllPokemons = async () => {
    let a = await getPokemons(151, 0)
    this.setState({allPokemons:a})
  }

   nextPage = async () => {
    let a = await this.state.offset
    await this.setState({offset: a+1})
    setTimeout(() => {
      this.getAllPokemons()
    }, 2000);
  }

   prevPage = async () => {
    let a = await this.state.offset
    await this.setState({offset: a-1})
    this.getAllPokemons()
  }

  componentDidMount(){
    this.getAllPokemons()
  }

  render(){
  return (
    <ScrollView>
      {
        this.state.allPokemons ?
            <View style={styles.pokemonContainer}>
              {this.state.allPokemons.map((pokemon:any, i:any) => {
                return (
                  <Pressable 
                  key={i}
                  onPress={() =>
                    this.props.navigation.navigate('Pokemon Details', { pokemon: pokemon })
                    }
                    >
                    <OnePokemonBloc pokemon={pokemon} />
                  </Pressable>
                )
              })}
            </View>
          :
          null
      }
    </ScrollView>
  )
}}
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

