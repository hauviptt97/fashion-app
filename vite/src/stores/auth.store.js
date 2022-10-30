import { defineStore } from "pinia";
import login from "@/services/AuthService";
import { router } from "@/router";
import { useAlertStore } from "@/stores/alert.store";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("user")),
    returnUrl: null,
  }),
  actions: {
    async login(username, password) {
      try {
        // update pinia state
        const user = await login(username, password);
        
        this.user = user;

        // store user details and jwt in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));

        // redirect to previous url or default to home page
        router.push(this.returnUrl || "/");
      } catch (error) {
        const alertStore = useAlertStore();
        alertStore.error(error);
      }
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      router.push("/account/login");
    },
  },
});
