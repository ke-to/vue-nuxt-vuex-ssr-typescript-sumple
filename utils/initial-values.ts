import { User } from "@/backend/types/user";
import { UserStatus } from "@/backend/constants/user-status";

export const initialUserState: User = {
  id: 0,
  name: '',
  status: UserStatus.EDITOR
}