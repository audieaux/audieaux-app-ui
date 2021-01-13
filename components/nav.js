import Link from 'next/link'
import LogoMark from '../components/logo-mark.js'
import LogoText from '../components/logo-with-text.js'

const links = [
  { href: '/dashboard', label: 'Dashboard' },
]

export default function Nav() {
  return (
    <nav className="shadow-lg">
      <ul className="flex items-center justify-between p-8">
        <li className="order-2 md:order-1">
          <Link href="/">
            <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
              <h1 className="hidden">Audieaux</h1>
              <div className="">
                <LogoMark />
              </div>
            </a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4 order-1 md:order-2">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="no-underline btn-primary">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
