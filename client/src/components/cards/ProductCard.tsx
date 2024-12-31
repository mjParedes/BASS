import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '../ui/button'
import Image from 'next/image'

interface ProductProps {
	id?: string,
	name: string,
	description: string,
	image: string,
	price: number,
	stock: number,
}

export default function ProductCard({ ...data }: ProductProps) {
	const { name, description, image, price, stock } = data

	return (
		<Card className='flex flex-col justify-between w-[400px] h-[500px] p-4 border-none'>
			<CardHeader className='flex flex-col gap-2 items-center'>
				<CardTitle>
					{name}
				</CardTitle>
				<CardDescription>
					{description}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Image
					src={image}
					alt={name}
					className='w-full h-48 object-cover rounded-lg'
					width={250}
					height={400}
					/>
				<p>Price: {price}</p>
				<p>Stock: {stock}</p>
			</CardContent>
			<CardFooter className='flex justify-evenly items-center'>
				<Button className=' hover:bg-custom-slateGray hover:border-b-4 hover:border-r-4 hover:border-black'>More info</Button>
				<Button className='hover:bg-custom-slateGray hover:border-b-4 hover:border-r-4 hover:border-black'>Add to cart</Button>
			</CardFooter>
		</Card>

	)
}
