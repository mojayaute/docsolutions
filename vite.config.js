import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";
import manifestForPlugIn from './manifest.js'

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
})
