import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWatchListStore = defineStore('watchListStore', () => {
    const watchList = ref<any>([]);

    return {
        watchList,
    };
}, { persist: true });