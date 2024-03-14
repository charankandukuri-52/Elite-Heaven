import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dotenv from "dotenv"

export default defineConfig({
  plugins: [react()],
  define:{
   'process.env.VITE_apiKey' : JSON.stringify(process.env.VITE_apiKey),
   'process.env.VITE_authDomain': JSON.stringify(process.env.VITE_apiKey),
   'process.env.VITE_projectId': JSON.stringify(process.env.VITE_apiKey),
   'process.env.VITE_storageBucket':JSON.stringify(process.env.VITE_apiKey),
   'process.env.VITE_messagingSenderId': JSON.stringify(process.env.VITE_apiKey),
   'process.env.VITE_appId': JSON.stringify(process.env.VITE_apiKey),
   'process.env.VITE_measurementId': JSON.stringify(process.env.VITE_apiKey),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
