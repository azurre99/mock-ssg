<script setup lang="ts">
import {Wrapper} from "#components";
import {useRoute, useRouter} from "#vue-router";
const router = useRouter();
const route = useRoute();

let pageSplit = router.currentRoute.value.path.split("/").filter((it) => it);
let lastPart = pageSplit.length > 0 ? pageSplit[pageSplit.length - 1] : "";

</script>

<template>
  <Wrapper :lastPart="lastPart" />
</template>

<style scoped>

</style>