import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import React from 'react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/React-Portfolio",
  plugins: [react()],
})
