<script lang="ts" setup>
import { Page } from '@vben/common-ui';

import { useGamepad } from '@vueuse/core';

import Gamepad from './components/Gamepad.vue';

const { isSupported, gamepads } = useGamepad();
</script>

<template>
  <Page auto-content-height>
    <div
      v-if="!isSupported"
      class="flex flex-row items-center justify-center space-x-4"
    >
      <div class="flex flex-col">
        <span class="text-2xl">Gamepad is not supported on this device.</span>
        <span class="opacity-70">
          It seems your device does not support the Gamepad API. Check
          <a href="https://caniuse.com/gamepad">here</a> for a list of supported
          devices.
        </span>
      </div>
    </div>
    <div
      v-else-if="gamepads.length === 0"
      class="flex flex-row content-center items-center space-x-4"
    >
      <div class="flex flex-col">
        <span class="text-2xl">No Gamepad Detected</span>
        <span class="opacity-50">
          Ensure your gamepad is connected and press a button to wake it up.
        </span>
      </div>
    </div>
    <div v-else class="space-y-4">
      <Gamepad
        v-for="gamepad in gamepads"
        :key="gamepad.id"
        :gamepad="gamepad"
      />
    </div>
  </Page>
</template>
