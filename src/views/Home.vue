<template>
  <div class="landing">
    <div class="content">
      <div class="holder">
        <div class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni
          voluptatum quis nihil reprehenderit pariatur maxime odit numquam
          dolorum provident! Dolore veritatis quae inventore explicabo natus
          blanditiis laborum deserunt autem!
        </div>
        <div class="actions">
          <div class="btn">Find out more!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.landing {
  background-image: url(/bg.jpg);
  background-size: 100% 100%;
  .content {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .holder {
      width: 50%;
      background-color: white;
      height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      div {
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>
