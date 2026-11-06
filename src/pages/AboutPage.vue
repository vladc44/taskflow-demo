<template>
  <f7-page>
    <f7-navbar title="Про застосунок" sliding />

    <div class="page-content-wrapper">
      <div class="about-card">
        <h2>TaskFlow PWA</h2>
        <p class="version">Версія 1.2.0 (КП 2/4)</p>
        <p class="description">
          Навчальний мобільний PWA-додаток, розроблений у межах дисципліни «Крос-платформне програмування» курсантом групи С-44 Новацьким В.О.
        </p>

        <div class="tech-stack">
          <h3>Використані технології:</h3>
          <ul>
            <li><strong>Vue 3</strong> (Composition API)</li>
            <li><strong>Framework7</strong> & Framework7-Vue</li>
            <li><strong>Vite</strong> (Fast Build & HMR)</li>
            <li><strong>PWA</strong> (Service Worker & Manifest)</li>
          </ul>
        </div>
      </div>
    </div>

    <AppTabbar />
  </f7-page>
</template>

<script>
import AppTabbar from '../components/AppTabbar.vue';

export default {
  name: 'AboutPage',
  components: { AppTabbar },
};
</script>

<style scoped>
.page-content-wrapper {
  padding: 16px;
  padding-bottom: 80px;
}
.about-card {
  background: #fff;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  text-align: center;
}
.about-card h2 {
  color: #1c1c1e;
  margin-bottom: 4px;
}
.version {
  color: #8e8e93;
  font-size: 13px;
  margin-bottom: 16px;
}
.description {
  font-size: 14px;
  color: #3a3a3c;
  line-height: 1.5;
  margin-bottom: 24px;
}
.tech-stack {
  text-align: left;
  border-top: 1px solid #e5e5ea;
  padding-top: 16px;
}
.tech-stack h3 {
  font-size: 15px;
  margin-bottom: 8px;
  color: #1c1c1e;
}
.tech-stack ul {
  padding-left: 20px;
  color: #3a3a3c;
  font-size: 14px;
}
.tech-stack li {
  margin-bottom: 4px;
}
</style>