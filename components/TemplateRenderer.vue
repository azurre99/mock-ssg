<template>
  <div>
    <h3>
      This is client component
    </h3>
    <component :is="component" v-if="component" :="$attrs" />
    <Jumper />
  </div>
</template>
<script setup lang="ts">
import {compile, type Component} from "vue";

export interface Props {
  pageTemplate: string;
}

const props = defineProps<Props>();

const component = compile(`<h1>${props.pageTemplate}</h1>`) as Component

</script>
