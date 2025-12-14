export default function HeroSection() {
    return (
        <section id="home" className="container mx-auto py-16 text-center max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 font-bold mb-6 font-playfair">
                Wujudkan Undangan Digital <span className="text-pink-500">Pernikahan</span> Impianmu
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
                Desain eksklusif & custom, mudah dibagikan, dan tersimpan selamanya.
                Buat momen spesialmu lebih berkesan dengan undangan digital yang elegan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#katalog" className="w-full sm:w-auto bg-pink-500 text-white px-8 py-3 rounded-full font-medium text-center inline-block">
                    Lihat Katalog
                </a>
                <a href="#cara-pemesanan" className="w-full sm:w-auto bg-white border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-pink-500 hover:text-white transition-colors text-center inline-block">
                    Cara Pemesanan
                </a>
            </div>
        </section>
    );
}