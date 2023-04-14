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
  title: 'ZechTravel - Home',
  description: 'Generated by create next app',
  image
}


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
        <Providers>
          <ClientOnly>
            <ToasterProvider />
            <RegisterModal />
            <LoginModal/>
            <RentModal/>
            <Navbar currentUser={currentUser} />
          </ClientOnly>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}