'use client'

import Link from 'next/link';
import {usePathname} from 'next/navigation'
import {cn} from '@/lib/utils'
import { Category } from '@/types';

interface MainNavProps {
    data: any,
}

const MainNav: React.FC<MainNavProps> = ({data}) => {

    const pathname = usePathname();

    const routes = data.map((route: any) => ({
        href: `/category/${route}`,
        label: route,
        active: pathname === `/category/${route}`
    }))


  return (
    <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
        {routes.map((route: any) => (
            <Link
                key={route}
                href={route.href}
                className={cn(
                    "text-sm font-medium transition-colors hover:text-black",
                    route.active ? "text-black underline" : "text-neutral-500"
        )}

            >
                {route.label}
            </Link>
        ))}
    </nav>
  )
}

export default MainNav