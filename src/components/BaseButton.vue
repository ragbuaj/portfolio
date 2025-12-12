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

  xs, sm, md (default), lg, xl, 2xl, 3xl

  Contoh:
  <BaseButton text="Extra Small" size="xs" />
  <BaseButton text="Small" size="sm" />
  <BaseButton text="Medium" size="md" />
  <BaseButton text="Large" size="lg" />
  <BaseButton text="Extra Large" size="xl" />
  <BaseButton text="2X Large" size="2xl" />
  <BaseButton text="3X Large" size="3xl" />

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

  Responsive button untuk mobile-first design:
  <BaseButton
    text="Get Started"
    variant="primary"
    :responsive-size="{ xs: 'sm', md: 'md', lg: 'lg' }"
    :full-width="true"
    custom-class="sm:w-auto"
  />

  Responsive gradient CTA button:
  <BaseButton
    text="Start Free Trial"
    gradient="bg-gradient-to-r from-blue-600 to-indigo-600"
    :responsive-size="{ xs: 'md', sm: 'lg', lg: 'xl' }"
    rounded="full"
    custom-class="shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105"
  />

  =====================================================
  15. RESPONSIVE SIZING
  =====================================================

  Button dapat memiliki ukuran berbeda di berbagai breakpoint menggunakan
  prop `responsiveSize`. Ini menggunakan Tailwind breakpoints:

  - xs: Mobile (< 640px) - base/default
  - sm: Small devices (>= 640px)
  - md: Medium devices (>= 768px)
  - lg: Large devices (>= 1024px)
  - xl: Extra large devices (>= 1280px)

  Contoh Basic Responsive:
  <BaseButton
    text="Responsive Button"
    :responsive-size="{ xs: 'sm', md: 'md', lg: 'lg' }"
  />

  Button kecil di mobile, medium di tablet, large di desktop:
  <BaseButton
    text="Submit"
    variant="primary"
    :responsive-size="{ xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl', '2xl': '2xl' }"
  />

  Hero button dengan ukuran sangat besar:
  <BaseButton
    text="Get Started"
    size="3xl"
    gradient="bg-gradient-to-r from-purple-600 to-pink-600"
  />

  Hanya customize untuk mobile dan desktop:
  <BaseButton
    text="Download"
    :responsive-size="{ xs: 'sm', lg: 'xl' }"
  />

  Responsive dengan icon:
  <BaseButton
    text="Next Step"
    icon="<svg>...</svg>"
    :responsive-size="{ xs: 'sm', md: 'lg' }"
  />

  Responsive gradient button:
  <BaseButton
    text="Get Started"
    gradient="bg-gradient-to-r from-blue-500 to-purple-600"
    :responsive-size="{ xs: 'md', lg: 'xl' }"
    rounded="full"
  />

  CATATAN:
  - Jika `responsiveSize` tidak disediakan, akan menggunakan prop `size` biasa
  - responsiveSize mengoverride prop `size`
  - Icon, gaps, padding, dan text size semuanya menyesuaikan secara responsif

  =====================================================
  16. PROPS REFERENCE
  =====================================================

  text          : string           - Text button
  type          : string           - 'button' | 'submit' | 'reset'
  variant       : string           - 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size          : string           - 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  responsiveSize: object           - Responsive sizes per breakpoint
                                     { xs?: size, sm?: size, md?: size, lg?: size, xl?: size, '2xl'?: size }
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
  17. EVENTS
  =====================================================

  @click        : MouseEvent       - Dipanggil saat button diklik

  =====================================================
-->

<script setup lang="ts">
import { computed } from 'vue'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

interface ResponsiveSize {
  xs?: ButtonSize  // Mobile (< 640px)
  sm?: ButtonSize  // Small devices (>= 640px)
  md?: ButtonSize  // Medium devices (>= 768px)
  lg?: ButtonSize  // Large devices (>= 1024px)
  xl?: ButtonSize  // Extra large devices (>= 1280px)
  '2xl'?: ButtonSize  // 2X large devices (>= 1536px)
}

