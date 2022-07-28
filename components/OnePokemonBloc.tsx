import axios from 'axios';
import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { getOnePokemon } from '../controllers/pokemonControllers';


export default class HomeScreen extends React.Component{

    props: any
	state: any

  constructor(props: any) {
    super(props)
    this.state={
        loading: true,
        data: null,
        type: null,
        displayType: this.props.selectedType,
    }
  }

    getOnePokemon=async()=>{
        await getOnePokemon(this.props.pokemon?.name).then(async(res)=>{
            await this.setState({data:res})
            await this.setState({type:res?.types[0]?.type?.name})
            this.setState({loading:false})
        })
    }

    componentDidMount(){
        this.getOnePokemon()
    }

    myStyle = () => {
        if (this.state.type === 'grass') {
            return {
                margin: 10,
                backgroundColor: 'green',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (this.state.type === 'ice') {
            return {
                margin: 10,
                backgroundColor: '#48d1cc',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (this.state.type === 'fighting') {
            return {
                margin: 10,
                backgroundColor: '#8b0000',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (this.state.type === 'ground') {
            return {
                margin: 10,
                backgroundColor: '#bdb76b',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (this.state.type === 'psychic') {
            return {
                margin: 10,
                backgroundColor: '#ff1493',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (this.state.type === 'rock') {
            return {
                margin: 10,
                backgroundColor: '#daa520',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (this.state.type === 'ghost') {
            return {
                margin: 10,
                backgroundColor: '#4b0082',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (this.state.type === 'dark') {
            return {
                margin: 10,
                backgroundColor: '#000',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (this.state.type === 'dragon') {
            return {
                margin: 10,
                backgroundColor: '#000080',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (this.state.type === 'steel') {
            return {
                margin: 10,
                backgroundColor: '#a9a9a9',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (this.state.type === 'water') {
            return {
                margin: 10,
                backgroundColor: '#ADD8E6',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (this.state.type === 'bug') {
            return {
                margin: 10,
                backgroundColor: '#7CFC00',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (this.state.type === 'flying') {
            return {
                margin: 10,
                backgroundColor: '#C0C0C0',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (this.state.type === 'normal') {
            return {
                margin: 10,
                backgroundColor: '#FFFFE0',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (this.state.type === 'poison') {
            return {
                margin: 10,
                backgroundColor: '#FF00FF',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (this.state.type === 'fire') {
            return {
                margin: 10,
                backgroundColor: 'orange',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (this.state.type === 'electric') {
            return {
                margin: 10,
                backgroundColor: 'gold',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        } 
        if (this.state.type === 'fairy'){
            return {
                margin: 10,
                backgroundColor: '#ffb6c1',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
    }

    render(){
        return (
            <View>
                {
                    this.state.data ?
                        this.state.displayType==='All'?
                        <View style={this.myStyle()}>
                            {
                                this.state.loading === false ?
                                        <View
                                        style={styles.pokeCardIn}>
                                        <Image
                                            style={styles.pic}
                                            source={{
                                                uri: `${this.state.data?.sprites?.front_default}`,
                                            }}
                                        />
                                        {
                                            this.state.type==='grass' || this.state.type==='poison' || this.state.type==='fighting' || this.state.type==='ghost' || this.state.type==='dragon'?
                                            <View style={styles.tag}>
                                                <Text style={styles.numberWhite}>#{this.state.data.id}</Text>
                                                <Text style={styles.nameWhite}>{this.state.data?.name?.charAt(0).toUpperCase() + this.state.data?.name?.slice(1)}</Text>
                                            </View>:
                                            <View style={styles.tag}>
                                                <Text style={styles.number}>#{this.state.data.id}</Text>
                                                <Text style={styles.name}>{this.state.data?.name?.charAt(0).toUpperCase() + this.state.data?.name?.slice(1)}</Text>
                                            </View>
                                        }
                                        </View>
                                    :
                                    <View style={styles.gifContainer}>
                                        <Image
                                            style={styles.gif}
                                            source={{
                                                uri: `https://c.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif`,
                                            }}
                                        />
                                    </View>
                            }
                        </View>:
                        this.state.type===this.state.displayType?
                        <View style={this.myStyle()}>
                            {
                                this.state.loading === false ?
                                        <View
                                        style={styles.pokeCardIn}>
                                        <Image
                                            style={styles.pic}
                                            source={{
                                                uri: `${this.state.data?.sprites?.front_default}`,
                                            }}
                                        />
                                        {
                                            this.state.type==='psychic' || this.state.type==='poison' || this.state.type==='fighting' || this.state.type==='ghost' || this.state.type==='dragon' || this.state.type==='dark'?
                                            <View style={styles.tag}>
                                                <Text style={styles.numberWhite}>#{this.state.data.id}</Text>
                                                <Text style={styles.nameWhite}>{this.state.data?.name?.charAt(0).toUpperCase() + this.state.data?.name?.slice(1)}</Text>
                                            </View>:
                                            <View style={styles.tag}>
                                                <Text style={styles.number}>#{this.state.data.id}</Text>
                                                <Text style={styles.name}>{this.state.data?.name?.charAt(0).toUpperCase() + this.state.data?.name?.slice(1)}</Text>
                                            </View>
                                        }
                                        </View>
                                    :
                                    <View style={styles.gifContainer}>
                                        <Image
                                            style={styles.gif}
                                            source={{
                                                uri: `https://c.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif`,
                                            }}
                                        />
                                    </View>
                            }
                        </View>:null
                        : null
                }
            </View>
        )
    }}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pokeCard: {
        margin: 10,
        backgroundColor: 'red',
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    pokeCardIn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    pic: {
        width: 100,
        height: 100,
        position: "absolute",
        right: 10
    },
    gifContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    gif: {
        width: 70,
        height: 50,
        right: 10
    },
    number: {
        fontWeight: "bold",
        fontSize: 30,
        marginRight: 15
    },
    name: {
        fontSize: 15,
    },
    numberWhite: {
        fontWeight: "bold",
        fontSize: 30,
        marginRight: 15,
        color: 'white'
    },
    nameWhite: {
        fontSize: 15,
        color: 'white'
    },
    tag: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});
