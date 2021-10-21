import React from 'react'
import { ScrollView } from 'react-native'
import { Message } from '../Message'
import { styles } from './styles'

const message = {
  id: 'string',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam accusamus laboriosam fugit? Libero, esse iste ullam illum eaque veritatis tempora asperiores fugit.',
  user: {
    name: 'Marcelino',
    login: 'Marceometry',
    avatar_url: 'https://github.com/Marceometry.png',
  },
}

export function MessageList() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps='never'
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  )
}
