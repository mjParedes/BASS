'use client'
import Image from 'next/image'
import React from 'react'

interface PropsType {
	img: string
	title?: string
	mainTitle?: string
	price?: string
}

export default function Slide({ img }: PropsType) {
	return (
		<div className="relative flex items-center justify-between h-screen max-h-[80vh] w-full overflow-hidden">
			<Image
				className="absolute inset-0 object-scale-down- object-center"
				src={img}
				alt="banner"
				priority
				layout="fill"
			/>
		</div>
	)
}
