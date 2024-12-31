'use client'
import Link from 'next/link'
import { Search, ShoppingCart, User } from 'lucide-react'
import brandLogo from '../../../public/img/bass_logo.ico'
import Image from 'next/image'
import { Input } from '../ui/input'
import { Button } from '../ui/button'


export default function Header() {

	return (
		<header className='sticky top-0 z-50 bg-white p-2 sm:p-4 border-none'>
			<nav className='flex flex-col gap-8'>
				<div className='flex flex-col gap-2 items-center justify-between sm:flex-row'>
					<div className='flex items-center space-x-1'>
						<h1 className='text-xl font-bold'>
							BASS  <span className='font-medium'>LOJA</span>
						</h1>
						<Image src={brandLogo} alt='brand logo' width={24} height={24} />
					</div>
					<div className="flex w-full max-w-80 items-center space-x-2 md:max-w-96">
						<Input type="search" placeholder="Beauty hangbag" />
						<Button type="submit">
							<Search />
						</Button>
					</div>
					<div className='flex space-x-4 items-center'>
						<Link href={'/'}>
							<ShoppingCart />
						</Link>
						<Link href={'/'}>
							<User />
						</Link>
					</div>
				</div>
			</nav>
		</header>
	)
}
