<script setup>
import { computed, ref } from 'vue';
import AppTabbar from '../components/AppTabbar.vue';
import TaskCard from '../components/TaskCard.vue';
import { taskState, setTaskStatus, setTaskPriority } from '../store/tasks';
import '../css/task-components.css';

const selectedTaskTitle = ref('');

const totalTasks = computed(() => taskState.tasks.length);
const todoTasks = computed(() => taskState.tasks.filter((task) => task.status === 'todo').length); // Дод. завдання №2
const progressTasks = computed(() => taskState.tasks.filter((task) => task.status === 'progress').length);
const completedTasks = computed(() => taskState.tasks.filter((task) => task.status === 'done').length);

// Додаткове завдання №4: Відсоток виконаних завдань
const completionPercentage = computed(() => {
  if (totalTasks.value === 0) return 0;
  return Math.round((completedTasks.value / totalTasks.value) * 100);
});

const activeTasks = computed(() => {
  const order = { high: 0, medium: 1, low: 2 };
  return taskState.tasks
    .filter((task) => task.status !== 'done')
    .sort((a, b) => order[a.priority] - order[b.priority])
    .slice(0, 3);
});

function handleStatusChange(payload) { setTaskStatus(payload); }
function handlePriorityChange(payload) { setTaskPriority(payload); }

// Додаткове завдання №5: Обробник вибору картки
function handleTaskSelect(task) {
  selectedTaskTitle.value = task.title;
}
</script>

<template>
  <f7-page name="home" class="tf3-page">
    <f7-navbar title="TaskFlow">
      <f7-nav-right><f7-link href="/about/">Про застосунок</f7-link></f7-nav-right>
    </f7-navbar>
    <div class="tf3-container">
      <section class="tf3-hero">
        <div class="tf3-eyebrow">TASKFLOW / DASHBOARD</div>
        <h1>Панель керування</h1>
        <p>Контролюйте виконання завдань та їхні пріоритети.</p>
        
        <!-- Додаткове завдання №4: Індикатор прогресу -->
        <div class="tf3-progress-bar-container">
          <div class="tf3-progress-info">
            <span>Прогрес виконання проєкту:</span>
            <strong>{{ completionPercentage }}%</strong>
          </div>
          <div class="tf3-progress-track">
            <div class="tf3-progress-fill" :style="{ width: completionPercentage + '%' }"></div>
          </div>
        </div>
      </section>

      <!-- Додаткове завдання №2: 4 показники статистики -->
      <section class="tf3-stat-grid tf3-stat-grid--4">
        <div class="tf3-stat">
          <span class="tf3-stat-label">Усього завдань</span>
          <strong>{{ totalTasks }}</strong>
        </div>
        <div class="tf3-stat">
          <span class="tf3-stat-label">Заплановано</span>
          <strong>{{ todoTasks }}</strong>
        </div>
        <div class="tf3-stat">
          <span class="tf3-stat-label">У роботі</span>
          <strong>{{ progressTasks }}</strong>
        </div>
        <div class="tf3-stat">
          <span class="tf3-stat-label">Виконано</span>
          <strong>{{ completedTasks }}</strong>
        </div>
      </section>

      <div v-if="selectedTaskTitle" class="tf3-selected-banner">
        Обрано завдання: <strong>{{ selectedTaskTitle }}</strong>
      </div>

      <section class="tf3-section">
        <div class="tf3-section-heading">
          <div>
            <div class="tf3-eyebrow">PRIORITY TASKS</div>
            <h2>Актуальні завдання</h2>
          </div>
          <f7-button href="/tasks/" outline small>Переглянути всі</f7-button>
        </div>
        <div v-if="activeTasks.length" class="tf3-task-grid">
          <TaskCard
            v-for="task in activeTasks"
            :key="task.id"
            :task="task"
            @status-change="handleStatusChange"
            @priority-change="handlePriorityChange"
            @task-select="handleTaskSelect"
          />
        </div>
        <div v-else class="tf3-empty">Наразі всі завдання виконані.</div>
      </section>
    </div>
    <AppTabbar active="home" />
  </f7-page>
</template>