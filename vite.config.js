import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
plugins: [vue()],
build: {
  outDir: 'dist',
  lib: {
	entry: path.resolve(__dirname, 'resources/js/tool.js'),
	name: 'ColumnToggler',
	fileName: (format) => `js/tool.js`,
	formats: ['iife'],
  },
  rollupOptions: {
	external: ['vue', 'laravel-nova'],
	output: {
	  globals: {
		vue: 'Vue',
		'laravel-nova': 'LaravelNova',
	  },
	  assetFileNames: (assetInfo) => {
		if (assetInfo.name === 'style.css') return 'css/tool.css'
		return assetInfo.name
	  },
	},
  },
},
resolve: {
  alias: {
	'laravel-nova-ui': path.resolve(__dirname, '../../laravel/nova/resources/ui/components'),
  },
},
})
