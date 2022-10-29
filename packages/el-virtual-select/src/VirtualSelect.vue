<template>
  <el-select
    v-model="localValue"
    :multiple="multiple"
    :disabled="disabled"
    :size="size"
    :clearable="clearable"
    :collapseTags="collapseTags"
    :multipleLimit="multipleLimit"
    :placeholder="placeholder"
    :filterable="filterable"
    :allowCreate="allowCreate"
    :remote="remote"
    :remoteMethod="remoteMethod"
    :loading="loading"
    :loadingText="loadingText"
    :noMatchText="noMatchText"
    :noDataText="noDataText"
    :popperClass="popperClass"
    :reserveKeyword="reserveKeyword"
    :defaultFirstOption="defaultFirstOption"
    :popperAppendToBody="popperAppendToBody"
    :filter-method="handleFilter"
    @focus="handleSelectFocus"
    @change="handleSelectChange"
  >
    <DynamicScroller
      ref="recycleScrollerRef"
      class="scroller"
      :class="beautifyScrollerStyle ? 'beautify-scroller' : ''"
      :style="{ maxHeight: dropdownMaxHeight }"
      :items="localList"
      :min-item-size="minItemSize"
      :key-field="valueKey"
      :list-class="listClass"
      :item-class="itemClass"
      :list-tag="listTag"
      :item-tag="itemTag"
      @visible="handleScrollerVisible"
    >
      <template v-slot="{ item, index, active }">
        <DynamicScrollerItem :item="item" :active="active" :data-index="index">
          <el-option
            :key="item[valueKey]"
            :value="item[valueKey]"
            :label="item[labelKey]"
          >
            <slot name="label" :item="item">{{ item[labelKey] }}</slot>
          </el-option>
        </DynamicScrollerItem>
      </template>
      <template v-if="localList.length === 0" #after>
        <p class="empty-data">{{ noMatchText }}</p>
      </template>
    </DynamicScroller>
  </el-select>
</template>

<script>
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

export default {
  name: 'ElVirtualSelect',
  components: {
    DynamicScroller,
    DynamicScrollerItem
  },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: [String, Number, Array],
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    valueKey: {
      type: String,
      default: 'value'
    },
    labelKey: {
      type: String,
      default: 'label'
    },
    size: String,
    clearable: {
      type: Boolean,
      default: true
    },
    collapseTags: {
      type: Boolean,
      default: false
    },
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    filterable: {
      type: Boolean,
      default: true
    },
    allowCreate: Boolean,
    remote: Boolean,
    remoteMethod: Function,
    loading: Boolean,
    loadingText: String,
    noMatchText: {
      type: String,
      default: '暂无匹配数据'
    },
    noDataText: String,
    popperClass: String,
    reserveKeyword: Boolean,
    defaultFirstOption: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    // vue-virtual-scroller
    minItemSize: {
      type: Number,
      default: 34
    },
    listClass: String,
    itemClass: String,
    listTag: String,
    itemTag: String,
    beautifyScrollerStyle: {
      type: Boolean,
      default: false
    },
    dropdownMaxHeight: {
      type: Number,
      default: 200
    }
  },
  watch: {
    options: {
      handler: function (val) {
        this.localList = val
        this.rawList = val
      },
      deep: true,
      immediate: true
    }
  },
  data() {
    return {
      localValue: this.value,
      localList: [],
      rawList: []
    }
  },
  methods: {
    handleScrollerVisible() {
      const index =
        this.getIndex() -
        (Math.ceil(this.dropdownMaxHeight / this.minItemSize) - 1)
      index > 1 && this.$refs.recycleScrollerRef.scrollToItem(index)
    },
    getIndex() {
      return !this.multiple
        ? this.localList.findIndex(i => i[this.valueKey] === this.localValue)
        : this.localList.findIndex(
            i =>
              i[this.valueKey] === this.localValue[this.localValue.length - 1]
          )
    },
    handleFilter(query) {
      this.localList = this.rawList.filter(i =>
        String(i[this.labelKey]).includes(query)
      )
    },
    handleSelectFocus() {
      if (this.localList.length < this.rawList.length) {
        this.localList = this.rawList
      }
    },
    handleSelectChange(val) {
      this.localValue = val
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.beautify-scroller::-webkit-scrollbar {
  width: 8px;
}
.beautify-scroller::-webkit-scrollbar-track {
  border-radius: 4px;
  background-color: #f5f5f5;
}
.beautify-scroller::-webkit-scrollbar-thumb:vertical {
  border-radius: 4px;
  background-color: #a4a4a4;
}

.empty-data {
  padding: 10px 0;
  margin: 0;
  text-align: center;
  color: #999;
  font-size: 14px;
}
</style>
