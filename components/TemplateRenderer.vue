<template>
  <div>
    <h3>
      This i client component man
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

const component = compile(`<p>${props.pageTemplate}</p>`) as Component

</script>
