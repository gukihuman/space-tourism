import { defineStore } from "pinia";

export const useCommonStore = defineStore("CommonStore", {
  state: () => {
    return {
      height: 100,
    };
  },
});
