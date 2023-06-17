import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

//Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'

type HomeProps=NativeStackScreenProps<RootStackParamList,'Home'>

export default function Home({navigation}:HomeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button title='Go to details' 
        // onPress={()=> navigation.navigate('Details',{
        //     productId: "8688"
        // })} 

        onPress={()=> navigation.push('Details',{
            productId:"23"
        })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1 ,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallText:{
        color: '#000000',

    }
})