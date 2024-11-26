import Link from 'next/link'

interface AnimatedLinkProps {
  href: string
  children: React.ReactNode
}

export default function AnimatedLink({ href, children }: AnimatedLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-medium"
    >
      {children}
    </Link>
  )
}

