import { defineConfig } from 'vite';

export default defineConfig({
    base: process.env.GITHUB_PAGES ? '/islandsim/' : '/',
    server: {
        port: 5173,
        open: true,
        watch: {
            // Prevent unnecessary reloads - only watch source files
            ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**']
        }
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
        // Prevent build loops
        watch: null
    }
});

