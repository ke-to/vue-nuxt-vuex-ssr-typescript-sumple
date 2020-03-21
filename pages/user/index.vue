<template>
  <div class="user-list">
    <Button v-for="user in users$" :key="user.id" :color="color.PRIMARY">
      <nuxt-link :to="`/user/${user.id}`">
        {{ user.name }}
      </nuxt-link>
    </Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
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

  public async fetch() {
    await userRead.loadUsers()
  }
}
</script>

<style lang="scss" scoped></style>
