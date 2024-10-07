<script setup lang="ts">
const router = useRouter();
const route = useRoute();

let pageSlug = route.path;
if (!pageSlug.startsWith("/")) pageSlug = `/${pageSlug}`;
if (!pageSlug.endsWith("/")) {
  router.push({ path: route.path + "/" });
  pageSlug += "/";
}

if (!pageSlug.startsWith("/")) pageSlug = `/${pageSlug}`;
if (!pageSlug.endsWith("/")) pageSlug += "/";

console.log(pageSlug)
const { data } = await useFetch(`/api/page?slug=${pageSlug}`);
</script>

<template>
  <div>
    <TemplateRenderer :page-template="data?.title || 'No title'" />
  </div>
</template>

<style scoped>

</style>