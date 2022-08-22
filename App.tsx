import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/HomeScreen'
import OnePokemonScreen from "./screens/OnePokemonScreen";
import SplashScreen from "./screens/SplashScreen";
import * as React from 'react';
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

export default class App extends React.Component  {

  render() {
    return(
      <NavigationContainer>
         <StatusBar
        animated={true}
        backgroundColor="#000"
        />
      <Stack.Navigator>
        <Stack.Screen 
          options={{
            headerShown: false,
          }} 
          name="Splash" 
          component={SplashScreen} 
        />
        <Stack.Screen 
          name="Kanto Region" 
          options={{
            headerShown: false,
          }}
          component={HomeScreen} />
        <Stack.Screen 
          name="Pokemon Details" 
          options={{
            headerShown: false,
          }}
          component={OnePokemonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
};
}

