export enum AccountRole {
  ADMIN = 'admin',
  USER = 'user',
}

interface Account {
  id: string
  email: string
  password: string
  role: AccountRole
}

export default Account
