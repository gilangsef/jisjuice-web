"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingCart, MessageCircle } from "lucide-react"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  const whatsappMessage = `Halo kak, saya mau pesan ${product.name}!`
  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-linear-to-br from-yellow-100 to-orange-100">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-orange-500">
            Populer
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-4 flex-1">{product.description}</p>

          {/* Price */}
          <div className="mb-4">
            <p className="text-2xl font-bold text-orange-500">Rp {product.price.toLocaleString("id-ID")}</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Link
              href={`/products/${product.slug}`}
              className="flex-1 bg-linear-to-r from-yellow-400 to-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} />
              Detail
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              Pesan
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
