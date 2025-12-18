// ContactSection.tsx

export default function ContactSection() {
  return (
    <section id="kontak" className="container mx-auto mt-20 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          Hubungi Kami
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Punya pertanyaan? Kami siap membantu!
        </p>
      </div>

      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-stretch">
        <a
          href="https://instagram.com/undangkito"
          className="h-full"
        >
          <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col items-center text-center transition-transform hover:scale-105">
            <i className="fa-brands fa-instagram text-4xl mb-4"></i>
            <h3 className="font-semibold text-lg mb-2">Instagram</h3>
            <p className="text-gray-600 text-sm mt-auto">@UndangKito</p>
          </div>
        </a>

        <a
          href="https://wa.me/+6282225476865?text=Saya mau sprei gratis"
          className="h-full"
        >
          <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col items-center text-center transition-transform hover:scale-105">
            <i className="fa-brands fa-whatsapp text-4xl mb-4"></i>
            <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
            <p className="text-gray-600 text-sm mt-auto">
              +6282225476865 nomor parel
            </p>
          </div>
        </a>

        <a
          href="mailto:undangkito@gmail.com"
          className="h-full"
        >
          <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col items-center text-center transition-transform hover:scale-105">
            <i className="fa-solid fa-envelope text-4xl mb-4"></i>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-gray-600 text-sm mt-auto">
              undangkito@gmail.com
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
