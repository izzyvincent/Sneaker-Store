import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// used OpenAI here as well as I forgot to do npx tailwindcss init and found issues in doing so after already finished most of the project.
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
