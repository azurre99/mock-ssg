<script setup lang="ts">
const { data } = useFetch(`/api/products?slug=/products/`);
</script>

<template>
  <div>
    {{ data }}
  </div>
</template>

<style scoped>

</style>