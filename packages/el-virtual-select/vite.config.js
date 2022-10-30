import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'

export default defineConfig({
  plugins: [
    vue(),
    getBabelOutputPlugin({
      allowAllFormats: true,
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              ie: '11'
            }
          }
        ]
      ]
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'elVirtualSelect',
      fileName: 'el-virtual-select'
    }
  }
})
