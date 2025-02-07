<script setup lang="ts">
import { computed } from 'vue';

import { Button } from 'ant-design-vue';

import Controller from './Controller.vue';
import Item from './Item.vue';

const props = defineProps<{ gamepad: Gamepad }>();
const supportsVibration = computed(
  // @ts-expect-error: hapticActuators is not in the Gamepad type
  () => props.gamepad?.hapticActuators?.length > 0,
);
function vibrate() {
  if (supportsVibration.value) {
    // @ts-expect-error: hapticActuators is not in the Gamepad type
    const actuator: any = props.gamepad.hapticActuators[0];
    actuator.playEffect('dual-rumble', {
      startDelay: 0,
      duration: 1000,
      weakMagnitude: 1,
      strongMagnitude: 1,
    });
  }
}
</script>

<template>
  <div
    class="bg-light-100 dark:bg-dark-500 mx-auto grid max-w-screen-lg grid-cols-[2fr,1fr] overflow-hidden rounded border shadow-md"
  >
    <div class="p-4">
      <div class="text-xl font-medium">
        {{ gamepad.id }}
      </div>

      <div class="mt-4 flex flex-wrap gap-x-4">
        <Item label="Index">
          {{ gamepad.index }}
        </Item>
        <Item label="Connected">
          {{ gamepad.connected }}
        </Item>
        <Item label="Mapping">
          {{ gamepad.mapping || 'N/A' }}
        </Item>
        <Item label="Timestamp">
          {{ gamepad.timestamp.toFixed(0) }}
        </Item>
      </div>

      <div class="mt-4 font-medium">Buttons</div>
      <div class="flex flex-wrap gap-x-4 gap-y-4 py-2">
        <Item
          v-for="(button, index) in gamepad.buttons"
          :key="index"
          class="bg-light-500 dark:bg-dark-700 rounded border px-2 py-1"
          :label="`B${index}`"
        >
          {{ button.value.toFixed(2) }}
        </Item>
      </div>

      <div class="mt-4 font-medium">Axes</div>
      <div class="flex flex-wrap gap-x-4 gap-y-4 py-2">
        <Item
          v-for="(axis, index) in gamepad.axes"
          :key="index"
          class="bg-light-500 dark:bg-dark-700 rounded border px-2 py-1"
          :label="`Axis ${index}`"
        >
          {{ axis.toFixed(2) }}
        </Item>
      </div>

      <Button type="primary" :disabled="!supportsVibration" @click="vibrate">
        Vibrate
      </Button>
    </div>
    <div
      class="bg-light-400 dark:bg-dark-900 flex flex-shrink-0 flex-row items-center justify-center p-8"
    >
      <template v-if="gamepad.mapping === 'standard'">
        <Controller
          :gamepad="gamepad"
          class="text-dark-100 dark:text-light-900 opacity-70 dark:opacity-70"
        />
      </template>
      <template v-else>
        <span
          class="text-dark-900 dark:text-light-900 font-medium dark:opacity-70"
        >
          Unknown Controller Type
        </span>
      </template>
    </div>
  </div>
</template>
