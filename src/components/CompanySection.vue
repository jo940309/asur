<template>
  <div id="company" class="section company-section">
    <div class="row justify-center">
      <div class="col-12">
        <div class="wave-image">
          <svg viewBox="0 0 1 1" preserveAspectRatio="none">
            <defs>
              <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
                <path
                  d="
                    M0,0
                    H1
                    V0.87
                    C0.8,1.1 0.66,0.75 0.5,0.9
                    C0.33,1 0.16,0.75 0,0.85
                    Z
                  "
                />
              </clipPath>
            </defs>
            <image
              x="0"
              y="0"
              width="1"
              height="1"
              preserveAspectRatio="xMidYMid slice"
              xlink:href="../assets/testImg/img1.jpg"
              clip-path="url(#waveClip)"
            />
          </svg>
        </div>
      </div>

      <div class="col-12 position-relative">
        <a class="bigASUR">ASUR</a>
        <h4 class="titleText">{{ getTitleById('company') }}</h4>
      </div>

      <div class="col-6 text-left">
        <p>
          &emsp;&emsp;亞碩創立於 1998 年，專注於多媒體視聽系統的整合與應用。
          自成立以來，我們團隊致力於開發多元系統，涵蓋多媒體簡報系統、同步口譯國際會議系統、圖書館多媒體應用、校園安全防護系統等，皆為亞碩自主研發的成果。<br />
          &emsp;&emsp;隨著科技不斷進步，亞碩持續擴展技術視野並投入創新研發。 於 2001
          年推出具突破性的環控系統，可廣泛應用於各式設備整合，有效簡化操作流程，提升系統效率與使用者體驗。<br />
          &emsp;&emsp;我們始終以「客戶需求為核心」作為經營理念，珍視每一位客戶的期望與信任。亞碩團隊期盼有機會傾聽您的需求，為您打造最合適的整合方案，並提供最專業的服務。
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getTitleById } from '../util/title';
</script>
