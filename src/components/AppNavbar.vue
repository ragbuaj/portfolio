<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close menu when route changes
watch(
  () => route.fullPath,
  () => {
    isMobileMenuOpen.value = false
  },
)
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 transition-all duration-300"
    :class="{ 'bg-[#050505]/90 backdrop-blur-md': isMobileMenuOpen }"
  >
    <!-- Logo -->
    <RouterLink to="/" class="flex items-center gap-2 group z-50">
      <div
        class="relative w-8 h-8 flex items-center justify-center border border-white/20 rotate-45 transition-transform group-hover:rotate-90"
        :class="{ 'border-white': isMobileMenuOpen }"
      >
        <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>
      <span class="font-oswald font-bold text-xl tracking-widest text-white ml-2">ragilbuaj.</span>
    </RouterLink>

    <!-- Center Nav Pills (Desktop) -->
    <div
      class="hidden md:flex items-center bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-full px-1 py-1"
    >
      <RouterLink
        to="/"
        class="px-6 py-2 rounded-full text-xs font-jetbrains font-medium text-gray-400 hover:text-white transition-all [&.router-link-exact-active]:bg-white [&.router-link-exact-active]:text-black"
      >
        01 HOME
      </RouterLink>
      <RouterLink
        to="/projects"
        class="px-6 py-2 rounded-full text-xs font-jetbrains font-medium text-gray-400 hover:text-white transition-all [&.router-link-active]:bg-white [&.router-link-active]:text-black"
      >
        02 PROJECTS
      </RouterLink>
      <RouterLink
        to="/experiences"
        class="px-6 py-2 rounded-full text-xs font-jetbrains font-medium text-gray-400 hover:text-white transition-all [&.router-link-active]:bg-white [&.router-link-active]:text-black"
      >
        03 EXPERIENCES
      </RouterLink>
      <RouterLink
        to="/about"
        class="px-6 py-2 rounded-full text-xs font-jetbrains font-medium text-gray-400 hover:text-white transition-all [&.router-link-active]:bg-white [&.router-link-active]:text-black"
      >
        04 ABOUT & CONTACT
      </RouterLink>
    </div>

    <!-- Right Action (Desktop) -->
    <a
      href="/resume.pdf"
      class="hidden md:flex items-center px-6 py-2.5 rounded-full border border-white/20 text-xs font-jetbrains text-white hover:bg-white hover:text-black transition-colors"
    >
      RESUME.PDF
    </a>

    <!-- Mobile Menu Toggle -->
    <button @click="toggleMenu" class="md:hidden text-white z-50 relative group">
      <div class="relative w-6 h-6 flex flex-col justify-center items-center gap-1.5">
        <span
          class="w-6 h-0.5 bg-white transition-all duration-300"
          :class="{ 'rotate-45 translate-y-2': isMobileMenuOpen }"
        ></span>
        <span
          class="w-6 h-0.5 bg-white transition-all duration-300"
          :class="{ 'opacity-0': isMobileMenuOpen }"
        ></span>
        <span
          class="w-6 h-0.5 bg-white transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"
        ></span>
      </div>
    </button>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center h-screen w-screen"
      >
        <div class="flex flex-col items-center gap-8">
          <RouterLink
            to="/"
            @click="isMobileMenuOpen = false"
            active-class="!text-white"
            class="text-3xl font-oswald text-gray-600 hover:text-white transition-colors"
          >
            HOME
          </RouterLink>
          <RouterLink
            to="/projects"
            @click="isMobileMenuOpen = false"
            active-class="!text-white"
            class="text-3xl font-oswald text-gray-600 hover:text-white transition-colors"
          >
            PROJECTS
          </RouterLink>
          <RouterLink
            to="/experiences"
            @click="isMobileMenuOpen = false"
            active-class="!text-white"
            class="text-3xl font-oswald text-gray-600 hover:text-white transition-colors"
          >
            EXPERIENCES
          </RouterLink>
          <RouterLink
            to="/about"
            @click="isMobileMenuOpen = false"
            active-class="!text-white"
            class="text-3xl font-oswald text-gray-600 hover:text-white transition-colors"
          >
            ABOUT
          </RouterLink>
          <a
            href="/resume.pdf"
            class="mt-8 px-8 py-3 rounded-full border border-white/20 text-sm font-jetbrains text-white hover:bg-white hover:text-black transition-colors"
          >
            RESUME.PDF
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
