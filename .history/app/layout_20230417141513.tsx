import * as React from 'react'

import { Providers } from './Provider'
import './globals.css'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import ClientOnly from '@/components/ClientOnly'
import RegisterModal from '@/components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from '@/components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from '@/components/modals/RentModal'

export const metadata = {
  openGraph: {
  title: 'ZechTravel - Home',
  description: 'Generated by create next app',
  images: [
    {
      url: '/public/images/Logo.png',
      width: 800,
      height: 600,
    }
  ]
}}


export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html>
      <head>
      </head>

      <body>
          <ClientOnly>
            <ToasterProvider />
            <RegisterModal />
            <LoginModal/>
            <RentModal/>
            <Navbar currentUser={currentUser} />
          </ClientOnly>
          <div className='pb-20 pt-28'>
            {children}
          </div>
          <Footer/>
      </body>
    </html>
  )
}