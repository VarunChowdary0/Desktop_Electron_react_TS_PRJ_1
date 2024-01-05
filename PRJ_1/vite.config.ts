import { defineConfig } from 'vite';
import path from 'node:path';
import electron from 'vite-plugin-electron/simple';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
// import ViteVue2 from 'vite-plugin-vue2';
// import visualizer from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    electron({
      main: {
        entry: 'electron/main.ts',
      },
      preload: {
        input: path.join(__dirname, 'electron/preload.ts'),
      },
      renderer: {},
    }),
    // ViteVue2(),
    // visualizer({ // Add the visualizer plugin
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true,
    // }),
  ],
});
