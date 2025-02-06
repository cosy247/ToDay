<template>
  <div class="AddTaskView">
    <!-- 可以使用 CellGroup 作为容器 -->
      <van-field v-model="task.name" label="文本" placeholder="请输入用户名" />
  </div>
	<!-- 可以使用 CellGroup 作为容器 -->
<van-cell-group inset>
  <van-field v-model="task.name" label="文本" placeholder="请输入用户名" />
</van-cell-group>

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
</style>
