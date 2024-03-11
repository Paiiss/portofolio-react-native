import React from 'react'
// import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from '../views/Home'

const Tab = createBottomTabNavigator()

export default function Routes(): React.ReactElement {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = ''

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'
            } else if (route.name === 'Settings') {
              iconName = focused ? 'home' : 'home-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray'
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
