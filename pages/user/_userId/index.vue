<template>
  <div class="user-detail">
    <div class="user-detail__list">
      <Button v-for="user in users$" :key="user.id" :color="color.PRIMARY">
        <nuxt-link :to="`/user/${user.id}`">
          {{ user.name }}
        </nuxt-link>
      </Button>
    </div>
    <div class="user-detail__info">
      <div class="user-detail__info__id">{{ user$.id }}</div>
      <div class="user-detail__info__name">{{ user$.name }}</div>
      <div class="user-detail__info__status">{{ user$.status }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { RouterParams } from '@/backend/types/router-params'
import { userRead } from '@/store'
import { User } from '@/backend/types/user'
import Button from '@/components/Button.vue'
import { ColorType } from '@/backend/constants/color-type'

@Component({
  components: {
    Button
  }
})
export default class extends Vue {
  private readonly color = ColorType

  get users$(): User[] {
    return userRead.users$
  }

  get user$(): User {
    return userRead.selectedUser$
  }

  public async fetch({ params }: { params: RouterParams }) {
    userRead.selectOne(params.userId)
    await userRead.loadUsers()
  }
}
</script>

<style lang="scss" scoped>
.active-link {
  color: gray;
  list-style: none;
}
</style>
