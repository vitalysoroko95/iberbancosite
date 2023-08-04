import '@/styles/globals.css'
import type {Metadata} from 'next'
import {Inter, Mulish} from 'next/font/google'
import React from "react";
//components
import Header from '@/components/Header'
import Footer from '@/components/Footer'


const inter = Inter({subsets: ['latin'], variable: '--font-inter', weight: ['400', '600']})
const mulish = Mulish({subsets: ['latin'], variable: '--font-mulish', weight: ['400', '600', '800']})

export const metadata: Metadata = {
  title: 'Iberbanco',
  description: 'Iberbanco',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mulish.variable}`}>
      <body>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  ) 
}
