<template>
  <div class="landing">
    <div class="content">
      <div class="card">
        <div class="icon">
          <img src="/assets/img/icon.webp" alt="" />
        </div>
        <div class="title">Banī<span>Chīmu</span></div>
        <div class="tagline">The cutest streaming team on the internet!</div>
        <div class="action">
          <div @click="clicked()" class="btn btn-strawberry">
            See the schedule!
          </div>
        </div>
      </div>
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
    justify-content: center;
    align-items: center;
    .card {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .icon {
        height: 150px;
        width: 150px;
        background-color: pink;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
          width: 140px;
          height: 140px;
          padding: 5px;
          border-radius: 50%;
        }
      }
      .title {
        font-size: 60px;
      }
      .tagline {
        color: white;
        font-size: 40px;
      }
      .action {
        padding-top: 10px;
      }
    }
  }
}

.title {
  color: white;
  font-family: "Montserrat", sans-serif;
  span {
    color: pink;
  }
}
</style>
