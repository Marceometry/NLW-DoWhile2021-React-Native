import React from 'react'
import { View } from 'react-native'
import {
  Header,
  MessageList,
  SendMessageForm,
  SignInBox,
} from '../../components'
import { useAuth } from '../../hooks/auth'
import { styles } from './styles'

export function Home() {
  const { user } = useAuth()

  return (
    <View style={styles.container}>
      <Header />
      <MessageList />

      {!!user ? <SendMessageForm /> : <SignInBox />}
    </View>
  )
}
