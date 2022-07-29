import React from 'react'
import { Image, Animated, StyleSheet, Text, View, Easing } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { getOnePokemon, getOnePokemonStats, getPokeDescription } from '../controllers/pokemonControllers';
import {ProgressBar} from '@react-native-community/progress-bar-android';


export default class OnePokemonScreen extends React.Component {

    props: any
    state: any
    animatedSmallImage:any
    animatedShadow:any
  
    constructor(props: any) {
      super(props)
      this.animatedSmallImage = new Animated.Value(0)
      this.animatedShadow = new Animated.Value(0)
      this.state={
        loading: true,
        pokemon: null,
        type: null,
        data: null,
        desc: '',
        stats: null
      }
      
    }

    handleAnimation = () => {
        Animated.timing(this.animatedSmallImage, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease,
            useNativeDriver: false
        }).start()
    }

    handleShadowAnimation = () => {
        Animated.timing(this.animatedShadow, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease,
            useNativeDriver: false
        }).start()
    }

    getOnePokemon=async()=>{
        await getOnePokemon(this.props.route.params.pokemon.name).then(async(res)=>{
            await this.setState({data:res})
            
            await this.setState({type:res?.types[0]?.type?.name})
            this.setState({loading:false})
        })
    }

    getPokemonDesc=async()=>{
        await getPokeDescription(this.props.route.params.id).then(async(res)=>{
            this.setState({desc:res})
        })
    }

    getPokemonStat=async()=>{
        await getOnePokemonStats(this.props.route.params.pokemon.name).then(async(res)=>{
            this.setState({stats:res})
        })
    }

  componentDidMount(){
    this.getOnePokemon()
    this.handleAnimation()
    this.handleShadowAnimation()
    this.getPokemonDesc()
    this.getPokemonStat()
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
            this.state.data?
            <View>
                <Text style={styles.text}>{this.state.data.name.toUpperCase()}</Text>
            <Animated.Image
                style={{
                    position: 'absolute',
                    left: 180,
                    top: 200,
                    height: 20,
                    width: 20,
                    opacity:0.8,
                    tintColor:'#000',
                    transform: [
                        {
                            translateX: this.animatedShadow.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 20]
                            })
                        },
                        {
                            translateY: this.animatedShadow.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -20]
                            })
                        },
                        {
                            scaleX: this.animatedShadow.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 20]
                            })
                        },
                        {
                            scaleY: this.animatedShadow.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 20]
                            })
                        }
                    ]
                }}
                source={{
                    uri: this.state.data?.sprites?.other?.home?.front_default,
                }}
            />
            <Animated.Image
                style={{
                    position: 'absolute',
                    left: 180,
                    top: 300,
                    height: 20,
                    width: 21,
                    transform: [
                        {
                            translateX: this.animatedSmallImage.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 20]
                            })
                        },
                        {
                            translateY: this.animatedSmallImage.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -20]
                            })
                        },
                        {
                            scaleX: this.animatedSmallImage.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 13]
                            })
                        },
                        {
                            scaleY: this.animatedSmallImage.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 12.5]
                            })
                        }
                    ]
                }}
                source={{
                    uri: this.state.data?.sprites?.other?.home?.front_default,
                }}
            />
            <View style={styles.hw}>
                <Text style={styles.hwText}>Height : {this.state.data.height} ft</Text>
                <Text style={styles.hwText}>Weight : {this.state.data.weight} lbs</Text>
            </View>
            {/* <View>
                <Text>Description : {this.state.desc}</Text>
            </View> */}
            <View>
            {
                this.state.stats ? 
                <View style={styles.stats}>
                    <Text style={styles.statName}>{this.state.stats[0].stat.name}</Text>
                    <View style={styles.stat}>
                        <ProgressBar
                        style={styles.bar}
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={this.state.stats[0].base_stat/200}
                        color="#2194F3"
                        />
                        <Text style={styles.hwText}>{this.state.stats[0].base_stat}</Text>
                    </View>
                    <Text style={styles.statName}>{this.state.stats[1].stat.name}</Text>
                    <View style={styles.stat}>
                        <ProgressBar
                        style={styles.bar}
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={this.state.stats[1].base_stat/200}
                        color="red"
                        />
                        <Text style={styles.hwText}>{this.state.stats[1].base_stat}</Text>
                    </View>
                    <Text style={styles.statName}>{this.state.stats[2].stat.name}</Text>
                    <View style={styles.stat}>
                        <ProgressBar
                        style={styles.bar}
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={this.state.stats[2].base_stat/200}
                        color="#fff"
                        />
                        <Text style={styles.hwText}>{this.state.stats[2].base_stat}</Text>
                    </View>
                    <Text style={styles.statName}>{this.state.stats[3].stat.name}</Text>
                    <View style={styles.stat}>
                        <ProgressBar
                        style={styles.bar}
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={this.state.stats[3].base_stat/200}
                        color="#FF00FF"
                        />
                        <Text style={styles.hwText}>{this.state.stats[3].base_stat}</Text>
                    </View>
                    <Text style={styles.statName}>{this.state.stats[4].stat.name}</Text>
                    <View style={styles.stat}>
                        <ProgressBar
                        style={styles.bar}
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={this.state.stats[4].base_stat/200}
                        color="#ff1493"
                        />
                        <Text style={styles.hwText}>{this.state.stats[4].base_stat}</Text>
                    </View>
                    <Text style={styles.statName}>{this.state.stats[5].stat.name}</Text>
                    <View style={styles.stat}>
                        <ProgressBar
                        style={styles.bar}
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={this.state.stats[5].base_stat/200}
                        color="#ADD8E6"
                        />
                        <Text style={styles.hwText}>{this.state.stats[5].base_stat}</Text>
                    </View>
                </View>
                :null
            }
            </View>
            </View>:null
        }
    </View>
  )
}
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: '#F7FF00',
        fontSize: 40,
        zIndex:9,
        textShadowColor: "blue",
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 25,
        elevation:15
    },
    bar:{
        width:300
    },
    hw:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    hwText:{
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: "black",
        color: 'white',
        padding: 3,
        borderRadius: 10,
        marginLeft: 10
    },
    stat:{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    stats:{
        padding: 20,
        position: 'absolute',
        top: 320
    },
    statName:{
        fontSize: 18,
        backgroundColor: 'black',
        color: 'white',
        width: 170,
        borderRadius: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});