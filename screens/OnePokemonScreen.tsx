import axios from 'axios'
import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class OnePokemonScreen extends React.Component {

    props: any
    state: any
  
    constructor(props: any) {
      super(props)
      this.state={
        loading: true,
        pokemon: null,
        type: null
      }
    }
    getThisPokemon = async () => {
      try {
          await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.route.params.pokemon.name}`).then(async (res) => {
              try {
                  await axios.get(res.data.forms[0].url).then((res) => {
                      this.setState({pokemon:res.data})
                      this.setState({type:res.data?.types[0]?.type?.name})
                      this.setState({loading:false})
                  })

              } catch (error) {
                  console.log(error)
              }
          })

      } catch (error) {
          console.log(error)
      }
  }

  componentDidMount(){
    this.getThisPokemon()
  }

  myStyle = () => {
    if (this.state.type === 'grass') {
        return {
            height: "100%",
            backgroundColor: 'green',
            paddingHorizontal: 10,
            paddingVertical: 10,
        }
    }
    if (this.state.type === 'ice') {
        return {
            height: "100%",
            backgroundColor: '#48d1cc',
            paddingHorizontal: 10,
            paddingVertical: 10,
        }
    }
    if (this.state.type === 'fighting') {
        return {
            height: "100%",
            backgroundColor: '#8b0000',
            paddingHorizontal: 10,
            paddingVertical: 10,
        }
    }
    if (this.state.type === 'ground') {
        return {
            height: "100%",
            backgroundColor: '#bdb76b',
            paddingHorizontal: 10,
            paddingVertical: 10,
        }
    }
    if (this.state.type === 'psychic') {
        return {
            height: "100%",
            backgroundColor: '#ff1493',
            paddingHorizontal: 10,
            paddingVertical: 10,
        }
    }
    if (this.state.type === 'rock') {
        return {
            height: "100%",
            backgroundColor: '#daa520',
            paddingHorizontal: 10,
            paddingVertical: 10,
        }
    }
    if (this.state.type === 'ghost') {
        return {
            height: "100%",
            backgroundColor: '#4b0082',
            paddingHorizontal: 10,
            paddingVertical: 10,
        }
    }
    if (this.state.type === 'dark') {
        return {
            height: "100%",
            backgroundColor: '#010500',
            paddingHorizontal: 10,
            paddingVertical: 10,
        }
    }
    if (this.state.type === 'dragon') {
        return {
            height: "100%",
            backgroundColor: '#000080',
            paddingHorizontal: 10,
            paddingVertical: 10,
        }
    }
    if (this.state.type === 'steel') {
        return {
            height: "100%",
            backgroundColor: '#a9a9a9',
            paddingHorizontal: 10,
            paddingVertical: 10,
        }
    }
    if (this.state.type === 'water') {
        return {
            height: "100%",
            backgroundColor: '#ADD8E6',
            paddingHorizontal: 10,
            paddingVertical: 10,
        }
    }
    if (this.state.type === 'bug') {
        return {
            height: "100%",
            backgroundColor: '#7CFC00',
            paddingHorizontal: 10,
            paddingVertical: 10,
        }
    }
    if (this.state.type === 'flying') {
        return {
            height: "100%",
            backgroundColor: '#C0C0C0',
            paddingHorizontal: 10,
            paddingVertical: 10,
        }
    }
    if (this.state.type === 'normal') {
        return {
            height: "100%",
            backgroundColor: '#FFFFE0',
            paddingHorizontal: 10,
            paddingVertical: 10,
        }
    }
    if (this.state.type === 'poison') {
        return {
            height: "100%",
            backgroundColor: '#FF00FF',
            paddingHorizontal: 10,
            paddingVertical: 10,
        }
    }
    if (this.state.type === 'fire') {
        return {
            backgroundColor: 'orange',
            paddingHorizontal: 10,
            paddingVertical: 10,
            height: "100%"
        }
    }
    if (this.state.type === 'electric') {
        return {
            height: "100%",
            backgroundColor: 'gold',
            paddingHorizontal: 10,
            paddingVertical: 10,
        }
    }
    if(this.state.type==='fairy'){
        return {
            height: "100%",
            backgroundColor: '#ffb6c1',
            paddingHorizontal: 10,
            paddingVertical: 10,
        }
    }
}

    render(){
  return (
    <View style={this.myStyle()}>
        {
            this.state.pokemon?
            <View>
                <Text>{this.state.pokemon.name}</Text>
        <Image
            style={styles.pic}
            source={{
                uri: `${this.state.pokemon?.sprites?.front_default}`,
            }}
        />
        <Image
            style={styles.smallPic}
            source={{
                uri: `${this.state.pokemon?.sprites?.front_default}`,
            }}
        />
            </View>:null
        }
    </View>
  )
}
}
const styles = StyleSheet.create({
    pic: {
        width: 520,
        height: 520,
        position: "absolute",
        right: -100,
        top:-40,
        opacity:0.8,
        tintColor:'#000',
    },
    smallPic: {
        width: 150,
        height: 150,
        position: "absolute",
        right: 100,
        top:300,
    },
});