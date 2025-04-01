import { computed, Ref, ref } from 'vue';

type todoCategory = {
  id: number; // 唯一标识符
  title: string; // 任务分类名称
  color: string; // 任务分类的颜色
};

const todoCategorys = ref<todoCategory[]>(JSON.parse(localStorage.getItem('todoCategorys') || '[]'));

todoCategorys.value.push(
  { id: 1, title: 'Work', color: 'blue' },
  { id: 2, title: 'Personal', color: 'green' },
  { id: 3, title: 'Health', color: 'red' },
  { id: 4, title: 'Family', color: 'purple' }
);

const todoCategoryMapById = computed(() => Object.fromEntries(todoCategorys.value.map((category) => [category.id, category])));

export function addTodoCategory(todoCategory: todoCategory): void {
  todoCategorys.value.push(todoCategory);
  localStorage.setItem('todoCategorys', JSON.stringify(todoCategorys.value));
}

export function deleteTodoCategoryById(id: number): void {
  const index = todoCategorys.value.findIndex((todo) => todo.id === id);
  if (index < 0) return;
  todoCategorys.value.splice(index, 1);
  localStorage.setItem('todoCategorys', JSON.stringify(todoCategorys.value));
}

export function getAllTodoCategory(): Ref<todoCategory[]> {
  return todoCategorys;
}

export function getTodoCategoryById(id: number): todoCategory {
  return todoCategoryMapById[id];
}
