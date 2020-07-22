<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import bus from '../utils/bus.js';
import ListMixin from '../mixins/ListMixin.js';

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
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
//   create() {
//     bus.$emit('start:spinner');
//     setTimeout(() => {
//       this.$store.dispatch('FETCH_NEWS')
//       .then(() => {
//         console.log('fetched');
//         bus.$emit('end:spinner');
//       });
//     }, 3000);
//   }
}
</script>

<style>
</style> 