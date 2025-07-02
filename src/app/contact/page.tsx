import { Metadata } from 'next'
import ContactForm from '../../components/ContactForm';
import InstagramIcon from '../../components/InstagramIcon';

export const metadata: Metadata = {
  title: 'Contact | DLB Elite',
  description: 'Get in touch with Camden White for elite defensive line and linebacker training. Book your session today.',
}

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-black text-white px-4 sm:px-6 py-16 sm:py-20 lg:py-24" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto text-center" data-animate>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">Get in Touch</h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed px-2">
            Ready to take your defensive line or linebacker skills to the next level? 
            Reach out to Camden directly or use the contact form to get started.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative w-full bg-white px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }} data-animate>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 text-black leading-tight">Contact Camden White</h2>
                <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                  Ready to take your defensive line or linebacker skills to the next level? 
                  Reach out to Camden directly or use the contact form to get started.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black text-base sm:text-lg">Email</p>
                    <a 
                      href="mailto:camwhite52@icloud.com" 
                      className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm sm:text-lg break-all"
                    >
                      camwhite52@icloud.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black text-base sm:text-lg">Phone</p>
                    <a 
                      href="tel:585-356-6765" 
                      className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm sm:text-lg"
                    >
                      (585) 356-6765
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black text-base sm:text-lg">Schedule Online</p>
                    <a 
                      href="https://calendly.com/camwhite52" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm sm:text-lg"
                    >
                      Book on Calendly →
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <InstagramIcon size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-black text-base sm:text-lg">Follow & Message</p>
                    <a 
                      href="https://www.instagram.com/dlb_elite?utm_source=ig_web_button_share_sheet&igsh=MTVlaDVweGkzNW1zMg==" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm sm:text-lg"
                    >
                      @dlb_elite →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
                <h3 className="font-semibold mb-2 sm:mb-3 text-black text-lg sm:text-xl">Training Location</h3>
                <p className="text-gray-700 text-base sm:text-lg font-medium">Lewis Fitness & Performance</p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">
                  Elite training facility specializing in position-specific development
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-black leading-tight">Send a Message</h2>
              <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative w-full bg-black text-white px-4 sm:px-6 py-12 sm:py-16 lg:py-20" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto text-center" data-animate>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">Ready to Start Training?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
            Take the first step toward elite-level performance. Contact us today to discuss your training goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <a 
              href="/training" 
              className="w-full sm:w-auto bg-yellow-400 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl touch-manipulation text-center"
            >
              View Training Packages
            </a>
            <a 
              href="/about" 
              className="w-full sm:w-auto border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full hover:bg-white hover:text-black transition-colors duration-300 touch-manipulation text-center"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 