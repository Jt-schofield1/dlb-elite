'use client';
import { packages } from '../../data/packages';
import PackageCard from '../../components/PackageCard';
import dynamic from 'next/dynamic';

// Dynamically import Calendly to avoid SSR issues
const InlineWidget = dynamic(
  () => import('react-calendly').then((mod) => mod.InlineWidget),
  { ssr: false }
);

export default function Training() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-black text-white px-4 sm:px-6 py-16 sm:py-20 lg:py-24" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto text-center" data-animate>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">Elite Training Programs</h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed px-2">
            Specialized training designed to elevate defensive linemen and linebackers to the next level. 
            Every session is built around position-specific techniques and mental toughness.
          </p>
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="relative w-full bg-white px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }} data-animate>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-black leading-tight">Our Training Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-secondary">Position-Specific Excellence</h3>
              <p className="text-slate text-sm sm:text-base leading-relaxed">
                Every drill, every technique, and every training session is specifically designed for defensive linemen and linebackers. 
                We focus on the unique skills and attributes needed to dominate in the trenches and behind the line of scrimmage.
              </p>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-secondary">Adversity-Built Mindset</h3>
              <p className="text-slate text-sm sm:text-base leading-relaxed">
                We believe that adversity is the advantage. Our training pushes athletes to their limits, building the mental toughness 
                and resilience needed to excel when the pressure is highest.
              </p>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-secondary">Real Game Experience</h3>
              <p className="text-slate text-sm sm:text-base leading-relaxed">
                Learn from a coach who has been in your shoes. Our training is informed by real college-level experience and 
                proven techniques that work at the highest levels of competition.
              </p>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-secondary">Individual Development</h3>
              <p className="text-slate text-sm sm:text-base leading-relaxed">
                Whether in private sessions or small groups, we ensure every athlete gets the individual attention needed to 
                identify and improve their specific areas of growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Packages */}
      <section className="relative w-full bg-gray-50 px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }} data-animate>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4 text-black leading-tight">Choose Your Training Path</h2>
          <p className="text-center text-slate mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-2">
            Select the training package that best fits your goals and schedule. All packages include position-specific drills, 
            technique refinement, and mental conditioning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {packages.map(p => <PackageCard key={p.id} {...p} />)}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="relative w-full bg-white px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }} data-animate>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-black leading-tight">What You&apos;ll Master</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-light p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-secondary">Defensive Line Techniques</h3>
              <ul className="text-slate space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                <li>• Hand placement and leverage</li>
                <li>• Pass rush moves and counters</li>
                <li>• Run stopping fundamentals</li>
                <li>• Gap control and assignment discipline</li>
              </ul>
            </div>
            <div className="bg-light p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-secondary">Linebacker Skills</h3>
              <ul className="text-slate space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                <li>• Coverage techniques and drops</li>
                <li>• Blitz packages and timing</li>
                <li>• Run fit and pursuit angles</li>
                <li>• Read and react fundamentals</li>
              </ul>
            </div>
            <div className="bg-light p-4 sm:p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-secondary">Mental Game</h3>
              <ul className="text-slate space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                <li>• Film study and game preparation</li>
                <li>• Situational awareness</li>
                <li>• Leadership and communication</li>
                <li>• Confidence and mental toughness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="relative w-full bg-gray-50 px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }} data-animate>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-black leading-tight">Ready to Get Started?</h2>
            <p className="text-slate text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">
              Book your training session with Camden and take the first step toward elite-level performance. 
              Select a time that works for your schedule.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {process.env.NEXT_PUBLIC_CALENDLY_URL ? (
              <InlineWidget 
                url={process.env.NEXT_PUBLIC_CALENDLY_URL} 
                styles={{ height: '600px', minHeight: '500px' }}
              />
            ) : (
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-black">Schedule Your Training Session</h3>
                <p className="text-slate mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  Ready to start your elite training journey? Contact us to schedule your first session.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-secondary text-primary font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full hover:bg-yellow-600 transition-colors btn-hover touch-manipulation"
                >
                  Contact Us to Book
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
} 