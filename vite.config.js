import {defineConfig} from 'vite';

export default defineConfig ({
    build: {
        outDir: "production", // saya mau direktori build nya di production buka di dist lag
        rollupOptions: {
            input: {
                // gw mau semua file dan folder di bawah bisa di build
                index: "index.html",
                blog: "blog.html",
                blade: "blade/contact.html",
            }
        }
    },
    server: {
        port: 3000 // saya mau run di port 3000
    }
})