<template>
  <div>
      <div v-for="user in users" :key="user">{{ user.title }}</div>
  </div>
</template>

<script
  src="https://code.jquery.com/jquery-3.5.1.js"
  integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
  crossorigin="anonymous"></script>
<script>
import { fetchNewsList } from '../api/index.js';

export default {
  data() {
    return {
      // 1
      users: [],
    }
  },
  created() {
    function callAjax() {
      return new Promise(function(resolve, reject) {
        $.ajax({
          url: 'https://api.hnpwa.com/v0/news/1.json',
          success: function(data) {
            resolve(data);
          }
        });
      });
    }

    // 2
    // fetchNewsList()
    callAjax()
    .then(response => {
      this.users = response;
      console.log(this.users);
      // 3
      console.log('함수 결과', this.users)
    })
    .catch(error => console.log(error))

    // 3
    // console.log('함수 결과', this.users)
  }
}
</script>

<style>

</style>