import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TodoListView from "../views/TodoListView.vue";
import PomodoroView from "../views/PomodoroView.vue";
import ActivityCalendar from "../components/ActivityCalendar.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/todolist",
      component: TodoListView,
    },
    {
      path: "/pomodoro",
      component: PomodoroView,
    },
    {
      path: "/activitycalendar",
      component: () => ActivityCalendar,
    },
  ],
});

export default router;
