import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Components/Login/Login';
import Casita from './src/Components/Home/Home';
import react from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
      <Casita/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
