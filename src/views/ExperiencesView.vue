<script setup lang="ts">
const experiences = [
  {
    role: 'Junior Web Developer',
    company: 'Nusa Tekno Global',
    period: '2025 - present',
    description:
      'Responsible for developing and maintaining web applications for clients. Collaborating with senior developers to implement new features and improve existing ones. Working with various technologies including HTML, CSS, JavaScript, Vue, Golang, and PHP.',
    tech: ['JavaScript', 'HTML/SCSS', 'PHP', 'Vue', 'Golang'],
  },
]
</script>

<template>
  <main class="flex-grow w-full max-w-[1000px] mx-auto px-4 md:px-6 pt-32 pb-20">
    <div class="mb-20 text-center">
      <h4 class="font-jetbrains text-xs tracking-[0.3em] text-gray-500 mb-4 uppercase">
        Career Timeline
      </h4>
      <h1 class="font-oswald text-6xl md:text-8xl text-white">EXPERIENCES</h1>
    </div>

    <div class="relative border-l border-white/10 ml-4 md:ml-12 pl-8 md:pl-16 flex flex-col gap-16">
      <div v-for="(exp, index) in experiences" :key="index" class="relative group">
        <!-- Dot Indicator -->
        <div
          class="absolute -left-[41px] md:-left-[73px] top-2 w-5 h-5 bg-[#050505] border border-white/20 rounded-full flex items-center justify-center group-hover:border-white transition-colors"
        >
          <div
            class="w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          ></div>
        </div>

        <div class="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
          <h2 class="font-playfair text-3xl md:text-4xl text-white">{{ exp.role }}</h2>
          <span class="font-jetbrains text-xs text-gray-500">{{ exp.period }}</span>
        </div>

        <h3 class="font-jetbrains text-sm text-gray-400 mb-6 uppercase tracking-wider">
          {{ exp.company }}
        </h3>

        <p class="font-inter text-gray-300 leading-relaxed max-w-2xl mb-6">
          {{ exp.description }}
        </p>

        <div class="flex gap-4">
          <span
            v-for="t in exp.tech"
            :key="t"
            class="text-[10px] font-jetbrains px-3 py-1 rounded border border-white/5 text-gray-500"
          >
            {{ t }}
          </span>
        </div>
      </div>
    </div>
  </main>
</template>
