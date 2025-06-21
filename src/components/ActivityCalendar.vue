<script setup lang="ts">
import DatePicker from "primevue/datepicker";
import { ref } from "vue";

const date = ref();
</script>
<template>
  <div class="activity-calendar">
    <h1 class="flex justify-center p-5 text-3xl">Activity Calendar</h1>
    <div class="card flex justify-center">
      <DatePicker v-model="date" inline showWeek class="w-full sm:w-[30rem]" />
    </div>
  </div>
  <p>{{ date }}</p>
</template>

<style scoped>
.activity-calendar :deep(.p-datepicker) {
  /* Dunkler, gesättigter Lilac als Hintergrund */
  --p-datepicker-panel-background: #4a437e; /* Hauptfläche */
  --p-datepicker-panel-color: #f5f5fa; /* Heller Text */

  /* Header kontrastreich, leicht heller */
  --p-datepicker-header-background: #5c569b;
  --p-datepicker-header-color: #ffffff;

  /* Kalenderzellen */
  --p-datepicker-calendar-background: #4a437e;
  --p-datepicker-calendar-color: #f0f0f8;

  /* Hover / aktiv */
  --p-datepicker-day-hover-background: #6e66b5;
  --p-datepicker-day-active-background: #867fd3;
  --p-datepicker-day-active-color: #ffffff;
}
</style>
