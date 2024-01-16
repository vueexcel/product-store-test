import { defineStore, storeToRefs } from "pinia";
import { ref, getCurrentInstance, computed } from "vue";
import { useWatchListStore } from './useWatchListStore';

export const useProductsOverviewStore = defineStore("productsOverview", () => {
  const axios = getCurrentInstance()?.proxy?.axios;
  const products = ref<any[]>([]);
  const filters = ref<any[]>([]);
  const header = ref<any>({});
  const selectedFilter = ref('Alle');
  // Alle, Verfügbar, Vorgemerkt
  
  const watchListStore = useWatchListStore();
  const { watchList } = storeToRefs(watchListStore);

  const filteredProducts = computed<any>(() => {
    let productsList:  any = [];
    if(selectedFilter.value === 'Alle' || selectedFilter.value === 'Verfügbar') {
      productsList = products.value.filter((product: any) => {
        return selectedFilter.value === 'Verfügbar' ? product.available : product.id;
      });
    } else {
      productsList = [...watchList.value];
    }

    return productsList;
  });

  const getProducts = async function () {
    try {
      const { data }: any = await axios?.get(
        "https://gist.githubusercontent.com/benfranke/c33280a8df5f4f9db2e63ad45cab26a4/raw/f3ad6c00ff520c2667305103d5705bcbb57a7778/products.json"
      );
      products.value = data.products;
      filters.value = data.filters;
      header.value = data.header;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    products,
    filters,
    selectedFilter,
    filteredProducts,
    header,
    getProducts,
  };
});
