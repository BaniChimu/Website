<template>
  <div class="landing">
    <button @click="clicked">Hi Click me</button>
  </div>
</template>

<script>
export default {
  methods: {
    clicked() {
      this.$emit("updateTitle", "test");
    },
  },
};
</script>
