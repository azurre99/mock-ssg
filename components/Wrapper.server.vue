<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

// Get the last part of the route path
let pageSplit = router.currentRoute.value.path.split("/").filter((it) => it);
let lastPart = pageSplit.length > 0 ? pageSplit[pageSplit.length - 1] : "";

// Use useAsyncData to fetch data based on the last part of the route path
const { data } = useAsyncData(`lats-part-${lastPart}`, () => $fetch(`/api/page/${lastPart}`));
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