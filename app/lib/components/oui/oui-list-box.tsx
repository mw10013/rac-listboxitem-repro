import { Check } from 'lucide-react'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { baseStyles, composeTailwindRenderProps } from './oui-base'

/* shadcn SelectContent
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
*/

/* shadcn SelectPrimitive.Viewport
"p-1",
position === "popper" &&
  "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
*/
export function ListBox<T extends object>({
  className,
  ...props
}: Rac.ListBoxProps<T>) {
  return (
    <Rac.ListBox
      {...props}
      className={composeTailwindRenderProps(className, 'p-1')}
    />
  )
}

export const listBoxItemStyles = tv({
  extend: baseStyles,
  base: 'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none',
  variants: {
    // Rac seems to change isFocusVisible to false when isHovered is true. However, isHovered doesn't seem to impact isFocused.
    isFocused: {
      true: 'outline-none ring-1 ring-ring',
    },
    // isHovered: {
    //   true: 'bg-accent text-accent-foreground',
    // },
  },
})

// shadcn SelectItem: relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50
export const ListBoxItem = <T extends object>({
  className,
  children,
  ...props
}: Rac.ListBoxItemProps) => (
  <Rac.ListBoxItem
    {...props}
    textValue={
      props.textValue || (typeof children === 'string' ? children : undefined)
    }
    className={Rac.composeRenderProps(className, (className, renderProps) =>
      listBoxItemStyles({ ...renderProps, className })
    )}>
    {Rac.composeRenderProps(children, (children, renderProps) => (
      <>
        {renderProps.isSelected && (
          <span className="absolute right-2 flex size-3.5 items-center justify-center">
            <Check className="size-4" />
          </span>
        )}
        {children}
      </>
    ))}
  </Rac.ListBoxItem>
)
