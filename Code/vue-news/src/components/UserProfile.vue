<template>
  <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
            <slot name="username">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>
            <!-- <div>{{ user.id }}</div> -->
            <!-- <div>username: {{ info.id }}</div> -->
          <!-- <router-link :to="`/user/${user.id}`">
            {{ user.id }}
            </router-link> -->
          <div class="time">
            <!-- {{ user.created }} -->
            <!-- time: {{ info.created }} -->
            <slot name="time">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>
          <slot name="karma">
              <!-- 상위 컴포넌트에서 정의할 영역 -->
          </slot>
          </div>
        </div>
      </div>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
    props: {
        info: Object,
    },
    // computed: {
    //     ...mapGetters({
    //         user: 'fetchedUser',
    //     })
    // },
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>