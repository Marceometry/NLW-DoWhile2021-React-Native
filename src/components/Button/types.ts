import { ColorValue, TouchableOpacityProps } from 'react-native'
import { ReactNode } from 'react'

export type ButtonProps = TouchableOpacityProps & {
  children: ReactNode
  hasIcon?: boolean
  isLoading?: boolean
  color: ColorValue
  backgroundColor: ColorValue
}
