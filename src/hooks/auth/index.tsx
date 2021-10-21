import React, { createContext, useContext, useEffect, useState } from 'react'
import * as AuthSessions from 'expo-auth-session'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  AuthContextData,
  AuthorizationResponse,
  AuthProviderProps,
  AuthResponse,
  User,
} from './types'
import { api } from '../../services/api'

const CLIENT_ID = 'bdccdf9e618bddd7dbba'
const USER_STORAGE = '@dowhilemobile:user'
const TOKEN_STORAGE = '@dowhilemobile:token'

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [isSigningIn, setIsSigningIn] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    async function loadUserStoragedData() {
      const storagedUser = await AsyncStorage.getItem(USER_STORAGE)
      const storagedToken = await AsyncStorage.getItem(TOKEN_STORAGE)

      if (!storagedUser || !storagedToken) {
        setIsSigningIn(false)
        return
      }

      api.defaults.headers.common['Authorization'] = `Bearer ${storagedToken}`
      setUser(JSON.parse(storagedUser))
      setIsSigningIn(false)
    }

    loadUserStoragedData()
  }, [])

  async function signIn() {
    try {
      setIsSigningIn(true)
      const authSessionResponse = (await AuthSessions.startAsync({
        authUrl: `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=read:user`,
      })) as AuthorizationResponse

      if (
        authSessionResponse.type === 'success' &&
        authSessionResponse.params.error !== 'access_denied'
      ) {
        const authResponse = await api.post('/authenticate', {
          code: authSessionResponse.params.code,
        })

        const { token, user } = authResponse.data as AuthResponse

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`

        await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))
        await AsyncStorage.setItem(TOKEN_STORAGE, token)

        setUser(user)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsSigningIn(false)
    }
  }

  async function signOut() {
    setUser(null)
    await AsyncStorage.removeItem(USER_STORAGE)
    await AsyncStorage.removeItem(TOKEN_STORAGE)
  }

  return (
    <AuthContext.Provider value={{ user, isSigningIn, signOut, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
