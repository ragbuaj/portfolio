<!--
  BaseAvatar Component

  A reusable avatar component with loading states, error handling, and customizable styling.

  Usage:

  Basic:
  <BaseAvatar src="/path/to/image.jpg" />

  With size variants:
  <BaseAvatar src="/path/to/image.jpg" size="sm" />
  <BaseAvatar src="/path/to/image.jpg" size="md" />
  <BaseAvatar src="/path/to/image.jpg" size="lg" />
  <BaseAvatar src="/path/to/image.jpg" size="xl" />
  <BaseAvatar src="/path/to/image.jpg" :size="120" />  // Custom size in pixels

  With custom border:
  <BaseAvatar
    src="/path/to/image.jpg"
    border-color="border-blue-500"
    :border-width="4"
  />

  Clickable avatar:
  <BaseAvatar
    src="/path/to/image.jpg"
    clickable
    @click="handleAvatarClick"
  />

  With custom placeholder:
  <BaseAvatar
    src="/path/to/image.jpg"
    placeholder="/custom-placeholder.png"
  />

  Props:
  - src (required): Image source URL
  - size: 'sm' | 'md' | 'lg' | 'xl' | number - Default: 'md'
  - borderColor: Tailwind border class (e.g., 'border-purple-500') - Default: 'border-gray-300'
  - borderWidth: 1 | 2 | 4 | 8 - Default: 2
  - alt: Alt text for accessibility - Default: 'Avatar'
  - loading: 'lazy' | 'eager' - Default: 'lazy'
  - placeholder: Fallback image URL - Default: '/images/avatar-placeholder.png'
  - clickable: Enable click interaction - Default: false
  - showErrorFallback: Show error icon on load failure - Default: true

  Events:
  - @click: Emitted when avatar is clicked (only if clickable is true)
  - @load: Emitted when image loads successfully
  - @error: Emitted when image fails to load
-->

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  src: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | number
  borderColor?: string
  borderWidth?: number
  alt?: string
  loading?: 'lazy' | 'eager'
  placeholder?: string
  clickable?: boolean
  showErrorFallback?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  borderColor: 'border-gray-300',
  borderWidth: 2,
  alt: 'Avatar',
  loading: 'lazy',
  placeholder: '/images/avatar-placeholder.png',
  clickable: false,
  showErrorFallback: true,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
  load: [event: Event]
  error: [event: Event]
}>()

const isLoading = ref(true)
const hasError = ref(false)
const imgRef = ref<HTMLImageElement>()

// Size mapping
const sizeClasses = computed(() => {
  if (typeof props.size === 'number') {
    return {
      width: `${props.size}px`,
      height: `${props.size}px`,
    }
  }

  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
  }
  return sizes[props.size]
})

const borderWidthClass = computed(() => {
  const widths: Record<number, string> = {
    1: 'border',
    2: 'border-2',
    4: 'border-4',
    8: 'border-8',
  }
  return widths[props.borderWidth] || 'border-2'
})

const imageClasses = computed(() => [
  'rounded-full object-cover transition-all duration-200',
  typeof props.size === 'string' ? sizeClasses.value : '',
  borderWidthClass.value,
  props.borderColor,
  {
    'cursor-pointer hover:scale-105': props.clickable,
    'opacity-50': hasError.value && props.showErrorFallback,
    'animate-pulse bg-gray-200': isLoading.value,
  },
])

const dynamicStyles = computed(() => {
  return typeof props.size === 'number' ? sizeClasses.value : {}
})

const handleLoad = (event: Event) => {
  isLoading.value = false
  hasError.value = false
  emit('load', event)
}

const handleError = (event: Event) => {
  isLoading.value = false
  hasError.value = true
  emit('error', event)

  // Auto fallback to placeholder
  if (imgRef.value && props.placeholder) {
    imgRef.value.src = props.placeholder
  }
}

const handleClick = (event: MouseEvent) => {
  if (props.clickable) {
    emit('click', event)
  }
}
</script>

<template>
  <div class="relative inline-block">
    <!-- Loading placeholder -->
    <div v-if="isLoading" :class="imageClasses" class="animate-pulse bg-gray-200" />

    <!-- Main image -->
    <img
      ref="imgRef"
      :class="imageClasses"
      :style="dynamicStyles"
      :src="src"
      :alt="alt"
      :loading="loading"
      @load="handleLoad"
      @error="handleError"
      @click="handleClick"
    />

    <!-- Error state -->
    <div
      v-if="hasError && showErrorFallback"
      class="absolute inset-0 flex items-center justify-center rounded-full bg-gray-100"
    >
      <svg class="w-1/2 h-1/2 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </div>
  </div>
</template>
