import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { getPokemons } from './controllers/pokemonControllers';


export default function App() {

  getPokemons()

  return (
    <View style={styles.container}>
      <Text>Hello pokedex!</Text>
      <StatusBar style="auto" />
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
