<template>
  <div>
    <h1>
      {{ pageTemplate }}
    </h1>
  </div>
</template>
<script setup lang="ts">
export interface Props {
  pageTemplate: string;
}

defineProps<Props>();

</script>
