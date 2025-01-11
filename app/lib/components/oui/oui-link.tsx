import type { VariantProps } from 'tailwind-variants'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { baseStyles } from './oui-base'
import { buttonStyles } from './oui-button'

export const linkStyles = tv({
  extend: baseStyles,
  base: 'underline-offset-4',
  variants: {
    isHovered: {
      true: 'underline',
    },
  },
})

export interface LinkProps
  extends Rac.LinkProps,
    VariantProps<typeof linkStyles> {}

export const Link = ({ className, ...props }: LinkProps) => (
  <Rac.Link
    className={Rac.composeRenderProps(className, (className, renderProps) =>
      linkStyles({ ...renderProps, className })
    )}
    {...props}
  />
)

export interface LinkButtonProps
  extends Rac.LinkProps,
    VariantProps<typeof buttonStyles> {}

export const LinkButton = ({
  className,
  variant,
  size,
  ...props
}: LinkButtonProps) => (
  <Rac.Link
    className={Rac.composeRenderProps(className, (className, renderProps) =>
      buttonStyles({ ...renderProps, variant, size, className })
    )}
    {...props}
  />
)
