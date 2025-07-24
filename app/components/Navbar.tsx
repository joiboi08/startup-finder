import Link from 'next/link';
import Image from "next/image";
import React from 'react'

const Navbar = () => {
  return (
    <header className='font-work-sans bg-white-500 shadow-sm px-5 py-3'>
        <nav className='flex justify-between items-center'>
            <Link href="/">
                <Image src="/earth-logo.png" alt="logo" width={60} height={40} />
            </Link>
        </nav>
    </header>
  )
}

export default Navbar