import ProductOverview from "./views/ProductOverview.vue";
import ProductDetails from "./views/ProductDetails.vue";

export const routes = [
  { path: "/", component: ProductOverview },
  { path: "/product-details", component: ProductDetails },
];
