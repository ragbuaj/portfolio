<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { CSSProperties } from 'vue'

type size = '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl'

interface Props {
  href: string
  iconName: string
  iconPrefix: string
  iconStyle?: CSSProperties
  borderSize?: number
  iconSize?: size
}

const props = withDefaults(defineProps<Props>(), {
  iconStyle: () => ({ color: '#9333ea' }),
  iconSize: 'sm',
})
</script>

<template>
  <article
    class="bg-purple-950 rounded-full flex items-center justify-center"
    :class="props.borderSize ? `w-${props.borderSize} h-${props.borderSize}` : 'w-10 h-10'"
  >
    <a target="_blank" :href="props.href" class="flex items-center justify-center">
      <font-awesome-icon
        :icon="[props.iconPrefix, props.iconName]"
        :style="props.iconStyle"
        :size="props.iconSize"
      />
    </a>
  </article>
</template>
