<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        sumple
      </h1>
      <h2 class="subtitle">
        My great Nuxt.js project
      </h2>
      <div class="links">
        <Button :color="color.PRIMARY">
          <nuxt-link to="/user">
            Users
          </nuxt-link>
        </Button>
        <Button v-for="userId in userIds" :key="userId" :color="color.PRIMARY">
          <nuxt-link :to="`/user/${userId}`">
            User Detail: id -> {{ userId }}
          </nuxt-link>
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '@/components/Logo.vue'
import Button from '@/components/Button.vue'
import { ColorType } from '@/backend/constants/color-type'

@Component({
  components: {
    Logo,
    Button
  }
})
export default class extends Vue {
  private readonly color = ColorType
  private readonly userIds: number[] = [1, 2]
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
