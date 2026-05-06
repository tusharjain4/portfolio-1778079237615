import './globals.css';
import type { Metadata } from 'next';
import { Manrope, Source_Serif_4, DotGothic16, Archivo, Archivo_Narrow } from 'next/font/google';

// Define fonts
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif-4',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const dotGothic16 = DotGothic16({
  subsets: ['latin'],
  variable: '--font-dot-gothic-16',
  weight: ['400'], // DotGothic16 only has one weight
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const archivoNarrow = Archivo_Narrow({
  subsets: ['latin'],
  variable: '--font-archivo-narrow',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pooja R. Sonar - Software Developer Portfolio',
  description: 'Pooja R. Sonar is a Full-stack Developer passionate about architecting high-performance, real-time systems and scalable web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${sourceSerif4.variable} ${dotGothic16.variable} ${archivo.variable} ${archivoNarrow.variable} font-body bg-white text-black overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}