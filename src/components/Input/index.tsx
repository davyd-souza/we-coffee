// DEPENDENCY
import { InputHTMLAttributes, forwardRef } from 'react'

// TYPE
type InputProps = InputHTMLAttributes<HTMLInputElement> & {}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref,
) {
  return (
    <input
      {...props}
      ref={ref}
      className="w-full p-2 border-2 border-primary-600 outline-none placeholder:text-neutral-400 [&:not(:disabled)]:hocus:border-primary-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all peer/input"
    />
  )
})
