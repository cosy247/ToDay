<template>
  <div class="HomeView">
    <div class="header flexRow">
      <div class="title">{{ title }}</div>
      <div class="flex1"></div>
      <RouterLink class="tool" to="addTask">+</RouterLink>
    </div>
    <div class="todos flexColumn">
      <TodoItem v-for="todo in todos" :data="todo" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TodoItem from '../components/TodoItem.vue';
import { RouterLink } from 'vue-router';
import { getAllTodos } from '@/utils/todos';

const title = ref('Today');

const todos = getAllTodos();
</script>

<style scoped>
.HomeView {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.header {
  padding: 10px 20px;
}
.title {
  font-size: 20px;
  font-weight: 900;
}
.tool {
  display: block;
  height: 0;
  width: 20px;
  text-align: center;
  line-height: 0;
  color: white;
  font-size: 20px;
  font-weight: 900;
  padding: 10px 0;
  background: #3338;
  border-radius: 4px;
}
.todos {
  overflow: auto;
  gap: 10px;
  margin: 10px;
}
</style>
