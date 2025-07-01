<template>
  <div id="contact" class="section contact-section">
    <div class="row justify-center">
      <div class="col-12">
        <a class="bigCONTACT">CONTACT US</a>
        <h4 class="titleText">{{ getTitleById('contact') }}</h4>
      </div>

      <div
        v-for="item in contactItem"
        :key="item.title"
        class="col-12 row justify-center contactInfo"
      >
        <a class="col-2 contactInfoTitle">{{ item.title }}:</a>
        <a class="col-5">{{ item.content }}</a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { contactItem } from '../config/contact';
import { getTitleById } from '../util/title';
</script>
