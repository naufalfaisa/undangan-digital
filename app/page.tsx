// src/app/page.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Komponen Server-Side untuk konten statis
export default function Home() {
  return (
    <>
      <Navbar /> {/* Client Component untuk menu interaktif */}
      
      {/* Main Content */}
      <main className="flex-1 py-8 px-4 w-full max-w-7xl mx-auto mt-20">

        {/* Hero Section */}
        <section id="home" className="container mx-auto py-16 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 font-bold mb-6 font-playfair">
            Wujudkan Undangan Digital <span className="text-rose-400">Pernikahan</span> Impianmu
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
            Desain eksklusif & custom, mudah dibagikan, dan tersimpan selamanya.
            Buat momen spesialmu lebih berkesan dengan undangan digital yang elegan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#katalog" className="w-full sm:w-auto bg-gray-800 text-white px-8 py-3 rounded-full font-medium text-center inline-block">
              Lihat Katalog
            </a>
            <a href="#cara-pemesanan" className="w-full sm:w-auto bg-gray-100 border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-800 hover:text-white transition-colors text-center inline-block">
              Cara Pemesanan
            </a>
          </div>
        </section>

        {/* Section Katalog */}
        <section id="katalog" className="container mx-auto mt-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Katalog Desain Undangan</h2>
            <p className="text-gray-600 text-base sm:text-lg">Pilih desain favorit yang sesuai dengan tema pernikahanmu</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105">
              {/* Gunakan Next.js Image component untuk optimasi jika ini adalah gambar nyata */}
              <img src="https://via.placeholder.com/400x250" className="w-full h-48 object-cover" alt="desain 1" />
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">Desain Elegant Gold</h3>
                <p className="text-gray-600 text-sm mb-4">Tema elegan dengan aksen emas yang anggun.</p>
                <p className="text-xl font-semibold text-gray-900 mb-4">Rp 100.000</p>
                <button className="w-full bg-gray-800 text-white py-2 rounded-lg text-sm hover:bg-gray-700">Pesan</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105">
              <img src="https://via.placeholder.com/400x250" className="w-full h-48 object-cover" alt="desain 2" />
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">Desain Floral Pastel</h3>
                <p className="text-gray-600 text-sm mb-4">Warna pastel lembut dengan ilustrasi bunga.</p>
                <p className="text-xl font-semibold text-gray-900 mb-4">Rp 100.000</p>
                <button className="w-full bg-gray-800 text-white py-2 rounded-lg text-sm hover:bg-gray-700">Pesan</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105">
              <img src="https://via.placeholder.com/400x250" className="w-full h-48 object-cover" alt="desain 3" />
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">Desain Minimalist White</h3>
                <p className="text-gray-600 text-sm mb-4">Gaya minimalis elegan untuk tema modern.</p>
                <p className="text-xl font-semibold text-gray-900 mb-4">Rp 100.000</p>
                <button className="w-full bg-gray-800 text-white py-2 rounded-lg text-sm hover:bg-gray-700">Pesan</button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="container mx-auto mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Kenapa Memilih Kami?</h2>
            <p className="text-gray-600 text-base sm:text-lg">Keunggulan yang membuat undangan digitalmu istimewa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Desain Eksklusif</h3>
              <p className="text-gray-600 text-sm">Setiap desain dibuat khusus untuk momen spesialmu dengan sentuhan personal.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Proses Cepat</h3>
              <p className="text-gray-600 text-sm">Undangan digital siap dalam 1-3 hari setelah konfirmasi pesanan.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Mudah Dibagikan</h3>
              <p className="text-gray-600 text-sm">Bagikan undangan melalui WhatsApp, Instagram, atau media sosial lainnya.</p>
            </div>
          </div>
        </section>

        {/* How to Order Section */}
        <section id="cara-pemesanan" className="container mx-auto mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Cara Pemesanan</h2>
            <p className="text-gray-600 text-base sm:text-lg">Proses mudah dan cepat, undanganmu siap dalam hitungan hari</p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center md:w-1/4">
              <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
              <h3 className="font-semibold mb-2">Pilih Desain</h3>
              <p className="text-gray-600 text-sm">Pilih desain yang sesuai dengan tema pernikahanmu</p>
            </div>

            {/* Arrow (visible only on md+) */}
            <div className="hidden md:flex items-center text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center md:w-1/4">
              <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h3 className="font-semibold mb-2">Konfirmasi & Bayar</h3>
              <p className="text-gray-600 text-sm">Konfirmasi pesanan dan lakukan pembayaran</p>
            </div>

            <div className="hidden md:flex items-center text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center md:w-1/4">
              <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h3 className="font-semibold mb-2">Terima Hasil</h3>
              <p className="text-gray-600 text-sm">Undangan digital siap dibagikan ke tamu undangan</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontak" className="container mx-auto mt-20 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Hubungi Kami</h2>
            <p className="text-gray-600 text-base sm:text-lg">Punya pertanyaan? Kami siap membantu!</p>
          </div>

          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
              <i className="fa-brands fa-instagram text-4xl mb-4"></i> {/* Icons Font Awesome dipertahankan via CDN di layout.js */}
              <h3 className="font-semibold text-lg mb-2">Instagram</h3>
              <p className="text-gray-600 text-sm">@username_instagram</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
              <i className="fa-brands fa-whatsapp text-4xl mb-4"></i>
              <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
              <p className="text-gray-600 text-sm">+62 812 3456 7890</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
              <i className="fa-solid fa-envelope text-4xl mb-4"></i>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-gray-600 text-sm">email@domain.com</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}