<template>
  <div class="Todo" :class="props.data.completed ? 'completed' : ''">
		{{ props.data.content }}
  </div>
</template>

<script setup>
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
