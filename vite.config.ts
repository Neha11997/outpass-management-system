import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/app/components/"),
      "@containers": path.resolve(__dirname, "./src/app/containers/"),
      "@styles": path.resolve(__dirname, "./src/styles/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@helpers": path.resolve(__dirname, "./src/app/helpers/"),
      "@scenes": path.resolve(__dirname, "./src/app/scenes/"),
      "@utils": path.resolve(__dirname, "./src/app/utils/"),
    }
  }
})
