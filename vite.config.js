import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ourchat/',
  server: { port: 5192 },
  plugins: [
    react(),
    UnoCSS(),
    AutoImport({
      imports: [
        'react',
        'react-router-dom',
        {
          classnames: [['default', 'cls']],
          'overlayscrollbars-react': [
            ['OverlayScrollbarsComponent', 'Scrollbar'],
          ],
          'react-toastify': ['toast'],
        },
      ],
      dts: './auto-imports.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
