import { SignIn } from '@clerk/nextjs/app-beta'

export default function Page() {
  return (
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <SignIn />
    </div>
  )
}
