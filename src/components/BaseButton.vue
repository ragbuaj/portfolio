<!--
  =====================================================
  BaseButton Component - Dokumentasi Lengkap
  =====================================================

  Komponen button yang fleksibel dan dapat disesuaikan dengan dukungan untuk
  variants, sizes, icons, loading states, gradients, dan custom styling.

  =====================================================
  1. BASIC USAGE
  =====================================================

  Penggunaan paling sederhana:
  <BaseButton text="Click Me" />

  Dengan variant dan size:
  <BaseButton text="Submit" variant="primary" size="lg" />

  =====================================================
  2. VARIANTS (Jenis Button)
  =====================================================

  - primary    : Biru solid (default)
  - secondary  : Abu-abu solid
  - outline    : Hanya border
  - ghost      : Transparan
  - danger     : Merah untuk aksi berbahaya

  Contoh:
  <BaseButton text="Primary" variant="primary" />
  <BaseButton text="Secondary" variant="secondary" />
  <BaseButton text="Outline" variant="outline" />
  <BaseButton text="Ghost" variant="ghost" />
  <BaseButton text="Delete" variant="danger" />

  =====================================================
  3. SIZES (Ukuran)
  =====================================================

  xs, sm, md (default), lg, xl

  Contoh:
  <BaseButton text="Extra Small" size="xs" />
  <BaseButton text="Small" size="sm" />
  <BaseButton text="Medium" size="md" />
  <BaseButton text="Large" size="lg" />
  <BaseButton text="Extra Large" size="xl" />

  =====================================================
  4. BUTTON TYPE
  =====================================================

  type: 'button' (default) | 'submit' | 'reset'

  Contoh:
  <BaseButton text="Submit Form" type="submit" />
  <BaseButton text="Reset Form" type="reset" />

  =====================================================
  5. STATES (Loading & Disabled)
  =====================================================

  Loading State (menampilkan spinner):
  <BaseButton text="Save" :loading="isLoading" />
  <BaseButton text="Processing" :loading="true" />

  Disabled State:
  <BaseButton text="Submit" :disabled="true" />
  <BaseButton text="Disabled" :disabled="isDisabled" />

  =====================================================
  6. ICONS
  =====================================================

  Posisi icon: 'left' (default) | 'right'

  Icon di kiri (default):
  <BaseButton
    text="Download"
    icon="<svg>...</svg>"
    icon-position="left"
  />

  Icon di kanan:
  <BaseButton
    text="Next"
    icon="<svg>...</svg>"
    icon-position="right"
  />

  Hanya icon (tanpa text):
  <BaseButton icon="<svg>...</svg>" />

  =====================================================
  7. GRADIENTS (Tailwind v4)
  =====================================================

  Linear gradient (horizontal):
  <BaseButton
    text="Gradient"
    gradient="bg-gradient-to-r from-blue-500 to-purple-600"
  />

  Linear gradient (vertical):
  <BaseButton
    text="Vertical"
    gradient="bg-gradient-to-b from-pink-500 to-orange-500"
  />

  Linear gradient (diagonal):
  <BaseButton
    text="Diagonal"
    gradient="bg-gradient-to-br from-green-400 to-blue-500"
  />

  Multiple color stops (via):
  <BaseButton
    text="Rainbow"
    gradient="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
  />

  Radial gradient:
  <BaseButton
    text="Radial"
    gradient="bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-500 to-purple-600"
  />

  Gradient directions:
  - bg-gradient-to-t     : atas
  - bg-gradient-to-tr    : atas kanan
  - bg-gradient-to-r     : kanan
  - bg-gradient-to-br    : bawah kanan
  - bg-gradient-to-b     : bawah
  - bg-gradient-to-bl    : bawah kiri
  - bg-gradient-to-l     : kiri
  - bg-gradient-to-tl    : atas kiri

  =====================================================
  8. CUSTOM COLORS (Border & Text)
  =====================================================

  Border Color:
  <BaseButton
    text="Custom Border"
    border-color="border-2 border-purple-500"
  />

  Text Color:
  <BaseButton
    text="Custom Text"
    text-color="text-emerald-600"
  />

  Kombinasi Border + Text:
  <BaseButton
    text="Outlined"
    variant="ghost"
    border-color="border-2 border-orange-500"
    text-color="text-orange-500"
  />

  Border dengan hover:
  <BaseButton
    text="Hover Effect"
    border-color="border-2 border-blue-500 hover:border-blue-700"
    text-color="text-blue-500 hover:text-blue-700"
  />

  Border styles:
  - border-2              : solid 2px
  - border-dashed         : garis putus-putus
  - border-dotted         : titik-titik
  - border-double         : garis ganda

  Border dengan opacity:
  <BaseButton
    border-color="border-2 border-blue-500/50"
    text-color="text-blue-500/70"
  />

  =====================================================
  9. ROUNDED CORNERS
  =====================================================

  rounded: 'none' | 'sm' | 'md' (default) | 'lg' | 'full'

  Contoh:
  <BaseButton text="Square" rounded="none" />
  <BaseButton text="Small" rounded="sm" />
  <BaseButton text="Medium" rounded="md" />
  <BaseButton text="Large" rounded="lg" />
  <BaseButton text="Pill" rounded="full" />

  =====================================================
  10. FULL WIDTH
  =====================================================

  Button memenuhi lebar container:
  <BaseButton text="Full Width" :full-width="true" />

  =====================================================
  11. CUSTOM CLASSES
  =====================================================

  Tambahkan class Tailwind apapun:
  <BaseButton
    text="Custom"
    custom-class="bg-orange-500 text-white hover:bg-orange-600"
  />

  Shadows:
  <BaseButton text="Shadow" custom-class="shadow-xl" />
  <BaseButton text="Glow" custom-class="shadow-lg shadow-blue-500/50" />

  Transform:
  <BaseButton text="Scale" custom-class="hover:scale-105" />
  <BaseButton text="Rotate" custom-class="hover:rotate-2" />

  =====================================================
  12. SLOT USAGE
  =====================================================

  Custom content menggunakan slot:
  <BaseButton variant="outline">
    <strong>Bold Text</strong>
  </BaseButton>

  <BaseButton>
    <span class="flex items-center gap-2">
      <Icon />
      <span>Custom Layout</span>
    </span>
  </BaseButton>

  =====================================================
  13. EVENT HANDLING
  =====================================================

  Click event:
  <BaseButton text="Click" @click="handleClick" />

  Dengan TypeScript:
  <BaseButton
    text="Submit"
    @click="(event: MouseEvent) => console.log(event)"
  />

  =====================================================
  14. CONTOH KOMBINASI ADVANCED
  =====================================================

  Gradient button dengan icon dan loading:
  <BaseButton
    text="Upload"
    icon="<svg>...</svg>"
    gradient="bg-gradient-to-r from-purple-500 to-pink-500"
    rounded="full"
    size="lg"
    :loading="uploading"
    @click="handleUpload"
  />

  Custom styled button:
  <BaseButton
    text="Special"
    variant="ghost"
    border-color="border-2 border-gradient-to-r from-pink-500 to-purple-500"
    text-color="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
    rounded="lg"
    custom-class="shadow-xl hover:shadow-2xl transform hover:scale-105"
  />

  Outlined gradient button:
  <BaseButton
    text="Fancy"
    variant="ghost"
    gradient="bg-gradient-to-r from-cyan-500 to-blue-500"
    border-color="border-2 border-transparent"
    text-color="text-white"
    rounded="full"
    size="lg"
    custom-class="shadow-lg shadow-blue-500/50"
  />

  =====================================================
  15. PROPS REFERENCE
  =====================================================

  text          : string           - Text button
  type          : string           - 'button' | 'submit' | 'reset'
  variant       : string           - 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size          : string           - 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  icon          : string           - SVG string untuk icon
  iconPosition  : string           - 'left' | 'right'
  loading       : boolean          - Tampilkan loading spinner
  disabled      : boolean          - Nonaktifkan button
  fullWidth     : boolean          - Button full width
  rounded       : string           - 'none' | 'sm' | 'md' | 'lg' | 'full'
  gradient      : string           - Tailwind gradient classes
  borderColor   : string           - Tailwind border classes
  textColor     : string           - Tailwind text color classes
  customClass   : string           - Custom Tailwind classes

  =====================================================
  16. EVENTS
  =====================================================

  @click        : MouseEvent       - Dipanggil saat button diklik

  =====================================================
