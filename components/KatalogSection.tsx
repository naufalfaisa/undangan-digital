// KatalogSection.tsx
import Link from "next/link";

const katalogData = [
  {
    id: 1,
    title: "Desain Elegant Gold",
    description: "Tema elegan dengan aksen emas yang anggun.",
    image: "/images/elegant-gold/thumbnail.webp",
    alt: "desain 1",
    link: "/katalog/elegant-gold", // internal page Next.js
  },
  {
    id: 2,
    title: "Desain Floral Pastel",
    description: "Warna pastel lembut dengan ilustrasi bunga.",
    image: "/images/floral-pastel/thumbnail.webp",
    alt: "desain 2",
    link: "/katalog/floral-pastel",
  },
  {
    id: 3,
    title: "Desain Minimalist Blue",
    description: "Gaya minimalis elegan untuk tema modern.",
    image: "/images/minimalist-blue/thumbnail.webp",
    alt: "desain 3",
    link: "/katalog/minimalist-blue",
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

              {item.link.startsWith("http") ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-pink-500 text-white py-2 rounded-lg text-sm hover:bg-pink-600 inline-block text-center"
                >
                  Lihat Detail
                </a>
              ) : (
                <Link href={item.link} className="w-full bg-pink-500 text-white py-2 rounded-lg text-sm hover:bg-pink-600 inline-block text-center">
                  Lihat Detail
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
