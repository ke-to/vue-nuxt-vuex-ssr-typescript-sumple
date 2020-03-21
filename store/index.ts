import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import UserRead from "./user/user-read";

let userRead: UserRead

const initialiseStores = (store: Store<any>): void => {
  userRead = getModule(UserRead, store)
}

const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]

export {
  initialiseStores,
  userRead
}
