import InstagramIcon from './InstagramIcon';

export default function Footer() {
  return (
    <footer className="bg-slate text-accent py-8 sm:py-12 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">DLB Elite</h3>
            <p className="text-sm sm:text-base text-gray-300">&ldquo;Adversity is the Advantage&rdquo;</p>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">Contact Camden</h3>
            <div className="space-y-1 sm:space-y-2">
              <p className="text-sm sm:text-base">
                <a 
                  href="mailto:camwhite52@icloud.com" 
                  className="hover:text-secondary transition-colors duration-200 break-all"
                >
                  camwhite52@icloud.com
                </a>
              </p>
              <p className="text-sm sm:text-base">
                <a 
                  href="tel:585-356-6765" 
                  className="hover:text-secondary transition-colors duration-200"
                >
                  (585) 356-6765
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">Quick Links</h3>
            <div className="text-sm sm:text-base space-y-1 sm:space-y-2">
              <p>
                <a 
                  href="/training" 
                  className="hover:text-secondary transition-colors duration-200 inline-block"
                >
                  Training Packages
                </a>
              </p>
              <p>
                <a 
                  href="https://calendly.com/camwhite52" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-secondary transition-colors duration-200 inline-block"
                >
                  Book Session
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">Follow Us</h3>
            <div className="flex justify-center sm:justify-start">
              <a 
                href="https://www.instagram.com/dlb_elite?utm_source=ig_web_button_share_sheet&igsh=MTVlaDVweGkzNW1zMg=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm sm:text-base hover:text-secondary transition-colors duration-200 bg-accent/10 px-3 sm:px-4 py-2 rounded-lg hover:bg-accent/20"
              >
                <InstagramIcon size={20} />
                <span>@dlb_elite</span>
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-accent/20 my-6 sm:my-8" />
        
        <div className="text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} DLB Elite. All rights reserved.
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-xs sm:text-sm text-gray-400">
             Created by James Schofield 
          </p>
        </div>
      </div>
    </footer>
  );
} 