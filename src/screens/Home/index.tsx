import React from 'react'
import { View } from 'react-native'
import { Header, MessageList } from '../../components'
import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <MessageList />
    </View>
  )
}
