import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { api } from '../../services/api'
import { Message } from '../Message'
import { MessageProps } from '../Message/types'
import { styles } from './styles'
import { io } from 'socket.io-client'

let messagesQueue: MessageProps[] = []

const socket = io(String(api.defaults.baseURL))
socket.on('new_message', (message: MessageProps) => {
  messagesQueue.push(message)
  console.log(message)
})

export function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([])

  useEffect(() => {
    async function fetchMessages() {
      const messages = await api.get<MessageProps[]>('/messages/last3')
      setCurrentMessages(messages.data)
    }

    fetchMessages()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setCurrentMessages((prevState) => [
          messagesQueue[0],
          prevState[0],
          prevState[1],
        ])

        messagesQueue.shift()
      }
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps='never'
    >
      {currentMessages.length > 0 ? (
        currentMessages.map((message) => (
          <Message key={message.id} data={message} />
        ))
      ) : (
        <View style={styles.emptyList}>
          <Text style={styles.emptyListMessage}>Não há mensagens</Text>
        </View>
      )}
    </ScrollView>
  )
}
