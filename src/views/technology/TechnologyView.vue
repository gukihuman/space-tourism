<template lang="pug">

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
        span(class="opacity-25 mr-[16px] font-bold sm:mr-[19px] xl:mr-7") 03
        span SPACE LAUNCH 101

      picture(class="w-full sm:absolute sm:bottom-0 overflow-hidden \
      sm:h-[532px] xl:max-w-[1500px]")
        source(
          :srcset="require(`@/assets/technology/${$route.params.techObject}-landscape.jpg`)"
          type="image/jpg"
          )
        img(:alt="$route.params.techObject" class="h-[170px] mx-auto mt-8 \
        sm:h-full sm:mt-0 sm:m-auto xl:h-[445px]")

    div(class="flex flex-col mt-[34px] sm:mt-0 sm:flex-col-reverse xl:mb-[229px]")

      nav(class="gap-4 flex m-auto xl:absolute xl:-mb-[145px] xl:ml-[167px] \
      xl:gap-[14px]")
        router-link(
          v-for="(item, i) in links"
          :key="i"
          :to="item"
          class="tech-nav border-[1px] border-white/25 flex items-center \
          justify-center relative rounded-full w-10 h-10 xl:w-[25px] \
          xl:h-[25px] text-white")
          span(class="font-bellefair mt-[2px]") {{ i + 1 }}

      router-view

</template>

<script>
import data from "@/data.json";

export default {
  data() {
    return {
      links: data.technology.map((item) => item.name),
    };
  },
};
</script>
