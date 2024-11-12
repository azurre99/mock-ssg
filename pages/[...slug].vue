<script setup lang="ts">

const router = useRouter();
const route = useRoute();

let pageSlug = route.path;
if (!pageSlug.startsWith("/")) pageSlug = `/${pageSlug}`;
if (!pageSlug.endsWith("/")) {
  pageSlug += "/";
}

if (!pageSlug.startsWith("/")) pageSlug = `/${pageSlug}`;
if (!pageSlug.endsWith("/")) pageSlug += "/";

const mathRandom = Math.floor(Math.random() * 10)
const { data } = await useFetch(`/api/page${pageSlug}`);
</script>

<template>
  <div>
    <ClientOnly>
      <NuxtLink :to="`/something/${mathRandom}/`">
        Navigate to {{ mathRandom }}
      </NuxtLink>
    </ClientOnly>
    <div>
      {{ data }}
    </div>
  </div>
</template>

<style scoped>

</style>