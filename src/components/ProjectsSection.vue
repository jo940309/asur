<template>
  <div id="projects" class="section projects-section">
    <div class="row justify-center">
      <div class="col-12">
        <a class="bigPROJECTS">PROJECTS</a>
        <h4 class="titleText">{{ getTitleById('projects') }}</h4>
      </div>
      <div class="col-12 flex justify-center">
        <q-carousel
          v-model="slide"
          arrows
          animated
          swipeable
          infinite
          autoplay
          :interval="2000"
          control-type="flat"
          class="projectsCarousel"
        >
          <q-carousel-slide
            v-for="(item, index) in projects"
            :key="index"
            :name="index"
            class="projectsCarouselSlide"
          >
            <img :src="item.img" alt="slide image" class="projectsImg" />
            <div class="projectsText">
              <div class="projectsTextTitle">{{ item.title }}</div>
              <div class="projectsTextDescription">{{ item.description }}</div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getTitleById } from '../util/title';
import { ref } from 'vue';
import { projects } from '../config/project';

const slide = ref(0);
</script>
