<template>
  <div class="toolbar tabbar toolbar-bottom app-tabbar">
    <div class="toolbar-inner">
      <a href="/" class="link tab-link" :class="{ active: currentRoute === '/' }" aria-label="Головна сторінка">
        <i class="icon f7-icons if-not-ios">house_fill</i>
        <i class="icon f7-icons if-ios">house_fill</i>
        <span class="tabbar-label">Головна</span>
      </a>
      <a href="/tasks/" class="link tab-link" :class="{ active: currentRoute === '/tasks/' }" aria-label="Сторінка завдань">
        <i class="icon f7-icons if-not-ios">rectangle_stack_fill</i>
        <i class="icon f7-icons if-ios">rectangle_stack_fill</i>
        <span class="tabbar-label">Завдання</span>
      </a>
      <a href="/about/" class="link tab-link" :class="{ active: currentRoute === '/about/' }" aria-label="Про застосунок">
        <i class="icon f7-icons if-not-ios">info_circle_fill</i>
        <i class="icon f7-icons if-ios">info_circle_fill</i>
        <span class="tabbar-label">Про нас</span>
      </a>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { f7 } from 'framework7-vue';

export default {
  name: 'AppTabbar',
  setup() {
    const currentRoute = computed(() => {
      try {
        return f7.view.main.router.currentRoute.path;
      } catch (e) {
        return '/';
      }
    });
    return { currentRoute };
  },
};
</script>

<style scoped>
.app-tabbar {
  background: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.tab-link.active {
  color: #007aff !important;
  font-weight: 600;
}
</style>