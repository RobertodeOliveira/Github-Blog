import { useEffect, useState } from 'react'
import { UserProp, getUser } from '../api/services'

export function useUser(user: string) {
  const [infoUser, setInfoUser] = useState<UserProp>()

  const handleLoadUser = async () => {
    const data: any = await getUser(`${user}`)
    setInfoUser(data)
  }

  useEffect(() => {
    handleLoadUser()
  }, [])

  return { infoUser }
}
