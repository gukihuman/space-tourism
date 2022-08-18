<template lang="pug">

//- preload imgs
picture
  source(:srcset="require(`@/assets/crew/${preloadImg}.webp`)" type="image/webp")
  img(class="hidden")

div(class="xl:min-h-[calc(100vh-136px)]")

  div(class="flex flex-col items-center xl:h-[calc(100vh-136px)] \
  xl:min-h-[calc(576px+136px)] xl:max-h-[788px] xl:items-start \
  xl:justify-end")

    div(class="xl:flex sm:w-full xl:mt-0")

      p(class="font-barlow-condensed text-white text-base leading-[19px] \
      tracking-[2.7px] flex justify-center sm:text-xl sm:leading-6 \
      sm:justify-start sm:mt-10 sm:ml-[38.5px] sm:tracking-[3.38px] \
      xl:text-[28px] xl:leading-[34px] xl:tracking-[4.72px] \
      xl:mt-0 xl:ml-[166px]")
        span(class="opacity-25 mr-[16px] font-bold sm:mr-[19px] xl:mr-7") 02
        span MEET YOUR CREW

      picture(class="w-full sm:absolute sm:bottom-0 overflow-hidden \
      sm:h-[532px] xl:max-w-[1500px]" :class="pictureClass")
        source(
          :srcset="require(`@/assets/crew/${$route.params.member}.webp`)"
          type="image/webp"
          )
        source(
          :srcset="require(`@/assets/crew/${$route.params.member}.png`)"
          type="image/png"
          )
        img(:alt="$route.params.member" class="h-[223px] mx-auto mt-8 \
        sm:h-full sm:mt-0 sm:m-auto xl:h-[445px]" :class="imgClass")

    //- line
    div(class="bg-[#383B4B] h-[1px] w-[327px] sm:hidden xl:mt-[54px]")

    div(class="flex flex-col mt-8 sm:mt-0 sm:flex-col-reverse xl:mb-[229px]"
    :class="parentNavClass")

      nav(class="gap-2 flex m-auto xl:absolute xl:-mb-[145px] xl:ml-[167px] \
      xl:gap-[14px]" :class="navClass")
        router-link(
          v-for="(item, i) in links"
          :key="i"
          :to="item"
          class="crew-nav w-[18px] h-[18px] relative rounded-full xl:w-[25px] \
          xl:h-[25px] xl:crew-nav-xl"
        )
          div(class="absolute h-[10px] w-[10px] top-1 left-1 xl:h-[15px] \
          xl:w-[15px] rounded-full bg-white/[.17]")

      router-view

</template>

<script>
import data from "@/data.json";

export default {
  data() {
    return {
      links: data.crew.map((item) => item.role),
      preloadImg: "commander",
    };
  },
  computed: {
    pictureClass() {
      return {
        "xl:!h-[702px]": this.$route.params.member === "commander",
        "xl:!h-[654px]": this.$route.params.member === "mission-specialist",
        "xl:!h-[666px]": this.$route.params.member === "pilot",
        "xl:!h-[607px]": this.$route.params.member === "flight-engineer",
      };
    },
    imgClass() {
      return {
        "sm:!h-[572px]": this.$route.params.member === "commander",
        "xl:!h-[712px]": this.$route.params.member === "commander",
        "xl:!ml-[780px]": this.$route.params.member === "commander",
        "xl:!h-[681px]": this.$route.params.member === "pilot",
        "xl:!ml-[743px]": this.$route.params.member === "pilot",
        "xl:!h-[654px]": this.$route.params.member === "mission-specialist",
        "xl:!ml-[800px]": this.$route.params.member === "mission-specialist",
        "xl:!h-[607px]": this.$route.params.member === "flight-engineer",
        "xl:!ml-[735px]": this.$route.params.member === "flight-engineer",
      };
    },
    parentNavClass() {
      return {
        "xl:mb-[197px]": this.$route.params.member === "pilot",
      };
    },
    navClass() {
      return {
        "xl:-mb-[113px]": this.$route.params.member === "pilot",
      };
    },
  },
  mounted() {
    setTimeout(() => {
      this.preloadImg = "mission-specialist";
    }, 1200);
    setTimeout(() => {
      this.preloadImg = "pilot";
    }, 1500);
    setTimeout(() => {
      this.preloadImg = "flight-engineer";
    }, 1800);
    setTimeout(() => {
      this.preloadImg = "commander";
    }, 2100);
  },
};
</script>
