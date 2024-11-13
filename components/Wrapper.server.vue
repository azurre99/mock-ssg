<script setup lang="ts">
const props = defineProps<{
  lastPart: string
}>()

// Use useAsyncData to fetch data based on the last part of the route path
const { data } = useAsyncData(`lats-part-${props.lastPart}`, () => $fetch(`/api/page/${props.lastPart}`));
const arr = Array.from({ length: 10 }).map((_, i) => i)
</script>

<template>
  <div>
    <ul>
      <li v-for="item in arr">
        <NuxtLink :to="`/something/${item}`">
          Link to {{ item }}
        </NuxtLink>
      </li>
    </ul>
    <TemplateRenderer
        nuxt-client
        :page-template="JSON.stringify(data)"
    />
  </div>
</template>

<style scoped>

</style>