import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import { COLORS } from '../../theme'
import { Button } from '../Button'
import { styles } from './styles'

export function SendMessageForm() {
  const [message, setMessage] = useState('')
  const [sendingMessage, setSendingMessage] = useState(false)

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
        isLoading={sendingMessage}
      >
        ENVIAR MENSAGEM
      </Button>
    </View>
  )
}
