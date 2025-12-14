import Image from "next/image";

type InvitationItem = {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  description: string;
  price: number;
  features: string[];
};

const invitations: InvitationItem[] = [
  {
    id: 1,
    name: "Elegant Gold Classic",
    slug: "elegant-gold-classic",
    thumbnail: "/images/katalog/elegant-gold/classic.jpg",
    description: "Desain undangan elegan dengan nuansa gold dan tipografi klasik.",
    price: 45000,
    features: ["Kertas premium", "Finishing laminasi doff", "Free desain nama tamu"],
  },
  {
    id: 2,
    name: "Elegant Gold Floral",
    slug: "elegant-gold-floral",
    thumbnail: "/images/katalog/elegant-gold/floral.jpg",
    description: "Motif floral dengan kombinasi gold foil untuk kesan mewah.",
    price: 55000,
    features: ["Gold foil", "Amplop khusus", "Free revisi 2x"],
  },
  {
    id: 3,
    name: "Elegant Gold Minimalist",
    slug: "elegant-gold-minimalist",
    thumbnail: "/images/katalog/elegant-gold/minimalist.jpg",
    description: "Desain minimalis modern dengan aksen garis emas.",
    price: 50000,
    features: ["Layout minimalis", "Tersedia versi digital", "Free QR lokasi"],
  },
];

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ElegantGoldCatalogPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 md:px-8">
      <section className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Katalog Undangan
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Seri <span className="text-amber-600">Elegant Gold</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 md:text-base">
            Pilihan desain undangan dengan nuansa emas yang mewah dan elegan,
            cocok untuk pernikahan, tunangan, atau acara spesial lainnya.
          </p>
        </div>

        {/* Grid Katalog */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {invitations.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Thumbnail */}
              <div className="relative h-52 w-full bg-gray-100">
                <Image
                  src={item.thumbnail}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-amber-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Elegant Gold
                </span>
              </div>

              {/* Detail */}
              <div className="flex flex-1 flex-col px-4 py-4">
                <h2 className="text-base font-semibold text-gray-900 md:text-lg">
                  {item.name}
                </h2>
                <p className="mt-1 text-xs text-gray-600 md:text-sm">
                  {item.description}
                </p>

                <ul className="mt-3 space-y-1 text-xs text-gray-500 md:text-sm">
                  {item.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>

                {/* Harga & Aksi */}
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-gray-400">
                      Mulai dari
                    </p>
                    <p className="text-lg font-bold text-amber-600 md:text-xl">
                      {formatRupiah(item.price)}
                    </p>
                    <p className="text-[11px] text-gray-500">
                      per paket (isi 100 pcs)
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button className="inline-flex items-center rounded-full bg-amber-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-amber-700">
                      Lihat Detail
                    </button>
                    <button className="inline-flex items-center rounded-full border border-amber-600 px-3 py-1 text-[11px] font-medium text-amber-700 transition hover:bg-amber-50">
                      Pesan via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Catatan */}
        <p className="mt-6 text-center text-xs text-gray-500">
          Harga dapat berubah sewaktu-waktu. Untuk custom desain atau jumlah
          khusus, silakan hubungi admin kami.
        </p>
      </section>
    </main>
  );
}