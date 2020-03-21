import { UserStatus } from '../constants/user-status'

export interface User {
  id: number
  name: string
  status: UserStatus
}

export interface UserMap {
  [id: number]: User
}
