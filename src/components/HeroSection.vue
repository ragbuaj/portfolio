<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="w-full min-h-[85vh] flex items-center justify-center p-4 md:p-6 pt-24 md:pt-32">
    <div
      class="w-full max-w-[1400px] bg-[#0A0A0A] rounded-[3rem] border-2 border-white/10 relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[700px]"
    >
      <!-- Left Content -->
      <div
        class="relative z-10 flex flex-col justify-center p-8 md:p-20 border-b lg:border-b-0 lg:border-r border-white/5"
      >
        <h3 class="font-jetbrains text-xs md:text-sm tracking-[0.2em] text-gray-400 mb-6 uppercase">
          Web Developer
        </h3>

        <h1
          class="font-oswald font-bold text-7xl md:text-9xl text-white leading-[0.9] mb-8 tracking-tighter"
        >
          RAGIL <br />
          BUDHI AJIE
        </h1>

        <p class="font-inter text-gray-400 text-lg md:text-xl max-w-md leading-relaxed mb-12">
          I am a web developer who is passionate about creating beautiful and user-friendly
          websites. I am also a quick learner and am always looking for new challenges.
        </p>

        <div class="flex">
          <RouterLink
            to="/projects"
            class="group bg-white text-black px-8 py-4 rounded-full font-jetbrains font-bold text-sm tracking-wide hover:bg-gray-200 transition-colors flex items-center gap-2"
          >
            VIEW PROJECTS
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </RouterLink>
        </div>
      </div>

      <!-- Right Visual (Radar) -->
      <div class="relative flex items-center justify-center bg-[#080808] overflow-hidden">
        <!-- Background Grid -->
        <div
          class="absolute inset-0"
          style="
            background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 40px 40px;
            opacity: 0.3;
          "
        ></div>

        <!-- Radar Circles -->
        <div
          class="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] flex items-center justify-center"
        >
          <!-- Center Pulse -->
          <div
            class="absolute w-16 h-16 bg-white rounded-full z-20 shadow-[0_0_40px_rgba(255,255,255,0.5)] animate-pulse-slow"
          ></div>

          <!-- Rings -->
          <div class="absolute border border-white/20 rounded-full w-[30%] h-[30%]"></div>
          <div class="absolute border border-white/20 rounded-full w-[60%] h-[60%]"></div>
          <div class="absolute border border-white/20 rounded-full w-[100%] h-[100%]"></div>

          <!-- Crosshairs -->
          <div class="absolute w-full h-[1px] bg-white/10 top-1/2 left-0"></div>
          <div class="absolute h-full w-[1px] bg-white/10 left-1/2 top-0"></div>

          <!-- Rotating Scan Line -->
          <div class="absolute w-full h-full animate-spin-slow opacity-30">
            <div
              class="w-1/2 h-full bg-gradient-to-r from-transparent to-white/10 blur-sm absolute right-0 top-0 origin-left"
              style="clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%)"
            ></div>
          </div>
        </div>

        <!-- System Status Badge -->
        <div
          class="absolute bottom-12 right-12 border border-white/10 bg-black/50 backdrop-blur rounded-full px-6 py-3 flex items-center gap-4"
        >
          <div class="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
          <div class="flex flex-col">
            <span class="text-[10px] font-jetbrains text-gray-500 uppercase tracking-wider"
              >System Status</span
            >
            <span class="text-xs font-inter font-medium text-white">Operational & Active</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.animate-spin-slow {
  animation: spin 10s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
