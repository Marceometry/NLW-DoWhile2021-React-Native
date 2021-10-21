import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { ButtonProps } from './types'
import { styles } from './styles'

export function Button({
  children,
  hasIcon,
  color,
  backgroundColor,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.8}
      disabled={isLoading}
      style={[styles.button, { backgroundColor }]}
    >
      {isLoading ? (
        <ActivityIndicator color={color} style={styles.icon} />
      ) : (
        <>
          {hasIcon && <AntDesign name='github' size={24} style={styles.icon} />}

          <Text style={[styles.title, { color }]}>{children}</Text>
        </>
      )}
    </TouchableOpacity>
  )
}
