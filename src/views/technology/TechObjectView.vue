<template lang="pug">

div(class="flex flex-col items-center max-w-[327px] sm:max-w-[458px] mx-auto \
xl:mx-0 xl:items-start xl:max-w-none xl:ml-[165px]" :class="widthClass")

  h2(class="font-barlow-condensed tracking-[2.36px] text-base \
  leading-[18.34px] mt-7 text-slate-400 sm:text-2xl \
  sm:leading-[27.5px] sm:mt-[60px] xl:mt-[155px] \
  xl:text-[32px] xl:leading-[36.6px] \
  ") THE TERMINOLOGY...

  h1(class="font-bellefair text-2xl leading-[28px] text-white mt-2 \
  sm:text-[40px] sm:leading-[45.8px] sm:mt-2 xl:mt-[15px] xl:text-[56px] \
  xl:leading-[64px] \
  ") {{ currentObject.name.split("-").join(" ").toUpperCase() }}

  p(class="text-[15px] leading-[25px] mb-[26px] text-center text-slate-400 \
  mt-4 sm:mt-4 sm:mb-[40px] sm:text-base sm:leading-[28px] xl:text-start \
  xl:mt-[27px] xl:text-lg xl:leading-8 xl:max-w-[444px] xl:mb-0\
  ") {{ currentObject.description }}

</template>

<script>
import data from "@/data.json";

export default {
  data() {
    return {
      technology: data.technology,
    };
  },
  computed: {
    currentObject() {
      return this.technology.find(
        (object) => object.name === this.$route.params.techObject
      );
    },
  },
};
</script>
