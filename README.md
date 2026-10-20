# ThreadsKu AI — Jualan & Affiliate

Aplikasi web statis dengan backend serverless Vercel yang memanggil Gemini API. API key hanya dibaca di server dari `GEMINI_API_KEY`, tidak pernah dikirim ke browser.

## Fitur
- Analisis AI dari nama, kategori, deskripsi, harga, target pembeli, dan tujuan konten.
- Generator hook dan utas 4/6/9 status untuk affiliate atau jualan sendiri.
- Gaya hook, CTA dan variasi baru.
- Library, kalender jadwal, pengingat browser, backup/impor JSON.
- UI responsif untuk HP.

## Deploy gratis / free tier
1. Buat akun GitHub dan Vercel, lalu buat Google AI Studio API key: https://aistudio.google.com/app/apikey
2. Unggah isi folder ini ke repository GitHub baru. **Jangan** unggah file `.env.local` atau API key.
3. Di Vercel pilih **Add New → Project**, impor repository, lalu deploy.
4. Buka project Vercel → **Settings → Environment Variables**.
5. Tambahkan `GEMINI_API_KEY` dengan API key dari AI Studio. Opsional: `GEMINI_MODEL` = `gemini-2.5-flash`.
6. Redeploy project agar variable berlaku.
7. Buka domain Vercel yang diberikan. Indikator atas harus menunjukkan `AI backend siap`.

Free tier dan kuota model bergantung pada wilayah, model, dan aturan Google yang dapat berubah. Periksa harga/kuota resmi: https://ai.google.dev/gemini-api/docs/pricing . Jangan aktifkan billing berbayar kecuali memang memahami dan menginginkannya.

## Jalankan lokal
Prasyarat Node.js 20+ dan Vercel CLI.

```bash
npm install
npm install --global vercel
cp .env.example .env.local
# Edit .env.local dan masukkan API key secara lokal; jangan commit file ini.
vercel dev
```

Buka alamat lokal yang dicetak Vercel CLI. Kalau hanya membuka `index.html` dengan file manager, endpoint `/api` tidak tersedia dan AI tidak akan bekerja.

## Catatan penting
- Data Library dan jadwal saat ini tersimpan di `localStorage` pada browser/perangkat itu saja, tidak tersinkron antarperangkat dan dapat hilang bila data browser dibersihkan.
- Pengingat hanya berjalan saat browser/situs masih berjalan dan notifikasi diizinkan. Bukan push notification server-side.
- Aplikasi tidak memposting otomatis ke Threads.
- Endpoint mempunyai batas burst sederhana per instance; serverless tidak menjamin batas global. Untuk penggunaan publik, tambahkan autentikasi, rate limit terpusat, dan batas pengeluaran.
- Gemini API free tier bisa berubah/terbatas. Jangan pernah membagikan API key.
- Jangan menulis klaim, testimoni, diskon, hasil, atau pengalaman yang tidak benar. Periksa dan edit konten AI sebelum diposting.
