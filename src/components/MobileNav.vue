<template lang="pug">
    
div(class="absolute right-0 w-[254px] h-screen bg-white/[.04] \
  backdrop-mobile-filter")
  nav(class="font-barlow-condensed text-base leading-[19px] tracking-[2.7px] \
    text-white flex flex-col mt-[111px] gap-5 ")
    router-link(
        v-for="(link, linkId, i) in links"
        :key="i"
        :to="`${link[1]}`"
        class="mobile-nav h-[31px] flex items-center"
      )
      span(class="font-bold ml-8") {{ linkId }}
      span(class="ml-3") {{ link[0] }}

</template>

<script>
export default {
  data() {
    return {
      links: {
        "00": ["HOME", "/"],
        "01": ["DESTINATION", "/destination"],
        "02": ["CREW", "/crew"],
        "03": ["TECHNOLOGY", "/technology"],
      },
    };
  },
};
</script>
