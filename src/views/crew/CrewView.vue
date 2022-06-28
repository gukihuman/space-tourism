<template>
  02 Meet your crew
  <nav>
    <div v-for="(item, i) in data.crew" :key="i">
      <router-link :to="item.role.toLowerCase().split(' ').join('_')">{{
        item.role
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
