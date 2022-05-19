import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home'
import TypePokemons from '../Screens/Tipos/TypePokemons';

const Tab = createBottomTabNavigator();


function NavigationTab(props) {
  return (
    
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="TiposPokemon" component={TypePokemons} />
    </Tab.Navigator>

  );
}




export default NavigationTab