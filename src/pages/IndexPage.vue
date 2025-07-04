<template>
  <div class="top-logo justify-center">
    <img src="../assets/asur/asurTitle.jpg" alt="ASUR" class="logo" />
  </div>

  <div>
    <q-page-container>
      <CompanySection />
      <ServicesSection />
      <BrandsSection />
      <ProjectsSection />
      <ContactSection />
    </q-page-container>

    <div class="side-nav">
      <a
        v-for="item in navItems"
        :key="item.id"
        href="#"
        @click.prevent="scrollTo(item.id)"
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
import { navItems } from '../config/nav';

import CompanySection from 'components/CompanySection.vue';
import ServicesSection from 'components/ServicesSection.vue';
import BrandsSection from 'components/BrandsSection.vue';
import ProjectsSection from 'components/ProjectsSection.vue';
import ContactSection from 'components/ContactSection.vue';
import BackToTopButton from 'components/BackToTopButton.vue';

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

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  activeSection.value = id;
  if (el) {
    // 僅在未完全進入視口時才滾動
    const rect = el.getBoundingClientRect();
    const isFullyVisible =
      rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);

    if (!isFullyVisible) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>
