<template>
  <div>
      <div v-for="user in users" :key="user">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
  data() {
    return {
      users: [],
    }
  },
  created() {
    fetchNewsList()
    .then(response => {
      this.users = response.data;
      console.log(this.users);
    })
    .catch(error => console.log(error))
  }
}
</script>

<style>

</style>