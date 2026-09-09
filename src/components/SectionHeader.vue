<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <header class="section-header">
    <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
    <h2>{{ title }}</h2>
    <div class="line" aria-hidden="true"></div>
  </header>
</template>

<style scoped>
.section-header {
  margin: 0 auto 28px;
  text-align: center;
}

.subtitle {
  margin: 0 0 8px;
  color: #b58c36;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}

h2 {
  margin: 0;
  color: #2b1b5e;
  font-size: 36px;
}

.line {
  width: 48px;
  height: 3px;
  margin: 14px auto 0;
  background: #c8a100;
}

@media (max-width: 600px) {
  h2 {
    font-size: 30px;
  }
}
</style>
