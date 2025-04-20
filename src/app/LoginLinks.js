/* eslint-disable linebreak-style */
'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

const LoginLinks = ({ language }) => {
    const { user } = useAuth({ middleware: 'guest' })

    const content = {
        login: {
            name: 'Login',
            href: '/login',
        },
        register: {
            name: 'Register',
            href: '/register',
        },
        logout: {
            name: 'Logout',
            href: '/logout',
        },
        dashboard: {
            name: 'Dashboard',
            href: '/dashboard',
        },
    }

    switch (language) {
        case 'tr':
            content.login.name = 'Giriş Yap'
            content.register.name = 'Kayıt Ol'
            content.logout.name = 'Çıkış Yap'
            content.dashboard.name = 'Panel'
            break
        default:
            break
    }

    return (
        <div
            className="
        text-gray-100
        
        ">
            {user ? (
                <Link href={content.dashboard.href} className="lg:text-xs">
                    {content.dashboard.name}
                </Link>
            ) : (
                <div
                    className="flex items-center justify-center 
                lg:gap-x-1
                xl:gap-x-2
                hover:text-red-500
                hover:cursor-pointer
                duration-300
                ease-in-out
                transition-all
                ">
                    <Link
                        href={content.login.href}
                        className="
                        lg:text-xs
                        xl:text-sm">
                        {content.login.name}
                    </Link>

                    <Link
                        href={content.register.href}
                        className="
                        lg:text-xs
                        xl:text-sm">
                        {content.register.name}
                    </Link>
                </div>
            )}
        </div>
    )
}

export default LoginLinks
