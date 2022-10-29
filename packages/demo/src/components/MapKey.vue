<template>
  <div>
    <elVirtualSelect
      v-model="value"
      :options="list"
      valueKey="code"
      label-key="name"
    ></elVirtualSelect>
    <p>选中的值：{{ value }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import elVirtualSelect from 'el-virtual-select'
import 'el-virtual-select/dist/style.css'

const list = Array.from({ length: 1000 }).map((i, index) => ({
  name: 'name' + index,
  code: 'code' + index
}))
const value = ref('')
</script>

<style lang="scss" scoped>
</style>