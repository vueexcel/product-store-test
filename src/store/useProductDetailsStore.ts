import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useWatchListStore } from './useWatchListStore';

export const useProductDetailsStore = defineStore('productDetailsStore', () => {
    const watchListStore = useWatchListStore();
    const { watchList } = storeToRefs(watchListStore);
    const product = ref<any>({});
    const isAlreadyAddedToWatchList = computed(() => watchList.value.find((p: any) => p.id === product.value.id));

    return {
        product,
        isAlreadyAddedToWatchList,
    }
}, { persist: true });