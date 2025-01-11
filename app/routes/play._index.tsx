import type { Route } from './+types/_index'
import { Checkbox } from '~/lib/components/oui/oui-checkbox'
import * as Oui from '~/lib/components/oui/oui-index'
import { Button } from '~/lib/components/ui/button'
import { Input } from '~/lib/components/ui/input'
import { Label } from '~/lib/components/ui/label'
import { Switch } from '~/lib/components/ui/switch'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'rr-rac' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <Oui.NumberFieldEx label="Email" placeholder="Email" />
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <Oui.NumberFieldEx isDisabled placeholder="Email" />
      <Input disabled type="email" placeholder="Email" />
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Oui.NumberFieldEx placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
      <Checkbox>Accept terms and conditions</Checkbox>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Accept terms and conditions
        </label>
      </div>
      <Oui.Switch>Airplane Mode</Oui.Switch>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <Oui.Switch defaultSelected isDisabled isReadOnly />
      <Switch checked disabled aria-readonly />
      <Oui.Switch defaultSelected isDisabled>
        Wifi Mode
      </Oui.Switch>
      <div className="flex items-center space-x-2">
        <Switch id="wifi-mode" checked disabled />
        <Label htmlFor="wifi-mode">Wifi Mode</Label>
      </div>

      <Oui.Button>Oui Button</Oui.Button>
      <Button>Shadcn Button</Button>
    </div>
  )
}
