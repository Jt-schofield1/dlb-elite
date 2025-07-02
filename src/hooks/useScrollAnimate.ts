'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function useScrollAnimate() {
  const pathname = usePathname();
  
  useEffect(() => {
    const setupIntersectionObserver = () => {
      const els = Array.from(document.querySelectorAll('[data-animate]:not(.animate)'));
      
      if (els.length === 0) return null;
      
      const obs = new IntersectionObserver(
        entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('animate');
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      
      els.forEach(el => obs.observe(el));
      return obs;
    };

    // Set up initial observer
    let observer = setupIntersectionObserver();
    
    // Set up a MutationObserver to watch for new elements being added
    const mutationObserver = new MutationObserver(() => {
      // Disconnect existing observer
      if (observer) {
        observer.disconnect();
      }
      // Set up new observer for any new elements
      observer = setupIntersectionObserver();
    });
    
    // Start observing DOM changes
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      if (observer) observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]); // Re-run when route changes
} 