-->

<script setup lang="ts">
import { computed } from 'vue'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface Props {
  text?: string
  type?: 'button' | 'reset' | 'submit'
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: string
  iconPosition?: 'left' | 'right'
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  customClass?: string
  gradient?: string
  borderColor?: string
  textColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  size: 'md',
  iconPosition: 'left',
  loading: false,
  disabled: false,
  fullWidth: false,
  rounded: 'md',
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const variantClasses = computed(() => {
  if (props.gradient) {
    const variants: Record<ButtonVariant, string> = {
      primary: 'text-white focus:ring-blue-500',
      secondary: 'text-white focus:ring-gray-500',
      outline: 'border-2 border-blue-600 focus:ring-blue-500',
      ghost: 'focus:ring-blue-500',
      danger: 'text-white focus:ring-red-500',
    }
    return variants[props.variant]
  }

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800 focus:ring-gray-500',
    outline:
      'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 focus:ring-blue-500',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-50 active:bg-blue-100 focus:ring-blue-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-500',
  }
  return variants[props.variant]
})

const sizeClasses = computed(() => {
  const sizes: Record<ButtonSize, string> = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-5 py-3 text-lg',
    xl: 'px-6 py-3.5 text-xl',
  }
  return sizes[props.size]
})

const roundedClasses = computed(() => {
  const rounded: Record<typeof props.rounded, string> = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  }
  return rounded[props.rounded]
})

