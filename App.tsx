import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/HomeScreen'
import OnePokemonScreen from "./screens/OnePokemonScreen";
import * as React from 'react';

const Stack = createStackNavigator();

export default class App extends React.Component  {

  render() {
    return(
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Kanto Region" component={HomeScreen} />
        <Stack.Screen name="Pokemon Details" component={OnePokemonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
};
}

