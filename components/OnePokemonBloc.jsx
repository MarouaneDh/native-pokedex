import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { getPokemon } from '../controllers/pokemonControllers';


export default function OnePokemonBloc(pokemon) {
    const [thisPokemon, setThisPokemon] = useState([])

    const getThisPokemon = async () => {
        try {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon.name}`).then(async (res) => {
                // console.log(res.data.forms[0].url);
                try {
                    await axios.get(res.data.forms[0].url).then((res) => {
                        setThisPokemon(res.data)
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

    let pic = thisPokemon?.sprites?.front_default

    // console.log(pic);

    return (
        <View style={styles.pokeCard}>
            {
                pokemon ?
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
                    <Text>hello one bloc</Text>
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
    number: {
        fontWeight: "bold",
        fontSize: 30,
        marginRight: 15
    },
    name: {
        fontSize: 15,
    }
});
