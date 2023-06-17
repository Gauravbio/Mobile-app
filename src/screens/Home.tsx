// import { StyleSheet, Text, View, Button } from 'react-native'
// import React from 'react'

// //Navigation
// import { NativeStackScreenProps } from '@react-navigation/native-stack'
// import {RootStackParamList} from '../App'

// type HomeProps=NativeStackScreenProps<RootStackParamList,'Home'>

// export default function Home({navigation}:HomeProps) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.smallText}>Home Screen</Text>
//       <Button title='Go to details' 
//         // onPress={()=> navigation.navigate('Details',{
//         //     productId: "8688"
//         // })} 

//         onPress={()=> navigation.push('Details',{
//             productId:"23"
//         })}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex:1 ,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     smallText:{
//         color: '#000000',

//     }
// })

import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'

// navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'

import ProductItem from '../../components/ProductItem'
import Separator from '../../components/Separator'

//data
import { PRODUCTS_LIST } from '../data/constants'

type HomeProps=NativeStackScreenProps<RootStackParamList,"Home">;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({item})=> (
          <Pressable
          onPress={()=> {
            navigation.navigate('Details',{
              product: item
            })
          }}>
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: "#ffffff"
  }
})