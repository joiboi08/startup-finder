

import Link from 'next/link';
import Image from "next/image";
import React from 'react'
import { auth, signIn, signOut } from '@/auth';

const Navbar = async () => {

  const session = await auth();
//  console.log("session details: ", session);
  return (
    <header className='font-work-sans bg-black/80 shadow-sm px-5 py-3'>
        <nav className='flex justify-between items-center'>
            <Link href="/">
                <span className='flex items-center text-white/50'><Image src="/earth-logo.png" alt="logo" width={50} height={40} className='pr-5'/>
                Small World</span>
            </Link>

            <div className="flex items-center gap-5 text-white/50">

              {session && session.user ? (
                <> 
                  <Link href="startup/create" className='flex items-center gap-2 bg-black-800 px-3 py-2 rounded-md hover:bg-gray-200 hover:text-black transition-colors'>
                    Create
                  </Link>

                  <form action={async () => {
                    "use server"; 

                    await signOut( {redirectTo: "/"}); 
                  }}>
                    <button type='submit' className='px-3 py-2 rounded-md hover:bg-gray-200 hover:text-black transition-colors'>Logout</button>
                  </form>

                  <Link href= {`/user/@${session?.user.name}`} className='flex items-center gap-2 bg-black-800 px-3 py-2 rounded-md hover:bg-gray-200 hover:text-black transition-colors'>
                  
                    <span>{session?.user?.name}</span>
                  </Link>


                </>
              ) : (
                <form action={async () => {
                  
                  'use server';
                  // This is an ASYNC server action, so we can use the signIn function directly

                  await signIn('github')
                  }} >
                  <button type="submit" className='flex items-center gap-2 bg-black-800 px-3 py-2 rounded-md hover:bg-gray-200 hover:text-black transition-colors'>
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