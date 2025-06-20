import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import localFont from 'next/font/local';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const lufga = localFont({
  src: [
    {
      path: '../public/fonts/LufgaRegular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/LufgaBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/LufgaMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/LufgaExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-lufga',
});


export const metadata: Metadata = {
  title: "Avtive",
  description: "The Future of Networking Starts Here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lufga.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
