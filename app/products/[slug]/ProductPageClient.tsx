"use client"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, ArrowLeft, Droplet } from "lucide-react"
import { motion } from "framer-motion"

interface Product {
  slug: string
  name: string
  description: string
  price: number
  image?: string
  taste: string
  benefits: string[]
  nutrition: {
    calories: number
    vitamin: string
    fiber: string
    naturalSugar: string
  }
}

interface ProductPageClientProps {
  product: Product
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const whatsappMessage = `Halo kak, saya mau pesan ${product.name}!`
  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`

  const colorMap: Record<string, { bg: string; text: string; accent: string }> = {
    "jus-mangga": { bg: "from-orange-100 to-yellow-100", text: "text-orange-600", accent: "bg-orange-500" },
    "jus-alpukat": { bg: "from-green-100 to-emerald-100", text: "text-green-600", accent: "bg-green-500" },
    "jus-jambu": { bg: "from-pink-100 to-rose-100", text: "text-pink-600", accent: "bg-pink-500" },
    "jus-stroberi": { bg: "from-red-100 to-pink-100", text: "text-red-600", accent: "bg-red-500" },
    "jus-melon": { bg: "from-yellow-100 to-orange-100", text: "text-yellow-600", accent: "bg-yellow-500" },
    "jus-nanas": { bg: "from-yellow-100 to-amber-100", text: "text-yellow-600", accent: "bg-amber-500" },
  }

  const colors = colorMap[product.slug] || colorMap["jus-mangga"]

  return (
    <main className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors"
        >
          <ArrowLeft size={20} />
          Kembali ke Produk
        </Link>
      </div>

      {/* Product Detail */}
      <section className={`bg-linear-to-br ${colors.bg} py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md h-96 bg-white rounded-2xl shadow-lg overflow-hidden">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <p className={`text-2xl font-bold ${colors.text} mb-6`}>Rp {product.price.toLocaleString("id-ID")}</p>

              <p className="text-lg text-gray-700 mb-6">{product.description}</p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rasa</h3>
                <p className="text-gray-700">{product.taste}</p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mb-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${colors.accent} text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 flex-1`}
                >
                  <MessageCircle size={20} />
                  Pesan via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Manfaat Utama</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-4 bg-green-50 rounded-lg"
                >
                  <Droplet className={`${colors.text} shrink-0`} size={24} />
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nutrition Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Kandungan Gizi</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Kalori", value: `${product.nutrition.calories} kcal` },
                { label: "Vitamin", value: product.nutrition.vitamin },
                { label: "Serat", value: product.nutrition.fiber },
                { label: "Gula Alami", value: product.nutrition.naturalSugar },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${colors.accent} text-white p-6 rounded-xl text-center`}
                >
                  <p className="text-sm font-semibold mb-2 opacity-90">{item.label}</p>
                  <p className="text-2xl font-bold">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-yellow-400 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Siap Memesan?</h2>
            <p className="text-xl text-white mb-8 opacity-90">
              Hubungi kami sekarang untuk mendapatkan {product.name} segar
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-orange-500 font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Pesan Sekarang
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
