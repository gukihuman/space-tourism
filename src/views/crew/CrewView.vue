<template lang="pug">

div(class="xl:min-h-[calc(100vh-136px)]")

  div(class="flex flex-col items-center xl:flex-row xl:h-[calc(100vh-136px)] xl:items-end \
  xl:min-h-[calc(576px+136px)] xl:max-h-[788px]")

    div(class="xl:ml-[166px] xl:mb-[112px] xl:w-[509px] xl:h-[576px] xl:flex \
    xl:justify-between xl:flex-col sm:w-full")

      p(class="font-barlow-condensed text-white text-base leading-[19px] \
      tracking-[2.7px] flex justify-center sm:text-xl sm:leading-6 \
      sm:justify-start sm:mt-10 sm:ml-[38.5px] sm:tracking-[3.38px] \
      xl:text-[28px] xl:leading-[33.6p] xl:tracking-[4.72px] \
      xl:ml-0 xl:mt-0")
        span(class="opacity-25 mr-[16px] font-bold sm:mr-[19px] xl:mr-7") 02
        span MEET YOUR CREW

      picture(class="w-full sm:absolute sm:bottom-0 xl:self-end overflow-hidden \
      sm:h-[532px]")
        source(
          :srcset="require(`@/assets/crew/${$route.params.member}.webp`)"
          type="image/webp"
          )
        source(
          :srcset="require(`@/assets/crew/${$route.params.member}.png`)"
          type="image/png"
          )
        img(:alt="$route.params.member" class="h-[223px] mx-auto mt-8 \
        sm:h-full sm:mt-0 sm:m-auto xl:h-[445px]" :class="commanderClass")

    //- line
    div(class="bg-[#383B4B] h-[1px] w-[327px] sm:hidden xl:mt-[54px]")

    div(class="flex flex-col mt-8 sm:mt-0 sm:flex-col-reverse xl:ml-[157px]")

      nav(class="gap-2 flex m-auto")
        router-link(
          v-for="(item, i) in links"
          :key="i"
          :to="item"
          class="sub-nav w-[18px] h-[18px] relative rounded-full"
        )
          div(class="absolute h-[10px] w-[10px] top-1 left-1 \
          rounded-full bg-white/[.17]")

      router-view

</template>

<script>
import data from "@/data.json";

export default {
  data() {
    return {
      links: data.crew.map((item) => item.role),
    };
  },
  computed: {
    commanderClass() {
      return {
        "sm:!h-[572px]": this.$route.params.member === "commander",
      };
    },
  },
};
</script>
