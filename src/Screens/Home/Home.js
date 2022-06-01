import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View } from 'react-native';
import useAPI from '../../Hooks/index'

 

const Home = (props)=>
{

  const { navigate } = props
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

  console.log("XD ",pokemons)

    return(
        <View style = {styles.container} >
        {pokemons.map( pokemon => <Text> { pokemon.name }</Text> )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      color: '#fff',
      flex: 1,
      backgroundColor: '#00ff00',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  

export default Home;