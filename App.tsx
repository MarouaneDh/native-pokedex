import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/HomeScreen'
import OnePokemonScreen from "./screens/OnePokemonScreen";

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Kanto Region" component={HomeScreen} />
        <Stack.Screen name="Pokemon Details" component={OnePokemonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

