
import { Server } from 'http'
import { defineConfig } from 'vite'


export default defineConfig({


    // server

    server: {

        host: true, // Listen on all addresses
        open: true, // Auto-open browser
        cors: true,

    }


})