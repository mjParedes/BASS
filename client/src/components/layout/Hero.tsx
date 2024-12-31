'use client'
import React from 'react'
import Slider from 'react-slick'
import Slide from '../Slide'


export default function Hero() {

	const settings = {
		dots: true,
		fade:true,
		infinite: true,
		speed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed:5000,
		pauseOnHover: false,
		waitForAnimate:false,
	}

	const slideData = [
		{
			id: 1,
			img: '/img/hero_image1.jpg',
			title: 'Hero Image 1',
			mainTitle: 'HIGH FASHION BAG',
			price: '$950'
		},
		{
			id: 2,
			img: '/img/hero_image2.jpg',
			title: 'Hero Image 1',
			mainTitle: 'HIGH FASHION BAG',
			price: '$950'
		},
		{
			id: 3,
			img: '/img/hero_image3.jpg',
			title: 'Hero Image 1',
			mainTitle: 'HIGH FASHION BAG',
			price: '$950'
		},
		{
			id: 4,
			img: '/img/hero_image4.jpg',
			title: 'Hero Image 1',
			mainTitle: 'HIGH FASHION BAG',
			price: '$950'
		},
		{
			id: 5,
			img: '/img/hero_image5.jpg',
			title: 'Hero Image 1',
			mainTitle: 'HIGH FASHION BAG',
			price: '$950'
		},
		{
			id: 6,
			img: '/img/hero_image6.jpg',
			title: 'Hero Image 1',
			mainTitle: 'HIGH FASHION BAG',
			price: '$950'
		}
	]

	return (
		<div className=''>
			<div className='pb-4'>
				<Slider {...settings}>
					{slideData.map((item) => (
						<Slide
							key={item.id}
							img={item.img}
							title={item.title}
							mainTitle={item.mainTitle}
							price={item.price}
						/>
					))}
				</Slider>

			</div>

		</div>
	)
}
