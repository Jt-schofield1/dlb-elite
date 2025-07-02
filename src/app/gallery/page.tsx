import { Metadata } from 'next'
import Image from 'next/image';
import InstagramIcon from '../../components/InstagramIcon';

export const metadata: Metadata = {
  title: 'Gallery | DLB Elite',
  description: 'From 2x All-Conference player to elite trainer - see Camden White&apos;s football journey and how it shaped DLB Elite training philosophy.',
}

export default function Gallery() {
  // Camden's Football Journey Images
  const collegeImages = [
    { src: '/gallery/image3.jpeg', alt: 'Camden White College Football', caption: 'College Defensive Line Dominance' },
    { src: '/gallery/image9.jpeg', alt: 'Camden White All-Conference', caption: '2x All-Conference Recognition' },
    { src: '/gallery/image10.jpeg', alt: 'Camden White Game Action', caption: 'Elite Game Performance' },
    { src: '/gallery/image15.jpeg', alt: 'Camden White Training', caption: 'Dedication to Excellence' },
  ];

  // Training Philosophy Images
  const philosophyImages = [
    { src: '/gallery/image8.jpeg', alt: 'DLB Elite Training Philosophy', caption: 'From Experience to Excellence' },
    { src: '/gallery/10.jpeg', alt: 'Position Specific Training', caption: 'Position-Specific Mastery' },
    { src: '/gallery/13.jpeg', alt: 'Mental Toughness Training', caption: 'Building Mental Fortitude' },
    { src: '/gallery/15.jpeg', alt: 'Technique Development', caption: 'Perfecting Technique' },
  ];

  // Current Training Sessions
  const trainingImages = [
    { src: '/gallery/image4.jpeg', alt: 'DLB Elite Training Session', caption: 'Elite Training in Action' },
    { src: '/gallery/image5.jpeg', alt: 'Defensive Line Drills', caption: 'Defensive Line Fundamentals' },
    { src: '/gallery/image13.jpeg', alt: 'Linebacker Training', caption: 'Linebacker Development' },
    { src: '/gallery/image14.jpeg', alt: 'Group Training Session', caption: 'Team Building & Technique' },
    { src: '/gallery/image15.jpeg', alt: 'Individual Coaching', caption: 'Personal Attention' },
    { src: '/gallery/image16.jpeg', alt: 'Advanced Techniques', caption: 'Advanced Skill Development' },
  ];

  // Success Stories
  const successImages = [
    { src: '/gallery/9.jpeg', alt: 'Training Results', caption: 'Proven Results' },
    { src: '/gallery/8.jpeg', alt: 'Athlete Development', caption: 'Next-Level Athletes' },
    { src: '/gallery/14.jpeg', alt: 'DLB Elite Legacy', caption: 'Building Champions' },
    { src: '/gallery/12.jpeg', alt: 'Training Excellence', caption: 'Championship Mindset' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-black text-white px-4 sm:px-6 py-16 sm:py-20 lg:py-24" style={{ zIndex: 1 }} data-animate>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
             The <span className="text-yellow-400">DLB Elite</span> Journey
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed px-2">
             Follow Camden White&apos;s journey from 2x All-Conference defensive player to the founder of DLB Elite.
             From college excellence to creating champions - this is the story behind the training.
          </p>
        </div>
      </section>

      {/* College Excellence Section */}
      <section className="relative w-full bg-white px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }} data-animate>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-black leading-tight">The Foundation: College Excellence</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                             Camden&apos;s elite college career as a 2x All-Conference defensive player laid the foundation for understanding 
              what it takes to dominate at the highest levels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {collegeImages.map((image, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    width={600} 
                    height={400} 
                    className={`object-cover w-full h-80 sm:h-96 group-hover:scale-105 transition-transform duration-500 ${
                      i === 0 ? 'object-[50%_25%]' : 
                      i === 1 ? 'object-[50%_25%]' : 
                      i === 2 ? 'object-[50%_25%]' : 
                      'object-center'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold">{image.caption}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative w-full bg-gray-50 px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }} data-animate>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-black leading-tight">
                             <span className="text-yellow-400">&ldquo;Adversity is the Advantage&rdquo;</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                             Camden&apos;s philosophy was forged through real adversity and real success. Every challenge became fuel for growth, 
              every setback became a setup for a comeback. This mindset now drives every DLB Elite training session.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {philosophyImages.map((image, i) => (
              <div key={i} className="group overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    width={400} 
                    height={300} 
                    className={`object-cover w-full group-hover:scale-105 transition-transform duration-500 ${
                      i === 0 ? 'h-80 object-center' : 
                      i === 1 ? 'h-80 object-top sm:object-center' : 
                      i === 2 ? 'h-80 object-center' : 
                      'h-80 object-top'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-sm font-bold">{image.caption}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Training Excellence */}
      <section className="relative w-full bg-white px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }} data-animate>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-black leading-tight">DLB Elite Training in Action</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how Camden&apos;s elite playing experience translates into world-class training. Every drill, every technique, 
              every moment is designed to build champions who thrive under pressure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {trainingImages.map((image, i) => (
              <div key={i} className="group overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    width={400} 
                    height={300} 
                    className={`object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500 ${
                      i === 0 ? 'object-center' : 
                      i === 1 ? 'object-center' : 
                      i === 2 ? 'object-center' : 
                      'object-top'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-base font-bold">{image.caption}</h3>
                    <p className="text-sm opacity-90">Elite-level instruction</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative w-full bg-black text-white px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }} data-animate>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">Building the Next Generation</h2>
            <p className="text-base sm:text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
              From Camden&apos;s playing days to today&apos;s training sessions, the mission remains the same: 
              turn adversity into advantage and create elite defensive players who dominate the field.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
            {successImages.map((image, i) => (
              <div key={i} className="group overflow-hidden rounded-xl shadow-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    width={400} 
                    height={300} 
                    className={`object-cover w-full h-72 sm:h-80 group-hover:scale-105 transition-transform duration-500 ${
                      i === 1 ? 'object-center sm:object-top' : 'object-top'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold mb-2">{image.caption}</h3>
                    <p className="text-sm opacity-90">Championship-level results</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Follow Section */}
      <section className="relative w-full bg-yellow-400 text-black px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }} data-animate>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">Want to See More?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Follow @dlb_elite on Instagram for daily training content, athlete spotlights, 
            and behind-the-scenes looks at elite defensive line and linebacker development.
          </p>
          <a 
            href="https://www.instagram.com/dlb_elite?utm_source=ig_web_button_share_sheet&igsh=MTVlaDVweGkzNW1zMg=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-black text-white font-bold px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            <InstagramIcon size={28} />
            <span>Follow @dlb_elite</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>

      {/* The DLB Elite Difference */}
      <section className="relative w-full bg-yellow-400 text-black px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }} data-animate>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 leading-tight">Why Camden&apos;s Experience Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
            <div className="bg-black/10 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Real Playing Experience</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                As a 2x All-Conference player, Camden knows what it takes to perform at elite levels. 
                He&apos;s been where your athletes want to go.
              </p>
            </div>
            <div className="bg-black/10 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Adversity-Tested Methods</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                Every training technique has been battle-tested through real game situations and real challenges. 
                No theoretical coaching here.
              </p>
            </div>
            <div className="bg-black/10 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Position-Specific Mastery</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                Exclusive focus on defensive line and linebacker positions means deeper expertise 
                and more targeted skill development.
              </p>
            </div>
            <div className="bg-black/10 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Proven Results</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                The combination of elite playing experience and proven training methods creates 
                athletes who don&apos;t just play better - they dominate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative w-full bg-black text-white px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }} data-animate>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">Ready to Turn Your Adversity into Advantage?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed px-2">
            Join the elite. Train with someone who&apos;s been there, done that, and is dedicated to helping you dominate. 
            Your journey to elite-level performance starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <a 
              href="/training" 
              className="w-full sm:w-auto bg-yellow-400 text-black font-bold px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg rounded-full hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl touch-manipulation text-center"
            >
              Start Your Elite Training
            </a>
            <a 
              href="/contact" 
              className="w-full sm:w-auto border-2 border-white text-white font-semibold px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg rounded-full hover:bg-white hover:text-black transition-colors duration-300 touch-manipulation text-center"
            >
              Meet Camden
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 