import { StyleSheet } from 'react-native'
import { COLORS } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
  },
  avatar: {
    borderRadius: 999,
    borderWidth: 4,
    borderColor: COLORS.BLACK_SECONDARY,
  },
})
