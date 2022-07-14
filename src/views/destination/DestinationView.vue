<template lang="pug">

div(class="flex flex-col xl:flex-row")
  div(class="xl:ml-[166px] xl:mt-[76px] xl:w-[509px] xl:h-[576px] xl:flex \
  xl:justify-between flex-col")
    p(class="font-barlow-condensed text-white text-base leading-[19px] \
    tracking-[2.7px] flex justify-center mt-[10px] sm:text-xl sm:leading-6 \
    sm:justify-start sm:mt-10 sm:ml-[38.5px] sm:tracking-[3.38px] \
    xl:text-[28px] xl:leading-[33.6p] xl:tracking-[4.72px] \
    xl:ml-0 xl:mt-0")
      span(class="opacity-25 mr-[18px] font-bold sm:mr-[19px] xl:mr-7") 01
      span PICK YOUR DESTINATION

    picture(class="w-fit xl:self-end")
      source(
        :srcset="require(`@/assets/destination/${$route.params.spaceObject}.webp`)"
        type="image/webp"
        )
      source(
        :srcset="require(`@/assets/destination/${$route.params.spaceObject}.png`)"
        type="image/png"
        )
      img(:alt="$route.params.spaceObject" class="h-[170px] mx-auto mt-8 \
      sm:h-[300px] sm:mt-[60px] xl:h-[445px]")

  div(class="flex flex-col mt-[26px] sm:mt-[53px] xl:ml-[157px] xl:mt-[174px]")
    nav(class="h-7 font-barlow-condensed text-sm leading-[16.8px] \
    tracking-[2.36px] text-slate-400 gap-[27px] flex justify-center \
    sm:text-base sm:h-[34px] sm:leading-[19px] sm:gap-[36px] xl:justify-start")
      router-link(
        v-for="(item, i) in ['MOON', 'MARS', 'EUROPA', 'TITAN']"
        :key="i"
        :to="item.toLowerCase()"
        class="nav relative h-full flex"
      )
        span {{ item }}

    router-view

</template>
