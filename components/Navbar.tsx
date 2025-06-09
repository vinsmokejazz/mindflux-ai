import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import NavItems from './NavItems'

const Navbar = () => {
  return (
    <nav className=' navbar'>
      <Link href='/'>
        <div className='flex items-center gap-2.5 cursor-pointer'>
          <Image src="/images/logo.svg"
            alt='logo'
            width={47}
            height={44}>
          </Image>
        </div>
      </Link>

      <div className='flex items-center gap-8'>
         <NavItems/>
        <Link href={'/sign-in'}>Sign In</Link>
      </div>


    </nav>
  )
}

export default Navbar
