import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigation/NavigationStack'
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <StackNavigation/> 
    </NavigationContainer>
    <StatusBar style='vector'></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})