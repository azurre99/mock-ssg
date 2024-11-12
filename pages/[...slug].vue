<script setup lang="ts">

import {Buffer} from "unenv/runtime/node/buffer/_buffer";
import from = Buffer.from;

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
const arr = Array.from({length: 10}).map((_, i) => i)
</script>

<template>
  <div>
    Currently on: {{ mathRandom }}
    <ClientOnly>
      <ul>
        <li v-for="item in arr">
          <NuxtLink :to="`/something/${item}/`">
            Navigate to {{ item }}
          </NuxtLink>
        </li>
      </ul>
    </ClientOnly>
    <div>
      {{ data }}
    </div>
  </div>
</template>

<style scoped>

</style>