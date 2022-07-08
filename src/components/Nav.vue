<template lang="pug">
    
nav(class="hidden sm:flex absolute right-0 w-[450px] h-24 bg-white/[.04] \
backdrop-filter font-barlow-condensed text-sm tracking-[2.36px] text-white \
gap-[37px] justify-center items-center xl:mt-10 xl:w-[830px] xl:gap-[48px] \
xl:pr-[42px] xl:text-base xl:tracking-[2.7px]")
  router-link(
    v-for="(link, linkId, i) in links"
    :key="i"
    :to="`${link[1]}`"
    class="nav relative h-full flex items-center"
  )
    span(class="hidden xl:inline-block font-bold mr-3") {{ linkId }}
    span(:class="`${linkId === '02' ? 'ml-[5px] xl:ml-0' : ''}`") {{ link[0] }}

</template>

<script>
export default {
  props: ["links"],
};
</script>
