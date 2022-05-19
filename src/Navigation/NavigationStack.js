import React from "react";
import { createStackNavigator} from '@react-navigation/stack';
import LoginForm from '../Screens/Login/Login'
import NavigationTab from "./NavigationTab";
import { navigationRef } from "../Root Navigation/RootNavigation";

// Se crea la constante del stack
const Stack = createStackNavigator();

const NavigationStack = (props) => {
    return (
              <Stack.Navigator screenOptions={{headerShown: false}} ref={navigationRef}>
                {/* Se arma la estructura del stack con el nombre de la constante que ya definimos */}
                <Stack.Screen name="Login" component={LoginForm} screenOptions={{headerShown: false}}/>
                <Stack.Screen name="TabNavigation" component={NavigationTab} screenOptions={{headerShown: false}}/>
              </Stack.Navigator>
    );
}

export default NavigationStack;