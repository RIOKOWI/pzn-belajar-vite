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

contoh di file/folder : 
- [package.json](package.json)
- [node_modules](node_modules)

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
- [index.html](index.html)
- [tsconfig.json](tsconfig.json)
- [scripts/say-bye.ts](scripts/say-bye.ts)


# Build
## Build
- Ketika aplikasi kita sudah selesai, dan siap untuk di deploy ke production, maka kita bisa melakukan build menggunakan Vite
- Vite akan melakukan Dependency Pre-Bundling, dimana Vite akan menggabungkan banyak module yang kita gunakan menjadi satu, hal ini akan mempercepat performa load halaman web kita
- Selain itu, Vite bisa mendeteksi module-module yang kita gunakan, dan hanya melakukan build pada module-module yang kita gunakan saja, sehingga ukuran file build akan lebih optimal karena berisikan kode yang dibutuhkan saja

## Perintah Build
- Untuk melakukan build, kita bisa gunakan perintah :
```bash
npx vite build
```
- Untuk melihat opsi apa saja yang bisa kita ubah, kita bisa gunakan perintah :
```bash
npx vite build --help
```
- Secara default, hasil build akan disimpan di folder dist

contoh di folder :
- [dist](dist)

# Node Dependency
## Node Dependency
- Vite juga bisa secara otomatis melakukan build dari dependency yang kita install menggunakan NodeJS Packages
- Namun perlu diperhatikan, tidak semua NodeJS Package itu compatible dengan Web Browser, jadi kita harus memastikan NodeJS Package yang kita gunakan itu bisa dijalankan di Web Browser
- Contoh jika kita memasukkan dependency ExpressJS, ini mungkin tidak bisa berjalan di Web Browser, karena membutuhkan NodeJS HTTP Server, sedangkan di Web Browser, hal itu tidak ada

## Command : Menambah Dependency UUID
```bash
npm install uuid
```

contoh di folder :
- [index.html](index.html)
- [package.json](package.json)
- [package-lock.json](package-lock.json)


# CSS
## CSS
- Kode CSS yang terdapat di halaman HTML, secara otomatis juga akan di bundle oleh Vite, dengan begitu kode CSS nya akan menjadi lebih optimal
- Vite juga mendukung CSS @import


contoh di folder :
- [index.html](index.html)
- [assets/styles/style.css](assets/styles/style.css)