import * as React from 'react';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import OnePokemonBloc from '../components/OnePokemonBloc';
import { getPokemons } from '../controllers/pokemonControllers';


export default class HomeScreen extends React.Component {

  props: any
	state: any

  constructor(props: any) {
    super(props)
    this.state={
      loading: true,
      allPokemons: null
    }
  }
  // const [allPokemons, setAllPokemons] = useState([])
  // const [offset, setOffset] = useState(0)

  getAllPokemons = async () => {
    let a = await getPokemons(151, 0)
    this.setState({allPokemons:a})
  }

  // const nextPage = () => {
  //   let a = offset
  //   setOffset(a+9)
  // }

  // const prevPage = () => {
  //     let a = offset
  //     setOffset(a-9)
  // }

  componentDidMount(){
    this.getAllPokemons()
  }


  render(){
  return (
    <ScrollView>
      {
        this.state.allPokemons ?
          <View style={styles.container}>
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
              {/* {
                displayThesePokemons()
              } */}
            </View>
            {/* <View style={styles.pagination}>
                {
                  offset!==0?
                  <Button onPress={()=>prevPage()} title='back'/>:
                  <Button onPress={()=>prevPage()} disabled title='back'/>
                }
                <Text>{(offset/9)+1}</Text>
                <Button onPress={()=>nextPage()} title='next'/>
            </View> */}
          </View> :
          <Text>Hello HomeScreen</Text>
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

