import { Instagram, Mails, MessageCircle, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
	return (
		<footer className='bg-custom-fullDark pt-14 pb-6 px-4 text-white space-y-12'>
			<div className='flex flex-col items-center sm:flex-row sm:justify-around sm:items-center gap-4'>
				<div className='flex flex-col items-center space-y-6'>
					<h2 className='text-lg font-semibold'>SOCIAL NETWORK</h2>
					<ul className='flex flex-col items-center space-y-2 font-extralight'>
						<Link href={'/'}><Instagram /></Link>
						<Link href={'/'}><Twitter /></Link>
						<Link href={'/'}><MessageCircle /></Link>
						<Link href={'/'}><Mails /></Link>
					</ul>
				</div>
				<div className='flex flex-col items-center space-y-6'>
					<h2 className='text-xl font-semibold'>CATEGORIES</h2>
					<ul className='flex flex-col items-center space-y-2 font-extralight'>
						<Link href={'/'}>BAGS</Link>
						<Link href={'/'}>CLOTHES</Link>
						<Link href={'/'}>JEWELRY</Link>
						<Link href={'/'}>OTHERS</Link>
					</ul>
				</div>
				<div className='flex flex-col items-center space-y-6'>
					<h2 className='text-xl font-semibold'>FAQS</h2>
					<ul className='flex flex-col items-center  space-y-2 font-extralight'>
						<Link href={'/'}>PAYMENT</Link>
						<Link href={'/'}>DELIVERY</Link>
						<Link href={'/'}>HOT WEEK</Link>
						<Link href={'/'}>MORE</Link>
					</ul>
				</div>
			</div>
			<div className='flex items-center justify-center'>
				<h6 className='font-light'>Copyright <span className='font-semibold'>BASS LOJA</span> - 2025. All rights reserved</h6>
			</div>
		</footer>
	)
}

