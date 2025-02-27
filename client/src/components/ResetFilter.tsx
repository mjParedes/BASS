import React from 'react'
import { Button } from './ui/button'
import { RefreshCw } from 'lucide-react'

interface ResetFilterProps {
	onReset: () => void
}

export default function ResetFilter({ onReset }: ResetFilterProps) {
	return (
		<Button
			className='flex items-center justify-center bg-blue-700 gap-2 rounded-full px-6 py-2 text-sm'
			onClick={onReset}
		>
			<RefreshCw className='h-4 w-4' />
		</Button>
	)
}
