import React from 'react'
import { View, Image, Text } from 'react-native'
import { styled } from 'nativewind'
import Card from '../compoents/Card'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ImageMe = require('../../assets/me.jpeg')
const StyledView = styled(View)

export default function HomeView(): React.ReactElement {
  return (
    <StyledView className="flex flex-col gap-4 pt-4">
      <StyledView className="flex justify-center items-center">
        <Image className="rounded-full w-32 h-32" source={ImageMe} />
      </StyledView>
      <Card>
        <StyledView className="flex flex-col gap-1">
          <Text className="text-center text-lg">Hello, I&apos;m</Text>
          <Text className="text-center text-xl">
            Muhammad Fais Avriody Daffa
          </Text>
          <Text className="text-center text-2xl">Full Stack Developer</Text>
        </StyledView>
      </Card>
    </StyledView>
  )
}
