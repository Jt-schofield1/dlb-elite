import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About | DLB Elite',
  description: 'Learn about Camden White and DLB Elite - elite training for defensive linemen and linebackers. Adversity is the Advantage.',
}

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-black text-white px-4 sm:px-6 py-16 sm:py-20 lg:py-24" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto text-center" data-animate>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">About DLB Elite</h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed px-2">
            Founded by former 2x college All-Conference DL/LB Camden White, DLB Elite is dedicated to transforming 
            defensive linemen and linebackers through elite-level training and mentorship.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative w-full bg-white px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto" data-animate>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-black leading-tight">Meet the Founder</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Camden's Photo */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/gallery/image7.jpeg"
                  alt="Camden White - CEO & Founder of DLB Elite"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                  priority
                />
                                 {/* Decorative border */}
                 <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl -z-10 opacity-60"></div>
              </div>
            </div>

            {/* Camden's Bio */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-2">Camden White</h3>
                <p className="text-lg sm:text-xl text-yellow-600 font-semibold mb-4">CEO & Founder, DLB Elite</p>
                <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
              </div>
              
              <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p>
                  <strong>2x College All-Conference Defensive Line/Linebacker</strong> with a passion for developing 
                  the next generation of elite defensive players. Camden&apos;s journey from college standout to elite 
                  trainer is built on one core belief: <em className="text-yellow-600 font-semibold">&ldquo;Adversity is the Advantage.&rdquo;</em>
                </p>
                <p>
                  Having faced and overcome countless challenges throughout his playing career, Camden understands 
                  what it takes to excel at the defensive line and linebacker positions. His firsthand experience 
                  at the collegiate level gives him unique insight into the technical skills, mental toughness, 
                  and relentless effort required to dominate on the field.
                </p>
                <p>
                  Through DLB Elite, Camden combines his proven playing experience with innovative training methods 
                  to create athletes who don&apos;t just survive pressure situations—they thrive in them.
                </p>
              </div>

              {/* Credentials */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-black mb-3">Credentials</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    2x College All-Conference Defensive Line/Linebacker
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Specialized Position-Specific Training Expert
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Elite Athletic Development Coach
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative w-full bg-gray-50 px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto" data-animate>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-black leading-tight">Our Story</h2>
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <div className="prose max-w-none text-gray-700 text-base sm:text-lg leading-relaxed space-y-4 sm:space-y-6">
              <p>
                <strong>DLB Elite</strong> is a specialized Elite athlete development brand dedicated to training 
                Defensive linemen and Linebackers. Founded by a former 2X college All‑Conference DL/LB, 
                DLB Elite focuses on position‑specific drills and training maximizing relentless effort.
              </p>
              <p>
                The brand operates through Elite level training out of Lewis Fitness & Performance, with a bold 
                identity rooted in the philosophy that <em className="text-yellow-400 font-semibold">&ldquo;Adversity is the Advantage.&rdquo;</em>
              </p>
              <p>
                Our approach combines technical precision with mental toughness, creating athletes who don&apos;t just 
                survive pressure situations - they thrive in them. Every drill, every technique, and every training 
                session is designed to build the complete defensive player.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative w-full bg-white px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto" data-animate>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-black leading-tight">Our Mission</h2>
          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              At <strong>DLB Elite</strong>, our mission is to train and elevate defensive front athletes with the 
              mindset, mechanics, and mentorship to dominate through discipline. To utilize the upbringings and 
              experiences of the athlete as the advantage in a competitive environment. DLB Elite exists to make 
              the hard path the proven path, equipping young athletes with tools that transcend the field. To become 
              the nation&rsquo;s most respected and results‑driven brand for defensive line and linebacker training 
              — by providing real reps, real results, and real mentorship rooted in lived experience.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative w-full bg-gray-50 px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto" data-animate>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-black leading-tight">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md">
              <div className="bg-yellow-400 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-black">Relentless Effort</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Pushing beyond limits in every training session, every rep, every moment.</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md">
              <div className="bg-yellow-400 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-black">Adversity‑Built</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Using challenges as fuel for growth and competitive advantage.</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md">
              <div className="bg-yellow-400 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-black">Position Precision</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Specialized training focused exclusively on DL and LB techniques.</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md sm:col-span-2 lg:col-span-1">
              <div className="bg-yellow-400 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-black">Brotherhood Culture</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Building lasting bonds through shared adversity and achievement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative w-full bg-black text-white px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto text-center" data-animate>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">Ready to Experience the Advantage?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
            Join athletes who have discovered that adversity truly is the advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <a 
              href="/training" 
              className="w-full sm:w-auto bg-yellow-400 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl touch-manipulation text-center"
            >
              Explore Training
            </a>
            <a 
              href="/contact" 
              className="w-full sm:w-auto border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full hover:bg-white hover:text-black transition-colors duration-300 touch-manipulation text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 