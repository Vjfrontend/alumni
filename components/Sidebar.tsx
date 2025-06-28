// components/dashboard/Sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
// Simple classNames utility function
function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const links = [
  { href: '/dashboard', label: 'Home' },
  { href: '/dashboard/voting', label: 'Voting' },
  { href: '/dashboard/profile', label: 'Profile' },
  { href: '/dashboard/settings', label: 'Settings' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-green-600 text-white p-6 space-y-6">
      <div className="text-2xl font-bold mb-10">👑 Member Dashboard</div>
      <nav className="space-y-4">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'block px-4 py-2 rounded hover:bg-green-500 transition',
              pathname === href && 'bg-green-700 font-semibold'
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
