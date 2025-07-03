<template>
  <a
    :href="props.brand.link"
    target="_blank"
    rel="noopener noreferrer"
    class="brand-link"
    ref="cardEl"
  >
    <q-card class="brand-card column card-fade-in" :class="{ visible: isVisible }">
      <img :src="props.brand.img" :alt="props.brand.name" class="brand-image" />
      <div class="brand-name">{{ props.brand.name }}</div>
    </q-card>
  </a>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps({
  brand: {
    type: Object,
    required: true,
  },
});

const cardEl = ref(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.unobserve(entry.target); // 只觸發一次
        }
      });
    },
    { threshold: 0.1 },
  );

  if (cardEl.value) {
    observer.observe(cardEl.value);
  }
});
</script>

<style scoped>
.brand-link {
  text-decoration: none;
  color: inherit;
  display: inline-block;
}

.brand-card {
  margin: 20px;
  padding: 10px;
  height: 250px;
  align-items: center;
  background-color: transparent;
  box-shadow: none;
  border: none;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.brand-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.card-fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.card-fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.brand-image {
  max-height: 100px;
  object-fit: contain;
  margin-bottom: 10px;
}

.brand-name {
  font-size: 1.1rem;
  text-align: center;
}
</style>
