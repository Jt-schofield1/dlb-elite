import React from 'react';

interface Props {
  title: string;
  price?: string;
  priceRange?: string;
  bullets: string[];
}

export default function PackageCard({ title, price, priceRange, bullets }: Props) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 w-full">
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3 leading-tight">{title}</h3>
      <p className="text-yellow-600 font-semibold mb-3 sm:mb-4 text-base sm:text-lg">{price || priceRange}</p>
      <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-gray-600">
        {bullets.map((b,i) => (
          <li key={i} className="leading-relaxed text-sm sm:text-base break-words">{b}</li>
        ))}
      </ul>
    </div>
  );
} 