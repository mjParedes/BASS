'use client'
import { ADMIN_NAVIGATION_LINKS, USER_NAVIGATION_LINKS } from '@/constants/navitgationLinks'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

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
		<nav className='w-full p-2 border-b border-gray-100 shadow'>
			{/* Desktop Navigation */}
			<ul className='hidden sm:flex justify-center items-center space-x-8 font-semibold'>
				{navLinks.map((link, idx) => (
					<li key={idx}>
						<Link href={link.href} className='hover:text-blue-600'>
							{link.label}
						</Link>
					</li>
				))}
			</ul>

			{/* Mobile Menu Button */}
			<div className='sm:hidden flex justify-end'>
				<button
					onClick={toggleMenu}
					className='p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
				>
					{menuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
				</button>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div
					ref={menuRef}
					className='absolute top-44 right-0 shadow-lg rounded-lg w-full p-4 z-50'
				>
					<ul className='flex flex-col items-center space-y-4'>
						{navLinks.map((link, idx) => (
							<li key={idx}>
								<Link
									href={link.href}
									className='block w-full text-center hover:text-blue-600'
									onClick={() => setMenuOpen(false)}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</nav>
	)
}
