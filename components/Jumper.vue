<script setup lang="ts">
const data = ref()
let interval: number | undefined = undefined
onMounted(() => {
  interval = window.setInterval(() => {
    data.value = Math.random()
  }, 1000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <div>
    Randomly generated number: {{ interval }}
  </div>
</template>

<style scoped>

</style>