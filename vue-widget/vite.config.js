import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('vue-widget'),
        },
      },
    }),
  ],
  build: {
    outDir: '../src/assets/vue',
    lib: {
      entry: 'src/main.ts',
      name: 'VueMeasuresTable',
      fileName: 'vue-measures-table',
      formats: ['es'],
    },
  },
});
