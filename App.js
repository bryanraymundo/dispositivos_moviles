import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigation/NavigationStack'
import { navigationRef } from './src/Root Navigation/RootNavigation';

export default function App() {
  return (
    // Contenedor del Navegation // 
    <NavigationContainer>
      <StackNavigation/> 
    </NavigationContainer>
  );
}