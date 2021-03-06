import React from 'react'
import { Image } from 'react-native'
import { styles } from './styles'
import { UserPhotoProps } from './types'

import avatarImg from '../../assets/avatar.png'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS } from '../../theme'

const SIZES = {
  SMALL: {
    containerSize: 32,
    avatarSize: 28,
  },
  NORMAL: {
    containerSize: 48,
    avatarSize: 42,
  },
}

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri

export function UserPhoto({
  uri = AVATAR_DEFAULT,
  size = 'NORMAL',
}: UserPhotoProps) {
  const { containerSize, avatarSize } = SIZES[size]

  return (
    <LinearGradient
      colors={[COLORS.PINK, COLORS.YELLOW]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
        },
      ]}
    >
      <Image
        source={{ uri }}
        style={[
          styles.avatar,
          {
            width: avatarSize,
            height: avatarSize,
          },
        ]}
      />
    </LinearGradient>
  )
}
