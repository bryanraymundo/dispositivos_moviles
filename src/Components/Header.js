import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RootNavigation from '../Root Navigation/RootNavigation'

const Header = (props) => {
    return(
      <View style={styles.container}>
      <View>
        {/* <TouchableOpacity  onPress={() => RootNavigation.navigate('LoginForm')}><Text>Atras</Text>
        </TouchableOpacity> */}
      </View>
      <View>
        <Text style={styles.title}>Tipos Pokemon</Text>
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