import { defineStore } from "pinia";
import { getAll, deleteById } from "@/services/cart.service";
import { useAlertStore } from "@/stores/alert.store";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      products: [],
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
    async addItem() {
      try {
        this.products = await getAll();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
