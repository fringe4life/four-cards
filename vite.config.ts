import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 

const ReactCompilerConfig = {target: "19"} as const;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
    },
  }), tailwindcss()],
  build: {
    minify: true,
    outDir: 'dist',
    rollupOptions: {
      input: ['index.html'],
    }
  }
})