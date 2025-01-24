<template>
  <div class="HomeView">
    <div class="header flexRow">
      <div class="title">{{ title }}</div>
      <div class="flex1"></div>
      <RouterLink class="tool" to="addTask">+</RouterLink>
    </div>
    <div class="todos flexColumn">
      <Todo v-for="todo in todos" :data="todo"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Todo from '../components/Todo.vue';
import { RouterLink } from 'vue-router';

const title = ref('Today');

const todos = ref([
  { id: 1, content: 'Todo 1', completed: false, type: 'A', pre: '12133' },
  { id: 2, content: 'Todo 2', completed: true, type: 'A', pre: '12133' },
  { id: 1, content: 'Todo 1', completed: true, type: 'A', pre: '12133' },
  { id: 2, content: 'Todo 2', completed: false, type: 'A', pre: '12133' },
  { id: 3, content: 'Todo 3', completed: false, type: 'A', pre: '12133' },
  { id: 1, content: 'Todo 1', completed: true, type: 'A', pre: '12133' },
  { id: 2, content: 'Todo 2', completed: true, type: 'A', pre: '12133' },
  { id: 3, content: 'Todo 3', completed: false, type: 'A', pre: '12133' },
  { id: 1, content: 'Todo 1', completed: false, type: 'A', pre: '12133' },
  { id: 2, content: 'Todo 2', completed: true, type: 'A', pre: '12133' },
  { id: 3, content: 'Todo 3', completed: false, type: 'A', pre: '12133' },
  { id: 1, content: 'Todo 1', completed: false, type: 'A', pre: '12133' },
]);
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
