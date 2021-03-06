import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  userContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoutText: {
    marginRight: 20,
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
  },
})
