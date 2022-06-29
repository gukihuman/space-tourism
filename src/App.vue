<template lang="pug">

div(class="bg-home-sm")
  MobileNav(v-if="showNav")
  header(class="flex items-center p-6 justify-between")
    img(src="@/assets/shared/logo.svg" alt="Logo" class="w-10")
    button(@click="toggleNav")
      img(src="@/assets/shared/icon-hamburger.svg" alt="Menu")
  router-view

</template>

<script>
import MobileNav from "@/components/MobileNav.vue";

export default {
  components: {
    MobileNav,
  },
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
  },
};
</script>
