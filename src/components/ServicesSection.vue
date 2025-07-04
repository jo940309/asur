<template>
  <div id="services" class="section services-section">
    <div class="row justify-center services-width">
      <div class="col-12">
        <a class="bigSERVICES">SERVICES</a>
        <h4 class="titleText">{{ getTitleById('services') }}</h4>
      </div>
      <div class="col-10">
        <div v-for="(group, groupIndex) in serviceGroups" :key="groupIndex">
          <q-card flat class="serviceCard">
            <div class="row items-center justify-center">
              <div class="text-h6 col-12 serviceCategory">{{ group.category }}</div>
            </div>

            <div class="row flex items-center justify-center">
              <div class="col-1">
                <q-btn
                  v-show="group.offset > 0"
                  flat
                  round
                  size="25px"
                  icon="chevron_left"
                  @click="handlePrev(groupIndex)"
                />
              </div>

              <transition-group :name="direction" tag="div" class="row col-10 justify-center">
                <div
                  v-for="item in visibleItems(group)"
                  :key="group.category + '-' + item.name"
                  class="col-3"
                >
                  <q-card class="serviceItem">
                    <q-icon :name="item.icon" size="32px" class="q-mb-sm" />
                    <div>{{ item.name }}</div>
                  </q-card>
                </div>
              </transition-group>

              <div class="col-1">
                <q-btn
                  v-show="group.offset + 3 < group.items.length"
                  flat
                  round
                  size="25px"
                  icon="chevron_right"
                  @click="handleNext(groupIndex)"
                  class="col-1"
                />
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getTitleById } from '../util/title';
// import { serviceGroups } from '../config/services';

import { useService } from '../composables/useService';

const { serviceGroups, direction, handleNext, handlePrev, visibleItems } = useService();
</script>
