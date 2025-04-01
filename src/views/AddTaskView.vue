<template>
  <div class="upper flexRow">
    添加任务
    <span>X</span>
  </div>
  <div class="AddTaskView"></div>
</template>

<script setup>
import { ref } from 'vue';

const task = ref({
  name: '',
  description: '',
  deadline: '',
  remind: '',
  important: false,
  complete: false,
});
</script>

<style scoped>
.AddTaskView {
}
.upper {
  width: 100%;
  justify-content: space-between;
}
</style>
