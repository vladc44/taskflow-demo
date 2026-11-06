<script setup>
defineProps({
  count: { type: Number, required: true },
  label: { type: String, default: 'Знайдено завдань' },
});
</script>

<template>
  <div class="tf3-counter">
    {{ label }}: <strong>{{ count }}</strong>
  </div>
</template>