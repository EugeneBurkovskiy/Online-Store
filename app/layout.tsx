import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Online-Store',
  description: 'Online Store',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
