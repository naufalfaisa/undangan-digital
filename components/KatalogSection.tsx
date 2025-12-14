import Link from "next/link";

const katalogData = [
    {
        id: 1,
        title: "Desain Elegant Gold",
        description: "Tema elegan dengan aksen emas yang anggun.",
        price: "Rp 350.000",
        image: "https://cdn.discordapp.com/attachments/1379755280371552358/1449799946000793641/Gemini_Generated_Ima..._imresizer.jpg?ex=694036eb&is=693ee56b&hm=df677f21375c31f442edafe257cb2f7533842689775d0713805b5d59adcf54f5&",
        alt: "desain 1",
        link: "/katalog/elegant-gold", // internal page Next.js
    },
    {
        id: 2,
        title: "Desain Floral Pastel",
        description: "Warna pastel lembut dengan ilustrasi bunga.",
        price: "Rp 150.000",
        image: "https://cdn.discordapp.com/attachments/1379755280371552358/1449800598202351816/Biru_Emas_dan_Merah_..._imresizer.jpg?ex=69403786&is=693ee606&hm=5ee19d1db594ae8c917b1c394f02a1c90325dcd907373730ee6cf2df9a475914&",
        alt: "desain 2",
        link: "https://wa.me/6281234567890?text=Saya+ingin+memesan+Desain+Floral+Pastel", // link eksternal (WhatsApp)
    },
    {
        id: 3,
        title: "Desain Minimalist White",
        description: "Gaya minimalis elegan untuk tema modern.",
        price: "Rp 100.000",
        image: "https://cdn.discordapp.com/attachments/1379755280371552358/1449799946000793641/Gemini_Generated_Ima..._imresizer.jpg?ex=694036eb&is=693ee56b&hm=df677f21375c31f442edafe257cb2f7533842689775d0713805b5d59adcf54f5&",
        alt: "desain 3",
        link: "/pesan/minimalist-white",
    },
];

export default function KatalogSection() {
    return (
        <section id="katalog" className="container mx-auto mt-12">
            <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Katalog Desain Undangan</h2>
                <p className="text-pink-500 text-base sm:text-lg">
                    Pilih desain favorit yang sesuai dengan tema pernikahanmu
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {katalogData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105 duration-300"
                    >
                        <img src={item.image} className="w-full aspect-[4/3] object-cover" alt={item.alt} />
                        <div className="p-5">
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                            <p className="text-xl font-semibold mb-4">{item.price}</p>

                            {item.link.startsWith("http") ? (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-pink-500 text-white py-2 rounded-lg text-sm hover:bg-pink-700 inline-block text-center"
                                >
                                    Pesan
                                </a>
                            ) : (
                                <Link href={item.link} className="w-full bg-pink-500 text-white py-2 rounded-lg text-sm hover:bg-pink-700 inline-block text-center">
                                    Pesan
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
