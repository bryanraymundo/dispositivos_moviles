import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Header = ({navigation}) => {
    return(
      <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('LoginForm')}><Text>Nose</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>PokéDex</Text>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 15,
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 2,
      borderColor: '#bbbbbb',
      backgroundColor: '#D9042B',
    },
    title: {
      fontFamily: 'Pokemon Solid',
      fontSize: 30,
      marginLeft: 75,
      marginRight: 10,
      color: 'white',
    }
  });
  
export default Header