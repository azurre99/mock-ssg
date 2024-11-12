<template>
  <div>
    <h1>
      {{ pageTemplate }}
    </h1>
    <h3>
      This i client component man
    </h3>
  </div>
</template>
<script setup lang="ts">
export interface Props {
  pageTemplate: string;
}

defineProps<Props>();

</script>
