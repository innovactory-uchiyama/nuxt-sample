<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="message">
      <!-- v-htmlはXSSの危険性があるためlintで警告が出る -->
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-if="vhtml" v-html="message" />
      <div v-else>{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    vhtml: {
      type: Boolean
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
