import Link from 'next/link'

const links = [
    { href: '/shows', label: 'Manage Shows' },
    { href: '/songs', label: 'Songs' },
    { href: '/gear', label: 'Gear List' },
]

export default function NavDash() {
    return (
        <nav className="w-1/5 pt-6 bg-primary-dark text-gray-100">
            <ul className="flex flex-col items-start justify-between order-1 md:order-2">
                {links.map(({ href, label }) => (
                    <li key={`${href}${label}`}
                        className="p-4"
                    >
                        <a href={href} className="no-underline text-left">
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
