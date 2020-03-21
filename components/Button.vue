<template>
  <button
    class="button"
    :class="{ primary: color === type.PRIMARY, accent: color === type.ACCENT }"
    type="button"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { ColorType } from '@/backend/constants/color-type'

@Component({})
export default class extends Vue {
  private readonly type = ColorType
  @Prop() color!: ColorType
}
</script>

<style lang="scss" scoped>
@import '~/scss/index.scss';

.button {
  display: inline-block;
  border-radius: $baseSize;
  text-decoration: none;
  padding: $baseSize $baseSize * 2;
  &.primary {
    border: 1px solid $primary;
    color: $primary;
    &:hover {
      color: $primary-light;
      background-color: $primary;
    }
  }
  &.accent {
    border: 1px solid $accent;
    color: $accent;
    &:hover {
      color: $accent-light;
      background-color: $accent;
    }
  }
}
</style>
