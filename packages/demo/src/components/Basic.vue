<template>
  <div>
    <ElCard title="单个值">
      <ElVirtualSelect
        v-model="value"
        :options="list"
        @change="handleChange"
      ></ElVirtualSelect>
      <p>选中的值：{{ value }}</p>
      <el-button @click="reset">重置</el-button>
    </ElCard>
    <br />
    <ElCard title="多个值">
      <ElVirtualSelect
        v-model="value2"
        :options="list2"
        multiple
        @change="handleChange2"
      ></ElVirtualSelect>
      <p>选中的值：{{ value2 }}</p>
      <el-button @click="reset2">重置</el-button>
    </ElCard>
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
const value = ref('value500')
const handleChange = val => {
  console.log('change:', val)
}
const reset = () => {
  value.value = ''
}

const list2 = Array.from({ length: 1000 }).map((i, index) => ({
  label: 'label' + index,
  value: 'value' + index
}))
const value2 = ref(['value0', 'value400'])
const handleChange2 = val => {
  console.log('change:', val)
}
const reset2 = () => {
  value2.value = []
}
</script>

<style lang="scss" scoped></style>
