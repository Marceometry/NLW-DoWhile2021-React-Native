import { ReactNode } from 'react'

export type User = {
  id: string
  name: string
  login: string
  avatar_url: string
}

export type AuthContextData = {
  user: User | null
  isSigningIn: boolean
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

export type AuthProviderProps = {
  children: ReactNode
}

export type AuthResponse = {
  token: string
  user: User
}

export type AuthorizationResponse = {
  params: {
    code?: string
    error?: string
  }
  type?: string
}
