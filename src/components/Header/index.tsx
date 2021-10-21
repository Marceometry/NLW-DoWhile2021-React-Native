import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import LogoSvg from '../../assets/logo.svg'
import { UserPhoto } from '../UserPhoto'

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.userContainer}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>

        <UserPhoto uri='https://github.com/Marceometry.png' />
      </View>
    </View>
  )
}
