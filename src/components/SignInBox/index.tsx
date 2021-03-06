import React from 'react'
import { View } from 'react-native'
import { useAuth } from '../../hooks/auth'
import { COLORS } from '../../theme'
import { Button } from '../Button'
import { styles } from './styles'

export function SignInBox() {
  const { signIn, isSigningIn } = useAuth()

  return (
    <View style={styles.container}>
      <Button
        hasIcon
        onPress={signIn}
        isLoading={isSigningIn}
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
      >
        ENTRAR COM GITHUB
      </Button>
    </View>
  )
}
