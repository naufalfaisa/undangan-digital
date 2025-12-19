// WhyChooseUsSection.tsx

export default function WhyChooseUsSection() {
  return (
    <section className="container mx-auto mt-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Kenapa Memilih UndangKito?</h2>
        <p className="text-gray-600 text-base sm:text-lg">Alasan ratusan pasangan mempercayakan undangan pernikahan digital mereka kepada UndangKito</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">Desain Elegan & Personal</h3>
          <p className="text-gray-600 text-sm">Setiap desain dibuat khusus untuk momen spesialmu dengan sentuhan personal.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">Proses Cepat</h3>
          <p className="text-gray-600 text-sm">Undangan digital siap dalam 1-3 hari setelah data lengkap dikirim. Praktis, cepat, dan tanpa proses yang merepotkan.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">Mudah Dibagikan</h3>
          <p className="text-gray-600 text-sm">dapat dibagikan melalui WhatsApp, Instagram, atau media sosial lainnya hanya dengan satu link.</p>
        </div>
      </div>
    </section>
  );
}
