<script setup lang="ts">
import {withTrailingSlash} from "ufo";

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

console.log(`Fetching data for slug: ${pageSlug}`)
const { data } = await useFetch(`/api/page?slug=${pageSlug}`);

definePageMeta({
  path: withTrailingSlash(route.path)
})
</script>

<template>
  <div>
    <TemplateRenderer :page-template="data?.title || 'No title'" />
  </div>
</template>

<style scoped>

</style>