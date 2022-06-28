<template>
  01 Pick your destination
  <nav>
    <div v-for="(item, i) in data.destinations" :key="i">
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
