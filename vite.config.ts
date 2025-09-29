import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'; 

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets'),
      '@components': resolve(__dirname, './src/components'),
      // УДАЛИТЕ этот алиас - он вызывает проблему
      // '@mui/styled-engine': '@mui/styled-engine-sc'
    },
  },
  optimizeDeps: {
    include: [
      '@emotion/react', 
      '@emotion/styled',
      '@mui/material'
    ]
  }
});