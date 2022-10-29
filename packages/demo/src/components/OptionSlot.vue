<template>
  <div>
    <elVirtualSelect v-model="value" :options="list">
      <template #label="{ item }">
        <span>{{ item.value }} &nbsp;&nbsp; {{ item.label }}</span>
      </template>
    </elVirtualSelect>
    <p>选中的值：{{ value }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import elVirtualSelect from 'el-virtual-select'
import 'el-virtual-select/dist/style.css'

const list = Array.from({ length: 1000 }).map((i, index) => ({
  label: 'label' + index,
  value: 'value' + index
}))
const value = ref('')
</script>

<style lang="scss" scoped>
</style>