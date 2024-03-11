// import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { Style } from './Style'
import React from 'react'

import Routes from './src/routes'

export default function App(): React.ReactElement {
  return (
    <SafeAreaView style={Style.SafeArea}>
      <Routes />
      {/* <View className="flex-1 items-center justify-center bg-white">
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text
        className="text-center p-5 bg-red-200 rounded-full hover:bg-blue-300
        active:bg-blue-500"
        >
        Changes you make will automatically reload.
        </Text>
        <StatusBar style="auto" />
      </View> */}
    </SafeAreaView>
  )
}
