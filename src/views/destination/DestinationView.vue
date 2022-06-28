<template lang="pug">

|01 Pick your destination
nav
  router-link(
    v-for="(item, i) in data.destinations"
    :key="i"
    :to="item.name.toLowerCase().split(' ').join('_')"
  ) {{ item.name }}
router-view

</template>

<script>
import data from "@/data.json";

export default {
  data() {
    return {
      data: data,
    };
  },
};
</script>
