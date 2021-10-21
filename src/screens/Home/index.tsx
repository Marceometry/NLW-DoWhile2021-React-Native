import React from 'react'
import { View, KeyboardAvoidingView, Platform } from 'react-native'
import { useAuth } from '../../hooks/auth'
import {
  Header,
  MessageList,
  SendMessageForm,
  SignInBox,
} from '../../components'
import { styles } from './styles'

export function Home() {
  const { user } = useAuth()

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <Header />
        <MessageList />

        {!!user ? <SendMessageForm /> : <SignInBox />}
      </View>
    </KeyboardAvoidingView>
  )
}
