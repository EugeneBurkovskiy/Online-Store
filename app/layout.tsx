import './globals.css';
import { Roboto } from 'next/font/google';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Container from '@/components/Container/Container';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Online-Store',
  description: 'Online Store',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} flex justify-center items-center flex-col min-h-screen`}
      >
        <Header />
        <main className="grow w-full">
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
