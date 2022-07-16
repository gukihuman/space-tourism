<template lang="pug">

div(class="flex flex-col items-center max-w-[327px] sm:max-w-[573px] mx-auto \
xl:mx-0 xl:items-start xl:max-w-[445px]")

  h2(class="font-bellefair text-base leading-[18.34px] text-white mt-8 opacity-50 \
  sm:text-[80px] sm:leading-[92px] sm:mt-8 xl:mt-[37px] xl:text-[100px] \
  xl:leading-[115px] \
  ") {{ currentObject.role.split("-").join(" ").toUpperCase() }}

  h1(class="font-bellefair text-2xl leading-[28px] text-white mt-2 \
  sm:text-[80px] sm:leading-[92px] sm:mt-8 xl:mt-[37px] xl:text-[100px] \
  xl:leading-[115px] \
  ") {{ currentObject.name.split("-").join(" ").toUpperCase() }}

  p(class="text-[15px] leading-[25px] mb-[30px] text-center text-slate-400 \
  mt-4 sm:mt-2 sm:text-base sm:leading-[28px] xl:text-start xl:mt-[14px] \
  xl:text-lg xl:leading-8 \
  ") {{ currentObject.bio }}

</template>

<script>
import data from "@/data.json";

export default {
  data() {
    return {
      crew: data.crew,
    };
  },
  computed: {
    currentObject() {
      return this.crew.find(
        (object) => object.role === this.$route.params.member
      );
    },
  },
};
</script>
