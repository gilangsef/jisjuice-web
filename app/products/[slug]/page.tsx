"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, MessageCircle, Heart } from "lucide-react"
import { getProductBySlug } from "@/lib/products"
import { useParams } from "next/navigation"

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = getProductBySlug(slug)
  const [isFavorite, setIsFavorite] = useState(false)

  if (!product) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Produk Tidak Ditemukan</h1>
          <Link href="/" className="text-orange-500 hover:text-orange-600 font-semibold">
            Kembali ke Beranda
          </Link>
        </div>
      </main>
    )
  }

  const whatsappMessage = `Halo kak, saya mau pesan ${product.name}!`
  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <main className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold">
            <ArrowLeft size={20} />
            Kembali
          </Link>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full h-96 bg-linear-to-br from-yellow-100 to-orange-100 rounded-3xl overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              {/* Title and Price */}
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <div className="flex items-center gap-4">
                  <p className="text-4xl font-bold text-orange-500">Rp {product.price.toLocaleString("id-ID")}</p>
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="p-3 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Add to favorites"
                  >
                    <Heart size={28} className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"} />
                  </button>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{product.description}</p>

              {/* Taste */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Rasa</h3>
                <p className="text-gray-600">{product.taste}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                >
                  <MessageCircle size={24} />
                  Pesan Sekarang
                </a>
              </div>
            </motion.div>
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-16 border-t border-gray-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Manfaat Kesehatan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-linear-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-linear-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Nutrition Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-16 border-t border-gray-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Informasi Nutrisi</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-orange-200 p-6 rounded-2xl text-center"
              >
                <p className="text-gray-600 text-sm mb-2">Kalori</p>
                <p className="text-2xl font-bold text-orange-500">{product.nutrition.calories}</p>
                <p className="text-gray-500 text-xs mt-1">per 100ml</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-yellow-200 p-6 rounded-2xl text-center"
              >
                <p className="text-gray-600 text-sm mb-2">Vitamin</p>
                <p className="text-lg font-bold text-yellow-600">{product.nutrition.vitamin}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-green-200 p-6 rounded-2xl text-center"
              >
                <p className="text-gray-600 text-sm mb-2">Serat</p>
                <p className="text-lg font-bold text-green-600">{product.nutrition.fiber}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-pink-200 p-6 rounded-2xl text-center"
              >
                <p className="text-gray-600 text-sm mb-2">Gula Alami</p>
                <p className="text-lg font-bold text-pink-600">{product.nutrition.naturalSugar}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-16 border-t border-gray-200 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Siap Menikmati Kesegaran?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Pesan {product.name} sekarang dan rasakan kesegaran alami dalam setiap tegukan
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-linear-to-r from-yellow-400 to-orange-500 text-white font-bold py-4 px-12 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Pesan Sekarang
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
