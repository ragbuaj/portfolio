<!--
  =====================================================
  BaseAvatar Component - Dokumentasi Lengkap
  =====================================================

  Komponen avatar yang dapat digunakan kembali dengan loading states, error handling,
  dan styling yang dapat disesuaikan, termasuk dukungan responsive sizing.

  =====================================================
  1. BASIC USAGE
  =====================================================

  Basic:
  <BaseAvatar src="/path/to/image.jpg" />

  With size variants:
  <BaseAvatar src="/path/to/image.jpg" size="sm" />
  <BaseAvatar src="/path/to/image.jpg" size="md" />
  <BaseAvatar src="/path/to/image.jpg" size="lg" />
  <BaseAvatar src="/path/to/image.jpg" size="xl" />
  <BaseAvatar src="/path/to/image.jpg" size="2xl" />
  <BaseAvatar src="/path/to/image.jpg" size="3xl" />
  <BaseAvatar src="/path/to/image.jpg" :size="120" />  // Custom size in pixels

  =====================================================
  2. RESPONSIVE SIZING
  =====================================================

  Avatar dapat memiliki ukuran berbeda di berbagai breakpoint menggunakan
  prop `responsiveSize`. Ini menggunakan Tailwind breakpoints:

  - xs: Mobile (< 640px) - base/default
  - sm: Small devices (>= 640px)
  - md: Medium devices (>= 768px)
  - lg: Large devices (>= 1024px)
  - xl: Extra large devices (>= 1280px)

  Avatar Sizes:
  - sm: 32px (w-8 h-8)
  - md: 64px (w-16 h-16)
  - lg: 96px (w-24 h-24)
  - xl: 128px (w-32 h-32)
  - 2xl: 160px (w-40 h-40)
  - 3xl: 192px (w-48 h-48)

  Basic Responsive Avatar:
  <BaseAvatar
    src="/user-profile.jpg"
    :responsive-size="{ xs: 'sm', md: 'md', lg: 'lg' }"
  />

  Avatar kecil di mobile, besar di desktop:
  <BaseAvatar
    src="/profile.jpg"
    :responsive-size="{ xs: 'sm', lg: 'xl' }"
  />

  Semua breakpoints:
  <BaseAvatar
    src="/avatar.jpg"
    :responsive-size="{
      xs: 'sm',
      sm: 'sm',
      md: 'md',
      lg: 'lg',
      xl: 'xl'
    }"
  />

  Responsive clickable avatar:
  <BaseAvatar
    src="/profile.jpg"
    :responsive-size="{ xs: 'md', lg: 'xl' }"
    clickable
    @click="openProfile"
  />

  CATATAN:
  - Jika `responsiveSize` tidak disediakan, akan menggunakan prop `size` biasa
  - responsiveSize mengoverride prop `size`
  - Custom size (number) tidak dapat dikombinasikan dengan responsiveSize

  =====================================================
  3. CUSTOM BORDER
  =====================================================

  With custom border:
  <BaseAvatar
    src="/path/to/image.jpg"
    border-color="border-blue-500"
    :border-width="4"
  />

  Responsive avatar dengan custom border:
  <BaseAvatar
    src="/profile.jpg"
    :responsive-size="{ xs: 'sm', md: 'lg' }"
    border-color="border-purple-500"
    :border-width="4"
  />

  =====================================================
  4. CLICKABLE AVATAR
  =====================================================

  Clickable avatar:
  <BaseAvatar
    src="/path/to/image.jpg"
    clickable
    @click="handleAvatarClick"
  />

  Responsive clickable avatar with hover effect:
  <BaseAvatar
    src="/user.jpg"
    :responsive-size="{ xs: 'md', lg: 'xl' }"
    clickable
    custom-class="ring-2 ring-offset-2 ring-blue-500"
    @click="viewProfile"
  />

  =====================================================
  5. CUSTOM PLACEHOLDER & ERROR HANDLING
  =====================================================

  With custom placeholder:
  <BaseAvatar
    src="/path/to/image.jpg"
    placeholder="/custom-placeholder.png"
  />

  With error handling:
  <BaseAvatar
    src="/might-fail.jpg"
    :show-error-fallback="true"
    @error="handleImageError"
  />

  =====================================================
  6. ADVANCED COMBINATIONS
  =====================================================

  Responsive profile avatar with all features:
  <BaseAvatar
    src="/user-profile.jpg"
    :responsive-size="{ xs: 'sm', md: 'md', lg: 'lg', xl: 'xl' }"
    border-color="border-gradient-to-r from-purple-500 to-pink-500"
    :border-width="4"
    clickable
    custom-class="shadow-xl hover:shadow-2xl"
    @click="openUserProfile"
  />

  Team member avatar (responsive):
  <BaseAvatar
    src="/team-member.jpg"
    :responsive-size="{ xs: 'sm', lg: 'md' }"
    border-color="border-gray-200"
    :border-width="2"
    alt="Team Member"
  />

  Hero profile avatar (extra large):
  <BaseAvatar
    src="/hero-profile.jpg"
    size="3xl"
    border-color="border-purple-600"
    :border-width="8"
    custom-class="shadow-2xl"
  />

  Responsive hero avatar:
  <BaseAvatar
    src="/profile.jpg"
    :responsive-size="{ xs: 'xl', md: '2xl', lg: '3xl' }"
    border-color="border-gradient-to-r from-purple-500 to-pink-500"
    :border-width="4"
  />

  =====================================================
  7. PROPS REFERENCE
  =====================================================

  src              : string (required)  - Image source URL
  size             : 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | number - Default: 'md'
  responsiveSize   : object             - Responsive sizes per breakpoint
                                          { xs?: size, sm?: size, md?: size, lg?: size, xl?: size, '2xl'?: size }
  borderColor      : string             - Tailwind border class - Default: 'border-gray-300'
  borderWidth      : 1 | 2 | 4 | 8      - Default: 2
  alt              : string             - Alt text for accessibility - Default: 'Avatar'
  loading          : 'lazy' | 'eager'   - Default: 'lazy'
  placeholder      : string             - Fallback image URL - Default: '/images/avatar-placeholder.png'
  clickable        : boolean            - Enable click interaction - Default: false
  showErrorFallback: boolean            - Show error icon on load failure - Default: true
  customClass      : string             - Custom Tailwind classes

  =====================================================
  8. EVENTS
  =====================================================

  @click : MouseEvent - Emitted when avatar is clicked (only if clickable is true)
  @load  : Event      - Emitted when image loads successfully
  @error : Event      - Emitted when image fails to load

  =====================================================
