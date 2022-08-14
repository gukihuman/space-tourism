<template lang="pug">

div(class="xl:min-h-[calc(100vh-136px)] overflow-hidden xl:overflow-visible")

  div(class="flex flex-col items-center xl:h-[calc(100vh-136px)] \
  xl:min-h-[calc(576px+136px)] xl:max-h-[788px] xl:items-start \
  xl:justify-end relative")

    div(class="xl:flex sm:w-full max-w-screen overflow-hidden xl:mt-0 \
    xl:overflow-visible \
    ")

      p(class="font-barlow-condensed text-white text-base leading-[19px] \
      tracking-[2.7px] flex justify-center sm:text-xl sm:leading-6 \
      sm:justify-start sm:mt-10 sm:ml-[38.5px] sm:tracking-[3.38px] \
      sm:mb-[60px] \
      xl:text-[28px] xl:leading-[34px] xl:tracking-[4.72px] \
      xl:mt-0 xl:ml-[166px] xl:mb-[136px]")
        span(class="opacity-25 mr-[16px] font-bold sm:mr-[19px] xl:mr-7") 03
        span SPACE LAUNCH 101

      div(class="overflow-hidden xl:overflow-visible xl:hidden")

        picture(class="h-[170px] max-w-full xl:max-w-[1500px] overflow-hidden \
        xl:overflow-visible")
          source(
            :srcset="require(`@/assets/technology/${$route.params.techObject}-landscape.jpg`)"
            type="image/jpg"
            )
          img(:alt="$route.params.techObject" class="h-full min-w-[422px] mt-8 \
          sm:h-full scale-[1.05] sm:mt-0 sm:m-auto xl:h-[445px]")
      
      picture(class="hidden xl:block absolute right-0 bottom-[101px]")
        source(
          :srcset="require(`@/assets/technology/${$route.params.techObject}-portrait.jpg`)"
          type="image/jpg"
          )
        img(:alt="$route.params.techObject")

    div(class="flex flex-col mt-[34px] sm:mt-[56px] xl:mb-[214px] xl:flex-row \
    xl:mt-0 xl:items-start xl:")

      nav(class="gap-4 flex m-auto xl:flex-col xl:ml-[165px] \
      xl:gap-8 xl:mt-0")
        router-link(
          v-for="(item, i) in links"
          :key="i"
          :to="item"
          class="tech-nav border-[1px] border-white/25 flex items-center \
          justify-center relative rounded-full w-10 h-10 sm:w-[60px] \
          sm:h-[60px] xl:w-[80px] xl:h-[80px] text-white")
          span(class="font-bellefair mt-[2px] sm:text-2xl xl:text-[32px] \
          ") {{ i + 1 }}

      router-view

</template>

<script>
import data from "@/data.json";

export default {
  data() {
    return {
      headerWidth: document.querySelector("header").clientWidth,
      links: data.technology.map((item) => item.name),
    };
  },
  methods: {
    getHeaderWidth() {
      window.addEventListener("resize", () => {
        this.headerWidth = document.querySelector("header").clientWidth;
        console.log(this.headerWidth);
      });
    },
  },
  computed: {
    headerWidthComputed() {
      return this.headerWidth;
    },
  },
  mounted() {
    this.getHeaderWidth();
  },
};
</script>
