/* eslint-disable linebreak-style */
import { Nunito } from 'next/font/google'
import '@/app/global.css'
import TopMenu from '@/components/menu/TopMenu'
import Footer from '@/components/footer/Footer'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={nunitoFont.className}>
            <body className="antialiased min-h-screen">
                <div className="hidden lg:block h-full sticky top-0 ">
                    <TopMenu language={'en'} />
                </div>
                {children}
                <div className='w-full'>
                    <Footer language={'en'} />
                </div>
            </body>
        </html>
    )
}

export const metadata = {
    title: 'tito | online shop',
    description: 'online clothing store',
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
}

export default RootLayout
