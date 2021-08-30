<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="message">
      <div>{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

.message {
  margin: 10px;
  text-align: center;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  padding: 20px;
  width: 30vh;
}
</style>
