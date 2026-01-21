<script setup lang="ts">
import BaseCircleLink from '@/components/BaseCircleLink.vue'
</script>

<template>
  <section class="h-dvh w-full py-5">
    <div class="flex flex-col gap-7">
      <h2 class="text-center font-bold text-4xl lg:text-5xl text-fuchsia-500">About Me</h2>
      <div
        class="w-2/6 lg:w-1/12 h-1 bg-linear-to-r from-purple-700 via-fuchsia-500 to-pink-400 mx-auto"
      ></div>
    </div>
    <div
      class="w-full px-8 lg:px-0 py-10 flex flex-col lg:flex-row gap-20 justify-center items-center"
    >
      <div class="lg:w-4/12 text-white flex flex-col gap-4">
        <h3 class="font-bold text-2xl">Who I Am</h3>
        <div class="flex flex-col gap-4 text-base/6 text-slate-300">
          <p>
            I'm a passionate creative developer and designer with 8+ years of experience in building
            stunning digital products. My expertise lies in transforming complex problems into
            simple, beautiful, and intuitive designs.
          </p>
          <p>
            I specialize in full-stack development, UI/UX design, and creating seamless user
            experiences that drive engagement and conversion.
          </p>
        </div>
        <div class="flex gap-2 items-center">
          <BaseCircleLink
            href="https://www.linkedin.com/in/ragil-budhi-ajie/"
            icon-prefix="fab"
            icon-name="linkedin"
            icon-size="lg"
          />
          <BaseCircleLink
            href="https://gitlab.com/ragbuaj"
            icon-prefix="fab"
            icon-name="gitlab"
            icon-size="lg"
          />
          <BaseCircleLink
            href="https://www.instagram.com/ragilbuaj/"
            icon-prefix="fab"
            icon-name="instagram"
            icon-size="lg"
          />
        </div>
      </div>
      <div class="lg:w-4/12 text-white flex flex-col gap-4"></div>
    </div>
  </section>
</template>
