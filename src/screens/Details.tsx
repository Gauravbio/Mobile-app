import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

//Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

type DetailsProps=NativeStackScreenProps<RootStackParamList,'Details'>

const Details = ({route}: DetailsProps) => {
    const {productId}=route.params;

    const navigate=useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text>Details: {productId}</Text>
      <Button
        title='Go to Home'
        // onPress={()=> navigate.navigate("Home")}
        onPress={()=> navigate.goBack()}
      />
      <Button 
        title='Go to first screen'
        onPress={()=> navigate.popToTop()}
      />
    </View>
  )
}

export default Details

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