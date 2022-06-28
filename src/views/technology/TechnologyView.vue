<template lang="pug">

|03 Space launch 101
nav
  router-link(
    v-for="(item, i) in data.technology"
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
