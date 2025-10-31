"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ProductCard } from "@/components/ProductsCard"
import { products } from "@/lib/products"
import { Instagram, MessageCircle, MapPin } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-yellow-50 via-orange-50 to-green-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Segarnya Buah Asli dalam Setiap Tegukan
              </motion.h1>

              <motion.p
                className="text-xl text-gray-700 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Jis Juice menghadirkan jus buah segar berkualitas tinggi dengan rasa alami yang lezat. Dibuat dari
                buah-buah pilihan terbaik untuk kesehatan Anda.
              </motion.p>

              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  href="#products"
                  className="bg-linear-to-r from-yellow-400 to-orange-500 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Lihat Produk
                </Link>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-orange-500 text-orange-500 font-bold py-3 px-8 rounded-full hover:bg-orange-50 transition-all duration-300"
                >
                  Pesan Sekarang
                </a>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 md:h-full"
            >
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}>
                <Image
                  src="/hero-juice.jpeg"
                  alt="Jis Juice"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Koleksi Produk Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pilihan jus buah segar dengan berbagai rasa yang menyegarkan dan menyehatkan
            </p>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-400 to-orange-500 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-linear-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-300">Kami siap melayani pesanan Anda dengan sepenuh hati</p>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-400 to-orange-500 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/6282139376702"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-green-500 hover:bg-green-600 p-8 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <MessageCircle size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
              <p className="text-green-100">+62 8213 9376 702</p>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-pink-500 hover:bg-pink-600 p-8 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Instagram size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Instagram</h3>
              <p className="text-pink-100">@jisjuice</p>
            </motion.a>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-orange-500 p-8 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <MapPin size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Lokasi</h3>
              <p className="text-orange-100">Lamongan, Indonesia</p>
            </motion.div>
          </div>
          
        </div>
      </section>
    </main>
  )
}
