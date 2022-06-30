<template lang="pug">

div(class="bg-home-sm bg-cover h-screen")
  MobileNav(v-if="showNav")
  header(class="flex items-center p-6 justify-between")
    img(src="@/assets/shared/logo.svg" alt="Logo" class="w-10")
    button(v-if="!showNav" @click="toggleNav")
      img(src="@/assets/shared/icon-hamburger.svg" alt="Menu")
    button(v-if="showNav" @click="toggleNav" class="absolute top-[34px] right-[26px]")
      img(src="@/assets/shared/icon-close.svg" alt="Close menu")
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
