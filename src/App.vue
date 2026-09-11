<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div id="app">

    <Navbar />

    <main>
      <router-view />
    </main>

    <Footer />

  </div>
</template>

<style>
:root {
  --bg-primary: #0d0d0d;
  --bg-secondary: #1a1a1a;
  --bg-card: #252525;
  --accent: #f2d500;
  --accent-hover: #ffd900;
  --text-primary: #f5f5f5;
  --text-secondary: #b8b8b8;
  --border: #3a3a3a;
  --success: #a8b82a;
  --error: #c94a3a;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
}

button,
input,
select {
  font-family: inherit;
}
</style>