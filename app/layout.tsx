import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'CAMS',
  description: 'Cash Advance Management System.',
  keywords: 'cash advance, management, system',
  // image: '/logo.png',
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}
        <SpeedInsights />
        <Analytics />
      </body>
      
    </html>
  );
}
