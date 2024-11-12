<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

// Get the last part of the route path
let pageSplit = route.path.split("/").filter((it) => it);
let lastPart = pageSplit.length > 0 ? pageSplit[pageSplit.length - 1] : "";

// Generate a random number for navigation
const mathRandom = Math.floor(Math.random() * 10);

// Use useAsyncData to fetch data based on the last part of the route path
const { data } = useAsyncData(() => $fetch(`/api/page/${lastPart}`));
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