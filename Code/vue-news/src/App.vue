<template>
  <div id="app">
    <!-- <ToolBar></ToolBar> -->
    <!-- 위에 것에 비해 아래는 컴포넌트 tag라는 것이 명시적으로 구분이 된다. -->
    <!-- 또한 아래는 ctrl + 마우스 클릭에 의해 해당 컴포넌트 이동할 수 있다. -->
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
export default {
  components: {
    ToolBar,
  },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
