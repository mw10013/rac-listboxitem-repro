import type { Route } from './+types/_index'
import * as Rac from 'react-aria-components'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'rr-rac' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <Rac.ListBox
        aria-label="Favorite animal"
        selectionMode="single"
        className="w-fit rounded-md border p-1 shadow-md">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <MyListBoxItem key={i}>{i}:</MyListBoxItem>
          ))}
      </Rac.ListBox>
    </div>
  )
}

const MyListBoxItem = ({
  children,
  ...props
}: Omit<Rac.ListBoxItemProps, 'children'> & {
  children: React.ReactNode
}) => (
  <Rac.ListBoxItem {...props} className="group flex gap-1 outline-none">
    {children}
    <div className="px-1 group-data-[selected]:bg-accent group-data-[selected]:text-accent-foreground">
      data-selected
    </div>

    <div className="px-1 group-focus:bg-accent group-focus:text-accent-foreground">
      focus:
    </div>
    <div className="px-1 group-focus-visible:bg-accent group-focus-visible:text-accent-foreground">
      focus-visible:
    </div>
    <div className="px-1 group-hover:bg-accent group-hover:text-accent-foreground">
      hover:
    </div>
    <div className="px-1 group-data-[focused]:bg-accent group-data-[focused]:text-accent-foreground">
      data-focused
    </div>
    <div className="px-1 group-data-[focus-visible]:bg-accent group-data-[focus-visible]:text-accent-foreground">
      data-focus-visible
    </div>
    <div className="px-1 group-data-[hovered]:bg-accent group-data-[hovered]:text-accent-foreground">
      data-hovered
    </div>
  </Rac.ListBoxItem>
)
