<template>
  <div class="Todo" :class="props.data.completed ? 'completed' : ''">
    <div class="categoty"></div>
    {{ props.data.content }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['data']);
</script>

<style scoped>
.Todo {
  padding: 10px 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
}
.Todo.completed {
  text-decoration: line-through;
}
</style>
