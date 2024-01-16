<template>
  <div class="container">
    <ProductFilters :filters="filters" />
    <ProductsList :products="filteredProducts" :header="header" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useProductsOverviewStore } from "../store/useProductsOverviewStore";
import ProductFilters from "../components/ProductFilters.vue";
import ProductsList from "../components/ProductsList.vue";

const productsOverviewStore = useProductsOverviewStore();
const { filteredProducts, header, filters } = storeToRefs(productsOverviewStore);

const fetchProducts = async function () {
  await productsOverviewStore.getProducts();
};

fetchProducts();
</script>
