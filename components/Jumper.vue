<script setup lang="ts">
const data = ref()
let interval: number | undefined = undefined
onMounted(() => {
  console.log('Mounted')
  interval = window.setInterval(() => {
    data.value = Math.random()
  }, 1000)
})

onUnmounted(() => {
  console.log('Unmounted')
  if (interval) clearInterval(interval)
})
</script>

<template>
  <div>
    Randomly generated number: {{ data }}
  </div>
</template>

<style scoped>

</style>