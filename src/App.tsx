// import { View, Text, SafeAreaView, ScrollView } from 'react-native';
// import React from 'react';
// import FlatCards from '../components/FlatCards';
// import ElevatedCards from '../components/ElevatedCards';
// import FancyCard from '../components/FancyCard';
// import ActionCard from '../components/ActionCard';

// const App = () => {
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <FlatCards />
//         <ElevatedCards />
//         <FancyCard />
//         <ActionCard />
//       </ScrollView>
//     </SafeAreaView>
//   )
// }

// export default App

import { Text, View } from 'react-native'
import React from 'react'

//Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//screens
import Home from './screens/Home'
import Details from './screens/Details'

export type RootStackParamList={
  Home: undefined;
  Details: {productId: string}
}

const Stack=createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{
            title: "Trending Products"
          }}
        />
        <Stack.Screen 
          name='Details'
          component={Details}
          options={{
            title: "Products Details"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
