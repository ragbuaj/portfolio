<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue'
import AppNavbar from '@/components/AppNavbar.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>

<template>
  <SpeedInsights />

  <div class="min-h-screen bg-[#050505] flex flex-col relative overflow-hidden">
    <AppNavbar />

    <RouterView v-slot="{ Component }">
      <Transition name="slide" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>

    <FooterBar />
  </div>
</template>

<style>
/* Page Transition Animations */
.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
