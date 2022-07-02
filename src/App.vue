<template lang="pug">

div(class="bg-home bg-cover min-h-screen sm:bg-home-sm xl:bg-home-xl")
  div(class="relative max-w-screen-2xl min-h-screen m-auto")
    MobileNav(v-if="showNav" :links="links")
    Nav(:links="links") //- hidden by default
    header(class="flex items-center p-6 justify-between")
      img(src="@/assets/shared/logo.svg" alt="Logo" class="w-10 sm:w-12 \
      sm:ml-[15px] xl:mt-10 xl:ml-[31px]")
      div(class="hidden xl:flex w-1/2 h-[1px] absolute top-[88px] \
      left-0 pl-[167px] pr-[80px]")
        div(class="w-full bg-white opacity-25")
      button(v-if="!showNav" @click="toggleNav" class="sm:hidden")
        img(src="@/assets/shared/icon-hamburger.svg" alt="Menu")
      button(v-if="showNav" @click="toggleNav" class="absolute top-[34px] \
      right-[26px]")
        img(src="@/assets/shared/icon-close.svg" alt="Close menu")
    router-view

</template>

<script>
import MobileNav from "@/components/MobileNav.vue";
import Nav from "@/components/Nav.vue";

export default {
  components: {
    MobileNav,
    Nav,
  },
  data() {
    return {
      showNav: false,
      links: {
        "00": ["HOME", "/"],
        "01": ["DESTINATION", "/destination"],
        "02": ["CREW", "/crew"],
        "03": ["TECHNOLOGY", "/technology"],
      },
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
  },
};
</script>
