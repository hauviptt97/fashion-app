import { defineStore } from "pinia";
import {
  getAll,
  getEmployeeById,
  deleteById,
} from "@/services/employee.service";
import { useAlertStore } from "@/stores/alert.store";

export const useEmployeesStore = defineStore("EmployeesStore", {
  state: () => {
    return {
      employees: [],
      employee: null,
    };
  },
  actions: {
    async getAll() {
      try {
        this.employees = await getAll();
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
        this.employees = this.employees.filter((employee) => employee.id !== id);
      } catch (error) {
        alertStore.error(error);
      }
    },
    async getemployeeById(id) {
      this.employee = await getemployeeById(id);
    },
  },
});
