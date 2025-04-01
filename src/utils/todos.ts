import { computed, Ref, ref } from 'vue';

type TodoItem = {
  id: number; // 唯一标识符
  title: string; // 任务标题
  describe: string; // 任务描述
  type: 'habit' | 'todo'; // 任务类型
  categoryId: number; // 任务分类 ID

  strtTime: number; // 开始时间戳
  endTime: number; // 结束时间戳
  hasEnd: boolean; // 是否有结束时间

  repeatType: 'none' | 'day' | 'week' | 'month' | 'year'; // 任务重复类型
  repeatTime: number[]; // 重复的时间节点
  repeatInterval: number; // 重复的间隔

  counter: number; // 完成次数
  targetCount: number; // 目标完成次数
};

const todos = ref<TodoItem[]>(JSON.parse(localStorage.getItem('todos') || '[]'));

todos.value.push(
  {
    id: 1,
    title: '完成项目报告',
    describe: '撰写并提交项目报告',
    type: 'todo',
    categoryId: 1,
    strtTime: Date.now(),
    endTime: Date.now() + 3600000, // 1小时后
    hasEnd: true,
    repeatType: 'none',
    repeatTime: [],
    repeatInterval: 0,
    counter: 0,
    targetCount: 1,
  },
  {
    id: 2,
    title: '每日运动',
    describe: '每天进行30分钟运动',
    type: 'habit',
    categoryId: 2,
    strtTime: Date.now(),
    endTime: 0, // 没有结束时间
    hasEnd: false,
    repeatType: 'day',
    repeatTime: [Date.now(), Date.now() + 86400000], // 当天和第二天
    repeatInterval: 1,
    counter: 5,
    targetCount: 30,
  },
  {
    id: 3,
    title: '每周团队会议',
    describe: '每周一上午10点举行团队会议',
    type: 'todo',
    categoryId: 3,
    strtTime: Date.now(),
    endTime: Date.now() + 604800000, // 1周后
    hasEnd: true,
    repeatType: 'week',
    repeatTime: [Date.now(), Date.now() + 604800000], // 当周和下周
    repeatInterval: 1,
    counter: 0,
    targetCount: 1,
  },
  {
    id: 4,
    title: '每月财务报表',
    describe: '每月最后一天提交财务报表',
    type: 'todo',
    categoryId: 4,
    strtTime: Date.now(),
    endTime: Date.now() + 2592000000, // 1个月后
    hasEnd: true,
    repeatType: 'month',
    repeatTime: [Date.now(), Date.now() + 2592000000], // 当月和下个月
    repeatInterval: 1,
    counter: 0,
    targetCount: 1,
  },
  {
    id: 5,
    title: '年度体检',
    describe: '每年进行一次全面体检',
    type: 'todo',
    categoryId: 5,
    strtTime: Date.now(),
    endTime: Date.now() + 31536000000, // 1年后
    hasEnd: true,
    repeatType: 'year',
    repeatTime: [Date.now(), Date.now() + 31536000000], // 当年和下一年
    repeatInterval: 1,
    counter: 0,
    targetCount: 1,
  }
);

const todoMapById = computed(() => Object.fromEntries(todos.value.map((todo) => [todo.id, todo])));

export function addTodo(todo: TodoItem): void {
  todos.value.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos.value));
}

export function deleteTodoById(id: number): void {
  const index = todos.value.findIndex((todo) => todo.id === id);
  if (index < 0) return;
  todos.value.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos.value));
}

export function getAllTodos(): Ref<TodoItem[]> {
  return todos;
}

export function getTodoById(id: number): TodoItem {
  return todoMapById[id];
}

export function getTodoByTimeRange(start: string | number, end: string | number): TodoItem[] {
  if (!start || !end) return [];
  const startTimeValue = new Date(start).valueOf();
  const endTimeValue = new Date(end).valueOf();
  return todos.value.filter((todo) => startTimeValue <= todo.strtTime || endTimeValue >= todo.endTime);
}
