// src/composables/useService.js
import { reactive, ref } from 'vue';
import type { ServiceGroup } from '../types/serviceType.js';

export function useService() {
  const serviceGroups = reactive([
    {
      category: '採購與系統整合',
      offset: 0,
      items: [
        { name: '台銀採購', icon: 'shopping_cart' },
        { name: '弱電系統整合規劃', icon: 'settings_input_component' },
        { name: '智慧建築系統整合規劃', icon: 'home' },
      ],
    },
    {
      category: '多媒體與展場規劃',
      offset: 0,
      items: [
        { name: '多媒體展場規劃設計', icon: 'event' },
        { name: '多媒體群控系統', icon: 'hub' },
        { name: '多媒體視訊教學系統', icon: 'cast_for_education' },
        { name: '弧形曲面投影設備系統', icon: '360' },
        { name: '觸控螢幕 數位看板 電視牆', icon: 'touch_app' },
      ],
    },
    {
      category: '音訊與會議系統',
      offset: 0,
      items: [
        { name: '會議系統 同步翻譯功能', icon: 'g_translate' },
        { name: '禮堂 視聽 音響系統設計/施工', icon: 'campaign' },
        { name: '舞台燈光布幕控制系統', icon: 'highlight' },
      ],
    },
    {
      category: '互動與虛擬實境',
      offset: 0,
      items: [{ name: '3D 虛擬實境設備', icon: '3d_rotation' }],
    },
    {
      category: '安全與控管系統',
      offset: 0,
      items: [{ name: '門禁監視防盜系統', icon: 'security' }],
    },
    {
      category: '教育與圖書資源',
      offset: 0,
      items: [{ name: '圖書館視聽設計規劃', icon: 'local_library' }],
    },
  ]);

  const direction = ref('slide-left');

  // 方法
  function next(groupIndex: number) {
    const group = serviceGroups[groupIndex];
    if (group && group.offset + 3 < group.items.length) group.offset++;
  }

  function prev(groupIndex: number) {
    const group = serviceGroups[groupIndex];
    if (group && group.offset > 0) group.offset--;
  }

  function visibleItems(group: ServiceGroup) {
    return group.items.slice(group.offset, group.offset + 3);
  }

  function handleNext(index: number) {
    direction.value = 'slide-left';
    next(index);
  }

  function handlePrev(index: number) {
    direction.value = 'slide-right';
    prev(index);
  }

  return {
    serviceGroups,
    direction,
    // next,
    // prev,
    visibleItems,
    handleNext,
    handlePrev,
  };
}
