<template>
  <div>
      <p>name : {{ user.id }}</p>
      <p>karma : {{ user.karma }}</p>
      <p>created : {{ user.created }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      user: 'fetchedUser',
    })
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
  }
}
</script>

<style>

</style>