const iconSize = computed(() => {
  const sizes: Record<ButtonSize, string> = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
  }
  return sizes[props.size]
})

const gapClasses = computed(() => {
  const gaps: Record<ButtonSize, string> = {
    xs: 'gap-1',
    sm: 'gap-1.5',
    md: 'gap-2',
    lg: 'gap-2.5',
    xl: 'gap-3',
  }
  return gaps[props.size]
})

const buttonClasses = computed(() => [
  'inline-flex items-center justify-center cursor-pointer',
  'font-medium transition-all duration-200',
  'focus:outline-none focus:ring-2 focus:ring-offset-2',
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
  variantClasses.value,
  sizeClasses.value,
  roundedClasses.value,
  props.fullWidth ? 'w-full' : '',
  props.loading ? 'cursor-wait' : '',
  props.gradient || '',
  props.borderColor || '',
  props.textColor || '',
  props.customClass || '',
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<template>
  <button
    :type="props.type"
    :class="buttonClasses"
    :disabled="props.disabled || props.loading"
    @click="handleClick"
    :aria-busy="props.loading"
    :aria-disabled="props.disabled"
  >
    <svg
      v-if="props.loading"
      :class="[iconSize, 'animate-spin']"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>

    <span v-if="!props.loading" :class="['inline-flex items-center', gapClasses]">
      <span
        v-if="props.icon && props.iconPosition === 'left'"
        :class="iconSize"
        v-html="props.icon"
      ></span>
      <span v-if="props.text">{{ props.text }}</span>
      <slot v-else></slot>
      <span
        v-if="props.icon && props.iconPosition === 'right'"
        :class="iconSize"
        v-html="props.icon"
      ></span>
    </span>

    <span v-if="props.loading" class="ml-2">Loading...</span>
  </button>
</template>

<style scoped>
button {
  -webkit-tap-highlight-color: transparent;
}
</style>
