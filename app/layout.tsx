import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Learn Dashboard built with App Router.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}
        {/* <p className={lusitana.className}>Try</p> */}
        <SpeedInsights />
        <Analytics />
      </body>
      
    </html>
  );
}
