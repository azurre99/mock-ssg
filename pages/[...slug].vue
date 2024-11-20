<script setup lang="ts">
import pages from '~/dist/pages.json'
import {useRoute, useRouter} from "#vue-router";
const router = useRouter();

let pageSplit = router.currentRoute.value.path.split("/").filter((it) => it);
let lastPart = pageSplit.length > 0 ? pageSplit[pageSplit.length - 1] : "";
const { data } = useAsyncData(`lats-part-${lastPart}`, () => $fetch(`/api/page/${lastPart}`));

</script>

<template>
  <div>
    <ul>
      <li v-for="item in pages" :key="item.slug">
        <NuxtLink
            :to="item.slug"
        >
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
    <TemplateRenderer
        v-if="data"
        nuxt-client
        :page-template="JSON.stringify(data)"
    />
  </div>
</template>

<style scoped>

</style>