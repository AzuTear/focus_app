<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import type { TodoList, Task } from '../models/task'

const newListName = ref('')
const lists = ref<TodoList[]>([])
let listId = 1
let taskId = 1

function addList() {
  if (newListName.value.trim() !== '') {
    lists.value.push({ id: listId++, name: newListName.value, tasks: [], newTask: '' })
    newListName.value = ''
  }
}

function deleteList(id: number) {
  const idx = lists.value.findIndex(l => l.id === id)
  if (idx !== -1) lists.value.splice(idx, 1)
}

function addTask(list: TodoList) {
  if (!list.newTask) return
  list.tasks.push({ id: taskId++, description: list.newTask, completed: false })
  list.newTask = ''
}

function deleteTask(list: TodoList, id: number) {
  const idx = list.tasks.findIndex(t => t.id === id)
  if (idx !== -1) list.tasks.splice(idx, 1)
}

function startEdit(task: Task) {
  task.editing = true
}

function finishEdit(task: Task) {
  if (task.description.trim() === '') return
  task.editing = false
}
</script>

<template>
  <div class="p-6 max-w-3xl mx-auto bg-[#e0f2fe] text-[#334155] rounded-lg space-y-6">
    <h1 class="text-2xl font-semibold text-center">Todo Lists</h1>
    <div class="flex gap-2">
      <input
        v-model="newListName"
        type="text"
        placeholder="List name"
        class="border rounded px-2 py-1 flex-1"
      />
      <Button label="Add List" @click="addList" />
    </div>

    <div v-for="list in lists" :key="list.id" class="bg-[#f0f9ff] p-4 rounded shadow">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-xl font-medium">{{ list.name }}</h2>
        <Button icon="pi pi-trash" text @click="deleteList(list.id)" />
      </div>

      <div class="flex gap-2 mb-4">
        <input
          v-model="list.newTask"
          type="text"
          placeholder="New task"
          class="border rounded px-2 py-1 flex-1"
        />
        <Button label="Add" @click="addTask(list)" />
      </div>

      <ul class="space-y-2">
        <li v-for="task in list.tasks" :key="task.id" class="flex items-center gap-2">
          <input type="checkbox" v-model="task.completed" />
          <input
            v-if="task.editing"
            v-model="task.description"
            @blur="finishEdit(task)"
            class="border rounded px-1 flex-1"
          />
          <span v-else :class="{ 'line-through text-gray-500': task.completed }" class="flex-1">
            {{ task.description }}
          </span>
          <Button icon="pi pi-pencil" text @click="startEdit(task)" />
          <Button icon="pi pi-trash" text @click="deleteTask(list, task.id)" />
        </li>
      </ul>
    </div>
  </div>
</template>

