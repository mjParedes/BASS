import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '../ui/button'
import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'

interface ProductProps {
	id?: string
	name: string
	description: string
	image: string
	price: number
	color?: string[]
	discount: number

}

export default function ProductCard({ ...data }: ProductProps) {
	const { name, description, image, price, color, discount } = data

	return (
		<Card className='flex flex-col items-center justify-between w-[450px] h-[660px] bg-transparent border-none'>
			<CardContent className='flex flex-col items-center justify-center'>
				<Image
					src={image}
					alt={name}
					className='object-cover object-center rounded-lg hover:scale-110 hover:rotate-6'
					width={350}
					height={350}
				/>
			</CardContent>
			<CardHeader className='text-center'>
				<CardTitle className='text-xl font-semibold text-gray-900'>{name}</CardTitle>
				<CardDescription className='text-sm text-gray-500'>{description}</CardDescription>
				<div className='flex items-center justify-center'>
					<p className='text-base font-bold text-gray-900 mt-2'>
						${price}
						{discount > 0 ? (
							<span className='text-red-500 ml-4'> {discount} % off</span>
						) : ''}
						</p>
				</div>
			</CardHeader>
			<CardFooter className='flex flex-col items-center gap-2'>
				<p>Color: {color}</p>
				<Button className='bg-black text-white w-full py-2 rounded-md transition ease-in-out duration-150'>
					<ShoppingBag />
					Add to Bag
				</Button>
			</CardFooter>
		</Card>
	)
}
