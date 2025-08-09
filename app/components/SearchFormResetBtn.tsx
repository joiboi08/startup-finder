"use client";   // isolated client func here so its parent can still be server side rendered

import Link from 'next/link';
import React from 'react'

const SearchFormResetBtn = () => {

    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement; 

        if (form) {
            form.reset();
        }
    }

  return (
    <button type="reset" onClick={reset}>
        <Link href="/" className='search-btn text-white'>
            x
        </Link>
    </button>
  )
}

export default SearchFormResetBtn