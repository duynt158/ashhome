
import './globals.css';
import clsx from 'clsx'
import { createClient } from '@/prismicio';
import type { Metadata, ResolvingMetadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export async function generateMetadata(): Promise<Metadata> {

  const client = createClient();
  const page = await client.getSingle("settings");

  return {
    title: page.data.site_title || "Ash Home Improvements",
    description: page.data.meta_description || "Ash Home Improvements is your choice for home remodeler",
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  }
}
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script defer src="/js/jquery-3.7.1.min.js"></script>
        <script defer src="/js/globals.js"></script>

      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
