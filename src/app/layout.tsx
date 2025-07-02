import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';
import ClientWrapper from '../components/ClientWrapper';

export const metadata = {
  title: 'DLB Elite - Defensive Line & Linebacker Training',
  description: 'Elite football training for defensive linemen and linebackers with Camden White. Adversity is the Advantage.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-black min-h-screen">
        <ClientWrapper>
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
          <Toaster 
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#000',
                color: '#fff',
              },
            }} 
          />
        </ClientWrapper>
      </body>
    </html>
  );
}
