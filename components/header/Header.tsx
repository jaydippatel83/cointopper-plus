'use client'; 
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';



export const Header = () => {
    const pathname =  usePathname();
    return (
        <header className="header">
            <div className='main-container inner'>
                <Link href="/" className="logo">
                    <Image src="/logo.png" alt="Cointopper-plus" width={132} height={40} />
                </Link>
                <nav className="nav">
                    <Link href="/" className={cn('nav-link',{
                        'active': pathname === '/'
                    })}>Home</Link>
                    <p>Search Modal</p>
                    <Link href="/coins" className={cn('nav-link',{
                        'active': pathname === '/coins'
                    })}>All Coins</Link> 
                </nav>
            </div>
        </header>
    );
}