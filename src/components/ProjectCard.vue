<script setup lang="ts">
defineProps<{
  number: string
  category: string
  title: string
  tags: string[]
  link?: string
}>()
</script>

<template>
  <div
    class="group relative bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 md:p-12 min-h-[400px] flex flex-col justify-between hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer"
  >
    <!-- Top Meta -->
    <div class="flex justify-between items-start z-10">
      <span
        class="font-jetbrains text-[10px] md:text-xs tracking-[0.2em] text-gray-500 uppercase group-hover:text-white transition-colors"
      >
        {{ number }} / {{ category }}
      </span>
      <div
        class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-gray-400 group-hover:text-black transition-colors"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 mt-auto">
      <h3
        class="font-playfair text-4xl md:text-5xl text-white mb-8 group-hover:translate-x-2 transition-transform duration-500"
      >
        {{ title }}
      </h3>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-jetbrains text-gray-400 uppercase tracking-wider group-hover:border-white/30 group-hover:text-white transition-colors"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- Hover Gradient Background -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
    ></div>
  </div>
</template>
