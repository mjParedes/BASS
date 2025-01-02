import React from 'react'
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card'
import Image from 'next/image'


interface PropsService {
	title: string,
	description: string,
	icon: string
}

export default function PromoServiceCard({ title, description, icon }: PropsService) {

	return (
		<Card className='bg-trasnparent text-custom-gainsboro  border-custom-lightSlate shadow-2xl flex flex-col items-center justify-center w-[500px] h-[550px]'>
			<CardContent>
				<Image src={icon} alt='icon' width={300} height={300} className='bg-custom-gainsboro rounded-full hover:scale-110' />
			</CardContent>
			<CardHeader>
				<h2 className='text-3xl font-bold'>{title}</h2>
			</CardHeader>
			<CardDescription>
				<p className='text-lg font-light text-custom-gainsboro '>{description}</p>
			</CardDescription>
		</Card>
	)
}
