<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="text-white header" bordered position="fixed">
      <q-toolbar class="asurHeader">
        <q-btn v-if="isMobile" dense flat round icon="menu" @click="toggleLeftDrawer" />
        <div class="headerLeft" @click="GoToHome">
          <img v-if="!isMobile" alt="asurIcon" src="asur/asurTitle.jpg" />
          <img v-else alt="asurIcon2" src="asur/asurTitle.jpg" />
</div>
        <div class="headerRight">
          <router-link to="/" class="changPage"> 服務團隊 </router-link>
          <q-btn title="切換語言" aria-label="切換語言" label="切換語言"> </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

  <BackToTopButton />
</template>

<script setup lang="ts">
import BackToTopButton from 'components/BackToTopButton.vue';
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
// import { drawerMenu } from 'src/config/LayOutDrawerMenu'

const router = useRouter();
// const route = useRoute()
const $q = useQuasar();
const isMobile = computed(() => $q.screen.lt.sm);

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const GoToHome = async () => {
  await router.push('/');
};
</script>
