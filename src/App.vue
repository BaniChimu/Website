<template>
  <div id="app">
    <navBar />
    <router-view class="router" @updateTitle="updateTitle" />
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
export default {
  components: {
    navBar,
  },
  title: "BanīChīmu",
  methods: {
    updateTitle(newTitle) {
      this.title = `BanīChīmu - ${newTitle}`;
      document.title = `BanīChīmu - ${newTitle}`;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@300&display=swap");
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
}

.router {
  height: calc(100vh - 75px);
  width: 100%;
}
</style>
