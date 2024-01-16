<template>
  <div class="p-4">
    <div class="mx-2">
      <div>Title: {{ header.headerTitle }}</div>
      <div>Subtitle: {{ header.headerDescription }}</div>
    </div>
    <div v-for="product in products" :key="product.id" class="mt-4">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import ProductCard from "./ProductCard.vue";

defineProps({
  products: {
    type: Array,
  },
  header: {
    type: Object,
    default: () => ({}),
  },
});
</script>
