<template>
  <div class="h-10 grid grid-cols-3 bg-gray-300">
    <div
      v-for="(filter, index) in filters"
      :key="index"
      class="flex justify-center items-center"
      :class="{ 'border-black border-b-2': selectedFilter === filter }"
      @click="setFilter(filter)"
    >
      {{ filter }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { defineProps } from "vue";
import { useProductsOverviewStore } from "../store/useProductsOverviewStore";

defineProps({
  filters: {
    type: Array,
  },
});

const productsOverviewStore = useProductsOverviewStore();
const { selectedFilter } = storeToRefs(productsOverviewStore);
const setFilter = function (filter: any) {
  selectedFilter.value = filter;
};
</script>
