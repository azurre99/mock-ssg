<script setup lang="ts">
const { data } = await useFetch(`/api/page?slug=products`)
</script>

<template>
  <div>
    <h1>
      {{ data?.title }}
    </h1>
  </div>
</template>

<style scoped>

</style>