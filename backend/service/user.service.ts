import { User } from '../types/user'
import { UserStatus } from '../constants/user-status'

const users: User[] = [
  {
    id: 1,
    name: 'user1',
    status: UserStatus.ADMINISTRATOR
  },
  {
    id: 2,
    name: 'user2',
    status: UserStatus.EDITOR
  },
]

export const fetchUsers = (): Promise<User[]> => {
  return new Promise((resolve) => {
    resolve(users)
  })
}