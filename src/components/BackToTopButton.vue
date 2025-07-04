<template>
  <div class="back-to-top" v-show="visible" @click="handleClick">
    <div class="back-to-top-button">
      <div class="back-to-top-icon">&#9650;</div>
      <div class="back-to-top-text">TOP</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const emit = defineEmits<{
  (e: 'back-to-top'): void;
}>();

const visible = ref(false);

function handleClick() {
  // scrollToTop();
  emit('back-to-top');
}

// function scrollToTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// }

function handleScroll() {
  visible.value = window.scrollY > 300;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  cursor: pointer;
}

.back-to-top-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f5efe7c5;
  color: #3e5879;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  font-size: 13px;
}

.back-to-top-icon {
  font-size: 16px;
  line-height: 1;
}

.back-to-top-text {
  font-size: 12px;
  line-height: 1;
  margin-top: 2px;
}
</style>
