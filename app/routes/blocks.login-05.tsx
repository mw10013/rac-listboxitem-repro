import { OuiLoginForm } from '~/lib/components/oui-login-form-05'

export default function RouteComponent() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <OuiLoginForm />
      </div>
    </div>
  )
}