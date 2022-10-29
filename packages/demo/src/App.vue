<template>
  <div class="wrapper">
    <el-tabs v-model="activeName">
      <el-tab-pane label="基础用法" name="tab1">
        <Basic />
      </el-tab-pane>
      <el-tab-pane label="映射value, label的key" name="tab2">
        <MapKey />
      </el-tab-pane>
      <el-tab-pane label="自定义option label 插槽" name="third">
        <OptionSlot />
      </el-tab-pane>
      <el-tab-pane label="美化滚动条" name="fourth">
        <BeautifyScrollerbar />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Basic from './components/Basic.vue'
import MapKey from './components/MapKey.vue'
import OptionSlot from './components/OptionSlot.vue'
import BeautifyScrollerbar from './components/BeautifyScrollerbar.vue'

const activeName = 'tab1'
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 30px 50px;
}
</style>