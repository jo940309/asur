<template>
  <div id="projects" class="section projects-section">
    <a class="bigPROJECTS">PROJECTS</a>
    <h4 class="titleText">{{ getTitleById('projects') }}</h4>
  </div>
</template>
<script setup lang="ts">
import { getTitleById } from '../util/title';
</script>
