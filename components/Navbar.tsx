import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button';

const Navbar = () => {
    const NAV_LINKS = [
        { href: '/', key: '1', label: 'Home' },
        { href: '/', key: '2', label: 'How Hilink Work?' },
        { href: '/', key: '3', label: 'Services' },
        { href: '/', key: '4', label: 'Pricing ' },
        { href: '/', key: '5', label: 'Contact Us' },
      ];

    
  return (
    <div className='flexBetween max-container padding-container relative z-20 py-5'>
        <Link href={'/'}>
            {/* <Image src={'/hilink-logo.svg'} alt='logo' width={74} height={29} /> */}
        </Link>

        <ul className='hidden h-full gap-12 lg:flex'>
            {
                NAV_LINKS.map(link=>(
                   <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter curser-pointer pb-1.5 transition-all hover:font-bold'>{link.label}</Link>
                ))
            }
        </ul>

        <div className='lg:flexCenter hidden'>
            <Button 
                type={'button'}
                title='login'
                icon='/user.svg'
                variant='btn_dark_green'
            ></Button>
        </div>

        <Image src={'menu.svg'} alt='menu' width={32} height={32} className='inline-block curser-pointer lg:hidden'/>

    </div>
  )
}

export default Navbar