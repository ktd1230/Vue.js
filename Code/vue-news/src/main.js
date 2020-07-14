// 이 파일은 기본적으로 애플리케이션의 설정들을 플러그인과 라이브러리
// 그리고 구조들을 파악할 수 있는 청사진이 눈에 들어와야 하는 파일이다.

import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
