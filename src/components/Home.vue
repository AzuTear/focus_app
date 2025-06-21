<script setup lang="ts">
import { ref } from "vue";

const remainingTasks = ref(3);
const activityDays = ref(15);
const today = new Date();
const formattedToday = ref(
  today.toLocaleDateString("en-EN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
);
</script>
<template>
  <section class="p-6 space-y-4 max-w-xl mx-auto">
    <h1 class="text-3xl font-bold text-center">Welcome back, [Name]!</h1>

    <div class="bg-[#a7a1dc] text-[#4a437e] rounded-lg p-4">
      <p class="text-lg">Today is: {{ formattedToday }}</p>
      <p>
        You have <span class="text-xl">{{ remainingTasks }}</span> remaining
        task.
      </p>
      <p>
        This month you've been for
        <span class="text-xl">{{ activityDays }}</span> days active.
      </p>
    </div>
  </section>
</template>
