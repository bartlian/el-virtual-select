<template>
  <div>
    <ElVirtualSelect
      v-model="value"
      :options="list"
      @change="handleChange"
    ></ElVirtualSelect>
    <p>选中的值：{{ value }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ElVirtualSelect from 'el-virtual-select'
import 'el-virtual-select/dist/style.css'

const list = Array.from({ length: 1000 }).map((i, index) => ({
  label: 'label' + index,
  value: 'value' + index
}))
const value = ref('')
const handleChange = val => {
  console.log('change:', val)
}
</script>

<style lang="scss" scoped>
</style>