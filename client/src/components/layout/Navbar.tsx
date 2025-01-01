'use client'
import { ADMIN_NAVIGATION_LINKS, USER_NAVIGATION_LINKS } from '@/constants/navitgationLinks'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button'

interface NavProps {
	role: string
}

export default function Navbar({ role }: NavProps) {
	const navLinks = role === 'admin' ? ADMIN_NAVIGATION_LINKS : USER_NAVIGATION_LINKS
	const [menuOpen, setMenuOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)

	const toggleMenu = () => {
		setMenuOpen((prev) => !prev)
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setMenuOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<nav className='sticky top-[124px] sm:top-[72px] z-50 bg-white w-full p-2 border-b border-gray-200 shadow'>
			{/* Desktop Navigation */}
			<ul className='hidden justify-center items-center space-x-2 font-semibold sm:flex md:space-x-4 lg:space-x-6'>
				{navLinks.map((link, idx) => (
					<Button variant={'ghost'} key={idx}>
						<Link
							href={link.href}
							className='text-base hover:font-semibold'
						>
							{link.label}
						</Link>
					</Button>
				))}
			</ul>

			{/* Mobile Menu Button */}
			<div className='sm:hidden relative flex justify-end'>
				<button
					onClick={toggleMenu}
					className='p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
				>
					{menuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
				</button>

				{/* Mobile Menu */}
				{menuOpen && (
					<div
						ref={menuRef}
						className='absolute top-12 right-0 w-full bg-white dark:bg-black  shadow-lg p-4 z-40'
					>
						<ul className='flex flex-col items-center space-y-4'>
							{navLinks.map((link, idx) => (
								<li key={idx}>
									<Link
										href={link.href}
										className='block w-full text-left text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400'
										onClick={() => setMenuOpen(false)}
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</nav>
	)
}
