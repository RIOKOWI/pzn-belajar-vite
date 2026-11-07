# Vite
- `https://docs.google.com/presentation/d/1mmV1JIoh3FALwFiVXN1ORBp4nnkp28cw5pf_Z3SALSU/edit?slide=id.p#slide=id.p`

# Pengenalan Vite
## Development Tool
- Saat kita membuat aplikasi menggunakan NodeJS, baik itu menggunakan JavaScript atau TypeScript
- Maka biasanya banyak hal-hal yang sering kita lakukan secara manual, misal menjalankan aplikasinya, lalu melakukan restart aplikasi ketika sudah melakukan perubahan
- Atau jika menggunakan TypeScript, kita harus melakukan compile terlebih dahulu, lalu menjalankan ulang aplikasinya

## Pengenalan Vite
- Vite (dibaca vit) adalah tool untuk mempercepat proses development aplikasi yang kita buat menggunakan NodeJS
- Vite memiliki fitur HMR (Hot Module Replacement), dimana bisa melakukan perubahan module secara cepat, tanpa kita harus melakukan reload / restart aplikasi yang sedang kita jalankan
- Vite juga memiliki fitur untuk melakukan bundling (membungkus) kode-kode yang kita buat menjadi sebuah kode yang dioptimasi dengan baik sebagai kode yang baik untuk mode production, menggunakan bantuan library Rollup : `https://rollupjs.org/`
- Website resmi Vite bisa kita buka di : `https://vitejs.dev/` 
- Vite saat ini menjadi rekomendasi sebagai Development Tool untuk membuat aplikasi VueJS


# Membuat Project
## Membuat Project
- Buat folder belajar-vite
- npm init
- Ubah type di package.json menjadi module

## Menginstall Vite Dependency
```bash
npm install --save-dev vite
```


# Menjalankan Aplikasi
## Menjalankan Aplikasi
- Vite bisa kita gunakan menjalankan aplikasi Web
- Vite menggunakan file index.html sebagai entry point dari aplikasi web yang kita buat
- Untuk menjalankan vite, kita bisa gunakan perintah :
```bash
npx vite
```
- Terdapat banyak opsi yang bisa kita lihat ketika menjalankan Vite, kita bisa gunakan perintah :
```bash
npx vite --help
```

contoh di file :
- [index.html](index.html)

# JavaScript
## JavaScript
- Secara default, Vite mendukung JavaScript Module, sehingga kita bisa membuat kode JavaScript dengan menggunakan JavaScript Module


contoh di file :
- [scripts/say-hello.mjs](scripts/say-hello.mjs)
- [index.html](index.html)

# TypeScript
## TypeScript
- Vite juga mendukung kompilasi kode TypeScript secara realtime, sehingga kita bisa membuat menggunakan kode TypeScript, dan tidak perlu khawatir dengan Web Browser
- Karena Vite akan melakukan proses kompilasi kode TypeScript secara otomatis

## Command : Menambah TypeScript
```bash
npm install --save-dev typescript
```

## Command : Setup TypeScript
```bash
npx tsc --init
```


contoh di file :
- [scripts/say-hello.mjs](scripts/say-hello.mjs)