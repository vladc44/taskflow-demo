export const tasks = [
  // Базові завдання з інструкції
  { id: 1, title: 'Створити макет картки завдання', description: 'Розробити компонент TaskCard для TaskFlow.', status: 'todo', priority: 'high', dueDate: '2026-10-23' },
  { id: 2, title: 'Налаштувати навігацію', description: 'Реалізувати Navbar, Toolbar та переходи.', status: 'done', priority: 'medium', dueDate: '2026-10-24' },
  { id: 3, title: 'Створити індикатор статусу', description: 'Розробити компонент StatusBadge.', status: 'progress', priority: 'high', dueDate: '2026-10-25' },
  { id: 4, title: 'Реалізувати фільтрацію завдань', description: 'Додати фільтри за статусом і пріоритетом.', status: 'todo', priority: 'medium', dueDate: '2026-10-27' },
  { id: 5, title: 'Створити адаптивний інтерфейс', description: 'Налаштувати вигляд на різних екранах.', status: 'progress', priority: 'low', dueDate: '2026-10-29' },
  { id: 6, title: 'Підготувати структуру PWA', description: 'Налаштувати початковий проєкт.', status: 'done', priority: 'low', dueDate: '2026-10-30' },
  
  // Додаткове завдання №1: 4 власні завдання
  { id: 7, title: 'Оптимізувати збірку Vite', description: 'Налаштувати розділення чанків та мініфікацію assets.', status: 'todo', priority: 'high', dueDate: '2026-11-01' },
  { id: 8, title: 'Інтегрувати Service Worker', description: 'Перевірити офлайн-режим роботи застосунку.', status: 'progress', priority: 'medium', dueDate: '2026-11-03' },
  { id: 9, title: 'Налаштувати CI/CD деплой', description: 'Автоматизувати публікацію на Cloudflare Workers.', status: 'done', priority: 'high', dueDate: '2026-11-05' },
  { id: 10, title: 'Провести тестування доступності', description: 'Додати атрибути ARIA та перевірити контрастність.', status: 'todo', priority: 'low', dueDate: '2026-11-10' },
];

export default tasks;