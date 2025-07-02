'use client';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player';
import animationData from '../../public/animations/football.json';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative w-full h-[70vh] sm:h-screen overflow-hidden" style={{ zIndex: 10 }}>
      {/* Background Image - Full Coverage with Smart Positioning */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full sm:hidden bg-black"
          style={{
            backgroundImage: 'url(/hero.jpg)',
            backgroundSize: 'contain',
            backgroundPosition: 'center 15%',
            backgroundRepeat: 'no-repeat',
            zIndex: 1
          }}
        />
        <Image 
          src="/hero.jpg" 
          alt="DLB Elite Training Background" 
          fill
          className="object-cover object-top hidden sm:block"
          style={{ zIndex: 1 }}
          priority
        />
      </div>
      
      {/* Alternative: If you prefer to fill the screen but want less aggressive cropping */}
      {/* You can uncomment this and comment out the above Image component */}
      {/* 
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero.jpg)',
          zIndex: 1
        }}
      />
      */}
      
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-black opacity-70"
        style={{ zIndex: 2 }}
      />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6" style={{ zIndex: 3 }}>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 sm:mb-8"
        >
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto">
            <Image 
              src="/logo.png" 
              alt="DLB Elite Logo" 
              fill
              className="rounded-2xl shadow-2xl object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary mb-4 sm:mb-6 max-w-4xl leading-tight px-2"
        >
          Adversity is the Advantage.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-accent mb-6 sm:mb-8 max-w-2xl px-2"
        >
          Elite training for defensive linemen and linebackers
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [20, 0, 20] }}
          transition={{ delay: 1, repeat: Infinity, duration: 4 }}
          className="mb-6 sm:mb-8"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto">
            <Lottie
              loop
              animationData={animationData}
              play
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </motion.div>

        <motion.a
          href="/training"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="inline-block bg-secondary text-primary font-bold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-lg hover:bg-yellow-600 hover:scale-105 hover:shadow-2xl transition-all duration-300 touch-manipulation"
        >
          Book a Session
        </motion.a>

        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
} 