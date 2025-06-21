<script setup lang="ts">
import { RouterView } from "vue-router";
import "primeicons/primeicons.css";
</script>

<template>
  <header>
    <nav class="flex justify-center align-items-center">
      <RouterLink to="/" class="router-item">
        <i class="pi pi-home pr-2"></i>Home</RouterLink
      >
      <RouterLink to="/todolist" class="router-item"
        ><i class="pi pi-list-check pr-2"></i>Todo List</RouterLink
      >
      <RouterLink to="/pomodoro" class="router-item"
        ><i class="pi pi-stopwatch pr-2"></i>Pomodoro</RouterLink
      >
      <RouterLink to="/activitycalendar" class="router-item"
        ><i class="pi pi-calendar pr-2"></i>Activity Calendar</RouterLink
      >
    </nav>
  </header>

  <RouterView />
</template>

<style>
.router-item {
  color: #4a437e;
  text-decoration: none;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #a7a1dc;
  margin: 1rem;
}

.router-item:hover {
  background-color: #5c569b;
  color: #f0f0f8;
}

.router-link-active {
  background-color: #5c569b;
  color: #f0f0f8;
}
</style>
