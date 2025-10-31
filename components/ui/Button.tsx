// components/ui/Button.tsx
'use client';

import { motion, HTMLMotionProps, MotionProps } from 'framer-motion';
import React, { ComponentPropsWithoutRef } from 'react';

// --- TIPE ---

// Tipe dasar untuk properti yang selalu ada
type CommonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

// Tipe untuk tombol (Component = 'button')
type ButtonAsButton = CommonProps & HTMLMotionProps<'button'> & {
  href?: never; // Pastikan href tidak ada jika ini adalah tombol
};

// Tipe untuk tautan (Component = 'a')
type ButtonAsLink = CommonProps & HTMLMotionProps<'a'> & {
  href: string | null; // href diperlukan (atau setidaknya diizinkan) jika ini adalah tautan
};

// Tipe gabungan: Button dapat menjadi ButtonAsButton ATAU ButtonAsLink
export type ButtonProps = ButtonAsButton | ButtonAsLink;


// --- KOMPONEN ---

export default function Button(props: ButtonProps) {
    const { 
        children, 
        variant = 'primary', 
        className, 
        href, // Langsung destructure href
        ...rest 
    } = props as any; // Cast ke any hanya pada level destructuring untuk memisahkan props

    const baseClasses = 'px-8 py-3 font-semibold rounded-full shadow-md transition duration-300';
    const primaryClasses = 'bg-jis-orange text-white hover:bg-[#FF6F40]';
    const secondaryClasses = 'bg-white border-2 border-jis-orange text-jis-orange hover:bg-jis-orange hover:text-white';

    const classes = variant === 'primary' ? primaryClasses : secondaryClasses;

    // Tentukan komponen: motion.a jika ada href dan itu string, motion.button jika tidak
    const Component = (href && typeof href === 'string') ? motion.a : motion.button;

    // Atribut Framer Motion yang umum
    const motionAttributes: MotionProps = {
        whileHover: { scale: 1.05, boxShadow: '0 10px 15px rgba(255, 127, 80, 0.4)' },
        whileTap: { scale: 0.95 },
    };

    // Cast properti yang tersisa kembali ke tipe yang lebih spesifik untuk mencegah type conflict
    const finalProps = { 
        ...rest, 
        ...motionAttributes,
        className: `${baseClasses} ${classes} ${className}`,
        // Hanya tambahkan href jika itu adalah tautan
        ...(Component === motion.a ? { href } : {}) 
    };

    return (
        // Menggunakan ComponentPropsWithoutRef<typeof Component> untuk props yang disebar, 
        // yang secara efektif menyelesaikan konflik tipe event handler.
        <Component {...finalProps as ComponentPropsWithoutRef<typeof Component>}> 
            {children}
        </Component>
    );
}