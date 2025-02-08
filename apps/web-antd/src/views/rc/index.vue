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
        <span class="text-2xl">该设备不支持游戏手柄。</span>
        <span class="opacity-70">
          看起来您的设备不支持游戏手柄API。请
          <a href="https://caniuse.com/gamepad">在此</a>
          查看支持的设备列表。
        </span>
      </div>
    </div>
    <div
      v-else-if="gamepads.length === 0"
      class="flex flex-row content-center items-center space-x-4"
    >
      <div class="flex flex-col">
        <span class="text-2xl">未检测到游戏手柄</span>
        <span class="opacity-50">
          请确保您的游戏手柄已连接，并按下任意按钮以唤醒它。
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
