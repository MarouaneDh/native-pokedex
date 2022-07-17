import * as React from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import OnePokemonBloc from '../components/OnePokemonBloc';
import { getPokemons } from '../controllers/pokemonControllers';
import {Picker} from '@react-native-picker/picker';


export default class HomeScreen extends React.Component {

  props: any
	state: any

  constructor(props: any) {
    super(props)
    this.state={
      allPokemons: null,
      selectedType: 'All'
    }
  }

  getAllPokemons = async () => {
    let a = await getPokemons(151, 0)
    this.setState({allPokemons:a})
  }

  componentDidMount(){
    this.getAllPokemons()
  }

  render(){
  return (
    <View>
      {/* <Picker
        selectedValue={this.state.selectedType}
        onValueChange={(itemValue) =>{
          this.setState({selectedType:itemValue})
          setTimeout(() => {
            console.log(this.state.selectedType)
            this.getAllPokemons()
          }, 1000);
        }
        }>
        <Picker.Item label="All" value="All" />
        <Picker.Item label="grass" value="grass" />
        <Picker.Item label="ice" value="ice" />
        <Picker.Item label="fire" value="fire" />
        <Picker.Item label="poison" value="poison" />
        <Picker.Item label="electric" value="electric" />
        <Picker.Item label="fighting" value="fighting" />
        <Picker.Item label="ground" value="ground" />
        <Picker.Item label="psychic" value="psychic" />
        <Picker.Item label="rock" value="rock" />
        <Picker.Item label="ghost" value="ghost" />
        <Picker.Item label="dark" value="dark" />
        <Picker.Item label="fairy" value="fairy" />
        <Picker.Item label="dragon" value="dragon" />
        <Picker.Item label="steel" value="steel" />
        <Picker.Item label="water" value="water" />
        <Picker.Item label="bug" value="bug" />
        <Picker.Item label="flying" value="flying" />
        <Picker.Item label="normal" value="normal" />
      </Picker> */}
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
                    <OnePokemonBloc selectedType={this.state.selectedType} pokemon={pokemon} />
                  </Pressable>
                )
              })}
            </View>
          :
          null
      }
    </ScrollView>
    </View>
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

