<template lang="pug">

div(class="flex flex-col")
  p(class="font-barlow-condensed text-white text-base leading-[19px] \
  tracking-[2.7px] flex justify-center mt-[10px] sm:text-xl sm:leading-6 \
  sm:justify-start sm:mt-10 sm:ml-[38.5px] sm:tracking-[3.38px]")
    span(class="opacity-25 mr-[18px] font-bold sm:mr-[19px]") 01
    span PICK YOUR DESTINATION

  picture
    source(
      :srcset="require(`@/assets/destination/${$route.params.spaceObject}.webp`)"
      type="image/webp"
      )
    source(
      :srcset="require(`@/assets/destination/${$route.params.spaceObject}.png`)"
      type="image/png"
      )
    img(:alt="$route.params.spaceObject" class="h-[170px] mx-auto mt-8 \
    sm:h-[300px] sm:mt-[60px]")

  div(class="flex flex-col justify-center")
    nav(class="h-7 mt-[26px] font-barlow-condensed text-sm leading-[16.8px] \
    tracking-[2.36px] text-slate-400 gap-[27px] flex justify-center \
    sm:mt-[53px] sm:text-base sm:h-[34px] sm:leading-[19px]")
      router-link(
        v-for="(item, i) in ['MOON', 'MARS', 'EUROPA', 'TITAN']"
        :key="i"
        :to="item.toLowerCase()"
        class="nav relative h-full flex"
      )
        span {{ item }}

    router-view

</template>
