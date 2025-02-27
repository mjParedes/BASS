import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

interface FilterDropProps {
	title: string
	options: string[]
	selected: string | null
	onSelect: (value: string) => void
}

export default function FilterDropdown({ title, options, selected, onSelect }: FilterDropProps) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button className='flex items-center gap-2 border rounded-full px-4 py-2 text-sm'>
					{title} <ChevronDown className='h-4 w-4' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='flex items-center justify-start  w-[180px] p-2'>
				<div className='flex flex-col justify-center items-start flex-wrap space-y-2'>
					{options.map((option) => (
						<Label
							key={option}
							className='flex justify-between items-center gap-2 cursor-pointer'
						>
							<Input
								type='radio'
								name={title}
								value={option}
								checked={selected === option}
								onChange={() => onSelect(option)}
								className='text-primary focus:ring-primary w-8 h-8'
							/>
							<span className='text-sm'>{option}</span>
						</Label>
					))}
				</div>
			</PopoverContent>
		</Popover>
	)
}
