<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
  components: {
    ListItem,
  },
  computed: {
    //... => 전개연산자 (spread operator)
    // #3
    // ...mapGetters([
    //   'fetchedAsk'
    // ]),
    
    // #2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // }),

    // #1
    // fetchedAsk() {
    //   return this.$store.state.ask;
    // }
  },
}
</script>

<style>

</style>