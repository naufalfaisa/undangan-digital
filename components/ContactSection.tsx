// ContactSection.jsx
export default function ContactSection() {
    return (
        <section id="kontak" className="container mx-auto mt-20 mb-16">
            <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Hubungi Kami</h2>
                <p className="text-gray-600 text-base sm:text-lg">Punya pertanyaan? Kami siap membantu!</p>
            </div>
            <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
                    <i className="fa-brands fa-instagram text-4xl mb-4"></i>
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
    );
}
