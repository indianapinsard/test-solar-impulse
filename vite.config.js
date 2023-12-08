import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import loadVersion from 'vite-plugin-package-version'

export default defineConfig(({ mode }) => {
    return {
        server: {
            port: 3000,
        },
        preview: {
            port: 3000,
        },
        envPrefix: 'REACT_APP_',
        build: {
            outDir: 'build',
            sourcemap: mode === 'development',
        },
        plugins: [react(), tsconfigPaths(), loadVersion(), splitVendorChunkPlugin()],
    }
})
