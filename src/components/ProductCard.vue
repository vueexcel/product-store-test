<template>
  <div
    :class="[
      'border',
      'flex',
      'p-4',
      { 'justify-between': !product?.available },
      { 'flex-row-reverse': !product?.available },
      { 'bg-[#D1C4E9]': isPresentInWatchList && selectedFilter === 'Vorgemerkt' }
    ]"
    @click="openDetailPage"
  >
    <img :src="product?.imageURL" alt="product image" class="h-24 w-24" />
    <div class="flex flex-col justify-center px-4">
      <div><span class="font-medium">Name:</span> {{ product?.name }}</div>
      <div><span class="font-medium">Description:</span> {{ product?.description }}</div>
      <div><span class="font-medium">Price:</span> {{ price }}</div>
      <div class="flex">
        <div v-for="n in Math.ceil(product?.rating)" :key="n">
          <img
            src="../assets/images/star-half-yellow-icon.svg"
            class="h-5 w-5"
            alt="star icon"
            v-if="(Math.ceil(product?.rating) === n) && Math.ceil(product?.rating) - product?.rating > 0.5"
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
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { computed, defineProps } from "vue";
import { useRouter } from "vue-router";
import { useProductDetailsStore } from '../store/useProductDetailsStore';
import { useWatchListStore } from '../store/useWatchListStore';
import { useProductsOverviewStore } from "../store/useProductsOverviewStore";

const productDetailsStore = useProductDetailsStore();
const watchListStore = useWatchListStore();
const productsOverviewStore = useProductsOverviewStore();
const { product: selectedProduct } = storeToRefs(productDetailsStore);
const { watchList } = storeToRefs(watchListStore);
const { selectedFilter } = storeToRefs(productsOverviewStore);
const router = useRouter();

const props = defineProps({
  product: {
    type: Object,
  },
});

const isPresentInWatchList = computed(() => watchList.value.some((item: any) => item.id === props.product?.id));

const price = computed(
  () => `${props.product?.price.value} ${props.product?.price.currency}`
);

const openDetailPage = function () {
    selectedProduct.value = { ...props.product };
    router.push({ path: '/product-details' });
};
</script>
