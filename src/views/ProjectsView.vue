<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'

const projects = [
  {
    number: '01',
    category: 'Web',
    title: 'Building Management System',
    tags: ['Vue', 'PHP Yii', 'CSS/SCSS', 'PostgreSQL'],
    link: '#',
  },
  {
    number: '02',
    category: 'Web',
    title: 'Project Manajement System',
    tags: ['Nuxt', 'Golang', 'Tailwind', 'PostgreSQL'],
    link: '#',
  },
]
</script>

<template>
  <main class="flex-grow w-full max-w-[1400px] mx-auto px-4 md:px-6 pt-32 pb-20">
    <!-- Header Section -->
    <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
      <div>
        <h4 class="font-jetbrains text-xs tracking-[0.3em] text-gray-500 mb-4 uppercase">
          Selected Works
        </h4>
        <h1 class="font-oswald text-6xl md:text-8xl text-white leading-[0.9]">
          PROJECT <br />
          ARCHIVE
        </h1>
      </div>
      <p class="font-inter text-gray-400 text-sm md:text-base max-w-sm text-right md:mb-4">
        A collection of full-stack projects that I have been involved in.
      </p>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <ProjectCard v-for="(project, index) in projects" :key="index" v-bind="project" />
    </div>
  </main>
</template>
