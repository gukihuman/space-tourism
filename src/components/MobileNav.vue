<template lang="pug">
    
div(@click="$emit('toggleNavEvent')" class="absolute left-0 \
w-[calc(100vw-254px)] h-screen z-10")

nav(class="absolute right-0 w-[254px] h-screen bg-white/[.04] \
backdrop-filter font-barlow-condensed text-base tracking-[2.7px] text-white \
flex flex-col pt-[111px] gap-5 z-10")
  router-link(
      v-for="(link, linkId, i) in links"
      :key="i"
      :to="`${link[1]}`"
      class="mobile-nav relative h-[31px] flex items-center"
    )
    span(class="font-bold ml-8") {{ linkId }}
    span(class="ml-3") {{ link[0] }}
    div(@click="$emit('toggleNavEvent')" class="absolute left-0 h-full w-full")

</template>

<script>
export default {
  props: ["links"],
};
</script>
