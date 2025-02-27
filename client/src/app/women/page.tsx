'use client'
import React, { useState } from 'react'
import FilterDropdown from './components/FilterDropdown'
import ProductCard from '@/components/cards/ProductCard'
import products from '../../../data/mockProducts'
import ResetFilter from '@/components/ResetFilter'


export default function WomenPage() {

	const [category, setCategory] = useState<string | null>(null)
	const [productSize, setProductSize] = useState<string | null>(null)
	const [color, setIsColor] = useState<string | null>(null)

	const filteredProducts = products.filter(product => {
		if (category && !product.category.toLowerCase().includes(category.toLowerCase()))
			return false
		if (productSize && !product.size.includes(productSize))
			return false
		if (color && !product.color.includes(color))
			return false
		return true
	})

	const handleReset = () => {
		setCategory(null)
		setProductSize(null)
		setIsColor(null)
	}


	return (
		<main className='min-h-screen px-12 py-16 bg-custom-gainsboro'>
			<div className='mb-8'>
				<h2 className='text-4xl font-semibold mb-4'>Women</h2>
				<div className='flex gap-4 flex-wrap'>
					<FilterDropdown
						title='Category'
						options={['BAGS', 'CLOTHES', 'JEWELRY', 'ACCESSORIES']}
						selected={category}
						onSelect={setCategory}
					/>
					<FilterDropdown
						title='Size'
						options={['XS', 'S', 'M', 'L', 'X', 'XXL']}
						selected={productSize}
						onSelect={setProductSize}
					/>
					<FilterDropdown
						title='Color'
						options={['WHITE', 'BLACK', 'RED', 'YELLOW', 'BLUE']}
						selected={color}
						onSelect={setIsColor}
					/>
					<ResetFilter onReset={handleReset} />
				</div>
			</div>
			<div className='flex flex-col flex-wrap space-y-8 items-center justify-center sm:flex-row sm:justify-between gap-4'>
				{filteredProducts.map(product => (
					<ProductCard
						key={product.name}
						name={product.name}
						description={product.description}
						price={product.price}
						image={product.image}
						color={product.color}
						discount={product.discount}
					/>
				))}
			</div>
		</main>
	)
}
