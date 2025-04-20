/* eslint-disable linebreak-style */
import Image from 'next/image'
import TitoLogo from '../../public/assets/images/tito.png'

export const metadata = {
    title: 'tito | online shop',
    description: 'online clothing store',
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
}

const Home = () => {
    return (
        <div className='flex flex-col items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 items-center 
        p-4
             '>
            <div className="flex flex-col items-top justify-center items-center space-y-1
            xl:space-y-3">
                <Image
                className="w-72 lg:w-96 h-full object-cover"
                src={TitoLogo}
                alt="Tito Logo"
                width={100}
                height={100}
                />
                <p className="xl:text-2xl text-gray-100 max-w-4xl text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}

export default Home
