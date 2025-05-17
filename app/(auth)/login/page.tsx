export const metadata = {
  title: 'Log in - Creative',
  description: 'Page description',
}

import Link from 'next/link'

export default function Login() {
  return (
    <>
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-[#7B3F9D]">
          JOGSOBA &apos;98
          <br />
          ASSOCIATION
          <br />
          MEMBERSHIP
          <br />
          PORTAL
        </h1>
      </div>

      {/* Form */}
      <div className="max-w-[25rem] mx-auto p-6 rounded-lg shadow-2xl bg-gradient-to-b from-zinc-100 to-zinc-50/70 relative before:absolute before:-top-12 before:-left-16 before:w-96 before:h-96 before:bg-zinc-900 before:opacity-[.15] before:rounded-full before:blur-3xl before:-z-10">

        <form>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="email">Email</label>
              <input id="email" className="form-input text-sm w-full" type="email" placeholder="mark@acmecorp.com" required />
            </div>
            <div>
              <div className="flex justify-between">
                <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="password">Password</label>
                <Link className="text-sm font-medium text-zinc-500 underline hover:no-underline ml-2" href="/reset-password">Forgot?</Link>
              </div>
              <input id="password" className="form-input text-sm w-full" type="password" required />
            </div>
          </div>
          <div className="mt-5">
            <button className="btn text-zinc-100 bg-[#7B3F9D]  w-full shadow">Log in</button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center my-5 before:border-t before:border-zinc-200 before:grow before:mr-3 after:border-t after:border-zinc-200 after:grow after:ml-3">
          <div className="text-xs text-zinc-400 italic">Or</div>
        </div>

       {/* Social login */}
<div className="flex items-center space-x-2">
  <button className="btn text-zinc-600 bg-white hover:text-zinc-900 shadow group relative flex items-center px-4 py-2">
    <div className="flex items-center">
      <svg
        className="w-4 h-4 fill-zinc-400 group-hover:fill-rose-500 shrink-0 transition"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.679 6.545H8.043v3.273h4.328c-.692 2.182-2.401 2.91-4.363 2.91a4.727 4.727 0 1 1 3.035-8.347l2.378-2.265A8 8 0 1 0 8.008 16c4.41 0 8.4-2.909 7.67-9.455Z" />
      </svg>
    </div>
    <span className="pl-3">Continue With Google</span>
  </button>

  <h2>
    <Link
      className="text-sm font-medium text-zinc-500 underline hover:no-underline"
      href="/signup"
    >
      Sign up
    </Link>
  </h2>
</div>

        <div className="text-center mt-6">
          <div className="text-xs text-zinc-500">
            By loggin in you agree with our <a className="underline hover:no-underline" href="#0">Terms</a>
          </div>
        </div>

      </div>
    </>
  )
}
