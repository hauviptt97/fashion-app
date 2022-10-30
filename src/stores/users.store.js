import { defineStore } from "pinia";
import { getAll, getUserById, deleteUserById } from "@/services/UsersService";
import { useAlertStore } from "@/stores/alert.store";

export const useStoreUsers = defineStore("storeUsers", {
  state: () => {
    return {
      users: [],
    };
  },
  actions: {
    async getAllUsers() {
      try {
        this.users = await getAll();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUser(id) {
      if (!window.confirm("Are you sure?")) {
        return;
      }
      try {
        const alertStore = useAlertStore();

        await deleteUserById(id);
        alertStore.success("Delete successful");
        this.users = this.users.filter((user) => user.id !== id);
      } catch (error) {
        alertStore.error(error);
      }
    },
    async getUserById(id) {
      await getUserById(id);
    },
  },
});
