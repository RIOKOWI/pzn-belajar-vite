import {defineConfig} from 'vite';

export default defineConfig ({
    build: {
        "outDir": "production", // saya mau direktori build nya di production buka di dist lag
    },
    server: {
        "port": 3000 // saya mau run di port 3000
    }
})