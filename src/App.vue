<template lang="pug">

div(:class="preloadBackgrounds")

//- html background
div(class="bg-black bg-cover min-h-screen bg-home sm:bg-home-sm \
  xl:bg-home-xl" :class="classObject")

  //- html black .75 filter except for home
  div(:class="classBackground")

    //- wrapper
    div(class="relative max-w-screen-2xl min-h-screen m-auto flex flex-col \
    xl:justify-end")

      div(class="h-fit xl:min-h-[858px]")

        MobileNav(v-if="showNav" :links="links" @toggleNavEvent="toggleNav")

        header(class="relative flex items-center p-6 justify-between sm:p-0")
          img(src="@/assets/shared/logo.svg" alt="logo" class="w-10 sm:w-12 \
          sm:ml-[39px]")
          
          //- line
          div(class="hidden xl:flex w-1/2 h-[1px] absolute top-[48px] \
          left-0 pl-[167px] pr-[80px]")
            div(class="w-full bg-white opacity-25 z-20")

          //- opens mobile navigation
          button(v-if="!showNav" @click="toggleNav" class="sm:hidden")
            img(src="@/assets/shared/icon-hamburger.svg" alt="menu")
          button(v-if="showNav" @click="toggleNav" class="absolute top-[34px] \
          right-[26px] z-20")
            img(src="@/assets/shared/icon-close.svg" alt="close menu")

          //- hidden on mobile
          Nav(:links="links")

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
      preloadBackgrounds: "",
      showNav: false,
      links: {
        "00": ["HOME", "/"],
        "01": ["DESTINATION", "/destination"],
        "02": ["CREW", "/crew"],
        "03": ["TECHNOLOGY", "/technology"],
      },
    };
  },
  computed: {
    preload() {
      return this.preloadBackgrounds;
    },
    classBackground() {
      return {
        "bg-black/25":
          this.$route.path.includes("destination") ||
          this.$route.path.includes("crew") ||
          this.$route.path.includes("technology"),
      };
    },
    classObject() {
      return {
        "bg-destination": this.$route.path.includes("destination"),
        "sm:bg-destination-sm": this.$route.path.includes("destination"),
        "xl:bg-destination-xl": this.$route.path.includes("destination"),
        "bg-crew": this.$route.path.includes("crew"),
        "sm:bg-crew-sm": this.$route.path.includes("crew"),
        "xl:bg-crew-xl": this.$route.path.includes("crew"),
        "bg-technology": this.$route.path.includes("technology"),
        "sm:bg-technology-sm": this.$route.path.includes("technology"),
        "xl:bg-technology-xl": this.$route.path.includes("technology"),
      };
    },
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
  },
  mounted() {
    this.classObject;
    setTimeout(() => {
      this.preloadBackgrounds =
        "bg-destination sm:bg-destination-sm xl:bg-destination-xl";
    }, 1200);
    setTimeout(() => {
      this.preloadBackgrounds = "bg-crew sm:bg-crew-sm xl:bg-crew-xl";
    }, 1500);
    setTimeout(() => {
      this.preloadBackgrounds =
        "bg-technology sm:bg-technology-sm xl:bg-technology-xl";
    }, 1800);
    setTimeout(() => {
      this.preloadBackgrounds = "bg-home sm:bg-home-sm xl:bg-home-xl";
    }, 1800);
  },
};
</script>
