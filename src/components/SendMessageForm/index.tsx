import React, { useState } from 'react'
import { Alert, TextInput, View } from 'react-native'
import { api } from '../../services/api'
import { COLORS } from '../../theme'
import { Button } from '../Button'
import { styles } from './styles'

export function SendMessageForm() {
  const [message, setMessage] = useState('')
  const [sendingMessage, setSendingMessage] = useState(false)

  async function handleSendMessage() {
    const messageFormatted = message.trim()

    if (messageFormatted.length === 0) return

    try {
      setSendingMessage(true)
      await api.post('/messages', { message: messageFormatted })

      setMessage('')
      Alert.alert('Mensagem enviada!')
    } catch (error) {
      console.error(error)
      Alert.alert('Algo deu errado')
    } finally {
      setSendingMessage(false)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        maxLength={140}
        value={message}
        onChangeText={setMessage}
        editable={!sendingMessage}
        keyboardAppearance='dark'
        placeholder='Qual a sua expectativa para o evento?'
        placeholderTextColor={COLORS.GRAY_PRIMARY}
      />

      <Button
        color={COLORS.WHITE}
        backgroundColor={COLORS.PINK}
        onPress={handleSendMessage}
        disabled={message.length === 0}
        isLoading={sendingMessage}
      >
        ENVIAR MENSAGEM
      </Button>
    </View>
  )
}
