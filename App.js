
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigation/NavigationStack'

export default function App() {
  return (
    // Contenedor del Navegation // 
    <NavigationContainer >
      <StackNavigation></StackNavigation> 
    </NavigationContainer>
  );
}
