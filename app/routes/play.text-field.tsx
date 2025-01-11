import * as Oui from '~/lib/components/oui/oui-index'

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <Oui.TextField>
        <Oui.Label>Username</Oui.Label>
        <Oui.Input placeholder="username" />
        <Oui.Text slot="description">
          This is your public display name.
        </Oui.Text>
        <Oui.FieldError>Username is required.</Oui.FieldError>
      </Oui.TextField>
      <Oui.TextFieldEx
        label="Username"
        description="This is your public display name."
        errorMessage="Username is required."
      />
      <Oui.TextFieldEx
        label="Username"
        description="This is your public display name."
        errorMessage="Username is required."
        isInvalid
      />
      <Oui.TextFieldEx
        label="Username"
        description="This is your public display name."
        errorMessage="Username is required."
        textArea
      />
    </div>
  )
}
