import React from "react";
import { createStackNavigator} from '@react-navigation/stack';
import LoginForm from '../Screens/Login/Login'
import Home from "../Screens/Home/Home";
// import NavigationTab from "./NavigationTab";


// Se crea la constante del stack
const Stack = createStackNavigator();

const NavigationStack = ()=> {
    return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* Se arma la estructura del stack con el nombre de la constante que ya definimos */}
      <Stack.Screen 
        name="Login" 
        component={LoginForm} 
        screenOptions={{headerShown: false}}/>
      <Stack.Screen 
        name="Home"
        component={Home} 
        screenOptions={{headerShown: false}}/>
    </Stack.Navigator>
    )
}

export default NavigationStack;