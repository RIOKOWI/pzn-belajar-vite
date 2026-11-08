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

contoh di file :
- [index.html](index.html)
- [package.json](package.json)
- [package-lock.json](package-lock.json)


# CSS
## CSS
- Kode CSS yang terdapat di halaman HTML, secara otomatis juga akan di bundle oleh Vite, dengan begitu kode CSS nya akan menjadi lebih optimal
- Vite juga mendukung CSS @import


contoh di file :
- [index.html](index.html)
- [assets/styles/style.css](assets/styles/style.css)


# CSS Pre-processors
## CSS Pre-processors
- Saat ini, banyak sekali CSS Pre-processor framework yang digunakan untuk mempermudah pembuatan kode CSS
- Contohnya SASS, LESS, dan STYLUS
- Vite juga mendukung CSS Pre-processors, sehingga kita tidak perlu melakukan kompilasi secara manual agar menjadi kode CSS yang dimengerti oleh Web Browser

## Command : Menginstall Sass
```bash
npm install --save-dev sass
```

contoh di file :
- [index.html](index.html)
- [assets/styles/sample.sass](assets/styles/sample.sass)
- [package.json](package.json)
- [package-lock.json](package-lock.json)

# JSON
## JSON
- Vite juga mendukung bundle file JSON, sehingga kita bisa dengan mudah menyimpan data dalam bentuk JSON, dan mengambil datanya dari JavaScript dengan cara menggunakan JavaScript Module

contoh di file :
- [index.html](index.html)
- [assets/person.json](assets/person.json)


# Static Assets
## Static Assets
- Selain file JavaScript, TypeScript, CSS, JSON, kadang kita juga menggunakan Static Assets ketika membuat Web, seperti Image, Video, File Text, dan lain-lain
- Vite juga secara otomatis akan melakukan bundle ketika di Web kita menggunakan file Static Assets
- Selain itu, kita juga bisa melakukan import untuk Static Assets di JavaScript sebagai Text, pada kasus berupa Text File

## Public Directory
- Kadang, kita juga butuh Static Assets yang ditampilkan secara dinamis, sehingga kemungkinan lokasinya tidak terdapat di halaman Web HTML
- Atau Static Assets yang nama file nya tidak boleh berubah, misal favicon.ico atau robbot.txt, dan lain-lain
- Vite mendukung public directory, dimana kita bisa menyimpan semua Static Assets yang tidak akan di optimize pada folder tersebut


contoh di file :
- [index.html](index.html)
- [assets/img/nasi-goreng.jpg](assets/img/nasi goreng.jpg)
- [assets/ola.txt](assets/ola.txt)
- [public](public)

# Preview
## Preview
- Setelah kita melakukan build menggunakan Vite, semua file distribution terdapat di folder dist
- Kadang kita ingin melihat hasilnya terlebih dahulu, sebelum melakukan deployment ke server production
- Kita bisa menggunakan perintah :
```bash
# jangan di lakuin di server production
npx vite preview
```
- Ingat ini hanya untuk preview di proses development, jangan lakukan hal ini di server production

# Configuration
## Configuration
- Secara default, Vite sudah memiliki default configuration, sehingga kita tidak perlu melakukan pengaturan apapun
- Namun, jika kita ingin melakukan pengaturan, Vite juga mendukungnya dengan membuat file vite.config.js
- Semua konfigurasi yang bisa kita lakukan di Vite, bisa kita baca disini
- `https://vitejs.dev/config/`

contoh di file :
- [vite.config.js](vite.config.js)
- [production](production)