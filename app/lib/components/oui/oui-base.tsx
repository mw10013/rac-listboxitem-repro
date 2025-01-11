import { composeRenderProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

// shadcn button: focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
export const focusStyles = tv({
  variants: {
    isFocusVisible: {
      true: 'outline-none ring-1 ring-ring',
    },
  },
})

// focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
// TODO: disabledStyles: cursor-not-allowed?
export const disabledStyles = tv({
  variants: {
    isDisabled: {
      true: 'pointer-events-none opacity-50',
    },
  },
})

export const baseStyles = tv({
  variants: {
    isFocusVisible: {
      true: 'outline-none ring-1 ring-ring',
    },
    isDisabled: {
      true: 'pointer-events-none opacity-50',
    },
  },
})

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className))
}
