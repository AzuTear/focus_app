<script setup lang="ts">
import { ref } from "vue";
import Button from "primevue/button";
import type { Task } from "./models/task.ts";
import { computed } from "vue";

const tasks = ref("");
const taskList = ref<Task[]>([]);
let index = 1;

function addTask() {
  if (tasks.value.trim() !== "") {
    taskList.value.push({
      id: index++,
      description: tasks.value,
      completed: false,
    });
    tasks.value = "";
  }
}

function deleteTask(id: number) {
  const index = taskList.value.findIndex((task) => task.id === id);
  if (index != -1) {
    taskList.value.splice(index, 1);
  }
}

const isCompleted = computed(() => {
  return taskList.value.filter((task) => task.completed);
});
</script>

<template>
  <div class="justify-items-center p-10 w-1/2 mx-auto">
    <div class="justify-start pb-5">
      <label>New Task</label>
    </div>
    <form @submit.prevent>
      <div class="border-4 border-sky-500 flex p-5 rounded-lg">
        <input
          v-model="tasks"
          type="text"
          placeholder="Enter task name"
          class="w-full"
        />
      </div>
      <div class="flex justify-end pt-2">
        <Button label="Add item" @click="addTask" />
      </div>
    </form>
    <div class="justify-start">
      <h1>Done {{ isCompleted.length }} / {{ taskList.length }}</h1>
    </div>
    <div>
      <li v-for="task in taskList" :key="task.id">
        <div>
          <input type="checkbox" v-model="task.completed" />
          ID: {{ task.id }} Beschreibung: {{ task.description }} Done:
          {{ task.completed }}
          <Button
            v-show="task.completed == true"
            icon="pi pi-trash"
            @click="deleteTask(task.id)"
          ></Button>
        </div>
      </li>
    </div>
  </div>
</template>
