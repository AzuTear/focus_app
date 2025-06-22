<script setup lang="ts">
import DatePicker from "primevue/datepicker";
import Button from "primevue/button";
import { ref } from "vue";

const claimedDates = ref<Date[]>([]);

function claimToday() {
  const today = new Date();
  const exists = claimedDates.value.some(
    (d) => d.toDateString() === today.toDateString(),
  );
  if (!exists) {
    claimedDates.value.push(today);
  }
}
</script>
<template>
  <div
    class="activity-calendar bg-[#f3e8ff] text-[#4a437e] p-6 rounded-lg shadow w-fit mx-auto"
  >
    <h1 class="text-center text-3xl font-semibold mb-4">Activity Calendar</h1>
    <div class="flex justify-center mb-4">
      <DatePicker
        v-model="claimedDates"
        inline
        showWeek
        selectionMode="multiple"
        class="w-full sm:w-[30rem]"
      />
    </div>
    <div class="text-center">
      <Button label="Daily Claim" @click="claimToday" />
    </div>
  </div>
</template>

<style scoped>
.activity-calendar :deep(.p-datepicker) {
  /* Pastel styled calendar */
  --p-datepicker-panel-background: #e9d5ff;
  --p-datepicker-panel-color: #4a437e;

  --p-datepicker-header-background: #d8b4fe;
  --p-datepicker-header-color: #4a437e;

  --p-datepicker-calendar-background: #f3e8ff;
  --p-datepicker-calendar-color: #4a437e;

  --p-datepicker-day-hover-background: #ddd6fe;
  --p-datepicker-day-active-background: #c4b5fd;
  --p-datepicker-day-active-color: #4a437e;
}
</style>
