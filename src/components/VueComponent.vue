<script setup lang="ts">
type Props = {
  title?: string;
  variant?: "a" | "b";
};

const props = withDefaults(defineProps<Props>(), {
  variant: "a",
});
</script>

<template>
  <div :data-variant="props.variant">
    <h2 v-if="props.title">{{ props.title }}</h2>

    <slot />
  </div>
</template>
