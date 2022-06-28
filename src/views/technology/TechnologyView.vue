<template>
  03 Space launch 101
  <nav>
    <div v-for="(item, i) in data.technology" :key="i">
      <router-link :to="item.name.toLowerCase().split(' ').join('_')">{{
        item.name
      }}</router-link>
    </div>
  </nav>
  <router-view></router-view>
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