-->

<script setup lang="ts">
import { computed, ref } from 'vue'

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

interface ResponsiveSize {
  xs?: AvatarSize // Mobile (< 640px)
  sm?: AvatarSize // Small devices (>= 640px)
  md?: AvatarSize // Medium devices (>= 768px)
  lg?: AvatarSize // Large devices (>= 1024px)
  xl?: AvatarSize // Extra large devices (>= 1280px)
}

interface Props {
  src: string
  size?: AvatarSize | number
  responsiveSize?: ResponsiveSize
  borderColor?: string
  borderWidth?: number
  alt?: string
  loading?: 'lazy' | 'eager'
  placeholder?: string
  clickable?: boolean
  showErrorFallback?: boolean
  customClass?: string
}

const props = withDefaults(defineProps<Props>(), {
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

  const sizes: Record<AvatarSize, string> = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
    '2xl': 'w-40 h-40',
    '3xl': 'w-48 h-48',
  }

  // If responsive size is provided, use responsive classes
  if (props.responsiveSize) {
    const responsiveClasses: string[] = []

    // Base size (mobile-first)
    if (props.responsiveSize.xs) {
      responsiveClasses.push(sizes[props.responsiveSize.xs])
    } else if (typeof props.size === 'string') {
      responsiveClasses.push(sizes[props.size])
    }

    // sm breakpoint (>= 640px)
    if (props.responsiveSize.sm) {
      const smSizes: Record<AvatarSize, string> = {
        sm: 'sm:w-8 sm:h-8',
        md: 'sm:w-16 sm:h-16',
        lg: 'sm:w-24 sm:h-24',
        xl: 'sm:w-32 sm:h-32',
        '2xl': 'sm:w-40 sm:h-40',
        '3xl': 'sm:w-48 sm:h-48',
      }
      responsiveClasses.push(smSizes[props.responsiveSize.sm])
    }

    // md breakpoint (>= 768px)
    if (props.responsiveSize.md) {
      const mdSizes: Record<AvatarSize, string> = {
        sm: 'md:w-8 md:h-8',
        md: 'md:w-16 md:h-16',
        lg: 'md:w-24 md:h-24',
        xl: 'md:w-32 md:h-32',
        '2xl': 'md:w-40 md:h-40',
        '3xl': 'md:w-48 md:h-48',
      }
      responsiveClasses.push(mdSizes[props.responsiveSize.md])
    }

    // lg breakpoint (>= 1024px)
    if (props.responsiveSize.lg) {
      const lgSizes: Record<AvatarSize, string> = {
        sm: 'lg:w-8 lg:h-8',
        md: 'lg:w-16 lg:h-16',
        lg: 'lg:w-24 lg:h-24',
        xl: 'lg:w-32 lg:h-32',
        '2xl': 'lg:w-40 lg:h-40',
        '3xl': 'lg:w-48 lg:h-48',
      }
      responsiveClasses.push(lgSizes[props.responsiveSize.lg])
    }

    // xl breakpoint (>= 1280px)
    if (props.responsiveSize.xl) {
      const xlSizes: Record<AvatarSize, string> = {
        sm: 'xl:w-8 xl:h-8',
        md: 'xl:w-16 xl:h-16',
        lg: 'xl:w-24 xl:h-24',
        xl: 'xl:w-32 xl:h-32',
        '2xl': 'xl:w-40 xl:h-40',
        '3xl': 'xl:w-48 xl:h-48',
      }
      responsiveClasses.push(xlSizes[props.responsiveSize.xl])
    }

    return responsiveClasses.join(' ')
  }

  return typeof props.size === 'string' ? sizes[props.size] : sizes.md
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
  typeof props.size === 'number' ? '' : sizeClasses.value,
  borderWidthClass.value,
  props.borderColor,
  {
    'cursor-pointer hover:scale-105': props.clickable,
    'opacity-50': hasError.value && props.showErrorFallback,
    'animate-pulse bg-gray-200': isLoading.value,
  },
  props.customClass || '',
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
