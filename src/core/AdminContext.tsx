import type { FC } from 'react'
import AuthContext from '~/auth/AuthContext'
import { AuthProvider } from '../auth/types'

interface AdminContextProps {
  authProvider: AuthProvider
}

const AdminContext: FC<AdminContextProps> = ({ authProvider, children }) => {
  return (
    <AuthContext.Provider value={authProvider}>{children}</AuthContext.Provider>
  )
}

export default AdminContext