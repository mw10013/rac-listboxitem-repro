import { Circle } from 'lucide-react'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { composeTailwindRenderProps, focusStyles } from './oui-base'
import { FieldError } from './oui-field-error'
import { Label, labelStyles } from './oui-label'
import { Text } from './oui-text'

export function RadioGroup(props: Rac.RadioGroupProps) {
  return (
    <Rac.RadioGroup
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex flex-col gap-2'
      )}
    />
  )
}

export interface RadioProps extends Omit<Rac.RadioProps, 'children'> {
  children?: React.ReactNode
}

export const radioStyles = tv({
  slots: {
    rootStyles: [labelStyles.base, 'flex items-center gap-2'],
    indicatorStyles:
      'aspect-square size-4 rounded-full border border-primary text-primary shadow',
    circleStyles: 'size-3.5 fill-primary',
  },
  variants: {
    isFocusVisible: {
      true: {
        indicatorStyles: focusStyles.variants.isFocusVisible.true,
      },
    },
    isDisabled: {
      true: {
        rootStyles: labelStyles.variants.isDisabled.true,
        // shadcn uses disabled:opacity-50. Use opacity-[0.714] since root (labelStyles) uses opacity-70
        indicatorStyles: 'opacity-[0.714]',
      },
    },
  },
})

export const Radio = ({ className, children, ...props }: RadioProps) => {
  const { rootStyles, indicatorStyles, circleStyles } = radioStyles({})
  return (
    <Rac.Radio
      {...props}
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        rootStyles({ ...renderProps, className })
      )}>
      {(renderProps) => (
        <>
          <div className={indicatorStyles({ ...renderProps })}>
            {renderProps.isSelected && <Circle className={circleStyles()} />}
          </div>
          {children}
        </>
      )}
    </Rac.Radio>
  )
}

export interface RadioGroupExProps
  extends Omit<Rac.RadioGroupProps, 'children'> {
  label?: string
  children?: React.ReactNode
  description?: string
  errorMessage?: string | ((validation: Rac.ValidationResult) => string)
}

export function RadioGroupEx({
  label,
  description,
  errorMessage,
  children,
  ...props
}: RadioGroupExProps) {
  return (
    <RadioGroup {...props} className="gap-3">
      <div className="mb-1 flex flex-col gap-1">
        {label && <Label className="">{label}</Label>}
        {description && <Text slot="description">{description}</Text>}
      </div>
      {children}
      <FieldError>{errorMessage}</FieldError>
    </RadioGroup>
  )
}

export const RadioGroupExRadio = ({ className, ...props }: RadioProps) => (
  <Radio
    className={composeTailwindRenderProps(className, 'gap-3 font-normal')}
    {...props}
  />
)
