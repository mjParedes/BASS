import { Instagram, MessageCircle, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
	return (
		<footer className='bg-gradient-to-r from-gray-200 to-gray-500 p-12'>
			<div className='flex flex-col items-center gap-4'>
				<h2>We are <span className='font-semibold '>Bass Loja</span> and we aprecciate so much your oppinions</h2>
				<div className='flex space-x-4' >
					<Link href={'/'}>
						<Instagram />
					</Link>
					<Link href={'/'}>
						<Twitter />
					</Link>
					<Link href={'/'}>
						<MessageCircle />
					</Link>
				</div>
			</div>
		</footer>
	)
}

