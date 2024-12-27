'use client'
import Link from 'next/link'
import { ShoppingCart, User } from 'lucide-react'
import brandLogo from '../../../public/img/bass_logo.ico'
import Image from 'next/image'
import { ModeToggle } from '../ModeToogle'


export default function Header() {

	return (
		<header className='p-2 sm:p-4 border-none'>
			<nav className='flex flex-col gap-8'>
				<div className='flex flex-col gap-2 items-center justify-between sm:flex-row'>
					<div className='flex items-center space-x-1'>
						<h1 className='text-xl font-bold'>
							BASS  <span className='font-medium'>LOJA</span>
						</h1>
						<Image src={brandLogo} alt='brand logo' width={24} height={24} />
					</div>
					<div className='flex'>
						<input type='search' placeholder='Busca tu producto' className='rounded border-2 border-black' />
					</div>
					<div className='flex space-x-4 items-center'>
						<Link href={'/'}>
							<ShoppingCart />
						</Link>
						<Link href={'/'}>
							<User />
						</Link>
						<ModeToggle />
					</div>
				</div>
			</nav>
		</header>
	)
}
