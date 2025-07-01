<template>
  <div id="brands" class="section brands-section">
    <a class="bigBRANDS">BRANDS</a>
    <h4 class="titleText">{{ getTitleById('brands') }}</h4>
  </div>
</template>
<script setup lang="ts">
import { getTitleById } from '../util/title';
</script>
