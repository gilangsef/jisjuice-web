// components/ContactSection.tsx
import React from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Pastikan komponen diekspor secara default
export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Hubungi Kami
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Kami siap melayani Anda! Pesan jus segar Anda hari ini.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Kontak WhatsApp */}
          <div className="flex flex-col items-center p-6 bg-jis-yellow/20 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <FaWhatsapp className="w-10 h-10 text-green-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp</h3>
            <p className="text-lg text-gray-700">0812-3456-7890</p>
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Jis%20Juice%2C%20saya%20mau%20bertanya%20tentang%20produk."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-jis-orange font-semibold hover:underline"
            >
              Kirim Pesan
            </a>
          </div>

          {/* Kontak Email */}
          <div className="flex flex-col items-center p-6 bg-jis-yellow/20 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <FaEnvelope className="w-10 h-10 text-red-500 mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
            <p className="text-lg text-gray-700">order@jisjuice.com</p>
            <a 
              href="mailto:order@jisjuice.com"
              className="mt-3 text-jis-orange font-semibold hover:underline"
            >
              Kirim Email
            </a>
          </div>

          {/* Lokasi */}
          <div className="flex flex-col items-center p-6 bg-jis-yellow/20 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <FaMapMarkerAlt className="w-10 h-10 text-blue-500 mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Lokasi Outlet</h3>
            <p className="text-lg text-gray-700">Jl. Buah Segar No. 12, Jakarta</p>
            <a 
              href="#" // Ganti dengan link Google Maps Anda
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-jis-orange font-semibold hover:underline"
            >
              Lihat Peta
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}