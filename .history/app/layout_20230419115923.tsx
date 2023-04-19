import * as React from 'react'

import './globals.css'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import ClientOnly from '@/components/ClientOnly'
import RegisterModal from '@/components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from '@/components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from '@/components/modals/RentModal'
import SearchModal from '@/components/modals/SearchModal'

export const metadata = {
  title: 'ZechTravel - Home',
  description: 'Generated by create next app',
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
          <ClientOnly>
            <ToasterProvider />
            <RegisterModal />
            <SearchModal/>
            <LoginModal/>
            <RentModal/>
            <Navbar currentUser={currentUser} />
          </ClientOnly>
          <div className='pb-20 pt-28 px-10'>
            {children}
          </div>
          <Footer/>
      </body>
    </html>
  )
}