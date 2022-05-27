import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home'
import TypePokemons from '../Screens/Tipos/TypePokemons';
import { navigationRef } from '../Root Navigation/RootNavigation';
const Tab = createBottomTabNavigator();


const NavigationTab = (props) => {

  return (
    <Tab.Navigator screenOptions={{headerShown: false}} >
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="TiposPokemon" component={TypePokemons} />
    </Tab.Navigator>

  );
}




export default NavigationTab