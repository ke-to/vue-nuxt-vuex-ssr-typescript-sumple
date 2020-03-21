import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { UserMap, User } from '@/backend/types/user'
import { initialUserState } from '@/utils/initial-values'
import { fetchUsers } from '@/backend/service/user.service'

export const USER_READ_STORE_KEY = 'user/user-read'

@Module({ stateFactory: true, namespaced: true, name: USER_READ_STORE_KEY })
export default class UserRead extends VuexModule {
  private userMap: UserMap = { 0: initialUserState }
  private selectedUserId: number = 0
  private loaded: boolean = false
  private error: any = null

  @Mutation
  private _insertMany (users: User[]) {
    const map = users.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {})
    this.userMap = { ...this.userMap, ...map}
  }
  @Mutation
  private _selectOne (userId: number) {
    this.selectedUserId = userId
  }
  @Mutation
  private _toLoading () {
    this.loaded = false
  }
  @Mutation
  private _toLoaded () {
    this.loaded = true
  }
  @Mutation
  private _addError (error: any) {
    this.error = error
  }

  @Action
  async loadUsers () {
    this._toLoading()
    await fetchUsers()
      .then(users => this._insertMany(users))
      .then(() => this._toLoaded())
      .catch((e) => {
        console.error(e)
        this._addError(e)
        throw e
      })
  }
  @Action
  selectOne (userId: number) {
    this._selectOne(userId)
  }

  get users$ (): User[] {
    return Object.values(this.userMap).filter(user => !!user.id)
  }
  get selectedUser$ (): User {
    return this.userMap[this.selectedUserId]
  }
  get selectedUserId$ (): number {
    return this.selectedUserId
  }
  get loaded$ (): boolean {
    return this.loaded
  }
  get error$ (): any {
    return this.error
  }
}