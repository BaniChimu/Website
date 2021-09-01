<template>
  <div class="landing">
    <div class="content">
      <div class="navigation">
        <router-link to="domiibunn">DomiiBunn</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  methods: {
    clicked() {
      router.push("/schedule");
    },
  },
};
</script>

<style lang="scss" scoped>
.landing {
  background-image: url(/assets/img/bg.jpg);
  background-size: 100% 100%;
  .content {
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .navigation {
      color: white;
      font-size: 30px;
    }
    .nav-item {
      border-bottom: rgb(92, 92, 92) 2px solid;
    }
    .router-link-exact-active {
      border-bottom: white 2px solid;
    }
  }
}
</style>
