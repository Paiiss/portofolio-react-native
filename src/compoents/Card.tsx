import React from 'react'
import { styled } from 'nativewind'
import { Text } from 'react-native'

const StyledText = styled(Text)

interface CardProps extends React.ComponentProps<typeof StyledText> {
  className?: string
}
export default function CardComponent({
  className,
  ...props
}: CardProps): React.ReactElement {
  return (
    <StyledText
      className={`flex text-center justify-center items-center text-gray-900 rounded ${className}`}
      {...props}
    />
  )
}
