<template>
  <div id="brands" class="section brands-section">
    <div class="row justify-center">
      <div class="col-12">
        <a class="bigBRANDS">BRANDS</a>
        <h4 class="titleText">{{ getTitleById('brands') }}</h4>
      </div>
      <div class="col-12 row">
        <div
          v-for="brand in brands"
          :key="brand.name"
          class="brand-item col-lg-2 col-md-3 col-sm-4 col-xs-6"
        >
          <a :href="brand.link" target="_blank" rel="noopener noreferrer" class="brand-link">
            <q-card class="brand-card column">
              <img :src="brand.img" :alt="brand.name" class="brand-image" />
              <div class="brand-name">{{ brand.name }}</div>
            </q-card>
          </a>
        </div>
        <!-- <BrandCard v-for="(brand, i) in brands" :key="i" :brand="brand" /> -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getTitleById } from '../util/title';
import { brands } from '../config/brands';

// import BrandCard from './BrandCard.vue';
</script>
