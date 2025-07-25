import Link from 'next/link';
import Image from "next/image";
import React from 'react'
import { auth, signIn } from '@/auth';
import { signOut } from 'next-auth/react';

const Navbar = async () => {

  const session = await auth();

  return (
    <header className='font-work-sans bg-white-500 shadow-sm px-5 py-3'>
        <nav className='flex justify-between items-center'>
            <Link href="/">
                <Image src="/earth-logo.png" alt="logo" width={60} height={40} />
            </Link>

            <div className="flex items-center gap-5 text-gray-700">
              
              {session && session?.user ? (
                <>
                  <Link href="startup/create">
                    Create
                  </Link>

                  <form action={async () => {
                    'use server';
                    // This is an ASYNC server action, so we can use the signOut function directly
                    await signOut(); 
                  }}>
                    <button type='submit'>
                      Logout
                    </button>
                  </form>

                  <Link href= {`/user/${session?.user?.id}`}>
                    <span>{session?.user?.id}</span>
                  </Link>


                </>
              ) : (
                <form action={async () => {
                  
                  'use server';
                  // This is an ASYNC server action, so we can use the signIn function directly

                  await signIn('github')
                  }} >
                  <button type="submit" className='flex items-center gap-2 bg-black-800 px-3 py-2 rounded-md hover:bg-gray-200 transition-colors'>
                    Login
                  </button>

                </form>
              )}

            </div>
        </nav>
    </header>
  )
}

export default Navbar



/**
 * 
 * <button onClick={signIn('github')} >
                  <Image src="/github-icon.png" alt="GitHub Icon" width={24} height={24} />
                  Sign in with GitHub
                </button>

This would not work in the server component, as `signIn` is a client-side function!!!!
To get around this, React19 allows us to use server actions in client components using action attribute in <Form> tag 
 * 
 */