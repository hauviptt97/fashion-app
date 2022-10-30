import { defineStore } from "pinia";
import {
  getAll,
  getProductById1,
  deleteById,
} from "@/services/product.service";
import { useAlertStore } from "@/stores/alert.store";

export const useProductsStore = defineStore("ProductsStore", {
  state: () => {
    return {
      products: [],
      product: null,
    };
  },
  actions: {
    async getAll() {
      try {
        this.products = await getAll();
      } catch (error) {
        console.log(error);
      }
    },
    async sortBySaleValue() {
      try {
        this.products = this.products.sort((a, b) => b.saleValue - a.saleValue);
      } catch (error) {
        console.log(error);
      }
    },
    async sortByPriceInc() {
      try {
        this.products = this.products.sort((a, b) => a.price - b.price);
      } catch (error) {
        console.log(error);
      }
    },
    async sortByPriceDec() {
      try {
        this.products = this.products.sort((a, b) => b.price - a.price);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteById(id) {
      if (!window.confirm("Are you sure?")) {
        return;
      }
      try {
        const alertStore = useAlertStore();

        await deleteById(id);
        alertStore.success("Delete successful");
        this.products = this.products.filter((product) => product.id !== id);
      } catch (error) {
        alertStore.error(error);
      }
    },
    async getProductById(id) {
      this.product = await getProductById1(id);
    },
  },
});
