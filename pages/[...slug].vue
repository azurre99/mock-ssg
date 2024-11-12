<script setup lang="ts">

const router = useRouter();
const route = useRoute();

/*let pageSlug = route.path;
if (!pageSlug.startsWith("/")) pageSlug = `/${pageSlug}`;
if (!pageSlug.endsWith("/")) {
  pageSlug += "/";
}

if (!pageSlug.startsWith("/")) pageSlug = `/${pageSlug}`;
if (!pageSlug.endsWith("/")) pageSlug += "/";
 */
let pageSplit = route.path.split("/").filter((it) => it)
let lastPart = pageSplit.length > 0 ? pageSplit[pageSplit.length - 1] : ""

const mathRandom = Math.floor(Math.random() * 10)
const { data } = await useFetch(`/api/page/${lastPart}`);
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