interface Props {
  text?: string
  type?: 'button' | 'reset' | 'submit'
  variant?: ButtonVariant
  size?: ButtonSize
  responsiveSize?: ResponsiveSize
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
    '2xl': 'px-7 py-4 text-2xl',
    '3xl': 'px-8 py-4.5 text-3xl',
  }

  // If responsive size is provided, use responsive classes
  if (props.responsiveSize) {
    const responsiveClasses: string[] = []

    // Base size (mobile-first)
    if (props.responsiveSize.xs) {
      responsiveClasses.push(sizes[props.responsiveSize.xs])
    } else {
      responsiveClasses.push(sizes[props.size])
    }

    // sm breakpoint (>= 640px)
    if (props.responsiveSize.sm) {
      const smSizes: Record<ButtonSize, string> = {
        xs: 'sm:px-2.5 sm:py-1.5 sm:text-xs',
        sm: 'sm:px-3 sm:py-2 sm:text-sm',
        md: 'sm:px-4 sm:py-2.5 sm:text-base',
        lg: 'sm:px-5 sm:py-3 sm:text-lg',
        xl: 'sm:px-6 sm:py-3.5 sm:text-xl',
        '2xl': 'sm:px-7 sm:py-4 sm:text-2xl',
        '3xl': 'sm:px-8 sm:py-4.5 sm:text-3xl',
      }
      responsiveClasses.push(smSizes[props.responsiveSize.sm])
    }

    // md breakpoint (>= 768px)
    if (props.responsiveSize.md) {
      const mdSizes: Record<ButtonSize, string> = {
        xs: 'md:px-2.5 md:py-1.5 md:text-xs',
        sm: 'md:px-3 md:py-2 md:text-sm',
        md: 'md:px-4 md:py-2.5 md:text-base',
        lg: 'md:px-5 md:py-3 md:text-lg',
        xl: 'md:px-6 md:py-3.5 md:text-xl',
        '2xl': 'md:px-7 md:py-4 md:text-2xl',
        '3xl': 'md:px-8 md:py-4.5 md:text-3xl',
      }
      responsiveClasses.push(mdSizes[props.responsiveSize.md])
    }

    // lg breakpoint (>= 1024px)
    if (props.responsiveSize.lg) {
      const lgSizes: Record<ButtonSize, string> = {
        xs: 'lg:px-2.5 lg:py-1.5 lg:text-xs',
        sm: 'lg:px-3 lg:py-2 lg:text-sm',
        md: 'lg:px-4 lg:py-2.5 lg:text-base',
        lg: 'lg:px-5 lg:py-3 lg:text-lg',
        xl: 'lg:px-6 lg:py-3.5 lg:text-xl',
        '2xl': 'lg:px-7 lg:py-4 lg:text-2xl',
        '3xl': 'lg:px-8 lg:py-4.5 lg:text-3xl',
      }
      responsiveClasses.push(lgSizes[props.responsiveSize.lg])
    }

    // xl breakpoint (>= 1280px)
    if (props.responsiveSize.xl) {
      const xlSizes: Record<ButtonSize, string> = {
        xs: 'xl:px-2.5 xl:py-1.5 xl:text-xs',
        sm: 'xl:px-3 xl:py-2 xl:text-sm',
        md: 'xl:px-4 xl:py-2.5 xl:text-base',
        lg: 'xl:px-5 xl:py-3 xl:text-lg',
        xl: 'xl:px-6 xl:py-3.5 xl:text-xl',
        '2xl': 'xl:px-7 xl:py-4 xl:text-2xl',
        '3xl': 'xl:px-8 xl:py-4.5 xl:text-3xl',
      }
      responsiveClasses.push(xlSizes[props.responsiveSize.xl])
    }

    // 2xl breakpoint (>= 1536px)
    if (props.responsiveSize['2xl']) {
      const xxlSizes: Record<ButtonSize, string> = {
        xs: '2xl:px-2.5 2xl:py-1.5 2xl:text-xs',
        sm: '2xl:px-3 2xl:py-2 2xl:text-sm',
        md: '2xl:px-4 2xl:py-2.5 2xl:text-base',
        lg: '2xl:px-5 2xl:py-3 2xl:text-lg',
        xl: '2xl:px-6 2xl:py-3.5 2xl:text-xl',
        '2xl': '2xl:px-7 2xl:py-4 2xl:text-2xl',
        '3xl': '2xl:px-8 2xl:py-4.5 2xl:text-3xl',
      }
      responsiveClasses.push(xxlSizes[props.responsiveSize['2xl']])
    }

    return responsiveClasses.join(' ')
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
    '2xl': 'w-8 h-8',
    '3xl': 'w-9 h-9',
  }

  // If responsive size is provided, use responsive icon sizes
  if (props.responsiveSize) {
    const responsiveIconClasses: string[] = []

    // Base size (mobile-first)
    if (props.responsiveSize.xs) {
      responsiveIconClasses.push(sizes[props.responsiveSize.xs])
    } else {
      responsiveIconClasses.push(sizes[props.size])
    }

    // sm breakpoint
    if (props.responsiveSize.sm) {
      const smSizes: Record<ButtonSize, string> = {
        xs: 'sm:w-3 sm:h-3',
        sm: 'sm:w-4 sm:h-4',
        md: 'sm:w-5 sm:h-5',
        lg: 'sm:w-6 sm:h-6',
        xl: 'sm:w-7 sm:h-7',
        '2xl': 'sm:w-8 sm:h-8',
        '3xl': 'sm:w-9 sm:h-9',
      }
      responsiveIconClasses.push(smSizes[props.responsiveSize.sm])
    }

    // md breakpoint
    if (props.responsiveSize.md) {
      const mdSizes: Record<ButtonSize, string> = {
        xs: 'md:w-3 md:h-3',
        sm: 'md:w-4 md:h-4',
        md: 'md:w-5 md:h-5',
        lg: 'md:w-6 md:h-6',
        xl: 'md:w-7 md:h-7',
        '2xl': 'md:w-8 md:h-8',
        '3xl': 'md:w-9 md:h-9',
      }
      responsiveIconClasses.push(mdSizes[props.responsiveSize.md])
    }

    // lg breakpoint
    if (props.responsiveSize.lg) {
      const lgSizes: Record<ButtonSize, string> = {
        xs: 'lg:w-3 lg:h-3',
        sm: 'lg:w-4 lg:h-4',
        md: 'lg:w-5 lg:h-5',
        lg: 'lg:w-6 lg:h-6',
        xl: 'lg:w-7 lg:h-7',
        '2xl': 'lg:w-8 lg:h-8',
        '3xl': 'lg:w-9 lg:h-9',
      }
      responsiveIconClasses.push(lgSizes[props.responsiveSize.lg])
    }

    // xl breakpoint
    if (props.responsiveSize.xl) {
      const xlSizes: Record<ButtonSize, string> = {
        xs: 'xl:w-3 xl:h-3',
        sm: 'xl:w-4 xl:h-4',
        md: 'xl:w-5 xl:h-5',
        lg: 'xl:w-6 xl:h-6',
        xl: 'xl:w-7 xl:h-7',
        '2xl': 'xl:w-8 xl:h-8',
        '3xl': 'xl:w-9 xl:h-9',
      }
      responsiveIconClasses.push(xlSizes[props.responsiveSize.xl])
    }

    // 2xl breakpoint
    if (props.responsiveSize['2xl']) {
      const xxlSizes: Record<ButtonSize, string> = {
        xs: '2xl:w-3 2xl:h-3',
        sm: '2xl:w-4 2xl:h-4',
        md: '2xl:w-5 2xl:h-5',
        lg: '2xl:w-6 2xl:h-6',
        xl: '2xl:w-7 2xl:h-7',
        '2xl': '2xl:w-8 2xl:h-8',
        '3xl': '2xl:w-9 2xl:h-9',
      }
      responsiveIconClasses.push(xxlSizes[props.responsiveSize['2xl']])
    }

    return responsiveIconClasses.join(' ')
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
    '2xl': 'gap-3.5',
    '3xl': 'gap-4',
  }

  // If responsive size is provided, use responsive gaps
  if (props.responsiveSize) {
    const responsiveGapClasses: string[] = []

    // Base size (mobile-first)
    if (props.responsiveSize.xs) {
      responsiveGapClasses.push(gaps[props.responsiveSize.xs])
    } else {
      responsiveGapClasses.push(gaps[props.size])
    }

    // sm breakpoint
    if (props.responsiveSize.sm) {
      const smGaps: Record<ButtonSize, string> = {
        xs: 'sm:gap-1',
        sm: 'sm:gap-1.5',
        md: 'sm:gap-2',
        lg: 'sm:gap-2.5',
        xl: 'sm:gap-3',
        '2xl': 'sm:gap-3.5',
        '3xl': 'sm:gap-4',
      }
      responsiveGapClasses.push(smGaps[props.responsiveSize.sm])
    }

    // md breakpoint
    if (props.responsiveSize.md) {
      const mdGaps: Record<ButtonSize, string> = {
        xs: 'md:gap-1',
        sm: 'md:gap-1.5',
        md: 'md:gap-2',
        lg: 'md:gap-2.5',
        xl: 'md:gap-3',
        '2xl': 'md:gap-3.5',
        '3xl': 'md:gap-4',
      }
      responsiveGapClasses.push(mdGaps[props.responsiveSize.md])
    }

    // lg breakpoint
    if (props.responsiveSize.lg) {
      const lgGaps: Record<ButtonSize, string> = {
        xs: 'lg:gap-1',
        sm: 'lg:gap-1.5',
        md: 'lg:gap-2',
        lg: 'lg:gap-2.5',
        xl: 'lg:gap-3',
        '2xl': 'lg:gap-3.5',
        '3xl': 'lg:gap-4',
      }
      responsiveGapClasses.push(lgGaps[props.responsiveSize.lg])
    }

    // xl breakpoint
    if (props.responsiveSize.xl) {
      const xlGaps: Record<ButtonSize, string> = {
        xs: 'xl:gap-1',
        sm: 'xl:gap-1.5',
        md: 'xl:gap-2',
        lg: 'xl:gap-2.5',
        xl: 'xl:gap-3',
        '2xl': 'xl:gap-3.5',
        '3xl': 'xl:gap-4',
      }
      responsiveGapClasses.push(xlGaps[props.responsiveSize.xl])
    }

    // 2xl breakpoint
    if (props.responsiveSize['2xl']) {
      const xxlGaps: Record<ButtonSize, string> = {
        xs: '2xl:gap-1',
        sm: '2xl:gap-1.5',
        md: '2xl:gap-2',
        lg: '2xl:gap-2.5',
        xl: '2xl:gap-3',
        '2xl': '2xl:gap-3.5',
        '3xl': '2xl:gap-4',
      }
      responsiveGapClasses.push(xxlGaps[props.responsiveSize['2xl']])
    }

    return responsiveGapClasses.join(' ')
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
