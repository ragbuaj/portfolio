<script setup lang="ts">
const techStack = ['TypeScript', 'Vue', 'Node.js', 'Golang', 'PHP', 'PostgreSQL', 'Tailwind CSS']
</script>

<template>
  <main
    class="flex-grow w-full max-w-[1400px] mx-auto px-4 md:px-6 pt-32 pb-12 flex flex-col md:flex-row gap-12 md:gap-24"
  >
    <!-- Left: Identity -->
    <div class="w-full md:w-1/2 flex flex-col">
      <h4 class="font-jetbrains text-xs tracking-[0.2em] text-gray-500 mb-6 uppercase">
        Perspective
      </h4>
      <div class="flex items-center justify-between mb-12">
        <h1 class="font-oswald font-bold text-5xl md:text-7xl text-white leading-[0.9]">
          RAGIL <br />
          BUDHI AJIE
        </h1>
        <!-- Photo Placeholder -->
        <div
          class="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-white/10 bg-neutral-800 overflow-hidden shrink-0"
        >
          <img
            src="@/assets/logo.webp"
            alt="Profile"
            class="w-full h-full object-cover opacity-80"
          />
        </div>
      </div>

      <p class="font-inter text-gray-300 text-lg leading-relaxed mb-12 max-w-lg">
        I am a web developer who is passionate about creating beautiful and user-friendly websites.
        I am also a quick learner and am always looking for new challenges.
      </p>

      <div class="mb-12">
        <h5 class="font-jetbrains text-xs tracking-[0.2em] text-gray-500 mb-6 uppercase">
          Technical Arsenal
        </h5>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="tech in techStack"
            :key="tech"
            class="px-5 py-2 rounded-full border border-white/10 text-xs font-jetbrains text-gray-400 hover:text-white hover:border-white/30 transition-colors cursor-default"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <div class="mt-auto border-t border-white/10 pt-8 flex flex-col gap-8">
        <div class="flex gap-12">
          <div>
            <h6 class="font-jetbrains text-[10px] uppercase text-gray-500 mb-1">Experience</h6>
            <p class="font-inter font-bold text-white">1+ Years Crafting Code</p>
          </div>
        </div>

        <!-- Socials -->
        <div>
          <h6 class="font-jetbrains text-[10px] uppercase text-gray-500 mb-4">Connect</h6>
          <div class="flex gap-6">
            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/ragil-budhi-ajie/"
              class="text-gray-400 hover:text-white transition-colors"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>
            <!-- GitLab (Using GitHub icon as generic Git or standard GitLab path) -->
            <a
              href="https://gitlab.com/ragbuaj"
              class="text-gray-400 hover:text-white transition-colors"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
                />
              </svg>
            </a>
            <!-- Instagram -->
            <a
              href="https://www.instagram.com/ragilbuaj/"
              class="text-gray-400 hover:text-white transition-colors"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Right: Contact Form -->
    <div class="w-full md:w-1/2 flex flex-col pt-12 md:pt-24">
      <h4 class="font-jetbrains text-xs tracking-[0.2em] text-gray-500 mb-8 uppercase">
        Inquiries
      </h4>
      <h2 class="font-oswald text-4xl md:text-5xl text-white mb-12">SEND MESSAGE</h2>

      <form @submit.prevent class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <label class="font-jetbrains text-[10px] uppercase text-gray-500">Full Name</label>
          <input
            type="text"
            placeholder="Your name"
            class="bg-transparent border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/40 transition-colors"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="font-jetbrains text-[10px] uppercase text-gray-500">Email Address</label>
          <input
            type="email"
            placeholder="email@address.com"
            class="bg-transparent border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/40 transition-colors"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="font-jetbrains text-[10px] uppercase text-gray-500">Brief Message</label>
          <textarea
            rows="5"
            placeholder="Tell me about your project..."
            class="bg-transparent border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/40 transition-colors resize-none"
          ></textarea>
        </div>

        <button
          class="bg-white text-black rounded-full py-5 px-8 font-jetbrains font-bold text-xs tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors flex justify-center items-center gap-4 group mt-4"
        >
          Transmit Data
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </button>
      </form>
    </div>
  </main>
</template>
