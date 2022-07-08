<template lang="pug">

div(class="flex flex-col")
  p(class="font-barlow-condensed text-white text-base leading-[19px] \
  tracking-[2.7px] flex justify-center mt-[10px]")
    span(class="opacity-25 mr-[18px] font-bold") 01
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
    img(:alt="$route.params.spaceObject" class="h-[170px] mx-auto mt-8")
  div(class="flex flex-col justify-center")
    nav(class="h-7 mt-[26px] font-barlow-condensed text-sm tracking-[2.36px] \
    text-slate-400 gap-[27px] flex justify-center")
      router-link(
        v-for="(item, i) in ['MOON', 'MARS', 'EUROPA', 'TITAN']"
        :key="i"
        :to="item.toLowerCase()"
        class="nav relative h-full flex"
      )
        span {{ item }}
    router-view

</template>
