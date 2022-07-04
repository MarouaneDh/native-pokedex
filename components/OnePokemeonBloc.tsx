import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getPokemon } from '../controllers/pokemonControllers';


export default function OnePokemonBloc(name: any) {
    const [pokemon, setPokemon] = useState([])

    // getPokemon(url)

    const getThisPokemon = async () => {
        let a = await getPokemon(name)
        setPokemon(a)
      }

      useEffect(() => {
        getThisPokemon()
      }, [])

    return (
        <View style={styles.container}>
            <Text>hello</Text>
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
