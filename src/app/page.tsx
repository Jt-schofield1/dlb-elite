import { Metadata } from 'next'
import Hero from '../components/Hero';
import { packages } from '../data/packages';
import PackageCard from '../components/PackageCard';
import { PiFootballHelmet } from 'react-icons/pi';

export const metadata: Metadata = {
  title: 'Home | DLB Elite',
  description: 'Elite football training for defensive linemen and linebackers with Camden White. Adversity is the Advantage.',
}

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Hero />
      
      {/* Welcome Section */}
      <section className="relative w-full bg-gray-50 px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12" data-animate>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 leading-tight">Welcome to DLB Elite</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
              Transform your defensive game with elite-level training designed specifically for defensive linemen and linebackers. 
              Our proven methods combine technical precision with the mental toughness needed to dominate at every level.
            </p>
          </div>
        </div>
      </section>

      {/* Training Packages Section */}
      <section className="relative w-full bg-white px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto" data-animate>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4 text-black leading-tight">Our Training Packages</h2>
          <p className="text-center text-gray-600 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            Choose from our specialized training programs designed to elevate your performance and unlock your potential.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {packages.slice(0, 3).map(p => <PackageCard key={p.id} {...p} />)}
          </div>
          <div className="text-center">
            <a 
              href="/training" 
              className="inline-block bg-yellow-400 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl touch-manipulation"
            >
              View All Packages
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose DLB Elite Section */}
      <section className="relative w-full bg-gray-50 px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div data-animate>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-black leading-tight">Why Choose DLB Elite?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center p-4 sm:p-6">
                <div className="bg-yellow-400 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-black">Proven Results</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Our training methods have helped athletes achieve success at every level of football.</p>
              </div>
              <div className="text-center p-4 sm:p-6">
                <div className="bg-yellow-400 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-black">Expert Coaching</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Learn from a former 2x college All-Conference player with real game experience.</p>
              </div>
              <div className="text-center p-4 sm:p-6 md:col-span-3 lg:col-span-1">
                <div className="bg-yellow-400 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <PiFootballHelmet className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-black">Position-Specific</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Specialized training focused exclusively on defensive line and linebacker techniques.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative w-full bg-black text-white px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto text-center" data-animate>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">Ready to Transform Your Game?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
            Join the elite ranks of defensive players who have discovered that adversity truly is the advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <a 
              href="/contact" 
              className="w-full sm:w-auto bg-yellow-400 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl touch-manipulation text-center"
            >
              Get Started Today
            </a>
            <a 
              href="/about" 
              className="w-full sm:w-auto border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full hover:bg-white hover:text-black transition-colors duration-300 touch-manipulation text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
