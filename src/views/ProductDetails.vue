<template>
  <div class="container p-4">
    <div class="flex">
      <img :src="product.imageURL" alt="product image" class="h-24 w-24" />
      <div class="flex flex-col justify-center px-4">
        <div>
          <span class="font-medium">Name: </span>
          <span :class="{ 'text-blue-400': isAlreadyAddedToWatchList }">{{
            product.name
          }}</span>
        </div>
        <div><span class="font-medium">Price:</span> {{ price }}</div>
        <div class="flex">
          <div v-for="n in Math.ceil(product.rating)" :key="n">
            <img
              src="../assets/images/star-half-yellow-icon.svg"
              class="h-5 w-5"
              alt="star icon"
              v-if="
                Math.ceil(product.rating) === n &&
                Math.ceil(product.rating) - product.rating > 0.5
              "
            />
            <img
              v-else
              src="../assets/images/star-icon.svg"
              :alt="`star icon`"
              class="h-5 w-5"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-2">{{ product.description }}</div>
    <button
      class="w-full bg-blue-900 text-white py-2 my-2"
      @click="addToWatchList"
    >
      {{ isAlreadyAddedToWatchList ? 'Vergessen' : 'Vormerken' }}
    </button>
    <div>{{ product.longDescription }}</div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useProductDetailsStore } from "../store/useProductDetailsStore";
import { useWatchListStore } from "../store/useWatchListStore";

const productDetailsStore = useProductDetailsStore();
const watchListStore = useWatchListStore();
const { product, isAlreadyAddedToWatchList } = storeToRefs(productDetailsStore);
const { watchList } = storeToRefs(watchListStore);

const price = computed(
  () => `${product.value.price.value} ${product.value.price.currency}`
);

const addToWatchList = function () {
  if(!isAlreadyAddedToWatchList.value) {
    watchList.value.push({ ...product.value });
  } else {
    watchList.value = watchList.value.filter((item: any) => item.id !== product.value.id);
  }
};
</script>
