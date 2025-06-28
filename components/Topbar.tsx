// components/dashboard/Topbar.tsx
export default function Topbar() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">Dashboard Overview</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Welcome, Victor</span>
        <img
          src="/images/avatar.png"
          alt="avatar"
          className="h-8 w-8 rounded-full border"
        />
      </div>
    </header>
  )
}
