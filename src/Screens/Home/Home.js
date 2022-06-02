import React, {useEffect, useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import useAPI from '../../Hooks/index';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import Header from "../../Components/Header/Header";

 

const Home = (props)=>
{

  const { navigation } = props
  console.log(navigation)
  const { getRequest } = useAPI()
  const [pokemons, setPokemons] = useState([])
  
  const loadPokemon = async () => 
  {
    let result = await getRequest('https://pokeapi.co/api/v2/pokemon')
    setPokemons(result.results)
    
    //console.log(result)
  }

  useEffect( ()=> {

    loadPokemon()

  },[])

  console.log(pokemons)

    return(
      <>
      <View style = {styles.container} >
          <View style = {styles.bottom}>
              <TextInput style={styles.input} placeholderTextColor="#12B39A"  placeholder="Buscar pokemon..."></TextInput>
              <TouchableOpacity onPress={() => {navigation.navigate("Login")}}>
                <Image
                  style={styles.imagen}
                  source={require("../../Img/Box.png")}
                  />
              </TouchableOpacity>

              {/* <TouchableOpacity>
              <FontAwesome5 name="amazon-pay" size={32} color="black" />
            </TouchableOpacity> */}
          </View>
        {pokemons.map( pokemon => <Text> { pokemon.name }</Text> )}
        </View>
        <View>
          <Header></Header>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 30,
      marginTop: 25,
      flex: 1,
      backgroundColor: '#fff'
    },
    input:{
      fontSize: 16,
      color: "#12B39A",
      width: 280,
      backgroundColor: "#fffff",
      borderColor: "#0DFFDA",
      borderWidth: 3,
      padding: 10,
      paddingLeft: 20,
      borderRadius: 10,
      marginBottom: 20
    },
    bottom: 
    {
      flexDirection: "row"
    },
    imagen:{
      marginLeft: 20,
      marginTop: 4,
      width: 40, height: 40
    }
  });
  

export default Home;