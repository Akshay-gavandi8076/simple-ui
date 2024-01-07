import { defineConfig } from 'vite'
import path from 'path'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.tsx'),
      name: 'SimpleUI',
      fileName: 'simple-ui',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'reactDom',
        },
      },
    },
  },
  plugins: [react(), dts({ rollupTypes: true })],
})
