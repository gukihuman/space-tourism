<template lang="pug">

|02 Meet your crew
nav
  router-link(
    v-for="(item, i) in data.crew"
    :key="i"
    :to="item.role.toLowerCase().split(' ').join('_')"
    ) {{ item.role }}
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
