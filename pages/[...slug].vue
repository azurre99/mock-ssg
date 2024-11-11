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

console.log(`Fetching data for slug: ${pageSlug}`)
const { data } = await useFetch(`/api/page?slug=${pageSlug}`);
const mathRandom = Math.random()
</script>

<template>
  <div>
    <ClientOnly>
      <NuxtLink :to="`/something/${mathRandom}`">
        Navigate somewhere
      </NuxtLink>
    </ClientOnly>
    <TemplateRenderer :page-template="data?.title || 'No title'" />
  </div>
</template>

<style scoped>

</style>