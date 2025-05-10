import cn from 'clsx'
import { forwardRef, InputHTMLAttributes } from 'react'

type TypeInput = {
	type?: 'text' | 'password' | 'number'
	placeholder: string
	error?: string
	className?: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, TypeInput>((
	{ placeholder, error, className, type = 'text', ...rest }, ref
) => {
	return (
		<div className='flex flex-col'>
			<input
				ref={ref}
				type={type}
				placeholder={placeholder}
				className={cn(className, {
					['']: error,
				})}
				{...rest}
			/>
			{error && <span className='text-red-500 mt-0.5 p-0'>{error}</span>}
		</div>
	)
})

Input.displayName = 'Input'

export default Input