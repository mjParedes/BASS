import React from 'react'
import {SERVICES} from '@/constants/services'
import PromoServiceCard from './PromoServiceCard'


export default function PromoSection() {
	return (
		<section className='bg-custom-lightSlate py-28 px-2 text-white'>
			<div className='mx-auto text-center space-y-16'>
				<h2 className='text-5xl font-bold'>WHY SHOP WITH US?</h2>
				<div className='flex flex-col flex-wrap space-y-16 items-center'>
					{SERVICES.map((service, idx) => (
						<PromoServiceCard
							key={idx}
							title={service.title}
							description={service.description}
							icon={service.icon}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
