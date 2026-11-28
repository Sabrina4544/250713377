# Sweet Crumbs Bakery — Project Tugas Besar PWD

Folder ini berisi file frontend XHTML, CSS, JavaScript, backend PHP murni, dan file database untuk project bertema bakery.

## Struktur folder

```text
TubesPWD_Kelas_Kelompok/
├── index.xhtml
├── login.xhtml
├── pendaftaran.xhtml
├── index.php
├── login.php
├── pendaftaran.php
├── database.php
├── bakery_db.sql
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
```

> Sebelum dikumpulkan, ganti nama folder `TubesPWD_Kelas_Kelompok` sesuai kelas dan nomor kelompok, misalnya `TubesPWD_A_1`.

## Cara menjalankan dengan XAMPP

1. Salin folder project ke dalam folder `htdocs`.
2. Jalankan Apache dan MySQL melalui XAMPP Control Panel.
3. Buka `http://localhost/phpmyadmin`.
4. Import file `bakery_db.sql`.
5. Buka `http://localhost/TubesPWD_Kelas_Kelompok/` (sesuaikan alamat jika nama folder diganti).
6. Pilih **Daftar** untuk mencoba registrasi pengguna.

## Cakupan project saat ini

- Backend menggunakan PHP murni tanpa framework.
- Frontend menggunakan XHTML, CSS, dan JavaScript.
- Halaman utama dan form pendaftaran pengguna.
- Validasi input di sisi JavaScript dan PHP.
- Penyimpanan data registrasi ke MySQL melalui PDO.
- Password disimpan dalam bentuk hash menggunakan `password_hash()`.

Halaman login masih berupa kerangka tampilan; proses autentikasi login belum diaktifkan.
