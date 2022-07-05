import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getPokemon } from '../controllers/pokemonControllers';


export default function OnePokemonBloc(pokemon: any) {
    const [thisPokemon, setThisPokemon] = useState([])

    const getThisPokemon = async () => {
        await getPokemon(pokemon.pokemon.name).then((res) => {
            return res;
        })
    }

    let a = getThisPokemon()

    useEffect(() => {
        setThisPokemon(a)
    }, [])

    return (
        <View>
            {
                pokemon ?
                    <View>
                        <Text>{thisPokemon.id}</Text>
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
});
