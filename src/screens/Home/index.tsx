import React from 'react'
import { View } from 'react-native'
import { Header, MessageList, SendMessageForm } from '../../components'
import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <MessageList />
      <SendMessageForm />
    </View>
  )
}
