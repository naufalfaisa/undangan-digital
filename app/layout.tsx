import './globals.css';
import { Poppins, Playfair_Display } from 'next/font/google';
// Menggunakan next/font untuk mengoptimalkan loading font lokal

// Konfigurasi font
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins', // Menghubungkan ke konfigurasi tailwind.config.js
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair', // Menghubungkan ke konfigurasi tailwind.config.js
});

export const metadata = {
  title: 'UndangKito | Undangan Digital Pernikahan',
  description: 'Wujudkan Undangan Digital Pernikahan Impianmu',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
    <html lang="id">
      <head>
        {/* Catatan: Font Awesome CDN dihapus, akan diganti dengan react-icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <body className={`min-h-screen bg-gray-50 text-gray-800 antialiased flex flex-col ${poppins.className} ${playfair.variable} font-poppins`}>
        {children}
      </body>
    </html>
  );
}
