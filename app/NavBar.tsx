'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { HiMiniWallet } from "react-icons/hi2";
import classnames from 'classnames';


const NavBar = () => {
  const currentPath = usePathname();
  console.log(currentPath)
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Wallets', href: '/wallets' },
  ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><HiMiniWallet/></Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
            <Link key={link.href} className={classnames({
              'text-zinc-900': link.href === currentPath,
              'text-zinc-500': link.href !== currentPath,
              'hover:text-zinc-800 transition-colors': true,
            })} href={link.href}>
                {link.label}
            </Link>)}
        </ul>
    </nav>
  )
}

export default NavBar
