<script setup lang="ts">
defineOptions({ name: "PomodoroTimer" });
import { ref } from "vue";
import Button from "primevue/button";

const setMinutes = ref(25);
const countdown = ref(
  `${String(setMinutes.value).padStart(2, "0")}:${String(0).padStart(2, "0")}`,
);
const intervalId = ref<number | null>(null);
const secondLeft = ref(0);
const isRunning = ref(false);

function updateCountdownDisplay() {
  const minutes = Math.floor(secondLeft.value / 60);
  const seconds = secondLeft.value % 60;
  countdown.value = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function clearTimer() {
  if (intervalId.value !== null) {
    clearInterval(intervalId.value);
    intervalId.value = null;
  }
  isRunning.value = false;
}

function initTimer() {
  secondLeft.value = setMinutes.value * 60;
  updateCountdownDisplay();
}

function runCountdown() {
  clearTimer();
  intervalId.value = setInterval(() => {
    if (secondLeft.value <= 0) {
      clearTimer();
      countdown.value = "Time's up!";
      return;
    }
    secondLeft.value--;
    updateCountdownDisplay();
  }, 1000);
  isRunning.value = true;
}

function start() {
  initTimer();
  runCountdown();
}

function pause() {
  clearTimer();
}

function resume() {
  if (!intervalId.value && secondLeft.value > 0) {
    runCountdown();
  }
}

function reset() {
  clearTimer();
  initTimer();
}
</script>
<template>
  <div
    class="grid justify-items-center p-10 w-full max-w-md mx-auto bg-[#fff7ed] text-[#78350f] rounded-lg shadow"
  >
    <div class="text-center mb-6 w-full">
      <p class="mb-2 text-lg font-semibold">Timer (in Minutes):</p>
      <div class="flex items-center justify-center space-x-2">
        <input
          class="border border-gray-300 rounded-md p-1 text-center w-20"
          type="number"
          min="1"
          max="60"
          placeholder="Minutes"
          v-model.number="setMinutes"
        />
        <Button label="Set" @click="initTimer" />
      </div>
    </div>

    <div class="text-4xl font-mono mb-6">{{ countdown }}</div>

    <div class="flex flex-wrap justify-center gap-2">
      <Button
        label="Start"
        icon="pi pi-play"
        @click="start"
        :disabled="isRunning"
      />
      <Button
        label="Pause"
        icon="pi pi-pause"
        @click="pause"
        v-if="isRunning"
      />
      <Button
        label="Resume"
        icon="pi pi-replay"
        @click="resume"
        v-if="!isRunning && secondLeft > 0"
      />
      <Button label="Reset" icon="pi pi-refresh" @click="reset" />
    </div>
  </div>
</template>

