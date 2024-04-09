import { api } from '..'

export type User = {
  name: string
  avatar_url: string
  login: string
  bio: string
  followers: number
}

export type UserProp = {
  props: User
}

export const getUser = async (user: string) => {
  try {
    const response = await api.get<UserProp>(`${user}`)
    return response.data
  } catch (error) {
    return error
  }
}
