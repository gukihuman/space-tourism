<template lang="pug">

div(class="flex flex-col items-center max-w-[327px] sm:max-w-[573px] mx-auto")
  h1(class="font-bellefair text-[56px] leading-[64px] text-white mt-5 \
  sm:text-[80px] sm:leading-[92px] \
  ") {{ this.$route.params.spaceObject.toUpperCase() }}

  p(class="text-[15px] leading-[25px] text-center text-slate-400 \
  mt-[1px] sm:mt-2 sm:text-base sm:leading-[28px] \
  ") {{ currentObject.description }}

  //- line
  div(class="bg-[#383B4B] h-[1px] w-full mt-8 sm:mt-[49px]")

  div(class="flex flex-col items-center mb-[58px] sm:flex-row sm:gap-[11px] \
  sm:mb-[62px]")
    div(
      v-for="(item, i) in distanceTravelData"
      :key="i"
      class="flex flex-col items-center sm:w-[216px]"
    )
      span(class="mt-8 font-barlow-condensed text-sm tracking-[2.36px] \
    leading-[16.8px] text-slate-400 sm:mt-7") {{ item[0] }}
      span(class="font-bellefair text-[28px] leading-[32px] text-white mt-3 \
      ") {{ item[1].toUpperCase() }}

</template>

<script>
import data from "@/data.json";

export default {
  data() {
    return {
      destinations: data.destinations,
    };
  },
  computed: {
    currentObject() {
      return this.destinations.find(
        (object) => object.name === this.$route.params.spaceObject
      );
    },
    distanceTravelData() {
      return [
        ["AVG. DISTANCE", this.currentObject.distance],
        ["EST. TRAVEL TIME", this.currentObject.travel],
      ];
    },
  },
};
</script>
