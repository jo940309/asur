<template>
  <div>
    <div id="company" class="section">公司簡介內容</div>
    <div id="services" class="section">服務項目內容</div>
    <div id="brands" class="section">經銷品牌內容</div>
    <div id="projects" class="section">工程案例內容</div>
    <div id="contact" class="section">聯絡我們內容</div>

    <div class="side-nav">
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="'#' + item.id"
        :class="[
          'nav-button',
          { active: activeSection === item.id, large: item.id === activeSection },
        ]"
      >
        {{ item.label }}
      </a>
    </div>

    <BackToTopButton />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BackToTopButton from 'components/BackToTopButton.vue';

const navItems = [
  { id: 'company', label: '公司簡介' },
  { id: 'services', label: '服務項目' },
  { id: 'brands', label: '經銷品牌' },
  { id: 'projects', label: '工程案例' },
  { id: 'contact', label: '聯絡我們' },
];

const activeSection = ref('company');

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.6 },
  );

  navItems.forEach((item) => {
    const el = document.getElementById(item.id);
    if (el) observer.observe(el);
  });
});
</script>
