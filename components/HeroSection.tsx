// components/HeroSection.tsx
'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion'; // <-- IMPORT VARIANTS DI SINI
import Button from './ui/Button';
import React from 'react';

export default function HeroSection() {
  // 1. Definisikan tipe untuk containerVariants dan itemVariants
  //    Menggunakan tipe Variants dari framer-motion
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: { 
            staggerChildren: 0.3 
        } 
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1, 
        transition: { 
            // PASTIKAN NILAI TYPE ADALAH LITERAL STRING ('spring'), BUKAN TYPE STRING
            type: 'spring', 
            stiffness: 100 
        } 
    },
  };

  const handleScroll = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-jis-yellow/40 py-16 md:py-28 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4"
      >
        {/* Konten Teks */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 order-2 md:order-1 mt-8 md:mt-0">
          <motion.h1
            variants={itemVariants} // <-- Error terjadi di sini, tapi solusinya ada di definisi itemVariants
            className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-snug"
          >
            Segarnya Buah Asli <br />
            dalam Setiap Tegukan
            <span className="text-jis-orange"> 🍓🍍</span>
          </motion.h1>

          <motion.p
            variants={itemVariants} // <-- Error terjadi di sini
            className="text-xl text-gray-700 max-w-md mx-auto md:mx-0"
          >
            Jus buah tropis premium 100% segar, tanpa pemanis buatan, menyehatkan hari Anda.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button onClick={handleScroll}>
              Lihat Produk Kami
            </Button>
          </motion.div>
        </div>

        {/* Gambar dengan Animasi Masuk */}
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0.9 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
          className="md:w-1/2 flex justify-center order-1 md:order-2"
        >
          <Image
            src="/hero-juice.jpeg"
            alt="Jus Segar Jis Juice"
            width={550}
            height={550}
            priority
            className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 ease-in-out"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}