import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from '../Screens/Login/Login'
import Home from '../Screens/Home/Home'

// Se crea la constante del stack
const Stack = createStackNavigator();

const NavigationStack = () => {
    return (
              <Stack.Navigator>
                {/* Se arma la estructura del stack con el nombre de la constante que ya definimos */}
                <Stack.Screen name="Login" component={LoginForm} />
                <Stack.Screen name="Home" component={Home} />
              </Stack.Navigator>
    );
}

export default NavigationStack;