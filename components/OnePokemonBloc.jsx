import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { getPokemon } from '../controllers/pokemonControllers';


export default function OnePokemonBloc(pokemon) {
    const [thisPokemon, setThisPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [type, setType] = useState('')

    const getThisPokemon = async () => {
        try {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon.name}`).then(async (res) => {
                try {
                    await axios.get(res.data.forms[0].url).then((res) => {
                        setThisPokemon(res.data)
                        setType(res.data?.types[0]?.type?.name)
                    })

                } catch (error) {
                    console.log(error)
                }
            })

        } catch (error) {
            console.log(error)
        }
    }


    getThisPokemon()
    setTimeout(() => {
        setLoading(false)
    }, 3000);

    const myStyle = () => {
        if (type === 'grass') {
            return {
                margin: 10,
                backgroundColor: 'green',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (type === 'water') {
            return {
                margin: 10,
                backgroundColor: '#ADD8E6',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (type === 'bug') {
            return {
                margin: 10,
                backgroundColor: '#7CFC00',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (type === 'flying') {
            return {
                margin: 10,
                backgroundColor: '#C0C0C0',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (type === 'normal') {
            return {
                margin: 10,
                backgroundColor: '#FFFFE0',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (type === 'poison') {
            return {
                margin: 10,
                backgroundColor: '#FF00FF',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (type === 'fire') {
            return {
                margin: 10,
                backgroundColor: 'orange',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
        if (type === 'electric') {
            return {
                margin: 10,
                backgroundColor: 'gold',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        } else {
            return {
                margin: 10,
                backgroundColor: 'red',
                borderRadius: 15,
                paddingHorizontal: 10,
            }
        }
    }

    return (
        <View>
            {
                thisPokemon ?
                    <View style={myStyle()}>
                        {
                            loading === false ?
                                <View style={styles.pokeCardIn}>
                                    <Image
                                        style={styles.pic}
                                        source={{
                                            uri: `${thisPokemon?.sprites?.front_default}`,
                                        }}
                                    />
                                    <Text style={styles.number}>#{thisPokemon.id}</Text>
                                    <Text style={styles.name}>{thisPokemon?.name?.charAt(0).toUpperCase() + thisPokemon?.name?.slice(1)}</Text>
                                </View> :
                                <View style={styles.gifContainer}>
                                    <Image
                                        style={styles.gif}
                                        source={{
                                            uri: `https://c.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif`,
                                        }}
                                    />
                                </View>
                        }
                    </View> : null
            }
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
    pokeCard: {
        margin: 10,
        backgroundColor: 'red',
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    grass: {
        margin: 10,
        backgroundColor: 'green',
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    pokeCardIn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    gifContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pic: {
        width: 100,
        height: 100,
        position: "absolute",
        right: 10
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
    }
});
