// HowToOrderSection.jsx
export default function HowToOrderSection() {
    return (
        <section id="cara-pemesanan" className="container mx-auto mt-20">
            <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Cara Pemesanan</h2>
                <p className="text-gray-600 text-base sm:text-lg">Proses mudah dan cepat, undanganmu siap dalam hitungan hari</p>
            </div>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center text-center md:w-1/4">
                    <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                    <h3 className="font-semibold mb-2">Pilih Desain</h3>
                    <p className="text-gray-600 text-sm">Pilih desain yang sesuai dengan tema pernikahanmu</p>
                </div>
                <div className="hidden md:flex items-center text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                <div className="flex flex-col items-center text-center md:w-1/4">
                    <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                    <h3 className="font-semibold mb-2">Konfirmasi & Bayar</h3>
                    <p className="text-gray-600 text-sm">Konfirmasi pesanan dan lakukan pembayaran</p>
                </div>
                <div className="hidden md:flex items-center text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                <div className="flex flex-col items-center text-center md:w-1/4">
                    <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                    <h3 className="font-semibold mb-2">Terima Hasil</h3>
                    <p className="text-gray-600 text-sm">Undangan digital siap dibagikan ke tamu undangan</p>
                </div>
            </div>
        </section>
    );
}
