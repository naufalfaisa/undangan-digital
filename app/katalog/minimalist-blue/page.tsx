'use client'

import { useState } from 'react'
import { ArrowLeft, Heart, Share2, Eye, Calendar, MapPin, Clock, Star, Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { th } from 'framer-motion/client'

export default function MinimalistBlueeDetail() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const images = [
    '/images/minimalist-blue/1.webp',
    '/images/minimalist-blue/2.webp', 
    '/images/minimalist-blue/3.webp',
    '/images/minimalist-blue/4.webp',
  ]

  const features = [
    'Desain elegan dan minimalis',
    'Animasi halus dan interaktif',
    'Galeri foto pre-wedding',
    'Peta lokasi acara',
    'Countdown timer',
    'Background music',
    'Share ke media sosial',
  ]

  return (
    <div className="min-h-screen">
      {/* Header dengan padding yang sama seperti main page */}
      <div className="container mx-auto px-4 py-4 mt-20">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors mb-6 ml-8">
          <ArrowLeft size={20} />
          <span>Kembali ke Homepage</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Image Gallery - Ukuran lebih kecil */}
          <div className="space-y-4">
            <div className="relative aspect-[3.5/5] rounded-xl overflow-hidden shadow-md bg-white border-">
              <img
                src={images[selectedImage]}
                alt="Minimalist Blue Preview"
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {selectedImage + 1} / {images.length}
              </div>
              <div className="absolute top-4 left-4 flex gap-2">
                <button className="p-2 bg-white/80 hover:bg-white rounded-full transition-colors">
                  <Heart size={16} className="text-pink-500" />
                </button>
                <button className="p-2 bg-white/80 hover:bg-white rounded-full transition-colors">
                  <Share2 size={16} className="text-gray-600" />
                </button>
              </div>
            </div>
            {/* Thumbnail Navigation - Grid kecil */}
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-[3/4] rounded-lg overflow-hidden transition-all ${
                    selectedImage === index 
                      ? 'ring-2 ring-pink-500' 
                      : 'hover:opacity-80'
                  }`}
                >
                  <img 
                    src={img}
                    alt={`Preview ${index + 1}`}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details - Style seperti card di homepage */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(999 ulasan)</span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-3 font-playfair">
                Minimalist Blue
              </h1>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-gray-800">Rp 90.000</span>
                <span className="text-lg text-gray-500 line-through">Rp 120.000</span>
                <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  25% OFF
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Undangan digital dengan desain elegan dan minimalis. 
                Desain yang sempurna untuk acara spesial dan minimalis.
              </p>
            </div>

            {/* Features - Style seperti WhyChooseUs */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Fitur Unggulan</h3>
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Preview Info - Style seperti contact card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Eye size={18} className="text-pink-500" />
                Preview Informasi
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-pink-500" />
                  <span>Rabu, 09 November 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-pink-500" />
                  <span>Akad: 08.00 WIB | Resepsi: 10.00 WIB</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-pink-500" />
                  <span>Jl Sultan Thaha Jambi </span>
                </div>
              </div>
            </div>

            {/* Action Buttons - Style seperti hero button */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="https://contoh-undangan3.vercel.app/"
                className="flex-1 bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition-colors text-center flex items-center justify-center gap-2"
              >
                <Eye size={18} />
                Lihat Demo
              </Link>
              <Link
                href="https://wa.me/6285368342347?text=Saya%20ingin%20memesan%20undangan%20digital%20Elegant%20Gold"
                className="flex-1 bg-white border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-pink-500 hover:text-white transition-colors text-center"
              >
                Pesan Sekarang
              </Link>
              
            </div>

            {/* Additional Info */}
            <div className="bg-green-50 rounded-xl p-4 text-sm">
              <div className="space-y-2 text-green-700">
                <div className="flex items-center gap-2">
                  <Check size={16} />
                  <span>Revisi unlimited hingga design selesai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} />
                  <span>Support 24/7 via WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} />
                  <span>Garansi 30 hari setelah launch</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Templates - Style seperti katalog section */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Template Serupa</h2>
            <p className="text-pink-500 text-base sm:text-lg">
              Pilih desain favorit lainnya yang sesuai dengan tema pernikahanmu
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Elegant Gold', price: '120.000', oldPrice: '150.000', link: '/katalog/elegant-gold', thumbnail: '/images/elegant-gold/thumbnail.webp' },
              { name: 'Floral Pastel', price: '70.000', oldPrice: '120.000', link: '/katalog/floral-pastel', thumbnail: '/images/floral-pastel/thumbnail.webp' },
              { name: 'Minimalist Blue', price: '110.000', oldPrice: '140.000', link: '/katalog/minimalist-blue', thumbnail: '/images/minimalist-blue/thumbnail.webp' },
            ].map((item, index) => (
              <Link key={index} href={`${item.link}`} className="block">
                <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105 duration-300">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">(89)</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-semibold">Rp {item.price}</span>
                      <span className="text-sm text-gray-500 line-through">Rp {item.oldPrice}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}