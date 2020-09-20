import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import TableSearchScreen from '../screens/TableSearchScreen';


const AppStack = createStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}} >
        <AppStack.Screen name='tableSearch' component={TableSearchScreen}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator