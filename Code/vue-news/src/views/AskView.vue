<template>
  <div>
      <div v-for="item in fetchedAsk" :key="item">{{ item.title }}</div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  computed: {
    //... => 전개연산자 (spread operator)
    // #3
    ...mapGetters([
      'fetchedAsk'
    ]),
    
    // #2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // }),

    // #1
    // fetchedAsk() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>