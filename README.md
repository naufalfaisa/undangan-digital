# UndangKito - Undangan Pernikahan Digital

![alt text](/public/images/readme.png)

Sebuah website undangan digital pernikahan yang elegan dan modern, dibangun dengan Next.js dan Tailwind CSS.

## Fitur

- **Desain Responsif** - Tampilan optimal di semua perangkat (desktop, tablet, mobile)
- **Multiple Templates** - Berbagai pilihan desain undangan:
  - Elegant Gold
  - Floral Pastel
  - Minimalist Blue
- **Detail Template** - Setiap template memiliki halaman detail dengan:
  - Galeri gambar interaktif
  - Preview informasi acara
  - Fitur unggulan
  - Demo undangan
  - Template serupa
- **Navigasi Smooth** - Smooth scrolling antar section
- **Mobile Menu** - Hamburger menu untuk tampilan mobile
- **Integrasi WhatsApp** - Tombol kontak langsung ke WhatsApp
- **Section Lengkap**:
  - Hero Section
  - Katalog Desain
  - Keunggulan (Why Choose Us)
  - Cara Pemesanan
  - Kontak

## Teknologi

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Bahasa**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: 
  - [Lucide React](https://lucide.dev/)
  - [React Icons](https://react-icons.github.io/react-icons/)
  - [Font Awesome](https://fontawesome.com/)
- **Fonts**: 
  - Poppins (Sans-serif)
  - Playfair Display (Serif)

## Instalasi

### Prasyarat

- Node.js 20.x atau lebih tinggi
- npm, yarn, pnpm, atau bun

### Langkah Instalasi

1. Clone repository ini:
```bash
git clone <repository-url>
cd undangan-digital
```

2. Install dependencies:
```bash
npm install
# atau
yarn install
# atau
pnpm install
# atau
bun install
```

3. Jalankan development server:
```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```

4. Buka browser dan akses [http://localhost:3000](http://localhost:3000)

## Struktur Project

```
undangan-digital/
├── app/
│   ├── katalog/
│   │   ├── elegant-gold/
│   │   │   └── page.tsx
│   │   ├── floral-pastel/
│   │   │   └── page.tsx
│   │   ├── minimalist-blue/
│   │   │   └── page.tsx
│   │   └── blank/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── HowToOrderSection.tsx
│   ├── KatalogSection.tsx
│   ├── Navbar.tsx
│   └── WhyChooseUsSection.tsx
├── public/
│   ├── images/
│   │   ├── elegant-gold/
│   │   ├── floral-pastel/
│   │   └── minimalist-blue/
│   ├── logo.png
│   └── logo.svg
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build project untuk production
- `npm run start` - Menjalankan production server
- `npm run lint` - Menjalankan ESLint untuk code linting

## Kustomisasi

### Menambah Template Baru

1. Buat folder baru di `app/katalog/[nama-template]/`
2. Buat file `page.tsx` dengan struktur yang sama seperti template lainnya
3. Tambahkan gambar template di `public/images/[nama-template]/`
4. Update `katalogData` di `components/KatalogSection.tsx`

### Mengubah Warna Tema

Edit file `app/globals.css` dan ubah variable CSS atau konfigurasi Tailwind.

### Mengubah Font

Edit `app/layout.tsx` dan ganti font dari `next/font/google`.

## Link Penting

- **Demo**: [UndangKito](https://undangkito.web.id)
- **Email**: undangkito@gmail.com
- **Instagram**: [@UndangKito](https://instagram.com/undangkito)

## Deployment

### Deploy ke Vercel

Cara termudah untuk deploy aplikasi Next.js adalah menggunakan [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push code ke GitHub repository
2. Import project di [Vercel](https://vercel.com)
3. Vercel akan otomatis mendeteksi Next.js dan deploy

Lihat [dokumentasi deployment Next.js](https://nextjs.org/docs/app/building-your-application/deploying) untuk detail lebih lanjut.

## Resource

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

Copyright © 2025 UndangKito. All rights reserved.

## Kontribusi

Kontribusi, issues, dan feature requests sangat diterima!

---

Dibuat dengan cinta untuk momen spesial Anda
