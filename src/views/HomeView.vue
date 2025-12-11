<script setup lang="ts">
import BaseAvatar from '@/components/BaseAvatar.vue'
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <div
    class="h-dvh w-full flex flex-col gap-9 justify-center items-center bg-linear-to-br from-[#1B0D25] to-[#210D1B]"
  >
    <BaseAvatar
      src="https://placehold.co/600x400"
      alt="Avatar"
      :size="220"
      border-color="border-purple-600"
      :border-width="4"
    />
    <div class="flex flex-col gap-4 justify-center items-center">
      <h1
        class="text-6xl font-bold bg-linear-to-r from-purple-600 via-fuchsia-600 to-fuchsia-700 inline-block text-transparent bg-clip-text"
      >
        John Doe
      </h1>
      <h2 class="text-3xl font-medium text-gray-400">Fullstack Web Developer</h2>
    </div>
    <p class="text-xl font-normal text-gray-500 line-clamp-2">
      Crafting digital experiences that blend aesthetics with functionality. Turning ideas into
      elegant solutions.
    </p>
    <div class="flex flex-row gap-6 justify-center items-center">
      <BaseButton
        text="View My Work"
        size="lg"
        rounded="full"
        gradient="bg-gradient-to-r from-purple-500 to-pink-500"
        custom-class="hover:scale-105 hover:shadow-md hover:shadow-purple-700"
      />
      <BaseButton
        text="Get In Touch"
        size="lg"
        rounded="full"
        variant="outline"
        border-color="border-purple-500"
        text-color="text-white"
        custom-class="hover:bg-purple-950"
      />
    </div>
  </div>
</template>
